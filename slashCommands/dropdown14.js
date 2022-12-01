const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	category: "info",
	data: new SlashCommandBuilder()
		.setName('dropdown14')
		.setDescription('burçlar')
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

                        label: "Koç",
                        value: "989517246349066260",
                        emoji: "♈"
                    },
                    {
                
                        label: "Boğa",
                        value: "989517264191647774",
                        emoji: "♉"
                    },
                    {
                        label: "İkizler",
                        value: "989517287889440798",
                        emoji: "♊"
                    },
                    {
                        label: "Yengeç",
                        value: "989517317178281994",
                        emoji: "♋"
                    },
                    {
                        label: "Aslan",
                        value: "989517352221696021",
                        emoji: "♌"
                    },
                    {
                        label: "Başak",
                        value: "989517372136235008",
                        emoji: "♍"
                    },
                    {
                        label: "Akrep",
                        value: "989517409260032090",
                        emoji: "♏"
                    },
                    {
                        label: "Terazi",
                        value: "989517390427590706",
                        emoji: "♎"
                    },
                    {
                        label: "Yay",
                        value: "989517428880965643",
                        emoji: "♐"
                    },
                    {
                        label: "Oğlak",
                        value: "989517453040177183",
                        emoji: "♑"
                    },
                    {
                        label: "Kova",
                        value: "989517466994634804",
                        emoji: "♒"
                    },
                    {
                        label: "Balık",
                        value: "989517507754885161",
                        emoji: "♓"
                    }                
                
                )
        );
        
        await interaction.channel.send({content: "**Aşağıdaki burç rollerden kendi burç rolünüzü alabilirsiniz.**", components: [row] });
        await interaction.reply({content: "Anket başarılı bir şekilde gönderildi.", ephemeral: true});

	},
};