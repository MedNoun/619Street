import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PopulatorService } from "./populator.service";
import { CreatePopulatorDto } from "./dto/create-populator.dto";
import { UpdatePopulatorDto } from "./dto/update-populator.dto";

@Controller("populator")
export class PopulatorController {
  constructor(private readonly populatorService: PopulatorService) {}

  @Post()
  create(@Body() createPopulatorDto: CreatePopulatorDto) {
    return this.populatorService.create(createPopulatorDto);
  }

  @Get()
  findAll() {
    return this.populatorService.findAll();
  }
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.populatorService.findOne(id);
  }
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePopulatorDto: UpdatePopulatorDto
  ) {
    return this.populatorService.update(+id, updatePopulatorDto);
  }
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.populatorService.remove(+id);
  }
}
