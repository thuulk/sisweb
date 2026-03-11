import {Table, Model, Column, DataType, AllowNull, CreatedAt, UpdatedAt} from 'sequelize-typescript';
import {Optional} from 'sequelize';

interface EmpresaAtributos {
    id_empresa: number;
    nombre: string;
    datos_generales: string;
    correo_electronico: string;
    contacto: string;
    nombre_contacto: string;
    tier_id: number;
    logo: string;
}

interface EmpresaCreacionAtributos extends Optional<EmpresaAtributos, 'id_empresa' | 'datos_generales' | 'logo' > {}

@Table({
    tableName: "empresas",
    timestamps: false
})

export class Empresa extends Model<EmpresaAtributos, EmpresaCreacionAtributos> {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER,
        field: 'id_empresa'
    })
    id_empresa!: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    nombre!: string;

    @Column({
        type: DataType.STRING(150),
        allowNull: false
    })
    datos_generales!: string;

    @Column({
        type: DataType.STRING(150),
        allowNull: false
    })
    correo_electronico!: string;

    @Column({
        type: DataType.STRING(150),
        allowNull: false
    })
    contacto!: string;

    @Column({
        type: DataType.STRING(150),
        allowNull: false
    })
    nombre_contacto!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    tier_id!: number;

    @Column({
        type: DataType.STRING(150),
        allowNull: false
    })
    logo!: string;

    
    

}


