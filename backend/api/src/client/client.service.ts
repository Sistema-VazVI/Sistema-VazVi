import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Client } from './entity/client.entity';
import { CreateClientDto } from './dtos/createClient.dto';
import { UpdateClientDto } from './dtos/updateClient.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  findAll(searchFilter:string): Promise<Client[]> {
    const query = this.clientRepository.createQueryBuilder('product')
                                       .orderBy('product.name', 'ASC');
    if(searchFilter){
      query.andWhere('(product.name LIKE :searchFilter)', { searchFilter: `%${searchFilter}%` });
    }

    return query.getMany();
  }

  findById(id: number): Promise<Client>{
    return this.clientRepository.findOne({
      where: { id: id },
      relations: {tickets: true}
    });
  }

  create(client: CreateClientDto): Promise<CreateClientDto>{
    return this.clientRepository.save(client);
  }

  update(client:UpdateClientDto): Promise<UpdateResult>{
    return this.clientRepository.update({id:client.id}, client)
  }

  delete(id:number){
    return this.clientRepository.delete({id:id});
  }

}
