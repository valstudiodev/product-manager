import { ProductFormFieldProps } from "@/entities/product/data/dataProduct";

interface FormFiledProps {
  field: ProductFormFieldProps;
  value: string;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classParent: string;
}

function ProductField({
  field,
  value,
  disabled,
  onChange,
  classParent
}: FormFiledProps): React.JSX.Element {
  return (
    <div className={`${classParent}__field`}>
      <label
        className={`${classParent}__label`}
        htmlFor={`product-${field.name}`}>
        {field.label}
      </label>
      <input
        className={`${classParent}__input`}
        id={`product-${field.name}`}
        type={field.type}
        name={field.name}
        required={field.required}
        value={value}
        onChange={onChange}
        disabled={disabled}
        min={field.min}
        step={field.step}
      />
    </div>
  );
}

export default ProductField;