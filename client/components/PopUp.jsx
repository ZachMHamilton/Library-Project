import React from 'react';
import { Modal, Box, Button } from '@mui/material';

const PopUp = ({ open, close, title }) => {
  return (
    <Modal open={open} onClose={close}>
      <Box
        sx={{
          p: 2,
          height: 500,
          width: 500,
          border: '1px solid black',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          bgcolor: 'white',
          boxShadow: 24,
          borderRadius: 4,
          outline: 'none',
        }}
      >
        <h2>{title}</h2>
        <p>Description</p>
        <Button variant="outlined" onClick={close}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default PopUp;
