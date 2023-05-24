import { Ticket } from 'src/ticket/entity/ticket.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  debt: number;

  @OneToMany(() => Ticket, (ticket: Ticket) => ticket.client)
  tickets: Ticket[];
}
