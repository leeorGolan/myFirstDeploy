import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  
  left: '50%',
 
  transform: 'translate(-50%)',
  width: "calc(100vw - 560px)",
  height:"auto",
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
  m:4
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant='contained'>Opex</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ overflow: 'scroll' }}
      >
        <Box sx={style}>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'   >
          <img src='https://cdna.artstation.com/p/assets/images/images/017/001/122/large/leeor-golan-openerrigbuilder2.jpg?1554279507' style={{width:"100%",margin:30}} />
          <img src='https://cdnb.artstation.com/p/assets/images/images/018/180/723/large/leeor-golan-comp-3.jpg?1558552782' style={{width:"100%"}} />
          <img src='https://cdnb.artstation.com/p/assets/images/images/018/180/723/large/leeor-golan-comp-3.jpg?1558552782' style={{width:"100%"}} />
          <img src='https://cdnb.artstation.com/p/assets/images/images/018/440/003/large/leeor-golan-comp2.jpg?1559381997' style={{width:"100%"}} />
          <img src='https://cdna.artstation.com/p/assets/images/images/017/002/158/large/leeor-golan-poses-02.jpg?1554279299' style={{width:"100%"}} />
          <img src='https://cdnb.artstation.com/p/assets/images/images/018/180/723/large/leeor-golan-comp-3.jpg?1558552782' style={{width:"100%"}} />
          <img src='https://cdnb.artstation.com/p/assets/images/images/018/440/003/large/leeor-golan-comp2.jpg?1559381997' style={{width:"100%"}} />
          <img src='https://cdna.artstation.com/p/assets/images/images/017/002/158/large/leeor-golan-poses-02.jpg?1554279299' style={{width:"100%"}} />
          <img src='https://cdna.artstation.com/p/assets/images/images/017/002/158/large/leeor-golan-poses-02.jpg?1554279299' style={{width:"100%"}} />
          </Box>
          </Box>
      </Modal>
    </div>
  );
}
