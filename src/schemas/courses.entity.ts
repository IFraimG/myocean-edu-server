import { Table, DataType, Model, Column } from "sequelize-typescript"

@Table
export class Course extends Model<Course> {
    @Column({ type: DataType.TEXT, allowNull: false })
    title: string

    @Column({ type: DataType.TEXT })
    description: string

    @Column({ type: DataType.TEXT })
    logo: string

    @Column({ type: DataType.TEXT, primaryKey: true })
    courseID: string

    @Column({ type: DataType.ARRAY(DataType.TEXT) })
    users: Array<string>

    @Column({ type: DataType.TEXT, allowNull: false })
    admin: string

    @Column({ type: DataType.ARRAY(DataType.TEXT) })
    lessons: Array<string>

    @Column({ type: DataType.ARRAY(DataType.TEXT) })
    moderators: Array<string>

    @Column({ type: DataType.BOOLEAN, defaultValue: false, allowNull: true })
    isFinished: boolean
}
