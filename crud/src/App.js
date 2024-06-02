
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentList from './StudentList';
import StudCreate from './StudCreate';
import StudEdit from './StudEdit';

import StudRead from './StudRead';
function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>CRUD Operations using JSON</h1>
      <BrowserRouter>
        <Routes>
      <Route path='/' element={<StudentList/>}></Route>
      <Route path='/student' element={<StudCreate/>}></Route>
      <Route path='/student/edit/:studid' element={<StudEdit/>}></Route>
     
      <Route path='/student/detail/:studid' element={<StudRead/>}></Route>
    

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
