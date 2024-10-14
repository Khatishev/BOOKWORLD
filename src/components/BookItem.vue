<template>
    <div class="box-book">
        <img class="img-book" :src="book.image" alt="book" />
        <div class="info-book">
            <div>{{ book.title }}</div>
            <div class="author-book">{{ book.author }}</div>
            <div>{{ book.category }}</div>
        </div>
        <div class="price-book"
            :style="{ backgroundColor: book.hover ? '#333' : 'rgb(225, 225, 225)', color: book.hover ? '#fff' : '' }">
            <div v-if="book.isSale" class="price-container">
                <span class="old-price">{{ book.price }}₽</span>
                <span>{{ book.discountedPrice }}₽</span>
            </div>
            <div v-else class="price">{{ book.price }}₽</div>
        </div>
        <button class="btn-buy-book" @click="addToCart" @mouseenter="book.hover = true"
            @mouseleave="book.hover = false">
            <img class="icon-shopping-cart" src="/src/assets/icon-shopping-cart.png" alt="cart" />
        </button>
        <div class="new-book" v-if="book.isNew"></div>
        <div class="top-book" v-if="book.isTop"></div>
        <div class="sale-book" v-if="book.isSale"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

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

export default defineComponent({
    name: 'BookItem',
    props: {
        book: {
            type: Object as PropType<Book>,
            required: true,
        },
    },
    methods: {
        addToCart(): void {
            this.$emit('addToCart', this.book);
        },
    },
});
</script>