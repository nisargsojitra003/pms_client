import { Category } from "./category.interface";

export interface Product {
  id: number;
  name: string;
  description: string;
  tag: string;
  category: number | null;
  otherCategory?: string | null;
  categoryName?: string;
  price: number | null;
  quantity?: number | null;
  image?: File | null;
  createdAt?: Date | string | null;
  updatedAt?: Date;
  categories?: Category[];
  registerTime?: string | null;
  isPrimary? : boolean | null;
}
