/* eslint-disable */
import { Card, TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo } from 'react';

function AdditionaldetailsWrapper({
	additionalDetails,
	setAdditionalDetails,
}: any) {
	useEffect(() => {
		const value = [
			'Career Objective',
			'Academic achievement one',
			'Academic achievement two',
			'Academic achievement three',
			'Certification One',
			'Certification Two',
			'Certification Three',
			'Project one',
			'Project two',
			'Project three',
			'Internship one',
			'Internship two',
			'Internship three',
			'Prefered Language',
			'Technologies',
			'Hobbies',
      'Position of responsibility one',
      'Position of responsibility two',
      'Position of responsibility three',
      'Extracurricular activities one',
      'Extracurricular activities two',
      'Extracurricular activities three',
		].map((item, index) => (index>=7 && index<=12)?({
			title: item,
			value: {
        title: '',
        description: '',
        startDate: '',
        endDate: '',  
      },
		}):({
      title: item,
      value: '',
    }));

		setAdditionalDetails(value);
	}, []);

	const handleAdditonalChange = (data: any, index: number, name: string| null) => {
		const newAdditionalDetails = [...additionalDetails];
    // console.log(newAdditionalDetails);
		if(name){
      newAdditionalDetails[index].value[name] = data;
    }else{
      newAdditionalDetails[index].value = data;
    }
		setAdditionalDetails(newAdditionalDetails);
	};

	return (		
  <div>
			{additionalDetails &&
				additionalDetails.map((item: any, index: number) => (
					<Card
						style={{
							width: '100%',
							padding: '1rem',
							borderRadius: '10px',
							marginTop: '20px',
							backgroundColor: '#fff',
						}}
					>
						{index >= 7 && index <= 12 ? (
							<>
								<Typography
									variant='h6'
									gutterBottom
									style={{
										marginTop: '2rem',
									}}
								>
									{item.title}
								</Typography>
								<TextField
									value={item.value.title}
									label='Title'
									fullWidth
									multiline
									onChange={(event) =>
										handleAdditonalChange(event.target.value, index, 'title')
									}
								/>
								<TextField
									value={item.value.description}
									label='Description'
									fullWidth
									multiline
									onChange={(event: any) =>
										handleAdditonalChange(event.target.value, index, 'description')
									}
								/>
								<div
									style={{
										display: 'flex',
										flexWrap: 'wrap',
										justifyContent: 'flex-start',
										alignItems: 'center',
										marginTop: '1rem',
									}}
								>
									<div
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											alignItems: 'center',
											margin: '1rem 0',
										}}
									>
										<Typography
											style={{
												width: '100px',
											}}
										>
											Start Date:
										</Typography>
										<input
											value={item.value.startDate}
											type='date'
											onChange={(event) =>
												handleAdditonalChange(event.target.value, index, 'startDate')
											}
										/>
									</div>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<div
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											alignItems: 'center',
										}}
									>
										<Typography
											style={{
												width: '100px',
											}}
										>
											End Date:
										</Typography>
										<input
											value={item.value.endDate}
											type='date'
											onChange={(event) =>
												handleAdditonalChange(event.target.value, index, 'endDate')
											}
										/>
									</div>
								</div>
							</>
						) : (
							<>
								<Typography
									variant='h6'
									gutterBottom
									style={{
										marginTop: '2rem',
									}}
								>
									{item.title}
								</Typography>
								<TextField
									value={item.value}
									placeholder='Enter details here'
									fullWidth
									multiline
									onChange={(event: any) =>
										handleAdditonalChange(event.target.value, index, null)
									}
								/>
							</>
						)}
					</Card>
				))}
		</div>
	);
}

export default AdditionaldetailsWrapper;
