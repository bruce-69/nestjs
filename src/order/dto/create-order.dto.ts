import { Product } from 'src/product/entities/product.entity';
 
import { ApiProperty } from '@nestjs/swagger';
import { isInt, , isPositive, isUUID } from 'class-validator';
 
export class CreateOrderDto {
    @isUUID()
  @ApiProperty({
    description: 'loren',
    example:'1',

})
  userId: string;
  @isInt()
  @isPositive()
@ApiProperty({
    description:"loren"
    example:'1'
})
  tablenumber: number;

@isUUID(undefined,{ each:true})
@ApiProperty({
    description:'loren'
    example:'loren'
})

  Products: string[];
}
