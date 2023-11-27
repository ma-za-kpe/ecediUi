// BidOrderForm.js
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';

export default function BidOrderForm({ open, handleClose, handlePlaceBid }) {
  const [formData, setFormData] = useState({
    cropName: '',
    quantity: '',
    qualityRequirements: '',
    deliveryLocation: '',
    deliveryTimeframe: '',
    description: '',
    packagingPreferences: '',
    certifications: '',
    contactEmail: '',
    contactPhone: '',
    negotiationPrice: '',
    paymentTerms: '',
    additionalRequirements: '',
  });

  const [formErrors, setFormErrors] = useState({
    cropName: false,
    quantity: false,
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePlaceBidClick = () => {
    // Validate required fields
    const requiredFields = ['cropName', 'quantity', 'qualityRequirements', 
    'deliveryLocation', 'deliveryTimeframe', 'description', 'packagingPreferences', 'certifications', 'contactEmail', 'contactPhone', 'negotiationPrice',
    'paymentTerms', 
];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = true;
      } else {
        newErrors[field] = false;
      }
    });

    // If any required fields are empty, set errors and prevent submission
    if (Object.values(newErrors).some((error) => error)) {
      setFormErrors(newErrors);
    } else {
      // Submit the form if no errors
      handlePlaceBid(formData);
      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Place Bid Order</DialogTitle>
      <DialogContent>
        {/* Add TextField components for each form field */}
        <TextField
          label="Crop Name"
          fullWidth
          margin="normal"
          error={formErrors.cropName}
          helperText={formErrors.cropName && 'Crop Name is required'}
          onChange={handleChange}
          name="cropName"
        />
        <TextField
          label="Quantity"
          fullWidth
          margin="normal"
          error={formErrors.quantity}
          helperText={formErrors.quantity && 'Quantity is required'}
          onChange={handleChange}
          name="quantity"
        />
        {/* Repeat for other required fields */}
        
        {/* Optional Fields */}
        <TextField label="Description" fullWidth multiline rows={3} margin="normal" onChange={handleChange} 
        error={formErrors.description}
        helperText={formErrors.description && 'Description is required'}
        name="description" />
        <TextField label="Packaging Preferences" fullWidth margin="normal" onChange={handleChange}
        error={formErrors.packagingPreferences}
        helperText={formErrors.packagingPreferences && 'Packaging Preferences is required'}
        name="packagingPreferences" />
        <TextField label="Certifications" fullWidth margin="normal" onChange={handleChange}
         error={formErrors.certifications}
         helperText={formErrors.certifications && 'Certifications is required'}
          name="certifications" />
        <TextField label="Contact Email" fullWidth margin="normal" onChange={handleChange}
         error={formErrors.contactEmail}
         helperText={formErrors.contactEmail && 'Contact Email is required'}
         name="contactEmail" />
        <TextField label="Contact Phone" fullWidth margin="normal" onChange={handleChange} 
         error={formErrors.contactPhone}
         helperText={formErrors.contactPhone && 'Contact Phone is required'}
        name="contactPhone" />
        <TextField label="Negotiation Price" fullWidth margin="normal" onChange={handleChange}
        error={formErrors.negotiationPrice}
        helperText={formErrors.negotiationPrice && 'Negotiation Price is required'}
         name="negotiationPrice" />
        <TextField label="Payment Terms" fullWidth margin="normal" onChange={handleChange}
         error={formErrors.paymentTerms}
         helperText={formErrors.paymentTerms && 'Payment Terms is required'}
         name="paymentTerms" />
        <TextField label="Additional Requirements" fullWidth multiline rows={3} margin="normal" onChange={handleChange} name="additionalRequirements" />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handlePlaceBidClick} variant="contained">
          Place Bid
        </Button>
      </DialogActions>
    </Dialog>
  );
}
