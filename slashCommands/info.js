const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    category: "information",
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Info verir!'),
	async execute(client, interaction) {

        let date = new Date(interaction.member.joinedTimestamp)

        var botEmbed = new EmbedBuilder()
            .setTitle("Info")
            .setDescription("information about server, member and bot")
            .setColor("#0099FF")
            .addFields(
                { name: "Bot name:", value: client.user.username},
                { name: "Version:", value: "1.0.3" },
                { name: "Creator:", value: "Edwins#1025" },
                { name: "Joined at:", value: date.toLocaleString()},
                { name: "Members:", value: interaction.guild.memberCount.toString()},
            )
            .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter({ text: "bot v14", iconURL: "https://i.imgur.com/AfFp7pu.png"})
            .setAuthor({ name: interaction.member.user.username });

        await interaction.reply( { embeds: [botEmbed]});

    },
};