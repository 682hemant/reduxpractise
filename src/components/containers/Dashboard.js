import React, { useState } from 'react';
import { Link } from 'react-router-dom'



const Dashboard = () => {

  return (
    <div>
      <h1>hello from dashboard</h1>
      <Link to="/">
        <button>
          Logout
        </button>
      </Link>
    </div>
  )
}
export default Dashboard;
