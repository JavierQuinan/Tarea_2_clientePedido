"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let PedidoService = class PedidoService {
    constructor() {
        this.pedidos = [];
    }
    findAllPedidosByClienteId(_clienteId) {
        throw new Error('Method not implemented.');
    }
    actualizarClienteEnPedidos(_clienteId, _clienteActualizar) {
        throw new Error('Method not implemented.');
    }
    todos() {
        return this.pedidos;
    }
    uno(id) {
        return this.pedidos.find((pedido) => pedido.id_pedido === id);
    }
    insertar(pedidoDTO) {
        const nuevoPedido = {
            id_pedido: (0, uuid_1.v4)(),
            ...pedidoDTO,
            clienteId: ''
        };
        this.pedidos.push(nuevoPedido);
        return nuevoPedido;
    }
    actualizar(id, pedidoActualizar) {
        const index = this.pedidos.findIndex((pedido) => pedido.id_pedido === id);
        if (index !== -1) {
            const pedidoActualizado = { ...this.pedidos[index], ...pedidoActualizar };
            this.pedidos[index] = pedidoActualizado;
            return pedidoActualizado;
        }
        else {
            throw new Error('Pedido no encontrado');
        }
    }
    eliminar(id) {
        const pedidoIndex = this.pedidos.findIndex((pedido) => pedido.id_pedido === id);
        if (pedidoIndex !== -1) {
            this.pedidos.splice(pedidoIndex, 1);
            return 'Pedido Eliminado';
        }
        else {
            throw new Error('Pedido no encontrado');
        }
    }
};
exports.PedidoService = PedidoService;
exports.PedidoService = PedidoService = __decorate([
    (0, common_1.Injectable)()
], PedidoService);
//# sourceMappingURL=pedido.service.js.map