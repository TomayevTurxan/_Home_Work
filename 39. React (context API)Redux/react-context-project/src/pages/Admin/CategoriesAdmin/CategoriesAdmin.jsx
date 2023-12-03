import { Button, Table } from "antd";
import { useContext, useEffect, useState } from "react";
import { getAllCategories } from "../../../services/api/category";
import Swal from "sweetalert2";
import { BasketContextItem } from "../../../services/context/BasketItem";
import { UserContext } from "../../../services/context/UserContext";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket } from "../../../redux/slices/basketSlice";
import { CategoryContextItem } from "../../../services/context/Categories";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const CategoriesAdmin = () => {
  // let [categories, setCategories] = useState([]);
  let { categories, setCategories } = useContext(CategoryContextItem);
  const basketItems = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  const { user } = useContext(UserContext);
  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  const addBasket = (product) => {
    dispatch(addToBasket(product));
    Swal.fire({
      position: "bottom-end",
      icon: "success",
      title: `${product.name} added to basket`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  //columns
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Description",
      dataIndex: "description",
      filters: categories.map((category) => {
        return {
          text: category.description,
          value: category.description,
        };
      }),
      onFilter: (value, record) => record.description.indexOf(value) === 0,
    },
    {
      title: "Basket",
      render: (text, record) => {
        console.log(record);
        return (
          <Button
            onClick={() => {
              addBasket(record);
            }}
            type="primary"
          >
            Basket
          </Button>
        );
      },
    },
    // {
    //   title: "Edit",
    //   render: (text, record) => {
    //     console.log(record);
    //     return (
    //       <Button variant="outlined" color="error">
    //         Edit
    //       </Button>
    //     );
    //   },
    // },
    // {
    //   title: "Remove",
    //   render: (text, record) => {
    //     console.log(record);
    //     return (
    //       <Button variant="outlined" color="error">
    //         Remove
    //       </Button>
    //     );
    //   },
    // },
  ];
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>Categories</h2>
      <Table
        style={{ width: "70%", margin: "30px auto" }}
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={categories}
        onChange={onChange}
      />
      ;
    </>
  );
};

export default CategoriesAdmin;
