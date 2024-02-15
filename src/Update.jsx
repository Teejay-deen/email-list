import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3232/user/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <form action="">
          <div>
            <label htmlFor="name">
              ID <span className="text-danger">*</span>
            </label>
            <input
              disabled
              type="text"
              name="name"
              className="form-control"
              value={data.name}
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
              value={data.name}
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
              value={data.email}
            />
          </div>
          <br />
          <button className="btn btn-info round-4">Update   </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
