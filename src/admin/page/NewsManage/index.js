import React from 'react';
import style from './newsmanage.module.css';
import NewsManageTable from './components/index'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddNews from './addNews/index';

function NewsManage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={style['newcontainer']}>
      <div className={style['new-header']}>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>Add</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <AddNews></AddNews>
          </Box>
        </Modal>
      </div>
      <NewsManageTable></NewsManageTable>
    </div>
  );
}

export default NewsManage