import {Certificate, HistoryItem, Rocket, DonateItem} from './interfaces';
import {CabinetElementType} from "./types";

export const rocketsList: Array<Rocket> = [
    {
        id: '0',
        status: CabinetElementType.form,
        name: 'За наших дітей!'
    },
    {
        id: '1',
        status: CabinetElementType.sent,
        name: 'За втрачене літо'
    },
]

export const certificatesList: Array<Certificate> = [
    {
        id: '0',
        name: 'За маріуполь',
        date: '12.12.2022'
    },
    {
        id: '1',
        name: 'Привіт росіянам',
        date: '13.01.2023'
    },
    {
        id: '2',
        name: 'За втрачене літо 22',
        date: '14.01.2023'
    },
    {
        id: '3',
        name: 'За Херсон',
        date: '22.01.2023'
    }
]

export const historyList: Array<HistoryItem> = [
    {
        id: '0',
        date: '12.12.2022, 14:48',
        text: 'Створена нова заявка “За втрачене літо”'
    },
    {
        id: '1',
        date: '14.12.2022, 14:18',
        text: 'Заявка “За втрачене літо” відправлена ЗСУ'
    },
    {
        id: '2',
        date: '28.12.2022, 11:15',
        text: 'Заявка “За втрачене літо” - опрацьована'
    }
]

export const donationsList: Array<DonateItem> = [
    {
        id: '0',
        sum: '1000',
        name: 'За маріуполь',
        application_name: 'MAVIC 2 для розвідки Донеччини',
        application_link: 'https://all4ukraine.org/',
    },
    {
        id: '1',
        sum: '1000',
        name: 'За втрачене літо 22',
        application_name: 'Позашляховик для захисників на передову',
        application_link: 'https://all4ukraine.org/',
    }
]
