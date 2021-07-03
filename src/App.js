import React, { useState } from 'react';
import OpportunityTable from './components/OpportunityTable';
import AddOpportunity from './components/AddOpportunity';
import EditOpportunityForm from './components/EditOpportunityForm';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  function createData(id, name, account, location) {
    return { id, name, account, location };
  }

  const data = [
    createData(1, 'Valero Expansion Project', 'Valero', 'Port Arthur, TX'),
    createData(2, 'Blade Turnaround', 'Exxon Mobil', 'Beaumont, TX'),
    createData(3, 'Summer 2021 Turnaround', 'Flint Hills', 'Port Arthur, TX'),
  ];

  //add (create)
  const [opportunities, setOpportunity] = useState(data);

  const addOpportunity = (opportunity) => {
    opportunity.id = opportunities.length + 1;
    setOpportunity([...opportunities, opportunity]);
  };

  //delete
  const deleteOpportunity = (id) => {
    setEditing(false);
    setOpportunity(
      opportunities.filter((opportunity) => opportunity.id !== id)
    );
  };

  //edit (update)
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: '', username: '' };
  const [currentOpportunity, setCurrentOpportunity] =
    useState(initialFormState);

  const editRow = (opportunity) => {
    setEditing(true);
    setCurrentOpportunity({
      id: opportunity.id,
      name: opportunity.name,
      account: opportunity.account,
      location: opportunity.location,
    });
  };

  const updateOpportunity = (id, updateOpportunity) => {
    setEditing(false);
    setOpportunity(
      opportunities.map((opp) => (opp.id === id ? updateOpportunity : opp))
    );
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            React Hooks Opportunity CRUD
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth='xl'>
        <h1>Opportunities</h1>
        <Grid container direction='row' justify='flex-start' spacing={4}>
          <Grid item xs={12} md={8}>
            <h2>List</h2>
            <OpportunityTable
              opportunities={opportunities}
              editRow={editRow}
              deleteOpportunity={deleteOpportunity}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            {editing ? (
              <>
                <h2>Edit</h2>
                <EditOpportunityForm
                  setEditing={setEditing}
                  currentOpportunity={currentOpportunity}
                  updateOpportunity={updateOpportunity}
                />
              </>
            ) : (
              <>
                <h2>Add</h2>
                <AddOpportunity addOpportunity={addOpportunity} />
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
