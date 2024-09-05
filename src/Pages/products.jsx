// @ts-nocheck
import Counter from "../components/Fragments/Counter";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProducts";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id: id, qty: 1 }]);
    }
  };

  // useRef
  // const cartRef = useRef([{ id: 1, qty: 1 }]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {username}
        <Button classname="ml-3 bg-black" onClick={handleLogout}>
          Log out
        </Button>
      </div>

      <div className="flex justify-center py-10">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id}></CardProduct.Header>
                <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart}></CardProduct.Footer>
              </CardProduct>
            ))}
        </div>

        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 10)}...</td>
                      <td>
                        Rp.{" "}
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        ${" "}
                        {(product.price * item.qty).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <tr ref={totalPriceRef}>
              <td colSpan={3}>
                <b>Total Price</b>
              </td>
              <td>
                <b>
                  $.{" "}
                  {totalPrice.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "USD",
                  })}
                </b>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="w-100 flex justify-center">
        <Counter></Counter>
      </div>
    </>
  );
};

export default ProductsPage;
