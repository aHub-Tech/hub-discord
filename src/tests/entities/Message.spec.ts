import { Message } from '../../entities/Message';

const message = new Message();

message.guild_id = "860667880479653888";
message.message_id = "868343902527189012";
message.created_at = new Date(1627192898833);

describe("Message", () => {
  it("Should return an object with the message information.", () => {
    expect(message).toMatchObject({
      guild_id: "860667880479653888",
      message_id: "868343902527189012",
      created_at: new Date(1627192898833),
    });
  });
});
