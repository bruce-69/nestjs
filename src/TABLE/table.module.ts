import { tablecontroller } from './table.controller';
import { Module } from '@nestjs/common';

@Module({
    controllers:[tablecontroller],
    providers:[],
})
export class TableModule {}