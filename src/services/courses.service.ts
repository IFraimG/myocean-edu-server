import { Stundent } from './../schemas/students.entity';
import { createCourseDTO, keysDataDTO } from './../dto/course.dto';
import { FileService, FileType } from './file.service';
import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Course } from "src/schemas/courses.entity";
import { Op } from 'sequelize';

@Injectable()
export class CoursesService {
    constructor(
        @Inject("users") private readonly student: typeof Stundent, 
        @Inject("courses") private readonly course: typeof Course, 
        private fileService: FileService
    ) {}

    async create(dataCourse: createCourseDTO, img: any) {
        let courseID = null;
        let { title, description, admin, isFinished } = dataCourse
        let logo = null

        if (img != null) logo = this.fileService.createFile(FileType.IMAGE, img)
        let isNotUser = false
        let words = "abcdefghijklmnopqrstuvwxyz";
        while (isNotUser != true) {
          let id = ""
          for (let i = 0; i <= 14; i++) {
            id += words.charAt(Math.floor(Math.random() * words.length))
          }
          let isUser = await this.course.findOne({where: {courseID: id}})
          if (isUser == null) {
            courseID = id
            isNotUser = true
          }
        }
      
        let course = await this.course.create<any>({ title, description, admin, logo, courseID, isFinished })
        return course
    }

    async allCourses() {
        let courses = await this.course.findAll()
        if (courses == null) return []
        let coursesList: Array<any> = []

        courses.map((item: any, index: number) => {
            let logo = item.logo == null ? null : "http://localhost:5000/api/files/" + item.logo
            coursesList.push({ 
                id: item.courseID, admin: item.admin, logo: logo, title: item.title, isFinished: item.isFinished, key: index
            })
        })
        return coursesList
    }

    async deleteAllCourses(coursesData: Array<string>): Promise<string> {
        coursesData.map((id: string) => this.course.destroy({where: {courseID: id}}))
        return "deleted !"
    }

    async addUserToCourse(data: keysDataDTO) {
        let userData = await this.student.findOne({where: {id: data.userID}})
        if (userData == null) throw new HttpException({
            status: HttpStatus.NOT_FOUND, error: "Такого пользователя не существует"
        }, HttpStatus.NOT_FOUND) 
        
        let courseData = await this.course.findOne({where: {courseID: data.courseID}})
        if (courseData == null) throw new HttpException({
            status: HttpStatus.NOT_FOUND, error: "Такого курса не существует"
        }, HttpStatus.NOT_FOUND) 

        let users = courseData?.users == null ? [data.userID] : [...courseData.users, data.userID]
        let updateCourse = await courseData.update({users: users}, {where: { courseID: data.courseID }})

        return updateCourse
    }

    async getCurrentCourse(courseID: string) {
        let course = await this.course.findOne({where: {courseID: courseID}}) 
        if (course == null) throw new HttpException("Такого курса не существует", HttpStatus.NOT_FOUND) 
        return course 
    }

    async getFullDataCourse(dataID: keysDataDTO) {
        let course = await this.getCurrentCourse(dataID.courseID)
        // отправлять запросы к урокам
        return course
    }

    async getUserCourses(userID: string) {
        let coursesList = await this.course.findAll({where: {users: { [Op.contains]: [userID] }}})
        if (coursesList == null) throw new HttpException("Ваших курсов не найдено", HttpStatus.NOT_FOUND)
        return coursesList
    }
}