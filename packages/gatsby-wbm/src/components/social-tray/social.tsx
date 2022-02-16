import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: 1,
      color: '#fff',
    },
    root: {
      height: 0,
      flexGrow: 1,
    },
    speedDial: {
      position: 'fixed',
      bottom: theme.spacing(2),
      left: theme.spacing(2),
    },
  })
);

export default function SpeedDialTooltipOpen() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [icon, setIcon] = React.useState(<FavoriteBorderIcon />);

  const SocialLinks: any = {
    Telegram: 'https://t.me/webbrainsmedia',
    Facebook: 'https://www.facebook.com/webbrainsmedia',
    Instagram: 'https://www.instagram.com/webbrainsmedia/',
    Twitter: 'https://twitter.com/jainsahil846',
    LinkedIn: 'https://www.linkedin.com/in/sjcodebook/',
  };

  const actions = [
    {
      icon: (
        <TelegramIcon
          style={{ fill: '#0088cc' }}
          onClick={() => handleClick('Telegram')}
        />
      ),
      name: 'Telegram',
    },
    {
      icon: (
        <FacebookIcon
          style={{ fill: '#3b5998' }}
          onClick={() => handleClick('Facebook')}
        />
      ),
      name: 'Facebook',
    },
    {
      icon: (
        <TwitterIcon
          style={{ fill: '#00acee' }}
          onClick={() => handleClick('Twitter')}
        />
      ),
      name: 'Twitter',
    },
    {
      icon: (
        <InstagramIcon
          style={{ fill: '#3f729b' }}
          onClick={() => handleClick('Instagram')}
        />
      ),
      name: 'Instagram',
    },
    {
      icon: (
        <LinkedInIcon
          style={{ fill: '#0e76a8' }}
          onClick={() => handleClick('LinkedIn')}
        />
      ),
      name: 'LinkedIn',
    },
  ];

  const handleClick = (network: string) => {
    handleClose();
    window.open(SocialLinks[network], '_blank');
  };

  const handleOpen = () => {
    setOpen(true);
    setIcon(<FavoriteIcon style={{ fill: '#d24769' }} />);
  };

  const handleClose = () => {
    setOpen(false);
    setIcon(<FavoriteBorderIcon />);
  };

  return (
    <div className={classes.root}>
      <Backdrop open={open} className={classes.backdrop} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        icon={icon}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          color: 'default',
          size: 'small',
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            id={action.name}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipPlacement="right"
          />
        ))}
      </SpeedDial>
    </div>
  );
}
