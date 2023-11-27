import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

const RequestsList = ({ crops }) => {
  const [open, setOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleClickOpen = (request) => {
    setOpen(true);
    setSelectedRequest(request);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRequest(null);
  };

  const handleEdit = (request) => {
    // Add your edit logic here
    console.log('Edit request:', request);
  };

  const handleDelete = (request) => {
    // Add your delete logic here
    console.log('Delete request:', request);
  };

  const renderRow = (request, index) => (
    <Card key={index} sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], marginRight: 0 }} aria-label="request">
            {request.cropName[0].toUpperCase()}
          </Avatar>
        }
        title={request.cropName}
        subheader={`Added on ${request.dateAdded}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', WebkitLineClamp: 4, display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>
          {request.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button onClick={() => handleEdit(request)} variant="outlined" size="small">
          Edit
        </Button>
        <Button onClick={() => handleDelete(request)} sx={{ marginLeft: 'auto' }} variant="outlined" size="small">
          Delete
        </Button>
      </CardActions>
    </Card>
  );

  return (
    <Box sx={{ width: '100%', height: '100%', overflow: 'auto' }}>
      {crops.map(renderRow)}
    </Box>
  );
};

export default RequestsList;
