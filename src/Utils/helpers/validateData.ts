import {
  IDegreeDetails,
  IBoardDetails,
} from '../../Interfaces/StudentDetails';

export const validate = (
  engAcadDetails: IDegreeDetails[],
  boardsAcadDetails: IBoardDetails[],
  didMe: boolean,
  meAcadDetails: IDegreeDetails[],
  didDiploma: boolean,
  diplomaAcadDetails: IDegreeDetails[],
) => {
  let flag = true;
  engAcadDetails.forEach((item: any) => {
    Object.keys(item).forEach((key) => {
      if (item[key] === null) {
        flag = false;
      }
    });
  });
  boardsAcadDetails.forEach((item: any) => {
    Object.keys(item).forEach((key) => {
      if (item[key] === null) {
        flag = false;
      }
    });
  });

  if (didMe) {
    meAcadDetails.forEach((item: any) => {
      Object.keys(item).forEach((key) => {
        if (item[key] === null) {
          flag = false;
        }
      });
    });
  }

  if (didDiploma) {
    diplomaAcadDetails.forEach((item: any) => {
      Object.keys(item).forEach((key) => {
        if (item[key] === null) {
          flag = false;
        }
      });
    });
  }
  return flag;
};
