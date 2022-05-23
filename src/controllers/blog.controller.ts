import { Request, Response } from 'express';
import { Blogs } from '../entities/blog.model';
import { Users } from '../entities/user.model';
import {dbData} from '../app';


// Create Blogs
export const createBlog = async (req: Request, res: Response) => {
  try{
    const user = await dbData.getRepository(Users).findOneBy({
        id : req.body.users
      })

    if(user){
      const blog = dbData.getRepository(Blogs).create({
      title: req.body.title,
      description: req.body.description,
      users: user
    });
    const results = await dbData.getRepository(Blogs).save(blog);
    return res.status(200).json({message:'Blog Created', results});
    }
  }
  catch(error){
    console.log(error);
    res.status(500).json({
      message:'Error at CREATE BLOG',
      error
    })
  }
};

// Get BLOG
export const getBlog = async (req: Request, res: Response) => {
  try{
    const blogs = await dbData.getRepository(Blogs).find({
      relations:{
        users: true
      }
    })
    return res.json(blogs)
  }
  catch(error){
    res.status(500).json({
      message:'Error at Get BLOG',
      error
    })
  }
};

// Edit BLOG
export const editBlog = async (req: Request, res: Response) => {
  try{
    const blog = await dbData.getRepository(Blogs).findOneBy({
        id : parseInt(req.params.id),
    })
    // dbData.getRepository(Blogs).merge(blog, req.body)
    // const results = await dbData.getRepository(Blogs).save(blog)
    // return res.status(200).json({message:'Blog Updated', results})
  }
  catch(error){
    res.status(500).json({
      message:'Error at Edit BLOG',
      error
    })
  }
};


// Delete BLOG
export const deleteBlog = async (req: Request, res: Response) => {
  try{
    const results = await dbData.getRepository(Blogs).delete(req.params.id)
    return res.status(200).send({message:'Blog Deleted', results})
  }
  catch(error){
    res.status(500).json({
      message:'Error at DELETE BLOG',
      error
    })
  }
};