import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "./config";

const Update = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit =(e)=>{
    e.preventDefault();

    axios.put("http://localhost:3232/user/" +id, data).then(res =>{
        alert ("edit was succesfully")
        navigate("/")
    }).catch(err=>{console.log(err)})
  }
  
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              ID <span className="text-danger">*</span>
            </label>
            <input
              disabled
              type="text"
              name="name"
              className="form-control"
              value={data.id}
            />
          </div>
          <div>
            <label htmlFor="name">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              defaultValue={data.name}
              onChange={e=>setData({...data, name: e.target.value})}
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
              defaultValue={data.email}
              onChange={e=>setData({...data, email: e.target.value})}
            />
          </div>
          <br />
          <button className="btn btn-info round-4">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
