import { Product} from 'src/product/entities/product.entity';

import { Table } from "@prisma/client"; 
import { User } from "@prisma/client"; 
export class Order {
  id?: string;
  user?: User;
  table?: Table;
  createdAt?: Date;
  updatedAt?: Date;
  products?: Product[];
}