import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ConnectionOptions, ConnectionOptionsReader } from 'typeorm';
import { Brand } from '../brand/entity/brand.entity';
import { Category } from '../category/entity/category.entity';
import { Client } from '../client/entity/client.entity';
import { ItemTicket } from '../item-ticket/entity/item-ticket.entity';
import { Payment } from '../payment/entity/payment.entity';
import { Product } from '../product/entity/product.entity';
import { Ticket } from '../ticket/entity/ticket.entity';

export const DatabaseProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  async useFactory(config: ConfigService) {
    const envirioment = config.get('NODE_ENV');

    const dbConfig = {
      type: 'mysql',
      host: config.get('DB_HOST'),
      port: config.get('DB_PORT'),
      username: config.get('DB_USER'),
      password: config.get('DB_PASSWORD'),
      database: config.get('DB_NAME'),
      entities: [Category, Brand, Client, Product, Ticket, ItemTicket, Payment],
      synchronize: false,
    } as ConnectionOptions;

    return dbConfig;
  },
});
