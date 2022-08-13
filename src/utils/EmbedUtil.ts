import { APIEmbedField, EmbedBuilder } from "discord.js";
import { Prompt } from "../structures/Prompts";

export function genericEmbed(description: string): EmbedBuilder {
    return new EmbedBuilder().setColor(0xe9c121).setDescription(description);
}

export function faqEmbed(title: string, set: Prompt[], questionNo: number | null) {
    const embed = new EmbedBuilder()
        .setColor("Green")
        .setTitle(title.charAt(0).toUpperCase() + title.slice(1))

    set = questionNo && questionNo <= set.length ? [set[questionNo - 1]] : set
    var description = ""

    set.forEach(prompt => {
        description += `\n\`${set.indexOf(prompt) + 1}. ${prompt.question}\`\n\n${prompt.answer}\n\n`
    })

    embed.setDescription(description)
    return embed
}

export function linkEmbed(link: string[]) {
    return new EmbedBuilder()
        .setColor("Green")
        .setTitle(link[0])
        .setDescription(link[1])
}

export const errorEmbed = new EmbedBuilder()
    .setColor("Red")
    .setDescription("`An unexpected error has occured`")