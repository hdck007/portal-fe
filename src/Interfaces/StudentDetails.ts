export interface IBoardDetails{
  board: string;
  completionMonth: null|string,
  completionYear: null|number,
  marks: null|number,
  totalMarks: null|number,
}

export interface IDegreeDetails{
  semester: number;
  completionMonth: null | string;
  completionYear: null | number;
  marks: number | null;
  totalMarks: number | null;
  cgpa: number | null;
}
