import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

function EditOpportunityForm(props) {
  const [opportunity, setOpportunity] = useState(props.currentOpportunity);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOpportunity({ ...opportunity, [name]: value });
  };

  useEffect(() => {
    setOpportunity(props.currentOpportunity);
  }, [props]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // if (!opportunity.name || !opportunity.account || !opportunity.location)
        //   return;
        props.updateOpportunity(opportunity.id, opportunity);
      }}
    >
      <TextField
        type='text'
        id='name'
        name='name'
        label='Name'
        variant='outlined'
        margin='normal'
        value={opportunity.name}
        onChange={handleInputChange}
      />
      <TextField
        type='text'
        id='account'
        name='account'
        label='Account'
        variant='outlined'
        margin='normal'
        value={opportunity.account}
        onChange={handleInputChange}
      />
      <TextField
        type='text'
        id='location'
        name='location'
        label='Location'
        variant='outlined'
        margin='normal'
        value={opportunity.location}
        onChange={handleInputChange}
      />
      <Box mt={2}>
        <Grid
          container
          direction='row'
          justify='flex-start'
          spacing={4}
          mt={10}
        >
          <Grid item>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              size='large'
            >
              Update
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='outlined'
              color='default'
              size='large'
              onClick={() => props.setEditing(false)}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}

export default EditOpportunityForm;
