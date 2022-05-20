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
const app_1 = require("../app");
// Create User
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = app_1.dbData.getRepository(user_model_1.Users).create(req.body);
        const results = yield app_1.dbData.getRepository(user_model_1.Users).save(user);
        return res.status(200).json({ message: 'User Created', results });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error at CREATE USER',
            error
        });
    }
});
exports.createUser = createUser;
// Get User
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield app_1.dbData.getRepository(user_model_1.Users).find();
        return res.json(users);
    }
    catch (error) {
        return res.status(500).json({
            message: 'Error at Get USER',
            error
        });
    }
});
exports.getUser = getUser;
// Edit User
const editUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield app_1.dbData.getRepository(user_model_1.Users).findOneBy({
            id: parseInt(req.params.id),
        });
        app_1.dbData.getRepository(user_model_1.Users).merge(user, req.body);
        const results = yield app_1.dbData.getRepository(user_model_1.Users).save(user);
        return res.status(200).json({ message: 'User Updated', results });
    }
    catch (error) {
        return res.status(500).json({
            message: 'Error at Edit USER',
            error
        });
    }
});
exports.editUser = editUser;
// Delete User
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield app_1.dbData.getRepository(user_model_1.Users).delete(req.params.id);
        return res.status(200).send({ message: 'User Deleted', results });
    }
    catch (error) {
        return res.status(500).json({
            message: 'Error at DELETE USER',
            error
        });
    }
});
exports.deleteUser = deleteUser;
