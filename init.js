const Discord = require('discord.js');
const client = new Discord.Client({});

// Parameters
client.setPrefix('global', '+');

// Connect
client.on('ready', () => {
  client.sendMessage('@Bryceed#8168', "Hello!");
  client.user.setGame('Love Ritmo Brasil');
});
bot.on('disconnected', function () {
    console.log("Saindo...");
    process.exit(1); 
});

// Listen
client.on('message', message => {
  if (message.content === 'meu avatar') {
    message.reply(message.author.avatarURL);
  }
});

// Start
client.login(process.env.DISCORDBOT_TOKEN);
