import React from 'react'
import AllTask from "../Other/AllTask";
import CreateTask from "../Other/CreateTask";
import Header from "../Other/Header";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
