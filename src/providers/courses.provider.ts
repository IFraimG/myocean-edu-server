import { Course } from "../schemas/courses.entity";

export const coursesProvider = [{ provide: "courses", useValue: Course }]