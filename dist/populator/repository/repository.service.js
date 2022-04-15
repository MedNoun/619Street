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
exports.RepositoryService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
let RepositoryService = class RepositoryService {
    constructor() {
        this.obj = this.readJson("shared", "populate");
    }
    readJson(resource, id) {
        let url = "src/assets/database/" + resource + "/" + id + ".json";
        const fileContent = fs.readFileSync(url, "utf-8");
        const json = JSON.parse(fileContent);
        return json;
    }
    writeToJson(resource, id, data) {
        let url = "src/assets/database/" + resource + "/" + id + ".json";
        fs.writeFileSync(url, JSON.stringify(data));
    }
    findOnePopulate(id) {
        return Object.assign(Object.assign({}, this.obj), this.readJson(id, "populate"));
    }
};
RepositoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RepositoryService);
exports.RepositoryService = RepositoryService;
//# sourceMappingURL=repository.service.js.map