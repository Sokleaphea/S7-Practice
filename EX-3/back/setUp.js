import sequelize from "./database/database.js";
import Student from "./models/Student.js";
import Class from "./models/Class.js";
import Attendance from "./models/Attendance.js";

await sequelize.sync({ force: true });

const classA = await Class.create({ name: "Math 101" });
const classB = await Class.create({ name: "History 201" });

const s1 = await Student.create({ name: "Alice", classId: classA.id });
const s2 = await Student.create({ name: "Bob", classId: classA.id });
const s3 = await Student.create({ name: "Charlie", classId: classB.id });


console.log("Sample data added.");
process.exit();