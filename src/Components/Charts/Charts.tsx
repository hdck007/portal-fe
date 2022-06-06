import React from 'react';
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

export const branchWise = {
  labels,
  datasets: [
    {
      label: 'Placed Students',
      data: [70, 100, 40, 40],
      backgroundColor: 'rgba(159, 28, 53, 0.9)',
    },
  ],
};

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

const lpaNumberWise = {
  labels: ['15lpa', '10lpa', '8lpa', '6lpa', '4.5lpa', '4lpa'],
  datasets: [
    {
      label: '# of Students',
      data: [12, 19, 3, 5, 2, 3],
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
};

export default function Charts() {
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
          <Bar options={options1} data={branchWise} />
        </div>
        <div
          style={{
            width: '45%',
          }}
        >
          <Bar options={options2} data={companyWise} />
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
          <Doughnut data={lpaNumberWise} />
        </div>
      </div>
    </Layout>
  );
}
