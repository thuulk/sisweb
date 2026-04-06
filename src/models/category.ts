import { 
    Table, 
    Model, 
    Column, 
    CreatedAt, 
    UpdatedAt, 
    DataType, 
    PrimaryKey 
} from 'sequelize-typescript'
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

    @PrimaryKey
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER
    })
    id!: number;

    @Column({ type: DataType.STRING })
    name!: string;

    @CreatedAt
    @Column ({ type: DataType.DATE })
    createdAt!: Date;

    @UpdatedAt
    @Column ({ type: DataType.DATE })
    updatedAt!: Date;

}