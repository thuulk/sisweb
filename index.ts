import express, {type Express, type Request, type Response} from 'express';
import morgan from 'morgan'

/* express es el framework principal que facilita la creacion
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
app.use(morgan('dev'))

// cuando alguien haga una peticion del tipo GET a la direccion raiz
// se ejecutara la funcion
app.get('/', (req:Request, res:Response) => {
    res.send("Hello World!")
})

// cuando alguien haga una peticion GET a la direccion (<UrlBase>/products)
// se ejecutara la siguiente funcion
app.get('/products', (req:Request, res:Response) => {
    res.send("Hello Productos!")
})

// cuando alguien haga una peticion GET a la direccion (<UrlBase>/products:id)
// se ejecutara la siguiente funcion
app.get('/products/:id', (req:Request, res:Response) => {
    res.send(req.params.id)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})