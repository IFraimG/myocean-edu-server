import { StudentDTO } from './../dto/student.dto';
import { AuthSerivce } from './../services/auth.service';
import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';


@Controller("/auth")
export class AuthController {
    constructor(private authService: AuthSerivce) {}

    @UseGuards(AuthGuard("local"))
    @Post("/login")
    async login(@Request() req: any) {
        return await this.authService.login(req.user)
    }

    @Post("/create")
    async create(@Body() userData: StudentDTO) {
        return await this.authService.create(userData)
    }

    @UseGuards(AuthGuard("jwt"))
    @Get("/check")
    async checkAuth(@Request() req) {
        return req.user
    }
}