const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	category: "info",
	data: new SlashCommandBuilder()
		.setName('dropdown5')
		.setDescription('yaş aralığı')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(client, interaction) {
	
       const row = new ActionRowBuilder().addComponents(
            new SelectMenuBuilder()
                .setCustomId('select')
                .setPlaceholder('Bir rol seç.')
                .setMinValues(0)
                .setMaxValues(1)
                .addOptions(
                    {

                        label: `10 - 14`,
                        value: "888344403347906591",
                        emoji: "🇦"
                        },
                    {
                
                        label: `15 - 16`,
                        value: "888344913526276137",
                        emoji: "🇧"
                    },
                    {
                
                        label: `17 - 18`,
                        value: "888344964436750336",
                        emoji: "🇨"
                    },
                    {
                
                        label: `19 - 20`,
                        value: "888345078916071445",
                        emoji: "🇩"
                    },
                    {
                
                        label: `21 - 22`,
                        value: "888345175246659604",
                        emoji: "🇪"
                    },
                    {
                
                        label: `23 - 24`,
                        value: "888345244767223828",
                        emoji: "🇫"
                    },
                    {
                
                        label: "25",
                        value: "888345326270967819",
                        emoji: "🇬"
                    },
                    {
                
                        label: "25+",
                        value: "888345352854466560",
                        emoji: "🇭"
                    }
                
                
                )
        );
        
        await interaction.channel.send({ content: "**Aşağıdaki rollerden kendinize uygun yaş aralığı seçebilirsiniz**", components: [row] });
        await interaction.reply({content: "Anket başarılı bir şekilde gönderildi.", ephemeral: true});

	},
};