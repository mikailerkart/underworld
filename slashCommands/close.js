const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    category: "moderation",
	data: new SlashCommandBuilder()
		.setName('close')
		.setDescription('Ticket kapatır')
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
	async execute(client, interaction) {
		
        const categoryId = "887049125185597442"; // category id ticket

        if(interaction.channel.parentId == categoryId){
            interaction.channel.delete();
        }else{
           await interaction.reply("Bu sadece bir ticket kanalında mümkündür.");
           return;
        }
        
        var embed = new EmbedBuilder()
            .setTitle("Ticket, " + interaction.channel.name)
            .setDescription("Ticket **tamamlandı** olarak işaretlendi.")
            .setFooter({text: "ticket kapandı."})
            .setAuthor({name: `${interaction.user.tag}`})
            .setTimestamp();
    
        var ticketChannel = interaction.member.guild.channels.cache.find(channel => channel.name === "ticket-log");
        if (!ticketChannel) interaction.reply({ content: "Kanal mevcut değil."});

        ticketChannel.send({ embeds: [embed] });
    

        
    },

	
};