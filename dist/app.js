"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./routes/index");
const typeorm_1 = require("typeorm");
const user_model_1 = require("./entities/user.model");
const app = (0, express_1.default)();
(0, typeorm_1.createConnection)({
    type: 'postgres',
    database: 'blog_typeorm',
    username: 'postgres',
    password: 'root',
    logging: true,
    synchronize: true,
    entities: [user_model_1.User],
});
app.use('/myblog', index_1.indexRouter);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My Blog is Up on Port: ${PORT}`);
});
