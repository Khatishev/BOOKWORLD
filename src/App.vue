<template>
  <div id="app">
    <Header @search="searchBooks" />
    <div class="main" v-if="showMain">
      <router-view :searchQuery="searchQuery" />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      searchQuery: '',
      showMain: true,
    };
  },
  methods: {
    searchBooks(query: string) {
      this.searchQuery = query;
    },
  },
});
</script>