<template>
  <div class="flex py-2">
    <p class="text-xl select-none text-transparent">-</p>
    <span
      ref="typingAnimation"
      class="typing-animation text-xl text-gray-500 inline-block break-words"
    ></span>
  </div>
</template>

<script>
export default {
  mounted() {
    this.startTypingAnimation();
  },
  methods: {
    async typeLine(line) {
      const textElem = this.$refs.typingAnimation;
      for (let i = 0; i < line.length; i++) {
        textElem.innerHTML += line[i];
        await this.sleep(timePerChar);
      }
    },
    async startTypingAnimation() {
      for (let j = 0; j < lines.length; j++) {
        await this.typeLine(lines[j].trim());
        await this.sleep(rest);
        await this.deleteText();
      }
      this.startTypingAnimation(); // Repeat the animation
    },
    async deleteText() {
      const textElem = this.$refs.typingAnimation;
      while (textElem.innerHTML.length > 0) {
        textElem.innerHTML = textElem.innerHTML.slice(0, -1);
        await this.sleep(20);
      }
    },
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
};

const lines = [
  "A tech enthusiast,",
  "Self-taught programmer,",
  "UI/UX Designer",
  "Experienced web developer",
  "Open Source Contributor",
  "Freelancer",
  "and a Student.",
];
const timePerChar = 100;
const rest = 1000;
</script>
