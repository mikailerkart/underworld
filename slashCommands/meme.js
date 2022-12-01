const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));


module.exports = {
	category: "moderation",
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDescription('meme verir'),
	async execute(client, interaction) {
		
       await fetch(" https://www.reddit.com/r/TurkeyJerky/random/.json").then(async resp => {
            let meme = await resp.json();

            let title = meme[0].data.children[0].data.title;
            let url = meme[0].data.children[0].data.url;
            let author = meme[0].data.children[0].data.author;

            var embed = new EmbedBuilder()
                .setTitle(title)
                .setImage(url)
                .setURL(url)
                .setColor("Random")
                .setFooter({ text: author})

            return interaction.reply({ embeds: [embed] })

        })

	},
};