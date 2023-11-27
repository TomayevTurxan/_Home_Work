import { useState } from "react";
import { postCategory } from "../../../services/requests/categoryRequest";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@mui/material";

const AddCategory = () => {
  let [newCategory, setNewCategory] = useState({ name: "", description: "" });
  let navigate = useNavigate();

  return (
    <form
      onSubmit={async(e) => {
        e.preventDefault();
        await postCategory(newCategory);
        navigate('/admin/categories');
        setNewCategory({name: '',description:''});
      }}
    >
      <Input
        onChange={(e) => {
          setNewCategory({ ...newCategory, name: e.target.value });
        }}
        value={newCategory.name}
        placeholder="enter name"
        type="text"
      />
      <Input
        onChange={(e) => {
          setNewCategory({ ...newCategory, description: e.target.value });
        }}
        value={newCategory.description}
        placeholder="enter description"
        type="text"
      />
      <Button variant="contained" type="submit">add</Button>
    </form>
  );
};

export default AddCategory;