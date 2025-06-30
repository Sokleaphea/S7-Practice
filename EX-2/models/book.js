import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Book = sequelize.define('Book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        publicationYear: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pages: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Book;
}