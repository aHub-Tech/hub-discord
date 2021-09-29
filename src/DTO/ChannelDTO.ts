import { Guild, OverwriteResolvable } from "discord.js";

export interface IChannelCreate {
  guild: Guild;
  categoryID: string;
  channelName: string;
  limit: number;
  membersPermissions: OverwriteResolvable[];
}