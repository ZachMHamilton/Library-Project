import React from 'react';
import { Modal, Box, Button } from '@mui/material';

const PopUp = ({ open, close, title, bookDetails }) => {
  return (
    <Modal open={open} onClose={close}>
      <Box
        sx={{
          p: 2,
          height: 300,
          width: 300,
          border: '1px solid black',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          bgcolor: 'white',
          boxShadow: 24,
          borderRadius: 4,
          outline: 'none',
        }}
      >
        <h2>{title}</h2>
        <h3>Author: {bookDetails.authors[0]}</h3>
        <p>Genre: {bookDetails.categories[0]}</p>
        <p>Page Count: {bookDetails.pageCount}</p>
        <Button variant="outlined" onClick={close}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default PopUp;
