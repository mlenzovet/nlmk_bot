<template>
    <custom-iframe
        name="Таблица"
        :url="GOOGLE_SHEETS_URL"
    />
</template>

<script setup lang="ts">
    import {GOOGLE_SHEETS_URL} from '@/utils/env-variable-loader'
    import '@/components/CustomIframe.vue'
</script>