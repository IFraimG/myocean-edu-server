import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table
export class Stundent extends Model<Stundent> {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    firstName: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    lastName: string
    
    @Column({
        type: DataType.STRING,
        primaryKey: true
    })
    id: string

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    email: string
    
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string
    
    @Column({ type: DataType.STRING })
    dateCreated: string

    @Column({ type: DataType.ARRAY(DataType.STRING) })
    activeCourses?: Array<string>

    @Column({ type: DataType.ARRAY(DataType.STRING) })
    finishedCourses?: Array<string>
}