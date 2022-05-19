"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./user.routes");
const blog_routes_1 = require("./blog.routes");
const indexRouter = (0, express_1.default)();
exports.indexRouter = indexRouter;
indexRouter.use('/user', user_routes_1.userRouter);
indexRouter.use('/blog', blog_routes_1.blogRouter);
