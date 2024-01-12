import React, { useState } from "react";
import "./App.css";

interface FormData {
  name: string;
  surname: string;
  age: number;
  type: string;
  salary: number;
  skills: string;
  position: string;
  groupName: string;
  gpa: number;
  hobbies: string;
}

const HumanTask = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    surname: "",
    age: 0,
    type: "default",
    salary: 0,
    skills: "",
    position: "",
    groupName: "",
    gpa: 0,
    hobbies: "",
  });

  const [humanData, sethumanData] = useState<FormData[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(" name",name)
    console.log(" value",value)
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
  
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sethumanData((prevhumanData) => [...prevhumanData, formData]);
    setFormData({
      name: "",
      surname: "",
      age: 0,
      type: "default",
      salary: 0,
      skills: "",
      position: "0",
      groupName: "",
      gpa: 0,
      hobbies: "",
    });
  };

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      name: "",
      surname: "",
      age: 0,
      type: "default",
      salary: 0,
      skills: "",
      position: "0",
      groupName: "",
      gpa: 0,
      hobbies: "",
    });
  };

  const showEmployee = formData.type === "1";
  const showStudent = formData.type === "0";
console.log("formData",formData.type)
  return (
    <>
      <form id="create" onSubmit={handleSubmit} onReset={handleReset}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="surname"
          type="text"
          placeholder="Surname"
          required
          value={formData.surname}
          onChange={handleChange}
        />
        <input
          name="age"
          type="number"
          min={0}
          placeholder="Age"
          required
          value={formData.age}
          onChange={handleChange}
        />

        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="default" disabled>
           Human
          </option>
          <option value="0">Student</option>
          <option value="1">Employee</option>
        </select>

        <div className={showEmployee ? "show" : "hide"}>
          <input
            name="salary"
            type="number"
            min={0}
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
          />
          <input
            name="skills"
            type="text"
            placeholder="Skills"
            value={formData.skills}
            onChange={handleChange}
          />
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
          >
            <option value="0">Developer</option>
            <option value="1">Designer</option>
            <option value="2">Marketing</option>
            <option value="3">SMM</option>
            <option value="4">HR</option>
            <option value="5">CEO</option>
          </select>
        </div>

        <div className={showStudent ? "show" : "hide"}>
          <input
            name="groupName"
            type="text"
            placeholder="Group Name"
            value={formData.groupName}
            onChange={handleChange}
          />
          <input
            name="gpa"
            type="number"
            min={0}
            placeholder="GPA"
            value={formData.gpa}
            onChange={handleChange}
          />
          <input
            name="hobbies"
            type="text"
            placeholder="Hobbies"
            value={formData.hobbies}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Add</button>
        <button type="reset">Cancel</button>
      </form>
      <hr />
      <ul id="people">
        {showStudent? humanData.map((person, idx) => (
          <li key={idx}>
            Ad:{person.name} Soyad:{person.surname} Yaş{person.age} Gruo adi:
            {person.groupName} GPA:
            {person.gpa} Hobbi:{person.hobbies} -{" "}
            {person.type === "1" ? "Employee" : "Student"}
          </li>
        )):
        humanData.map((person, idx) => (
          <li key={idx}>
              Ad:{person.name} Soyad:{person.surname} Yaş{person.age} Salary:
              {person.salary} Bacariqlar:
              {person.skills} Is sahesi: {person.position} -{" "}
              {person.type === "0" ? "Employee" : "Student"}
            </li>
          ) 
        )}
      </ul>
    </>
  );
};

export default HumanTask;
