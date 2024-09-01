import CardProduct from "../components/Fragments/CardProducts";
const ProductsPage = () => {
  return (
    <div className="flex justify-center py-10">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quae obcaecati officia commodi accusamus vitae aspernatur autem qui illo in.</CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000"></CardProduct.Footer>
      </CardProduct>

      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quae obcaecati officia commodi accusamus vitae aspernatur autem qui illo in.</CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000"></CardProduct.Footer>
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
