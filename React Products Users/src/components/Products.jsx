/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup, Stack, Input } from "@chakra-ui/react";
import axios from "axios";
import { BASE_URL } from "../../url";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { getAllProducts, deleteProducts } from "..//../productsrequest.js";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Products = () => {
  const closeLoginModal = () => {
    setOpenLoginModal(false);
  };
  const closeRegisterModal = () => {
    setOpenRegisterModal(false);
  };

  const [data, setData] = useState([]);
  const [valu, setValu] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
    const fetchData = async () => {
      try {
        if (isLoggedIn && loggedInUser) {
          const responseData = await getAllProducts();
          setData(responseData);
          console.log(responseData);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [isLoggedIn, loggedInUser]);
  

  const handleDelete = (id) => {
    axios.delete(BASE_URL + `products/` + id).then(() => {
      const updatedData = data.filter((item) => item.id !== id);
      console.log(updatedData);
      setData(updatedData);
    });
  };
  return (
    <>
      {isLoggedIn && (
        <div>
          <p>Welcome, {loggedInUser}!</p>
          <Button onClick={() => setIsLoggedIn(false)}>Logout</Button>
        </div>
      )}
      {isLoggedIn ? (
        <div>
          <p>Welcome, {loggedInUser}!</p>
          <Button onClick={() => setIsLoggedIn(false)}>Logout</Button>

          <TableContainer>
            <Table variant="simple">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>id</Th>
                  <Th>name</Th>
                  <Th>price</Th>
                  <Th>discountPercentage</Th>
                  <Th>edit</Th>
                  <Th>delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((item, i) => (
                  <Tr key={i}>
                    <Td>{item.id}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.price}</Td>
                    <Td>{item.discountPercentage}</Td>
                    <Td>
                      <Button
                        onClick={() => {
                          setSelectedItem(item);
                          setValu(item);
                          console.log("valu state: ", valu);
                          setOpenModal(true);
                        }}
                        colorScheme="teal"
                      >
                        Edit
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        onClick={() => handleDelete(item.id)}
                        colorScheme="red"
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <Stack direction="row" spacing={4}>
          <Button
            onClick={() => {
              setOpenLoginModal(true);
              console.log(openModal);
            }}
            colorScheme="teal"
            variant="solid"
          >
            Login
          </Button>
          <LoginModal
            isOpen={openLoginModal}
            onClose={() => {
              closeLoginModal();
              setLoggedInUser("Turxan");
              setIsLoggedIn(true);
            }}
            setIsLoggedIn={setIsLoggedIn}
          />
          <Button
            onClick={() => {
              setOpenRegisterModal(true);
              console.log(openModal);
            }}
            colorScheme="teal"
            variant="outline"
          >
            Register
          </Button>
          <RegisterModal
            isOpen={openRegisterModal}
            onClose={closeRegisterModal}
          />
        </Stack>
      )}

      {openModal ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setOpenModal(false);
            console.log("array: ", data);
            console.log("updating object: ", valu);
            let updatedCategory = data.find((x) => x.id === valu.id); 
            updatedCategory.name = valu.name;
            updatedCategory.price = valu.price;
            updatedCategory.discountPercentage = valu.discountPercentage;
            setData([...data]);
            axios.patch(BASE_URL + selectedItem.id, { name: valu.name },{price: valu.price},{discountPercentage: valu.discountPercentage});
          }}
        >
          <Input
            value={valu.name}
            onChange={(e) => {
              setValu({ ...valu, name: e.target.value });
            }}
            type="text"
            placeholder="name"
          />

          <Input
          value={valu.price}
            onChange={(e) => {
              setValu({ ...valu, price: e.target.value });
            }}
            type="text"
            placeholder="price"
          />

          <Input
          value={valu.discountPercentage}
            onChange={(e) => {
              setValu({ ...valu, discountPercentage: e.target.value });
            }}
            type="text"
            placeholder="discountedPercentage"
          />

          <Button type="submit">Submit</Button>
        </form>
      ) : null}
    </>
  );
};

export default Products;
