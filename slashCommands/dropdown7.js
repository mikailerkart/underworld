const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	category: "info",
	data: new SlashCommandBuilder()
		.setName('dropdown7')
		.setDescription('university courses 1')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(client, interaction) {
	
       const row = new ActionRowBuilder().addComponents(
            new SelectMenuBuilder()
                .setCustomId('select')
                .setPlaceholder('Choose a role.')
                .setMinValues(0)
                .setMaxValues(20)
                .addOptions(
                    {

                        label: "Engineering",
                        value: "887338664261214239",
                        emoji: "🧑‍💻"
                        },
                    {
                
                        label: "Teacher",
                        value: "887338823888011264",
                        emoji: "🧑‍🏫"
                    },
                    {
                
                        label: `Banking and finance`,
                        value: "887338883442966588",
                        emoji: "🏦"
                    },
                    {
                
                        label: `Press and publication`,
                        value: "887338919497183303",
                        emoji: "📰"
                    },
                    {
                
                        label: "Languages",
                        value: "887338941689241632",
                        emoji: "🌐"
                    },
                    {
                
                        label: "Informatics",
                        value: "887338961515720724",
                        emoji: "💻"
                    },
                    {
                
                        label: "History",
                        value: "887338976183201823",
                        emoji: "📜"
                    },
                    {
                
                        label: "Biology",
                        value: "887338994197745695",
                        emoji: "🧬"
                    },
                    {
                
                        label: "Geography",
                        value: "887339001349025853",
                        emoji: "🌍"
                    },
                    {
                
                        label: "Dentist",
                        value: "887339035436138607",
                        emoji: "🦷"
                    },
                    {
                
                        label: "Doctor",
                        value: "887339053249355778",
                        emoji: "👨‍⚕️"
                    },
                    {
                
                        label: `Economics (and finance)`,
                        value: "887339071477796944",
                        emoji: "💵"
                    },
                    {
                
                        label: "Philosophy",
                        value: "887339087051251722",
                        emoji: "🧠"
                    },
                    {
                
                        label: "Physics",
                        value: "887339106374398042",
                        emoji: "🎚️"
                    },
                    {
                
                        label: "Gastronomy",
                        value: "887339124942598176",
                        emoji: "🧑‍🍳"
                    },
                    {
                
                        label: "Journalism",
                        value: "887339141413613588",
                        emoji: "🗞️"
                    },
                    {
                
                        label: "Nursing",
                        value: "887339167137292288",
                        emoji: "👩‍⚕️"
                    },
                    {
                
                        label: "Law",
                        value: "887339183394422854",
                        emoji: "🧑‍⚖️"
                    },
                    {
                
                        label: "Architecture",
                        value: "887339204374315021",
                        emoji: "📝"
                    },
                    {
                
                        label: "İslam",
                        value: "887363945806053386",
                        emoji: "☪️"
                    }
                
                
                )
        );
        
        await interaction.channel.send({ content: "**You can choose your university courses that you follow from the following roles.**", components: [row] });
        await interaction.reply({content: "Anket başarılı bir şekilde gönderildi.", ephemeral: true});

	},
};