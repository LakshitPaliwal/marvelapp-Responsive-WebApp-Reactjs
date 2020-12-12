import React from 'react';
import Button from '@material-ui/core/Button';
 const  UploadSection=()=> {
  return (
    <div>
       
         
    <Button
      variant="outlined"
      component="label"
    >
      Upload Video
      <input
        type="file"
        hidden
      />
    </Button>
        
    </div>
  );
}
export default UploadSection;