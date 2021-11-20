import React from 'react';
import 'boxicons';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Dashboard() {
  // React Hooks    
  return (
    <>
      <header className="page-header">
        <box-icon name='calendar' className="page-header-icon"  color='rgb(216, 253, 253)' ></box-icon>
        <span> Patient Dashboard</span>
      </header>
      <div>
      <Stack direction="row" spacing={6}>
          <Item> 
            <div className="dashboard-item">
              You have 2 appointments in this month
            </div>
          </Item>          
          <Item>             
            <div className="dashboard-item">
              Your have 0 messages
            </div>
          </Item>
        </Stack>
      </div>
    </>
  );
}

export default Dashboard;
