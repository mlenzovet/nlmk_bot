<template>
    <custom-iframe
        name="Настройки LLM"
        :url="LANG_SMITH_URL"
    />
</template>

<script setup lang="ts">
    import { LANG_SMITH_URL } from '@/utils/env-variable-loader';
    import '@/components/CustomIframe.vue'
</script>