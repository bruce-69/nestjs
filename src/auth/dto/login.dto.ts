import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class logindto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'nic usuario',
    example: 'paulo',
  })
  nickname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description:'senha sudo',
    example:'123456',
  })
  password: string;
}
