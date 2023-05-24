import { IsNumber } from 'class-validator';

export class CreateTicketDto {
  @IsNumber()
  total: number;

  @IsNumber()
  is_payed: boolean;

  @IsNumber()
  clientId: number;
}
