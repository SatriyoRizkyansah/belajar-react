import { Children } from "react";
import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between my-3">{children}</div>;
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="">
      <img src={image} alt="" className="p-8 rounded-t-lg w-full" />
    </a>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-8 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">{name}</h5>
        <p className="text-s text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex item-center justify-between px-5 pb-6">
      <span className="text-white text-xl font-bold">Rp {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}</span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add to cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
