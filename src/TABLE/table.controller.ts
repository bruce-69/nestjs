import { Controller, Get } from '@nestjs/common';
import { table } from 'console';



@Controller('table')
export class tablecontroller {
    @Get()
    findAll(){
        return 'buscar mesa';
    }
}