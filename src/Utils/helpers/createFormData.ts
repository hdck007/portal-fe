import {
  IBoardDetails,
  IDegreeDetails,
} from '../../Interfaces/StudentDetails';

const appendData = (
  formData: any,
  prefix: string,
  additionalDetails: any,
) => {
  formData.append(
    `${prefix}_title`,
    String(additionalDetails[`${prefix}_title`]),
  );
  formData.append(
    `${prefix}_description`,
    String(additionalDetails[`${prefix}_description`]),
  );
  formData.append(
    `${prefix}_start_date`,
    String(additionalDetails[`${prefix}_start_date`]),
  );
  formData.append(
    `${prefix}_end_date`,
    String(additionalDetails[`${prefix}_end_date`]),
  );
};

export const getAcademicData = (
  boardsAcadDetails: IBoardDetails[],
  engAcadDetails: IDegreeDetails[],
  meAcadDetails: IDegreeDetails[],
  rollNo: string,
) => {
  const academiceData = new FormData();
  academiceData.append('roll_no', rollNo);
  academiceData.append(
    'tenth_percent',
    `${
      (Number(boardsAcadDetails[0].marks) * 100)
      / Number(boardsAcadDetails[0].totalMarks)
    }`,
  );
  academiceData.append(
    'tenth_completion_date',
    String(boardsAcadDetails[0].completionDate),
  );
  academiceData.append(
    'tenth_obtained_marks',
    String(boardsAcadDetails[0].marks),
  );
  academiceData.append(
    'tenth_total_marks',
    String(boardsAcadDetails[0].totalMarks),
  );
  academiceData.append(
    'twelveth_percent',
    `${
      (Number(boardsAcadDetails[1].marks) * 100)
      / Number(boardsAcadDetails[1].totalMarks)
    }`,
  );
  academiceData.append(
    'twelveth_completion_date',
    String(boardsAcadDetails[1].completionDate),
  );
  academiceData.append(
    'twelveth_obtained_marks',
    String(boardsAcadDetails[1].marks),
  );
  academiceData.append(
    'twelveth_total_marks',
    String(boardsAcadDetails[1].totalMarks),
  );
  let sum = 0;
  engAcadDetails.forEach((value, index) => {
    academiceData.append(`sem${index + 1}_pointer`, String(value.cgpa));
    academiceData.append(
      `sem${index + 1}_completion_data`,
      String(value.completionDate),
    );
    academiceData.append(
      `sem${index + 1}_obtained_marks`,
      String(value.marks),
    );
    academiceData.append(
      `sem${index + 1}_total_marks`,
      String(value.totalMarks),
    );
    sum += Number(value.cgpa);
  });
  sum /= engAcadDetails.length;
  academiceData.append('cgpa', String(sum));
  academiceData.append('be_percent', '60');

  meAcadDetails.forEach((value, index) => {
    academiceData.append(
      `masters_sem${index + 1}_pointer`,
      String(value.cgpa),
    );
    academiceData.append(
      `masters_sem${index + 1}_completion_data`,
      String(value.completionDate),
    );
    academiceData.append(
      `masters_sem${index + 1}_obtained_marks`,
      String(value.marks),
    );
    academiceData.append(
      `masters_sem${index + 1}_total_marks`,
      String(value.totalMarks),
    );
  });
  return academiceData;
};

export const getExperienceData = (
  additionalDetails: any,
  rollNo: string,
) => {
  const experience = new FormData();
  experience.append('roll_no', rollNo);
  appendData(experience, 'project_one', additionalDetails);
  appendData(experience, 'project_two', additionalDetails);
  appendData(experience, 'project_three', additionalDetails);
  appendData(experience, 'internship_one', additionalDetails);
  appendData(experience, 'internship_two', additionalDetails);
  appendData(experience, 'internship_three', additionalDetails);
  experience.append('pref_lang', additionalDetails.pref_lang);
  experience.append('technologies', additionalDetails.technologies);
  return experience;
};

export const getHobbiesData = (
  additionalDetails: any,
  rollNo: string,
) => {
  const hobbies = new FormData();
  hobbies.append('roll_no', rollNo);
  hobbies.append('hobbies', additionalDetails.hobbies);
  hobbies.append('pos_of_res_one', additionalDetails.pos_of_res_one);
  hobbies.append('pos_of_res_two', additionalDetails.pos_of_res_two);
  hobbies.append('pos_of_res_three', additionalDetails.pos_of_res_three);
  hobbies.append('extracuricular_one', additionalDetails.extracuricular_one);
  hobbies.append('extracuricular_two', additionalDetails.extracuricular_two);
  hobbies.append(
    'extracuricular_three',
    additionalDetails.extracuricular_three,
  );
  return hobbies;
};

export const getAchievementsData = (
  additionalDetails: any,
  rollNo: string,
) => {
  const skillAndObj = new FormData();
  skillAndObj.append('roll_no', rollNo);
  skillAndObj.append('career_obj', additionalDetails.career_obj);
  skillAndObj.append(
    'acad_achievement_one',
    additionalDetails.acad_achievement_one,
  );
  skillAndObj.append(
    'acad_achievement_two',
    additionalDetails.acad_achievement_two,
  );
  skillAndObj.append(
    'acad_achievement_three',
    additionalDetails.acad_achievement_three,
  );
  skillAndObj.append(
    'certificate_one',
    additionalDetails.certificate_one,
  );
  skillAndObj.append(
    'certificate_two',
    additionalDetails.certificate_two,
  );
  skillAndObj.append(
    'certificate_three',
    additionalDetails.certificate_three,
  );
  return skillAndObj;
};
