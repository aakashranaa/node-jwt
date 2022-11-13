import { Request, Response } from "express";
import { getAllCategories, getCategory } from "./service";


const getCategories = async (req: Request, res: Response) : Promise<Response<void>> => {
    const response = await getAllCategories();
    return res.send(response);
}

const getCategoryById = async (req: Request, res: Response): Promise<Response<void>> => {
    const response = await getCategory(req);
    return res.send(response);
}

export { getCategories, getCategoryById };