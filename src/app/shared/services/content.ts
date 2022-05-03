import { catalogue as Catalogue } from 'src/app/classes/fetchers/catalogue/catalogue';
import { content } from 'src/app/classes/fetchers/homepage/content';
import { card } from 'src/app/classes/fetchers/shared/card';
import { footer as Footer } from 'src/app/classes/fetchers/shared/footer';
import { navbar as Navbar } from 'src/app/classes/fetchers/shared/navbar';

export const footer: Footer = {
    logo: '619 Street',
    socials: {
        id: 'socials',
        title: 'socials',
        links: [
            {
                href: '',
                text: 'fab fa-facebook-f'
            },
            {
                href: '',
                text: 'fab fa-twitter'
            },
            {
                href: '',
                text: 'fab fa-linkedin-in'
            },
            {
                href: '',
                text: 'fab fa-instagram'
            }
        ]
    },

    adr: {
        id: 'address',
        title: 'Office Location',
        adresses: [
            {
                icon: 'far fa-building',
                address:
                    'Los Angeles\nOffice 9B, Sky High Tower, New A Ring Road, Los Angeles'
            },
            {
                icon: 'fas fa-gopuram',
                address:
                    'Delhi\nOffice 150B, Behind Sana Gate Char Bhuja Tower, Station Road, Delhi'
            }
        ]
    },
    rows: [
        {
            arr: [
                {
                    id: '1',
                    title: 'solution',
                    links: [
                        { href: '', text: 'App dev' },
                        { href: '', text: 'App dev' },
                        { href: '', text: 'App dev' }
                    ]
                },
                {
                    id: '2',
                    title: 'solution',
                    links: [
                        { href: '', text: 'App dev' },
                        { href: '', text: 'App dev' },
                        { href: '', text: 'App dev' }
                    ]
                },
                {
                    id: '3',
                    title: 'solution',
                    links: [
                        { href: '', text: 'App dev' },
                        { href: '', text: 'App dev' },
                        { href: '', text: 'App dev' }
                    ]
                }
            ]
        }
    ]
};
export const cards: card[] = [
    {
        id: '1',
        name: 'blow',
        type: 'sneakers',
        url: 'http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png',
        price: 35,
        sizes: ['7', '8', '9', '10'],
        colors: ['green', 'blue', 'yellow']
    },
    {
        id: '2',
        name: 'nikee',
        type: 'sneakers',
        url: 'https://pngimg.com/uploads/boots/boots_PNG7781.png',
        price: 35,
        sizes: ['7', '8', '9', '10'],
        colors: ['green', 'blue', 'yellow']
    },
    {
        id: '3',
        name: 'nikee',
        type: 'sneakers',
        url: 'https://pngimg.com/uploads/tshirt/tshirt_PNG5441.png',
        price: 35,
        sizes: ['7', '8', '9', '10'],
        colors: ['green', 'blue', 'yellow']
    },
    {
        id: '4',
        name: 'nikee',
        type: 'sneakers',
        url: 'https://pngimg.com/uploads/tshirt/tshirt_PNG5446.png',
        price: 35,
        sizes: ['7', '8', '9', '10'],
        colors: ['green', 'blue', 'yellow']
    },
    {
        id: '5',
        name: 'nikee',
        type: 'sneakers',
        url: 'http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png',
        price: 35,
        sizes: ['7', '8', '9', '10'],
        colors: ['green', 'blue', 'yellow']
    },
    {
        id: '6',
        name: 'nikee',
        type: 'sneakers',
        url: 'http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png',
        price: 35,
        sizes: ['7', '8', '9', '10'],
        colors: ['green', 'blue', 'yellow']
    },
    {
        id: '7',
        name: 'blow',
        type: 'sneakers',
        url: 'http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png',
        price: 35,
        sizes: ['7', '8', '9', '10'],
        colors: ['green', 'blue', 'yellow']
    }
];
export const homepage: content = {
    slogan: {
        title: '619 Street',
        subtitle: 'JUST LIK',
        paragrapheTitle: 'Digital Mall',
        paragraph:
            'Digital Mall the mall where all the fun begins and friendship start ! Welcome to the mall todaaayy !'
    },
    carousel: {
        images: [
            {
                brand: 'Hammadi Abid',
                description: 'excelent for your body',
                src: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2021&q=80',
                alt: 'nature1'
            },
            {
                brand: 'Nike',
                description: 'excelent for your tirma',
                src: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                alt: 'nature1'
            },
            {
                brand: 'Hammadi Abid',
                description: 'excelent for your body',
                src: 'https://images.unsplash.com/photo-1478633637126-63a90b9d7e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                alt: 'nature1'
            },
            {
                brand: 'Nike',
                description: 'excelent for your tirma',
                src: 'https://images.unsplash.com/photo-1542594566-ba8e6fc0cf63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                alt: 'nature1'
            },
            {
                brand: 'Hammadi Abid',
                description: 'excelent for your body',
                src: 'https://images.unsplash.com/photo-1485218126466-34e6392ec754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                alt: 'nature1'
            }
        ]
    },
    cards,
    footer
};
export const catalogue: Catalogue = {
    filters: [
        {
            title: 'Order By',
            items: ['Size', 'Price', 'In Stock', 'Color']
        },
        {
            title: 'Categories',
            items: ['Bags', 'Trausers', 'Shirts', 'Boots']
        },
        {
            title: 'Sizes',
            items: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
        }
    ],
    cards,
    footer
};
export const navbar: Navbar = {
    brand: '619 Street',
    items: ['Homme', 'Femme', 'Hiver', 'Ete']
};
