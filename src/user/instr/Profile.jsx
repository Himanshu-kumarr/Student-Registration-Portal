import React from 'react';
import "./InstrHome.css";

const Academic = () => {
  return (
    <div className="profile-class">
          <div className="profile-class-2">
            <div className="profile-heading">
              <h5 className="profile-heading-text">User Profile (name)</h5>
            </div>  
            <div className="table-class">
              <div className="user-detail">
                <img src="/dummy-profile.jpeg" />
                <div style={{color:"black"}}>                
                  <h5>General Information</h5>
                  <table>
                      <tbody>
                          
                  <tr>
                      <td>Name</td>
                      <td>Himanshu</td>
                  </tr>
                  <tr>
                      <td>Roll Number</td>
                      <td>220101046</td>
                  </tr>
                  <tr>
                      <td>email id</td>
                      <td>abcd@gmail.com</td>
                  </tr>
                  <tr>
                      <td>Mobile No</td>
                      <td>****997881</td>
                  </tr>
                  <tr>
                      <td>Department</td>
                      <td>CSE</td>
                  </tr>
                  <tr>
                      <td>Address</td>
                      <td>xyz, city-efgh, state-sjnjn, 12345</td>
                  </tr>
                      </tbody>
                  </table>
                </div>

              </div>              
          </div>
          </div>          
        </div>
  );
}

export default Academic;
