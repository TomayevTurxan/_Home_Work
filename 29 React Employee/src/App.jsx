/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Employees from "./components/Employees";

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [averageSalary, setAverageSalary] = useState(null);
  return (
    <>
      <h1>Employees Table</h1>
      <AddEmployee
        employees={employees}
        name={name}
        surname={surname}
        age={parseInt(age)}
        salary={parseFloat(salary)}
        filteredEmployees={filteredEmployees}
        averageSalary={averageSalary}
        setEmployees={setEmployees}
        setName={setName}
        setSurname={setSurname}
        setAge={setAge}
        setSalary={setSalary}
        setFilteredEmployees={setFilteredEmployees}
        setAverageSalary={setAverageSalary} 
      />
      <Employees
        employees={employees}
        name={name}
        surname={surname}
        age={parseInt(age)}
        salary={parseFloat(salary)}
        filteredEmployees={filteredEmployees}
        averageSalary={averageSalary}
        setEmployees={setEmployees}
        setName={setName}
        setSurname={setSurname}
        setAge={setAge}
        setSalary={setSalary}
        setFilteredEmployees={setFilteredEmployees}
        setAverageSalary={setAverageSalary}
      />
    </>
    
  );
}

export default App;
