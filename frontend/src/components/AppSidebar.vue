<template>
    <v-navigation-drawer v-model="drawer" width="350">

      <v-list v-model:opened="openedArray"
        open-strategy="multiple"
      >
      <v-list-group
        :value="pageGroup.title"
        :key="pageGroup"
        fluid
        v-for="pageGroup in sitemap"
      >
      <template #activator={props}>
      <v-list-item
        v-bind="props"
        :prepend-icon="pageGroup.icon"
        :title="pageGroup.title"
        :key="pageGroup.title"
      />
      </template>
        <v-list-item
          v-for="item in pageGroup.items"
          :key="item.title"
          :title="!item.href && item.title"
          :to="item.to"
          :href="item.href"
          :target="item.href && '_blank'"
        >
          <div class="text-decoration-underline" v-if="item.href">
            {{item.title}}
          </div>
          <template #prepend>
          <v-icon :icon="item.icon"/>
          </template>
        </v-list-item>
      </v-list-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {sitemap} from "@/sitemap/sitemap";
const drawer = defineModel<boolean>();
const openedArray = ref(sitemap.map(pageGroup=>pageGroup.title));
</script>