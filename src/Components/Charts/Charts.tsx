import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import Layout from '../Layout/Layout';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Legend,
);

const options1 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Placed students branch wise',
    },
  },
};

const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Placed students company wise',
    },
  },
};

const labels = ['CE', 'EXTC', 'IT', 'ET'];

export const companyWise = {
  labels: ['TCS', 'Wipro', 'Infosys', 'Accenture'],
  datasets: [
    {
      label: 'Placed Students',
      data: [70, 100, 40, 40],
      backgroundColor: 'rgba(159, 28, 53, 0.9)',
    },
  ],
};

export default function Charts() {
  const [companyWiseData, setCompanyWiseData] = React.useState([]);
  const [branchWiseData, setBranchWiseData] = React.useState([]);
  const [lpaNumberWiseData, setLpaNumberWiseData] = React.useState([]);

  useEffect(() => {
    fetch('https://tpc-backend-node.herokuapp.com/eligible/studentsplacedcompanywise')
      .then((result) => result.json())
      .then((data) => setCompanyWiseData(data.studentsPlacedCompanyWise));

    fetch('https://tpc-backend-node.herokuapp.com/eligible/companyWisePackage')
      .then((result) => result.json())
      .then((data) => setLpaNumberWiseData(data.companyWisePackage));

    fetch('https://tpc-backend-node.herokuapp.com/eligible/placedByDept')
      .then((response) => response.json())
      .then((data) => setBranchWiseData(data));

    fetch('https://tpc-backend-node.herokuapp.com/eligible/studentsplacedbranchwise');
  }, []);

  return (
    <Layout>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            width: '45%',
          }}
        >
          <Bar
            options={options1}
            data={{
              labels: Object.keys(branchWiseData).map((item :any) => item),
              datasets: [
                {
                  label: 'Placed Students',
                  data: Object.keys(branchWiseData).map((item: any) => branchWiseData[item]),
                  backgroundColor: 'rgba(159, 28, 53, 0.9)',
                },
              ],
            }}
          />
        </div>
        <div
          style={{
            width: '45%',
          }}
        >
          <Bar
            options={options2}
            data={{
              labels: companyWiseData?.map((item: any) => item.placed_company),
              datasets: [
                {
                  label: 'Placed Students',
                  data: companyWiseData?.map((item: any) => item.count),
                  backgroundColor: 'rgba(159, 28, 53, 0.9)',
                },
              ],
            }}
          />
        </div>
        <div
          style={{
            width: '45%',
          }}
        >
          <h3
            style={{
              textAlign: 'center',
            }}
          >
            Number of students LPA wise

          </h3>
          <Doughnut data={{
            labels: lpaNumberWiseData?.map((item: any) => Object.keys(item)[0]),
            datasets: [
              {
                label: '# of Students',
                data: lpaNumberWiseData?.map((item: any) => Object.values(item)[0]),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
              },
            ],
          }}
          />
        </div>
        <div
          style={{
            width: '45%',
          }}
        />
      </div>
    </Layout>
  );
}
