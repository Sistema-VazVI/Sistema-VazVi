import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entity/category.entity';
import { BrandModule } from './brand/brand.module';
import { Brand } from './brand/entity/brand.entity';
import { ClientModule } from './client/client.module';
import { Client } from './client/entity/client.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entity/product.entity';
import { ItemTicket } from './item-ticket/entity/item-ticket.entity';
import { ItemTicketModule } from './item-ticket/item-ticket.module';
import { Ticket } from './ticket/entity/ticket.entity';
import { TicketModule } from './ticket/ticket.module';
import { Payment } from './payment/entity/payment.entity';
import { PaymentModule } from './payment/payment.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    CategoryModule,
    BrandModule,
    ClientModule,
    ProductModule,
    TicketModule,
    ItemTicketModule,
    PaymentModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT');
  }
}
