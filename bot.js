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

client.login('NTE2NzMyMDY2NTU4Mzc3OTg2.Dt8Mow.BjlB9CV8lGcCawOctVkyFcSA17c');