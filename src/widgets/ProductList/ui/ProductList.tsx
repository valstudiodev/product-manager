import { selectFilteredProducts } from "@/entities/product/model/productSelector";
import ProductCard from "@/entities/product/ui/ProductCard";
import { useSelector } from "react-redux";
import '../styles/productList.scss'

function ProductList(): React.JSX.Element {
  const className = 'products-list'

  // const products = useAppSelector(
  //   (state) => state.products.items
  // )

  // const products = useSelector(selectProducts)

  const products = useSelector(selectFilteredProducts)

  return (
    <ul
      className={className}
    >
      {products.map((product) => (
        <li
          key={product.id}
          className={`${className}__item`}
        >
          <ProductCard
            product={product}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;