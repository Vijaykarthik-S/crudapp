import logo from "./logo.svg";
import "./App.css";
import Department from '../src/Components/Departmentcrud.jsx';
import Header from '../src/Components/Header';
import { useState } from 'react';
import { AuthProvider } from '../src/Components/AuthContext';
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../src/Components/ProtectedRoute';
import Login from '../src/Components/Login';
import Home from '../src/Components/Home';
import {getDepartments,createDepartment,updateDepartment,deleteDepartment} from '../src/Services/DepartmentService.jsx';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header/>
            <div className="content">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route element={<ProtectedRoute/>}>
                  <Route path='/departments' element={<Department/>}/>
                  <Route path="/departmentservice" element={<getDepartments/>}/>
                  <Route path="/departmentservice" element={<createDepartment/>}/>
                  <Route path="/departmentservice" element={<updateDepartment/>}/>
                  <Route path="/departmentservice" element={<deleteDepartment/>}/>
                </Route>
              </Routes>
            </div>
          
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;