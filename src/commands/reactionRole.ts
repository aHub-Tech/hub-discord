import { MessageReaction } from "discord.js";
import { MessageService } from "../database/services/MessageService";
import { ICommandsProps } from "../DTO/CommandsDTO";

const { message: messageReaction, reactions } = require('../../reaction.json');

const reactionRole = ({ client, message, args }: ICommandsProps) => {
  const messageService = new MessageService();

  message.channel.send(messageReaction).then(async msg => {
    reactions.map(async (reaction: { name: string }) => {
      await msg.react(reaction.name);

      await messageService.create({
        guild_id: String(message.guild?.id),
        message_id: msg.id
      });
    });

    const filter = (reaction: MessageReaction) => reactions.includes(reaction.emoji.name);

    const reactionCollector = msg.createReactionCollector(filter);

    reactionCollector.on('collect', (reaction, user) => {
      const guildMember = message.guild?.members.cache.get(user.id);
      const emojiName = reaction.emoji.name;
    
      const findEmojis = reactions.find((emoji: { name: string, reaction_id: string }) => emoji.name === emojiName);
    
      if(!findEmojis) return;
    
      guildMember?.roles.add(findEmojis.reaction_id);
    });
  });
}

export const details = {
  name: "rr",
  description: "Comando para adicionar cargos por reação.",
  aliasses: [ "reactionrole" ],
  enable: true,
  execute: reactionRole,
}