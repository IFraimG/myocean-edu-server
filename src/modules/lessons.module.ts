import { LessonsService } from './../services/lessons.service';
import { Module } from "@nestjs/common";
import { LessonsController } from "src/controllers/lessons.controller";
import { lessonsProvider } from "src/providers/lessons.provider";

@Module({
    providers: [...lessonsProvider, LessonsService],
    exports: [...lessonsProvider],
    controllers: [LessonsController]
})
export class LessonsModule {}