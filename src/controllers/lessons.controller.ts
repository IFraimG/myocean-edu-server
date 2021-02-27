import { LessonsService } from './../services/lessons.service';
import { Controller } from "@nestjs/common";

@Controller("/lesson")
export class LessonsController {
    constructor(private lessonsService: LessonsService) {}
    
}