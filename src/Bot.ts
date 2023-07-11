import { Client } from "discord.js";
import * as dotenv from "dotenv";
import { FAQCommand } from "./commands/faq";
import { TryCommand } from "./commands/general";
import { UrlCommand } from "./commands/link";
import onInteraction from "./events/onInteraction";
import onReady from "./events/onReady";
import { Command } from "./structures/Command";
import onMessageCreate from "src/events/onMessageCreate";

dotenv.config();
const client = new Client({ intents: [
    'MessageContent',
    'GuildMessages'
] });
const token = process.env.token;

export const Commands: Command[] = [
    FAQCommand, TryCommand, UrlCommand
]

onReady(client);
onInteraction(client);
onMessageCreate(client);

client.login(token);
