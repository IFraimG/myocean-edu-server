import { keysDataDTO } from './../dto/course.dto';
import { CoursesService } from './../services/courses.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from '@nestjs/platform-express';


@Controller("/courses")
export class CoursesController {
    constructor(private coursesService: CoursesService) {}

    @Post("/create")
    @UseInterceptors(FileInterceptor("logo"))
    createCourse(@Body() dataCourse: any, @UploadedFile() logo: any) {
        return this.coursesService.create(dataCourse, logo)
    }

    @Get("/all")
    getAllCourses() {
        return this.coursesService.allCourses()
    }

    @Get("/current/:courseID")
    getCurrent(@Param("courseID") courseID: string) {
        return this.coursesService.getCurrentCourse(courseID)
    }

    @Get("/full/:courseID/:userID")
    getFull(@Param() dataID: keysDataDTO) {
        return this.coursesService.getFullDataCourse(dataID)
    }

    @Get("/user/:userID")
    getUserCourses(@Param("userID") userID: string) {
        return this.coursesService.getUserCourses(userID)
    }

    @Delete("/delete")
    deleteCourses(@Body() data: any) {
        return this.coursesService.deleteAllCourses(data.coursesData)
    }

    @Put("/addTo")
    addUserTo(@Body("data") data: keysDataDTO) {
        return this.coursesService.addUserToCourse(data)
    }
    
}