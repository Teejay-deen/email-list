import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3232/user")

      .then((res) => setRecords(res?.data || []))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Do you want to delete");
    if (confirmDelete) {
      axios
        .delete("http://localhost:3232/user/" + id)
        .then((res) => {
          alert("Data deleted succesfuuly");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-end round-4">
        <Link to="/create" className="round-5 btn btn-sm btn-primary mt-1">
          ADD +
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
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
                  <Link
                    to={`/update/${d.id}`}
                    className="btn btn-sm btn-success"
                  >
                    UPDATE
                  </Link>
                  <button
                    onClick={(e) => handleDelete(d.id)}
                    className="btn ms-2 btn-sm btn-danger"
                  >
                    DELETE
                  </button>
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
