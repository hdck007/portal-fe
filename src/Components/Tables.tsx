/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const beautifulLabels: any = {
  rollno: 'Roll No',
  first_name: 'First Name',
  last_name: 'Last Name',
  middle_name: 'Middle Name',
  email: 'Email',
  phone_number: 'Phone Number',
  gender: 'Gender',
  github: 'Github',
  linkedin: 'Linkedin',
  no_of_offers: 'No of offers',
  department: 'Department',
  batch: 'Batch',
  rait_email: 'Rait Email',
};

export default function BasicTable({ data }: any) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Object.keys(data[0]).map((item) => (
              <TableCell>
                {beautifulLabels[item]}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any, index: number) => (
            <TableRow
              key={`${index}sdbjkfbsdkf`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {Object.keys(row).map((item, i) => (
                <TableCell
                  key={`${i}sahdjklhnasd`}
                >
                  {row[item]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
