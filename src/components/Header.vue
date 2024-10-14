<template>
  <header class="header">
    <div class="header-content-section">
      <div class="brand-container">
        <router-link to="/">
          <img class="icon-logo-books" src="/src/assets/icon-logo-books.png" alt="logo books" />
        </router-link>
        <router-link to="/">
          <span class="brand-title">BOOKWORLD</span>
        </router-link>
      </div>
      <div class="search-container">
        <input v-model="searchQuery" type="text" placeholder="Поиск книги..." />
        <button @click="searchBooks" class="btn-search">
          <img class="icon-magnifier" src="/src/assets/icon-magnifier.png" alt="magnifier" />
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    searchBooks() {
      this.$emit('search', this.searchQuery);
    },
  },
});
</script>