import { AuthSerivce } from './../services/auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthSerivce) {
        super()
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.authService.validateStudent(username, password)
        if (!user) throw new UnauthorizedException("Данные введены неверно")
        return user
    }
}