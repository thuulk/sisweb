import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, PrimaryKey, AutoIncrement} from 'sequelize-typescript';
import {Optional} from 'sequelize';

interface ProductAttributes {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
}

interface ProductCreationAttributes extends Optional<ProductAttributes,'id'>{}

@Table ({
    tableName: "Products"
})

export class Product extends Model<ProductAttributes, ProductCreationAttributes> {

    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER
    })
    id!: number;


    @Column
    title!: string;

    @Column({
        type: DataType.STRING
    })
    description!: string;

    @Column({
        type: DataType.FLOAT
    })
    price!: number;

    @Column({
        type: DataType.FLOAT
    })
    discountPercentage!: number;

    @Column({
        type: DataType.FLOAT
    })
    rating!: number;

    @Column({
        type: DataType.INTEGER
    })
    stock!: number;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

}