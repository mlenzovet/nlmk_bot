<template>
    <div>
    <v-btn
        v-for="route in connectedRoutes"
        variant="tonal"
        class="ma-2 hidden-md-and-down"
        :key="route.title"
        :href="route.href"
        :to="route.to"
    >
        {{route.title}}
    </v-btn>
    </div>
</template>

<script setup lang="ts">
import {getConnectedRoutes} from '@/sitemap/utils.ts';
import { useRoute } from 'vue-router';
const route = useRoute()
const connectedRoutes = computed(()=>getConnectedRoutes(route.name))
</script>

<style scoped>

</style>