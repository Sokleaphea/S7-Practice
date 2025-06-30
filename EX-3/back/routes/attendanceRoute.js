import express from "express";
import {
  postAttendance,
  getAttendance,
  getClassAttendance,
  getStudentAttendanceSummary
} from "../controllers/attendanceController.js";

const router = express.Router();

router.post("/attendance", postAttendance);
router.get("/attendance", getAttendance);   
router.get("/classes/:id/attendance", getClassAttendance);
router.get("/students/:id/attendance", getStudentAttendanceSummary);

export default router;