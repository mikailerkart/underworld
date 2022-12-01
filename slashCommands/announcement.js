const { SlashCommandBuilder, PermissionFlagsBits, ChannelType } = require('discord.js');

module.exports = {
	category: "moderation",
	data: new SlashCommandBuilder()
		.setName('announcement')
		.setDescription('Bir duyuru verir.')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addStringOption(option =>
            option.setName('title')
                .setDescription('Bir başlık verin')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('message')
                .setDescription('Bir mesaj verin')
                .setRequired(true))
        .addChannelOption(option =>
            option.setName("channel")
            .setDescription("Bir kanal belirt")
            .addChannelTypes(ChannelType.GuildText)),
	async execute(client, interaction) {
        
        const title = await interaction.options.getString("title");
        const message = await interaction.options.getString("message");
        let channel = await interaction.options.getChannel("channel");

        if(channel == null) channel = "988852575866617996"; // duyuru kanal


        interaction.reply({ content: "duyuru yapıldı.", ephemeral: true});
        await interaction.guild.channels.cache.find(c => c.id == channel).send(`**${title}**\n${message}`);

	},
};