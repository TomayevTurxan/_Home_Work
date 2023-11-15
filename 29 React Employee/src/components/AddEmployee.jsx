/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const AddEmployee = ({
  employees,
  name,
  surname,
  age,
  salary,
  filteredEmployees,
  averageSalary,
  setEmployees,
  setName,
  setSurname,
  setAge,
  setSalary,
  setFilteredEmployees,
  setAverageSalary,
}) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (name.trim().length < 3 && surname.trim().length < 3) {
            window.alert("table item length should be at least 3 characters!");
          } else {
            let newEmployees = {
              id: uuidv4(),
              name: name,
              surname: surname,
              age: age,
              salary: salary,
              isFired: false,
              createdAt: new Date(),
              updatedAd: false,
            };
            console.log(newEmployees);
            setEmployees([...employees, newEmployees]);
            setName("");
            setSurname("");
            setAge("");
            setSalary("");
          }
        }}
      >
        <input
          type="text"
          placeholder="search employees"
          onChange={(e) => {
            let searchEmployees = [...employees].filter((x) =>
              x.name.trim().toLowerCase().includes(e.target.value)
            );
            setFilteredEmployees([...searchEmployees]);
          }}
        />
        <br></br>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter age"
          value={isNaN(age) ? '' : age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter salary"
          value={isNaN(salary) ? '' : salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />

        <button type="submit">Add employees</button>
      </form>
    </>
  );
};

AddEmployee.propTypes = {
  employees: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  salary: PropTypes.number.isRequired,
  filteredEmployees: PropTypes.array.isRequired,
  averageSalary: PropTypes.number,
  setEmployees: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setSurname: PropTypes.func.isRequired,
  setAge: PropTypes.func.isRequired,
  setSalary: PropTypes.func.isRequired,
  setFilteredEmployees: PropTypes.func.isRequired,
  setAverageSalary: PropTypes.func.isRequired,
};
export default AddEmployee;
