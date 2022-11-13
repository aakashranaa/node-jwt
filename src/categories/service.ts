import { Request } from 'express';
import { Categories } from '../entities/category.entity';
import { dataSource } from '../database/data-source';

const getAllCategories = async (): Promise<Categories[]> => {
    const categoryRepo = dataSource.getRepository(Categories);
    const categories = await categoryRepo.find();   
    if (!categories) console.log('unable to fetch the data from db');
    return categories;
}

const getCategory = async(req: Request) : Promise<any> => {
    const categoryRepo = dataSource.getRepository(Categories);
    const category = await categoryRepo.findOneBy({CategoryId: parseInt(req.params.id)});   
    if (!category) console.log('unable to fetch the data from db');
    return category;
}

export { getAllCategories, getCategory };