import { AutoMap } from 'nestjsx-automapper';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    @AutoMap()
    firstName: string;

    @Column()
    @AutoMap()
    lastName: string;
}