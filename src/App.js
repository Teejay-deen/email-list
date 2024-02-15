import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  // const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3232/user")
      // .then((res) => setColumns(Object.keys(res.data[0])))
      .then((res) => setRecords(res?.data || []))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-end round-4">
        <Link to="/create" className="round-5 btn btn-sm btn-primary mt-1">ADD +</Link>
      </div>
      <table className="table">
        <thead>
          <tr >
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => {
            return (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                  <Link to={`/update/${d.id}`} className="btn btn-sm btn-success">UPDATE</Link>
                  <Link to="/" className="btn ms-2 btn-sm btn-danger">DELETE</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
