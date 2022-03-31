import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PopulatorModule } from './populator/populator.module';

@Module({
  imports: [PopulatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
