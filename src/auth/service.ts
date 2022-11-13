import { Request } from 'express';
import { User } from '../entities/user.entity';
import { dataSource } from '../database/data-source';
import {v1 as uuid} from 'uuid';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Service } from 'typedi';
import { Repository } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

@Service()
export class UserService {
    private readonly userRepo: Repository<User>;
    constructor() {
        this.userRepo = dataSource.getRepository(User);
    }

    getUsers = async (req: any): Promise<User[]> => {
        console.log('after authenticating - ', req.user)
        const users = await this.userRepo.find();   
        if (!users) console.log('unable to fetch the data from db');
        return users;
    }

    getUser = async(req: Request) : Promise<User> => {
        const user = await this.userRepo.findOneBy({UserId: req.params.id});   
        if (!user) console.log('unable to fetch the data from db');
        return user;
    }

    signup = async (req: Request): Promise<{token: string} | string> => {
        const reqBody: User = req.body;
        
        if (!this.isValidPayload(reqBody)) { 
            return 'Cant insert user'
        
        }
        if (await this.userRepo.findOneBy({Email: reqBody.Email})) {
            return 'Email Id already exist';
        }

        const user = reqBody;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(reqBody.Password, salt);
        user.UserId = uuid();
        user.Password = hashedPassword;
        await this.userRepo.save(user);
        return {'token': this.generateToken(user.UserId)};
    }
    
    login = async (req: Request) => {
        const {Email, Password} = req.body;
        const user = await this.userRepo.findOneBy({Email: Email});
        if (user && await bcrypt.compare(Password, user.Password))
            return {'token': this.generateToken(user.UserId)};
        
        return 'User does not exist or Invalid Credentials';
    }
    
    private generateToken = (id: string) => {
        const token = jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });
        return token;
    }

    private isValidPayload(reqBody: User) {
        return reqBody.Email && reqBody.Role && reqBody.Password;
    }
}

