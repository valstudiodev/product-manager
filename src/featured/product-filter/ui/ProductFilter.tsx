import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectProductsFilter } from "@/entities/product/model/productSelector";
import { setFilter } from "@/entities/product/model/productSlice";
import '../styles/productFilterStyles.scss';

function ProductFilter(): React.JSX.Element {
  const dispatch = useAppDispatch()

  // const filterItems = useAppSelector(
  //   (state) => state.products.filter
  // )

  const filter = useAppSelector(selectProductsFilter)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setFilter(e.target.value))
  }

  return (
    <input
      className="product-filter"
      type="search"
      value={filter}
      onChange={handleChange}
      placeholder="Search products..."
    />
  );
}

export default ProductFilter;