import { card } from '../shared/card';
import { Navbar } from '../shared/navbar';
import { slogan } from './slogan';

export interface content {
    slogan: slogan;
    navbar: Navbar;
    cards: card[];
}
