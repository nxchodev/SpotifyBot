const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
await message.delete()

if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No permission..");
    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let reason =  args.slice(1).join(' ');
  if(!target) return message.channel.send("Mention someone to kick.")
        if(!reason) return message.channel.send("Must specify the reason.")

message.delete(10000)
  let member = message.mentions.members.first();
  if(!target.kickable) return message.channel.send("No permission.")
if(!message.member.hasPermission("KICK_MEMBERS")) {
  message.channel.send('No permission.')
}

if(message.member.hasPermission("KICK_MEMBERS"))
member.kick().then((member)  => {
let embed = new Discord.RichEmbed()
.setColor("00ff00")
.setTimestamp()
.setTitle("Member Kicked")
.setDescription(`**User:** \n${target} \n**reason:** \n${reason} \n**Staff:** \n${message.author}\n`)
  .setThumbnail(bot.user.avatarURL)
  .setFooter(message.author.tag, message.author.avatarURL)
message.channel.send(embed)
});
};

module.exports.help = {
  name: "kick"
}
