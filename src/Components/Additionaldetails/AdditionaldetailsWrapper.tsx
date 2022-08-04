/* eslint-disable */
import { Card, TextField, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import Cookies from 'universal-cookie';
import { getAdditionalDetailsPopulated } from '../../Utils/helpers/mapData';
import { useForm, Controller } from 'react-hook-form';
import { addAchievementsDetails, addExperienceDetails, addHobbiesDetails } from '../../APIcalls/academicApis';
import { getAchievementsData, getExperienceData, getHobbiesData } from '../../Utils/helpers/createFormData';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function AdditionaldetailsWrapper() {
	const { control, handleSubmit, reset } = useForm();
	const navigate = useNavigate();
	const [additionalDetails, setAdditionalDetails] = useState<any>({
		singleFields: [],
		multiFields: [],
	});
	const cookies = new Cookies();
	useEffect(() => {
		const formData = new FormData();
		formData.append('roll_no', cookies.get('roll_no'));
		getAdditionalDetailsPopulated(formData, cookies.get('access'), reset).then(
			(data) => {
				setAdditionalDetails(data);
			}
		);
	}, []);

	const onSubmit = (dataObject: any) => {
		const access = cookies.get('access');
		const rollNo = cookies.get('roll_no');
		const apiCalls = [
			addExperienceDetails(getExperienceData(dataObject, rollNo), access),
			addHobbiesDetails(getHobbiesData(dataObject, rollNo), access),
			addAchievementsDetails(getAchievementsData(dataObject, rollNo), access),
		];

		let flag = true;
		Promise.allSettled(apiCalls).then((response) => {
			response.forEach((value) => {
				if (value.status === 'rejected') {
					flag = false;
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Something went wrong!',
					});
				}
			});
		});
		if (flag) {
			Swal.fire({
				icon: 'success',
				title: 'Success!',
				text: 'Data added successfully!',
			});
		}
		navigate('/vprofile', { replace: true });
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<br />
			<input type='submit'
				style={{ 
					background: 'rgba(159, 28, 53, 1)',
					border: 'none',
					padding: '5px 20px',
					borderRadius: '5px',
					color: 'white',
				}}
			/>
			{additionalDetails &&
				additionalDetails.singleFields.map((item: any, index: number) => (
					<Card
						style={{
							width: '100%',
							padding: '1rem',
							borderRadius: '10px',
							marginTop: '20px',
							backgroundColor: '#fff',
						}}
					>
						<Typography
							variant='h6'
							gutterBottom
							style={{
								marginTop: '2rem',
							}}
						>
							{item.title}
						</Typography>
						<Controller
							name={item.value}
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									placeholder='Enter details here'
									fullWidth
									multiline
								/>
							)}
						/>
					</Card>
				))}
			{additionalDetails &&
				additionalDetails.multiFields.map((item: any, index: number) => (
					<Card
						style={{
							width: '100%',
							padding: '1rem',
							borderRadius: '10px',
							marginTop: '20px',
							backgroundColor: '#fff',
						}}
					>
						<Typography
							variant='h6'
							gutterBottom
							style={{
								marginTop: '2rem',
							}}
						>
							{item.title}
						</Typography>
						<Controller
							name={item.value[0].value}
							control={control}
							render={({ field }) => (
								<TextField
									label={item.value[0].title}
									fullWidth
									multiline
									{...field}
								/>
							)}
						/>
						<Controller
							name={item.value[1].value}
							control={control}
							render={({ field }) => (
								<TextField
									label={item.value[1].title}
									fullWidth
									multiline
									{...field}
								/>
							)}
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
								<Controller
									name={item.value[2].value}
									control={control}
									render={({ field }) => (
										<input {...field} type='date' />
									)}
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
								<Controller
									name={item.value[3].value}
									control={control}
									render={({ field }) => (
										<input {...field} type='date' />
									)}
								/>
							</div>
						</div>
					</Card>
				))}
		</form>
	);
}

export default AdditionaldetailsWrapper;
