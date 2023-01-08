const { SlashCommandBuilder, EmbedBuilder, ChannelType } = require('discord.js');

module.exports = {
    category: "general",
    data: new SlashCommandBuilder()
        .setName('ticket')
        .setDescription('Ticket kurar')
        .addStringOption(option =>
            option.setName("sebep")
                .setDescription('Bir sebep belirt.')
                .setRequired(true)),
    async execute(client, interaction) {

        const categoryId = "988827487591096380"; // category id ticket

        var userName = interaction.user.username;
        var userDiscriminator = interaction.user.discriminator;

        const reason = await interaction.options.getString("sebep");

        var ticketBestaat = false;

        interaction.guild.channels.cache.forEach((channel) => {

            if (channel.name === userName.toLowerCase() + "-" + userDiscriminator) {
                interaction.reply({content: "❌ Zaten bir ticket oluşturdunuz.", ephemeral: true});
                ticketBestaat = true;
                return;
            }


        });

        if (ticketBestaat) return;

        interaction.guild.channels.create({ name: userName.toLowerCase() + "-" + userDiscriminator, type: ChannelType.GuildText, parent: categoryId }).then(
            (createdchan) => {

                createdchan.permissionOverwrites.edit(interaction.guild.roles.cache.find(x => x.name === "@everyone"), {

                    SendMessages: false,
                    ViewChannel: false

                });

                createdchan.permissionOverwrites.edit(interaction.guild.roles.cache.find(x => x.name === "Üye"), {

                    SendMessages: false,
                    ViewChannel: false

                });

                createdchan.permissionOverwrites.edit(interaction.guild.roles.cache.find(x => x.name === "Student"), {

                    SendMessages: false,
                    ViewChannel: false

                });

                createdchan.permissionOverwrites.edit(interaction.user.id, {
                    CreateInstantInvite: false,
                    ReadMessageHistory: true,
                    SendMessages: true,
                    AttachFiles: true,
                    Connect: true,
                    AddReactions: true,
                    ViewChannel: true
                });

                createdchan.permissionOverwrites.edit(interaction.guild.roles.cache.find(x => x.name === "Owner"), { // ticket yetkili
                    CreateInstantInvite: false,
                    ReadMessageHistory: true,
                    SendMessages: true,
                    AttachFiles: true,
                    Connect: true,
                    AddReactions: true,
                    ViewChannel: true
                });

                var embed = new EmbedBuilder()
                    .setAuthor({name: userName})
                    .setTitle("Yeni ticket")
                    .addFields(
                        {name: "Sebep", value: reason}
                    )
                    .setTimestamp();
                    createdchan.send({ embeds: [embed] });

                    interaction.reply({content: "ticket oluşturuldu. ✅", ephemeral: true});
            }
        ).catch(err => {
            interaction.reply({content: "❌ Bir şeyler yanlış gitti " + err })
        });

    },
};