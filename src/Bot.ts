import { Client } from "discord.js";
import * as dotenv from "dotenv";
import onReady from "./events/onReady";
import onInteraction from "./events/onInteraction"
import { Command } from "./structures/Command";
import { FAQCommand } from "./commands/faq";
import { TryCommand } from "./commands/general";
import { UrlCommand } from "./commands/link";

dotenv.config();
const client = new Client({ intents: [] });
const token = process.env.token;

export const Commands: Command[] = [
    FAQCommand, TryCommand, UrlCommand
]

onReady(client);
onInteraction(client);

client.login(token);
