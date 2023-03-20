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
import { TicketController } from './ticket/ticket.controller';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'inventariodb_test',
      entities: [Category, Brand, Client, Product],
      synchronize: false,
    }),
    CategoryModule,
    BrandModule,
    ClientModule,
    ProductModule,
    TicketModule,
  ],
  controllers: [AppController, TicketController],
  providers: [AppService ],
})
export class AppModule {}
