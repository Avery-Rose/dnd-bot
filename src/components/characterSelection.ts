import { MessageActionRow, MessageSelectMenu } from "discord.js";

// TODO: Use Database to show character selection dynamically based on user's ID
export default new MessageActionRow().addComponents(
  new MessageSelectMenu()
    .setCustomId("characterSelection")
    .setPlaceholder("Nothing selected")
    .addOptions([
      {
        label: "first option",
        description: "This is a description",
        value: "first_option",
      },
      {
        label: "second option",
        description: "This is also a description",
        value: "second_option",
      },
    ])
);
