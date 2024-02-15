import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {

    const navigate= useNavigate()

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });

  
  const handleSubmit =(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3232/user", inputData).then(res=>{
        alert("Data added successfully! ")
        navigate("/")

    }).catch(err =>console.log(err))
}
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="name">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-info round-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
