"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const client_1 = __importDefault(require("../../prisma/client"));
const createUser = async (data) => {
    const user = await client_1.default.user.create({ data });
    if (!user) {
        throw Error("user not created");
    }
    return user;
};
exports.userServices = {
    createUser
};
//# sourceMappingURL=auth.service.js.map