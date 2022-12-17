import {MenuLink, FooterLink} from "../interfaces";

const headerLinksArr: Array<MenuLink> = [
    {
        text: 'Головна'
    },
    {
        hash: '#conditions',
        text: 'Умови'
    },
    {
        hash: '#faq',
        text: 'FAQ'
    }
];

const footerLinksArr: Array<MenuLink> = [
    {
        hash: '#description',
        text: 'Про проект'
    },
    {
        hash: '#conditions',
        text: 'Умови участі'
    },
    {
        hash: '#faq',
        text: 'FAQ'
    }
];

const socialLinksArr:Array<FooterLink> = [
    {
        name: 'facebook',
        link: 'https://www.facebook.com/all4ukraineua'
    },
    {
        name: 'twitter',
        link: 'https://twitter.com/all_4_ukraine'
    },
    {
        name: 'instagram',
        link: 'https://www.instagram.com/all4ukraine_ua/'
    },
    {
        name: 'youtube',
        link: 'https://www.youtube.com/channel/UC33UhCxyFSXd9KZgEoYwLUg'
    },
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/company/all4ukraine/'
    },
    {
        name: 'tiktok',
        link: 'https://www.tiktok.com/@all4ua.support'
    },
]

export {headerLinksArr, footerLinksArr, socialLinksArr};