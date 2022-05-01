import { card } from '../shared/card';
import { navbar } from '../shared/navbar';
import { footer } from '../shared/footer';

export interface content {
    navbar: navbar;
    cards: card[];
    footer: footer;
}
