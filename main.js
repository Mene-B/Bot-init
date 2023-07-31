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
const {clientPG} = require("./database.js");

client.login(config.token);

client.on("ready",()=>{
  console.log("Bot ready to work hard !");
});
