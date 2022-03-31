"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopulatorService = void 0;
const common_1 = require("@nestjs/common");
const repository_service_1 = require("./repository/repository.service");
let PopulatorService = class PopulatorService {
    constructor(repository) {
        this.repository = repository;
    }
    create(createPopulatorDto) {
        return "This action adds a new populator";
    }
    findAll() {
        return `This action returns all populator`;
    }
    findOne(id) {
        return this.repository.findOne(id);
    }
    update(id, updatePopulatorDto) {
        return `This action updates a #${id} populator`;
    }
    remove(id) {
        return `This action removes a #${id} populator`;
    }
};
PopulatorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_service_1.RepositoryService])
], PopulatorService);
exports.PopulatorService = PopulatorService;
//# sourceMappingURL=populator.service.js.map