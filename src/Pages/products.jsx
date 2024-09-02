import Counter from "../components/Fragments/Counter";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProducts";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    image: "/images/shoes-1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quae obcaecati officia commodi accusamus vitae aspernatur autem qui illo in.",
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: 2000000,
    image: "/images/shoes-1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quae",
  },
  {
    id: 3,
    name: "Sepatu Odoo",
    price: 3000000,
    image: "/images/shoes-1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quae",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id: id, qty: 1 }]);
    }
  };

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-3 bg-black" onClick={handleLogout}>
          Log out
        </Button>
      </div>

      <div className="flex justify-center py-10">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}></CardProduct.Header>
              <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
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
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      Rp.{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tr>
              <td colSpan={3}>
                <b>Total Price</b>
              </td>
              <td>
                <b>
                  Rp.{" "}
                  {totalPrice.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
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
