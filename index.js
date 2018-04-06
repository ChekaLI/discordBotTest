const Discord = require('discord.js');
const robot = new Discord.Client();

robot.login("NDMxNTk4NDkzNjI3NDQ5MzQ0.DahFEw.NTyvP22YO5bY83-QeNEy6mZ7qoQ");

robot.on('message', (message) => {
    if(message.content == "test"){
        message.reply("is alive, ALIVE!!!");
    }
});
