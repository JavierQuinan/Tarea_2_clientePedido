import { ClienteService } from '../cliente/cliente.service';
import { PedidoService } from '../pedido/pedido.service';
import { PedidoDTO } from '../pedido/dto/pedido.dto';
import { ClienteDTO } from '../cliente/dto/cliente.dto';
export declare class RelacionRealizaService {
    private readonly clienteService;
    private readonly pedidoService;
    constructor(clienteService: ClienteService, pedidoService: PedidoService);
    obtenerPedidosDeCliente(clienteId: string): Promise<void>;
    crearPedidoParaCliente(clienteId: string, pedidoDTO: PedidoDTO): Promise<import("src/pedido/pedido.interfaces").IPedido>;
    eliminarPedidosDeCliente(clienteId: string): Promise<string>;
    actualizarClienteEnPedidos(clienteId: string, clienteActualizar: ClienteDTO): Promise<string>;
}
