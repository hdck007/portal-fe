export const addAcademicDetails = (
  academiceData: any,
  access: any,
) => new Promise((resolve, reject) => {
  fetch('https://django-tpc.herokuapp.com/addAcademicInfo/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${access}`,
    },
    body: academiceData,
  }).then((res) => {
    if (res.status >= 200 && res.status < 400) {
      resolve('Fullfilled');
    } else {
      reject();
    }
  });
});

export const addExperienceDetails = async (
  experience: any,
  access: any,
) => new Promise((resolve, reject) => {
  fetch('https://django-tpc.herokuapp.com/addExperience/', {
    method: 'POST',
    body: experience,
    headers: {
      Authorization: `Bearer ${access}`,
    },
  }).then((res) => {
    if (res.status >= 200 && res.status < 400) {
      resolve('Fullfilled');
    } else {
      reject();
    }
  });
});

export const addHobbiesDetails = async (
  hobbies: any,
  access: any,
) => new Promise((resolve, reject) => {
  fetch('https://django-tpc.herokuapp.com/addOtherInfo/', {
    method: 'POST',
    body: hobbies,
    headers: {
      Authorization: `Bearer ${access}`,
    },
  }).then((res) => {
    if (res.status >= 200 && res.status < 400) {
      resolve('Fullfilled');
    } else {
      reject();
    }
  });
});

export const addAchievementsDetails = async (
  skillAndObj:any,
  access: any,
) => new Promise((resolve, reject) => {
  fetch('https://django-tpc.herokuapp.com/addSkillSet/', {
    method: 'POST',
    body: skillAndObj,
    headers: {
      Authorization: `Bearer ${access}`,
    },
  }).then((res) => {
    if (res.status >= 200 && res.status < 400) {
      resolve('Fullfilled');
    } else {
      reject();
    }
  });
});
