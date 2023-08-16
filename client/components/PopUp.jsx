import React, { useState } from 'react';
import { Modal, Box, Button } from '@mui/material';

const PopUp = ({ open, close, title, bookDetails, deleteBook }) => {
  // var to store img of each book
  const img = bookDetails.imageLinks.smallThumbnail;

  // Material UI modal
  return (
    <Modal open={open} onClose={close}>
      <Box
        sx={{
          p: 2,
          height: 500,
          width: 300,
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
          textAlign: 'center',
          outline: 'none',
        }}
      >
        <h2>{title}</h2>
        <h3>{bookDetails.authors[0]}</h3>
        <img src={img} />
        <p>Genre: {bookDetails.categories[0]}</p>
        <p>Page Count: {bookDetails.pageCount}</p>
        <div id="popupButtons">
          <Button variant="outlined" onClick={close}>
            Close
          </Button>
          <Button
            variant="outlined"
            onClick={(e) => deleteBook(e)}
            color="error"
          >
            Delete
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default PopUp;
