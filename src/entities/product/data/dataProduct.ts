import { ProductFormState } from "../model/productTypes";

export interface ProductFormFieldProps {
  name: keyof ProductFormState;
  label: string;
  type: React.HTMLInputTypeAttribute;
  required?: boolean;
  min?: string;
  step?: string;
}

export const productFormField: ProductFormFieldProps[] = [
  {
    name: 'title',
    type: 'text',
    required: true,
    label: 'Title'
  },
  {
    name: 'price',
    type: 'number',
    label: 'Price',
    required: true,
    min: '0',
    step: '0.01'
  },
  {
    name: 'category',
    label: 'Category',
    type: 'text',
    required: true,
  },
  {
    name: 'thumbnail',
    label: 'Image URL',
    type: 'url',
  },
  {
    name: 'brand',
    type: 'text',
    required: false,
    label: 'Brand'
  }
]