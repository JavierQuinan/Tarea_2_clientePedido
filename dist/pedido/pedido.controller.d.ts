import { PedidoService } from './pedido.service';
import { PedidoDTO } from './dto/pedido.dto';
export declare class PedidoController {
    private pedidoServicio;
    constructor(pedidoServicio: PedidoService);
    todos(): import("src/pedido/pedido.interfaces").IPedido[];
    uno(id_pedido: string): import("src/pedido/pedido.interfaces").IPedido;
    insertar(pedido: PedidoDTO): import("src/pedido/pedido.interfaces").IPedido;
    actualizar(id_pedido: string, pedido: PedidoDTO): {
        id_pedido: string;
        fecha: string;
        total: number;
        estado: number;
        metodo_pago: string;
        clienteId: string;
    };
    eliminar(id_pedido: string): string;
}
