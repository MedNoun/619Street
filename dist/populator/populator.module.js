"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopulatorModule = void 0;
const common_1 = require("@nestjs/common");
const populator_service_1 = require("./populator.service");
const populator_controller_1 = require("./populator.controller");
const repository_service_1 = require("./repository/repository.service");
let PopulatorModule = class PopulatorModule {
};
PopulatorModule = __decorate([
    (0, common_1.Module)({
        controllers: [populator_controller_1.PopulatorController],
        providers: [populator_service_1.PopulatorService, repository_service_1.RepositoryService],
    })
], PopulatorModule);
exports.PopulatorModule = PopulatorModule;
//# sourceMappingURL=populator.module.js.map