import { Product } from "../../product/entity/product.entity";
import { Ticket } from "../../ticket/entity/ticket.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ItemTicket{
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @OneToOne(() => Ticket, (ticket: Ticket) => ticket.id)
    @JoinColumn()
    ticket: Ticket;

    @OneToOne(() => Product, (product: Product) => product.id)
    @JoinColumn()
    product: Product;

    @Column()
    quantity: number;

}
