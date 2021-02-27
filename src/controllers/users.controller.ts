import { StudentDTO } from './../dto/student.dto';
import { UsersService } from './../services/users.service';
import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";


@Controller("/users")
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get("/all")
    getAllUsers() {
        return this.usersService.getAllStudents()
    }

    @Get("/name")
    getUserByName(@Query("firstname") firstname: string, @Query("lastname") lastname: string) {
        return this.usersService.getUserByName(firstname, lastname)
    }

    @Get("/id")
    getUserByID(@Query("userID") userID: string) {
        return this.usersService.getUserByID(userID)
    }

    // @Post("/create")
    // createStudent(@Body() dto: StudentDTO) {
    //     return this.usersService.createStudent(dto)
    // }

    @Put("/update")
    updateStudent() {
        return this.usersService.updateStudent()
    }
    
    @Delete("/delete")
    deleteStudent(@Query("usersID") usersID: Array<string>) {
        return this.usersService.deleteStudent(usersID)
    }
    
}