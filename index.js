const Discord = require('discord.js');
const robot = new Discord.Client();

robot.login("NDMxNTk4NDkzNjI3NDQ5MzQ0.DakswQ.iT-nhkYQOATz1ASPNEeRuiVIUnM");

robot.on('message', (message) => {
    if(message.content == "test"){
        message.reply("is alive, ALIVE!!!");
    }
});
