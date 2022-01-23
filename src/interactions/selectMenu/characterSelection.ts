import { SelectMenuInteraction } from "discord.js";
import characterSelection from "../../components/characterSelection";

export default async function (interaction: SelectMenuInteraction) {
  interaction.update({
    content: `You Selected ${interaction.values[0]}`,
    components: [characterSelection],
  });
}
