const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  await message.delete()
  const modRole = message.member.hasPermission("MANAGE_MESSAGES");
  if (!modRole) return message.channel.send("No permission.");

if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No permission.")

const deleteCount = parseInt(args[0], 10);

if(!deleteCount || deleteCount < 1 || deleteCount > 100)
return message.channel.send("You must put a valid number.");

const fetched = await message.channel.fetchMessages({limit: deleteCount});
message.channel.bulkDelete(fetched).catch(error => message.channel.send(`Error: ${error}`));
message.channel.send("Successfully deleted " + args[0] + " messages.").
return;
}
module.exports.help = {
  name: "clear"
}
