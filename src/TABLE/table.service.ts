import { table } from 'console';
import { PrismaService } from './../prisma/prisma.service';

import { Table as data } from './../entities/table.entity';
import { CreateTableDto } from './dto/creat-table.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class tableService {

  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.table.findMany();
  }

  create(dto: CreateTableDto) {
    const table: data = { ...dto };

   return this.prisma.table.create({data});

      
    
  }
}
