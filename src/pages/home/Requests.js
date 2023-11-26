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
          more: `More: ${crop.quantity}\nQuality: ${crop.qualityRequirements}\nDelivery Location: ${crop.deliveryLocation}`,
          // ... other props
        };

        return (
            <RequestCard {...cardProps} />
        );
      })}
    </div>
  );
};

export default Requests;
