import { Lessons } from './../schemas/lessons.entity';
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class LessonsService {
    constructor(@Inject("lessons") private readonly lesson: typeof Lessons) {}
}