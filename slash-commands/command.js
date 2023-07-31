const {SlashCommandBuilder} = require("discord.js");
const {clientPG} = require("../database.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("command")
  .setDescription("Some description"),
  run: function(interaction){
    console.log(interaction.commandName);
  }

}
