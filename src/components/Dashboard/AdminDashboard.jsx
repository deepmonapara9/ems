// eslint-disable-next-line no-unused-vars
import React from 'react'
import AllTask from "../Other/AllTask";
import CreateTask from "../Other/CreateTask";
import Header from "../Other/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
