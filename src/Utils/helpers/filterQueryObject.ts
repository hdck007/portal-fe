export const filterQueryObject = (queryFields: any, requiredFields: any) => {
  const queryObject: any = {};
  Object.keys(queryFields).forEach((key) => {
    if (queryFields[key]) {
      queryObject[key] = queryFields[key];
    }
  });
  const fieldsObject: any = {};
  Object.keys(requiredFields).forEach((key) => {
    if (requiredFields[key]) {
      fieldsObject[key] = true;
    }
  });
  return {
    fields: {
      ...fieldsObject,
    },
    queries: {
      ...queryObject,
    },
  };
};
