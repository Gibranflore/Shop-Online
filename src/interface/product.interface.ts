import type { Product } from "./interface.response";


export interface ProductsResponse {
  count: number;
  pages: number;
  products: Product[];
}