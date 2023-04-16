const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: "moderation",
	data: new SlashCommandBuilder()
		.setName('tag')
		.setDescription('tag verir.'),
	async execute(client, interaction) {
		await interaction.reply('⌁');
	},
};