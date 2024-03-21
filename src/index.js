const Discord = require("discord.js");
const { EmbedBuilder, Collection, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuOptionBuilder, StringSelectMenuBuilder } = require('discord.js');
const { Client, GatewayIntentBits, Permissions, ChannelsTypeDef, PermissionFlagsBits, PermissionsBitField, ActivityType, ChannelType } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const config = require('./config/config.js');

// you do NOT need this many intents, but if you want to use the bot with all the functions, you need them.
const client = new Client({
    intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildMembers,   
	GatewayIntentBits.GuildPresences,
	GatewayIntentBits.GuildInvites,
	GatewayIntentBits.GuildWebhooks, 
    GatewayIntentBits.GuildInvites,
]	
})


// this is the event handler, just let it do its work and do not mess with it.
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}


// this function will trigger, once the bot is ready to login.
client.on("ready", async () => {
    const commands = client.application.commands
    // now, we create an command using this format:
    commands.create({ 
        name: 'ping',
        description: 'Pong!',
    })
    client.application.commands.update
    client.application.commands.fetch()
    .then(commands => {
        commands.forEach(command => {
            console.log(`${command.name}: ${command.id}`); // we show each command in console along with its id so it is easier to find
        });
    })
    console.log(`Success | ${client.user.tag}`)
})
client.login(config.token) // we log in with the bot, using the token provided in the config file