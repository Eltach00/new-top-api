import { IsNumber, IsString } from 'class-validator';

export class FindProductDto {
  @IsString()
  categore: string;

  @IsNumber()
  limit: number;
}
