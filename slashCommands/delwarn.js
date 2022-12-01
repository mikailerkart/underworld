const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, GatewayCloseCodes } = require('discord.js');
const fs = require("fs")

module.exports = {
	category: "moderation",
	data: new SlashCommandBuilder()
		.setName('delwarn')
		.setDescription('Bir kullanıcı nın uyarısını siler.')
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
        .addUserOption(option =>
            option.setName('user')
                .setDescription("Bir kullancı belirtin")
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription("Bir sebep belirtin")
                .setRequired(true)),
	async execute(client, interaction) {
		
        let role = await interaction.guild.roles.cache.find(r => r.name.toLowerCase() == "owner"); // belirli rol

        let member = interaction.options.getMember("user");

        if (member.roles.cache.has(role.id)) return interaction.reply("Bu kişiyi warn kaldıramazsın");

        let reason = await interaction.options.getString("reason");

        const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf-8"));

        if(!warns[member.id]) warns[member.id] = {
            warns: 0
        };

        warns[member.id].warns--;

        var embed = new EmbedBuilder()
            .setColor("#00FF00")
            .setTimestamp()
            .setDescription(`**Warn deleted of member:** ${member.user.tag} (${member.user.id})\n**Reason:** ${reason}\n**Warn deleted by** ${interaction.member}`)
            .addFields(
                { name: "Warnings", value: warns[member.id].warns.toString() }
    );

    await interaction.guild.channels.cache.find(c => c.name.toLowerCase() == "log").send({embeds: [embed]});

    await member.send({embeds: [embed]}).catch(() =>{
        interaction.channel.send("Bu kişi nin DM kutusu kapalı.");
    });

    interaction.reply(`${member.user.tag} ın 1 uyarı kaldırıldı.`);

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    },
};