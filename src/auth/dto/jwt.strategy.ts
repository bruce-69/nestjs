import { UnauthorizedException } from '@nestjs/common';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { async } from 'rxjs';

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequst: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExperation: 'false',
      secretorKey: process.env.JWT_SECRET,
    });
  }

  async validate(payLoad: { nickname: string }) {
    const user = await this.prisma.user.findUnique({
      where: { nickname: payLoad.nickname },

    });

if (!user) {
    throw new UnauthorizedException(
        'usuario nao exesiste',
    );
    
    }
    
delete user.password;


return user;
  }
}
