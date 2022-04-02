import { card } from '../shared/card';
import { navbar } from '../shared/navbar';
import { slogan } from './slogan';

export interface content {
    slogan: slogan;
    navbar: navbar;
    cards: card[];
}
