import React from "react";

import {
  Checkbox,
  Container,
  Box,
  TextField,
  Avatar,
  Button,
  MenuItem,
  Select,
  OutlinedInput,
  Typography,
} from "@mui/material";

const AddTask = () => {
  return (
    <Container>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        gap={2}
        sx={{
          mt: 3,
          mb: 3,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          paddingBottom: "1rem",
          "@media(max-width:360px)": {
            boxShadow: "none",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#e0f7fa",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography variant="h6">Add Task</Typography>
          <Button sx={{ fontSize: "1rem" }}>✖</Button>
        </Box>

        <Box
          flexBasis={{ xs: "100%", sm: "95%" }}
          maxWidth={{ xs: "100%", sm: "95%" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {/* Label above input */}
          <Typography variant="subtitle2">Title</Typography>

          {/* Search Input */}
          <OutlinedInput
            sx={{ height: "3rem" }}
            id="search-task"
            type="text"
            placeholder="title"
            fullWidth
          />
        </Box>

        <Box
          flexBasis={{ xs: "100%", sm: "95%" }}
          maxWidth={{ xs: "100%", sm: "95%" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {/* Label above input */}
          <Typography variant="subtitle2">Description</Typography>

          <TextField
            placeholder="Enter description"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
          />
        </Box>
        {/* Assign To */}

        <Box
          flexBasis={{ xs: "100%", sm: "95%" }}
          maxWidth={{ xs: "100%", sm: "95%" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="subtitle2">Assigned To</Typography>

          <Box display="flex" gap={2}>
            <Checkbox />
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=7" />
            <Typography sx={{ marginTop: "8px" }}>james cotline</Typography>
          </Box>

          <Box display="flex" gap={2}>
            <Checkbox />
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=5" />
            <Typography sx={{ marginTop: "8px" }}>james kohli</Typography>
          </Box>

          <Box display="flex" gap={2}>
            <Checkbox />
            <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=5" />
            <Typography sx={{ marginTop: "8px" }}>james warner</Typography>
          </Box>
        </Box>
        <Box
          flexBasis={{ xs: "100%", sm: "95%" }}
          maxWidth={{ xs: "100%", sm: "95%" }}
          sx={{
            display: "flex",

            gap: 1,
          }}
        >
          <Box
            flexBasis={{ xs: "100%", sm: "50%" }}
            maxWidth={{ xs: "100%", sm: "50%" }}
          >
            <Typography variant="subtitle2">Due Date</Typography>

            <OutlinedInput
              sx={{ height: "3rem" }}
              id="search-task"
              type="date"
              placeholder="title"
              fullWidth
            />
          </Box>

          <Box
            flexBasis={{ xs: "100%", sm: "50%" }}
            maxWidth={{ xs: "100%", sm: "50%" }}
          >
            <Typography variant="subtitle2">Status</Typography>

            <Select sx={{ height: "3rem" }} displayEmpty fullWidth>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="java">Java</MenuItem>
              <MenuItem value="python">Python</MenuItem>
              <MenuItem value="javascript">JavaScript</MenuItem>
            </Select>
          </Box>
        </Box>
        <Box
          flexBasis={{ xs: "100%", sm: "95%" }}
          maxWidth={{ xs: "100%", sm: "95%" }}
        >
          <Typography variant="subtitle2">Priority</Typography>

          <Select sx={{ height: "3rem" }} displayEmpty fullWidth>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="java">Java</MenuItem>
            <MenuItem value="python">Python</MenuItem>
            <MenuItem value="javascript">JavaScript</MenuItem>
          </Select>
        </Box>

        <Box
          flexBasis={{ xs: "100%", sm: "95%" }}
          maxWidth={{ xs: "100%", sm: "95%" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {/* Label above input */}
          <Typography variant="subtitle2">Comments</Typography>

          <TextField
            placeholder="Enter comments"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
          />
        </Box>
        <Box display="flex" justifyContent="end" width="95%" gap={2}>
          <Button variant="outlined">close</Button>
          <Button variant="contained">Add Task</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddTask;
