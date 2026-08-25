import { ProductCardProps } from "@/entities/product/model/productTypes";
import '../styles/productStyles.scss';

function ProductCard({
  product
}: ProductCardProps) {
  const className = 'product-card'

  return (
    <article
      className={`${className}`}
    >
      <div className={`${className}__inner`}>

        {product.thumbnail ? (
          <div className={`${className}__image-wrap`}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className={`${className}__img`} />
          </div>
        ) : (
          <div className={`${className}__image-placeholder`}>
            No image
          </div>
        )}

        <div className={`${className}__body`}>
          <h3
            className={`${className}__title`}
          >
            {product.title}
          </h3>
          <div className={`${className}__category`}>
            <strong>Category:</strong>
            <span>{product.category}</span>
          </div>
          <div
            className={`${className}__info`}
          >
            <span>{product.price}$</span>

            {product.rating && (
              <div className={`${className}__rating`}>
                <span>Rating:</span>
                <span>{product.rating}</span>
              </div>
            )}

            {product.brand && (
              <div>Brand:{product.brand}</div>
            )}

          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;