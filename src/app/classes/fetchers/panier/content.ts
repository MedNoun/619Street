import { card } from '../shared/card';
import { navbar } from '../shared/navbar';
import { footer } from '../shared/footer';
import internals from 'kute.js/src/core/internals';

export interface content {
    title: string;
    products: products;
}
export class products {
    items: item[];
}
export class item {
    name: string;
    url:string;
    price: string;
    size: Float32Array;
    color:string;
}
