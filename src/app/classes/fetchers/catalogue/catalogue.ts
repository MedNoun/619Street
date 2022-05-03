import { card } from '../shared/card';
import { footer } from '../shared/footer';
import { navbar } from '../shared/navbar';

export class catalogue {
    filters: filter[];
    cards: card[];
    footer: footer;
}
export class filter {
    title: string;
    items: string[];
}
