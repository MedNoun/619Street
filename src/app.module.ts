import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PopulatorResolver } from './populator/populator.resolver';
import { PopulatorModule } from './populator/populator.module';

@Module({
  imports: [PopulatorModule],
  controllers: [AppController],
  providers: [AppService, PopulatorResolver],
})
export class AppModule {}
