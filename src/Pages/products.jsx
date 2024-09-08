// @ts-nocheck
import Counter from "../components/Fragments/Counter";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProducts";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  useLogin();

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center py-10">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id}></CardProduct.Header>
                <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id}></CardProduct.Footer>
              </CardProduct>
            ))}
        </div>

        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5">Cart</h1>
          <TableCart products={products}></TableCart>
        </div>
      </div>

      <div className="w-100 flex justify-center">
        <Counter></Counter>
      </div>
    </>
  );
};

export default ProductsPage;
