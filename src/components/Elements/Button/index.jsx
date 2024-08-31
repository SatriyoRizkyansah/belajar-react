const Button = (props) => {
  const { children = "...", classname = "black" } = props;
  return (
    <button type="button" className={`h-10 w-full px-6 font-semibold rounded-md ${classname} text-white`}>
      {props.children}
    </button>
  );
};

export default Button;
