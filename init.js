// Global Variables
const Discord = require('discord.js');
const client = new Discord.Client();


// Connect
client.on('ready', () => {
  client.setStatus('online', '🕺🏻 Love Ritmo Brasil');
  client.sendMessage('@Bryceed', 'Bot inicializado.');
});
client.on('disconnected', function () {
  console.log('Saindo...');
  process.exit(1); 
});

// Start
client.login(process.env.DISCORDBOT_TOKEN);

// Commands and Responses
client.on('message', msg => {
  if (msg.content === 'meu avatar') return msg.reply(message.author.avatarURL);
});
