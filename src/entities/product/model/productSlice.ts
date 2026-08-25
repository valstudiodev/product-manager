import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsState } from "./productTypes";
import { addProduct, fetchProducts } from "./productThunk";


const initialState: ProductsState = {
  items: [],
  fetchStatus: 'idle',
  fetchError: null,

  addStatus: 'idle',
  addError: null,

  filter: '',
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilter: (state: ProductsState, action: PayloadAction<string>) => {
      state.filter = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.fetchStatus = 'loading'
        state.fetchError = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.fetchStatus = 'succeeded'
        state.items = action.payload.products
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.fetchStatus = 'failed'
        state.fetchError = action.error.message ?? 'Failed to fetch products'
      })

      .addCase(addProduct.pending, (state) => {
        state.addStatus = 'loading'
        state.addError = null
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.addStatus = 'succeeded'
        state.items.push(action.payload)
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.addStatus = 'failed'
        state.addError = action.error.message ?? 'Failed to add product'
      })
  }
})

export const { setFilter } = productSlice.actions

export default productSlice.reducer