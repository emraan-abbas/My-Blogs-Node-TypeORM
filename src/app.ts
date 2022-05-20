import "reflect-metadata"
import express from 'express';
import {indexRouter} from './routes/index';
import {DataSource} from 'typeorm';
import {Users} from './entities/user.model'
import {Blogs} from './entities/blog.model';

const app = express();

// Parsing
app.use(express.json());

export const dbData = new DataSource({
  type: 'postgres',
  database: 'blog_typeorm',
  username: 'postgres',
  password:'root',
  // logging: true,
  synchronize: true,
  entities: [Users, Blogs]
})

dbData.initialize()
.then(() => {
  console.log("Data Souce is Initialized")
})
.catch((err) => {
  console.log("Error at Data Source Initialization", err)
})



app.use('/myblog', indexRouter);


const PORT: number = 3000;
app.listen(PORT, () => {
  console.log(`My Blog is Up on Port: ${PORT}`);
});
