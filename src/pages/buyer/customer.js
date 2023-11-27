import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import RequestsList from './RequestsList';
import BidOrderForm from './BidOrderForm';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BidResponseCard from './BidResponseCard';
import EscrowTimeline from './EscrowTimeline';
import ShareIcon from '@mui/icons-material/Share';


// TODO: repetition, please remove
const crops = [
  {
    cropName: 'Maize',
    quantity: '10 tons',
    qualityRequirements: 'Grade A',
    deliveryLocation: 'Port of Nairobi, Kenya',
    deliveryTimeframe: 'Within 4 weeks',
    description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    packagingPreferences: '50 kg bags',
    certifications: ['Organic Certified'],
    contactInformation: {
      email: 'buyer@example.com',
      phone: '+1234567890',
    },
    negotiationTerms: {
      price: 'Negotiable',
      paymentTerms: '50% advance, 50% upon delivery',
    },
    additionalRequirements: 'None',
    dateAdded: '2023-02-15',
  },
  {
    cropName: 'Coffee Beans',
    quantity: '5,000 kg',
    qualityRequirements: 'Arabica, Grade AA',
    deliveryLocation: 'Port of Dar es Salaam, Tanzania',
    deliveryTimeframe: 'Within 6 weeks',
    description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    packagingPreferences: 'Jute bags',
    certifications: ['Fair Trade Certified'],
    contactInformation: {
      email: 'coffeebuyer@example.com',
      phone: '+9876543210',
    },
    negotiationTerms: {
      price: 'Negotiable',
      paymentTerms: '30% advance, 70% LC',
    },
    additionalRequirements: 'Rainforest Alliance certification required',
    dateAdded: '2023-01-01',
  },
  // Add more crop interests as needed
];

const farmer = {
    personalInformation: {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1980-01-15',
      gender: 'Male',
      address: '123 Farmer Street, Farmville',
      email: 'john.doe@example.com',
      phone: '+1234567890',
    },
    farmInformation: {
      farmName: 'Doe Family Farm',
      farmLocation: 'Farmville, Country',
      farmSize: '50 acres',
      crops: [
        {
          cropName: 'Maize',
          quantity: '10 tons',
          qualityRequirements: 'Grade A',
          deliveryLocation: 'Port of Nairobi, Kenya',
          deliveryTimeframe: 'Within 4 weeks',
          description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
          packagingPreferences: '50 kg bags',
          certifications: ['Organic Certified'],
          negotiationTerms: {
            price: 'Negotiable',
            paymentTerms: '50% advance, 50% upon delivery',
          },
          additionalRequirements: 'None',
          dateAdded: '2023-02-15',
        },
        {
          cropName: 'Coffee Beans',
          quantity: '5,000 kg',
          qualityRequirements: 'Arabica, Grade AA',
          deliveryLocation: 'Port of Dar es Salaam, Tanzania',
          deliveryTimeframe: 'Within 6 weeks',
          description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
          packagingPreferences: 'Jute bags',
          certifications: ['Fair Trade Certified'],
          negotiationTerms: {
            price: 'Negotiable',
            paymentTerms: '30% advance, 70% LC',
          },
          additionalRequirements: 'Rainforest Alliance certification required',
          dateAdded: '2023-01-01',
        },
        // Add more crop interests as needed
      ],
    },
    financialInformation: {
      annualIncome: '$50,000',
      creditScore: 750, // An example field for credit score
      outstandingLoans: [
        {
          loanType: 'Equipment Loan',
          amount: '$10,000',
          interestRate: '5%',
          monthlyPayment: '$500',
        },
        // Add more outstanding loans as needed
      ],
    },
  };

// Sample bid responses for demonstration
const bidResponses = [
    {
      bidInfo: {
        title: 'Maize Bid',
        subheader: 'Quantity: 10 tons',
        description: 'This is a bid for Grade A maize with specific delivery requirements.',
        more: 'Additional details about the bid.',
      },
      farmerInfo: farmer,
      onReject: (bidInfo) => console.log(`Rejected bid: ${bidInfo.title}`),
      onApprove: (bidInfo) => console.log(`Approved bid: ${bidInfo.title}`),
    },
    {
      bidInfo: {
        title: 'Coffee Beans Bid',
        subheader: 'Quantity: 5,000 kg',
        description: 'This is a bid for Grade AA Arabica coffee beans with specific delivery requirements.',
        more: 'Additional details about the bid.',
      },
      farmerInfo: farmer,
      onReject: (bidInfo) => console.log(`Rejected bid: ${bidInfo.title}`),
      onApprove: (bidInfo) => console.log(`Approved bid: ${bidInfo.title}`),
    },
    // Add more bid responses as needed
  ];

export default function Customer() {
    const [open, setOpen] = useState(false);
    const [currentStage, setCurrentStage] = useState(0); // Assuming you have a state to track the current stage
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handlePlaceBid = (formData) => {
      // Send a POST request with formData to http://localhost:3001/customer
      fetch('http://localhost:3001/customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          // Handle any further actions after successful POST
          // Assuming you update the currentStage when bid is approved
          setCurrentStage(1); // Update the stage when bid is approved
          // create ecedi escrow wallet
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle errors
        });
    };

    const stages = [
      { title: 'Bid Approval', description: 'Buyer approves the bid and agrees to terms.', date: '2023-12-01', icon: <ShareIcon />, color: '#4CAF50' },
      { title: 'Escrow Creation', description: 'Escrow contract is created with initial funds.', date: '2023-12-05', icon: <ShareIcon />, color: '#2196F3' },
      { title: 'Goods Dispatched', description: 'Farmer dispatches the goods for delivery.', date: '2023-12-10', icon: <ShareIcon />, color: '#FFC107' },
      { title: 'In Transit', description: 'Goods are in transit to the buyer.', date: '2023-12-15', icon: <ShareIcon />, color: '#9C27B0' },
      { title: 'Goods Delivered', description: 'Buyer receives and verifies the goods.', date: '2023-12-20', icon: <ShareIcon />, color: '#E91E63' },
      { title: 'Funds Released', description: 'Escrow funds released to the farmer.', date: '2023-12-25', icon: <ShareIcon />, color: '#795548' },
      // Add more stages as needed
    ];

    // Example: Move to the next stage
    const handleNextStage = () => {
      if (currentStage < stages.length - 1) {
        setCurrentStage(currentStage + 1);
      }
    };
  
  
    return (
      <Grid container spacing={2}>
      {/* Button Outside Columns */}
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Button variant="contained" onClick={handleClickOpen} sx={{ marginBottom: 2 }}>
          Create Order
        </Button>
      </Grid>

      {/* EscrowTimeline component */}
      {/* <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <EscrowTimeline stages={stages} currentStage={currentStage} />
      </Grid> */}

      {/* Left Column */}
      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom align="center">
          Recent Bids
        </Typography>
        {/* Add a list of BidResponseCards here */}
        {bidResponses.map((bidResponse, index) => (
          <BidResponseCard key={index} {...bidResponse} />
        ))}
      </Grid>

      {/* Right Column */}
      <Grid item xs={12} md={6}>
        <Typography variant="h6" gutterBottom align="center">
          Activity
        </Typography>
        <Box sx={{ p: 2 }}>
          <RequestsList crops={crops} />
        </Box>
      </Grid>

      {/* BidOrderForm component for the bid order form */}
      <BidOrderForm open={open} handleClose={handleClose} handlePlaceBid={handlePlaceBid} />
    </Grid>
  );
  }
