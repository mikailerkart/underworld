const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits  } = require('discord.js');

module.exports = {
    category: "moderation",
	data: new SlashCommandBuilder()
		.setName('unban')
		.setDescription('ban açar')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addStringOption(option =>
            option.setName('id')
                .setDescription("Bir id belirtin")
                .setRequired(true)),
	async execute(client, interaction) {

        let id = await interaction.options.getString("id");

        let member;

        let bans = await interaction.guild.bans.fetch();

        if(bans.has(id)) member = bans.get(id);
        else return interaction.reply("Bu kişi banlı değil.")

        await interaction.guild.members.unban(id);

        var embed = new EmbedBuilder()
            .setColor("#00FF00")
            .setDescription(`**Member:** ${member.user.tag} (${member.user.id})\n**Eylem:** Unban`)
            .setTimestamp();

        interaction.reply(`${member.user.tag} ban kaldırıldı.`);

        await interaction.guild.channels.cache.find(c => c.name.toLowerCase() == "log").send({ embeds: [embed] });

	},
};