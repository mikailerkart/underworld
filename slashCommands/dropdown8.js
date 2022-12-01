const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	category: "info",
	data: new SlashCommandBuilder()
		.setName('dropdown8')
		.setDescription('university courses 2')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(client, interaction) {
	
       const row = new ActionRowBuilder().addComponents(
            new SelectMenuBuilder()
                .setCustomId('select')
                .setPlaceholder('Choose a role.')
                .setMinValues(0)
                .setMaxValues(16)
                .addOptions(
                    {

                        label: "Business",
                        value: "887339244304105512",
                        emoji: "👔"
                    },
                    {
                
                        label: "Statistics",
                        value: "887339257415495723",
                        emoji: "📊"
                    },
                    {
                
                        label: "Chemical",
                        value: "887339273643241616",
                        emoji: "⚗️"
                    },
                    {
                
                        label: "Logistics",
                        value: "887339289279602779",
                        emoji: "👷"
                    },
                    {
                
                        label: "Mathematics",
                        value: "887339307197673532",
                        emoji: "🧮"
                    },
                    {
                
                        label: `Media and communication`,
                        value: "887339331981803531",
                        emoji: "📱"
                    },
                    {
                
                        label: "Accounting",
                        value: "887339346796113961",
                        emoji: "📒"
                    },
                    {
                
                        label: "Interpretership",
                        value: "887339360729575426",
                        emoji: "🗽"
                    },
                    {
                
                        label: "Pilot",
                        value: "887339384721010718",
                        emoji: "🧑‍✈️"
                    },
                    {
                
                        label: "Psychology",
                        value: "887339397672992868",
                        emoji: "⚙️"
                    },
                    {
                
                        label: `Radio, television and cinema`,
                        value: "887339410356580362",
                        emoji: "📺"
                    },
                    {
                
                        label: "Insurances",
                        value: "887339424680120341",
                        emoji: "⭕"
                    },
                    {
                
                        label: `Political Science`,
                        value: "887339443369939015",
                        emoji: "👮"
                    },
                    {
                
                        label: "Sociology",
                        value: "887339455898333214",
                        emoji: "👩‍👩‍👧‍👦"
                    },
                    {
                
                        label: "Medicine",
                        value: "887339481219362816",
                        emoji: "🏥"
                    },
                    {
                
                        label: "Tourism",
                        value: "887339504795537439",
                        emoji: "🗺️"
                    }                
                
                )
        );
        
        await interaction.channel.send({ components: [row] });
        await interaction.reply({content: "Anket başarılı bir şekilde gönderildi.", ephemeral: true});

	},
};