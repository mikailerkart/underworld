const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    category: "moderation",
	data: new SlashCommandBuilder()
		.setName('lock')
		.setDescription('kanal kilitlendi.')
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
	async execute(client, interaction) {
		
        interaction.channel.permissionOverwrites.create(interaction.guild.roles.cache.find(r => r.name == "@everyone").id, {
            SendMessages: false
        });

        var embed = new EmbedBuilder()
            .setTitle("Lock")
            .setColor("FF0000")
            .setDescription(`this channel has been locked by ${interaction.member}`);

        await interaction.reply({ embeds: [embed] });

	},

};