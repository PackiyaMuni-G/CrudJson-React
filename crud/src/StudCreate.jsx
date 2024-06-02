import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const StudCreate = () => {
    const[id]=useState('');
    const[name,setName]=useState('');
    const[course,setCourse]=useState('');
    const navigate =useNavigate();
    const handlesubmit=(e)=>{
                   e.preventDefault()
                   console.log(id,name,course);
                  const studdata={name,course};
                
         fetch('http://localhost:3000/student',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(studdata)
         }

         ).then((res)=>{
            alert('created successfully ' )
             navigate('/')

         }).catch((err)=>{
            console.log('error occured'+err.message);
         }
        )

    }

  
  return (
    <>
    <div className="row">
        <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{textAlign:'center'}}>
                <div className="card-title">
                    <h1>Create Student List</h1>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className='col-lg-12'>
                        <div className='form-group'>
                            <label>Id:</label>
                            <input type="number"  value={id} disabled="disabled" className='form-control' /> <br /> <br />
                            <label >Name:</label>
                            <input type="text" value={name}  className='form-control'  onChange={(e)=>setName(e.target.value)} /> <br /> <br />
                            <label>Course:</label>
                            <input type="text" value={course} className='form-control'  onChange={(e)=>setCourse(e.target.value)}/> <br /> 
                            <div className="btn-container">
                            <button className='btn btn-success' type='submit'>Save</button>
                          <Link to='/'>  <button className='btn btn-danger'>Back</button></Link> 
                          </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    </div>
    </>
  )
}

export default StudCreate