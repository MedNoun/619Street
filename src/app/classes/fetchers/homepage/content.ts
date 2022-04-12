import { card } from '../shared/card';
import { navbar } from '../shared/navbar';
import { footer } from './footer';
import { slogan } from './slogan';

export interface content {
    slogan: slogan;
    navbar: navbar;
    cards: card[];
    footer: footer;
}
