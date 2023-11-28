import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const FarmerProfileForm = ({ farmerData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(farmerData);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Perform validation before saving
    if (!formData.personalInformation.firstName || !formData.personalInformation.lastName) {
      alert('First Name and Last Name are required fields.');
      return;
    }

    // Save the data (you can replace this with your actual save logic)
    console.log('Saving data:', formData);

    // Exit edit mode
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      personalInformation: {
        ...prevData.personalInformation,
        [field]: value,
      },
    }));
  };

  return (
    <Box>
      <h2>Farmer Profile</h2>
      <form>
        <TextField
          label="First Name"
          fullWidth
          disabled={!isEditing}
          value={formData.personalInformation.firstName}
          onChange={(e) => handleInputChange('firstName', e.target.value)}
        />
        <TextField
          label="Last Name"
          fullWidth
          disabled={!isEditing}
          value={formData.personalInformation.lastName}
          onChange={(e) => handleInputChange('lastName', e.target.value)}
        />
        <TextField
          label="Date of Birth"
          fullWidth
          disabled={!isEditing}
          value={formData.personalInformation.dateOfBirth}
          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
        />
        {/* Add more fields as needed */}

        {isEditing ? (
          <Button variant="contained" onClick={handleSaveClick}>
            Save
          </Button>
        ) : (
          <Button variant="contained" onClick={handleEditClick}>
            Edit
          </Button>
        )}
      </form>
    </Box>
  );
};

export default FarmerProfileForm;
