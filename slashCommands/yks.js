const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	category: "info",
	data: new SlashCommandBuilder()
		.setName('yks')
		.setDescription('yks ye kaç gün kaldığını söyler.'),
	async execute(client, interaction) {
		
        let today = new Date();

        let year = today.getFullYear();

        let yks = new Date(`8 Juni, 2024`);
        //let yks = new Date(`28 November, ${year}`);

        let timeLeft = (yks.getTime() - today.getTime());

        let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hrsLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minsLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let secsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000)

        if(timeLeft < 0){

            await interaction.reply(`***YKS sınav günü geçmiş olsun, ${interaction.member}!*** 📝`)

        } else {

            let embed = new EmbedBuilder()
                .setColor("#ff0000")
                .setImage("attachment://yks.png")
                .addFields(
                    {name: "YKS sınavına kalan süre", value: `***${daysLeft}** gün, **${hrsLeft}** saat, **${minsLeft}** dakika ve **${secsLeft}** saniye*`}
                );
            
            await interaction.reply({embeds: [embed], files: [{attachment: "data/images/yks.png", name: "yks.png"}] });

        }



	},
};