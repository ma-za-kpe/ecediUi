import React from 'react'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import FarmerProfileForm from './FarmerProfileForm'
import OrderManagementComponent from './OrderManagementComponent'

const Farmer = () => {

    const farmer_profile = {
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
    

    return (
        <Grid container spacing={2}>
        {/* Left side */}
        <Grid item xs={12} md={6}>
          <Box p={2}>
            {/* Content for the left side */}
            <FarmerProfileForm farmerData={farmer_profile} />
          </Box>
        </Grid>
  
        <Grid item xs={12} md={1}>
          <Divider orientation="vertical" flexItem sx={{ backgroundColor: 'blue' }} />
        </Grid>
  
        {/* Right side */}
        <Grid item xs={12} md={5}>
          <Box p={2}>
            {/* Content for the right side */}
            <h2>Currently Approved Projects</h2>
            {/* <OrderManagementComponent /> */}
          </Box>
        </Grid>
      </Grid>
    );
}

export default Farmer