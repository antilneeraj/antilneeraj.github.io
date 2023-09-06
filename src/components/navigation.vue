<template>
  <!-- Navigation Bar -->

  <div class="relative flex font-k2d items-center justify-center text-white">
    <nav
      class="flex items-center justify-between fixed h-16 px-10 lg:px-40 my-0 z-50 translate-y-[50%] w-full"
    >
      <div>
        <a
          href="#"
          class="text-3xl sm:text-5xl font-light h-fit flex text-white outline-none select-none"
          ><img
            class="justify-start w-10 sm:w-14"
            src="../assets/Images/logo.png"
            alt="logo"
          />ラジ</a
        >
      </div>
      <ul class="flex gap-8">
        <li>
          <a href="#" class="hover:text-green-300 hidden lg:block">Home</a>
        </li>
        <li>
          <a href="#about" class="hover:text-green-300 hidden lg:block"
            >About</a
          >
        </li>
        <li>
          <a href="#project" class="hover:text-green-300 hidden lg:block"
            >Projects</a
          >
        </li>
        <li>
          <a href="#" class="hover:text-green-300 hidden lg:block"
            >Achievements</a
          >
        </li>
      </ul>

      <!-- ----Contact Button---- -->
      <div class="b h-16 w-fit flex font-quicksand justify-center items-center">
        <div
          @click="openModal"
          class="i lg:block hidden h-10 w-32 bg-gradient-to-br from-green-400 to-green-600 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 active:scale-95 transition duration-300 ease-out"
        ></div>
        <a
          @click="openModal"
          class="text-center text-white lg:block hidden font-semibold z-10 pointer-events-none"
          >Contact</a
        >
      </div>

      <!-- Responsive Dropdown -->

      <div class="text-2xl cursor-pointer lg:hidden" @click="toggle">
        <i :class="iconClass"></i>
      </div>
    </nav>

    <div class="lg:hidden flex justify-center items-center">
      <div
        id="dropDown"
        class="fixed z-40 right-8 top-16 w-72 bg-[rgba(0,0,0,0)] shadow-inset backdrop-blur-lg rounded-xl origin-top-right"
        style="
          transform: scale(0);
          display: none;
          transition: transform 0.3s ease-in-out 0s;
        "
      >
        <li class="list-none flex justify-center items-center p-3">
          <a href="#" class="hover:text-green-300">Home</a>
        </li>
        <li class="list-none flex justify-center items-center p-3">
          <a href="#about" class="hover:text-green-300">About</a>
        </li>
        <li class="list-none flex justify-center items-center p-3">
          <a href="#project" class="hover:text-green-300">Projects</a>
        </li>
        <li class="list-none flex justify-center items-center p-3">
          <a href="#" class="hover:text-green-300">Achievements</a>
        </li>
        <!-- ----Contact Button---- -->
        <div
          class="b h-16 w-fit font-quicksand flex justify-center items-center"
        >
          <div
            @click="openModal"
            class="i h-10 w-32 left-[28%] bg-gradient-to-br from-green-400 to-green-600 items-center rounded-full shadow-2xl cursor-pointer absolute grid overflow-hidden transform hover:scale-x-110 hover:scale-y-105 active:scale-95 transition duration-300 ease-out"
          >
            <a
              @click="openModal"
              class="text-center text-white font-semibold z-10 pointer-events-none"
              >Contact</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <teleport to="body">
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.2)] backdrop-blur z-50 scale-100"
    >
      <div
        class="overflow-y-auto bg-frosty-navbar max-h-[80%] md:max-h-full w-96 md:max-w-md md:w-full mx-4 md:mx-auto rounded-lg overflow-hidden"
      >
        <!-- Modal content -->
        <div class="modal-enter-active">
          <div class="p-6">
            <h2
              class="text-2xl font-semibold mb-3 tracking-wider flex font-k2d items-center justify-between text-white"
            >
              Get In Touch
              <i
                class="fa-solid fa-xmark cursor-pointer hover:text-red-500 hover:rotate-180 rotate-0 transition-all ease-in-out duration-1000"
                @click="closeModal"
              ></i>
            </h2>
            <hr class="mb-4 border-[#374151]" />
            <!-- Contact form -->

            <form class="font-quicksand" name="submit-to-google-sheet" @submit="handleSubmit">
              <div class="grid gap-4 mb-4 md:grid-cols-2">
                <div>
                  <label
                    for="first_name"
                    class="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                    >First name</label
                  >
                  <input
                    type="text"
                    id="first_name"
                    name="FirstName"
                    class="bg-gray-50 mb-2 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    class="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                    >Last name</label
                  >
                  <input
                    type="text"
                    id="last_name"
                    name="LastName"
                    class="bg-gray-50 mb-2 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div>
                  <label
                    for="company"
                    class="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                    >Company</label
                  >
                  <input
                    type="text"
                    id="company"
                    name="Company"
                    class="bg-gray-50 mb-2 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Company Name"
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    class="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                    >Phone number</label
                  >
                  <input
                    type="tel"
                    id="phone"
                    name="PhoneNumber"
                    class="bg-gray-50 mb-2 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+91-1234567890"
                    pattern="^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$"
                  />
                </div>
                <div>
                  <label
                    for="website"
                    class="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                    >Website URL</label
                  >
                  <input
                    type="url"
                    id="website"
                    name="Website"
                    class="bg-gray-50 mb-2 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Website URL"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                    >Email address</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    class="bg-gray-50 mb-2 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="john.doe@company.com"
                    required
                  />
                </div>
              </div>
              <div class="mb-6">
                <label
                  for="Message"
                  class="block mb-4 text-sm font-medium text-gray-900 dark:text-white"
                  >Message</label
                >
                <textarea
                  type="text"
                  id="Message"
                  name="Message"
                  class="bg-gray-50 mb-2 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Message"
                  required
                />
              </div>

              <!-- Submit Button -->
              <div class="flex justify-center mt-4">
                <button
                  type="submit"
                  class="w-3/4 bg-gradient-to-br from-green-400 to-green-600 inline-flex justify-center items-center px-6 py-3 text-white font-semibold rounded-full shadow-2xl cursor-pointer transform hover:scale-x-110 hover:scale-y-105 active:scale-95 transition-all duration-300 ease-out"
                >
                  <span>Submit</span>
                </button>
              </div>
            </form>
            <span
              id="confirmation"
              class="inline-block text-[#61b752] -mt-4"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      showModal: false,
      iconClass: "fa-solid fa-bars", // Initial icon class
      scriptURL:
        "https://script.google.com/macros/s/AKfycbw85LjQ-e6caj2MoDZkwLAOLCynZ0QH4mwD0jMaKYh0RRwxWVzDT00qFmqff0MOcnQ/exec",
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
      this.iconClass = "fa-solid fa-xmark";
    },
    closeModal() {
      this.showModal = false;
      this.iconClass = "fa-solid fa-bars";
    },
    toggle() {
      const dropDown = document.getElementById("dropDown");
      dropDown.style.transformOrigin = "top right";

      if (dropDown.style.display === "none") {
        dropDown.style.display = "block";
        setTimeout(() => {
          dropDown.style.transform = "scale(1)";
        }, 10);
        this.iconClass = "fa-solid fa-xmark";
      } else {
        dropDown.style.transform = "scale(0)";
        setTimeout(() => {
          dropDown.style.display = "none";
        }, 300);
        this.iconClass = "fa-solid fa-bars";
      }
    },
    handleSubmit(event) {
      event.preventDefault();
      const form = document.forms["submit-to-google-sheet"];

      fetch(this.scriptURL, { method: "POST", body: new FormData(form) })
        .then(response => {
          if (response.ok) {
            alert("Thank you! Your response has been recorded.");
            form.reset();
          } else {
            throw new Error("Network Connection Error! Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error!", error.message);
        });
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");

      if (window.scrollY > 0) {
        nav.classList.add("bg-[rgba(0,0,0,0)]", "backdrop-blur-lg");
      } else {
        nav.classList.remove("bg-[rgba(0,0,0,0)]", "backdrop-blur-lg");
      }
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", () => {});
  },
};
</script>
