"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.deleteUser = exports.editUser = exports.getUser = exports.logIn = exports.createUser = void 0;
const user_model_1 = require("../entities/user.model");
const app_1 = require("../app");
const bcrypt = __importStar(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
// Create User
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        bcrypt.hash(req.body.password, 8, (err, hash) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                return res.status(400).json({
                    message: 'Error at Bcrypt',
                    err
                });
            }
            else {
                const user = yield app_1.dbData.getRepository(user_model_1.Users).create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    role: req.body.role,
                    status: req.body.status,
                });
                const results = yield app_1.dbData.getRepository(user_model_1.Users).save(user);
                return res.status(200).json({ message: 'User Created', results });
            }
        }));
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
// Login User
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield app_1.dbData.getRepository(user_model_1.Users).findOneBy({
            email: req.body.email
        });
        try {
            if (user) {
                bcrypt.compare(req.body.password, user.password, (err, result) => __awaiter(void 0, void 0, void 0, function* () {
                    if (err) {
                        res.status(500).json({
                            message: 'Error at Bcrypt Compare',
                            err
                        });
                    }
                    else {
                        const token = yield jwt.sign({ email: user.email }, 'myKey', { expiresIn: '1h' });
                        return res.status(200).json({
                            message: 'Login Successful',
                            token,
                            result
                        });
                    }
                }));
            }
            else {
                res.status(400).json({
                    message: 'User with this email does not exist'
                });
            }
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Error at INNER LOGIN USER FUNCTION',
                error
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error at LOGIN USER',
            error
        });
    }
});
exports.logIn = logIn;
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
        // dbData.getRepository(Users).merge(user, req.body)
        // const results = await dbData.getRepository(Users).save(user)
        // return res.status(200).json({message:'User Updated', results})
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
