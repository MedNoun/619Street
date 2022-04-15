import { PopulatorService } from "./populator.service";
import { CreatePopulatorDto } from "./dto/create-populator.dto";
import { UpdatePopulatorDto } from "./dto/update-populator.dto";
export declare class PopulatorController {
    private readonly populatorService;
    constructor(populatorService: PopulatorService);
    create(createPopulatorDto: CreatePopulatorDto): string;
    findAll(): string;
    findOne(id: string): any;
    update(id: string, updatePopulatorDto: UpdatePopulatorDto): string;
    remove(id: string): string;
}
