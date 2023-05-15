import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Product } from './entity/product.entity';
import { CreateProductDto } from './dtos/createProduct.dto';
import { UpdateProductDto } from './dtos/updateProduct.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  findAll(categoryId: number, brandId:number, searchFilter:string): Promise<Product[]> {
    const query = this.productRepository.createQueryBuilder('product')
                                        .leftJoinAndSelect('product.category', 'category')
                                        .leftJoinAndSelect('product.brand', 'brand')
                                        .orderBy('product.name', 'ASC');
    if(categoryId){
      query.andWhere('product.categoryId = :categoryId',{categoryId});
    }
    if(brandId){
      query.andWhere('product.brandId = :brandId',{brandId});
    }
    if(searchFilter){
      query.andWhere('(product.name LIKE :searchFilter)', { searchFilter: `%${searchFilter}%` });
    }

    return query.getMany();
  }

  findById(id: number): Promise<Product> {
    return this.productRepository.findOne({ 
      where: { id: id },
      relations: {
        category: true,
        brand: true,
      },
    });
  }

  create(product: CreateProductDto): Promise<CreateProductDto> {
    return this.productRepository.save(product);
  }

  update(product: UpdateProductDto): Promise<UpdateResult> {
    return this.productRepository.update({ id: product.id }, product);
  }

  delete(id: number) {
    return this.productRepository.delete({ id: id });
  }
}
