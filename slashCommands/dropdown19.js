const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	category: "info",
	data: new SlashCommandBuilder()
		.setName('dropdown19')
		.setDescription('renkroller')
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

                        label: "Mavi",
                        value: "1094972624070774835",
                        emoji: "💙"
                    },
                    {
                        label: "Pembe",
                        value: "1094972740479500378",
                        emoji: "1094968954893635674"
                    },
                    {
                        label: "Mor",
                        value: "1094972876119093368",
                        emoji: "💜"

                    },
                    {
                        label: "Sarı",
                        value: "1094972970126020788",
                        emoji: "💛"   
                    },
                    {
                        label: "Turuncu",
                        value: "1094973077546356859",
                        emoji: "🧡"
                    },
                    {
                        label: "Yeşil",
                        value: "1094973171167408128",
                        emoji: "💚"
                    },
                    {
                        label: "Kırmızı",
                        value: "1097528258704187612",
                        emoji: "❤️"
                    }                
                
                )
        );
        
        await interaction.channel.send({ content: "**Aşağıdaki renk rollerden istediğiniz rengi seçebilirsiniz.**" , components: [row] });
        await interaction.reply({content: "Anket başarılı bir şekilde gönderildi.", ephemeral: true});

	},
};