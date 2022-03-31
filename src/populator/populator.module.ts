import { Module } from "@nestjs/common";
import { PopulatorService } from "./populator.service";
import { PopulatorController } from "./populator.controller";
import { RepositoryService } from "./repository/repository.service";

@Module({
  controllers: [PopulatorController],
  providers: [PopulatorService, RepositoryService],
})
export class PopulatorModule {}
