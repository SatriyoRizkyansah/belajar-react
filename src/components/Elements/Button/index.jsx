const Button = (props) => {
  const { children = "...", variant = "black" } = props;
  return (
    <button type="button" className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}>
      {props.children}
    </button>
  );
};

export default Button;
