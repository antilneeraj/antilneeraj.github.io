<template>
  <div
    id="loading"
    class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50"
  >
    <div
      class="animate-spin rounded-full border-t-4 border-white h-12 w-12"
    ></div>
  </div>
</template>

<script>
window.addEventListener("load", function () {
  document.querySelector("#loading").remove();
});
</script>

<style>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>