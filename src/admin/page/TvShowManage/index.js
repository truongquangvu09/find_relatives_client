import React from 'react';
import TvShowManageTable from './components/index';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddTvShow from './addTvShow/index';

function TvShowManage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div>
        <Button
          style={{ backgroundColor: '#1E90FF', color: 'white' }}
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          Add
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <AddTvShow></AddTvShow>
          </Box>
        </Modal>
      </div>
      <TvShowManageTable></TvShowManageTable>
    </div>
  );
}

export default TvShowManage;
