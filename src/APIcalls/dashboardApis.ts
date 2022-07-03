export const getDashboarData = async (queryBody: any, page: number) => {
  const result = await fetch(
    `https://tpc-backend-node.herokuapp.com/filter/dashboard/${page}&10`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(queryBody),
    },
  )
    .then((response) => response.json())
    .then((data) => data);
  return result;
};

export const downloadExcelForGivenData = (receivedData: any) => {
  fetch('https://tpc-backend-node.herokuapp.com/download', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      students: receivedData,
    }),
  }).then((res) => res.blob()).then((blob) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.xlsx';
    a.click();
  });
};

export const downloadCsvForGivenData = (receivedData: any) => {
  fetch('https://tpc-backend-node.herokuapp.com/downloadcsv', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      students: receivedData,
    }),
  }).then((res) => res.blob()).then((blob) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.csv';
    a.click();
  });
};
