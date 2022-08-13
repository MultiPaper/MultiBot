import { Client, Message, MessageType } from "discord.js";

export default (client: Client): void => {
    client.on('messageCreate', (msg: Message) => {
        if (msg.type == MessageType.UserJoin)
            msg.react('👋')
    })
}