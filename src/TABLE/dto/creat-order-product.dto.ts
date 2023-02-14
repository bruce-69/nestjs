import { IsPositive, IsString, IsUUID } from 'class-validator';
import { Product } from 'src/product/entities/product.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, isUUID } from 'class-validator';

export class creatOrderProductDto {
  @IsUUID()
  @ApiProperty({
    description: 'id product',
    example: '1',
  })
ProductId: string;


  @IsInt()
  @IsPositive()
  @ApiProperty({
    description:'',
    example:'1',

  })
  quantity: number;


@IsString()
@ApiProperty({
description:'gvi',
example:'sem',
})
  description: string;
}

