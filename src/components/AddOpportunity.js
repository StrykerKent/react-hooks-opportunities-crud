import React from 'react'
import './AddOpportunityStyle.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const AddOpportunity = () => (
  <form>  
    <TextField id="name" label="Name" variant="outlined" margin="normal" />
    <TextField id="account" label="Account" variant="outlined" margin="normal" />
    <TextField id="location" label="Location" variant="outlined" margin="normal" />
    <Button variant="contained" color="primary" size="large" mt={2}>Add</Button>
  </form>
)

export default AddOpportunity