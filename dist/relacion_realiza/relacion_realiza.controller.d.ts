import { ClienteService } from '../cliente/cliente.service';
export declare class RelacionRealizaController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    getPedidosByClienteId(clienteId: string): Promise<import("src/pedido/pedido.interfaces").IPedido[]>;
}
