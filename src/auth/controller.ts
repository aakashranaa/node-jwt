import { Request, Response } from "express";
import { UserService } from "./service";

import {Service} from 'typedi';

@Service()
export class UserController {
    constructor(private readonly userService: UserService) {}

    getUsers = async (req: Request, res: Response) : Promise<Response<void>> => {
        const response = await this.userService.getUsers(req);
        return res.send(response);
    }

    getUser = async (req: Request, res: Response): Promise<Response<void>> => {
        const response = await this.userService.getUser(req);
        return res.send(response);
    }
    
    signup = async (req: Request, res: Response): Promise<Response<void>> => {
        const response = await this.userService.signup(req);
        return res.send(response);
    }

    login = async (req: Request, res: Response): Promise<Response<void>> => {
        const response = await this.userService.login(req);
        return res.send(response);
    }
}