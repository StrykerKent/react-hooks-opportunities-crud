import React, { useState } from 'react';
import './AddOpportunityStyle.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const AddOpportunity = (props) => {
  const initialFormState = { id: null, name: '', account: '', location: '' };
  const [opportunity, setOpportunity] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOpportunity({ ...opportunity, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!opportunity.name || !opportunity.account || !opportunity.location)
          return;
        props.addOpportunity(opportunity);
        setOpportunity(initialFormState);
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
      <Button
        type='submit'
        variant='contained'
        color='primary'
        size='large'
        mt={2}
      >
        Add
      </Button>
    </form>
  );
};

export default AddOpportunity;
