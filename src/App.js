import React from 'react'
import OpportunityTable from './components/OpportunityTable'
import AddOpportunity from './components/AddOpportunity'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

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
}))



function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" className={classes.title}>
            React Hooks Opportunity CRUD
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl">
        <h1>Opportunities</h1>
        <Grid
          container
          direction="row"
          justify="flex-start"
          spacing={10}
        >
          <Grid item xs={12} md={8}>
            <OpportunityTable />

          </Grid>
          <Grid item xs={12} md={4}>
            <AddOpportunity />
          </Grid>
        </Grid>
      </Container>
      
    </div>
  )
}

export default App
