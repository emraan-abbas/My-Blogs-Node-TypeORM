import { Request, Response } from 'express';
import {User} from '../entities/user.model';

// Create User
export const createUser = async (req: Request, res: Response) => {
  try{
  }
  catch(error){
    res.status(500).json({
      message:'Error at CREATE USER',
      error
    })
  }
};


// Get User
export const loginUser = async (req: Request, res: Response) => {
  try{

  }
  catch(error){
    res.status(500).json({
      message:'Error at Get USER',
      error
    })
  }
};

// Edit User
export const editUser = async (req: Request, res: Response) => {
  try{

  }
  catch(error){
    res.status(500).json({
      message:'Error at Edit USER',
      error
    })
  }
};


// Delete User
export const deleteUser = async (req: Request, res: Response) => {
  try{

  }
  catch(error){
    res.status(500).json({
      message:'Error at DELETE USER',
      error
    })
  }
};
