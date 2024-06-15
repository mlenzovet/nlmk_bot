<template>
    <custom-iframe
        name="Список новостных сайтов"
        :url="SUMMARIZED_NEWS_TABLE_URL"
    />
</template>
<script setup lang="ts">
import CustomIframe from '@/components/CustomIframe.vue';
import {SUMMARIZED_NEWS_TABLE_URL} from '@/utils/env-variable-loader';
</script>

