import { IsNotEmpty, IsEmail, MinLength } from "class-validator"

export class StudentDTO {
    @MinLength(2)
    readonly firstname: string

    @MinLength(2)
    readonly lastname: string

    @MinLength(6)
    readonly password: string
    
    @IsEmail()
    readonly email: string

    public id?: string
}

export class StudentLoginDTO {
    readonly email: string
    readonly remember?: boolean
    public password: string
    public id: string
}