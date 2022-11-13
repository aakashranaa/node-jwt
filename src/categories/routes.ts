import { Router } from "express";
import { getCategories, getCategoryById } from './controller'

const router = Router();

router.get('/', (req, res) => {res.send('this is the categories router')})

router.route('/all')
    .get(getCategories)

router.route('/:id')
    .get(getCategoryById)

router.route('/add')
    .post()


export default router;
