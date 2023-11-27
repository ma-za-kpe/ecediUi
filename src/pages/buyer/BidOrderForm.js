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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePlaceBidClick = () => {
    // You can perform additional validation or checks before calling handlePlaceBid
    handlePlaceBid(formData);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Place Bid Order</DialogTitle>
      <DialogContent>
        {/* Add TextField components for each form field */}
        <TextField label="Crop Name" fullWidth margin="normal" />
        <TextField label="Quantity" fullWidth margin="normal" />
        <TextField label="Quality Requirements" fullWidth margin="normal" />
        <TextField label="Delivery Location" fullWidth margin="normal" />
        <TextField label="Delivery Timeframe" fullWidth margin="normal" />
        <TextField label="Description" fullWidth multiline rows={3} margin="normal" />
        <TextField label="Packaging Preferences" fullWidth margin="normal" />
        <TextField label="Certifications" fullWidth margin="normal" />
        <TextField label="Contact Email" fullWidth margin="normal" />
        <TextField label="Contact Phone" fullWidth margin="normal" />
        <TextField label="Negotiation Price" fullWidth margin="normal" />
        <TextField label="Payment Terms" fullWidth margin="normal" />
        <TextField label="Additional Requirements" fullWidth multiline rows={3} margin="normal" />
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
