import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import RequestsList from './RequestsList';
import BidOrderForm from './BidOrderForm';

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

export default function Customer() {
    const [open, setOpen] = useState(false);
  
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
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle errors
        });
    };
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Button variant="contained" onClick={handleClickOpen} sx={{ marginBottom: 2 }}>
          Place Bid Order
        </Button>
  
        {/* BidOrderForm component for the bid order form */}
        <BidOrderForm open={open} handleClose={handleClose} handlePlaceBid={handlePlaceBid} />
  
        {/* RequestsList component for the list of requests */}
        <RequestsList crops={crops} />
      </Box>
    );
  }