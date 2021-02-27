import { FileService } from './../services/file.service';
import { Controller, Get, HttpException, HttpStatus, Param, Res } from "@nestjs/common";
import fs from "fs"

@Controller("/files")
export class FilesController {
    constructor (private fileService: FileService) {}

    @Get("/:filename")
    async getImage(@Param("filename") filename: string, @Res() res: any) {
        if (fs.existsSync("static/image/" + filename)) res.sendFile(filename, { root: 'static/image'});
        else throw new HttpException("Изображение не найдено", HttpStatus.NOT_FOUND)
    }
}