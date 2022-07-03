/* eslint-disable */
import {  Button, Card, Skeleton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import { IBoardDetails, IDegreeDetails } from '../../Interfaces/StudentDetails';
import ApplicableOptions from './ApplicableOptions/ApplicableOptions';
import BoardsForm from './BoardsForm/BoardsForm';
import DegreeForm from './DegreeForms/DegreeForm';
import { getEngDataPopulated,
    getDiplomaData, 
  getBoardsDataPopulated, getMeDataPopulated } from '../../Utils/helpers/mapData';
import { validate } from '../../Utils/helpers/validateData';
import { getAcademicData } from '../../Utils/helpers/createFormData';
import { addAcademicDetails } from '../../APIcalls/academicApis';
import DotsMobileStepper from '../FormStepper/FormStepper';

function AcademicdetailsWrapper() {
	const [isLoading, setIsLoading] = useState(true);
	const [engAcadDetails, setEngAcadDetails] = useState<IDegreeDetails[]>([]);
	const [diplomaAcadDetails, setDiplomaAcadDetails] = useState<
		IDegreeDetails[]
	>([]);
	const [meAcadDetails, setMeAcadDetails] = useState<IDegreeDetails[]>([]);
	const [boardsAcadDetails, setBoardsAcadDetails] = useState<IBoardDetails[]>(
		[]
	);
	const [didDiploma, setDidDiploma] = useState<boolean>(false);
	const [didMe, setDidMe] = useState<boolean>(false);
	const [didXII, setDidXII] = useState<boolean>(false);
	const cookies = new Cookies();

	useEffect(() => {
		const studentData = new FormData();
		studentData.append('roll_no', cookies.get('roll_no'));
		fetch('https://django-tpc.herokuapp.com/viewAcademicInfo/', {
			method: 'POST',
			body: studentData,
			headers: {
				Authorization: `Bearer ${cookies.get('access')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setBoardsAcadDetails(getBoardsDataPopulated(data));
				setEngAcadDetails(getEngDataPopulated(data));
				const mastersData = getMeDataPopulated(data);
				setMeAcadDetails(mastersData.values);
        setDidMe(mastersData.didMe);
				setDiplomaAcadDetails(getDiplomaData(data));
				// setIsLoading(false);
			});
	}, []);

	const removeEngAcad = (value: string) => {
		switch (value) {
			case 'eng': {
				if (engAcadDetails.length === 6) {
					return;
				}
				const newAcadDetails = [...engAcadDetails];
				newAcadDetails.pop();
				setEngAcadDetails(newAcadDetails);
				break;
			}
			default: {
				const newAcadDetails = [...meAcadDetails];
				newAcadDetails.pop();
				setMeAcadDetails(newAcadDetails);
				break;
			}
		}
	};

	const handleAddAcad = (value: string) => {
		switch (value) {
			case 'me': {
				if (meAcadDetails.length === 4) {
					return;
				}
				setMeAcadDetails((prevValue) => [
					...meAcadDetails,
					{
						semester: prevValue.length + 1,
						completionDate: new Date(),
						marks: null,
						totalMarks: null,
						cgpa: null,
					},
				]);
				break;
			}
			default: {
				if (engAcadDetails.length === 8) {
					return;
				}
				setEngAcadDetails((prevValue) => [
					...engAcadDetails,
					{
						semester: prevValue.length + 1,
						completionDate: new Date(),
						marks: null,
						totalMarks: null,
						cgpa: null,
					},
				]);
			}
		}
	};

	const handleSubmit = () => {
		if (validate(
      engAcadDetails,
      boardsAcadDetails,
      didMe,
      meAcadDetails,
      didDiploma,
      diplomaAcadDetails,
    )) {
			const access = cookies.get('access');
      const rollNo = cookies.get('roll_no');
			const apiCalls = [
				addAcademicDetails(getAcademicData(
          boardsAcadDetails,
          engAcadDetails,
          meAcadDetails,
          rollNo,
        ), access),
			];

			Promise.allSettled(apiCalls).then((response) => {
				response.forEach((value) => {
					if (value.status === 'rejected') {
						Swal.fire({
							icon: 'error',
							title: 'Oops...',
							text: 'Something went wrong!',
						});
					}
				});
			});
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Please fill all the fields',
			});
		}
	};

	const handleChangeBoards = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		field: string,
		index: number
	) => {
		const newBoardsAcadDetails = [...boardsAcadDetails];
		// @ts-ignore
		newBoardsAcadDetails[index][field] = event.target.value;
		setBoardsAcadDetails(newBoardsAcadDetails);
	};

	const handleChangeDegree = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		value: string,
		field: string,
		index: number
	) => {
		switch (field) {
			case 'eng': {
				const newAcadDetails = [...engAcadDetails];
				// @ts-ignore
				newAcadDetails[index][value] = event.target.value;
				setEngAcadDetails(newAcadDetails);
				break;
			}
			case 'me': {
				const newAcadDetails = [...meAcadDetails];
				// @ts-ignore
				newAcadDetails[index][value] = event.target.value;
				setMeAcadDetails(newAcadDetails);
				break;
			}
			default: {
				const newAcadDetails = [...diplomaAcadDetails];
				// @ts-ignore
				newAcadDetails[index][value] = event.target.value;
				setDiplomaAcadDetails(newAcadDetails);
			}
		}
	};

	return (
		<>
			<DotsMobileStepper activeStep={1} handleSubmit={handleSubmit} />
			<ApplicableOptions
				didDiploma={didDiploma}
				setDidDiploma={setDidDiploma}
				didMe={didMe}
				setDidMe={setDidMe}
				didXII={didXII}
				setDidXII={setDidXII}
			/>

			{/* Boards details */}
			<div
				style={{
					width: '75%',
					position: 'relative',
					bottom: '220px',
				}}
			>
				<Card
					style={{
						width: '100%',
						padding: '10px',
						marginBottom: '20px',
						borderRadius: '10px',
					}}
				>
					<Typography
						fontSize={24}
						style={{
							padding: '10px 0',
						}}
					>
						Boards academic details
					</Typography>
					{boardsAcadDetails.map((item: IBoardDetails, index: number) => (
						<BoardsForm
							handleChange={handleChangeBoards}
							index={index}
							details={item}
						/>
					))}
				</Card>
			</div>

			{/* optional diploma */}
			{didDiploma && (
				<div
					style={{
						position: 'relative',
						bottom: '200px',
						width: '75%',
						marginBottom: '20px',
					}}
				>
					<Card
						style={{
							width: '100%',
							padding: '10px',
							marginBottom: '20px',
							borderRadius: '10px',
						}}
					>
						<Typography
							fontSize={24}
							style={{
								padding: '10px 0',
							}}
						>
							Diploma academic details
						</Typography>
						{diplomaAcadDetails.map(
							(item: IDegreeDetails, index: number) => (
								<DegreeForm
									field='diploma'
									index={index}
									details={item}
									handleChange={handleChangeDegree}
								/>
							)
						)}
					</Card>
				</div>
			)}

			{/* be details */}
			<div
				style={{
					position: 'relative',
					bottom: '200px',
					width: '75%',
				}}
			>
				<Card
					style={{
						width: '100%',
						padding: '10px',
						paddingBottom: '50px',
						marginBottom: '20px',
						borderRadius: '10px',
					}}
				>
					<Typography
						fontSize={24}
						style={{
							padding: '10px 0',
						}}
					>
						Degree academic details
					</Typography>
					{engAcadDetails.map((item: IDegreeDetails, index: number) => (
						<DegreeForm
							field='eng'
							index={index}
							details={item}
							handleChange={handleChangeDegree}
						/>
					))}
					<Button
						style={{
							position: 'absolute',
							right: '100px',
							bottom: '5px',
						}}
						onClick={() => handleAddAcad('eng')}
					>
						Add
					</Button>
					<Button
						style={{
							position: 'absolute',
							right: '10px',
							bottom: '5px',
						}}
						onClick={() => removeEngAcad('eng')}
					>
						Remove
					</Button>
				</Card>
			</div>

			{/* pg acad details */}
			{didMe && (
				<div
					style={{
						position: 'relative',
						bottom: '200px',
						width: '75%',
					}}
				>
					<Card
						style={{
							width: '100%',
							padding: '10px',
							paddingBottom: '50px',
							borderRadius: '10px',
						}}
					>
						<Typography
							fontSize={24}
							style={{
								padding: '10px 0',
								marginTop: '20px',
							}}
						>
							PG academic details
						</Typography>
						{meAcadDetails.map((item: IDegreeDetails, index: number) => (
							<DegreeForm
								field='me'
								index={index}
								details={item}
								handleChange={handleChangeDegree}
							/>
						))}
						<Button
							style={{
								position: 'absolute',
								right: '100px',
								bottom: '5px',
							}}
							onClick={() => handleAddAcad('me')}
						>
							Add
						</Button>
						<Button
							style={{
								position: 'absolute',
								right: '5px',
								bottom: '5px',
							}}
							onClick={() => removeEngAcad('me')}
						>
							Remove
						</Button>
					</Card>
				</div>
			)}
		</>
	);
}

export default AcademicdetailsWrapper;
