const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	category: "info",
	data: new SlashCommandBuilder()
		.setName('dropdown20')
		.setDescription('gününsorusuveögrencirol')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(client, interaction) {
	
       const row = new ActionRowBuilder().addComponents(
            new SelectMenuBuilder()
                .setCustomId('select')
                .setPlaceholder('Bir rol seç.')
                .setMinValues(0)
                .setMaxValues(2)
                .addOptions(
                    {

                        label: `Günün sorusu`,
                        value: "1121165526635388928",
                        emoji: "❔"
                    },
                    {
                        label: `Ögrenci rol`,
                        value: "887739414711791626",
                        emoji: "🧑‍🎓"
                    }      
                
                )
        );
        
        await interaction.channel.send({ content: "**Aşağıdaki günün sorusu rolü alarak #günün-sorusu dan günlük etiket ile atılan soruları cevaplayabilirsiniz, ögrenci rolü alarak ögrenci kanalları görebilirsiniz.**" , components: [row] });
        await interaction.reply({content: "Anket başarılı bir şekilde gönderildi.", ephemeral: true});

	},
};