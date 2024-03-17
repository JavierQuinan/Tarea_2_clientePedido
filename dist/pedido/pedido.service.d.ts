import { IPedido } from './pedido.interfaces';
import { PedidoDTO } from './dto/pedido.dto';
import { ClienteDTO } from 'src/cliente/dto/cliente.dto';
export declare class PedidoService {
    findAllPedidosByClienteId(_clienteId: string): void;
    actualizarClienteEnPedidos(_clienteId: string, _clienteActualizar: ClienteDTO): void;
    pedidos: IPedido[];
    todos(): IPedido[];
    uno(id: string): IPedido;
    insertar(pedidoDTO: PedidoDTO): IPedido;
    actualizar(id: string, pedidoActualizar: PedidoDTO): {
        id_pedido: string;
        fecha: string;
        total: number;
        estado: number;
        metodo_pago: string;
        clienteId: string;
    };
    eliminar(id: string): string;
}
