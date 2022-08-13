import { ApplicationCommandOptionType } from "discord.js";
import { Command } from "../structures/Command";
import { faq } from "../structures/Prompts";
import { errorEmbed, faqEmbed } from "../utils/EmbedUtil";

export const FAQCommand: Command = {
    name: "faq",
    description: "Answers some frequently asked questions regarding MultiPaper",
    options: [
        {
            name: "topic",
            description: "The specific topic",
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [
                { name: "general", value: "general" },
                { name: "master", value: "master" },
                { name: "node", value: "node" },
                { name: "plugins", value: "plugins" }
            ],
        },
        {
            name: "question",
            description: "The specific question regarding the topic",
            type: ApplicationCommandOptionType.Integer,
            required: false
        }
    ],

    async handle(interaction) {
        const topic = interaction.options.getString("topic")
        var questionNo = interaction.options.getInteger("question")
        var questionSet

        switch (topic) {
            case "general": questionSet = faq[0]; break;
            case "master": questionSet = faq[1]; break;
            case "node": questionSet = faq[2]; break;
            case "plugins": questionSet = faq[3]; break;
            default: questionSet = null
        }

        if (!questionSet) {
            await interaction.reply({ embeds: [errorEmbed] })
            return
        }

        await interaction.reply({ embeds: [faqEmbed(topic!!, questionSet, questionNo)] })
    },
}

