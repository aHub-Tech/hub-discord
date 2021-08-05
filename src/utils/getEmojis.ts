const { reactions } = require('../../reaction.json');

export function getEmoji(emojiName: string) {
  const emoji = reactions.find((emoji: { name: string, reaction_id: string }) => emoji.name === emojiName);

  if(!emoji) return;

  return emoji;
}