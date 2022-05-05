import { Injectable } from '@angular/core';
import { cards, catalogue, footer, homepage, navbar } from './content';

@Injectable({
    providedIn: 'root'
})
export class PopulatorService {
    constructor() {}
    get navbar() {
        return navbar;
    }
    get cards() {
        return cards;
    }
    get footer() {
        return footer;
    }
    get catalogue() {
        return catalogue;
    }
    get homepage() {
        return homepage;
    }
}
