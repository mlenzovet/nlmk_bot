<template>
    <custom-iframe
        name="Настройки ранжирования LLM"
        :url="PARSING_LANG_SMITH_URL"
    />
</template>
<script setup lang="ts">
import CustomIframe from '@/components/CustomIframe.vue';
import {PARSING_LANG_SMITH_URL} from '@/utils/env-variable-loader';
</script>

