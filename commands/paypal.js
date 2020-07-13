const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let pibe = message.mentions.members.first()
    let plata = args.slice(1).join(' ')
  await message.delete()

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No permission.")

  message.channel.send(`Please ${pibe} send ${plata} USD to **nacho.deluka.20@gmail.com** as the payment method **Family & Friends**.`)
}
module.exports.help = {
  name: "paypal"
}
