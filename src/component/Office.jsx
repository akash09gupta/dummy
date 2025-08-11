import { Typography } from "@mui/material";
import NavBar from "./NavBar";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function Office() {
  return (
    <>
      <NavBar />
      <div className="w-100 vh-100" style={{marginTop: "8rem"}}>
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
      <Paper elevation={8} />
      <Paper />
      <Paper />
      <Paper />
      <Paper />   
      <Paper elevation={3} />
      </Box >
      </div>
    </>
  );
}

export default Office;
