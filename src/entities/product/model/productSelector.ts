import { RootState } from "@/app/store";
import { createSelector } from "@reduxjs/toolkit";


export const selectProducts = (state: RootState) => state.products.items
export const selectProductsStatus = (state: RootState) => state.products.fetchStatus
export const selectProductsError = (state: RootState) => state.products.fetchError
export const selectProductsFilter = (state: RootState) => state.products.filter

export const selectAddStatus = (state: RootState) => state.products.addStatus
export const selectAddError = (state: RootState) => state.products.addError


export const selectFilteredProducts = createSelector(
  [selectProducts, selectProductsFilter],
  (products, filter) => {
    const normalizedFilter = filter.trim().toLowerCase()

    if (!normalizedFilter) return products

    return products.filter((product) =>
      product.title
        .toLowerCase()
        .includes(normalizedFilter)
    )
  }
)