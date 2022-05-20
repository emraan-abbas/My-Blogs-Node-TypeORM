"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.editUser = exports.getUser = exports.createUser = void 0;
const user_model_1 = require("../entities/user.model");
const typeorm_1 = require("typeorm");
// Create User
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //------------------------------------------------------------
        (0, typeorm_1.createConnection)({
            type: 'postgres',
            username: 'postgres',
            password: 'root',
            logging: true,
            synchronize: true,
            entities: [user_model_1.Users],
            database: 'blog_typeorm',
        })
            .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
            yield connection
                .createQueryBuilder()
                .insert()
                .into(user_model_1.Users)
                .values([
                { name: 'req.body.name',
                    email: 'req.body.email',
                    password: 'req.body.password',
                    role: 'req.body.role',
                    status: 'req.body.status'
                },
            ])
                .execute();
            return res.status(200).json({
                message: 'User Created',
                Users: user_model_1.Users
            });
        })).catch(error => console.log(error));
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error at CREATE USER',
            error
        });
    }
});
exports.createUser = createUser;
// Get User
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let allUser = await Users.findAll();
        (0, typeorm_1.createConnection)({
            type: 'postgres',
            username: 'postgres',
            password: 'root',
            logging: true,
            synchronize: true,
            entities: [user_model_1.Users],
            database: 'blog_typeorm',
        })
            .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
            const allUser = yield connection
                .getRepository(user_model_1.Users)
                .createQueryBuilder("Users")
                .getMany();
            return res.status(200).json({
                message: 'List of all users :',
                allUser
            });
        })).catch(error => console.log(error));
    }
    catch (error) {
        res.status(500).json({
            message: 'Error at Get USER',
            error
        });
    }
});
exports.getUser = getUser;
// Edit User
const editUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, typeorm_1.createConnection)({
            type: 'postgres',
            username: 'postgres',
            password: 'root',
            logging: true,
            synchronize: true,
            entities: [user_model_1.Users],
            database: 'blog_typeorm',
        })
            .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
            const edited = yield connection
                .createQueryBuilder()
                .update(user_model_1.Users)
                .set({ name: 'Brad Pitt', email: 'brad@gmail.com', password: '12345', role: 'Simple-User', status: 'Active' })
                .where("id = :id", { id: 3 })
                .execute();
            return res.status(200).json({
                message: 'User Updated :',
                edited
            });
        })).catch(error => console.log(error));
    }
    catch (error) {
        res.status(500).json({
            message: 'Error at Edit USER',
            error
        });
    }
});
exports.editUser = editUser;
// Delete User
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, typeorm_1.createConnection)({
            type: 'postgres',
            username: 'postgres',
            password: 'root',
            logging: true,
            synchronize: true,
            entities: [user_model_1.Users],
            database: 'blog_typeorm',
        })
            .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
            yield connection
                .createQueryBuilder()
                .delete()
                .from(user_model_1.Users)
                .where("id = :id", { id: 3 })
                .execute();
            return res.status(200).json({
                message: 'User Deleted'
            });
        })).catch(error => console.log(error));
    }
    catch (error) {
        res.status(500).json({
            message: 'Error at DELETE USER',
            error
        });
    }
});
exports.deleteUser = deleteUser;
