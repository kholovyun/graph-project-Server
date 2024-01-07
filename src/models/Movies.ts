import { Model, Table, Column, PrimaryKey, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";

@Table({
    tableName: "movies",
    timestamps: false
})

export default class Movies extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
        id!: string;

    @ForeignKey(() => Child)
    @Column({
        type: DataType.UUID,
        field: "child_id",
        allowNull: false,
    })
        childId!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
        type!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
        symptom!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
        factors!: string;

}