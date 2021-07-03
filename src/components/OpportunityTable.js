import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './OpportunityTableStyle.css';

const OpportunityTable = (props) => (
  <TableContainer component={Paper}>
    <Table aria-label='table'>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Account</TableCell>
          <TableCell>Location</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.opportunities.map((opportunity) => (
          <TableRow key={opportunity.id}>
            <TableCell scope='row'>{opportunity.name}</TableCell>
            <TableCell>{opportunity.account}</TableCell>
            <TableCell>{opportunity.location}</TableCell>
            <TableCell>
              <Button
                type='submit'
                color='primary'
                size='large'
                mr={2}
                onClick={() => {
                  props.editRow(opportunity);
                }}
              >
                Edit
              </Button>
              <Button
                type='submit'
                color='secondary'
                size='large'
                onClick={() => props.deleteOpportunity(opportunity.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default OpportunityTable;
