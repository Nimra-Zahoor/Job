import {useState,useEffect} from 'react'
import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
const [title,setTitle]=useState();
const [company_name,setCompanyName]=useState();
const [description,setDescription]=useState();
const [working_hours,setWorkingHours]=useState();
const [salary,setSalary]=useState();
const [salarytype,setSalaryType]=useState();
const [jobtype,setJobType]=useState();
const [currency,setCurrency]=useState();

const {id}=useParams();
//const history = useHistory();

const loadJobs=async()=>{
    const {data} = await axios.get('http://127.0.0.1:8000/Jobs/${id}/');
    console.log(data);
    setTitle(data.title);
    setCompanyName(company_name);
    setWorkingHours(data.working_hours);
    setSalary(data.salary);
    setSalaryType(data.salarytype);
    setJobType(data.jobtype);
    setCurrency(data.currency);
}
useEffect(()=>{
    loadJobs();
},[])

const updateJobs=async()=>{
    let formfeild = new FormData()
    formfeild.append('title',title);
    formfeild.append('company_name',company_name);
    formfeild.append('salary',salary);
    formfeild.append('salarytype',salarytype);
    formfeild.append('description',description);
    formfeild.append('working_hours',working_hours);
    formfeild.append('job_type',jobtype);
    formfeild.append('currency',currency);

}
axios({
    method: 'PUT',
    url:'http://127.0.0.1:8000/Jobs/${id}/',
  //  data:formfeild,
}).then(response=> {
    console.log(response.data)
  //  history.push('/')
})


  return (
      
     <div className="JobPostform">
          <div className="JobPostform-body">
              <div className="title">
                    <label className="JobPostform__label" >Title</label>
                    <br></br>
                    <input className="JobPostform__input"  onChange={(e) => { setTitle(e.target.value); }}type="text"  id="title" placeholder="Title"
                     />
              </div>
              
                <div className="form-group">
                    <label className="JobPostform__label">Description </label>
                    <br></br>
                    <textarea className="JobPostform-control"   onChange={(e) => { setDescription(e.target.value); }} id="description" rows="4"
                    placeholder="Description"></textarea>
                </div>
              <div className="companyname">
                    <label className="JobPostform__label"  >Company Name     </label>
                    <br></br>
                  <input  type="text" onChange={(e) => { setCompanyName(e.target.value); }}id="companyname" className="JobPostform__input" placeholder="Company Name"/>
              </div>
              <div className="workinghours">
                    <label className="JobPostform__label" >Working Hours(per week)  </label>
                    <br></br>
                    <input className="JobPostform__input" type="number" onChange={(e) => { setWorkingHours(e.target.value); }}      id="workinghours" placeholder="Working Hours" />
              </div>
              <div className="salary">
                    <label className="JobPostform__label" >Salary    </label>
                    <br></br>
                  <input className="JobPostform__input" type="number" onChange={(e) => { setSalary(e.target.value); }} id="salary" placeholder="Salary"/>
                </div>
                <div className="form-group">
                <label className="JobPostform__label">Type of payable salary  </label>
                <select className="JobPostform-control" onChange={(e) => { setSalaryType(e.target.value); }} id="salarytype">
                   <option>Per Year</option>
                   <option>Per Month</option>
                </select>
                </div>
                <div className="form-group">
                <label className="JobPostform__label">Currency  </label>
                <select className="JobPostform-control" onChange={(e) => { setCurrency(e.target.value); }} id="currencytype">
                   <option>Rs/-</option>
                   <option>$</option>
                   <option>€</option>
                </select>
                </div>
                <div className="form-group">
                <label className="JobPostform__label">Job Type  </label>
                <select className="JobPostform-control" onChange={(e) => { setJobType(e.target.value); }} id="jobtype">
                   <option>Full-Time</option>
                   <option>Part-Time</option>
                   <option>Internship</option>
                    </select>
                
                </div>
                
          </div>
          <div className="JobPostfooter">
              <button  type="submit" className="JobPostbtn">Post Job</button>
          </div>

    </div>
  )
}

export default Update;