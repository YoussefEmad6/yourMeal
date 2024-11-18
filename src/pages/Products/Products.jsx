import React from "react";
import WithGuard from "../../utils/WithGuard";
const Products = (props) => {
  console.log(props);
  return <div>Products</div>;
};

export default WithGuard(Products);
