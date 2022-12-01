const { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	category: "info",
	data: new SlashCommandBuilder()
		.setName('dropdown6')
		.setDescription('sınıf')
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

                        label: "Mezun",
                        value: "890987737233100820",
                        emoji: "🎓"
                        },
                    {
                
                        label: `12. sınıf`,
                        value: "890987764965867521",
                        emoji: "🟠"
                    },
                    {
                
                        label: `11. sınıf`,
                        value: "890987761472012358",
                        emoji: "🟢"
                    },
                    {
                
                        label: `10. sınıf`,
                        value: "890987758213025832",
                        emoji: "🟣"
                    },
                    {
                
                        label: `9. sınıf`,
                        value: "890987753850953739",
                        emoji: "🟤"
                    },
                    {
                
                        label: "Lisans",
                        value: "890987779499122759",
                        emoji: "🟨"
                    },
                    {
                
                        label: "Yüksek Lisans",
                        value: "953237456499642389",
                        emoji: "🟧"
                    },
                    {
                
                        label: "Doktora",
                        value: "953237528679419954",
                        emoji: "🟥"
                    },
                    {
                
                        label: "Alumnus",
                        value: "953237555111948308",
                        emoji: "🟩"
                    }
                
                
                )
        );
        
        await interaction.channel.send({ content: "**Aşağıdaki rollerden kendinize uygun rol alabilirsiniz.**", components: [row] });
        await interaction.reply({content: "Anket başarılı bir şekilde gönderildi.", ephemeral: true});

	},
};