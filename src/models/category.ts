import { Table, Model, Column, CreatedAt, UpdatedAt, DataType, AutoIncrement, PrimaryKey } from 'sequelize-typescript'
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
        PrimaryKey: true,
        AutoIncrement: true;


    })

}