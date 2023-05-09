import React from 'react';
import style from './Post.module.scss';
import PostsManageTable from './components/index'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddPosts from './addPosts/index';
function PostManage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={style['postcontainer']}>
      <div className={style['post-header']}>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>Add</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <AddPosts></AddPosts>
          </Box>
        </Modal>
      </div>
      <PostsManageTable></PostsManageTable>
    </div>
  );
}

export default PostManage;
