import { MessageReaction } from "discord.js";
import { ICommandsProps } from "../DTO/CommandsDTO";

const reactionRole = ({ client, message, args }: ICommandsProps) => {
  message.channel.send('test').then(async msg => {
    await msg.react('🚀');

    const filter = (reaction: MessageReaction) => ['🚀'].includes(reaction.emoji.name);

    const reactionCollector = msg.createReactionCollector(filter);

    reactionCollector.on('collect', (reaction, user) => {
      const guildMember = message.guild?.members.cache.get(user.id);

      guildMember?.roles.add('861291167878873138');
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