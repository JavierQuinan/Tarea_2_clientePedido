"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelacionRealizaSchema = void 0;
const mongoose = require("mongoose");
exports.RelacionRealizaSchema = new mongoose.Schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    pedido: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
    fecha: { type: Date, default: Date.now },
    cantidad: { type: Number, required: true },
    total: { type: Number, required: true },
    estado: { type: String, enum: ['pendiente', 'completado'], default: 'pendiente' }
}, {
    timestamps: true
});
//# sourceMappingURL=relacion_realiza.schema.js.map