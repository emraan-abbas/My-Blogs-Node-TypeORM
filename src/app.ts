import express from 'express';
import {indexRouter} from './routes/index';
import {createConnection} from "typeorm";
import {User} from './entities/user.model'

const app = express();

createConnection({
  type: 'postgres',
  database: 'blog_typeorm',
  username: 'postgres',
  password:'root',
  logging: true,
  synchronize: true,
  entities: [User],
})



app.use('/myblog', indexRouter);


const PORT: number = 3000;
app.listen(PORT, () => {
  console.log(`My Blog is Up on Port: ${PORT}`);
});
