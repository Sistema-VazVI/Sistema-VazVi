import { DynamicModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService } from '@nestjs/config';
import { ConnectionOptions, ConnectionOptionsReader } from "typeorm";
import { Brand } from "src/brand/entity/brand.entity";
import { Category } from "src/category/entity/category.entity";
import { Client } from "src/client/entity/client.entity";
import { ItemTicket } from "src/item-ticket/entity/item-ticket.entity";
import { Payment } from "src/payment/entity/payment.entity";
import { Product } from "src/product/entity/product.entity";
import { Ticket } from "src/ticket/entity/ticket.entity";
import { User } from "src/user/entity/user.entity";

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
        const envirioment = config.get("NODE_ENV")

        const dbConfig = {
            type: 'mysql',
            host: config.get('DB_HOST'),
            port: config.get('DB_PORT'),
            username: config.get('DB_USER'),
            password: config.get('DB_PASSWORD'),
            database: config.get('DB_NAME'),
            entities: [Category, Brand, Client, Product, Ticket, ItemTicket, Payment, User],
            synchronize: false,
        } as ConnectionOptions

        return dbConfig
    }
})