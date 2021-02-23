import { FileService } from './../services/file.service';
import { CoursesService } from './../services/courses.service';
import { CoursesController } from './../controllers/courses.controller';
import { Module } from "@nestjs/common";
import { coursesProvider } from "src/providers/courses.provider";
import { usersProviders } from 'src/providers/users.provider';


@Module({
    controllers: [CoursesController],
    providers: [CoursesService, FileService, ...coursesProvider, ...usersProviders],
    exports: [CoursesService]
})
export class CoursesModule {}