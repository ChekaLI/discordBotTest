const Discord = require('discord.js');
const robot = new Discord.Client();

robot.login("test_token"); // test token

robot.on('message', (message) => {
    if(message.content == "test"){
        message.reply("is alive, ALIVE!!!");
    }
});
