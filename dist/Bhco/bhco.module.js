"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const database_module_1 = require("../Database/database.module");
const bhco_controller_1 = require("./bhco.controller");
const bhco_service_1 = require("./bhco.service");
const bhco_providers_1 = require("./bhco.providers");
let BhcoModule = class BhcoModule {
};
BhcoModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        components: [
            bhco_service_1.BhcoService,
            bhco_providers_1.bhcoProvider
        ],
        controllers: [
            bhco_controller_1.BhcoController
        ],
    })
], BhcoModule);
exports.BhcoModule = BhcoModule;
//# sourceMappingURL=bhco.module.js.map