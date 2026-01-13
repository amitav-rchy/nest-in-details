import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';
import { RabbitModule } from './rabbit/rabbit.module';

@Module({
  imports: [CatModule, DogModule, RabbitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
