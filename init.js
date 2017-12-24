const Discord = require('discord.js');
const client = new Discord.Client({
  commandPrefix: DISCORDBOT_PREFIX,
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

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});
if (command === "ping") {
  const m = await message.channel.send("Ping?");
  m.edit(`Pong! A mensagem chegou em ${m.createdTimestamp - message.createdTimestamp}ms (sendo ${Math.round(client.ping)}ms de processamento e retorno.)`);
}

client.login(process.env.DISCORDBOT_TOKEN);
