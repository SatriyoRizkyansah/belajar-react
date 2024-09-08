import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {
  const { products = [] } = props; // Default to an empty array if products is undefined
  const cart = useSelector((state) => state.cart?.data || []); // Default to an empty array if cart is undefined
  const [totalPrice, setTotalPrice] = useState(0);

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

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
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
                  $.{" "}
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
  );
};

export default TableCart;
