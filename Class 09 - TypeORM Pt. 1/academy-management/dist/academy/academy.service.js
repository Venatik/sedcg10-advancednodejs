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
exports.AcademyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const academy_entity_1 = require("./entities/academy.entity");
let AcademyService = class AcademyService {
    constructor(academyRepository) {
        this.academyRepository = academyRepository;
    }
    async findAll() {
        return this.academyRepository.find();
    }
    async findOne(id) {
        try {
            return this.academyRepository.findOneByOrFail({ id });
        }
        catch (error) {
            if (error.name === 'EntityNotFoundError') {
                throw new common_1.NotFoundException(`Academy with ID ${id} not found.`);
            }
            throw error;
        }
    }
    async create(createAcademyDto) {
        const academy = this.academyRepository.create(createAcademyDto);
        await this.academyRepository.save(academy);
        return academy;
    }
    async update(id, updateAcademyDto) {
        let academy = await this.academyRepository.findOneBy({ id });
        academy = this.academyRepository.merge(academy, updateAcademyDto);
        await this.academyRepository.save(academy);
        return academy;
    }
    async remove(id) {
        await this.academyRepository.delete(id);
    }
};
exports.AcademyService = AcademyService;
exports.AcademyService = AcademyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(academy_entity_1.Academy)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AcademyService);
//# sourceMappingURL=academy.service.js.map