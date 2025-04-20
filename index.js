const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
//environment
require('dotenv').config()

function formatTime() { 
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', 
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1165740968021074030')
    .setType('PLAYING')
    .setURL('https://www.twitch.tv/apparentlyjack_rl') 
    .setState('Flag Members Top 1')
    .setName('Flag Members')
    .setDetails(`Click the button below to join Flag Members ❗`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1360004461250220295/1363501588802703471/image-6.png?ex=6806434f&is=6804f1cf&hm=ab857d51a621a46a853960fa9ab9937cfb0654536355546a705c02394016c06d&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('servry') 
    .setAssetsSmallImage('https://cdn.discordapp.com/avatars/1209548876877402163/53d4c6a8a937a270cf0ea121f5e93b01.png?size=1024') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') 
    .addButton('Flag Members', 'https://discord.gg/f-m');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
