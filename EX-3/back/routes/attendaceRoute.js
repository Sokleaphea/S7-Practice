import express from "express";
import {
  postAttendance,
  getAttendance,
  getClassAttendance,
  getStudentAttendanceSummary
} from "../controllers/attendanceController.js";

const router = express.Router();

router.post("/attendance", postAttendance); // /attendance?studentId=1&...
router.get("/attendance", getAttendance);   // /attendance?studentId=1&...
router.get("/classes/:id/attendance", getClassAttendance);
router.get("/students/:id/attendance", getStudentAttendanceSummary);

export default router;