/* eslint-disable no-unused-vars */
import React from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import moment from "moment";
import EmployeeTableRow from "./EmployeeTableRow";

const Employees = ({
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
      <div className="buttons">
        <button
          onClick={() => {
            let filtiredEmployess = employees.filter((x) => x.isFired);
            setEmployees([...filtiredEmployess]);
          }}
        >
          Filter fired employees
        </button>
        <button
          onClick={() => {
            let filterAge = employees.sort((a, b) => a.age - b.age);
            setEmployees([...filterAge]);
          }}
        >
          Sort by Age
        </button>

        <button
          onClick={() => {
            let filterSalary = employees.sort((a, b) => a.salary - b.salary);
            setEmployees([...filterSalary]);
          }}
        >
          Sort by Salary
        </button>
        <button
          onClick={() => {
            if (employees.length == 0) {
              setAverageSalary(null);
            } else {
              const totalSalary = employees.reduce(
                (previousValue, employee) =>
                  previousValue + parseFloat(employee.salary),
                0
              );
              const average = totalSalary / employees.length;
              setAverageSalary(average.toFixed(2));
            }
          }}
        >
          Sort by average Salary{" "}
        </button>
      </div>
      <span>
        Average salary:{averageSalary !== null ? `AZN${averageSalary}` : ""}
      </span>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Date</th>
            <th>Done</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {(filteredEmployees.length > 0 ? filteredEmployees : employees).map(
            (employee, idx) => (
              <EmployeeTableRow
              key={idx}
              employee={employee}
              employees={employees}
              setEmployees={setEmployees}
              />
            )
          )}
        </tbody>
      </table>
    </>
  );
};

Employees.propTypes = {
    employees: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    salary: PropTypes.number.isRequired,
    filteredEmployees: PropTypes.array.isRequired,
    averageSalary: PropTypes.number.isRequired,
    setEmployees: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    setSurname: PropTypes.func.isRequired,
    setAge: PropTypes.func.isRequired,
    setSalary: PropTypes.func.isRequired,
    setFilteredEmployees: PropTypes.func.isRequired,
    setAverageSalary: PropTypes.func.isRequired,
  };
export default Employees;
