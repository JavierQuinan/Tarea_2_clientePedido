"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
let AllExceptionFilter = class AllExceptionFilter {
    catch(exception, host) {
        const contexto = host.switchToHttp();
        const response = contexto.getResponse();
        const request = contexto.getRequest();
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const msg = exception instanceof common_1.HttpException ? exception.getResponse() : exception;
        response.status(status).json({
            time: new Date().toISOString(),
            path: request.url,
            error: msg,
        });
    }
};
exports.AllExceptionFilter = AllExceptionFilter;
exports.AllExceptionFilter = AllExceptionFilter = __decorate([
    (0, common_1.Catch)()
], AllExceptionFilter);
//# sourceMappingURL=http-exception.filter.js.map