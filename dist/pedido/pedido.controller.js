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
exports.PedidoController = void 0;
const common_1 = require("@nestjs/common");
const pedido_service_1 = require("./pedido.service");
const pedido_dto_1 = require("./dto/pedido.dto");
let PedidoController = class PedidoController {
    constructor(pedidoServicio) {
        this.pedidoServicio = pedidoServicio;
    }
    todos() {
        return this.pedidoServicio.todos();
    }
    uno(id_pedido) {
        return this.pedidoServicio.uno(id_pedido);
    }
    insertar(pedido) {
        return this.pedidoServicio.insertar(pedido);
    }
    actualizar(id_pedido, pedido) {
        return this.pedidoServicio.actualizar(id_pedido, pedido);
    }
    eliminar(id_pedido) {
        return this.pedidoServicio.eliminar(id_pedido);
    }
};
exports.PedidoController = PedidoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "todos", null);
__decorate([
    (0, common_1.Get)(':id_pedido'),
    __param(0, (0, common_1.Param)('id_pedido')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "uno", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pedido_dto_1.PedidoDTO]),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "insertar", null);
__decorate([
    (0, common_1.Put)(':id_pedido'),
    __param(0, (0, common_1.Param)('id_pedido')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pedido_dto_1.PedidoDTO]),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id_pedido'),
    __param(0, (0, common_1.Param)('id?pedido')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "eliminar", null);
exports.PedidoController = PedidoController = __decorate([
    (0, common_1.Controller)('pedido'),
    __metadata("design:paramtypes", [pedido_service_1.PedidoService])
], PedidoController);
//# sourceMappingURL=pedido.controller.js.map