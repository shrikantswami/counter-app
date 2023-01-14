import { Box } from '@mui/material';
import React from 'react';
import Logo from '../components/Logo';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <Box  sx= {{
      padding: '20px'
  }}>
      <Typography  >
      <div className="text-center"  >
          <Logo size="80px"   />
          <h1>Welcome To Profile</h1>
          {/* <p>Oops, the page you requested is not found.</p> */}
      </div>
      </Typography>
  </Box>
  );
};
  
export default About;