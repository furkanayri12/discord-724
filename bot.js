const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`AWP'nin Tacı Geldi Açılın ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Selamin Aleyküm') {
    msg.reply('Aleyküm Selam');
  }
});

client.login(procces.env.BOT_TOKEN);
