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
exports.RelacionRealizaService = void 0;
const common_1 = require("@nestjs/common");
const cliente_service_1 = require("../cliente/cliente.service");
const pedido_service_1 = require("../pedido/pedido.service");
let RelacionRealizaService = class RelacionRealizaService {
    constructor(clienteService, pedidoService) {
        this.clienteService = clienteService;
        this.pedidoService = pedidoService;
    }
    async obtenerPedidosDeCliente(clienteId) {
        try {
            const cliente = await this.clienteService.uno(clienteId);
            if (!cliente) {
                throw new Error('Cliente no encontrado');
            }
            const pedidos = await this.pedidoService.findAllPedidosByClienteId(clienteId);
            return pedidos;
        }
        catch (error) {
            throw new Error(`Error al obtener los pedidos del cliente: ${error.message}`);
        }
    }
    async crearPedidoParaCliente(clienteId, pedidoDTO) {
        try {
            const cliente = await this.clienteService.uno(clienteId);
            if (!cliente) {
                throw new Error('Cliente no encontrado');
            }
            const nuevoPedido = await this.pedidoService.insertar(pedidoDTO);
            nuevoPedido.clienteId = clienteId;
            return nuevoPedido;
        }
        catch (error) {
            throw new Error(`Error al crear el pedido para el cliente: ${error.message}`);
        }
    }
    async eliminarPedidosDeCliente(clienteId) {
        try {
            const cliente = await this.clienteService.uno(clienteId);
            if (!cliente) {
                throw new Error('Cliente no encontrado');
            }
            await this.pedidoService.eliminar(clienteId);
            return 'Pedidos eliminados correctamente';
        }
        catch (error) {
            throw new Error(`Error al eliminar los pedidos del cliente: ${error.message}`);
        }
    }
    async actualizarClienteEnPedidos(clienteId, clienteActualizar) {
        try {
            const cliente = await this.clienteService.uno(clienteId);
            if (!cliente) {
                throw new Error('Cliente no encontrado');
            }
            await this.pedidoService.actualizarClienteEnPedidos(clienteId, clienteActualizar);
            return 'Información del cliente actualizada en los pedidos';
        }
        catch (error) {
            throw new Error(`Error al actualizar la información del cliente en los pedidos: ${error.message}`);
        }
    }
};
exports.RelacionRealizaService = RelacionRealizaService;
exports.RelacionRealizaService = RelacionRealizaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService,
        pedido_service_1.PedidoService])
], RelacionRealizaService);
//# sourceMappingURL=relacion_realiza.service.js.map