import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
//import { Route, useLocation} from 'react-router-dom';
import React, { Component }  from 'react';
import './App.css';

function App() {
  const [newName, setNewName] = useState("");
  const [users, setUsers] = useState([]);
  var query=window.location.search;
  var USP=new URLSearchParams(query)
  var id=USP.get('id')
  var name=USP.get('name')

  if(id===null && name===null){
    name="No Restaurant";
  }
  const usersCollectionRef = collection(db, "bsVjiccW65PWZmyHj63EVlIzW4g2");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
    console.log(id);
  }, []);

  return (
    <div >
      <br></br>
      <h3 className="resto-name">
        {name}
      </h3>
      <br>
      </br>
      <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-6">
            <table className="menu-table">
              <tr>
                <th className="tname">Name</th>
                <th className="tprice">Price</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
      {users.map((user) => {
        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-6">
                <table className="menu-table">
                  <tr className="tdata">
                    <td className="tname">{user.name}</td>
                    <td className="tprice">{user.price}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        );
      })}
      </div> 
    </div>);
}

export default App;