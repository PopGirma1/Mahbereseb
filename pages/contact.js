import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import { useState } from 'react';

export default function Contact(){

    const [country, setcountry] = useState('');
    const [state, setState] =useState("");

    const handleChangeState=(event)=>{
        setState(event.target.value)
    }

    const handleChangeContry = (event) => {
      setcountry(event.target.value);
    };

    return(
        <Card
        component="form"
        noValidate
        autoComplete="on"
        className='contactContainer'
      >
            <div className='contactElements'>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Email" variant="outlined" type="email"/>
                    <div className='contactArea'>
                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" type="number"   
                    onInput = {(e) =>{
                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
                    }}
                    />
                    
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Country Area</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    label="Country"
                    onChange={handleChangeContry}
                    >
                    <MenuItem value={10}>Ethiopia</MenuItem>
                    <MenuItem value={20}>Germany</MenuItem>
                    <MenuItem value={30}>America</MenuItem>
                    </Select>
                    </FormControl>


                    </div>

                    <TextField id="outlined-basic" label="Address" variant="outlined" />
                    <TextField id="outlined-basic" label="City" variant="outlined" type="email"/>
                    <div className='contactArea'>
                   
                    
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    label="State"
                    onChange={handleChangeState}
                    >
                    <MenuItem value={10}>Tigray</MenuItem>
                    <MenuItem value={20}>Oromo</MenuItem>
                    <MenuItem value={30}>Amhara</MenuItem>
                    </Select>
                    </FormControl>
                    <TextField id="outlined-basic" label="Zip" variant="outlined" type="number"   
                    onInput = {(e) =>{
                        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,5)
                    }}
                    />
                    </div>
                     <div className='btnSubmit'>
                     <Button type="submit" variant="contained" > Send Contact </Button>
                     </div>   
            </div>
      </Card>
    )
}