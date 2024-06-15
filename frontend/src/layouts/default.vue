<template>
  <v-app>
      <app-sidebar
        v-model="drawer"
      />
      <v-app-bar>
      <template #prepend>
        <v-img height="100%" class="hidden-sm-and-down" width="4vw" src="@/assets/logo.svg"/>
        <v-app-bar-nav-icon @click.stop="toggleDrawer" />
      </template>
      <template #append>
      <alternative-menu/>
      <run-button/>
      </template>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <smart-f-a-b/>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import {DIGEST_TEMPLATE_EDIT_URL} from '@/utils/env-variable-loader';
import AppSidebar from '@/components/AppSidebar.vue';
import AlternativeMenu from "../components/AlternativeMenu.vue";
import SmartFAB from "../components/SmartFAB.vue";
import RunButton from "../components/RunButton.vue";
const drawer: Ref<boolean> = ref(false);
const menu = [
  {
    title: "Настройки",
    icon: "mdi-link-variant",
    to: { name: "/" },
  },
  { title: "Табличка", icon: "mdi-table", to: { name: "/table" } },
  { title: "Шаблон дайджеста", icon: "mdi-file-outline", href: DIGEST_TEMPLATE_EDIT_URL, target: '_blank'},
];
function toggleDrawer() {
  drawer.value = !drawer.value;
}
</script>
