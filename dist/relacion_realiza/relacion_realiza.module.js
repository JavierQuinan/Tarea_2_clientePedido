"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelacionRealizaModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cliente_module_1 = require("../cliente/cliente.module");
const pedido_module_1 = require("../pedido/pedido.module");
const relacion_realiza_controller_1 = require("./relacion_realiza.controller");
const relacion_realiza_service_1 = require("./relacion_realiza.service");
const relacion_realiza_schema_1 = require("./schema/relacion_realiza.schema");
let RelacionRealizaModule = class RelacionRealizaModule {
};
exports.RelacionRealizaModule = RelacionRealizaModule;
exports.RelacionRealizaModule = RelacionRealizaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'RelacionRealiza', schema: relacion_realiza_schema_1.RelacionRealizaSchema }]),
            cliente_module_1.ClienteModule,
            pedido_module_1.PedidoModule,
        ],
        controllers: [relacion_realiza_controller_1.RelacionRealizaController],
        providers: [relacion_realiza_service_1.RelacionRealizaService],
    })
], RelacionRealizaModule);
//# sourceMappingURL=relacion_realiza.module.js.map