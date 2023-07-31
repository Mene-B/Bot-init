const Discord = require("discord.js");
const config= require("./config.json");
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMessageReactions
    ]
});
const fs = require("fs");

client.login(config.token);

client.on("ready",()=>{
  console.log("Bot ready to work hard !");
});

const commands = fs.readdirSync("./slash-commands").map((file)=>{
    const data = require("./slash-commands/"+file);
    return {name : data.data.name, run: data.run };
});

client.on("interactionCreate",(interaction)=>{
    if(interaction.isCommand()){
        const command = commands.find((cmd)=>{
            return cmd.name === interaction.commandName;
        })
        return command.run(interaction);
    }
})
