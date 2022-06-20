import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import './table.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import SLayout from '../Components/SLayout/SLayout';
import person from '../assets/image/person.jpeg';
import logo1 from '../assets/image/rait2.jpg';

// const useStyles = makeStyles({
//   back: {
//     backgroundImage: `url(data:image/jpg; base64, ${base})`,
//   },
// });

function VProfile() {
  const cookies = new Cookies();
  const roll = cookies.get('roll_no');
  const loginData = new FormData();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [rollno, setRollno] = useState('');
  const [link, setLink] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [department, setDepartment] = useState('');
  const [gender, setGender] = useState('');
  const [pointer, setPointer] = useState(0);
  const [ten, setTen] = useState(0);
  const [twelve, setTwelve] = useState(0);
  const [extra1, setExtra1] = useState('');
  const [extra2, setExtra2] = useState('');
  const [extra3, setExtra3] = useState('');
  const [pos1, setPos1] = useState('');
  const [pos2, setPos2] = useState('');
  const [pos3, setPos3] = useState('');
  const [cert1, setCert1] = useState('');
  const [cert2, setCert2] = useState('');
  const [cert3, setCert3] = useState('');
  const [proj1, setProj1] = useState('');
  const [proj2, setProj2] = useState('');
  const [proj3, setProj3] = useState('');
  const [proj1des, setProj1des] = useState('');
  const [proj2des, setProj2des] = useState('');
  const [proj3des, setProj3des] = useState('');
  const [intern1, setIntern1] = useState('');
  const [intern2, setIntern2] = useState('');
  const [intern3, setIntern3] = useState('');
  const [intern1des, setIntern1des] = useState('');
  const [intern2des, setIntern2des] = useState('');
  const [intern3des, setIntern3des] = useState('');
  const [hobby, setHobby] = useState('');
  const [plang, setPlang] = useState('');
  const [tech, setTech] = useState('');
  const [acad1, setAcad1] = useState('');
  const [acad2, setAcad2] = useState('');
  const [acad3, setAcad3] = useState('');
  const [sem1, setSem1] = useState('0');
  const [sem2, setSem2] = useState('0');
  const [sem3, setSem3] = useState('0');
  const [sem4, setSem4] = useState('0');
  const [sem5, setSem5] = useState('0');
  const [sem6, setSem6] = useState('0');
  const [sem7, setSem7] = useState('0');
  const [sem8, setSem8] = useState('0');
  const [base, setBase] = useState('');
  const [obj, setObj] = useState('');
  const [img, setImg] = useState('');
  loginData.append('roll_no', roll);
  const [data, setData] = useState('');
  useEffect(() => {
    fetch('https://django-tpc.herokuapp.com/node/getStudentProfile/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cookies.get('access')}`,
      },
      // eslint-disable-next-line camelcase
      body: loginData,
    }).then((response) => response.json()).then((resp) => {
      console.log(resp);
      setFname(resp.student.first_name);
      setLname(resp.student.last_name);
      setRollno(resp.student.roll_no);
      setLink(resp.student.linkedin);
      setEmail(resp.student.email);
      setDepartment(resp.student.department);
      setGender(resp.student.gender);
      setPhone(resp.student.phone_number);
      setExtra1(resp.student.other_info.extracuricular_one);
      setExtra2(resp.student.other_info.extracuricular_two);
      setExtra3(resp.student.other_info.extracuricular_three);
      setPos1(resp.student.other_info.pos_of_res_one);
      setPos2(resp.student.other_info.pos_of_res_two);
      setPos3(resp.student.other_info.pos_of_res_three);
      setProj1(resp.student.student_experience.project_one_title);
      setProj2(resp.student.student_experience.project_two_title);
      setProj3(resp.student.student_experience.project_three_title);
      setProj1des(resp.student.student_experience.project_one_description);
      setProj2des(resp.student.student_experience.project_two_description);
      setProj3des(resp.student.student_experience.project_three_description);
      setIntern1(resp.student.student_experience.internship_one_title);
      setIntern2(resp.student.student_experience.internship_two_title);
      setIntern3(resp.student.student_experience.internship_three_title);
      setIntern1des(resp.student.student_experience.internship_one_description);
      setIntern2des(resp.student.student_experience.internship_two_description);
      setIntern3des(resp.student.student_experience.internship_three_description);
      setPlang(resp.student.student_experience.pref_lang);
      setTech(resp.student.student_experience.technologies);
      setHobby(resp.student.other_info.hobbies);
      setAcad1(resp.student.student_skillset.acad_achievement_one);
      setAcad2(resp.student.student_skillset.acad_achievement_two);
      setAcad3(resp.student.student_skillset.acad_achievement_three);
      setCert1(resp.student.student_skillset.certificate_one);
      setCert2(resp.student.student_skillset.certificate_two);
      setCert3(resp.student.student_skillset.certificate_three);
      setObj(resp.student.student_skillset.career_obj);
      setTen(resp.student.academic_info.tenth_percent);
      setTwelve(resp.student.academic_info.twelveth_percent);
      setPointer(resp.student.academic_info.cgpa);
      setSem1(resp.student.academic_info.sem1_pointer);
      setSem2(resp.student.academic_info.sem2_pointer);
      setSem3(resp.student.academic_info.sem3_pointer);
      setSem4(resp.student.academic_info.sem4_pointer);
      setSem5(resp.student.academic_info.sem5_pointer);
      setSem6(resp.student.academic_info.sem6_pointer);
      setSem7(resp.student.academic_info.sem7_pointer);
      setSem8(resp.student.academic_info.sem8_pointer);
      setBase(resp.student.photo);
    });
    console.log(base);
    console.log(img);
  }, []);
  const handleResume = async (event: any) => {
    event.preventDefault();
    if (roll !== undefined) {
      fetch('https://tpc-backend-node.herokuapp.com/downloadresume/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: roll }),
      }).then((response) => response.blob()).then((blob) => {
        console.log(blob);
        const url = window.URL.createObjectURL(blob);
        console.log(url);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        a.click();
      });
    }
  };
  return (
    <SLayout>
      <div>
        <div className="pdf">
          <div className="udetail">
            <div className="info">
              <h3 className="uinfo">
                Name:
                {' '}
                {fname}
                {' '}
                {' '}
                {lname}
              </h3>
              <h3 className="uinfo">
                Gender:
                {' '}
                {gender}
              </h3>
              <h3 className="uinfo">
                Email:
                {' '}
                {email}
              </h3>
              <h3 className="uinfo">
                Mob:
                {' '}
                {phone}
              </h3>
              <h3 className="uinfo">
                LinkedIn:
                {' '}
                {link}
              </h3>
            </div>
            <div className="pmg">
              <img
                alt="pimage"
                id="pimage"
                src={`data:image/jpg; base64, ${base}`}
              />
            </div>
            <div className="logo">
              <img
                alt="pimage"
                className="img"
                src={logo1}
              />
            </div>
          </div>
          <div className="obj">
            <h3 className="base1">Career Objective:</h3>
            <p className="objd">{obj}</p>
          </div>
          <div className="section">
            <div className="left side">
              <div>
                <h2 className="base">Academic Background</h2>
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="td">BE</td>
                      <td />
                      <td className="td">
                        Sem 7:
                        {' '}
                        {sem7}
                      </td>
                      <td className="td">
                        Sem 8:
                        {' '}
                        {sem8}
                      </td>
                      <td rowSpan={4}>{pointer}</td>
                    </tr>
                    <tr>
                      <td className="td">TE</td>
                      <td />
                      <td className="td">
                        Sem 5:
                        {' '}
                        {sem5}
                      </td>
                      <td className="td">
                        Sem 6:
                        {' '}
                        {sem6}
                      </td>
                    </tr>
                    <tr>
                      <td className="td">SE</td>
                      <td />
                      <td className="td">
                        Sem 3:
                        {' '}
                        {sem3}
                      </td>
                      <td className="td">
                        Sem 4:
                        {' '}
                        {sem4}
                      </td>
                    </tr>
                    <tr>
                      <td className="td">FE</td>
                      <td />
                      <td className="td">
                        Sem 1:
                        {' '}
                        {sem1}
                      </td>
                      <td className="td">
                        Sem 2:
                        {' '}
                        {sem2}
                      </td>
                    </tr>
                    <tr>
                      <td className="td">Class X11</td>
                      <td />
                      <td colSpan={2}>HSC</td>
                      <td className="td">{ten}</td>
                    </tr>
                    <tr>
                      <td className="td">Class X</td>
                      <td />
                      <td colSpan={2}>SSC</td>
                      <td className="td">{twelve}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="base">Academic Achievements</h3>
                <ul>
                  <li>{acad1}</li>
                  <li>{acad2}</li>
                  <li>{acad3}</li>
                </ul>
              </div>
              <div>
                <h3 className="base">Additional information</h3>
                <ul>
                  <li>
                    Preffered Language :
                    {plang}
                  </li>
                  <li>
                    Other Languages:
                    {' '}
                    {tech}
                  </li>
                  <li>
                    Hobbies:
                    {' '}
                    {hobby}
                  </li>
                </ul>
              </div>
            </div>
            <div className="line" />
            <div className="right side">
              <div>
                <h1 className="base1">
                  <span className="dot">●</span>
                  {' '}
                  Certifications ▶▶▶
                </h1>
                <ul>
                  <li>{cert1}</li>
                  <li>{cert2}</li>
                  <li>{cert3}</li>
                </ul>
              </div>
              <div className="pin">
                <h1 className="base1">
                  <span className="dot">●</span>
                  {' '}
                  Projects and internships ▶▶▶
                </h1>
                <div>
                  <h3 className="subbase1">Projects</h3>
                  <ul>
                    <li>
                      {proj1}
                      {' '}
                      :
                      {' '}
                      {proj1des}
                    </li>
                    <li>
                      {proj2}
                      :
                      {proj2des}
                    </li>
                    <li>
                      {proj3}
                      :
                      {proj3des}
                    </li>
                  </ul>
                </div>
                <div style={{ display: 'inline-block' }}>
                  <h3 className="subbase1">Internships</h3>
                  <ul>
                    <li>
                      {intern1}
                      :
                      {intern1des}
                    </li>
                    <li>
                      {intern2}
                      :
                      {intern2des}
                    </li>
                    <li>
                      {intern3}
                      :
                      {intern3des}
                    </li>
                  </ul>
                </div>
                <div>
                  <div style={{ display: 'inline-block' }}>
                    <h1 className="base1">
                      <span className="dot">●</span>
                      {' '}
                      Extra curricular Achievements ▶▶▶
                    </h1>
                    <ul>
                      <li>{extra1}</li>
                      <li>{extra2}</li>
                      <li>{extra3}</li>
                    </ul>
                  </div>
                  <h1 className="base1">
                    <span className="dot">●</span>
                    {' '}
                    Position of Responsibility ▶▶▶
                  </h1>
                  <ul>
                    <li>{pos1}</li>
                    <li>{pos2}</li>
                    <li>{pos3}</li>
                  </ul>
                  <Button variant="contained" className="btn" onClick={handleResume}>Print resume</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SLayout>
  );
}

export default VProfile;
