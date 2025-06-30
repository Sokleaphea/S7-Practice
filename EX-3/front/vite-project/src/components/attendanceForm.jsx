import { useState } from "react";
import { markAttendance } from "../services/api";

const AttendanceForm = ({ selectedClassId, setSelectedClassId, onAttendanceMarked }) => {
  const [studentId, setStudentId] = useState(1);
  const [date, setDate] = useState("");
  const [mark, setMark] = useState("Present");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await markAttendance({ studentId, classId: selectedClassId, date, mark });
    alert("Attendance marked");
    await onAttendanceMarked();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-2">
      <div>
        <label>Class ID:</label>
        <input
          type="number"
          value={selectedClassId}
          onChange={(e) => setSelectedClassId(Number(e.target.value))}
          className="border p-1 ml-2"
        />
      </div>
      <div>
        <label>Student ID:</label>
        <input
          type="number"
          value={studentId}
          onChange={(e) => setStudentId(Number(e.target.value))}
          className="border p-1 ml-2"
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-1 ml-2"
        />
      </div>
      <div>
        <label>Mark:</label>
        <select
          value={mark}
          onChange={(e) => setMark(e.target.value)}
          className="border p-1 ml-2"
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
        Mark Attendance
      </button>
    </form>
  );
};

export default AttendanceForm;