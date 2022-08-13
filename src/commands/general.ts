import { Command } from "../structures/Command";

export const TryCommand: Command = {
    name: "try",
    description: "For people who ask too much",
    async handle(interaction) {
        interaction.reply("https://tryitands.ee/")
    },
}