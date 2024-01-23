<template>
  <div
    id="project"
    class="w-full min-h-screen flex items-center justify-center px-10 lg:px-40 my-0"
  >
    <div class="w-full h-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <div class="h-fit w-fit mb-5">
          <span
            class="sub-title text-4xl font-bold bg-clip-text text-transparent font-k2d bg-gradient-to-r from-pink-500 to-violet-500"
          >
            Projects
          </span>
        </div>
        <p class="text-gray-300 leading-relaxed text-center font-k2d">
          Here are some of my projects that I have worked on.
        </p>
        <!-- cards -->
        <div class="flex flex-wrap justify-center gap-x-6">
          <div v-for="project in projects" :key="project.title">
            <div
              class="min-h-[350px] max-w-[300px] rounded-2xl shadow-inset mt-24 backdrop-blur-xl bg-frosty px-12"
            >
              <div class="flex justify-center items-center flex-col">
                <img
                  class="w-32 h-32 -translate-y-[50%]"
                  :src="requireImage(project.image)"
                />
                <span class="text-white -mt-10 font-k2d text-2xl">{{
                  project.title
                }}</span>
                <p
                  class="text-[rgba(255,255,255,.5)] text-sm text-center font-quicksand font-[100]"
                >
                  {{ project.description }}
                </p>
                <div class="flex text-white text-3xl gap-6 mt-2">
                  <a :href="project.github" target="_blank"
                    ><i
                      class="fa-brands fa-github cursor-pointer hover:text-green-300 transition-all hover:scale-110 active:scale-95 duration-300 ease-in-out"
                    ></i
                  ></a>
                  <a :href="project.linkedin" target="_blank"
                    ><i
                      class="fa-brands fa-linkedin cursor-pointer hover:text-blue-300 transition-all hover:scale-110 active:scale-95 duration-300 ease-in-out"
                    ></i
                  ></a>
                </div>
                <button class="mt-4 hover:shadow-inset transition-shadow duration-300 ease-in-out h-10 w-32 rounded-lg">
                  <a :href="project.liveLink" target="_blank"
                    ><span
                      class="flex gap-2 items-center justify-center font-k2d text-md text-[#4febf9cc] transition-all duration-300 ease-in-out"
                      >Visit Live
                      <i
                        class="fa-solid fa-arrow-up-right-from-square text-sm"
                      ></i></span
                  ></a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import studentImage from '@/assets/Images/student.svg';
import youtubeImage from '@/assets/Images/youtube.svg';
import minesweeperImage from '@/assets/Images/minesweeper.png';

const requireImage = (imageName) => {
  switch (imageName) {
    case 'student.svg':
      return studentImage;
    case 'youtube.svg':
      return youtubeImage;
    case 'minesweeper.png':
      return minesweeperImage;
    default:
      return '';
  }
};

const projects = [
  {
    title: "SMS",
    image: "student.svg",
    description:
      "Introducing An efficient web application designed for comprehensive student and teacher management within a school",
    github: "https://www.github.com/antilneeraj/SMS",
    linkedin: "https://www.linkedin.com/in/neerajantil",
    liveLink: "https://antilneeraj.github.io/SMS",
  },
  {
    title: "Youtube Clone",
    image: "youtube.svg",
    description:
      "A dynamic, Rapid API-driven platform mimicking YouTube's core functionality, enabling seamless video search, playback, and loading.",
    github: "https://www.github.com/antilneeraj/youtube-clone",
    linkedin: "https://www.linkedin.com/in/neerajantil",
    liveLink: "https://youtubeclone-neeraj.netlify.app/",
  },
  {
    title: "Minesweeper",
    image: "minesweeper.png",
    description:
      "Explore the Minesweeper game, with different difficulty levels for a fun and brain-boosting experience during your free time.",
    github: "https://github.com/antilneeraj/Minesweeper",
    linkedin: "https://www.linkedin.com/in/neerajantil",
    liveLink: "https://antilneeraj.github.io/Minesweeper/",
  },
];
</script>
