<template>
    <custom-iframe
        name="Список новостных сайтов"
        :url="PARSING_SITES_TABLE_URL"
    />
</template>
<script setup lang="ts">
import CustomIframe from '@/components/CustomIframe.vue';
import {PARSING_SITES_TABLE_URL} from '@/utils/env-variable-loader.ts'
</script>

