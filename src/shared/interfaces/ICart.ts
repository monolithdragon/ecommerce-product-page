import { IProduct } from "./IProduct";

export interface ICart  {
  id: number;
  product: IProduct;
  amount: number;
};