export const getOtherInfo = async (formData: any, access: string) => {
  const result = await fetch(
    'https://django-tpc.herokuapp.com/viewOtherInfo/',
    {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${access}`,
      },
    },
  )
    .then((res) => res.json())
    .then((data) => data);

  return result;
};

export const getSkillSet = async (formData: any, access: string) => {
  const result = await fetch(
    'https://django-tpc.herokuapp.com/viewExperience/',
    {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${access}`,
      },
    },
  )
    .then((res) => res.json())
    .then((data) => data);

  return result;
};

export const getExperience = async (formData: any, access: string) => {
  const result = await fetch('https://django-tpc.herokuapp.com/viewSkillSet/', {
    method: 'POST',
    body: formData,
    headers: {
      Authorization: `Bearer ${access}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);

  return result;
};
