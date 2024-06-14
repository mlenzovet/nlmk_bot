<template>
    <custom-iframe
        name="Ранжированные новости"
        :url="RANKED_NEWS_TABLE_URL"
    />
</template>
<script setup lang="ts">
import CustomIframe from '@/components/CustomIframe.vue';
import {RANKED_NEWS_TABLE_URL} from '@/utils/env-variable-loader';
</script>

