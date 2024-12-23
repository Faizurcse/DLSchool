import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Cards from "./Cards.jsx";
import UpcomingLessonsTable from "./UpcomingLessonsTable";
import UpcomingExamsTable from "./UpcomingExamsTable";
import RecentTasksTable from "./RecentTasksTable";
import NewsUpdatesTable from "./NewsUpdatesTable";


const Dashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ marginTop: 3 ,marginBottom:3}}>
      {/* Dashboard Title */}
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 3 }}>
        Dashboard
      </Typography>

      {/* Cards Section */}
      <Cards />

      {/* Tables Section */}
      <Grid container spacing={3} sx={{ marginTop: 3 }}>
        {/* First Row */}
        <Grid item xs={12} md={6}>
          <UpcomingLessonsTable />
        </Grid>
        <Grid item xs={12} md={6}>
          <UpcomingExamsTable />
        </Grid>

        {/* Second Row */}
        <Grid item xs={12} md={6}>
          <RecentTasksTable />
        </Grid>
        <Grid item xs={12} md={6}>
          <NewsUpdatesTable />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
