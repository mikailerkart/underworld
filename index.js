const { Client, GatewayIntentBits, Routes, Collection } = require("discord.js");
const config = require("./config.json");
const fs = require('node:fs');
const path = require('node:path');
const { REST } = require("@discordjs/rest");

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });
client.commands = new Collection();
const slashCommands = [];

client.once("ready", () => {
    console.log(`${client.user.username} is online.`);

    let guildId = process.env.guildID;
    let clientId = process.env.clientID;
    let token = process.env.token;

    const rest = new REST({version: 10}).setToken(token);

    rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: slashCommands })
	    .then(() => console.log('Successfully registered application commands.'))
	    .catch(console.error); 

});

const commandsPath = path.join(__dirname, 'slashCommands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);

	client.commands.set(command.data.name, command);
    slashCommands.push(command.data.toJSON());

    console.log(`De file ${command.data.name}.js is geladen`);
}

client.on('interactionCreate', async interaction => {
	// if (!interaction.isChatInputCommand()) return;

	const { customId, values, guild, member, component } = interaction;

	if (!interaction.isChatInputCommand()){

		if(!interaction.isSelectMenu()) return;

		if(interaction.customId === "select"){

			for (let i = 0; i < values.length; i++ ){
				const roleId = values[i];

				const hasRole = member.roles.cache.has(roleId);

				if (hasRole){
					member.roles.remove(roleId)
				}else{
					member.roles.add(roleId)
				}
			}

			interaction.reply({
				content: "Roller güncellendi.",
				ephemeral: true
			});
		
		}
	
	}else{

		const command = client.commands.get(interaction.commandName);

		if (!command) return;
	
		try {
			await command.execute(client, interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}

	}

});

client.on('guildMemberAdd', async (member) => {

	member.guild.channels.cache.find(c => c.name.toLowerCase() == "welcome").send(`Sunucuya hoş geldiniz, ${member}`); // register chat

	member.send(`**Underworld**\nSunucumuza hoş geldiniz, ${member}`).catch(() => {
		console.log(`Kullanıcı ${member} dm kutusu kapalı.`)
	})

	let role = member.guild.roles.cache.find(r => r.name.toLowerCase() == "unregister"); // unregister role

	if (!role) return;

	member.roles.add(role)

});

client.login(process.env.token);