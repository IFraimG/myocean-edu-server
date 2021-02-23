import { Stundent } from "src/schemas/students.entity";

export const usersProviders = [{
    provide: "users",
    useValue: Stundent,
}];