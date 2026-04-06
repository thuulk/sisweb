import { 
    Table, 
    Model, 
    Column, 
    CreatedAt, 
    UpdatedAt, 
    DataType, 
    ForeignKey,
    PrimaryKey,
    BelongsTo
} from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Category } from './category.js';

interface ProductAttributes {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    categoryId: number;
}

interface ProductCreationAttributes extends Optional<ProductAttributes,'id'>{}

@Table ({
    tableName: "Products"
})

export class Product extends Model<ProductAttributes, ProductCreationAttributes> {

    @PrimaryKey
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER
    })
    id!: number;

    @ForeignKey(() => Category)
    @Column ({ type: DataType.INTEGER })
    categoryId!: number;

    @BelongsTo(() => Category)
    category!: Category;

    @Column ({ type: DataType.STRING })
    title!: string;

    @Column({ type: DataType.STRING })
    description!: string;

    @Column({ type: DataType.FLOAT })
    price!: number;

    @Column({ type: DataType.FLOAT })
    discountPercentage!: number;

    @Column({ type: DataType.FLOAT })
    rating!: number;

    @Column({ type: DataType.INTEGER })
    stock!: number;

    @CreatedAt
    @Column ({ type: DataType.DATE })
    createdAt!: Date;

    @UpdatedAt
    @Column ({ type: DataType.DATE })
    updatedAt!: Date;

}