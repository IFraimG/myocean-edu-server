import { AppModule } from './modules/app.module';
import { NestFactory } from '@nestjs/core';
import { ValidateInputPipe } from './validators/validate.pipe';

async function startServer() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api")
  app.useGlobalPipes(new ValidateInputPipe())
  app.enableCors()
  
  await app.listen(PORT);
}
startServer();
