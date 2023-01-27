import { tableService } from './table.service';
import { Module } from '@nestjs/common';
import { TableController } from './table.controller';

@Module({
    controllers:[TableController],
    providers:[ tableService],
})
export class TableModule {}