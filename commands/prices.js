const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

  await message.delete()
  const embed = new Discord.RichEmbed()
  .setTitle("Prices")
  .setColor("15ff00")
  .addField("<:spotify:672493217094172673> 1x Upgrade", "2.00 USD", true)
  .addField("<:spotify:672493217094172673> 2x Upgrades", "3.50 USD", true)
  .addField("<:spotify:672493217094172673> 5x Upgrades", "7.50 USD", true)
  .addField("<:Bitcoin:669246298431553567> Want to buy?", "[Click here to purchase](https://sellix.io/SpotifyBlue)", true)
  .setFooter("To purchase with PayPal create a ticket")

  message.channel.send(embed)
}
module.exports.help = {
  name: "prices"
}
