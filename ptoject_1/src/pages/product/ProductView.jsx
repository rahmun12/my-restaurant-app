import { Link } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import "./ProductView.scss";

export default function ProductView({ products }) {
  try {
    return (
      <div className="flex-col py-24 dark:bg-black">
        <div className="pb-24 title-text">
          <h2 className="text-3xl text-center">Produk</h2>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-8">
            {products?.map((product, index) => (
              <Link key={index} to={`/produk/${product.id}`}>
                <CardProduct
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  description={product.description}
                  image={product.image}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}