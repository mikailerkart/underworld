const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	category: "info",
	data: new SlashCommandBuilder()
		.setName('dropdown10')
		.setDescription('grades')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
	async execute(client, interaction) {
	
       const row = new ActionRowBuilder().addComponents(
            new SelectMenuBuilder()
                .setCustomId('select')
                .setPlaceholder('Choose a role.')
                .setMinValues(0)
                .setMaxValues(4)
                .addOptions(
                    {

                        label: `12th grade`,
                        value: "953239677597548545",
                        emoji: "🟠"
                    },
                    {
                
                        label: `11th grade`,
                        value: "953239713962156064",
                        emoji: "🟢"
                    },
                    {
                
                        label: `10th grade`,
                        value: "953239797353283635",
                        emoji: "🟣"
                    },
                    {
                
                        label: `9th grade`,
                        value: "953239929830383616",
                        emoji: "🟤"
                    },
                    {
                
                        label: "Bachelor",
                        value: "953236956303753236",
                        emoji: "🟨"
                    },
                    {
                
                        label: "Master",
                        value: "953237026809983016",
                        emoji: "🟧"
                    },
                    {
                
                        label: "PHD",
                        value: "953237279898468372",
                        emoji: "🟥"
                    },
                    {
                
                        label: "Alumnus",
                        value: "953237295308374066",
                        emoji: "🟩"
                    }                
                
                )
        );
        
        await interaction.channel.send({ content: "**You can take a role that suits you from the following roles.**", components: [row] });
        await interaction.reply({content: "Anket başarılı bir şekilde gönderildi.", ephemeral: true});

	},
};