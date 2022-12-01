const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, SelectMenuBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	category: "info",
	data: new SlashCommandBuilder()
		.setName('dropdown11')
		.setDescription('türk-alien')
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

                        label: "Türk",
                        value: "887052314064584775",
                        emoji: "🇹🇷"
                        },
                    {
                
                        label: `Alien`,
                        value: "887052613722452038",
                        emoji: "👽"
                    }                
                
                )
        );

        var embed = new EmbedBuilder()
            .setColor("Blue")
            .setDescription("**Aşağıdaki rollerden kendinize uygun rol alabilirsiniz.**\n*You can take a suitable role for yourself from the following roles.*\n\n**NOT: Eğer öğrenci rol alırsan diğer rolleri artık alamazsın ve sunucuya erişim sağlamış olursun.**\n*NOTE: If you take a student role, you will no longer be able to take other roles and you will have access to the server.*")
        
        await interaction.channel.send({ embeds: [embed], components: [row] });
        await interaction.reply({content: "Anket başarılı bir şekilde gönderildi.", ephemeral: true});

	},
};