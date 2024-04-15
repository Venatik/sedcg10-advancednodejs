"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademyModule = void 0;
const common_1 = require("@nestjs/common");
const academy_service_1 = require("./academy.service");
const academy_controller_1 = require("./academy.controller");
const typeorm_1 = require("@nestjs/typeorm");
const academy_entity_1 = require("./entities/academy.entity");
let AcademyModule = class AcademyModule {
};
exports.AcademyModule = AcademyModule;
exports.AcademyModule = AcademyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([academy_entity_1.Academy])],
        controllers: [academy_controller_1.AcademyController],
        providers: [academy_service_1.AcademyService],
    })
], AcademyModule);
//# sourceMappingURL=academy.module.js.map