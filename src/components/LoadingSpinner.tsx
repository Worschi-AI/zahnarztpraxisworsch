
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-dental-turquoise"></div>
    </div>
  );
};

export default LoadingSpinner;
