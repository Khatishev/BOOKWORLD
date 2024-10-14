<template>
    <div v-if="!showCart" class="main-content-section">
        <div class="category-buttons-section">
            <button class="btn-category" @click="setCategory('Все книги')">
                Все книги
            </button>
            <button class="btn-category" @click="setCategory('Фантастика')">
                Фантастика
            </button>
            <button class="btn-category" @click="setCategory('Классика')">
                Классика
            </button>
            <button class="btn-category" @click="setCategory('Бизнес')">
                Бизнес
            </button>
            <button class="btn-category" @click="setCategory('Детское')">
                Детское
            </button>
            <button class="btn-new btn-category" @click="setCategory('Новинки')">
                Новинки
            </button>
            <button class="btn-top btn-category" @click="setCategory('Лучшие')">
                Лучшие
            </button>
            <button class="btn-sale btn-category" @click="setCategory('Скидки')">
                Скидки
            </button>
            <router-link to="/cart" class="btn-basket btn-category">
                Корзина
            </router-link>
        </div>
        <div>
            <p class="data-display-title">{{ selectedCategory }}</p>
            <hr />
        </div>
        <BookList :books="filteredBooks" @addToCart="addToCart" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '../store/cart';
import BookList from './BookList.vue';

interface Book {
    image: string;
    title: string;
    author: string;
    category: string;
    price: number;
    hover: boolean;
    isNew?: boolean;
    isTop?: boolean;
    isSale?: boolean;
    discountedPrice?: number;
}

interface CartItem {
    book: Book;
    quantity: number;
}

export default defineComponent({
    name: 'Main',
    components: {
        BookList,
    },
    props: {
        searchQuery: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            showCart: false,
            selectedCategory: 'Все книги',
            filteredBooks: [] as Book[],
            books: [
                {
                    image: './Fantastic/Fantastic1.jpg',
                    title: 'Разорванное пространство',
                    author: 'Джон Скальци',
                    category: 'Фантастика',
                    price: 1500,
                    hover: false,
                },
                {
                    image: './Classic/Classic1.jpg',
                    title: 'Поющие в терновнике',
                    author: 'Колин Маккалоу',
                    category: 'Классика',
                    price: 1300,
                    hover: false,
                    isNew: true,
                },
                {
                    image: './Business/Business1.jpg',
                    title: 'Стратегия голубого океана',
                    author: 'У. Чан Ким и Рене Моборн',
                    category: 'Бизнес',
                    price: 1800,
                    hover: false,
                    isNew: true,
                },
                {
                    image: './Children\'s/Children\'s1.jpg',
                    title: 'Что я видел',
                    author: 'Борис Житков',
                    category: 'Детское',
                    price: 1100,
                    hover: false,
                },
                {
                    image: './Fantastic/Fantastic2.jpg',
                    title: 'Путешествия Гулливера',
                    author: 'Джонатан Свифт',
                    category: 'Фантастика',
                    price: 1500,
                    hover: false,
                },
                {
                    image: './Classic/Classic2.jpg',
                    title: '1984',
                    author: 'Джордж Оруэлл',
                    category: 'Классика',
                    price: 1300,
                    hover: false,
                    isTop: true,
                },
                {
                    image: './Business/Business2.png',
                    title: 'От хорошего к великому',
                    author: 'Джим Коллинз',
                    category: 'Бизнес',
                    price: 1800,
                    hover: false,
                    isTop: true,
                },
                {
                    image: './Children\'s/Children\'s2.jpg',
                    title: 'Дикая собака Динго',
                    author: 'Р. Фраерман',
                    category: 'Детское',
                    price: 1100,
                    hover: false,
                },
                {
                    image: './Fantastic/Fantastic3.jpg',
                    title: 'Клара и солнце',
                    author: 'Кадзуо Исигуро',
                    category: 'Фантастика',
                    price: 1500,
                    hover: false,
                    isSale: true,
                    discountedPrice: 1290,
                },
                {
                    image: './Classic/Classic3.jpg',
                    title: 'Старик и море',
                    author: 'Эрнест Хемингуэй',
                    category: 'Классика',
                    price: 1300,
                    hover: false,
                    isSale: true,
                    discountedPrice: 1090,
                },
                {
                    image: './Business/Business3.png',
                    title: 'Теория U',
                    author: 'Отто Шармер',
                    category: 'Бизнес',
                    price: 1800,
                    hover: false,
                    isSale: true,
                    discountedPrice: 1590,
                },
                {
                    image: './Children\'s/Children\'s3.jpg',
                    title: 'Лесная газета',
                    author: 'Виталий Бианки',
                    category: 'Детское',
                    price: 1100,
                    hover: false,
                    isSale: true,
                    discountedPrice: 890,
                },
                {
                    image: './Fantastic/Fantastic4.jpg',
                    title: 'Цвет волшебства',
                    author: 'Терри Пратчетт',
                    category: 'Фантастика',
                    price: 1500,
                    hover: false,
                    isTop: true,
                },
                {
                    image: './Classic/Classic4.jpg',
                    title: 'Зеленая миля',
                    author: 'Стивен Кинг',
                    category: 'Классика',
                    price: 1300,
                    hover: false,
                },
                {
                    image: './Business/Business4.png',
                    title: 'Принципы',
                    author: 'Рэй Далио',
                    category: 'Бизнес',
                    price: 1800,
                    hover: false,
                },
                {
                    image: './Children\'s/Children\'s4.jpg',
                    title: 'Два Капитана',
                    author: 'В.Каверин',
                    category: 'Детское',
                    price: 1100,
                    hover: false,
                    isTop: true,
                },
                {
                    image: './Fantastic/Fantastic5.jpg',
                    title: 'Война Миров',
                    author: 'Герберт Уэллс',
                    category: 'Фантастика',
                    price: 1500,
                    hover: false,
                    isNew: true,
                },
                {
                    image: './Classic/Classic5.jpg',
                    title: 'Доктор Живаго',
                    author: 'Борис Пастернак',
                    category: 'Классика',
                    price: 1300,
                    hover: false,
                },
                {
                    image: './Business/Business5.png',
                    title: 'Спин-продажи',
                    author: 'Нил Рекхэм',
                    category: 'Бизнес',
                    price: 1800,
                    hover: false,
                },
                {
                    image: './Children\'s/Children\'s5.jpg',
                    title: 'Кондуит и Швамбрания',
                    author: 'Лев Кассиль',
                    category: 'Детское',
                    price: 1100,
                    hover: false,
                    isNew: true,
                },
            ] as Book[],
        };
    },
    computed: {
        totalPriceForBook(): (cartItem: CartItem) => number {
            return (cartItem) => {
                const book = cartItem.book;
                const price = book.isSale ? book.discountedPrice! : book.price;
                return price * cartItem.quantity;
            };
        },
        cartItems() {
            return useCartStore().cartItems;
        },
    },
    watch: {
        searchQuery(newQuery) {
            this.searchBooks(newQuery);
        },
    },
    methods: {
        setCategory(category: string): void {
            this.selectedCategory = category;
            this.filterBooksByCategory();
        },
        filterBooksByCategory(): void {
            let filtered = this.books;
            switch (this.selectedCategory) {
                case 'Все книги':
                    break;
                case 'Фантастика':
                case 'Классика':
                case 'Бизнес':
                case 'Детское':
                    filtered = filtered.filter(
                        (book) => book.category === this.selectedCategory
                    );
                    break;
                case 'Новинки':
                    filtered = filtered.filter((book) => book.isNew);
                    break;
                case 'Лучшие':
                    filtered = filtered.filter((book) => book.isTop);
                    break;
                case 'Скидки':
                    filtered = filtered.filter((book) => book.isSale);
                    break;
                default:
                    break;
            }
            this.filteredBooks = filtered;
        },
        searchBooks(query: string): void {
            let filtered = this.books;
            if (query) {
                filtered = filtered.filter(
                    (book) =>
                        book.title.toLowerCase().includes(query.toLowerCase()) ||
                        book.author.toLowerCase().includes(query.toLowerCase())
                );
            }
            this.filteredBooks = filtered;
        },
        addToCart(book: Book): void {
            useCartStore().addToCart(book);
        },
    },
    created(): void {
        this.filteredBooks = this.books;
    },
});
</script>