import { Client, Message } from "discord.js";

export interface ICommandsProps {
  client: Client,
  message: Message,
  args: string[]
}

export interface Commands {
  [index: string]: {
    enable: boolean;
    // eslint-disable-next-line no-unused-vars
    execute: (props: ICommandsProps) => void;
  }
}