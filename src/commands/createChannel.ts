import { OverwriteResolvable, PermissionString } from "discord.js";
import { ICommandsProps } from "../DTO/CommandsDTO";

import cron from 'node-cron';

const createChannel = ({ client, message, args }: ICommandsProps) => {
  const mentions = message.mentions.users;
  const everyoneRole = message.guild?.roles.everyone.id as string;

  message.delete();

  if(mentions.size <= 0) return message.reply("Desculpe, você precisa mencionar um ou mais membros");

  const permissions: PermissionString[] = [ 'CONNECT', 'SEND_MESSAGES', 'SPEAK', 'STREAM', 'VIEW_CHANNEL' ];
  const membersPermissions: OverwriteResolvable[] = [
    {
      id: everyoneRole,
      deny: permissions,
    },
    {
      id: message.author.id,
      allow: permissions,
    }
  ];

  const channelName = `${message.author.username}'s co-working`;

  mentions?.map(user => {
    membersPermissions.push({
      id: user.id,
      allow: permissions,
    });
  });

  message.guild?.channels.create(channelName, {
    type: "voice",
    userLimit: mentions.size + 1,
    permissionOverwrites: membersPermissions,
  });

  const job = cron.schedule("* */2 * * *", () => {
      const channel = message.guild?.channels.cache.find(channel => channel.name === channelName);

      if(channel) channel.delete();

      job.destroy();
  });

  job.start();
}

export const details = {
  name: "createchannel",
  description: "Comando para criar salas de co-working.",
  aliasses: [ "criarcanal", "coworking", "cowork", "work", "co-working" ],
  enable: true,
  execute: createChannel,
}