import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Blogs} from './blog.model';

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    role: String;

    @Column()
    status: String;

    @OneToMany(() => Blogs, (blogs) => blogs.users)
    blogs: Blogs

}
