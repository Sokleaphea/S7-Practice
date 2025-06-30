import * as attendanceRepo from "../repositories/attendanceRepo.js";

export async function postAttendance(req, res) {
  try {
    const { studentId, classId, date, mark } = req.body;
    const newRecord = await attendanceRepo.markAttendance({ studentId, classId, date, mark });
    res.status(201).json(newRecord);
  } catch (err) {
    console.error("Error marking attendance:", err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function getAttendance(req, res) {
  try {
    const { studentId, date } = req.query;
    const record = await attendanceRepo.getAttendanceByDate({ studentId, date });
    if (!record) {
      return res.status(404).json({ message: "Attendance not found" });
    }
    res.json(record);
  } catch (err) {
    console.error("Error getting attendance:", err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function getClassAttendance(req, res) {
  try {
    const classId = req.params.id;
    const records = await attendanceRepo.getClassAttendance(classId);
    res.json(records);
  } catch (err) {
    console.error("Error getting class attendance:", err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function getStudentAttendanceSummary(req, res) {
  try {
    const studentId = req.params.id;
    const records = await attendanceRepo.getStudentAttendanceSummary(studentId);
    res.json(records);
  } catch (err) {
    console.error("Error getting summary:", err);
    res.status(500).json({ message: "Server error" });
  }
}