"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteDTO = void 0;
const class_validator_1 = require("class-validator");
class ClienteDTO {
}
exports.ClienteDTO = ClienteDTO;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo es requerido' }),
    (0, class_validator_1.IsString)({ message: 'Se necesita un texto' }),
    __metadata("design:type", String)
], ClienteDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo es requerido' }),
    (0, class_validator_1.IsString)({ message: 'Se necesita un texto' }),
    __metadata("design:type", String)
], ClienteDTO.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo es requerido' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Formato de correo electrónico inválido' }),
    __metadata("design:type", String)
], ClienteDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo es requerido' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Se necesita un número' }),
    __metadata("design:type", Number)
], ClienteDTO.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo es requerido' }),
    (0, class_validator_1.IsString)({ message: 'Se necesita un texto' }),
    __metadata("design:type", String)
], ClienteDTO.prototype, "direccion", void 0);
//# sourceMappingURL=cliente.dto.js.map