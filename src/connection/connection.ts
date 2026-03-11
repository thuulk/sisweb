import {Sequelize} from "sequelize-typescript";
import {Empresa} from "../models/empresa.js";


const connection = new Sequelize ({
    database: 'sisweb_db',
    dialect: 'postgres',
    username: 'sisweb_user',
    password: 'HDK#$%Ljkwerff.89',
    storage: ':memory:',
    models: [Empresa]
});

async function connectionDB() {
    try {
        await connection.authenticate();
        console.log("Conexion exitosa con la base de datos PostgreSQL")
        await connection.sync();
    } catch (e) {
        console.log("Error al conectar con la base e datos: ", e);
    }
}

export default connectionDB;