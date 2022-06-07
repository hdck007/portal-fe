import React from 'react';
import './table.css';

function Resume() {
  return (
    <div>
      <div className="pdf">
        <div className="udetail">
          <div className="info">
            <h3 className="uinfo">Name:</h3>
            <h3 className="uinfo">Gender:</h3>
            <h3 className="uinfo">Email:</h3>
            <h3 className="uinfo">Mob:</h3>
            <h3 className="uinfo">LinkedIn</h3>
          </div>
          <div>
            <img alt="pimage" id="pimage" src="download.png" />
          </div>
          <div className="logo">
            <img alt="pimage" className="img" src="logo1.jpeg" />
          </div>
        </div>
        <div className="obj">
          <h1 className="base1">Career Objective</h1>
          <p className="objd">Lorem ipsum dolor sit amet, consectet</p>
        </div>
        <div className="section">
          <div className="left side">
            <div>
              <h2 className="base">Academic Background</h2>
              <table className="table">
                <tbody>
                  <tr>
                    <td>BE</td>
                    <td />
                    <td>Sem 7</td>
                    <td>Sem 8</td>
                    <td rowSpan={4}>three</td>
                  </tr>
                  <tr>
                    <td>TE</td>
                    <td />
                    <td>Sem 5</td>
                    <td>Sem 6</td>
                  </tr>
                  <tr>
                    <td>SE</td>
                    <td />
                    <td>Sem 3</td>
                    <td>Sem 4</td>
                  </tr>
                  <tr>
                    <td>FE</td>
                    <td />
                    <td>Sem 1</td>
                    <td>Sem 2</td>
                  </tr>
                  <tr>
                    <td>Class X11</td>
                    <td />
                    <td colSpan={2}>HSC</td>
                    <td>three</td>
                  </tr>
                  <tr>
                    <td>Class X</td>
                    <td />
                    <td colSpan={2}>SSC</td>
                    <td>three</td>
                  </tr>
                </tbody>

              </table>
            </div>
            <div>
              <h3 className="base">Academic Achievements</h3>
              <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
              </ul>
            </div>
            <div>
              <h3 className="base">Additional information</h3>
              <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
              </ul>
            </div>
          </div>
          <div className="line" />
          <div className="right side">
            <div>
              <h1 className="base1">Certifications</h1>
              <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
              </ul>
            </div>
            <div className="pin">
              <h1 className="base1">Projects and internships</h1>
              <div>
                <h3 className="base1">Projects</h3>
                <ul>
                  <li>one</li>
                  <li>two</li>
                  <li>three</li>
                </ul>
              </div>
              <div style={{ display: 'inline-block' }}>
                <h1 className="base1">Internships</h1>
                <ul>
                  <li>one</li>
                  <li>two</li>
                  <li>three</li>
                </ul>
              </div>
              <div>
                <div style={{ display: 'inline-block' }}>
                  <h1 className="base1">Extra curricular Achievements</h1>
                  <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                  </ul>
                </div>
                <h1 className="base1">Position of Responsibility</h1>
                <ul>
                  <li>one</li>
                  <li>two</li>
                  <li>three</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
