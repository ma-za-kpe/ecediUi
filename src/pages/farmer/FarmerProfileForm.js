import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
  Button,
} from '@mui/material';

const FarmerProfileComponent = ({ farmerData }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedFarmerProfile, setEditedFarmerProfile] = useState({ ...farmerData });

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    // Perform validation before saving
    // For simplicity, let's assume all fields are required in this example
    const isValid = Object.values(editedFarmerProfile).every(
      (section) =>
        !section ||
        (typeof section !== 'object'
          ? section.trim().length > 0
          : Object.values(section).every((field) => field.trim().length > 0))
    );

    if (isValid) {
      // Save the edited profile (you can perform API calls or other actions here)
      // For this example, we'll just log the edited profile to the console
      console.log('Edited Farmer Profile:', editedFarmerProfile);

      // Exit edit mode after saving
      setIsEditMode(false);
    } else {
      // Handle validation error (e.g., show an error message)
      alert('Please fill in all required fields.');
    }
  };

  const handleCancelClick = () => {
    // Reset the edited profile to the original profile
    setEditedFarmerProfile({ ...farmerData });

    // Exit edit mode without saving
    setIsEditMode(false);
  };

  const handleChange = (sectionKey, fieldKey, value) => {
    // Update the edited profile when a field is changed
    setEditedFarmerProfile((prevProfile) => ({
      ...prevProfile,
      [sectionKey]: {
        ...prevProfile[sectionKey],
        [fieldKey]: value,
      },
    }));
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Farmer Profile
          </Typography>
          <Divider />

          <Grid container spacing={2}>
            {/* Personal Information */}
            {Object.entries(editedFarmerProfile.personalInformation).map(([key, value]) => (
              <Grid item xs={12} md={6} key={key}>
                <TextField
                  label={key}
                  value={value}
                  fullWidth
                  disabled={!isEditMode}
                  onChange={(e) => handleChange('personalInformation', key, e.target.value)}
                />
              </Grid>
            ))}

            {/* Farm Information */}
            {Object.entries(editedFarmerProfile.farmInformation).map(([key, value]) => (
              <Grid item xs={12} key={key}>
                {key === 'crops' ? (
                  <div>
                    <Typography variant="subtitle1" component="div" marginTop={2} marginBottom={1}>
                      {key}
                    </Typography>
                    {value.map((crop, index) => (
                      <div key={index}>
                        <Divider />
                        <Typography variant="subtitle2" component="div" marginTop={1} marginBottom={1}>
                          Crop {index + 1}
                        </Typography>
                        <Grid container spacing={2}>
                          {Object.entries(crop).map(([cropKey, cropValue]) => (
                            <Grid item xs={12} md={6} key={cropKey}>
                              <TextField
                                label={cropKey}
                                value={cropValue}
                                fullWidth
                                disabled={!isEditMode}
                                onChange={(e) =>
                                  handleChange('farmInformation', 'crops', [
                                    ...editedFarmerProfile.farmInformation.crops.slice(0, index),
                                    {
                                      ...crop,
                                      [cropKey]: e.target.value,
                                    },
                                    ...editedFarmerProfile.farmInformation.crops.slice(index + 1),
                                  ])
                                }
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </div>
                    ))}
                  </div>
                ) : (
                  <TextField
                    label={key}
                    value={value}
                    fullWidth
                    disabled={!isEditMode}
                    onChange={(e) => handleChange('farmInformation', key, e.target.value)}
                  />
                )}
              </Grid>
            ))}

            {/* Financial Information */}
            {Object.entries(editedFarmerProfile.financialInformation).map(([key, value]) => (
              <Grid item xs={12} md={6} key={key}>
                {key === 'outstandingLoans' ? (
                  <div>
                    <Typography variant="subtitle1" component="div" marginTop={2} marginBottom={1}>
                      {key}
                    </Typography>
                    {value.map((loan, index) => (
                      <div key={index}>
                        <Divider />
                        <Typography variant="subtitle2" component="div" marginTop={1} marginBottom={1}>
                          Loan {index + 1}
                        </Typography>
                        <Grid container spacing={2}>
                          {Object.entries(loan).map(([loanKey, loanValue]) => (
                            <Grid item xs={12} md={6} key={loanKey}>
                              <TextField
                                label={loanKey}
                                value={loanValue}
                                fullWidth
                                disabled={!isEditMode}
                                onChange={(e) =>
                                  handleChange('financialInformation', 'outstandingLoans', [
                                    ...editedFarmerProfile.financialInformation.outstandingLoans.slice(0, index),
                                    {
                                      ...loan,
                                      [loanKey]: e.target.value,
                                    },
                                    ...editedFarmerProfile.financialInformation.outstandingLoans.slice(index + 1),
                                  ])
                                }
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </div>
                    ))}
                  </div>
                ) : (
                  <TextField
                    label={key}
                    value={value}
                    fullWidth
                    disabled={!isEditMode}
                    onChange={(e) => handleChange('financialInformation', key, e.target.value)}
                  />
                )}
              </Grid>
            ))}
          </Grid>

          {/* Toggle Edit/Save Buttons */}
          {isEditMode ? (
            <Grid container spacing={2} marginTop={2}>
              <Grid item>
                <Button variant="outlined" color="primary" onClick={handleSaveClick}>
                  Save
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" onClick={handleCancelClick}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2} marginTop={2}>
              <Grid item>
                <Button variant="outlined" color="primary" onClick={handleEditClick}>
                  Edit
                </Button>
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default FarmerProfileComponent;


// import React from 'react';
// import { TextField, Typography, Container, Grid, Card, CardContent, Divider } from '@mui/material';

// const FarmerProfileComponent = ({ farmerData }) => {
//   const { personalInformation, farmInformation, financialInformation } = farmerData;

//   return (
//     <Container>
//       <Card>
//         <CardContent>
//           <Typography variant="h5" component="div" gutterBottom>
//             Farmer Profile
//           </Typography>
//           <Divider />

//           {/* Personal Information */}
//           <Typography variant="h6" component="div" marginTop={2} marginBottom={1}>
//             Personal Information
//           </Typography>
//           <Grid container spacing={2}>
//             {Object.entries(personalInformation).map(([key, value]) => (
//               <Grid item xs={12} md={6} key={key}>
//                 <TextField label={key} value={value} fullWidth disabled />
//               </Grid>
//             ))}
//           </Grid>

//           {/* Farm Information */}
//           <Typography variant="h6" component="div" marginTop={2} marginBottom={1}>
//             Farm Information
//           </Typography>
//           <Grid container spacing={2}>
//             {Object.entries(farmInformation).map(([key, value]) => (
//               <Grid item xs={12} key={key}>
//                 {key === 'crops' ? (
//                   <div>
//                     <Typography variant="subtitle1" component="div" marginTop={2} marginBottom={1}>
//                       {key}
//                     </Typography>
//                     {value.map((crop, index) => (
//                       <div key={index}>
//                         <Divider />
//                         <Typography variant="subtitle2" component="div" marginTop={1} marginBottom={1}>
//                           Crop {index + 1}
//                         </Typography>
//                         <Grid container spacing={2}>
//                           {Object.entries(crop).map(([cropKey, cropValue]) => (
//                             <Grid item xs={12} md={6} key={cropKey}>
//                               <TextField label={cropKey} value={cropValue} fullWidth disabled />
//                             </Grid>
//                           ))}
//                         </Grid>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <TextField label={key} value={value} fullWidth disabled />
//                 )}
//               </Grid>
//             ))}
//           </Grid>

//           {/* Financial Information */}
//           <Typography variant="h6" component="div" marginTop={2} marginBottom={1}>
//             Financial Information
//           </Typography>
//           <Grid container spacing={2}>
//             {Object.entries(financialInformation).map(([key, value]) => (
//               <Grid item xs={12} md={6} key={key}>
//                 {key === 'outstandingLoans' ? (
//                   <div>
//                     <Typography variant="subtitle1" component="div" marginTop={2} marginBottom={1}>
//                       {key}
//                     </Typography>
//                     {value.map((loan, index) => (
//                       <div key={index}>
//                         <Divider />
//                         <Typography variant="subtitle2" component="div" marginTop={1} marginBottom={1}>
//                           Loan {index + 1}
//                         </Typography>
//                         <Grid container spacing={2}>
//                           {Object.entries(loan).map(([loanKey, loanValue]) => (
//                             <Grid item xs={12} md={6} key={loanKey}>
//                               <TextField label={loanKey} value={loanValue} fullWidth disabled />
//                             </Grid>
//                           ))}
//                         </Grid>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <TextField label={key} value={value} fullWidth disabled />
//                 )}
//               </Grid>
//             ))}
//           </Grid>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default FarmerProfileComponent;


// // import React, { useState } from 'react';
// // import TextField from '@mui/material/TextField';
// // import Button from '@mui/material/Button';
// // import Box from '@mui/material/Box';

// // const FarmerProfileForm = ({ farmerData }) => {
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [formData, setFormData] = useState(farmerData);

// //   const handleEditClick = () => {
// //     setIsEditing(true);
// //   };

// //   const handleSaveClick = () => {
// //     // Perform validation before saving
// //     if (!formData.personalInformation.firstName || !formData.personalInformation.lastName) {
// //       alert('First Name and Last Name are required fields.');
// //       return;
// //     }

// //     // Save the data (you can replace this with your actual save logic)
// //     console.log('Saving data:', formData);

// //     // Exit edit mode
// //     setIsEditing(false);
// //   };

// //   const handleInputChange = (field, value) => {
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       personalInformation: {
// //         ...prevData.personalInformation,
// //         [field]: value,
// //       },
// //     }));
// //   };
 
// //   return (
// //     <Box>
// //       <h2>Farmer Profile</h2>
// //       <form>
// //         <TextField
// //           label="First Name"
// //           fullWidth
// //           disabled={!isEditing}
// //           value={formData.personalInformation.firstName}
// //           onChange={(e) => handleInputChange('firstName', e.target.value)}
// //           sx={{ marginBottom: 2 }}
// //         />
// //         <TextField
// //           label="Last Name"
// //           fullWidth
// //           disabled={!isEditing}
// //           value={formData.personalInformation.lastName}
// //           onChange={(e) => handleInputChange('lastName', e.target.value)}
// //           sx={{ marginBottom: 2 }}
// //         />
// //         <TextField
// //           label="Date of Birth"
// //           fullWidth
// //           disabled={!isEditing}
// //           value={formData.personalInformation.dateOfBirth}
// //           onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
// //           sx={{ marginBottom: 2 }}
// //         />

// //       <TextField
// //           label="Gender"
// //           fullWidth
// //           disabled={!isEditing}
// //           value={formData.personalInformation.gender}
// //           onChange={(e) => handleInputChange('gender', e.target.value)}
// //           sx={{ marginBottom: 2 }}
// //         />

// //       <TextField
// //           label="Address"
// //           fullWidth
// //           disabled={!isEditing}
// //           value={formData.personalInformation.address}
// //           onChange={(e) => handleInputChange('address', e.target.value)}
// //           sx={{ marginBottom: 2 }}
// //         />

// //       <TextField
// //           label="Email"
// //           fullWidth
// //           disabled={!isEditing}
// //           value={formData.personalInformation.email}
// //           onChange={(e) => handleInputChange('email', e.target.value)}
// //           sx={{ marginBottom: 2 }}
// //         />

// //     <TextField
// //           label="Phone"
// //           fullWidth
// //           disabled={!isEditing}
// //           value={formData.personalInformation.phone}
// //           onChange={(e) => handleInputChange('phone', e.target.value)}
// //           sx={{ marginBottom: 2 }}
// //         />

// //     <TextField
// //           label="Farm Name"
// //           fullWidth
// //           disabled={!isEditing}
// //           value={formData.farmInformation.farmName}
// //           onChange={(e) => handleInputChange('farmName', e.target.value)}
// //           sx={{ marginBottom: 2 }}
// //         />

// //     <TextField
// //           label="Farm Location"
// //           fullWidth
// //           disabled={!isEditing}
// //           value={formData.farmInformation.farmLocation}
// //           onChange={(e) => handleInputChange('farmLocation', e.target.value)}
// //           sx={{ marginBottom: 2 }}
// //         />

// //     <TextField
// //           label="Farm Size"
// //           fullWidth
// //           disabled={!isEditing}
// //           value={formData.farmInformation.farmSize}
// //           onChange={(e) => handleInputChange('farmSize', e.target.value)}
// //           sx={{ marginBottom: 2 }}
// //         />

// //     {/* <TextField
// //           label="Crop Name"
// //           fullWidth
// //           disabled={!isEditing}
// //           value={formData.crops[0].cropName}
// //           onChange={(e) => handleInputChange('cropName', e.target.value)}
// //           sx={{ marginBottom: 2 }}
// //         /> */}

// //         {isEditing ? (
// //           <Button variant="contained" onClick={handleSaveClick}>
// //             Save
// //           </Button>
// //         ) : (
// //           <Button variant="contained" onClick={handleEditClick}>
// //             Edit
// //           </Button>
// //         )}
// //       </form>
// //     </Box>
// //   );
// // };

// // export default FarmerProfileForm;
