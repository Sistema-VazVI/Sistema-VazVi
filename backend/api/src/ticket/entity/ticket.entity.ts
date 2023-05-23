import { Client } from "src/client/entity/client.entity";
import { Payment } from "src/payment/entity/payment.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ItemTicket } from '../../item-ticket/entity/item-ticket.entity';

@Entity()
export class Ticket{
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    total: number;

    @Column()
    payed: number;

    @Column()
    is_payed: boolean;

    @OneToMany(() => Payment, (payment: Payment) => payment.ticket)
    payments: Payment[];

    @OneToMany(() => ItemTicket, (item: ItemTicket) => item.ticket)
    items: ItemTicket[];

    @OneToOne(() => Client, (client: Client) => client.id)
    @JoinColumn()
    client: Client;
}