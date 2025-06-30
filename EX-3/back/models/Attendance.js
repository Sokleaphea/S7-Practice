import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import Student from "./Student.js";
import Class from "./Class.js";

const Attendance = sequelize.define('Attendance', {
    date : {
        type : DataTypes.DATE,
    },
    mark : {
        type : DataTypes.ENUM("Present", "Absent")
    },
});

export default Attendance;

Attendance.belongsTo(Student, { foreignKey: "studentId" });
Student.hasMany(Attendance, { foreignKey: "studentId" });

Attendance.belongsTo(Class, { foreignKey: "classId" });
Class.hasMany(Attendance, { foreignKey: "classId" });