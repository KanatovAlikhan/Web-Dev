import { Category, Product } from '../types/types';

export const CATEGORIES: Category[] = [
    { id: 1, name: 'Смартфоны', description: 'Мобильные телефоны и аксессуары' },
    { id: 2, name: 'Ноутбуки', description: 'Компьютеры и ноутбуки' },
    { id: 3, name: 'Планшеты', description: 'Планшеты и электронные книги' },
    { id: 4, name: 'Аксессуары', description: 'Аксессуары для техники' }
];

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'iPhone 15 Pro',
        description: 'Apple iPhone 15 Pro 256Gb черный',
        rating: 4.9,
        price: 629990,
        kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-chernyi-113138344/',
        images: [
            'https://i-store.net/img/cat/250.png',
            'https://shop.beeline.kz/binaries/content/gallery/veonmarket/products/smartphones/apple/iphone-15-pro-titan/iphone-15-pro-natural.jpg/iphone-15-pro-natural.jpg/veonmarket%3Alarge',
            'https://www.iphones.ru/wp-content/uploads/2024/09/19.57.38.jpg'
        ],
        likes: 0,
        categoryId: 1
    },
    {
        id: 2,
        name: 'Samsung Galaxy S23',
        description: 'Samsung Galaxy S23 Ultra 256Gb черный',
        rating: 4.8,
        price: 549990,
        kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-256gb-chernyi-109174566/',
        images: ['https://static.tildacdn.pro/tild3963-3739-4832-b631-633237386465/image.png'],
        likes: 0,
        categoryId: 1
    },
    {
        id: 3,
        name: 'Google Pixel 7',
        description: 'Google Pixel 7 Pro 128Gb черный',
        rating: 4.7,
        price: 449990,
        kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-7-pro-128gb-chernyi-106971937/',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyffGdDYuO2wTH2rbJ6R-st_xLI4gAaseAJA&s'],
        likes: 0,
        categoryId: 1
    },
    {
        id: 4,
        name: 'Xiaomi 13 Pro',
        description: 'Xiaomi 13 Pro 256Gb черный',
        rating: 4.6,
        price: 499990,
        kaspiLink: 'https://kaspi.kz/shop/p/xiaomi-13-pro-256gb-chernyi-108814040/',
        images: ['https://novoetv.kz/wp-content/uploads/2023/07/Untitled.jpg'],
        likes: 0,
        categoryId: 1
    },
    {
        id: 5,
        name: 'OnePlus 11',
        description: 'OnePlus 11 256Gb черный',
        rating: 4.5,
        price: 399990,
        kaspiLink: 'https://kaspi.kz/shop/p/oneplus-11-256gb-chernyi-108970987/',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4005N8ER00UZK_N6tpaDgifyfrxGzXtUX4w&s'],
        likes: 0,
        categoryId: 1
    },
    {
        id: 6,
        name: 'MacBook Pro 16',
        description: 'Apple MacBook Pro 16 M2 Pro',
        rating: 4.9,
        price: 1299990,
        kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-mk193-seryi-102892101/',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h69/hcd/84674967076894.jpg?format=gallery-medium'],
        likes: 0,
        categoryId: 2
    },
    {
        id: 7,
        name: 'Dell XPS 15',
        description: 'Dell XPS 15 9520',
        rating: 4.7,
        price: 899990,
        kaspiLink: 'https://kaspi.kz/shop/p/dell-xps-15-9520-210-bcbq-serebristyi-106025932/',
        images: ['https://nout.kz/upload/resize_cache/webp/upload/iblock/997/ndtei2mx04ypnj8wu2pxc9hp0297invw/a3b85cfa2651b28f87f90962489bacfe_1000.webp'],
        likes: 0,
        categoryId: 2
    },
    {
        id: 8,
        name: 'Lenovo ThinkPad X1',
        description: 'Lenovo ThinkPad X1 Carbon Gen 10',
        rating: 4.6,
        price: 799990,
        kaspiLink: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-gen-10-21cb0062rt-chernyi-107866944/',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatuuPGlqRSAuwhzZboqZ3eyq4_Gg9_uyf5A&s'],
        likes: 0,
        categoryId: 2
    },
    {
        id: 9,
        name: 'HP Spectre x360',
        description: 'HP Spectre x360 14',
        rating: 4.5,
        price: 749990,
        kaspiLink: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-ef0030ur-5y457ea-serebristyi-107650973/',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyZHrKw_MORQhWacOWphiYi3nnp08O28E8A&s'],
        likes: 0,
        categoryId: 2
    },
    {
        id: 10,
        name: 'Asus ROG Zephyrus',
        description: 'Asus ROG Zephyrus G14',
        rating: 4.8,
        price: 849990,
        kaspiLink: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-ga402rj-l8032-seryi-106947505/',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRid-gCZkN_WWgCmS0H7RUpoaFfZQ0cQhjOnw&s'],
        likes: 0,
        categoryId: 2
    },
    {
        id: 11,
        name: 'iPad Pro 12.9',
        description: 'Apple iPad Pro 12.9 (2022) 256Gb',
        rating: 4.9,
        price: 799990,
        kaspiLink: 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-256gb-wi-fi-seryi-107284047/',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0wqwVJACU9l_LQjami31-0bOnBUJQ_lW5A&s'],
        likes: 0,
        categoryId: 3
    },
    {
        id: 12,
        name: 'Samsung Galaxy Tab S9',
        description: 'Samsung Galaxy Tab S9 Ultra',
        rating: 4.7,
        price: 699990,
        kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-ultra-512gb-seryi-112406527/',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCg3uIoQu0v1iSY5Z543GQDjvpoOy3oTG1Lg&s'],
        likes: 0,
        categoryId: 3
    },
    {
        id: 13,
        name: 'Kindle Paperwhite',
        description: 'Amazon Kindle Paperwhite 11',
        rating: 4.6,
        price: 99990,
        kaspiLink: 'https://kaspi.kz/shop/p/amazon-kindle-paperwhite-11-8-gb-chernyi-103012219/',
        images: ['https://capital.lv/media/catalog/product/cache/78b7d5e9d325dc0c77c021f203703bf1/f/6/f69d8c13-3ba4-49da-a1bb-5161982304e6.jpg'],
        likes: 0,
        categoryId: 3
    },
    {
        id: 14,
        name: 'Lenovo Tab P12 Pro',
        description: 'Lenovo Tab P12 Pro 256Gb',
        rating: 4.5,
        price: 449990,
        kaspiLink: 'https://kaspi.kz/shop/p/lenovo-tab-p12-pro-256gb-seryi-106671354/',
        images: ['https://images-cdn.ubuy.ae/6527adb1003e0b01e526b6b9-lenovo-tab-p12-pro-with-pen-12-tablet.jpg'],
        likes: 0,
        categoryId: 3
    },
    {
        id: 15,
        name: 'Microsoft Surface Pro 9',
        description: 'Microsoft Surface Pro 9',
        rating: 4.8,
        price: 899990,
        kaspiLink: 'https://kaspi.kz/shop/p/microsoft-surface-pro-9-13-16-gb-256-gb-serebristyi-107700136/',
        images: ['https://e-katalog.kz/posts/files/4720/20.jpg'],
        likes: 0,
        categoryId: 3
    },
    {
        id: 16,
        name: 'AirPods Pro 2',
        description: 'Apple AirPods Pro 2',
        rating: 4.9,
        price: 129990,
        kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/',
        images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASHGdXMXIerI-1nWWHcRm7FEo9H1_1HSphQ&s'],
        likes: 0,
        categoryId: 4
    },
    {
        id: 17,
        name: 'Apple Watch Series 9',
        description: 'Apple Watch Series 9 45mm',
        rating: 4.8,
        price: 249990,
        kaspiLink: 'https://kaspi.kz/shop/p/apple-watch-series-9-45-mm-chernyi-113398437/',
        images: ['https://api.technodom.kz/f3/api/v1/images/800/800/smart_chasy_apple_watch_series_9_45mm_midnight_aluminium_case_midnight_sport_band_sm_mr993_274489_1.jpg'],
        likes: 0,
        categoryId: 4
    },
    {
        id: 18,
        name: 'Samsung Galaxy Watch 6',
        description: 'Samsung Galaxy Watch 6 Classic',
        rating: 4.7,
        price: 199990,
        kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-6-classic-47-mm-chernyi-111018342/',
        images: ['https://images.samsung.com/ca/galaxy-watch6/feature/galaxy-watch6-kv-pc.jpg'],
        likes: 0,
        categoryId: 4
    },
    {
        id: 19,
        name: 'Magic Keyboard',
        description: 'Apple Magic Keyboard',
        rating: 4.6,
        price: 89990,
        kaspiLink: 'https://kaspi.kz/shop/p/apple-magic-keyboard-dlja-ipad-pro-11-belyi-100667169/',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hd3/h7f/63961934626846.jpg'],
        likes: 0,
        categoryId: 4
    },
    {
        id: 20,
        name: 'Apple Pencil 2',
        description: 'Apple Pencil (2nd Generation)',
        rating: 4.8,
        price: 79990,
        kaspiLink: 'https://kaspi.kz/shop/p/apple-pencil-2nd-generation-belyi-9400824/',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h92/h77/63944970567710.jpg'],
        likes: 0,
        categoryId: 4
    }
];