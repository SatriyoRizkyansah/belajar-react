import { Children } from "react";
import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2">{children}</div>;
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
  const { children, title } = props;
  return (
    <div className="px-5 pb-8">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">{title}</h5>
        <p className="text-s text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex item-center justify-between px-5 pb-6">
      <span className="text-white text-xl font-bold">{price}</span>
      <Button classname="bg-blue-600 w-1/2">Add to cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
