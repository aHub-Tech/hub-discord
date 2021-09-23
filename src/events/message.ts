import { Client, Message } from 'discord.js';
import { Commands } from '../DTO/CommandsDTO';

const config = require('../../config.json');

function event(client: Client, message: Message, commands: Commands) {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(' ');
  const command = String(args.shift()).toLowerCase();

  const cmd = commands[command];

  if (!cmd || !cmd.enable) return;

  cmd.execute({ client, message, args });
}

export { event };