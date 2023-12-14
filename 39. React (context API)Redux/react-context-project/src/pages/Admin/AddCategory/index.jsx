import { Button, FormControl, Input } from "@mui/material";
import { useState } from "react";
import { postCategory } from "../../../services/api/category";

const AddCategory = () => {
  let [currentName, setCurrentName] = useState("");
  let [currentDesc, setCurrentDesc] = useState("");

  const handleSubmit = () => {
    postCategory({ name: currentName, description: currentDesc });
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          setCurrentName("");
          setCurrentDesc("");
          alert("add olundu");
        }}
      >
        <input
          onChange={(e) => {
            setCurrentName(e.target.value);
          }}
          value={currentName}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => {
            setCurrentDesc(e.target.value);
          }}
          value={currentDesc}
          type="text"
          placeholder="description"
        />
        <Button type="submit">Add Category</Button>
      </form>
    </>
  );
};

export default AddCategory;
