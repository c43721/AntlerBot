const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  if(msg.author === client.user) return;
  msg.author.displayAvatarURL;
  msg.reply("idiot");
});
client.login(config.token);
