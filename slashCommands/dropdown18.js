const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	category: "info",
	data: new SlashCommandBuilder()
		.setName('dropdown18')
		.setDescription('student')
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

                        label: `Soru - Cevap`,
                        value: "1047959980109729792",
                        emoji: "❔"
                    }                
                
                )
        );
        
        await interaction.channel.send({ content: "**Aşağıdaki soru-cevap rolü alarak #yks-soru-kanalı dan günlük etiket ile atılan soruları cevaplayabilirsiniz**" , components: [row] });
        await interaction.reply({content: "Anket başarılı bir şekilde gönderildi.", ephemeral: true});

	},
};