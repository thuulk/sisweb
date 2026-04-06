import { Router } from 'express';
import { 
    createCategory, 
    deleteCategory, 
    getAllCategories, 
    getCategoryById, 
    modifyCategory } from '../controllers/categoryControllers.js';


const categoryRouter:Router = Router();

categoryRouter.get('/', getAllCategories);
categoryRouter.get('/:id', getCategoryById);
categoryRouter.post('/', createCategory);
categoryRouter.patch('/:id', modifyCategory);
categoryRouter.delete('/', deleteCategory);

export default categoryRouter;