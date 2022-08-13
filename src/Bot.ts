import { Client } from "discord.js";
import * as dotenv from "dotenv";
import { FAQCommand } from "./commands/faq";
import { TryCommand } from "./commands/general";
import { UrlCommand } from "./commands/link";
import onInteraction from "./events/onInteraction";
import onReady from "./events/onReady";
import { Command } from "./structures/Command";

dotenv.config();
const client = new Client({ intents: [] });
const token = process.env.token;

export const Commands: Command[] = [
    FAQCommand, TryCommand, UrlCommand
]

onReady(client);
onInteraction(client);
onMessage(client)

client.login(token);
