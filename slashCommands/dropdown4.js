const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	category: "info",
	data: new SlashCommandBuilder()
		.setName('dropdown4')
		.setDescription('üni bölümler 3')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(client, interaction) {
	
       const row = new ActionRowBuilder().addComponents(
            new SelectMenuBuilder()
                .setCustomId('select')
                .setPlaceholder('Bir rol seç.')
                .setMinValues(0)
                .setMaxValues(5)
                .addOptions(
                    {

                        label: `Güzel sanatlar`,
                        value: "958296041021644820",
                        emoji: "🎨"
                    },
                    {
                
                        label: `Animasyon tasarım`,
                        value: "958296410921533460",
                        emoji: "👨‍💻"
                    },
                    {
                
                        label: `Fizyoterapi ve rehabilitasyon`,
                        value: "958297263258619967",
                        emoji: "💀"
                    },
                    {
                
                        label: "Eczacılık",
                        value: "958297618038009866",
                        emoji: "💊"
                    },
                    {
                        label: "Dilbilim",
                        value: "967472370631716874",
                        emoji: "🎤"
                
                    }
                
                
                )
        );
        
        await interaction.channel.send({ components: [row] });
        await interaction.reply({content: "Anket başarılı bir şekilde gönderildi.", ephemeral: true});

	},
};