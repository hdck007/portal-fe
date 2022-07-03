/* eslint-disable no-tabs */

import { getExperience, getOtherInfo, getSkillSet } from '../../APIcalls/additionalDetails';

/* eslint-disable max-len */
export const getBoardsDataPopulated = (data: any) => {
  const valueBoards = new Array(2).fill(0).map((_, index) => ({
    board: index === 0 ? 'Class - X' : 'Class - XII',
    completionDate: new Date(),
    marks: null,
    totalMarks: null,
  }));

  valueBoards[0].completionDate = data.tenth_completion_date;
  valueBoards[0].totalMarks = data.tenth_total_marks;
  valueBoards[0].marks = data.tenth_obtained_marks;
  valueBoards[1].completionDate = data.twelveth_completion_date;
  valueBoards[1].totalMarks = data.twelveth_total_marks;
  valueBoards[1].marks = data.twelveth_obtained_marks;

  return valueBoards;
};

export const getEngDataPopulated = (data: any) => {
  let highestSem = 5;

  const value = new Array(8).fill(0).map((_, index) => ({
    semester: index + 1,
    completionDate: new Date(),
    marks: null,
    totalMarks: null,
    cgpa: null,
  }));

  value[0].completionDate = data.sem1_completion_date;
  value[0].totalMarks = data.sem1_total_marks;
  value[0].marks = data.sem1_obtained_marks;
  value[0].cgpa = data.sem1_pointer;
  value[1].completionDate = data.sem2_completion_date;
  value[1].totalMarks = data.sem2_total_marks;
  value[1].marks = data.sem2_obtained_marks;
  value[1].cgpa = data.sem2_pointer;
  value[2].completionDate = data.sem3_completion_date;
  value[2].totalMarks = data.sem3_total_marks;
  value[2].marks = data.sem3_obtained_marks;
  value[2].cgpa = data.sem3_pointer;
  value[3].completionDate = data.sem4_completion_date;
  value[3].totalMarks = data.sem4_total_marks;
  value[3].marks = data.sem4_obtained_marks;
  value[3].cgpa = data.sem4_pointer;
  value[4].completionDate = data.sem5_completion_date;
  value[4].totalMarks = data.sem5_total_marks;
  value[4].marks = data.sem5_obtained_marks;
  value[4].cgpa = data.sem5_pointer;
  if (
    data.sem6_pointer
		&& data.sem6_obtained_marks
		&& data.sem6_total_marks
		&& data.sem6_completion_date
  ) {
    highestSem = 6;
    value[5].completionDate = data.sem6_completion_date;
    value[5].totalMarks = data.sem6_total_marks;
    value[5].marks = data.sem6_obtained_marks;
    value[5].cgpa = data.sem6_pointer;
  }
  if (
    data.sem7_pointer
		&& data.sem7_obtained_marks
		&& data.sem7_total_marks
		&& data.sem7_completion_date
  ) {
    highestSem = 7;
    value[6].completionDate = data.sem7_completion_date;
    value[6].totalMarks = data.sem7_total_marks;
    value[6].marks = data.sem7_obtained_marks;
    value[6].cgpa = data.sem7_pointer;
  }
  if (
    data.sem8_pointer
		&& data.sem8_obtained_marks
		&& data.sem8_total_marks
		&& data.sem8_completion_date
  ) {
    highestSem = 8;
    value[7].completionDate = data.sem8_completion_date;
    value[7].totalMarks = data.sem8_total_marks;
    value[7].marks = data.sem8_obtained_marks;
    value[7].cgpa = data.sem8_pointer;
  }

  return value.splice(0, highestSem);
};

export const getMeDataPopulated = (data: any) => {
  const meValue = new Array(8).fill(0).map((_, index) => ({
    semester: index + 1,
    completionDate: new Date(),
    marks: null,
    totalMarks: null,
    cgpa: null,
  }));

  let highestSem = 2;

  meValue[0].completionDate = data.masters_sem1_completion_date;
  meValue[0].totalMarks = data.masters_sem1_total_marks;
  meValue[0].marks = data.masters_sem1_obtained_marks;
  meValue[0].cgpa = data.masters_sem1_pointer;
  meValue[1].completionDate = data.masters_sem2_completion_date;
  meValue[1].totalMarks = data.masters_sem2_total_marks;
  meValue[1].marks = data.masters_sem2_obtained_marks;
  meValue[1].cgpa = data.masters_sem2_pointer;
  if (
    data.masters_sem3_pointer
		&& data.masters_sem3_obtained_marks
		&& data.masters_sem3_total_marks
		&& data.masters_sem3_completion_date
  ) {
    highestSem = 3;
    meValue[2].completionDate = data.masters_sem3_completion_date;
    meValue[2].totalMarks = data.masters_sem3_total_marks;
    meValue[2].marks = data.masters_sem3_obtained_marks;
    meValue[2].cgpa = data.masters_sem3_pointer;
  }
  if (
    data.masters_sem4_pointer
		&& data.masters_sem4_obtained_marks
		&& data.masters_sem4_total_marks
		&& data.masters_sem4_completion_date
  ) {
    highestSem = 4;
    meValue[3].completionDate = data.masters_sem4_completion_date;
    meValue[3].totalMarks = data.masters_sem4_total_marks;
    meValue[3].marks = data.masters_sem4_obtained_marks;
    meValue[3].cgpa = data.masters_sem4_pointer;
  }
  const temp = meValue.filter(
    (item) => !!item.cgpa && !!item.completionDate && !!item.marks && !!item.totalMarks,
  );
  console.log(temp);
  if (temp.length) {
    return {
      didMe: true,
      values: meValue.splice(0, highestSem),
    };
  }
  return {
    didMe: false,
    values: meValue.splice(0, 2),
  };
};

export const getDiplomaData = (data: any) => new Array(8).fill(0).map((_, index) => ({
  semester: index + 1,
  completionDate: new Date(),
  marks: null,
  totalMarks: null,
  cgpa: null,
}));

export const getAdditionalDetailsPopulated = async (formData: any, access: string, reset: any) => {
  const experience = await getExperience(formData, access);
  const otherInfo = await getOtherInfo(formData, access);
  const skillSet = await getSkillSet(formData, access);

  const keys = {
    ...experience,
    ...otherInfo,
    ...skillSet,
  };

  console.log(JSON.stringify(keys));
  console.log(keys);
  reset(keys);

  const singleFields = Object.keys(keys).filter((item) => (!item.includes('end_date')
  && !item.includes('start_date')
  && !item.includes('description')
  && !item.includes('title')
  && !item.includes('completion_date')
  && !item.includes('roll_no')
  )).map((item: string) => {
    const titleString = item.split('_').join(' ')
      .replace('acad', 'academic')
      .replace('obj', 'objectives')
      .replace('extracuricular', 'extracuricular activities')
      .replace('pref', 'preferred')
      .replace('lang', 'language')
      .replace('pos ', 'position ')
      .replace('res ', 'responsibility ');
    return {
      title: titleString.charAt(0).toUpperCase() + titleString.slice(1),
      value: item,
    };
  });

  const internships = ['one', 'two', 'three'].map((item) => ({
    title: `Internship ${item}`,
    value: [
      {
        title: 'Title',
        value: `internship_${item}_title`,
      },
      {
        title: 'Description',
        value: `internship_${item}_description`,
      },
      {
        title: 'Start Date',
        value: `internship_${item}_start_date`,
      },
      {
        title: 'End Date',
        value: `internship_${item}_end_date`,
      },
    ],
  }));

  const projects = ['one', 'two', 'three'].map((item) => ({
    title: `Project ${item}`,
    value: [
      {
        title: 'Title',
        value: `project_${item}_title`,
      },
      {
        title: 'Description',
        value: `project_${item}_description`,
      },
      {
        title: 'Start Date',
        value: `project_${item}_start_date`,
      },
      {
        title: 'End Date',
        value: `project_${item}_end_date`,
      },
    ],
  }));

  const multiFields = [...internships, ...projects];

  console.log(multiFields);

  return {
    singleFields,
    multiFields,
  };
};
