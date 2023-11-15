/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from "prop-types";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";


const EmployeeTableRow = ({
   employee,
   idx,
   setEmployees,
   employees    
}) => {
  return (
    <>
        <tr
                style={{ color: employee.isFired ? "red" : "black" }}
                key={idx}
              >
                <td>{employee.name}</td>
                <td>{employee.surname}</td>
                <td>{employee.age}</td>
                <td>{employee.salary}</td>
                <td>
                  <em>
                    {moment(employee.createdAt).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </em>
                </td>
                <td>
                  <button
                    onClick={(e) => {
                      let updatedEmployees = employees.find(
                        (x) => x.id === employee.id
                      );
                      updatedEmployees.isFired = true;
                      e.target.closest("tr").style.color = "red";
                      setEmployees([...employees]);
                    }}
                  >
                    Fire
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => {
                      let filtiredEmployess = employees.filter(
                        (x) => x.id !== employee.id
                      );
                      if (window.confirm("are you sure to delete?")) {
                        setEmployees([...filtiredEmployess]);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button onClick={() => {}}>Edit</button>
                </td>
              </tr>
    </>
  )
}


EmployeeTableRow.propTypes = {
    employees: PropTypes.func.isRequired,
    employee: PropTypes.array.isRequired,
    idx: PropTypes.string.isRequired,
    setEmployees: PropTypes.func.isRequired,
  };
export default EmployeeTableRow