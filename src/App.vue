<template>
  <v-app>
    <v-main>
      <Root />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Root from "@/components/Root.vue";

export default Vue.extend({
  name: 'App',
  components: {Root},
  data: () => ({}),
});
</script>
