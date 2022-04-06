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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ranges_entity_1 = require("./ranges/ranges.entity");
const ranges_module_1 = require("./ranges/ranges.module");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            ranges_module_1.RangesModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'cstivaldb.cwx5c4fxidqg.us-east-1.rds.amazonaws.com',
                port: 3306,
                username: 'admin',
                password: 'cstival2022',
                database: 'cstival',
                entities: [ranges_entity_1.Ranges],
                synchronize: true,
            }),
        ],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map