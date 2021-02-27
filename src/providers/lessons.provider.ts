import { Lessons } from './../schemas/lessons.entity';

export const lessonsProvider = [{
    provide: "lessons",
    useValue: Lessons
}]