"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoModel = exports.PedidoSchema = void 0;
const mongoose = require("mongoose");
exports.PedidoSchema = new mongoose.Schema({
    clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    fecha: { type: Date, required: true },
    total: { type: Number, required: true },
    estado: { type: Number, required: true },
    metodo_pago: { type: String, required: true },
}, { timestamps: true });
exports.PedidoModel = mongoose.model('Pedido', exports.PedidoSchema);
//# sourceMappingURL=pedido.schema.js.map