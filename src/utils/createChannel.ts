import { IChannelCreate } from "../DTO/ChannelDTO";

export async function createChannel({ guild, categoryID, channelName, limit, membersPermissions }: IChannelCreate) {
  const channel = await guild.channels.create(channelName, {
    type: "voice",
    userLimit: limit,
    permissionOverwrites: membersPermissions,
  });

  channel.setParent(categoryID);

  return channel;
}