
import { Table } from './../entities/table.entity';
import { CreateTableDto } from './dto/creat-table.dto';
import { Injectable } from '@nestjs/common';




@Injectable()
export class tableService {
  tables: Table[] = [];

  findAll() {
    return this.tables;
  }

  create(CreateTableDto: CreateTableDto) {
    const table: Table = { id: 'mario', ...CreateTableDto };

    this.tables.push(table);

    return table;
  }
}
