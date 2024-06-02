import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const StudEdit = () => {
  const { studid } = useParams()
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/student/" + studid).then((res) => {
      return res.json();
    }).then((resp) => {
      setId(resp.id)
      setName(resp.name)
      setCourse(resp.course)
    })
  }, [studid])
  const handlesubmit = (e) => {
    e.preventDefault()
    const studdata = { id, name, course };
    console.log(studdata + "Checking purpose")  

    fetch('http://localhost:3000/student/' + studid, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(studdata)
    }

    ).then((res) => {
      alert('updated successfully' )
      navigate('/')

    }).catch((err) => {
      console.log('error occured' + err.message);
    }
    ).catch((err) => {
      console.log(err.message);
    })

  }

  return (
    <>

      <div className="row">
        <form className="container" onSubmit={handlesubmit}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div className="card-title">
              <h1> Student Edit</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className='col-lg-12'>
                  <div className='form-group'>
                    <label htmlFor='id'>Id:</label>
                    <input type="number" id="id" value={id} className='form-control'></input>  <br /> <br />
                    <label htmlFor='name'>Name:</label>
                    <input type="text" id="name" className='form-control' value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />
                    <label htmlFor='course'>Course:</label>
                    <input type="text" id="course" className='form-control' value={course} onChange={(e) => setCourse(e.target.value)} /> <br />
                    <div className="editbutton">
                    <button className='btn btn-success'>update</button>
                      <Link to='/'><button className='btn btn-danger'>Back</button></Link>   
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

export default StudEdit