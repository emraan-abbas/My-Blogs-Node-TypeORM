import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Blogs {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

}
