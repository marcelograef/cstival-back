"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeHttpModule = void 0;
const common_1 = require("@nestjs/common");
const ranges_module_1 = require("./ranges.module");
const ranges_service_1 = require("./ranges.service");
const ranges_controller_1 = require("./ranges.controller");
let RangeHttpModule = class RangeHttpModule {
};
RangeHttpModule = __decorate([
    (0, common_1.Module)({
        imports: [ranges_module_1.RangesModule],
        providers: [ranges_service_1.RangesService],
        controllers: [ranges_controller_1.RangesController],
    })
], RangeHttpModule);
exports.RangeHttpModule = RangeHttpModule;
//# sourceMappingURL=ranges-http.module.js.map