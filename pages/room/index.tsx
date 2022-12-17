import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("*************");

    async function getProduct() {
      const { data } = await axios.get(
        "http://shop.dev/api/product/allProducts"
      );
      console.log(data);
    }
    getProduct();
  }, []);
  return (
    <div>
      <h1>786 hi</h1>
    </div>
  );
};

export default Index;
