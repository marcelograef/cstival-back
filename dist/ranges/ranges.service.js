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
exports.RangesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ranges_entity_1 = require("./ranges.entity");
let RangesService = class RangesService {
    constructor(rangesRepository) {
        this.rangesRepository = rangesRepository;
    }
    getRanges(query) {
        return this.rangesRepository.find(query);
    }
    findOne(id) {
        return this.rangesRepository.findOne(id);
    }
    async create(body) {
        const { key, situation, bluff, call, fold, raise, info } = body;
        const range = await this.rangesRepository.find({ key, situation });
        console.log('UPDATE -----');
        if (range.length > 0) {
            console.log({ info });
            console.log('UPDATE -----');
            console.log({ range });
            return this.rangesRepository.update({ key, situation }, {
                key,
                situation,
                bluff,
                call,
                fold,
                raise,
                info: JSON.stringify(info),
            });
        }
        else {
            console.log('CREATE');
            const query = `Insert into ranges (\`key\`,situation,bluff,\`call\`,fold,raise,info) values ("${key}","${situation}","${bluff ? bluff : ''}","${call ? call : ''}","${fold ? fold : ''}","${raise ? raise : ''}","${info ? JSON.stringify(info).replace(/\"/gm, "'") : ''}")`;
            return this.rangesRepository.query(query);
        }
    }
};
RangesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ranges_entity_1.Ranges)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RangesService);
exports.RangesService = RangesService;
//# sourceMappingURL=ranges.service.js.map