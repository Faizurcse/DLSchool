import React from "react";
import { Box } from "@mui/material";

import LeftSection from "./Left";
import RightSection from "./Right";

function Description() {
  return (
    <Box
      sx={{
        display: "flex",
      //  width:"100%",
       height:'100vh',
       '@media(max-width:360px)': {
     flexDirection:'column'
    },
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex:3,
        }}
      >
        <LeftSection />
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          flex:1,
        }}
      >
        <RightSection />
      </Box>
    </Box>
  );
}

export default Description;
