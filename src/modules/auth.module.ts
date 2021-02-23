import { JwtStrategy } from './../configs/jwt.strategy';
import { AuthController } from './../controllers/auth.controller';
import { LocalStrategy } from './../configs/local.strategy';
import { AuthSerivce } from './../services/auth.service';
import { UsersModule } from './users.module';
import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from '@nestjs/jwt';


@Module({
    imports: [
        PassportModule, 
        UsersModule,
        JwtModule.register({
            secret: process.env.SECRET_KEY,
            signOptions: { expiresIn: process.env.TOKEN_EXPIRATION }
        })
    ],
    providers: [AuthSerivce, LocalStrategy, JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule {}