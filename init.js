const Discord = require('discord.js');
const client = new Discord.Client({
  commandPrefix: process.env.DISCORDBOT_PREFIX,
  unknownCommandResponse: false,
  owner: '269803975090372608',
  disableEveryone: true
});
const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['other', 'Comandos diversificados']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
  console.log('Bot inicializado!');
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
