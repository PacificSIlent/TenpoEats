import { Restaurant } from './restaurant.model';

export interface Favorite {
  id: string;
  productName: string;
  restaurant: Restaurant;
}
