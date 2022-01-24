import { MessageActionRow, MessageSelectMenu } from "discord.js";

// TODO: Use Database to show world based on guild id
export default new MessageActionRow().addComponents(
  new MessageSelectMenu()
    .setCustomId("worldSelection")
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
