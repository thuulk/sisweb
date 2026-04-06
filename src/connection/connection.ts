import {Sequelize} from "sequelize-typescript";
import { Category } from "../models/category.js"
import { Product } from "../models/product.js";


const connection = new Sequelize ({
    database: 'sisweb_db',
    dialect: 'postgres',
    username: 'sisweb_user',
    password: 'HDK#$%Ljkwerff.89',
    storage: ':memory:',
    models: [ Category, Product]
});

async function connectionDB() {
    try {
        // cambiar a await connection.authenticate() una vez vaya a produccion
        await connection.sync({ alter: true });
        console.log("Conexion exitosa con la base de datos PostgreSQL")
    } catch (e) {
        console.log("Error al conectar con la base e datos: ", e);
    }
}

export default connectionDB;