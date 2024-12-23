import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { RiExpandUpDownFill } from "react-icons/ri";

const exams = [
  { exam: "Math Test", type: "Midterm", pupil: "John Doe", date: "2024-02-01" },
  { exam: "English Quiz", type: "Weekly", pupil: "Jane Doe", date: "2024-02-05" },
  { exam: "Science Exam", type: "Final", pupil: "Emily Smith", date: "2024-02-10" },
  { exam: "History Test", type: "Midterm", pupil: "Michael Brown", date: "2024-02-12" },
  { exam: "Biology Quiz", type: "Weekly", pupil: "Sarah Wilson", date: "2024-02-15" },
  // { exam: "Physics Test", type: "Final", pupil: "Chris Green", date: "2024-02-18" },
  // { exam: "Physics Test", type: "Final", pupil: "Chris Green", date: "2024-02-18" },
];

const UpcomingExamsTable = () => {
  return (
    <div>
      <Typography sx={{ mb: 2, fontWeight: "600",fontSize:'16px', color:'#0e5eba' }}>
        Upcoming Exams
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              {["Exam Name", "Exam Type", "Pupil Name", "Date"].map((header, index) => (
                <TableCell
                  key={index}
                  align="center"
                  sx={{
                    backgroundColor: "#f5f5f5", // Light gray background for headers
                    fontWeight: "bold",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {header}
                    <RiExpandUpDownFill style={{ marginLeft: 5, cursor: "pointer" }} />
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {exams.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.exam}</TableCell>
                <TableCell align="center">{row.type}</TableCell>
                <TableCell align="center">{row.pupil}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UpcomingExamsTable;
