export interface link {
    href: string;
    text: string;
}
export interface address {
    icon: string;
    address: string;
}
export interface innerRow {
    id: string;
    title: string;
    links?: link[];
}
export interface adr {
    id: string;
    title: string;
    adresses: address[];
}
export interface row {
    arr: innerRow[];
}

export interface footer {
    logo: string;
    socials: innerRow;
    adr: adr;
    rows: row[];
}
