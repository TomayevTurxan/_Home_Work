import { Button, Table } from "antd";
import { useContext, useEffect } from "react";
import { BasketContextItem } from "../../services/context/BasketItem";
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Basket = () => {
  const { basketitem, setBasketItem } = useContext(BasketContextItem);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(basketitem));
  }, [basketitem]);

  const calculateBasket = (isIncrement, item) => {
    const currentItem = basketitem.find((x) => x.id === item.id);
    if (isIncrement) {
      currentItem.quantity++;
      console.log(basketitem);
      setBasketItem([...basketitem]);
    } else {
      if (currentItem.quantity == 1) {
        return;
      } else {
        currentItem.quantity--;
        setBasketItem([...basketitem]);
      }
    }
  };

  
  const removeItem = async (productId) => {
      const updatedBasket = basketitem.filter((item) => item.id !== productId);
      setBasketItem(updatedBasket);
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
      filters: basketitem.map((product) => {
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
      title: "Remove",
      render: (text, record) => (
        <>
          <Button
           onClick={() => removeItem(record.id)}
          >Remove</Button>
        </>
      ),
    },
  ];

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>products</h2>
      <Table
        style={{ width: "70%", margin: "30px auto" }}
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={basketitem}
        onChange={onChange}
      />
    </>
  );
};

export default Basket;
