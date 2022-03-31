"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePopulatorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_populator_dto_1 = require("./create-populator.dto");
class UpdatePopulatorDto extends (0, mapped_types_1.PartialType)(create_populator_dto_1.CreatePopulatorDto) {
}
exports.UpdatePopulatorDto = UpdatePopulatorDto;
//# sourceMappingURL=update-populator.dto.js.map