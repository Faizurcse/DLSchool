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

const tasks = [
  { task: "Code Review", status: "Pending", assignee: "John Doe", date: "2024-01-12" },
  { task: "UI Design", status: "Completed", assignee: "Jane Smith", date: "2024-01-10" },
  { task: "Bug Fixing", status: "In Progress", assignee: "Emily Davis", date: "2024-01-15" },
  { task: "Documentation", status: "Completed", assignee: "Michael Brown", date: "2024-01-08" },
  { task: "Testing", status: "Pending", assignee: "Sarah Wilson", date: "2024-01-18" },
  // { task: "Database Migration", status: "In Progress", assignee: "Chris Green", date: "2024-01-20" },
];

const RecentTasksTable = () => {
  return (
    <div>
      <Typography sx={{ mb: 2, fontWeight: "600",fontSize:'16px', color:'#0e5eba' }}>
        Recent Tasks
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              {["Task Name", "Task Status", "Task Assigned To", "Date"].map((header, index) => (
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
            {tasks.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.task}</TableCell>
                <TableCell
                  align="center"
                  sx={{
                    color:
                      row.status === "Completed"
                        ? "green"
                        : row.status === "Pending"
                        ? "orange"
                        : "blue",
                  }}
                >
                  {row.status}
                </TableCell>
                <TableCell align="center">{row.assignee}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RecentTasksTable;
