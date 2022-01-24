import { MessageEmbed, User } from "discord.js";

export default function characterInfoEmbed(user: User) {
  const embed = new MessageEmbed()
    .setTitle(`${user.username}'s Character Info`)
    .setDescription(`${user.username}'s character info here!`)
    .setColor("#0099ff")
    .setThumbnail(user.displayAvatarURL());
  return embed;
}
