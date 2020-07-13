const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  await message.delete()
  if(!["569206494533255266"].includes(message.author.id)) return message.channel.send("No permission.")
      const reload = new Discord.RichEmbed()
        .setTitle('Hold on...')
        .setThumbnail(`https://cdn.discordapp.com/attachments/571049817921290250/572433829801754655/a8keeuutawx01.gif`)
        .setColor(0x77AEFF)            
      message.channel.send(reload).then(() => {
                bot.destroy().then(() => {
                  process.exit();
             });
         });
}

module.exports.help = {
  name: "reload"
}
