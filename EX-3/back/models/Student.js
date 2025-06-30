import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import Class from "./Class.js";

const Student = sequelize.define('Student', {
    name : {
        type : DataTypes.STRING,
    },
});

export default Student;

Student.belongsTo(Class, { foreignKey: "classId" });
Class.hasMany(Student, { foreignKey: "classId" });