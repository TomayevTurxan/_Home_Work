import { Button, Table } from "antd";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BasketContextItem } from "../../../services/context/BasketItem";
import {
  decrementBasket,
  incrementBasket,
  removeFromBasket,
} from "../../../redux/slices/basketSlice";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const BasketAdmin = () => {
  // const { basketitem, setBasketItem } = useContext(BasketContextItem);

  const basketItems = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  const calculateBasket = (isIncrement, item) => {
    if (isIncrement) {
      dispatch(incrementBasket(item.id));
    } else {
      dispatch(decrementBasket(item.id));
    }
  };

  const removeItem = (productId) => {
    dispatch(removeFromBasket(productId));
  };

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
      filters: basketItems.map((product) => {
        return {
          text: product.description,
          value: product.description,
        };
      }),
      onFilter: (value, record) => record.description.indexOf(value) === 0,
    },
    {
      title: "Quantity",
      render: (text, record) => (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button onClick={() => calculateBasket(true, record)}>+</Button>
            <div
              style={{
                margin: "0px 5px",
              }}
            >
              {record.quantity}
            </div>
            <Button onClick={() => calculateBasket(false, record)}>-</Button>
          </div>
        </>
      ),
    },
    {
      title: "Edit",
      render: (text, record) => {
        console.log(record);
        return (
          <Button variant="outlined" color="error">
            Edit
          </Button>
        );
      },
    },
    {
      title: "Info",
      render: (text, record) => {
        console.log(record);
        return (
          <Button variant="outlined" color="primary">
            info
          </Button>
        );
      },
    },
    {
      title: "Remove",
      render: (text, record) => (
        <>
          <Button onClick={() => removeItem(record.id)}>Remove</Button>
        </>
      ),
    },
  ];

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>Categories</h2>
      <Table
        style={{ width: "70%", margin: "30px auto" }}
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={basketItems}
        onChange={onChange}
      />
    </>
  );
};

export default BasketAdmin;
