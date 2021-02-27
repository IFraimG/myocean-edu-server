import { Table, Model, DataType, Column } from "sequelize-typescript";

@Table
export class Lessons extends Model<Lessons> {
    @Column({ type: DataType.STRING, allowNull: false })
    title: string

    @Column({ type: DataType.STRING, primaryKey: true })
    lessonID: string

    @Column({ type: DataType.STRING, primaryKey: true })
    courseID: string

    @Column({ type: DataType.STRING, primaryKey: true })
    teacherID: string

    @Column({ type: DataType.STRING, allowNull: true })
    time: String

    @Column({ type: DataType.STRING, allowNull: false })
    videoLink: string
    
    @Column({ type: DataType.STRING, unique: true })
    homeWorkID: string

    @Column({ type: DataType.STRING, unique: true })
    classWorkID: string

    @Column({ type: DataType.STRING, unique: true, allowNull: true })
    recoursesID: string

    @Column({ type: DataType.STRING, allowNull: true })
    progress: number
    
    @Column({ type: DataType.STRING, primaryKey: true })
    controlWorkID: string
}
