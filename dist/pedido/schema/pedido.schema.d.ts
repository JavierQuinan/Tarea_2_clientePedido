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
import * as mongoose from 'mongoose';
export declare const PedidoSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    clienteId: mongoose.Types.ObjectId;
    fecha: Date;
    total: number;
    estado: number;
    metodo_pago: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    clienteId: mongoose.Types.ObjectId;
    fecha: Date;
    total: number;
    estado: number;
    metodo_pago: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    clienteId: mongoose.Types.ObjectId;
    fecha: Date;
    total: number;
    estado: number;
    metodo_pago: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface Pedido extends mongoose.Document {
    clienteId: mongoose.Types.ObjectId;
    fecha: Date;
    total: number;
    estado: number;
    metodo_pago: string;
}
export declare const PedidoModel: mongoose.Model<Pedido, {}, {}, {}, mongoose.Document<unknown, {}, Pedido> & Pedido & {
    _id: mongoose.Types.ObjectId;
}, any>;
