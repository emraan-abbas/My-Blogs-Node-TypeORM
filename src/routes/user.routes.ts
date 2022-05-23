import express from 'express';
import {createUser, logIn, getUser, editUser, deleteUser} from '../controllers/user.controller';

const userRouter = express();

userRouter.post('/create', createUser);
userRouter.get('/login', logIn);
userRouter.get('/all', getUser);
userRouter.put('/edit/:id', editUser);
userRouter.delete('/delete/:id', deleteUser);

export {userRouter};

