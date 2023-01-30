import { CreateTableDto } from './dto/creat-table.dto';
import { tableService } from './table.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { table } from 'console';

@Controller('table')
export class TableController {
  constructor(private tableService: tableService) {}
  
  @Get()
  findAll() {
    return this.tableService.findAll();
  }

  @Post()
  create(@Body() CreateTableDto: CreateTableDto) {
    return this.tableService.create(CreateTableDto);
  }
}
