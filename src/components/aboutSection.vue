<template>
  <!-- About Section -->
  <div
    id="about"
    class="w-full min-h-screen grid items-center px-10 lg:px-40 my-0"
  >
    <div class="container mt-20">
      <div class="flex gap-16">
        <div class="w-[257.487px] -translate-y-12 hidden lg:block">
          <div class="relative">
            <img
              src="../assets/Images/self-gen.png"
              alt="Profile Image"
              class="w-full"
            />
          </div>
        </div>
        <div class="w-full my-12 lg:w-[70%]">
          <div class="h-fit w-fit mb-5 -mt-5">
            <span
              class="sub-title text-4xl font-bold font-k2d bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
            >
              About Me
            </span>
          </div>
          <p
            class="text-gray-300 w-full text-base font-quicksand leading-relaxed text-justify"
          >
            I have successfully completed my Diploma in Computer Engineering
            from Government Polytechnic Sonipat, which has equipped me with a
            strong foundation in various technologies including HTML, CSS,
            Tailwind CSS, Vue.js, JavaScript, MySQL, Java, Python, and C.
            Alongside my academic achievements, I have also gained practical
            experience through live projects. I am certified in Python, MySQL,
            and JavaScript, showcasing my dedication to staying updated with the
            latest developments and trends in the industry.
          </p>

          <div
            class="flex text-white items-start flex-wrap justify-between mt-4"
            v-if="isScreenSizeSmall()"
          >
            <div class="flex flex-col gap-y-4 items-start">
              <p
                @click="toggleAbout"
                for="skills"
                :class="{
                  'active-link': currentAbout.for === 'skills',
                }"
                class="tab-links after:animate-pulse cursor-pointer flex items-center justify-start gap-2 relative font-k2d"
              >
                <i class="fas fa-check-circle text-green-500"></i>Skills
              </p>
              <p
                @click="toggleAbout"
                for="internships"
                :class="{
                  'active-link': currentAbout.for === 'internship',
                }"
                class="tab-links after:animate-pulse cursor-pointer flex items-center justify-start gap-2 relative font-k2d"
              >
                <i class="fa-solid fa-code text-purple-500"></i>Internship
              </p>
            </div>
            <div class="flex flex-col gap-y-4 items-end">
              <p
                @click="toggleAbout"
                for="education"
                :class="{
                  'active-link': currentAbout.for === 'education',
                }"
                class="tab-links after:animate-pulse cursor-pointer flex items-center justify-start gap-2 relative font-k2d"
              >
                <i class="fas fa-book text-blue-500"></i>Education
              </p>
              <p
                @click="toggleAbout"
                for="language"
                :class="{
                  'active-link': currentAbout.for === 'language',
                }"
                class="tab-links after:animate-pulse cursor-pointer flex items-center justify-start gap-2 relative font-k2d"
              >
                <i class="fas fa-globe text-yellow-500"></i>Language
              </p>
            </div>
          </div>

          <div
            class="flex text-white items-center flex-wrap justify-start gap-5 mt-8"
            v-else
          >
            <p
              @click="toggleAbout"
              for="skills"
              :class="{
                'active-link': currentAbout.for === 'skills',
              }"
              class="tab-links after:animate-pulse cursor-pointer flex items-center justify-start gap-2 relative font-k2d"
            >
              <i class="fas fa-check-circle text-green-500"></i>Skills
            </p>
            <p
              @click="toggleAbout"
              for="education"
              :class="{
                'active-link': currentAbout.for === 'education',
              }"
              class="tab-links after:animate-pulse cursor-pointer flex items-center justify-start gap-2 relative font-k2d"
            >
              <i class="fas fa-book text-blue-500"></i>Education
            </p>
            <p
              @click="toggleAbout"
              for="internships"
              :class="{
                'active-link': currentAbout.for === 'internship',
              }"
              class="tab-links after:animate-pulse cursor-pointer flex items-center justify-start gap-2 relative font-k2d"
            >
              <i class="fa-solid fa-code text-purple-500"></i>Internship
            </p>
            <p
              @click="toggleAbout"
              for="language"
              :class="{
                'active-link': currentAbout.for === 'language',
              }"
              class="tab-links after:animate-pulse cursor-pointer flex items-center justify-start gap-2 relative font-k2d"
            >
              <i class="fas fa-globe text-yellow-500"></i>Language
            </p>
          </div>
          <div class="tab-contents mt-5">
            <ul
              class="text-gray-300 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              <li
                v-for="content in currentAbout.content"
                :key="content.head"
                class="mb-3"
              >
                <div class="animate-fade-in">
                  <span :class="currentAbout.color" class="font-k2d">{{ content.head }}</span
                  ><br />
                  <span v-html="content.body" class="text-sm font-quicksand"></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const width = ref(window.innerWidth);
window.addEventListener('resize', e => width.value = window.innerWidth)

function isScreenSizeSmall() {
  return width.value < 500;
}

const aboutLists = [
  {
    for: "skills",
    color: "text-green-500",
    content: [
      {
        head: "C, Java, Python",
        body: "Expereince in C, Java, Python for Developing Console Apps with working knowledge of MySQL",
      },
      {
        head: "Web Development",
        body: "Expertise in HTML, CSS, TailwindCSS with working knowledge of JavaScript, Vue.js & React",
      },
      {
        head: "UI/UX",
        body: "Designing Web/App Interfaces in applications like Figma",
      },
      {
        head: "Problem Solving",
        body: "Passionate about coding and problem solving, constantly seeking new challenges to improve my skills",
      },
      {
        head: "Typing",
        body: "Average Speed of 80 WPM with 100% Accuracy",
      },
    ],
  },
  {
    for: "education",
    color: "text-blue-500",
    content: [
      {
        head: "2019 - 2020",
        body: "Secondary Education<br>Tika Ram Model School (CBSE)",
      },
      {
        head: "2021 - 2022",
        body: "Senior Secondary Education<br>Haryana Open School (BSEH)",
      },
      {
        head: "2020 - 2023",
        body: "Diploma in Computer Engineering<br>Government Polytechnic Sonipat (HSBTE)",
      },
    ],
  },
  {
    for: "internships",
    color: "text-purple-500",
    content: [
      {
        head: "Junior Web Developer",
        body: 'Internship at <a class="border-b-2 border-dashed text-purple-200" href="https://www.linkedin.com/company/vexvo/" target="_blank">Vexvo</a> (May 2023 - Present)',
      },
      {
        head: "Android Developer",
        body: 'Internship at <a class="border-b-2 border-dashed text-purple-200" href="https://www.linkedin.com/company/solitaire-infosys-inc/" target="_blank">Solitaire Infosys Inc.</a> (August 2022 - September 2022)',
      },
    ],
  },
  {
    for: "language",
    color: "text-yellow-500",
    content: [
      {
        head: "Hindi",
        body: "Native or bilingual proficiency",
      },
      {
        head: "English",
        body: "Professional working proficiency",
      },
      {
        head: "Japanese",
        body: "Limited working proficiency",
      },
    ],
  },
];

const currentAbout = ref(aboutLists[0]);

onMounted(() => {
  updateActiveTab("skills");
});

function toggleAbout(e) {
  const selectedTab = e.target.getAttribute("for");
  updateActiveTab(selectedTab);
  currentAbout.value = aboutLists.find((item) => item.for === selectedTab);
}

function updateActiveTab(selectedTab) {
  aboutLists.forEach((item) => {
    const tabLink = document.querySelector(`[for=${item.for}]`);
    if (item.for === selectedTab) {
      tabLink.classList.add("active-link");
      document.documentElement.style.setProperty(
        "--active-link-color",
        window.getComputedStyle(tabLink.querySelector("i")).color
      );
    } else {
      tabLink.classList.remove("active-link");
    }
  });
}
</script>

<style>
.active-link::after {
  content: "";
  display: block;
  height: 2px;
  border-radius: 1in;
  width: 0;
  bottom: -1px;
  left: 25px;
  position: absolute;
  background-color: var(--active-link-color);
}

.active-link::after {
  width: calc(100% - 25px);
}

.tab-link {
  position: relative;
  display: inline-block;
}
</style>
