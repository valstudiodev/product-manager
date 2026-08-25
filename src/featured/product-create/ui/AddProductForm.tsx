import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectAddError, selectAddStatus } from "@/entities/product/model/productSelector";
import { addProduct } from "@/entities/product/model/productThunk";
import { ChangeEvent, FormEvent, useState } from "react";
import '../styles/styles.scss';

function AddProductForm(): React.JSX.Element {

  const dispatch = useAppDispatch()

  const addStatus = useAppSelector(selectAddStatus)
  const addError = useAppSelector(selectAddError)

  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [thumbnail, setThumbnail] = useState<string>('');

  const isSubmitting = addStatus === 'loading'

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const resultAction = await dispatch(
      addProduct({
        title: title.trim(),
        price: Number(price),
        category: category.trim(),
        thumbnail: thumbnail.trim(),
      })
    )

    if (addProduct.fulfilled.match(resultAction)) {
      setTitle('');
      setPrice('');
      setCategory('');
      setThumbnail('');
    }
  }

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value)
  }

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value)
  }

  const handleThumbnailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setThumbnail(e.target.value)
  }

  return (
    <form
      className="add-product-form"
      onSubmit={handleSubmit}
    >
      <div className="add-product-form__field">
        <label
          className="add-product-form__title"
          htmlFor="product-title">
          Title:
        </label>
        <input
          id="product-title"
          type="text"
          className="add-product-form__input"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </div>

      <div className="add-product-form__field">
        <label
          className="add-product-form__title"
          htmlFor="product-price">
          Price:
        </label>
        <input
          id="product-price"
          type="number"
          className="add-product-form__input"
          value={price}
          min='0'
          step='0.01'
          onChange={handlePriceChange}
          required
        />
      </div>

      <div className="add-product-form__field">
        <label
          className="add-product-form__title"
          htmlFor="product-category">
          Category:
        </label>
        <input
          id="product-category"
          type="text"
          className="add-product-form__input"
          value={category}
          onChange={handleCategoryChange}
          required
        />
      </div>

      <div className="add-product-form__field">
        <label
          className="add-product-form__title"
          htmlFor="product-thumbnail">
          Image URL:
        </label>
        <input
          id="product-thumbnail"
          type="url"
          className="add-product-form__input"
          value={thumbnail}
          onChange={handleThumbnailChange}
        />
      </div>

      {addError && (
        <p>
          {addError}
        </p>
      )}

      <button
        type="submit"
        className="add-product-form__btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Adding' : 'Add product'}
      </button>
    </form>
  );
}

export default AddProductForm;