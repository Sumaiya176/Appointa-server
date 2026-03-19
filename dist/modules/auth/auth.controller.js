"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const auth_service_1 = require("./auth.service");
const sendResponse_1 = require("../../util/sendResponse");
const createUser = async (req, res) => {
    const user = {
        name: "sumaiya",
        email: "sumaiya@gmail.com",
        password: "sumaiya"
    };
    const result = await auth_service_1.userServices.createUser(user);
    (0, sendResponse_1.sendResponse)(res, { data: result, message: "User created Successfully", isSuccess: true });
};
exports.userControllers = {
    createUser
};
//# sourceMappingURL=auth.controller.js.map