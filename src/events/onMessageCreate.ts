import { ChatInputCommandInteraction, Client, Interaction, Message } from "discord.js";
import { Commands } from "../Bot";
import { errorEmbed } from "../utils/EmbedUtil";

export default (client: Client): void => {
  client.on("messageCreate", async (message: Message) => {
    if (message.content.toLowerCase().includes('folia')) {
      message.reply('**This is the MultiPaper discord server.**\nFor Folia-related questions, head to the PaperMC server instead: https://discord.gg/papermc')
    }
  });
};