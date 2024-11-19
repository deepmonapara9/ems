/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // this will set the local storage with the employees and admin data
  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");

      //this will set the role of admin while logging in
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      // console.log('Admin logged in');
    } else if (authData) {
      const employee = authData.employee.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
      // console.log('Employee logged in');
    } else {
      alert("Invalid credentials");
    }
  };

  // handleLogin('user@me.com', '123')

  useEffect(() => {
    // setLocalStorage()
    getLocalStorage();
  });

  const data = useContext(AuthContext);
  // console.log(data);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : (user == "employee" ? <EmployeeDashboard data={loggedInUserData} /> : null )}
    </>
  );
};

export default App;
