export interface product {
    id: string;
    name: string;
    type: string;
    url: string;
    price: number;
    sizes: number[];
    colors: string[];
}
export interface products {
    products: product[];
}
