import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';



 const  Filter=()=> {


  return (
    <div>
     <FormControl >
        <InputLabel shrink  htmlFor="outlined-age-native-simple">
          Filter
        </InputLabel>
        <NativeSelect
          inputProps={{
            name: 'Filter',
          }}
        >
          <option value="">select</option>
          <option value={10}>All Directions </option>
          <option value={20}>Recent Directions</option>
          <option value={30}>Random Directions</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
export default Filter;