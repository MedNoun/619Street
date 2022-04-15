import { card } from '../shared/card';
import { navbar } from '../shared/navbar';
import { carousel, carouselImage } from './carouselImage';
import { footer } from '../shared/footer';
import { slogan } from './slogan';

export interface content {
    slogan: slogan;
    navbar: navbar;
    carousel: carousel;
    cards: card[];
    footer: footer;
}
