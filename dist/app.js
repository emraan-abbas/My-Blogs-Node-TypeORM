"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbData = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const index_1 = require("./routes/index");
const typeorm_1 = require("typeorm");
const user_model_1 = require("./entities/user.model");
const blog_model_1 = require("./entities/blog.model");
const app = (0, express_1.default)();
// Parsing
app.use(express_1.default.json());
exports.dbData = new typeorm_1.DataSource({
    type: 'postgres',
    database: 'blog_typeorm',
    username: 'postgres',
    password: 'root',
    // logging: true,
    synchronize: true,
    entities: [user_model_1.Users, blog_model_1.Blogs]
});
exports.dbData.initialize()
    .then(() => {
    console.log("Data Souce is Initialized");
})
    .catch((err) => {
    console.log("Error at Data Source Initialization", err);
});
app.use('/myblog', index_1.indexRouter);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My Blog is Up on Port: ${PORT}`);
});
