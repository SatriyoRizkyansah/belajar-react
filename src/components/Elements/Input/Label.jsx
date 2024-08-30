const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className=" text-slate-700 block mb-2 text-sm font-bolld">
      {children}
    </label>
  );
};

export default Label;
