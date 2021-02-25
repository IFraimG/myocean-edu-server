import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as path from "path"
import * as fs from "fs"
import * as uuid from "uuid"

export enum FileType {
    IMAGE = "image",
    VIDEO = "video",
    AUDIO = "audio",
    PDF = "pdf"
}

@Injectable()
export class FileService {
    constructor() {}

    createFile(type: FileType, file): string {
        try {
            const fileExtension = file.originalname.split(".").pop()
            const fileName = uuid.v4() + "." + fileExtension

            const filePath = path.resolve("static", type)
            if (!fs.existsSync(filePath)) fs.mkdirSync(filePath, {recursive: true})
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)

            return fileName
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    removeFile(filename: string) {}
}