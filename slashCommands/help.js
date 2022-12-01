const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: "moderation",
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Komut listesini dm olarak gönderir.'),
	async execute(client, interaction) {
		
        let respone = "**Bot commands**\n\n";
        let generalRes = "**__General__**\n";
        let infoRes = "\n**__Information__**\n";
        let modRes = "\n**__Moderation__**\n";

        client.commands.forEach(command => {
            
            switch(command.category){

                case "general":
                    generalRes += `/${command.data.name} - ${command.data.description}\n`
                    break;
                case "info":
                    generalRes += `/${command.data.name} - ${command.data.description}\n`
                    break;

                case "moderation":
                    generalRes += `/${command.data.name} - ${command.data.description}\n`
                    break;
            }

        });

        respone += generalRes + infoRes + modRes;

        await interaction.member.send(respone).then(async () => {
            await interaction.reply("Bütün komutlar dm den bulabilirsin. 📨")
        }).catch(async () => {
            await interaction.reply("Dm kutunuz kapalı, mesaj gönderilemedi.")
        })

	},
};