import React from 'react'
import './table.css'
import axios from 'axios'
import {useEffect,useState} from 'react'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'


function JobTable() {
   
    const [JobModels,setJobModels]=useState([]);
    const getJobModels =async ()=>{
        const response = await axios.get('http://127.0.0.1:8000/Jobs/');
         
        console.log(response.data);
        setJobModels(response.data);
    }
    useEffect(()=>{
        getJobModels()
    },[])
  
    const deleteJob =async(id)=>{
     
      await axios.delete('http://127.0.0.1:8000/Jobs/${id}/')
      .then(response => {
        this.setState({ status: response.status });
    })
      
    }
       
      
 return (
    <>
  
    <Table responsive striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Id</th>
      <th>Job Title</th>
      <th>Company Name</th>
      <th>Job Type</th>
      <th>Job Hours</th>
      <th>Salary</th>
      <th>Salary Type</th>
      <th>Currency</th>
      <th>Action</th>
      
      
    
    </tr>
  </thead>
 
 
 <tbody className='bdt'>

  {


 JobModels.map((JobModel,index)=>(
    <tr> 
                  <td>{JobModel.id}</td>
                  <td>{JobModel.title}</td>
                  <td>{JobModel.company_name}</td>
                  <td>{JobModel.jobtype}</td>
                  <td>{JobModel.working_hours}</td>
                  <td>{JobModel.salary}</td>
                  <td>{JobModel.salarytype}</td>
                  <td>{JobModel.currency}</td>
                   <td > <Button variant="success">Update</Button>
                  <br/><br/> <Button variant="danger" onClick={()=> deleteJob(JobModel.id)}>Delete</Button></td>  
           </tr>
        )
        )
    }
                  </tbody>
                  </Table>
 

    
    
  
  
    
       
    </>
  
         )  
 }
export default JobTable