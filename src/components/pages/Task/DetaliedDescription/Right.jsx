import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  Divider,
} from '@mui/material';

function RightSection() {
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center', 
      paddingTop: 2, 
      }}
    >
      <Card
        sx={{
          width: '360px', 
          bgcolor: '#ffffff',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: 3,
        }}
      >
        <CardContent>
          {/* Dropdown for Status */}
          <FormControl fullWidth sx={{ mb: 2 }}>
            
            <Select defaultValue="In Reviews">
              <MenuItem value="In Reviews">In Reviews</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
            </Select>
          </FormControl>

          {/* Task Details with Dividers */}
          <Box>
            {[
              { label: 'Tasks No', value: '#VLZ456' },
              { label: 'Tasks Title', value: 'Profile Page Structure' },
              { label: 'Project Name', value: 'Velzon - Admin Dashboard' },
              {
                label: 'Priority',
                value: (
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'error.main',
                      bgcolor: 'rgba(244, 67, 54, 0.1)',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      display: 'inline-block',
                    }}
                  >
                    High
                  </Typography>
                ),
              },
              {
                label: 'Status',
                value: (
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'warning.main',
                      bgcolor: 'rgba(255, 152, 0, 0.1)',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      display: 'inline-block',
                    }}
                  >
                    In Progress
                  </Typography>
                ),
              },
              { label: 'Due Date', value: '05 Jan, 2022' },
            ].map((item, index) => (
              <React.Fragment key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 1.5, // Padding for spacing
                  }}
                >
                  <Typography variant="body1" fontWeight="bold">
                    {item.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.value}
                  </Typography>
                </Box>
                {index < 5 && <Divider />} 
              </React.Fragment>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default RightSection;
