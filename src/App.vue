<template>
  <loading />

  <div id="cursor" class="cursor">
    <div class="ring ring-transparent">
      <div></div>
    </div>
    <div class="ring ring-transparent">
      <div></div>
    </div>
  </div>

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
                class="fa-brands fa-github  hover:text-green-300 transition-all hover:scale-110 active:scale-95 duration-300 ease-in-out"
              ></i
            ></a>
            <a href="https://linkedin.com/in/neerajantil" target="_blank"
              ><i
                class="fa-brands fa-linkedin  hover:text-blue-300 transition-all hover:scale-110 active:scale-95 duration-300 ease-in-out"
              ></i
            ></a>
            <a
              href="https://discordapp.com/users/1089184217667215501"
              target="_blank"
              ><i
                class="fa-brands fa-discord  hover:text-[#4febf9cc] transition-all hover:scale-110 active:scale-95 duration-300 ease-in-out"
              ></i
            ></a>
            <a href="https://www.instagram.com/neerajantill" target="_blank"
              ><i
                class="fa-brands fa-instagram  hover:text-purple-300 transition-all hover:scale-110 active:scale-95 duration-300 ease-in-out"
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
      class="bg-gradient-to-br from-green-400 to-green-600 h-12 w-12 rounded-full shadow-2xl  overflow-hidden transform sm:hover:scale-110 scale-[.8] sm:scale-100 active:scale-50 sm:active:scale-95 transition duration-300 ease-out"
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
    window.addEventListener("mousemove", this.handleMouseMove);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("mousemove", this.handleMouseMove);
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 100;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleMouseMove(e) {
      const rings = document.querySelectorAll(".ring");
      const cursordivdiv = document.querySelectorAll(".cursor div div");

      cursordivdiv.forEach(function (element) {
        if (
          e.target.tagName === "A" ||
          e.target.tagName === "BUTTON" ||
          (e.target.parentNode && e.target.parentNode.tagName === "BUTTON") ||
          e.target.tagName === "I" ||
          e.target.tagName === "IMG" ||
          e.target.tagName === "SPAN"
        ) {
          element.style.background = "white";
          element.style.boxShadow = "0 0 10px white";
        } else {
          element.style.background = "transparent";
          element.style.boxShadow = "0 0 10px white";
        }
      });

      rings.forEach(function (ring) {
        ring.style.transform = `translate(-50%, -50%)`;
        ring.style.top = `${e.clientY}px`;
        ring.style.left = `${e.clientX}px`;
      });
    },
  },
};
</script>

<style>
* {
  cursor: none;
}

button{
  cursor: none;
}

.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 2;
  pointer-events: none;
  z-index: 999;
}
.cursor div {
  position: absolute;
  display: grid;
  place-items: center;
}
.cursor div div {
  border: 2px solid white;
  border-radius: 50%;
  animation: pulse 2.5s linear infinite;
  box-shadow: 0 0 10px white;
  transition: transform 0.4s, background 0.4s;
}
.cursor div:nth-child(1),
.cursor div:nth-child(2) {
  width: 100%;
  height: 100%;
}
.cursor div:nth-child(1) {
  transition: top 0.2s ease-out, left 0.2s ease-out;
}
.cursor div:nth-child(2) {
  transition: top 0.1s ease-out, left 0.1s ease-out;
}
.cursor div:nth-child(2) div {
  background: #fff;
  border-radius: 50%;
  width: 4px;
  height: 4px;
}
</style>
