const Discord = require('discord.js');
const client = new Discord.Client({
  commandPrefix: '+',
  unknownCommandResponse: false,
  owner: '269803975090372608',
  disableEveryone: true
});

client.on('ready', () => {
  client.sendMessage("@Bryceed#8168", "Hello!");
  client.user.setGame('Love Ritmo Brasil');
});

// Listen
client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
  if (message.content === 'meu avatar') {
    message.reply(message.author.avatarURL);
  }
});
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`Olá, ${member}! Tudo bem?`, `Esperamos que aproveite a experiência! ^-^`);
});

// Start
client.login(process.env.DISCORDBOT_TOKEN);
