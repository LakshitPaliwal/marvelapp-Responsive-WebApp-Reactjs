import React from 'react';
import Button from '@material-ui/core/Button';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { green } from '@material-ui/core/colors';
const GreenOnline=()=>{
    return (
    <div>
         <Button  variant="outlined">
            < FiberManualRecordIcon style={{ color: green[500] }}/>
          </Button>
    </div>
  );
}
export default GreenOnline;