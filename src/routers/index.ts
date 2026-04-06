import { Router, Request, Response} from 'express';
import productRouter from './productRouters.js';
import categoryRouter from './categoryRouters.js';


const apiRouter:Router = Router();

apiRouter.use('/product', productRouter);
apiRouter.use('/category', categoryRouter);

apiRouter.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
});

export default apiRouter;