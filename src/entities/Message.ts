import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('messages')
class Message {
  @PrimaryColumn()
  readonly id?: string;

  @Column()
  guild_id: string;

  @Column()
  message_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }
}

export { Message }