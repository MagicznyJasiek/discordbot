const fs = require('fs');
const Discord = require("discord.js");
const { EmbedBuilder, Collection, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuOptionBuilder, StringSelectMenuBuilder } = require('discord.js');
const { Client, GatewayIntentBits, Permissions, ChannelsTypeDef, PermissionFlagsBits, PermissionsBitField } = require('discord.js');
module.exports = (Client) => {
    fs.readdirSync('./src/events').filter((file) => file.endsWith('.js')).forEach((event) => {
        require(`../events/${event}`);
    });
}