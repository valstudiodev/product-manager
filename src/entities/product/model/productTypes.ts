export interface Product {
  id: number;
  title: string;
  dexcription: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  thumbnail: string;
  images: string[];
}

export interface ProductCardProps {
  product: Product
}

export interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductMeta {
  createAt: string;
  updateAt: string;
  barcode: string;
  qrCode: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface ProductListProps {
  products: Product[]
}

export type RequestStatus =
  | 'idle'
  | 'loading'
  | 'succeeded'
  | 'failed'

export interface ProductsState {
  items: Product[];

  fetchStatus: RequestStatus;
  fetchError: string | null;

  addStatus: RequestStatus;
  addError: string | null;

  filter: string;
}

export interface CreateProductPayload {
  title: string;
  price: number;
  category: string;
  thumbnail?: string;
  brand?: string;
}

export interface ProductFormState {
  title: string;
  price: string;
  category: string;
  thumbnail: string;
  brand: string
}

