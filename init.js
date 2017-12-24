const Discord = require('discord.js');
const client = new Discord.Client();

// Connect
client.on('ready', () => {
  console.log("Logado!");
  client.sendMessage("@Bryceed#8168", "Bot inicializado.");
  client.user.setGame("🕺🏻 Love Ritmo Brasil");
});
client.on('disconnected', function () {
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
