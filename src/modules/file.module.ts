import { FilesController } from './../controllers/files.controller';
import { FileService } from './../services/file.service';
import { Module } from "@nestjs/common";

@Module({
    providers: [FileService],
    controllers: [FilesController],
    exports: [FileService]
})
export class FileModule {}