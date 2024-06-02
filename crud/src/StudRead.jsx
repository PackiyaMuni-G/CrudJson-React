import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const StudRead = () => {
    const { studid } = useParams();
    const [studdata, setStudData] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/student/" + studid)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                setStudData(data);
                console.log('Fetched data:', data); // Log fetched data
            })
            .catch((err) => {
                console.error('Failed to fetch data:', err); // Log error
            });
    }, [studid]);

    return (
        <div style={{ padding: '30px', backgroundColor: '#f0f0f0' }}>
            {studdata &&
                <>
                    <h1 style={{ color: 'navy' }}>The student name is: <span style={{ color: 'black' }}>{studdata.name}</span></h1>
                    <h5 style={{ color: 'darkred' }}>Course: <span style={{ fontWeight: 'bold' }}>{studdata.course}</span></h5>
                  <Link to='/'><button className='btn btn-primary'>Back</button></Link>  
                </>
            }
        </div>
    );
}

export default StudRead;

