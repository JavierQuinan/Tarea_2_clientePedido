"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteModel = exports.ClienteSchema = void 0;
const mongoose = require("mongoose");
exports.ClienteSchema = new mongoose.Schema({
    id: { type: String, required: true },
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    telefono: { type: Number, required: true },
    direccion: { type: String, required: true },
}, { timestamps: true });
exports.ClienteSchema.index({ email: 1 }, { unique: true });
exports.ClienteModel = mongoose.model('Cliente', exports.ClienteSchema);
//# sourceMappingURL=cliente.schema.js.map