const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	category: "info",
	data: new SlashCommandBuilder()
		.setName('dropdown15')
		.setDescription('ilişki')
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

                        label: "Single",
                        value: "989518770651430923",
                        emoji: "969207642205593620"
                    },
                    {
                
                        label: "Lovers",
                        value: "989518797624967178",
                        emoji: "989954502293598299"
                    }                
                
                )
        );
        
        await interaction.channel.send({ content: "**Aşağıdaki ilişki rollerden kendinize uygun rolünüzü alabilirsiniz.**", components: [row] });
        await interaction.reply({content: "Anket başarılı bir şekilde gönderildi.", ephemeral: true});

	},
};