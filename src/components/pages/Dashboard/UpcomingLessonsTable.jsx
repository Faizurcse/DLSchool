import React, { useState } from "react";
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

const lessonsData = [
  { lessonName: "Math 101", pupilName: "John Doe", instructorName: "Mr. Smith", date: "2024-12-20" },
  { lessonName: "Science Basics", pupilName: "Jane Smith", instructorName: "Ms. Davis", date: "2024-12-22" },
  { lessonName: "History 201", pupilName: "Emily Brown", instructorName: "Dr. Taylor", date: "2024-12-25" },
  { lessonName: "Physics 301", pupilName: "Michael Scott", instructorName: "Prof. Johnson", date: "2024-12-27" },
  { lessonName: "Chemistry 101", pupilName: "Laura Wilson", instructorName: "Mr. White", date: "2024-12-29" },
  // { lessonName: "Biology 202", pupilName: "Chris Green", instructorName: "Ms. Clark", date: "2024-12-30" },
  // { lessonName: "English Literature", pupilName: "Sophia Turner", instructorName: "Ms. Brown", date: "2024-12-31" },
];

const UpcomingLessonsTable = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <div>
      <Typography sx={{ mb: 2, fontWeight: "600",fontSize:'16px', color:'#0e5eba' }}>
        Upcoming Lessons
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              {["Lesson Name", "Pupil Name", "Instructor Name", "Date"].map((header, index) => (
                <TableCell
                  key={index}
                  align="center"
                  sx={{
                    backgroundColor: "#f5f5f5", // Add light gray background for column headers
                    fontWeight: "bold",
                  }}
                  onClick={() => handleSort(header.toLowerCase().replace(" ", ""))}
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
            {lessonsData.map((lesson, index) => (
              <TableRow key={index}>
                <TableCell align="center">{lesson.lessonName}</TableCell>
                <TableCell align="center">{lesson.pupilName}</TableCell>
                <TableCell align="center">{lesson.instructorName}</TableCell>
                <TableCell align="center">{lesson.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UpcomingLessonsTable;
