import { databaseConfig } from './../configs/database.config';
import { Sequelize } from "sequelize-typescript"
import { Stundent } from 'src/schemas/students.entity';
import { Course } from 'src/schemas/courses.entity';

export const databaseProvider = [{
    provide: "SEQUELIZE",
    useFactory: async () => {
        let config = null
        switch (process.env.NODE_ENV) {
            case "development": config = databaseConfig.development
            case "production": config = databaseConfig.production
            default: config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config)
        sequelize.addModels([Stundent, Course])
        await sequelize.sync()
        await sequelize.authenticate()
        return sequelize
    }
}]