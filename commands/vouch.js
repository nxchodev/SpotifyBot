const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  await message.delete()

  let pibe = message.mentions.members.first()

  message.channel.send(`Can you please, ${pibe} leave a vouch at <#667818775491641395>`)
}
module.exports.help = {
  name: "vouch"
}
