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
exports.AcademyController = void 0;
const common_1 = require("@nestjs/common");
const academy_service_1 = require("./academy.service");
const create_academy_dto_1 = require("./dto/create-academy.dto");
const update_academy_dto_1 = require("./dto/update-academy.dto");
let AcademyController = class AcademyController {
    constructor(academyService) {
        this.academyService = academyService;
    }
    findAll() {
        return this.academyService.findAll();
    }
    findOne(id) {
        return this.academyService.findOne(+id);
    }
    create(createAcademyDto) {
        return this.academyService.create(createAcademyDto);
    }
    update(id, updateAcademyDto) {
        return this.academyService.update(+id, updateAcademyDto);
    }
    remove(id) {
        return this.academyService.remove(+id);
    }
};
exports.AcademyController = AcademyController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AcademyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcademyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_academy_dto_1.CreateAcademyDto]),
    __metadata("design:returntype", Promise)
], AcademyController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_academy_dto_1.UpdateAcademyDto]),
    __metadata("design:returntype", Promise)
], AcademyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AcademyController.prototype, "remove", null);
exports.AcademyController = AcademyController = __decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    })),
    (0, common_1.Controller)('academy'),
    __metadata("design:paramtypes", [academy_service_1.AcademyService])
], AcademyController);
//# sourceMappingURL=academy.controller.js.map