const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	category: "moderation",
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('mesaj silme')
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
        .addIntegerOption(option => 
            option.setName("sayı")
            .setDescription("Bir sayı girin")
            .setRequired(true)),
	async execute(client, interaction) {
		
        const sayı = await interaction.options.getInteger("sayı");
        
        interaction.channel.bulkDelete(sayı).then(() => {
       
        interaction.reply({ content: `${sayı} mesaj sildim.`, ephemeral: true })
        
        }).catch(err => {
            interaction.reply({ content: "- ve 0 mesaj silemiyorum.", ephemeral: true })
        })


	},
};