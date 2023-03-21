import React, {useState} from 'react'
import { CircularProgress } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './nutritiondisplay.css'

export default function NutritionDisplay({userData, remain, consumed, protein, carb, fat}) {
    
  
    
    const theme = createTheme({
        palette: {
          primary: {
            // Purple and green play nicely together.
            main: '#a4fba6',
          },
          secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
          },
        },
      });
  return (
    <div>
        <div className="target-cal">
            <div className="nutrition-display">
              <div className="consumed">
                <h3>{consumed}</h3>
                <h4>Consumed</h4>
              </div>
              <ThemeProvider theme={theme}>
                {/* <h5>{Math.round(userData.dailyCal.maintain_cal * 100 / 100)}</h5> */}
                <CircularProgress className="progress-circle" color='primary' size='12rem' thickness={7} variant="determinate" value={(consumed/userData.dailyCal.maintain_cal)*100}/>
              </ThemeProvider>
              <div className="remaining">
                <h3>{remain}</h3>
                <h4>Remaining</h4>
              </div>
            </div>
            <div className="nutrition-detail">
              <div className="protein">
                <div className="data">{protein} g</div>
                <div className="label">Protein(s)</div>
              </div>
              <div className="carb">
                <div className="data">{carb} g</div>
                <div className="label">Carb(s)</div>
              </div>
              <div className="fat">
                <div className="data">{fat} g</div>
                <div className="label">Fat(s)</div>
              </div>
            </div>
            
        </div>
    </div>
  )
}
