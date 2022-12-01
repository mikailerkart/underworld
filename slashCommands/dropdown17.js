const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	category: "info",
	data: new SlashCommandBuilder()
		.setName('dropdown17')
		.setDescription('etkinlik')
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

                        label: "Çekiliş Katılımcısı",
                        value: "989518854227128390",
                        emoji: "989954760142651472"
                    },
                    {
                
                        label: "Film",
                        value: "989518883696304128",
                        emoji: "989954792619114516"
                    }                
                
                )
        );
        
        await interaction.channel.send({ content: "**Aşağıdaki etkinlik rollerden kendinize uygun rolünüzü alabilirsiniz.**", components: [row] });
        await interaction.reply({content: "Anket başarılı bir şekilde gönderildi.", ephemeral: true});

	},
};