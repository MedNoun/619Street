import { carousel } from "../homepage/carouselImage";
import { card } from "../shared/card";
import { footer } from "../shared/footer";
import { navbar } from "../shared/navbar";

export interface wishlist {

    navbar: navbar;
    carousel: carousel;
    cards: card[];
    footer: footer;
}