import { Children } from "react";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./../../redux/slices/cartSlice";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between my-3">{children}</div>;
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img src={image} alt="" className="p-8 rounded-t-lg w-full h-60 object-cover" />
    </Link>
  );
};

const Body = (props) => {
  const { children, name } = props;

  const convChildren = typeof children === "string" ? children : String(children);
  const convName = typeof name === "string" ? name : String(name);

  return (
    <div className="px-5 pb-8 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">{convName.substring(0, 20)} ... </h5>
        <p className="text-s text-white">{convChildren.substring(0, 100)}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex item-center justify-between px-5 pb-6">
      <span className="text-white text-xl font-bold">Rp {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</span>
      <Button classname="bg-blue-600" onClick={() => dispatch(addToCart({ id, qty: 1 }))}>
        Add to cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
