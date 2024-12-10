import * as React from 'react';
import PropTypes from 'prop-types';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import TaskTable from './Task/TaskTable/TaskTable';
import AddTask from './Task/AddTask/AddTask';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function LeftPannel() {
  return (
    <Router>
      <AppProvider
        navigation={[
          {
            segment: 'home',
            title: 'Home',
            icon: <DescriptionIcon />,
          },
          {
            segment: 'task',
            title: 'Task',
            icon: <DescriptionIcon />,
          },
        ]}
      >
        <DashboardLayout>
          <Routes>
            <Route
              path="/"
              element={<div>Welcome to the Home Page!</div>}
            />
            <Route path="/task" element={<TaskTable />} />
            <Route path="/task/addtask" element={<AddTask/>} />
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
