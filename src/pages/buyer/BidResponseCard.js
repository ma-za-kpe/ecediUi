import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
  CardActions,
  Button,
} from '@mui/material';
import { red } from '@mui/material/colors';

const calculateCreditScore = (farmerInfo) => {
  // Placeholder logic for credit score calculation
  // Replace this with your own credit score calculation logic
  const { annualIncome, outstandingLoans } = farmerInfo.financialInformation;
  // Your credit score calculation logic here...
  const creditScore = 750; // Placeholder credit score
  return creditScore;
};

const BidResponseCard = ({ bidInfo, farmerInfo, onReject, onApprove }) => {
  const { title, subheader, description, more, dateAdded } = bidInfo;
  const creditScore = calculateCreditScore(farmerInfo);

  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500], marginRight: 0 }} aria-label="request">
              {title[0].toUpperCase()}
            </Avatar>
          }
          title={title}
          subheader={dateAdded}
        />
        {/* <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', WebkitLineClamp: 4, display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>
            {description}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {more}
          </Typography>
        </CardContent> */}
        <CardContent>
          <Typography variant="h6" color="text.primary">
            Farmer Information
          </Typography>
          <List>
            {/* Display relevant farmer information */}
            <ListItem>
              <ListItemText primary={`Name: ${farmerInfo.personalInformation.firstName} ${farmerInfo.personalInformation.lastName}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Location: ${farmerInfo.farmInformation.farmLocation}`} />
            </ListItem>
            {/* Add more farmer information as needed */}
          </List>
          {/* Display the calculated credit score */}
          <Typography variant="h6" color="text.primary">
            Credit Score: {creditScore}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
          {/* Reject button on the left */}
          <Button onClick={() => onReject(bidInfo)}>Reject</Button>
          {/* Approve button on the right */}
          <Button variant="contained" onClick={() => onApprove(bidInfo)}>Approve</Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default BidResponseCard;
