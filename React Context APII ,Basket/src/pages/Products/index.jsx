import { Button, Table } from "antd";
import { useContext, useEffect } from "react";
import { getAllProducts } from "../../services/product";
import Swal from "sweetalert2";
import { BasketContext } from "../../services/context/BasketContext";
import { BasketContextItem } from "../../services/context/BasketItem";
import { ProductContext } from "../../services/context/ProductContext";
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Products = () => {
  const { count, setCount } = useContext(BasketContext);
  const { products, setProducts } = useContext(ProductContext);
  const { basketitem, setBasketItem } = useContext(BasketContextItem);
  // console.log(basketitem)
  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res);
    });
  }, []);
  const addBasket = (product) => {
    setCount(count + 1);
    const currentItem = basketitem.find((x) => x.id === product.id);
    if (currentItem) {
      currentItem.quantity++  
      return
    }else{
      setBasketItem([...basketitem, {...product,quantity: 1}]);
    }
   
    console.log(basketitem);
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
      filters: products.map((product) => {
        return {
          text: product.description,
          value: product.description,
        };
      }),
      onFilter: (value, record) => record.description.indexOf(value) === 0,
    },
    {
      title: "Basket",
      render: (text, record) => {
        // console.log(record)
        return (
          <Button
            onClick={() => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
              addBasket(record);
            }}
            type="primary"
          >
            Add to Basket
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>products</h2>
      <Table
        style={{ width: "70%", margin: "30px auto" }}
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={products}
        onChange={onChange}
      />
      ;
    </>
  );
};

export default Products;
