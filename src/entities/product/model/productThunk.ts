import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateProductPayload, Product, ProductsResponse } from "./productTypes";


export const fetchProducts = createAsyncThunk<ProductsResponse>(
  'products/fetachProducts',
  async () => {
    const response = await fetch(
      'https://dummyjson.com/products',
    )

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json()
  }
)

export const addProduct = createAsyncThunk<Product, CreateProductPayload>(
  'products/addProduct',
  async (product) => {
    const response = await fetch(
      'https://dummyjson.com/products/add',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(product)
      }
    )

    if (!response.ok) {
      throw new Error("Failed to add product");
    }

    return response.json()
  }
)