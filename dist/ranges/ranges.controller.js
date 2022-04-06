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
exports.RangesController = void 0;
const common_1 = require("@nestjs/common");
const ranges_service_1 = require("./ranges.service");
let RangesController = class RangesController {
    constructor(appService) {
        this.appService = appService;
    }
    createRange(body) {
        console.log({ body });
        this.appService.create(body);
        return Promise.resolve('OK');
    }
    updateRange(body) {
        console.log({ body });
        this.appService.create(body);
        return Promise.resolve('OK');
    }
    getRanges(query) {
        const { key, situation } = query;
        return this.appService.getRanges({ key, situation });
    }
    createRangesFromJson(body) {
        const { data, key } = body;
        Object.keys(data).forEach((k) => {
            this.appService.create(Object.assign({ key, situation: k }, data[k]));
        });
        return Promise.resolve('OK');
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RangesController.prototype, "createRange", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RangesController.prototype, "updateRange", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RangesController.prototype, "getRanges", null);
__decorate([
    (0, common_1.Get)('rrr'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RangesController.prototype, "createRangesFromJson", null);
RangesController = __decorate([
    (0, common_1.Controller)('Ranges'),
    __metadata("design:paramtypes", [ranges_service_1.RangesService])
], RangesController);
exports.RangesController = RangesController;
//# sourceMappingURL=ranges.controller.js.map