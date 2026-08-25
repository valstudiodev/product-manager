import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { selectAddError, selectAddStatus } from "@/entities/product/model/productSelector";
import { addProduct } from "@/entities/product/model/productThunk";
import { ChangeEvent, FormEvent, useState } from "react";
import '../styles/styles.scss';
import { ProductFormState } from "@/entities/product/model/productTypes";
import { productFormField } from "@/entities/product/data/dataProduct";
import ProductField from "@/entities/product/ui/ProductField";

interface AddProductFormProps {
  className?: string;
}

function AddProductForm({
  className = 'add-product-form'
}: AddProductFormProps): React.JSX.Element {

  const dispatch = useAppDispatch()

  const addStatus = useAppSelector(selectAddStatus)
  const addError = useAppSelector(selectAddError)

  const [form, setForm] = useState<ProductFormState>({
    title: '',
    price: '',
    category: '',
    thumbnail: '',
    brand: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const isSubmitting = addStatus === 'loading'

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await dispatch(
        addProduct({
          title: form.title.trim(),
          price: Number(form.price),
          category: form.category.trim(),
          thumbnail: form.thumbnail.trim(),
          brand: form.brand.trim(),
        })
      ).unwrap()

      setForm({
        title: '',
        price: '',
        category: '',
        thumbnail: '',
        brand: '',
      })
    } catch {
      // Redux already stores the error.
    }
  }

  return (
    <form
      className={className}
      onSubmit={handleSubmit}
    >

      {productFormField.map((field) => (
        <ProductField
          classParent={className}
          key={field.name}
          field={field}
          value={form[field.name]}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      ))}

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