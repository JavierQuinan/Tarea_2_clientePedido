/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { ClienteDTO } from './dto/cliente.dto';
import { ICliente } from './cliente.interfaces';
import { IPedido } from 'src/pedido/pedido.interfaces';
export declare class ClienteService {
    private readonly clienteModel;
    private readonly pedidoModel;
    constructor(clienteModel: Model<ICliente>, pedidoModel: Model<IPedido>);
    todos(): Promise<ICliente[]>;
    uno(id: string): Promise<ICliente>;
    insertar(clienteDTO: ClienteDTO): Promise<ICliente>;
    actualizar(id: string, clienteActualizar: ClienteDTO): Promise<ICliente>;
    eliminar(id: string): Promise<any>;
    findAllPedidosByClienteId(clienteId: string): Promise<IPedido[]>;
}
