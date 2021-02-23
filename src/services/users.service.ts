import { StudentDTO } from './../dto/student.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Stundent } from 'src/schemas/students.entity';


@Injectable()
export class UsersService {
    constructor (@Inject("users") private readonly student: typeof Stundent) {}

    async createStudent(usersData: StudentDTO): Promise<any> {
        let userData = {
          firstName: usersData.firstname,
          lastName: usersData.lastname,
          email: usersData.email,
          password: usersData.password,
          id: "",
          dateCreated: null
        }
      
        let isNotUser = false
        let words = "abcdefghijklmnopqrstuvwxyz";
        while (isNotUser != true) {
          let id = ""
          for (let i = 0; i <= 14; i++) {
            id += words.charAt(Math.floor(Math.random() * words.length))
          }
          let isUser = await this.student.findOne({where: {id: id}})
          if (isUser == null) {
            isNotUser = true
            userData.id = id
          }
        }
        
        return await this.student.create<any>(userData)
    }

    async updateStudent() {}

    async deleteStudent(usersID: Array<string>) {
      usersID.map((id: string) => this.student.destroy({where: {id: id}}))
      return "Пользователи удалены"
    }

    async getAllStudents() {
      let users = await this.student.findAll();
      return users
    }

    async getUserByName(firstname: string, lastname: string) {
      let user = await this.student.findOne({where: {firstName: firstname, lastName: lastname}})
      return user
    }

    async getUserByID(id: string) {
      let user = await this.student.findOne({where: {id: id}})
      return user
    }

    async getUserByEmail(email: string) {
      let user = await this.student.findOne({where: {email: email}})
      return user
    }
}