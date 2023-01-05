import {CabinetElementType} from './types';

export interface MenuLink {
    hash?: string,
    text: string,
}

export interface FooterLink {
    name: string,
    link: string
}

// DATA INTERFACES
export interface Rocket {
    id: string,
    status: CabinetElementType,
    name: string
}

export interface Certificate {
    id: string,
    name: string,
    date: string
}

export interface HistoryItem {
    id: string,
    date: string
    text: string,
}

export interface DonateItem {
    id: string,
    sum: string,
    name: string,
    application_name: string,
    application_link: string,
}
