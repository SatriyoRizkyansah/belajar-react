import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProducts";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "/images/shoes-1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quae obcaecati officia commodi accusamus vitae aspernatur autem qui illo in.",
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp 2.000.000",
    image: "/images/shoes-1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quae",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-3 bg-black w-1/6" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      <div className="flex justify-center py-10">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}></CardProduct.Header>
            <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
            <CardProduct.Footer price={product.price}></CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
