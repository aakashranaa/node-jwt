import {Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../entities/user.entity';
import { dataSource } from '../database/data-source';

export const authenticateUser = async (req: any, res: Response, next: NextFunction) => {
    console.log(req.headers.authorization)
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
        res.status(401).send('Token not provided')
        return;
    }
    
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded : any = jwt.verify(token, process.env.JWT_SECRET);
        const userRepo = dataSource.getRepository(User);
        req.user = await userRepo.findOneBy({UserId: decoded.id});
        console.log('User fetched from the token..');
    }
    catch (error) {
        res.status(401).send(`Error occurred while authentication - ${error}`);
        return;
    }
    finally {
        next();
    }
}