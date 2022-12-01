const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	category: "info",
	data: new SlashCommandBuilder()
		.setName('dropdown1')
		.setDescription('lise bölümler')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(client, interaction) {
	
       const row = new ActionRowBuilder().addComponents(
            new SelectMenuBuilder()
                .setCustomId('select')
                .setPlaceholder('Bir rol seç.')
                .setMinValues(0)
                .setMaxValues(4)
                .addOptions(
                    {

                        label: "Eşit Ağırlık",
                        value: "887052743703949338",
                        emoji: "⚖️"
                        },
                    {
                
                        label: "Sayısal",
                        value: "887052861295444028",
                        emoji: "🔢"
                    },
                    {
                
                        label: "Sözel",
                        value: "887052899237117982",
                        emoji: "📚"
                    },
                    {
                
                        label: "Dil",
                        value: "890284677187919892",
                        emoji: "🗣️"
                    },
                )
        );
        
        await interaction.channel.send({ content: "**Aşağıdaki lise bölümlerden rol alabilirsin.**", components: [row] });
        await interaction.reply({content: "Anket başarılı bir şekilde gönderildi.", ephemeral: true});

	},
};