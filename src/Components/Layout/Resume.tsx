import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Pdylogo from './Pdylogo.png';

function Resume() {
  const useStyles = makeStyles({
    field: {
      width: '50%',
      color: 'maroon',
    },
    label:
    {
      width: '50%',
      paddingLeft: '10%',
    },
    flabel: {
      paddingLeft: '10%',
      marginBottom: '20px',
    },
    span: {
      rowSpan: 4,
      colSpan: 4,
    },
    logo: {
      position: 'absolute',
      right: '0',
    },
  });
  const classes = useStyles();
  const BoardsRowWrapper = styled('div')(() => ({
    width: '60%',
    padding: '2px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '35px',
  }));
  return (
    <div>
      <img className={classes.logo} alt="logo" src={Pdylogo} />
      <Typography variant="h6" className={classes.flabel}>Name:</Typography>
      <Typography variant="h6" className={classes.flabel}>Gender:</Typography>
      <Typography variant="h6" className={classes.flabel}>Email:</Typography>
      <Typography variant="h6" className={classes.flabel}>Mob:</Typography>
      <Typography variant="h6" className={classes.flabel}>LinkedIn</Typography>
      <Typography className={classes.flabel} variant="h5">Career Objective:</Typography>
      {/* <table>
        <tr>
          <th>B.E</th>
          <td> </td>
          <td>SEM 8</td>
          <td>SEM 7</td>
        </tr>
        <tr>
          <th>Department of RAIT</th>
        </tr>
        <tr>
          <th>T.E</th>
          <td> </td>
          <td>SEM 6</td>
          <td>SEM 5</td>
        </tr>
        <tr>
          <th>S.E</th>
          <td> </td>
          <td>SEM 4</td>
          <td>SEM 3</td>
        </tr>
        <tr>
          <th>F.E</th>
          <td> </td>
          <td>SEM 2</td>
          <td>SEM 1</td>
        </tr>
        <tr>
          <th>CLASS XII</th>
        </tr>
        <tr>
          <th>CLASS X</th>
        </tr>
      </table> */}
      <BoardsRowWrapper>
        <Typography variant="h5" className={classes.label}>Academic Achievements:</Typography>
        <TextField className={classes.field} variant="standard" />
      </BoardsRowWrapper>
      <BoardsRowWrapper>
        <Typography variant="h5" className={classes.label}>Certifications:</Typography>
        <ul>
          <li>one</li>
          <li>two</li>
        </ul>
      </BoardsRowWrapper>
      <BoardsRowWrapper>
        <Typography variant="h5" className={classes.label}>Projects:</Typography>
        <TextField className={classes.field} variant="standard" />
      </BoardsRowWrapper>
      <BoardsRowWrapper>
        <Typography variant="h5" className={classes.label}>Internships:</Typography>
        <ul>
          <li>one</li>
          <li>two</li>
        </ul>
      </BoardsRowWrapper>
      <BoardsRowWrapper>
        <Typography variant="h5" className={classes.label}>Extra Cirrular Achievements</Typography>
        <ul>
          <li>one</li>
          <li>two</li>
        </ul>
      </BoardsRowWrapper>
      <div>
        <Typography>Position of responsibility</Typography>
        <ul>
          <li>one</li>
          <li>two</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
