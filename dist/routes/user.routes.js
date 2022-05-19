"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRouter = (0, express_1.default)();
exports.userRouter = userRouter;
userRouter.post('/create', user_controller_1.createUser);
userRouter.get('/login', user_controller_1.loginUser);
userRouter.put('/edit/:id', user_controller_1.editUser);
userRouter.delete('/delete/:id', user_controller_1.deleteUser);
