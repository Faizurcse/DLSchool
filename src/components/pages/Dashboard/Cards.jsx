import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";

const Cards = () => {
  const cardData = [
    { title: "Total Lessons", value: "236" },
    { title: "Total Users", value: "78,250" },
    { title: "Total Order", value: "18,800" },
    { title: "Total Sales", value: "$35,078" },
  ];

  return (
    <Grid container spacing={2} sx={{ marginBottom: 4 }}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              borderRadius: 0,
              backgroundColor: "#fff",
              textAlign: "left",
            }}
          >
            <CardContent>
              <Typography
                variant="subtitle1"
                sx={{ color: "#aaa", fontWeight: "bold", marginBottom: 1 }}
              >
                {card.title}
              </Typography>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#333" }}
                >
                  {card.value}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
