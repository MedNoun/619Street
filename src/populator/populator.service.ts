import { Injectable } from "@nestjs/common";
import { CreatePopulatorDto } from "./dto/create-populator.dto";
import { UpdatePopulatorDto } from "./dto/update-populator.dto";
import { RepositoryService } from "./repository/repository.service";

@Injectable()
export class PopulatorService {
  constructor(private readonly repository: RepositoryService) {}
  create(createPopulatorDto: CreatePopulatorDto) {
    return "This action adds a new populator";
  }

  findAll() {
    return `This action returns all populator`;
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }
  findCategoriePageContent(){
    return this.repository.findCategoriePageContent()
  }
  update(id: number, updatePopulatorDto: UpdatePopulatorDto) {
    return `This action updates a #${id} populator`;
  }

  remove(id: number) {
    return `This action removes a #${id} populator`;
  }
}
