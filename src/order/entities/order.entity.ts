import { Product } from 'src/product/entities/product.entity';
import { Table } from '@prisma/client';
 import { User } from 'src/user/entities/user.entity';
 
export class Order {
  id?: string;
   user?: user;
  table?: Table;
  createdAt?: Date;
  updatedAt?: Date;
  products?: product[]
}
