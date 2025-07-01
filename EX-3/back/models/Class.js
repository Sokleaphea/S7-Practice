import { DataTypes } from "sequelize";
import sequelize from "../databases/database.js";

const Class = sequelize.define('Class', {
    name : {
        type : DataTypes.STRING,
    },
});

export default Class;