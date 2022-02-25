
import { CardContent, Typography } from "@mui/material"
import Card from "@mui/material/Card"
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

export default function Account(){
    return(

        <div className="accountpageContainer">
     <div className="accountContainer">
      
            <CardContent className="accountPage" >
                 <Typography className="Title">Login</Typography>
                 <div className="login">
                 <TextField id="outlined-basic" label="Email" variant="outlined" type="email"/>
                 <TextField id="outlined-basic" label="Password" variant="outlined" type="password"/>
                     <div className='btnAccount'>
                     <Button type="submit" variant="contained" fullWidth> Login </Button>
                     </div> 
                 </div>
             </CardContent>
        
        </div>
        </div>

  
  )
}