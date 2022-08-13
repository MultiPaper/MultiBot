import { Client } from "discord.js";
import { Commands } from "../Bot";

export default (client: Client): void => {
    client.once("ready", async () => {
        if (!client.user || !client.application) return;
        await client.application.commands.set(Commands);
        console.log(`Bot logged in as ${client.user.tag}`);
    });
};
