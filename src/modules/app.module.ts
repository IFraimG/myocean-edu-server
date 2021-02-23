import { AuthModule } from './auth.module';
import { FileModule } from './file.module';
import { CoursesModule } from './courses.module';
import { DatabaseModule } from './database.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users.module';

@Module({
    imports: [
        UsersModule,
        DatabaseModule,
        CoursesModule,
        FileModule,
        AuthModule,
        ConfigModule.forRoot({ isGlobal: true })
    ]
})
export class AppModule {

}