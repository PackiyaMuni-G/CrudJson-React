import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



const StudentList = () => {
   
    const [studData, setStudData] = useState([]);
    const navigate = useNavigate()
    const LoadEdit = (id) => {
        navigate("/student/edit/" + id);
    }
    const ReadDetail=(id)=>{
        navigate('/student/detail/'+ id)
    }
    const DeleteStud = (id) => {
        fetch('http://localhost:3000/student/' + id, {
            method: 'DELETE',

        }).then((res) => {
            alert('deleted successfully')
            window.location.reload()
            console.log('deleted successfully');
            

        })
        .catch((err) => {
            console.log(err.message);
        })

    }
    useEffect(() => {
        fetch("http://localhost:3000/student")
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                setStudData(data)
                console.log('Fetched data:', data); // Log fetched data
            })
            .catch((err) => {
                console.error('Failed to fetch data:', err); // Log error
            });
    }, []);

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2 style={{ textAlign: 'center' }}>Credo Student List</h2>

                </div>
                <div className="card-body">
                    <Link to='/student'>

                        <button className='btn btn-success' >Add New
                        </button>
                    </Link>
                    <table className='table table-bordered' >
                        <thead className='thead-heading'>
                            <tr>
                                <td>
                                    ID
                                </td>
                                <td>
                                    Name
                                </td>
                                <td>
                                    Course
                                </td>
                                <td>
                                    Action
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                studData &&
                                studData.map((detail,index) => (
                                   
                                    <tr key={index}>
                                         <td>{index + 1}</td>
                                        <td>{detail.name}</td>
                                        <td>{detail.course}</td>
                                        <td>
                                            <div className="btn-container">
                                            <button className='btn btn-success' onClick={() => LoadEdit(detail.id)} >Update</button>
                                            <button className='btn btn-danger' onClick={() => DeleteStud(detail.id)} >Delete</button>
                                            <button className='btn btn-primary' onClick={()=>ReadDetail(detail.id)}>Read</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))

                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default StudentList