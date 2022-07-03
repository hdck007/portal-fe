/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CircularProgress,
  Pagination,
  TextField,
  Typography,
} from '@mui/material';
import Layout from '../Components/Layout/Layout';
import BasicTable from '../Components/Tables';
import { filterQueryObject } from '../Utils/helpers/filterQueryObject';
import {
  downloadCsvForGivenData,
  downloadExcelForGivenData, getDashboarData,
} from '../APIcalls/dashboardApis';
import {
  beautifulLabels,
  selectionObject,
} from '../Utils/helpers/constants/dashboardConstants';

export default function Dashboard() {
  const [queryFields, setQueryFields] = useState<any>({});
  const [requiredFields, setRequiredFields] = useState<any>({});
  const [receivedData, setReceivedData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setQueryFields(selectionObject);
    setRequiredFields({
      ...selectionObject,
      roll_no: true,
      first_name: true,
      last_name: true,
    });
  }, []);

  const handleChange = (event: any) => {
    setQueryFields({
      ...queryFields,
      [event.target.name]: event.target.value,
    });
  };

  const handleToggle = (item: string) => {
    setRequiredFields({
      ...requiredFields,
      [item]: !requiredFields[item],
    });
  };

  const handleNext = () => {
    const queryBody = filterQueryObject(queryFields, requiredFields);
    setLoading(true);
    getDashboarData(queryBody, page + 1)
      .then((data) => {
        setReceivedData(data?.results.students);
        if (data.results.next < page) {
          setIsNextDisabled(true);
        } else {
          setPage((prev) => prev + 1);
          setIsNextDisabled(false);
        }
        setLoading(false);
      });
  };

  const handlePrevious = () => {
    const queryBody = filterQueryObject(queryFields, requiredFields);
    setLoading(true);
    getDashboarData(queryBody, page - 1)
      .then((data) => {
        setReceivedData(data?.results.students);
        setLoading(false);
        setPage((prev) => prev - 1);
      });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const queryBody = filterQueryObject(queryFields, requiredFields);
    setLoading(true);
    getDashboarData(queryBody, page)
      .then((data) => {
        setReceivedData(data?.results.students);
        setLoading(false);
      });
  };

  const handleDownload = () => {
    downloadExcelForGivenData(receivedData);
  };

  const handleDownloadCSV = () => {
    downloadCsvForGivenData(receivedData);
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
      >
        <Card
          style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: 'white',
            borderRadius: '10px',
          }}
        >
          <h3>Select the fields for the data.</h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {Object.keys(selectionObject).map((item, index) => (
              <div
                style={{
                  display: 'flex',
                  marginBottom: '3rem',
                }}
              >
                <Typography
                  textAlign="center"
                  style={{
                    position: 'relative',
                    top: '0.5rem',
                    borderRadius: '15rem',
                    background: requiredFields[item]
                      ? 'rgba(159, 28, 53, 0.8)' : '#ccc',
                    color: requiredFields[item] ? '#fff' : '#777',
                    padding: '5px 10px',
                    marginRight: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                  }}
                  onClick={() => handleToggle(item)}
                >
                  {beautifulLabels[item]}
                </Typography>
              </div>
            ))}
          </div>
        </Card>
        <Card
          style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: 'white',
            marginTop: '1rem',
            borderRadius: '10px',
          }}
        >
          <h3>Filter the data through below fields.</h3>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {Object.keys(selectionObject).map((item, index) => (
              <div
                style={{
                  display: 'flex',
                  width: '200px',
                  margin: '0.3rem',
                }}
              >
                <TextField
                  label={beautifulLabels[item]}
                  name={item}
                  onChange={handleChange}
                />
              </div>
            ))}
          </div>
        </Card>
        <Button
          type="submit"
          variant="contained"
          style={{
            marginBottom: '1rem',
            marginTop: '1rem',
            background: 'rgba(159, 28, 53, 1)',
          }}
        >
          Get Data
        </Button>
      </form>
      {loading && (
        <CircularProgress
          style={{
            position: 'relative',
            bottom: '1rem',
            left: '50%',
          }}
        />
      )}
      {
        receivedData.length > 0 && (
          <>
            <br />
            <Button
              style={{
                background: 'rgba(159, 28, 53, 1)',
              }}
              variant="contained"
              disabled={page === 1}
              onClick={handlePrevious}
            >
              {'<'}
            </Button>
            &nbsp;&nbsp;
            <Button
              variant="contained"
              disabled={isNextDisabled}
              onClick={handleNext}
              style={{
                background: 'rgba(159, 28, 53, 1)',
              }}
            >
              {'>'}
            </Button>
            <br />
            <br />
            <BasicTable
              data={receivedData}
            />
            <Button
              style={{
                marginTop: '1rem',
                background: 'rgba(159, 28, 53, 1)',
              }}
              variant="contained"
              onClick={handleDownload}
            >
              download Excel
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
              style={{
                marginTop: '1rem',
                background: 'rgba(159, 28, 53, 1)',
              }}
              variant="contained"
              onClick={handleDownloadCSV}
            >
              download CSV
            </Button>
          </>
        )
}
    </Layout>
  );
}
