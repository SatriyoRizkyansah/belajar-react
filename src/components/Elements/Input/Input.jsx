const Input = (props) => {
  const { type, placeholder, name } = props;
  return <input type={type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required name={name} />;
};

export default Input;
