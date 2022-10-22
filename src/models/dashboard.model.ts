import { Category } from './category.model';
import { Favorite } from './favorite.model';
import { Restaurant } from './restaurant.model';

export interface Dashboard {
  restaurants: Restaurant[];
  categories: Category[];
  favorites: Favorite[];
}
