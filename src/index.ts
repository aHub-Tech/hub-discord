import { Client, MessageEmbed } from "discord.js";
import { event } from './events/message';
import fs from 'fs';
import path from 'path';
import { Commands } from "./DTO/CommandsDTO";

const client = new Client();

const commandsPath = path.join(__dirname, 'commands');

const commands: Commands = {};

fs.readdir(commandsPath, (error, files) => {
  files.map((file) => {
    const module = require(`./commands/${file}`);
    const { name, aliasses, enable, execute } = module.details;

    commands[name] = {
      enable,
      execute,
    };

    aliasses.map((alias: string) => {
      commands[alias] = {
        enable,
        execute,
      };
    });
  });
});

client.on('ready', () => {
  const status = [
    { name: "Seja bem-vindo(a) à HUB", type: 0 },
  ];

  function setActivity() {
    const randomStatus = status[Math.floor(Math.random() * status.length)];

    client.user?.setActivity(randomStatus);
  }

  setInterval(setActivity, 60000);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.systemChannel;

  if(!channel) return;

  const embed = new MessageEmbed();

  embed.setColor('#F72585');
  embed.setTitle('Welcome');
  embed.setThumbnail(String(member.user.avatarURL()));
  embed.setDescription(`Seja bem-vindo(a) ${member.user.username}`);

  channel.send(embed);
});

client.on('message', message => {
  event(client, message, commands);
});

client.login(process.env.SECRET_TOKEN);