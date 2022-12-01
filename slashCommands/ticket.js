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
                // Perms zodat iedereen niets kan lezen.
                // LET OP het is nu PascalCase i.p.v. snake_case ook NIET camelCase.
                createdchan.permissionOverwrites.edit(interaction.guild.roles.cache.find(x => x.name === "@everyone"), {

                    SendMessages: false,
                    ViewChannel: false
                    // SEND_MESSAGES: false,
                    // VIEW_CHANNEL: false

                });

                // Perms zodat de gebruiker die het command heeft getypt alles kan zien van zijn ticket.
                createdchan.permissionOverwrites.edit(interaction.user.id, {
                    CreateInstantInvite: false,
                    ReadMessageHistory: true,
                    SendMessages: true,
                    AttachFiles: true,
                    Connect: true,
                    AddReactions: true,
                    ViewChannel: true
                });

                // Perms zodat de gebruikers die een bepaalde rol hebben alles kan zien van zijn ticket.
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