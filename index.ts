import express, { Express } from "express";
import apiRouter from "./src/routers/index.js";
import connectionDB from "./src/connection/connection.js";
import morgan from 'morgan';
import cors from 'cors';

const app: Express = express();
const port = 3000;

app.use(cors({ origin: true}));
app.use(morgan('dev'));
app.use(express.json());
app.use(apiRouter);

connectionDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});
