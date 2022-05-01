import { carousel } from '../fetchers/homepage/carouselImage';

export interface product {
    id: string;
    liked: number; //-1 not liked 1 liked
    name: string;
    type: string;
    url: string;
    price: number;
    sizes: number[];
    colors: string[];
    carousel: carousel;
}
