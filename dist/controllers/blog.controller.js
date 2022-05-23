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
exports.deleteBlog = exports.editBlog = exports.getBlog = exports.createBlog = void 0;
const blog_model_1 = require("../entities/blog.model");
const user_model_1 = require("../entities/user.model");
const app_1 = require("../app");
// Create Blogs
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield app_1.dbData.getRepository(user_model_1.Users).findOneBy({
            id: req.body.users
        });
        if (user) {
            const blog = app_1.dbData.getRepository(blog_model_1.Blogs).create({
                title: req.body.title,
                description: req.body.description,
                users: user
            });
            const results = yield app_1.dbData.getRepository(blog_model_1.Blogs).save(blog);
            return res.status(200).json({ message: 'Blog Created', results });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error at CREATE BLOG',
            error
        });
    }
});
exports.createBlog = createBlog;
// Get BLOG
const getBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield app_1.dbData.getRepository(blog_model_1.Blogs).find({
            relations: {
                users: true
            }
        });
        return res.json(blogs);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error at Get BLOG',
            error
        });
    }
});
exports.getBlog = getBlog;
// Edit BLOG
const editBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield app_1.dbData.getRepository(blog_model_1.Blogs).findOneBy({
            id: parseInt(req.params.id),
        });
        // dbData.getRepository(Blogs).merge(blog, req.body)
        // const results = await dbData.getRepository(Blogs).save(blog)
        // return res.status(200).json({message:'Blog Updated', results})
    }
    catch (error) {
        res.status(500).json({
            message: 'Error at Edit BLOG',
            error
        });
    }
});
exports.editBlog = editBlog;
// Delete BLOG
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield app_1.dbData.getRepository(blog_model_1.Blogs).delete(req.params.id);
        return res.status(200).send({ message: 'Blog Deleted', results });
    }
    catch (error) {
        res.status(500).json({
            message: 'Error at DELETE BLOG',
            error
        });
    }
});
exports.deleteBlog = deleteBlog;
