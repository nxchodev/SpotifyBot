const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    await message.delete()
  return message.channel.send("https://sellix.io/SpotifyBlue")
}
module.exports.help = {
  name: "store"
}
