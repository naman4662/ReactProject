import React, { useState } from 'react';
import './index.css'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const App = () => {
  const [numVal,setnumVal] = useState(0)

  const incrementData = () => {
    setnumVal(numVal+1)
  }

  const decrementData = () => {
    setnumVal(numVal - 1)
  }


  return (
    <>
      <div className="main-div">
        <div className="inside-main-div">
          <div className="numdiv">
            <span>{numVal}</span>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Button variant="contained" color="secondary" onClick={incrementData}>
                <AddCircleRoundedIcon />
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="secondary" onClick={decrementData}>
                <AddCircleRoundedIcon />
              </Button>
            </Grid>
            </Grid>
          </div>
      </div>
    </>
  )
  
}

export default App;
