<template>
  <v-app>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          v-for="item in menu"
          :key="item.title"
          :title="!item.href && item.title"
          :to="item.to"
          :href="item.href"
          :target="item.target"
        >
          <div class="text-decoration-underline" v-if="item.href">
            {{item.title}}
          </div>
          <template #prepend>
          <v-icon :icon="item.icon"/>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
        <v-app-bar>
      <template #prepend>
        <v-img height="100%" width="4vw" src="@/assets/logo.svg" />
        <v-app-bar-nav-icon @click.stop="toggleDrawer" />
      </template>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import {DIGEST_TEMPLATE_EDIT_URL} from '@/utils/env-variable-loader';
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
