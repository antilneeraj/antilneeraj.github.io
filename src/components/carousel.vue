<template>
  <div
    id="achievements"
    class="w-full max-w-[100vw] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 my-0 overflow-hidden"
  >
    <div class="w-full h-full">
      <div class="w-full h-full flex flex-col justify-center items-center">
        <div class="h-fit w-fit mb-5">
          <span
            class="sub-title text-4xl font-bold bg-clip-text text-transparent font-k2d bg-gradient-to-r from-pink-500 to-violet-500"
          >
            Achievements
          </span>
        </div>
        <p class="text-gray-300 leading-relaxed text-center font-k2d">
          Here are some of my achievements that I have achieved throughout my journey.
        </p>

        <div class="w-[80%] sm:w-[80%] lg:w-[60%] xl:w-[600px] bg-[#0000] h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[600px] mx-auto relative">
          <swiper
            :class="['w-full h-full absolute bg-[#0000]']"
            :effect="'cards'"
            :grabCursor="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              class="flex justify-center bg-[#0000] items-center"
              v-for="item in portfolioItems"
              :key="item.id"
            >
              <div
                class="w-full bg-[#0000] h-full flex flex-col justify-center items-center"
              >
                <img
                  class="w-fit h-fit bg-[#0000] object-contain"
                  :src="item.image"
                  alt="Achievement Image"
                />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ARImage from "@/assets/Images/AR.png";
import CIPImage from "@/assets/Images/CIP.png";
import JavaScriptImage from "@/assets/Images/JavaScript.jpg";
import PythonImage from "@/assets/Images/Python.jpg";
import SQLImage from "@/assets/Images/SQL.jpg";
import cssCertificate from "@/assets/Images/cssCertificate.jpg";
import CyberSecurityEssentials from "@/assets/Images/CyberSecurityEssentials.jpg";
import FEDCS from "@/assets/Images/FEDCS.png";
import HCD from "@/assets/Images/HCD.png";
import ITWD from "@/assets/Images/ITWD.png";
import POIX from "@/assets/Images/POIX.png";
import problem_solving_basic from "@/assets/Images/problem_solving_basic.jpg";
import python_basic from "@/assets/Images/python_basic.jpg";
import RB from "@/assets/Images/RB.png";
import Typing from "@/assets/Images/Typing.jpg";
import VC from "@/assets/Images/VC.png";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards],
      portfolioItems: [
        {
          id: 1,
          title: "Achievement 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: ARImage,
        },
        {
          id: 2,
          title: "Achievement 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: CIPImage,
        },
        {
          id: 3,
          title: "Achievement 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: JavaScriptImage,
        },
        {
          id: 4,
          title: "Achievement 4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: PythonImage,
        },
        {
          id: 5,
          title: "Achievement 5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: SQLImage,
        },
        {
          id: 6,
          title: "Achievement 6",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: cssCertificate,
        },
        {
          id: 7,
          title: "Achievement 7",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: CyberSecurityEssentials,
        },
        {
          id: 8,
          title: "Achievement 8",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: FEDCS,
        },
        {
          id: 9,
          title: "Achievement 9",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: HCD,
        },
        {
          id: 10,
          title: "Achievement 10",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: ITWD,
        },
        {
          id: 11,
          title: "Achievement 11",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: POIX,
        },
        {
          id: 12,
          title: "Achievement 12",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: problem_solving_basic,
        },
        {
          id: 13,
          title: "Achievement 13",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: python_basic,
        },
        {
          id: 14,
          title: "Achievement 14",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: RB,
        },
        {
          id: 15,
          title: "Achievement 15",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: Typing,
        },
        {
          id: 16,
          title: "Achievement 16",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          image: VC,
        },
      ],
    };
  },
};
</script>

<style>
.swiper-container {
  height: 100vh;
}
</style>
