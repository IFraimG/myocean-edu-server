import { StudentDTO, StudentLoginDTO } from './../dto/student.dto';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';
import { Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthSerivce {
    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) {}

    async validateStudent(email: string, pass: string) {
        let user = await this.userService.getUserByEmail(email)
        if (!user) return null

        let match = await bcrypt.compare(pass, user.password)
        if (!match) return null

        const { password, ...result } = user['dataValues'];
        return result;
    }
    
    public async create(user: StudentDTO) {
        let pass: string = await bcrypt.hash(user.password, 10);
        const newUser = await this.userService.createStudent({ ...user, password: pass });
        const { password, ...result } = newUser['dataValues'];

        const token = await this.jwtService.signAsync({email: user.email, id: user.id})
        return { user: result, token };
    }
    public async login(user: StudentLoginDTO) {
        let token = await this.jwtService.signAsync({email: user.email, id: user.id})
        return { user, token }
    }
}