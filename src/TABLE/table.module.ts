import { PrismaModule } from './../prisma/prisma.module';
import { tableService } from './table.service';
import { Module } from '@nestjs/common';
import { TableController } from './table.controller';

@Module({ 
    imports:[PrismaModule],
    controllers:[TableController],
    providers:[ tableService],
})
export class TableModule {}