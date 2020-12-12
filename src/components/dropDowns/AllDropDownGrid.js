import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import  Filter from '../dropDowns/Filter';
import  DateRange from '../dropDowns/DateRange';
import RefreshAll from '../dropDowns/RefreshAll';
import Schedule from '../dropDowns/Schedule';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
 const AllDropDownGrid=() =>{
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Filter/>
        </Grid>
        <Grid item xs={4}>
            <DateRange/>
        </Grid>
        <Grid item xs={2}>
            <RefreshAll />
        </Grid>
        <Grid item xs={2}>
            <Schedule />
        </Grid>
      </Grid>
    </div>
  );
}
export default AllDropDownGrid;