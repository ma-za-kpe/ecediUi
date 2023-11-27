import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Requests from './Requests';

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


export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {crops.map((crop, index) => (
      <Grid item
        xs={4}
        sm={6}
        md={4}
        lg={3}
        xl={2}
        key={index}
      >
        <Requests crops={[crop]} />
      </Grid>
    ))}
  </Grid>
</Box>
  );
}
