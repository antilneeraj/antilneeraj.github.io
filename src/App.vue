<template>
  <loading />

  <navigation />

  <div
    class="min-h-screen w-full lg:px-40 px-10 flex items-center justify-center"
  >
    <div class="relative w-full max-w-lg">
      <!-- Blobs  -->
      <div
        class="absolute top-40 w-16 h-16 left-2 sm:left-20 lg:w-52 lg:h-52 md:w-32 md:h-32 bg-purple-500 rounded-full opacity-70 filter blur-xl animate-blob blobs"
      ></div>
      <div
        class="absolute top-20 right-4 sm:right-32 lg:right-16 w-20 h-20 md:w-40 md:h-40 lg:w-64 lg:h-64 bg-green-500 rounded-full opacity-70 filter blur-xl animate-blob animation-delay-2000 blobs"
      ></div>
      <div
        class="absolute lg:-bottom-20 sm:bottom-0 bottom-10 left-[45%] w-14 h-14 md:w-24 md:h-24 lg:w-40 lg:h-40 bg-blue-500 rounded-full opacity-70 filter blur-xl animate-blob animation-delay-4000 blobs"
      ></div>
      <!-- Hero Section -->
      <div class="content">
        <section
          class="relative flex flex-col justify-center items-center h-full"
        >
          <div
            class="animate-fade-in translate-x-[-10%] h-80 w-80 sm:h-96 sm:w-96 relative"
            id="img"
          >
            <img
              src="../src/assets/Images/self.png"
              class="translate-x-10 translate-y-5 shadow-inner rounded-full h-80 w-80 sm:h-96 sm:w-96"
            />
          </div>

          <div class="animate-fade-in-up font-k2d">
            <h1 class="text-4xl sm:text-5xl font-bold py-2 text-white">
              Hello, I'm
              <span
                class="bg-clip-text text-transparent bg-gradient-to-l from-pink-500 to-violet-500"
                >Neeraj</span
              >
            </h1>
          </div>

          <div class="animate-fade-in-down font-quicksand">
            <typing />
          </div>

          <div class="animate-fade-in-up text-3xl flex gap-10 my-2 text-white">
            <a href="https://www.github.com/antilneeraj" target="_blank"
              ><i
                class="fa-brands fa-github cursor-pointer hover:text-green-300 transition-all hover:scale-110 active:scale-95 duration-300 ease-in-out"
              ></i
            ></a>
            <a href="https://linkedin.com/in/neerajantil" target="_blank"
              ><i
                class="fa-brands fa-linkedin cursor-pointer hover:text-blue-300 transition-all hover:scale-110 active:scale-95 duration-300 ease-in-out"
              ></i
            ></a>
            <a
              href="https://discordapp.com/users/1089184217667215501"
              target="_blank"
              ><i
                class="fa-brands fa-discord cursor-pointer hover:text-[#4febf9cc] transition-all hover:scale-110 active:scale-95 duration-300 ease-in-out"
              ></i
            ></a>
            <a href="https://www.instagram.com/neerajantill" target="_blank"
              ><i
                class="fa-brands fa-instagram cursor-pointer hover:text-purple-300 transition-all hover:scale-110 active:scale-95 duration-300 ease-in-out"
              ></i
            ></a>
          </div>
        </section>
      </div>
    </div>
  </div>

  <aboutSection />

  <projectSection />

  <carousel />

  <footerCopyright />

  <div
    class="fixed animate-bounce bottom-2 right-2 sm:bottom-10 sm:right-10 z-50"
  >
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="bg-gradient-to-br from-green-400 to-green-600 h-12 w-12 rounded-full shadow-2xl cursor-pointer overflow-hidden transform sm:hover:scale-110 scale-[.8] sm:scale-100 active:scale-50 sm:active:scale-95 transition duration-300 ease-out"
    >
      <i class="fa-solid fa-arrow-up text-white text-xl"></i>
    </button>
  </div>
</template>

<script setup>
import navigation from "./components/navigation.vue";
import typing from "./components/typing.vue";
import loading from "./components/loading.vue";
import aboutSection from "./components/aboutSection.vue";
import projectSection from "./components/projectSection.vue";
import footerCopyright from "./components/footerCopyright.vue";
import carousel from "./components/carousel.vue";
</script>

<script>
export default {
  data() {
    return {
      showButton: false,
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
