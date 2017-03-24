import { Location } from '../../shared/location.model';
import { Category } from '../../shared/category.model';
import { TourPhoto } from './tour-photo.model';

export class Tour {
  objectId: string;
  location: Location;
  category: Category;
  author: string;
  title: string;
  season: string;
  requirements: string;
  price: number;
  duration: string;
  description: string;
  capacity: number;
  avatarUrl: string;
  TourPhoto: TourPhoto[];
}