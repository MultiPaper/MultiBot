import {
    ChatInputApplicationCommandData, ChatInputCommandInteraction
} from "discord.js";



export interface Command extends ChatInputApplicationCommandData {
    handle: (interaction: ChatInputCommandInteraction) => void;
}