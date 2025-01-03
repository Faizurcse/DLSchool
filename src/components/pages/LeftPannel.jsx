import * as React from 'react';
import PropTypes from 'prop-types';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home'; 
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import TaskTable from './Task/TaskTable/TaskTable';
import AddTask from './Task/AddTask/AddTask';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./pannle.css";
// import { Typography } from '@mui/material';
import Description from './Task/DetaliedDescription/Description';
import Dashboard from './Dashboard/Dashboard';

function LeftPannel() {
  return (
    <Router>
      <AppProvider sx={{width:'300px'}}
        navigation={[
          {
            segment: 'home',
            title: 'Home',
            icon: <HomeIcon />,
             path: '/home',
          },
          {
            segment: 'task',
            title: 'Task',
            icon: <DescriptionIcon />,
             path: '/task',
          },
        ]}
      >
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/task" element={<TaskTable />} />
            <Route path="/task/addtask" element={<AddTask />} />
            <Route path="/task/description" element={<Description />} />
          </Routes>
        </DashboardLayout>
      </AppProvider>
    </Router>
  );
}

LeftPannel.propTypes = {
  window: PropTypes.func,
};

export default LeftPannel;
