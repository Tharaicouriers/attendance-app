import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../AdminDashboard.css';

const AdminDashboard = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const response = await axios.get('http://your-backend-server.com/attendance');
      setAttendance(response.data);
    } catch (error) {
      console.error('Error fetching attendance:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard - Attendance Records</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Check-in Time</th>
            <th>Check-out Time</th>
            <th>Location</th>
            <th>Face Image</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record) => (
            <tr key={record.id}>
              <td>{record.user_id}</td>
              <td>{record.checkin_time}</td>
              <td>{record.checkout_time || 'Not Checked Out'}</td>
              <td>{record.checkin_lat}, {record.checkin_lng}</td>
              <td>
                {record.face_image && <img src={`http://your-backend-server.com/${record.face_image}`} alt="Face" className="face-image" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
