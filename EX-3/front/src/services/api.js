const API_URL = "http://localhost:4000";

export async function markAttendance({ studentId, classId, date, mark }) {
  const res = await fetch(`${API_URL}/attendance`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ studentId, classId, date, mark }),
  });
  return res.json();
}

export async function getStudentAttendance(studentId) {
  const res = await fetch(`${API_URL}/students/${studentId}/attendance`);
  return res.json();
}

export async function getClassAttendance(classId) {
  const res = await fetch(`${API_URL}/classes/${classId}/attendance`);
  return res.json();
}