const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
	category: "moderation",
	data: new SlashCommandBuilder()
		.setName('timeout')
		.setDescription('timeout verir.')
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .addUserOption(option =>
            option.setName('user')
                .setDescription("Bir kullancı belirtin")
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName("zaman")
                .setDescription("Bir zaman seç")
                .setRequired(true)
                .setChoices(
                    { name: 'timeout alır', value: 0 },
                    { name: '60s', value: 60 },
                    { name: '5m', value: 300 },
                    { name: '10m', value: 600 },
                    { name: '1h', value: 3600 },
                    { name: '1d', value: 86400 },
                    { name: '1w', value: 604800 },
                ))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription("Bir sebep belirtin")
                .setRequired(true)),
	async execute(client, interaction) {

        let role = await interaction.guild.roles.cache.find(r => r.name.toLowerCase() == "owner") //belirli rol

        let member = await interaction.options.getMember("user");

        if (member.roles.cache.has(role.id)) return interaction.reply("Bu kişiye timeout atamazsınız.");

        let reason = await interaction.options.getString("reason");

        let zaman = await interaction.options.getInteger("zaman");

        if(zaman == 0){
            await member.timeout(null, reason);

            interaction.reply(`${member.user.tag} timeout kaldırıldı.`);
        }else{
            await member.timeout(zaman * 1000, reason);

            interaction.reply(`${member.user.tag} timeout yedi.`)

            var embed = new EmbedBuilder()
                .setColor("#FF0000")
                .setDescription(`**Member:** ${member.user.tag} (${member.user.id})\n**Eylem:** Timeout\n**Sebep:** ${reason}`)
                .setTimestamp();

            await interaction.guild.channels.cache.find(c => c.name.toLowerCase() == "log").send({ embeds: [embed] });

        }


	},
};