<template>
    <div class="fixed animate-bounce bottom-5 right-5 sm:bottom-10 sm:right-10 z-50">
      <button
        v-show="showButton"
        @click="scrollToTop"
        class="bg-gradient-to-br from-green-400 to-green-600 h-12 w-12 rounded-full shadow-2xl cursor-pointer overflow-hidden transform sm:hover:scale-110 scale-60 sm:scale-100 active:scale-50 sm:active:scale-95 transition duration-300 ease-out"
      >
        <i class="fa-solid fa-arrow-up text-white text-xl"></i>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showButton: false
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.showButton = window.scrollY > 100;
      },
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };
  </script>
  