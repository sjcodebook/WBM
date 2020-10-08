import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Newsletter from '../newsletter/newsletter';

export default function MailingListModal(props: any) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const useStyles = makeStyles(() =>
    createStyles({
      modal: {
        display: matches ? 'flex' : 'block',
        alignItems: 'center',
        justifyContent: 'center',
      },
    })
  );
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if ('action' in props.query && props.query.action === 'ml_pop_up') {
      handleOpen();
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Newsletter />
        </Fade>
      </Modal>
    </div>
  );
}
