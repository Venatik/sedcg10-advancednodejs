"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAcademyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_academy_dto_1 = require("./create-academy.dto");
class UpdateAcademyDto extends (0, mapped_types_1.PartialType)(create_academy_dto_1.CreateAcademyDto) {
}
exports.UpdateAcademyDto = UpdateAcademyDto;
//# sourceMappingURL=update-academy.dto.js.map