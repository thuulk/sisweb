import { Router, Request, Response} from 'express';
import empresaRouters from './empresaRouters.js';

const apiRouter:Router = Router();

apiRouter.use('/empresa', empresaRouters);

apiRouter.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
});

export default apiRouter;