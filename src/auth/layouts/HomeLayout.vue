<template>
  <div class="flex flex-col">
    <!-- Top Menu -->
    <top-menu />

    <main>
      <!-- Side Menu -->
      <side-menu />

      <!-- RouterView -->
      <!-- <router-view /> -->
    </main>
  </div>
</template>

<script>
import TopMenu from "../components/TopMenu.vue";
import SideMenu from "../components/SideMenu.vue";

export default {
  components: { TopMenu, SideMenu },
};
</script>
