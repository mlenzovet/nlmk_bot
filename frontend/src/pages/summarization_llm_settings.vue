<template>
    <custom-iframe
        name="Настройки суммаризации LLM"
        :url="SUMMARIZING_LANG_SMITH_URL"
    />
</template>
<script setup lang="ts">
import CustomIframe from '@/components/CustomIframe.vue';
import {SUMMARIZING_LANG_SMITH_URL} from '@/utils/env-variable-loader';
</script>

