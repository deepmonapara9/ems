/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123') {
      setUser('admin')
      // console.log('Admin logged in');
    } else if(email == 'user@me.com' && password == '123') {
      setUser('employee')
      // console.log('Employee logged in');
    }
     else {
      alert('Invalid credentials');
    }
  }

  // handleLogin('user@me.com', '123') 

  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
  })

  const data = useContext(AuthContext)
  // console.log(data);

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App