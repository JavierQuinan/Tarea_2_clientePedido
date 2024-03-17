import { ClienteService } from './cliente.service';
import { ClienteDTO } from './dto/cliente.dto';
export declare class ClienteController {
    private clienteService;
    constructor(clienteService: ClienteService);
    insertar(clienteDTO: ClienteDTO): Promise<import("src/cliente/cliente.interfaces").ICliente>;
    todos(): Promise<import("src/cliente/cliente.interfaces").ICliente[]>;
    uno(id: string): Promise<import("src/cliente/cliente.interfaces").ICliente>;
    actualizar(id: string, clienteDTO: ClienteDTO): Promise<import("src/cliente/cliente.interfaces").ICliente>;
    eliminar(id: string): Promise<any>;
}
