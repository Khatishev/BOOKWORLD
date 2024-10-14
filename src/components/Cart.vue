<template>
    <div class="cart-content-section">
        <div class="cart-header-content">
            <span class="cart-title">Корзина</span>
            <div>
                <button class="btn-buy-everything" @click="buyAllBooks">
                    Купить все
                </button>
                <button class="btn-delete-everything" @click="deleteAllBooks">
                    Удалить все
                </button>
            </div>
        </div>
        <hr />
        <div v-for="(cartItem, index) in cartItems" :key="index">
            <div class="cart-item">
                <div class="cart-item-book">
                    <img class="img-book" :src="cartItem.book.image" alt="book" />
                    <div class="info-book">
                        <div>{{ cartItem.book.title }}</div>
                        <div class="author-book">{{ cartItem.book.author }}</div>
                        <div>{{ cartItem.book.category }}</div>
                    </div>
                    <div class="new-book" v-if="cartItem.book.isNew"></div>
                    <div class="top-book" v-if="cartItem.book.isTop"></div>
                    <div class="sale-book" v-if="cartItem.book.isSale"></div>
                </div>
                <div class="cart-item-details">
                    <div v-if="cartItem.book.isSale" class="cart-price">
                        {{ totalPriceForBook(cartItem) }}₽
                    </div>
                    <div v-else class="cart-price">
                        {{ totalPriceForBook(cartItem) }}₽
                    </div>
                    <div class="cart-quantity-controls">
                        <button class="btn-cart-quantity-left" @click="decreaseQuantity(cartItem)">
                            ➖
                        </button>
                        <span>{{ cartItem.quantity }}</span>
                        <button class="btn-cart-quantity-right" @click="increaseQuantity(cartItem)">
                            ➕
                        </button>
                    </div>
                    <div>
                        <button class="cart-buy-book" @click="buyBook(cartItem)" :disabled="cartItem.quantity === 0">
                            Купить
                        </button>
                        <button class="cart-remove-book" @click="removeBook(cartItem)">
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '../store/cart';

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
    name: 'Cart',
    computed: {
        cartItems() {
            return useCartStore().cartItems;
        },
        totalPriceForBook(): (cartItem: CartItem) => number {
            return (cartItem) => {
                const book = cartItem.book;
                const price = book.isSale ? book.discountedPrice! : book.price;
                return price * cartItem.quantity;
            };
        },
    },
    methods: {
        increaseQuantity(cartItem: CartItem): void {
            useCartStore().increaseQuantity(cartItem);
        },
        decreaseQuantity(cartItem: CartItem): void {
            useCartStore().decreaseQuantity(cartItem);
        },
        buyBook(cartItem: CartItem): void {
            useCartStore().buyBook(cartItem);
        },
        removeBook(cartItem: CartItem): void {
            useCartStore().removeBook(cartItem);
        },
        buyAllBooks(): void {
            useCartStore().buyAllBooks();
        },
        deleteAllBooks(): void {
            useCartStore().deleteAllBooks();
        },
    },
});
</script>