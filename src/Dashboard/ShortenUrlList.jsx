import React from 'react'
import ShortenItem from './ShortenItem'
const ShortenUrlList = ({ data }) => {
  if (!Array.isArray(data)) {
    return <p>Loading...</p>; // or return null, spinner, skeleton, etc.
  }
  console.log(data);

  return (
    <div className='my-6 space-y-4'>
      {data.length === 0 ? (
        <p>No shortened URLs yet.</p>
      ) : (
        data.map((item) => (

          <ShortenItem key={item.id} 
          
          {...item} />
          
        ))
        
      )}
    </div>
  );
};


export default ShortenUrlList