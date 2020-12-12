import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
 const  DateRange=()=> {
  return (
    <div>
     <FormControl variant="outlined">
        <InputLabel shrink  htmlFor="outlined-age-native-simple">
          Date Range
        </InputLabel>
        <NativeSelect
          inputProps={{
            name: 'Date Range',
          }}
        >
          <option value="">select</option>
          <option value={10}>Today </option>
          <option value={20}>Yesterday</option>
          <option value={30}>Tomorrow</option>
        </NativeSelect>
      </FormControl>     
    </div>
  );
}
export default DateRange;