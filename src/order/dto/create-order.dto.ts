import { IsPositive } from 'class-validator';
import { Product } from 'src/product/entities/product.entity';
import { creatOrderProductDto } from './../../TABLE/dto/creat-order-product.dto';
 
import { ApiProperty } from '@nestjs/swagger';
import { isInt, isPositive, isUUID, ValidateNested, IsUUID, IsInt } from 'class-validator';
import { type } from 'os';
 
export class CreateOrderDto {
    @IsUUID()
  @ApiProperty({
    description: 'loren',
    example:'1',

})
  userId: string;
  @IsInt()
  @IsPositive()
@ApiProperty({
    description:"loren"
    example:'1'
})
  tablenumber: number;
@ValidateNested({
  each:true,
})
@type(() => CreateOrderDto )
@ApiProperty({
    description:'loren'
    type:[creatOrderProductDto]
})

  Products: creatOrderProductDto[];
}
