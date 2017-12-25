// Global Variables
const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const express = require('express');
const app = express();
const port = process.env.DISCORDBOT_WEBPORT;


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
  if (!msg.content.startsWith(process.env.DISCORDBOT_PREFIX) || !msg.guild) return;
  const command = msg.content.split(' ')[0].substr(process.env.DISCORDBOT_PREFIX.length);
  const args = msg.content.split(' ').slice(1).join(' ');
  if (command === 'versão' || 'version') return msg.channel.send(process.env.DISCORDBOT_VERSION);
  else if (command === 'invite') return msg.channel.send(process.env.DISCORDBOT_INVITE);
  if (msg.content === 'meu avatar') return  msg.reply(message.author.avatarURL);
});

// Wake up, bot!
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', (request, response) => {
    response.render('index');
});
app.listen(port, () => {
    console.log('App funcionando em [http://localhost:' + port + '].');
});
setInterval(() => {
  http.get('http://lala-discordbot.herokuapp.com');
}, 580000);
