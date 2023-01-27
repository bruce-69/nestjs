import { tableService } from './table.service';
import { Controller, Get, Post } from '@nestjs/common';
/* import { table } from 'console';
 */


@Controller('table')
export class TableController {
    constructor(tableService:tableService){}
    @Get()
    findAll(){
        return 'buscar tadas as  mesa';
    }

    @Post()
    create(){
        return 'criar uma mesa';
    }
}

