const { EmbedBuilder, Collection, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuOptionBuilder, StringSelectMenuBuilder, Events } = require('discord.js');
const { Client, GatewayIntentBits, Permissions, ChannelsTypeDef, PermissionFlagsBits, PermissionsBitField } = require('discord.js');
// i know those imports are many things, but if you are not a professional developer, you would not need them.
module.exports = {
	name: Events.InteractionCreate, // here, put your event using Events:  https://discord.js.org/docs/packages/discord.js/14.14.1/Events:Enum
	once: false, 
	async execute(interaction) {
        if (!interaction.isCommand()) return // if the interaction is not command, we close the function
        const { commandName, options } = interaction // we get the commandName and options from the interaction
        if(commandName === `ping`) { // we check if the command that was used was "ping"
            //your code here
            interaction.reply({ //we use interaction.reply to reply to the command
                content: 'Pong!', //content of your reply
                ephemeral: true // ephemeral means that the reply will only be visible to the user who used the command
            })
        }
	},
};