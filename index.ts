import express, {type Express, type Request, type Response} from 'express';
import morgan from 'morgan';
import apiRouter from './src/routers/productRouters.js';

/* 
    express es el framework principal que facilita la creacion
   de servidores web, se importan los tipos Express, Request y Response,
   lo que asiste a TS en saber exactamente la estructura de datos que esperar,
   evitando errores implicitos (ambigüedades a la hora de escribir el codigo
*/

/*
    morgan es un middleware (intermediario). Su trabajo es registrar en la
    consola cada vez que alguien visita una direccion de mi API, lo que es 
    fundamental para el debbug
*/

// inicializando servidor al crear una instancia Express
// y almacenandola en la constante app
const app:Express = express();

// definiendo la constante que alojara el puerto del servidor
const port = 3000;

// Instruyendole al servidor que utilice morgan en modo desarrollo
app.use(morgan('dev'));
app.use(express.json());
app.use(apiRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});