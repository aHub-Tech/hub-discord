const { reactions } = require('../../reaction.json');

export function getEmojis(emojiName: string) {
  const findEmojis = reactions.find((emoji: { name: string, reaction_id: string }) => emoji.name === emojiName);

  if(!findEmojis) return;

  return findEmojis
}