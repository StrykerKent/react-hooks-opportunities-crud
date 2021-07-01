import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './OpportunityTableStyle.css'

function createData(name, account, location) {
  return { name, account, location };
}

const rows = [
  createData('Valero Expansion Project', 'Valero', 'Port Arthur, TX'),
  createData('Blade Turnaround', 'Valero', 'Port Arthur, TX'),
  createData('Blade Turnaround', 'Valero', 'Port Arthur, TX'),
];

const OpportunityTable = () => (
  // <table>
  //   <tr>
  //     <th>
  //       Name
  //     </th>
  //     <th>
  //       Account
  //     </th>
  //     <th>
  //       Location
  //     </th>
  //   </tr>
  //   <tr>
  //     <td>
  //       Valero Paint Tanks
  //     </td>
  //     <td>
  //       Valero Paint Tanks
  //     </td>
  //     <td>
  //       Valero Paint Tanks
  //     </td>
  //   </tr>
  // </table>
  <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Account</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.account}</TableCell>
              <TableCell>{row.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
)

export default OpportunityTable