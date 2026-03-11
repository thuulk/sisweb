import { Router } from 'express';
import { createEmpresa, deleteEmpresa, getAllEmpresas, getEmpresaById, modifyEmpresa } from '../controllers/empresaControllers.js'

const empresaRouters: Router = Router();

empresaRouters.get('/', getAllEmpresas);

empresaRouters.get('/:id', getEmpresaById);

empresaRouters.post('/', createEmpresa);

empresaRouters.patch('/:id', modifyEmpresa);

empresaRouters.delete('/', deleteEmpresa);

export default empresaRouters;