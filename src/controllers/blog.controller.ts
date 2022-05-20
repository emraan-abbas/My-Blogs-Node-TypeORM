import { Request, Response } from 'express';
import { Blogs } from '../entities/blog.model';


// Create Blogs
export const createBlog = async (req: Request, res: Response) => {
  try{

  }
  catch(error){
    res.status(500).json({
      message:'Error at CREATE BLOG',
      error
    })
  }
};


// Get BLOG
export const getBlog = async (req: Request, res: Response) => {
  try{

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

  }
  catch(error){
    res.status(500).json({
      message:'Error at DELETE BLOG',
      error
    })
  }
};