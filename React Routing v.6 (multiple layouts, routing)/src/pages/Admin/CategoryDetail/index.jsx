import { useParams } from "react-router-dom";
import { getCategoryByID } from "../../../services/requests/categoryRequest";
import { useEffect, useState } from "react";
const CategoryDetail = () => {
  let url = useParams("id");
  let [category, setCategory] = useState([]);

  useEffect(() => {
    getCategoryByID(url.id).then((res) => {
        setCategory(res)
    });
  }, [url]);

  return <>
    <h1>Detail Page</h1>
    <h2>Id {category.id}</h2>
    <h2>Name {category.name}</h2>
    <h2>Description {category.description}</h2>
  </>
};

export default CategoryDetail;
