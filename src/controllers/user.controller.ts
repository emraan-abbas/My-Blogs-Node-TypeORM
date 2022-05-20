import { Request, Response } from 'express';
import {Users} from '../entities/user.model';
import {dbData} from '../app';


// Create User
export const createUser = async (req: Request, res: Response) => {
  try{

    const user = dbData.getRepository(Users).create(req.body);
    const results = await dbData.getRepository(Users).save(user);
    return res.status(200).json({message:'User Created', results});
    
  }
  catch(error){
    console.log(error)
    return res.status(500).json({
      message:'Error at CREATE USER',
      error
    })
  }
};


// Get User
export const getUser = async (req: Request, res: Response) => {

  try{
    const users = await dbData.getRepository(Users).find()
    return res.json(users)
  }

  catch(error){
    return res.status(500).json({
      message:'Error at Get USER',
      error
    })
  }
};


// Edit User
export const editUser = async (req: Request, res: Response) => {
  try{
    const user = await dbData.getRepository(Users).findOneBy({
        id : parseInt(req.params.id),
    })
    // dbData.getRepository(Users).merge(user, req.body)
    // const results = await dbData.getRepository(Users).save(user)
    // return res.status(200).json({message:'User Updated', results})
  }
  catch(error){
    return res.status(500).json({
      message:'Error at Edit USER',
      error
    })
  }
};


// Delete User
export const deleteUser = async (req: Request, res: Response) => {
  try{
    const results = await dbData.getRepository(Users).delete(req.params.id)
    return res.status(200).send({message:'User Deleted', results})
  }
  catch(error){
    return res.status(500).json({
      message:'Error at DELETE USER',
      error
    })
  }
};
