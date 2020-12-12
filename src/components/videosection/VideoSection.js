import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import  Setting from '../videosection/Setting';
import  AddVideo from '../videosection/AddVideo';
import  GreenOnline  from '../videosection/GreenOnline';
import  UploadSection from '../videosection/UploadSection';


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

 const VideoSection=() =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="flex-end" spacing={10}>
       
        <Grid item xs={2}>
          <GreenOnline/>
        </Grid>
       
        <Grid item xs={2}>
           < Setting/>
        </Grid>
      
        <Grid item xs={2}>
            <AddVideo />
        </Grid>
        <Grid item xs={4}>
            <UploadSection />
        </Grid>
        
      </Grid>
    </div>
  );
}
export default VideoSection;