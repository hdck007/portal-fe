export interface IBoardDetails{
  board: string;
  completionDate: any;
  marks: null|number,
  totalMarks: null|number,
}

export interface IDegreeDetails{
  semester: number;
  completionDate: any,
  marks: number | null;
  totalMarks: number | null;
  cgpa: number | null;
}
