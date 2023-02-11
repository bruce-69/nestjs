import { TableModule } from './TABLE/table.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [TableModule, PrismaModule, UserModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
