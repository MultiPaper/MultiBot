import { ApplicationCommandOptionType } from "discord.js";
import { Command } from "../structures/Command";
import { errorEmbed, linkEmbed } from "../utils/EmbedUtil";

export const UrlCommand: Command = {
    name: "url",
    description: "Returns a link to the specified topic",
    options: [
        {
            name: "topic",
            description: "The specified topic",
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [
                { name: "architecture", value: "architecture" },
                { name: "download", value: "download" },
                { name: "github", value: "github" },
                { name: "multilib", value: "multilib" },
                { name: "paste", value: "paste" },
                { name: "plugins", value: "plugins" },
            ],
        },
    ],

    async handle(interaction) {
        const topic = interaction.options.getString("topic")

        if (!topic || !links.has(topic)) {
            await interaction.reply({ embeds: [errorEmbed] })
            return
        }

        await interaction.reply({ embeds: [linkEmbed(links.get(topic)!!)] })
    },


}

const links = new Map<string, string[]>([
    ["download", ["Download", "The latest builds for the master and MultiPaper server can be found on the [downloads page](https://multipaper.io/download.html)"]],
    ["github", ["GitHub", "The source code can be found on the [MultiPaper repository](https://github.com/MultiPaper/MultiPaper)"]],
    ["multilib", ["MultiLib", "A library that provides a range of useful methods to help make plugins compatible with MultiPaper can be found [here](https://github.com/MultiPaper/MultiLib)"]],
    ["architecture", ["Architecture", "Learn how the master and node servers work together to sync worlds, entities and players [here](https://multipaper.io/howitworks.html)"]],
    ["plugins", ["Plugins", "Download [plugins](https://github.com/MultiPaper) that have already been ported to support MultiPaper"]],
    ["paste", ["Pastebins", "Trying to send logs? Consider using [Pastebin](https://pastebin.com/) or [Hastebin](https://hastebin.com/)"]]
])
