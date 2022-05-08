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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopulatorController = void 0;
const common_1 = require("@nestjs/common");
const populator_service_1 = require("./populator.service");
const create_populator_dto_1 = require("./dto/create-populator.dto");
const update_populator_dto_1 = require("./dto/update-populator.dto");
let PopulatorController = class PopulatorController {
    constructor(populatorService) {
        this.populatorService = populatorService;
    }
    create(createPopulatorDto) {
        return this.populatorService.create(createPopulatorDto);
    }
    findAll() {
        return this.populatorService.findAll();
    }
    findOne(id, opt) {
        return opt
            ? this.populatorService.findOneLeight(id)
            : this.populatorService.findOne(id);
    }
    update(id, updatePopulatorDto) {
        return this.populatorService.update(+id, updatePopulatorDto);
    }
    remove(id) {
        return this.populatorService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_populator_dto_1.CreatePopulatorDto]),
    __metadata("design:returntype", void 0)
], PopulatorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PopulatorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Query)("opt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PopulatorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_populator_dto_1.UpdatePopulatorDto]),
    __metadata("design:returntype", void 0)
], PopulatorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PopulatorController.prototype, "remove", null);
PopulatorController = __decorate([
    (0, common_1.Controller)("populator"),
    __metadata("design:paramtypes", [populator_service_1.PopulatorService])
], PopulatorController);
exports.PopulatorController = PopulatorController;
//# sourceMappingURL=populator.controller.js.map