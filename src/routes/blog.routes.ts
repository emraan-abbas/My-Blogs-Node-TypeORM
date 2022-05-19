const express = require('express');
import {createBlog, getBlog, editBlog, deleteBlog} from '../controllers/blog.controller'

const blogRouter = express();

blogRouter.post('/create', createBlog);
blogRouter.get('/all', getBlog);
blogRouter.put('/edit/:id', editBlog);
blogRouter.delete('/delete/:id', deleteBlog);

export {blogRouter};
