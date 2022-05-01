import { carousel } from '../fetchers/homepage/carouselImage';

export interface product {
    id: string;
    liked: number; // -1 not liked 1 liked
    name: string; // marque
    type: string; // sirwel maryoul ...
    url: string; // image png for cards
    price: number;
    categories: string[]; // for filtrage, man , woman , sif , chta , new collection
    sizes: string[]; // les sizes il kol
    colors: string[]; // numero #213456
    carousel: carousel; // images for the product view 
}
