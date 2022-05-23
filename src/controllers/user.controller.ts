import { Request, Response } from 'express';
import {Users} from '../entities/user.model';
import {dbData} from '../app';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

// Create User
export const createUser = async (req: Request, res: Response) => {
  try{

    bcrypt.hash(req.body.password, 8, async(err, hash) => {
      if(err) {
        return res.status(400).json({
          message: 'Error at Bcrypt',
          err
        })
      }
      else{
        const user = await dbData.getRepository(Users).create({
        name:req.body.name,
        email:req.body.email,
        password:hash,
        role:req.body.role,
        status:req.body.status,
      });
      const results = await dbData.getRepository(Users).save(user);
      return res.status(200).json({message:'User Created', results});
      }
    })
    
  }
  catch(error){
    console.log(error)
    return res.status(500).json({
      message:'Error at CREATE USER',
      error
    })
  }
};

// Login User
export const logIn = async (req: Request, res: Response) => {
  try{
    const user = await dbData.getRepository(Users).findOneBy({
      email: req.body.email
    })
    try{
      if(user){
        bcrypt.compare(req.body.password, user.password, async(err, result) => {
          if(err){
              res.status(500).json({
              message:'Error at Bcrypt Compare',
              err
            })
          }
          else{
            const token = await jwt.sign(
              {email: user.email}, 'myKey', {expiresIn: '1h'}
            );
            return res.status(200).json({
              message:'Login Successful',
              token,
              result
            })
          }
        })
      }
      else{
        res.status(400).json({
          message:'User with this email does not exist'
        })
      }
    }
    catch(error){
    console.log(error)
    return res.status(500).json({
      message:'Error at INNER LOGIN USER FUNCTION',
      error
    })
    }
  }
  catch(error){
    console.log(error)
    return res.status(500).json({
      message:'Error at LOGIN USER',
      error
    })
  }
};

// Get User
export const getUser = async (req: Request, res: Response) => {

  try{
    const users = await dbData.getRepository(Users).find({
      relations:{
        blogs: true
      }
    })
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
