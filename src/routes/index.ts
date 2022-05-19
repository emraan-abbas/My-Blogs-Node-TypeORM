import express from 'express';
import { userRouter } from './user.routes';
import { blogRouter } from './blog.routes';

const indexRouter = express();

indexRouter.use('/user', userRouter)
indexRouter.use('/blog', blogRouter)


export {indexRouter}
