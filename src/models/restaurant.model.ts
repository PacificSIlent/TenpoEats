export interface Restaurant {
  name: string;
  rate: string;
  id: string;
  delivery: Delivery;
  discount: number;
  category: string;
  subcategory: string;
  detail: string;
}

export interface Delivery {
  min: number;
  max: number;
}
