import { useAppDispatch } from "@/app/store/hooks";
import { selectProducts, selectProductsError, selectProductsStatus } from "@/entities/product/model/productSelector";
import { fetchProducts } from "@/entities/product/model/productThunk";
import AddProductForm from "@/featured/product-create/ui/AddProductForm";
import ProductFilter from "@/featured/product-filter/ui/ProductFilter";
import Container from "@/shared/primitives/container/Container";
import Section from "@/shared/primitives/section/Section";
import { HeadingTitle } from "@/shared/typography";
import Paragraph from "@/shared/typography/paragraph/Paragraph";
import { ProductList } from "@/widgets";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function ProductPage(): React.JSX.Element {
  const dispatch = useAppDispatch()

  const status = useSelector(selectProductsStatus)
  const error = useSelector(selectProductsError)
  const items = useSelector(selectProducts)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  if (status === 'loading') {
    return <div
      className="absolute top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2
      text-4xl">
      Loading...
    </div>
  }

  if (status === 'failed') return <div>{error}</div>

  if (status === 'succeeded' && items.length === 0) {
    return <h3>No products found.</h3>
  }

  return (
    <Section className="product-page p-10">
      <Container className="relative">
        <HeadingTitle className="text-4xl 
        text-center mb-10">
          Products page
        </HeadingTitle>
        <Paragraph />
        <AddProductForm />
        <ProductFilter />
        <ProductList />
      </Container>
    </Section>
  );
}

export default ProductPage;