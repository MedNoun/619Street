import { CreatePopulatorDto } from "./dto/create-populator.dto";
import { UpdatePopulatorDto } from "./dto/update-populator.dto";
import { RepositoryService } from "./repository/repository.service";
export declare class PopulatorService {
    private readonly repository;
    constructor(repository: RepositoryService);
    create(createPopulatorDto: CreatePopulatorDto): string;
    findAll(): string;
    findOne(id: string): any;
    findCategoriePageContent(): void;
    update(id: number, updatePopulatorDto: UpdatePopulatorDto): string;
    remove(id: number): string;
}
