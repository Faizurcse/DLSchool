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

const news = [
  { title: "Tech Conference 2024", source: "Tech Times", date: "2024-01-09" },
  { title: "AI Breakthrough", source: "AI News", date: "2024-01-05" },
  { title: "Space Exploration Advances", source: "Space Daily", date: "2024-01-12" },
  { title: "Renewable Energy Growth", source: "Eco News", date: "2024-01-15" },
  { title: "Global Markets Update", source: "Finance Today", date: "2024-01-10" },
  // { title: "Global Markets Update", source: "Finance Today", date: "2024-01-10" },
];

const NewsUpdatesTable = () => {
  return (
    <div>
      <Typography sx={{ mb: 2, fontWeight: "600",fontSize:'16px', color:'#0e5eba' }}>
        News and Updates
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              {["Title", "Source", "Date"].map((header, index) => (
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
            {news.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="center">{row.source}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NewsUpdatesTable;
