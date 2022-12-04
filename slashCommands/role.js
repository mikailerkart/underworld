const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	category: "info",
	data: new SlashCommandBuilder()
		.setName('welcome')
		.setDescription('hoş geldin roller')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(client, interaction) {
		
        const studyRole = interaction.guild.roles.cache.find(r => r.name.toLowerCase() == "👨‍🏫"); //study role kayit
        const publicRole = interaction.guild.roles.cache.find(r => r.name.toLowerCase() == "👬"); //public role kayit 

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("study")
                .setLabel("Study role")
                .setStyle(ButtonStyle.Danger),

            new ButtonBuilder()
                .setCustomId("public")
                .setLabel("Public role")
                .setStyle(ButtonStyle.Success)
        );

            var embed = new EmbedBuilder()
                .setColor('Blue')
                .setTitle('Sunucu ya hoş geldiniz')
                .setDescription('İlk önce sunucuya hoş geldiniz, sunucu ya kendiniz kayıt yapmak istiyorsanız ilk önce study yada public kayıt yerini görmek için study veya public seçmeniz gerekiyor.\n\n**Aşağıdaki button dan kendinize rolünüzü alabilirisiniz.**')

        await interaction.reply({ content: "Button başarılı bir şekilde gönderildi", ephemeral: true});
        await interaction.channel.send({ embeds: [embed], components: [row] });
   
	},
};