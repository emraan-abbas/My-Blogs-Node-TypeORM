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
// Create Blogs
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
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
    }
    catch (error) {
        res.status(500).json({
            message: 'Error at DELETE BLOG',
            error
        });
    }
});
exports.deleteBlog = deleteBlog;
