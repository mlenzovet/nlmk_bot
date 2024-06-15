<template>
    <v-fab absolute app rounded append-icon="mdi-forward"
    v-if="nextStepRoute"
    :href="nextStepRoute.href"
    :to="nextStepRoute.to"
    :target="nextStepRoute && '_blank'"
    class="mb-6 ml-n1"
    >
    Следующий шаг
    </v-fab>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { findNextStepRoute } from '../sitemap/utils';
const route = useRoute();
const nextStepRoute = computed(()=>findNextStepRoute(route.name));
</script>

<style scoped>

</style>