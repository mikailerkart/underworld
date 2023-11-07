const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, GatewayCloseCodes } = require('discord.js');
const fs = require("fs")

module.exports = {
	category: "moderation",
	data: new SlashCommandBuilder()
		.setName('warn')
		.setDescription('Bir kullanıcıyı uyarı verir.')
        .addUserOption(option =>
            option.setName('user')
                .setDescription("Bir kullancı belirtin")
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription("Bir sebep belirtin")
                .setRequired(true)),
	async execute(client, interaction) {

        if (!interaction.member.roles.cache.has('944695901031657593')) return interaction.reply({ content: "Sen warn atamazsın.", ephemeral: true});
		
        let role = await interaction.guild.roles.cache.find(r => r.name.toLowerCase() == "owner"); //berlirli rol

        let member = interaction.options.getMember("user");

        if (member.roles.cache.has(role.id)) return interaction.reply("Bu kişiye warn atamazsınız");

        let reason = await interaction.options.getString("reason");

        const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf-8"));

        if(!warns[member.id]) warns[member.id] = {
            warns: 0
        };

        warns[member.id].warns++;

        var embed = new EmbedBuilder()
            .setColor("#ff0000")
            .setTimestamp()
            .setDescription(`**Warned:** ${member.user.tag} (${member.user.id})\n**Reason:** ${reason}\n**Warned by** ${interaction.member}`)
            .addFields(
                { name: "Warnings", value: warns[member.id].warns.toString() }
    );

    await interaction.guild.channels.cache.find(c => c.name.toLowerCase() == "uyarı-log").send({embeds: [embed]});

    await member.send({embeds: [embed]}).catch(() =>{
        interaction.channel.send("Bu kişi nin DM kutusu kapalı.");
    });

    interaction.reply(`${member.user.tag} uyarıldı.`);

/*
    switch (warns[member.id].warns) {
        
        case 4: 
        
            await member.send(`**Underworld**\nBir uyarı daha ve banlanacaksınız..`).catch(() => {
            interaction.channel.send(`**${member.user.tag}** DM mesaj kutusunu kapatmış ve bu nedenle mesaj almamıştır.`)
            });

        break;
        case 5:

            await member.send(`**Underworld**\nSunucumuzdan ban yediniz..\n\n**Reason:** Çok fazla uyarı yediniz.`).catch(() => {
                interaction.channel.send(`**${member.user.tag}** DM mesaj kutusunu kapatmış ve bu nedenle mesaj almamıştır.`)
            });

            await member.ban({ days: 0, reason: "Çok fazla uyarı yedi."})

        break;
    }
*/
    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    },
};