import { Table, Model, Column, CreatedAt, UpdatedAt, DataType } from 'sequelize-typescript'
import { Optional } from 'sequelize'

interface CategoryAttributes {
    id: number;
    name: string;
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes,'id'>{}

@Table ({
    tableName: "Categories"
})

export class Category extends Model<CategoryAttributes, CategoryCreationAttributes> {

    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING
    })
    name!: string;

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

}