import { getEmoji } from "./getEmojis";

describe("Emoji", () => {
  it("Should be able to return an emoji", () => {
    const emoji = getEmoji('☕');
    const expectedEmoji = { "name": "☕", "reaction_id": "862089271745314836" };

    expect(emoji).toMatchObject(expectedEmoji);
  });

  it("Should not be able to return an emoji", () => {
    const emoji = getEmoji('');

    expect(emoji).toBe(undefined);
  });
});