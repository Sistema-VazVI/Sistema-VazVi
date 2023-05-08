import { Client } from "src/client/entity/client.entity";
import { Payment } from "src/payment/entity/payment.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ticket{
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    total: number;

    @Column()
    is_payed: boolean;

    @OneToMany(() => Payment, (payment: Payment) => payment.ticket)
    payment: Payment[];

    @OneToOne(() => Client, (client: Client) => client.id)
    @JoinColumn()
    client: Client;
}