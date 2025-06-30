// App.jsx
import { useState, useEffect } from "react";
import AttendanceForm from "./components/attendanceForm";
import ClassAttendanceTable from "./components/attendanceTable";
import { getClassAttendance } from "./services/api";

function App() {
  const [selectedClassId, setSelectedClassId] = useState(1);
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    async function fetchAttendance() {
      const data = await getClassAttendance(selectedClassId);
      setAttendanceRecords(data);
    }
    fetchAttendance();
  }, [selectedClassId]);

  const handleAttendanceMarked = async () => {
    const data = await getClassAttendance(selectedClassId);
    setAttendanceRecords(data);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Attendance System</h1>
      <AttendanceForm
        selectedClassId={selectedClassId}
        setSelectedClassId={setSelectedClassId}
        onAttendanceMarked={handleAttendanceMarked}
      />
      <ClassAttendanceTable records={attendanceRecords} />
    </div>
  );
}

export default App;