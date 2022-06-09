/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Accordion, AccordionDetails, AccordionSummary, styled, TextField, Typography,
} from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IDegreeDetails } from '../../../Interfaces/StudentDetails';

interface IDegreeFormProps{
  index: number;
  details: IDegreeDetails;
  field: string;
  handleChange: (
    event: any, value: string, field: string, index: number
    ) => void
}

const RowWrapper = styled('div')(({ theme }) => ({
  width: '60%',
  padding: '2px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
}));

function DegreeForm({
  index,
  details,
  field,
  handleChange,
}: IDegreeFormProps) {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  return (
    <div>
      <Accordion
        expanded={expanded}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setExpanded((prev) => !prev)}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            fontSize={18}
            sx={{ width: '33%', flexShrink: 0 }}
          >
            Sem
            {' '}
            {details.semester}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RowWrapper>
            <Typography
              width="50%"
            >
              Completion Month:
            </Typography>
            <TextField
              onChange={(e) => handleChange(e, 'completionMonth', field, index)}
              variant="standard"
              style={{
                width: '50%',
              }}
              value={details.completionMonth}
            />
          </RowWrapper>
          <RowWrapper>
            <Typography
              width="50%"
            >
              Completion Year:
            </Typography>
            <TextField
              onChange={(e) => handleChange(e, 'completionYear', field, index)}
              variant="standard"
              style={{
                width: '50%',
              }}
              value={details.completionYear}
            />
          </RowWrapper>
          <RowWrapper>
            <Typography
              width="50%"
            >
              Marks Obtained:
            </Typography>
            <TextField
              onChange={(e) => handleChange(e, 'marks', field, index)}
              variant="standard"
              style={{
                width: '50%',
              }}
              value={details.marks}
            />
          </RowWrapper>
          <RowWrapper>
            <Typography
              width="50%"
            >
              Total Marks:
            </Typography>
            <TextField
              onChange={(e) => handleChange(e, 'totalMarks', field, index)}
              variant="standard"
              style={{
                width: '50%',
              }}
              value={details.totalMarks}
            />
          </RowWrapper>
          <RowWrapper>
            <Typography
              width="50%"
            >
              CGPA:
            </Typography>
            <TextField
              onChange={(e) => handleChange(e, 'cgpa', field, index)}
              variant="standard"
              style={{
                width: '50%',
              }}
              value={details.cgpa}
            />
          </RowWrapper>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default DegreeForm;
