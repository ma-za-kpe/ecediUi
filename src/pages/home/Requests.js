import React from 'react';
import RequestCard from './RequestCard';

const Requests = ({ crops }) => {
     // Check if fruits is undefined or not an array
  if (!crops || !Array.isArray(crops)) {
    return <div>No fruits to display</div>;
  }
  return (
    <div>
      {crops.map((crop, index) => {
        const cardProps = {
          key: index,
          title: `Interested in ${crop.cropName}`,
          subheader: `Added on ${crop.dateAdded}`,
          description: `Description: ${crop.description}`,
          musthave: `Crop Name: ${crop.cropName}\n Crop quantity: ${crop.quantity}\Delivery Location: ${crop.deliveryLocation}\n Delivery Timeframe: ${crop.deliveryTimeframe}\n`,
          more: `Quality: ${crop.qualityRequirements}\nDelivery Location: ${crop.deliveryLocation}`,
          // ... other props
        };

        return (
            <RequestCard {...cardProps} />
        );
      })}
    </div>
  );
};

// * Crop name 
// * Quantity 
// * Delivery location 
// * Delivery timeframe 

export default Requests;
