import { Request, Response } from 'express';
import {Users} from '../entities/user.model';
import {DataSource, createConnection, getConnection, getRepository, Connection} from "typeorm";

// Create User
export const createUser = async (req: Request, res: Response) => {
  try{
    //------------------------------------------------------------
    createConnection({
      type: 'postgres',
      username: 'postgres',
      password:'root',
      logging: true,
      synchronize: true,
      entities: [Users],
      database: 'blog_typeorm',
    })

  .then(async connection => {
    await connection
    .createQueryBuilder()
    .insert()
    .into(Users)
    .values([
        { name: 'req.body.name',
          email: 'req.body.email',
          password: 'req.body.password',
          role: 'req.body.role',
          status: 'req.body.status'
        },
    ])
    .execute()

    return res.status(200).json({
      message: 'User Created',
      Users
      
    })

  }).catch(error => console.log(error));
  }
  catch(error){
    console.log(error)
    res.status(500).json({
      message:'Error at CREATE USER',
      error
    })
  }
};


// Get User
export const getUser = async (req: Request, res: Response) => {

  try{
    // let allUser = await Users.findAll();
    createConnection({
      type: 'postgres',
      username: 'postgres',
      password:'root',
      logging: true,
      synchronize: true,
      entities: [Users],
      database: 'blog_typeorm',
    })

  .then(async connection => {
      const allUser = await connection
    .getRepository(Users)
    .createQueryBuilder("Users")
    .getMany();

    return res.status(200).json({
      message:'List of all users :',
      allUser
    })

  }).catch(error => console.log(error));
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
    createConnection({
      type: 'postgres',
      username: 'postgres',
      password:'root',
      logging: true,
      synchronize: true,
      entities: [Users],
      database: 'blog_typeorm',
    })

  .then(async connection => {
      const edited = await connection
    .createQueryBuilder()
    .update(Users)
    .set({ name:'Brad Pitt', email:'brad@gmail.com', password:'12345', role:'Simple-User', status:'Active' })
    .where("id = :id", { id: 3 })
    .execute()


    return res.status(200).json({
      message:'User Updated :',
      edited
    })

  }).catch(error => console.log(error));
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
    createConnection({
      type: 'postgres',
      username: 'postgres',
      password:'root',
      logging: true,
      synchronize: true,
      entities: [Users],
      database: 'blog_typeorm',
    })

  .then(async connection => {
      await connection
    .createQueryBuilder()
    .delete()
    .from(Users)
    .where("id = :id", { id: 3 })
    .execute()


    return res.status(200).json({
      message:'User Deleted'
    })

  }).catch(error => console.log(error));
  }
  catch(error){
    res.status(500).json({
      message:'Error at DELETE USER',
      error
    })
  }
};
