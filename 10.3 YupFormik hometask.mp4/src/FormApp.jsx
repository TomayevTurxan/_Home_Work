import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useFormik } from "formik";
import { registerSchema } from "./validation/formValidation";
import "./App.css";

const FormApp = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  console.log(selectedCategory);

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  // console.log(categories);

  const formik = useFormik({
    initialValues: {
      name: "",
      unitPrice: 0,
      unitStock: 0,
      quantityUnit: "",
      isDiscounted: false,
    },
    onSubmit: async (values, actions) => {
      // console.log("Form Values:", values);
      // console.log("Form actions:", actions);
      actions.resetForm();
      try {
        const response = await fetch(
          "https://northwind.vercel.app/api/products",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        if (response.ok) {
          setSuccessMessage('Product added successfully!')
          handleClick();
        } else {
          alert("PROBLEM VAR BRAT");
        }
      } catch (error) {
        console.error("PROBLEM VAR BRAT", error);
      }
    },
    validationSchema: registerSchema,
  });

  return (
    <>
       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {successMessage}
        </Alert>
      </Snackbar>
      ;
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="formText">
          <h3>Product Add Form</h3>
          <a href="https://northwind.vercel.app/api/products">
            Api link to check
          </a>
          <div style={{ textAlign: "center" }}>
            <Box sx={{ minWidth: "120px", margin: "20px 0px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Categories
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id={selectedCategory.categoryId}
                  name="select"
                  value={selectedCategory}
                  label="categories"
                  onChange={handleChange}
                  error={formik.touched.select && formik.errors.select}
                  helperText={formik.touched.select && formik.errors.select}
                >
                  {categories &&
                    categories.map((category, idx) => (
                      <MenuItem key={idx} value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Box>
          </div>
          <div style={{ display: "flex" }}>
            <TextField
              error={formik.touched.name && formik.errors.name}
              helperText={formik.touched.name && formik.errors.name}
              name="name"
              label="Name"
              variant="outlined"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <TextField
              error={formik.touched.unitPrice && formik.errors.unitPrice}
              helperText={formik.touched.unitPrice && formik.errors.unitPrice}
              name="unitPrice"
              id="outlined-number"
              label="UnitPrice"
              type="number"
              value={formik.values.unitPrice}
              onChange={formik.handleChange}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center",margin:"20px 0px" }}>
            <TextField
              error={formik.touched.unitStock && formik.errors.unitStock}
              helperText={formik.touched.unitStock && formik.errors.unitStock}
              name="unitStock"
              id="outlined-number"
              label="Unit in Stock"
              type="number"
              value={formik.values.unitStock}
              onChange={formik.handleChange}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="isDiscounted"
                  defaultChecked={formik.values.isDiscounted}
                  onChange={formik.handleChange}
                />
              }
              label="isDiscounted"
            />
          </div>
          <TextField
            error={formik.touched.quantityUnit && formik.errors.quantityUnit}
            helperText={
              formik.touched.quantityUnit && formik.errors.quantityUnit
            }
            name="quantityUnit"
            id="outlined-basic"
            label="Quantity Per Unit"
            variant="outlined"
            value={formik.values.quantityUnit}
            onChange={formik.handleChange}
          />
          <br></br>
          <Button
            style={{ margin: "20px" }}
            color="success"
            type="submit"
            variant="outlined"
            onClick={handleClick}
          >
            ADD PRODUCT API
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormApp;
