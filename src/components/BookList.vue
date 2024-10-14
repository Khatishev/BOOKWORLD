<template>
    <div class="content-books">
        <BookItem v-for="book in books" :key="book.title" :book="book" @addToCart="addToCart" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import BookItem from './BookItem.vue';

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
    name: 'BookList',
    components: {
        BookItem,
    },
    props: {
        books: {
            type: Array as PropType<Book[]>,
            required: true,
        },
    },
    methods: {
        addToCart(book: Book): void {
            this.$emit('addToCart', book);
        },
    },
});
</script>