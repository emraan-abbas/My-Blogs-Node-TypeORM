import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Users} from './user.model';


@Entity()
export class Blogs {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Users, (user) => user.blogs)
  users: Users

}
