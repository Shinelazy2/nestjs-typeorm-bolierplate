import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionsFilter } from './common/filters/global.exception.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 글로벌 예외 필터 등록
  app.useGlobalFilters(new GlobalExceptionsFilter());

  await app.listen(3000);
}
bootstrap();
