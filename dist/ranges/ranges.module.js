"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ranges_controller_1 = require("./ranges.controller");
const ranges_entity_1 = require("./ranges.entity");
const ranges_service_1 = require("./ranges.service");
let RangesModule = class RangesModule {
};
RangesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ranges_entity_1.Ranges])],
        controllers: [ranges_controller_1.RangesController],
        providers: [ranges_service_1.RangesService],
        exports: [typeorm_1.TypeOrmModule],
    })
], RangesModule);
exports.RangesModule = RangesModule;
//# sourceMappingURL=ranges.module.js.map