const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    category: "moderation",
	data: new SlashCommandBuilder()
		.setName('unlock')
		.setDescription('kanal kilitlenmeden açar.')
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
	async execute(client, interaction) {
		
        interaction.channel.permissionOverwrites.create(interaction.guild.roles.cache.find(r => r.name == "@everyone").id, {
            SendMessages: true
        });

        var embed = new EmbedBuilder()
            .setTitle("Unlock")
            .setColor("FF0000")
            .setDescription(`this channel has been unlocked by ${interaction.member}`);

        await interaction.reply({ embeds: [embed] });

	},

};