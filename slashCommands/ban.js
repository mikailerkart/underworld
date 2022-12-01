const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits  } = require('discord.js');

module.exports = {
    category: "moderation",
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('ban atar')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addUserOption(option =>
            option.setName('user')
                .setDescription("Bir kullancı belirtin")
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription("Bir sebep belirtin")
                .setRequired(true)),
	async execute(client, interaction) {

        let role = await interaction.guild.roles.cache.find(r => r.name.toLowerCase() == "owner") //belirli rol

        let member = await interaction.options.getMember("user");

        if (member.roles.cache.has(role.id)) return interaction.reply("Bu kişiyi banlayamazsınız.");

        let reason = await interaction.options.getString("reason");

        await member.send(`**Underworld**\nSunucu dan ban yediniz. \n\n **Sebep:** ${reason}`).catch(() =>{
            interaction.channel.send("Bu kişi nin DM kutusu kapalı.");
        });

        await member.ban({days: 0, reason: reason});

        var embed = new EmbedBuilder()
            .setColor("#FF0000")
            .setDescription(`**Member:** ${member.user.tag} (${member.user.id})\n**Eylem:** Ban\n**Sebep:** ${reason}`)
            .setTimestamp();

        interaction.reply(`${member.user.tag} banlandı`);

        await interaction.guild.channels.cache.find(c => c.name.toLowerCase() == "log").send({ embeds: [embed] });

	},
};