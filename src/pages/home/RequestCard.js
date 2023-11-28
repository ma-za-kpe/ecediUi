import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function RequestCard({ title, subheader, musthave, more }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
         avatar={
          <Avatar sx={{ bgcolor: red[500], marginRight: 0 }} aria-label="request">
            {title[0].toUpperCase()}
          </Avatar>
        }
        title={title}
        subheader={subheader}
      />
      <CardContent>
      <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', WebkitLineClamp: 4, display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>
          {musthave}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button onClick={handleClickOpen} variant="contained" sx={{ marginLeft: 'auto' }} size="small">Learn More</Button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {more}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} autoFocus>
            Bid
          </Button>
        </DialogActions>
      </Dialog>
      </CardActions>
    </Card>
    </React.Fragment>
  );
}
