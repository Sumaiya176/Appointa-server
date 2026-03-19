"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const route = (0, express_1.Router)();
route.post("/register", auth_controller_1.userControllers.createUser);
exports.userRoute = route;
//# sourceMappingURL=auth.routes.js.map