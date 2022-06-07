/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Button,
  FormControl, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import React from 'react';
// @ts-ignore
import { CKEditor } from '@ckeditor/ckeditor5-react';
// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Cookies from 'universal-cookie';
import Layout from '../Components/Layout/Layout';

export default function Notice() {
  const [batch, setBatch] = React.useState<number | null | undefined>(null);
  const [branch, setBranch] = React.useState('');
  const [offers, setOffers] = React.useState(null);
  const [liveKt, setLiveKt] = React.useState(null);
  const [deadKt, setDeadKt] = React.useState(null);
  const [xPercentage, setXPercentage] = React.useState(null);
  const [xiiPercentage, setXIIPercentage] = React.useState(null);
  const [bePercentage, setBePercentage] = React.useState(null);
  const [beCgpa, setBeCgpa] = React.useState(null);
  const [notice, setNotice] = React.useState('');
  const [gap, setGap] = React.useState(null);
  const [lpa, setLpa] = React.useState(null);
  const cookies = new Cookies();

  const handleBatchChange = (event: any) => {
    setBatch(event.target.value);
  };

  const handleBranchChange = (event: any) => {
    setBranch(event.target.value);
  };

  const handleOffersChange = (event: any) => {
    setOffers(event.target.value);
  };

  const handleLiveKtChange = (event: any) => {
    setLiveKt(event.target.value);
  };

  const handleDeadKtChange = (event: any) => {
    setDeadKt(event.target.value);
  };

  const handleXPercentageChange = (event: any) => {
    if (event.target.value <= 100) {
      setXPercentage(event.target.value);
    } else {
      event.preventDefault();
    }
  };

  const handleXIIPercentageChange = (event: any) => {
    if (event.target.value <= 100) {
      setXIIPercentage(event.target.value);
    } else {
      event.preventDefault();
    }
  };

  const handleBePercentageChange = (event: any) => {
    if (event.target.value <= 100) {
      setBePercentage(event.target.value);
    } else {
      event.preventDefault();
    }
  };

  const handleBeCgpaChange = (event: any) => {
    if (event.target.value <= 10) {
      setBeCgpa(event.target.value);
    } else {
      event.preventDefault();
    }
  };

  const handleNoticeChange = (data: any) => {
    setNotice(data);
  };

  const handleGapChange = (event: any) => {
    setGap(event.target.value);
  };

  const handleLpaChange = (event: any) => {
    setLpa(event.target.value);
  };

  const handleSend = () => {
    const data = new FormData();
    data.append('email', 'cool@cool.com');
    // @ts-ignore
    data.append('batch', batch.toString());
    // @ts-ignore
    data.append('branch', branch);
    // @ts-ignore
    data.append('offers', offers);
    // @ts-ignore
    data.append('live_kt', liveKt);
    // @ts-ignore
    data.append('dead_kt', deadKt);
    // @ts-ignore
    data.append('tenth_percent', xPercentage.toString());
    // @ts-ignore
    data.append('twelveth_percent', xiiPercentage.toString());
    // @ts-ignore
    data.append('be_percent', bePercentage.toString());
    // @ts-ignore
    data.append('cgpa', beCgpa.toString());
    // @ts-ignore
    data.append('notice', notice);
    data.append('valid_till', '2020-01-01');
    // @ts-ignore
    data.append('package', lpa.toString());
    // @ts-ignore
    data.append('gap', gap.toString());
    const access = cookies.get('access');
    const refresh = cookies.get('refresh');
    fetch('https://django-tpc.herokuapp.com/company/addJobOpening/', {
      method: 'POST',
      body: data,
      headers: {
        Authorization: `Bearer ${access}`,
      },
    }).then((response) => {
      if (response.status === 200) {
        alert('Job Opening Added Successfully');
      }
    });
  };

  return (
    <Layout>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            width: '600px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Batch</InputLabel>
                <Select
                  style={{
                    width: '250px',
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={batch}
                  label="Age"
                  onChange={handleBatchChange}
                >
                  <MenuItem value={2023}>2023</MenuItem>
                  <MenuItem value={2022}>2022</MenuItem>
                  <MenuItem value={2021}>2021</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel id="branch-select">Branch</InputLabel>
                <Select
                  style={{
                    width: '250px',
                  }}
                  labelId="branch-select"
                  id="branch"
                  value={branch}
                  label="Branch"
                  onChange={handleBranchChange}
                >
                  <MenuItem value="CE">CE</MenuItem>
                  <MenuItem value="IT">IT</MenuItem>
                  <MenuItem value="EXTC">EXTC</MenuItem>
                  <MenuItem value="ET">ET</MenuItem>
                  <MenuItem value="INST">INST</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <TextField
                  style={{
                    width: '250px',
                  }}
                  type="number"
                  id="gap"
                  label="Gap"
                  value={gap}
                  onChange={handleGapChange}
                />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <TextField
                  style={{
                    width: '250px',
                  }}
                  type="number"
                  id="lpa"
                  label="Package"
                  value={lpa}
                  onChange={handleLpaChange}
                />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <TextField
                  style={{
                    width: '250px',
                  }}
                  type="number"
                  id="offers"
                  label="Offers"
                  value={offers}
                  onChange={handleOffersChange}
                />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <TextField
                  style={{
                    width: '250px',
                  }}
                  type="number"
                  id="live-kt"
                  label="Live KT"
                  value={liveKt}
                  onChange={handleLiveKtChange}
                />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <TextField
                  style={{
                    width: '250px',
                  }}
                  type="number"
                  id="dead-kt"
                  label="Dead KT"
                  value={deadKt}
                  onChange={handleDeadKtChange}
                />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <TextField
                  style={{
                    width: '250px',
                  }}
                  type="number"
                  id="x-percentage"
                  label="X Percentage"
                  value={xPercentage}
                  onChange={handleXPercentageChange}
                />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <TextField
                  style={{
                    width: '250px',
                  }}
                  type="number"
                  id="xii-percentage"
                  label="XII Percentage"
                  value={xiiPercentage}
                  onChange={handleXIIPercentageChange}
                />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <TextField
                  style={{
                    width: '250px',
                  }}
                  type="number"
                  id="be-percentage"
                  label="BE Percentage"
                  value={bePercentage}
                  onChange={handleBePercentageChange}
                />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <TextField
                  style={{
                    width: '250px',
                  }}
                  type="number"
                  id="be-cgpa"
                  label="BE CGPA"
                  value={beCgpa}
                  onChange={handleBeCgpaChange}
                />
              </FormControl>
            </div>
            <div
              style={{
                width: '250px',
                height: '50px',
              }}
            />
          </div>
        </div>
        <div
          style={{
            width: '600px',
            height: '500px',
          }}
        >
          <CKEditor
            editor={ClassicEditor}
            data={notice}
            placeholder="Enter notice here"
          // @ts-ignore
            onChange={(event, editor) => {
              const data = editor.getData();
              handleNoticeChange(data);
            }}
          />
        </div>
      </div>
      <Button
        variant="contained"
        style={{
          marginLeft: '25px',
          backgroundColor: 'rgba(159, 28, 53, 1)',
        }}
        onClick={handleSend}
        disabled={!(batch
          && branch
          && offers
          && liveKt
          && deadKt
          && xPercentage
          && xiiPercentage
          && bePercentage && beCgpa && !!notice)}
      >
        Send Notification
      </Button>
    </Layout>
  );
}
