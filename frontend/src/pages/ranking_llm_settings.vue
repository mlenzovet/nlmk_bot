<template>
    <custom-iframe
        name="Настройки ранжирования LLM"
        :url="RANKING_LANG_SMITH_URL"
    />
</template>
<script setup lang="ts">
import CustomIframe from '@/components/CustomIframe.vue';
import {RANKING_LANG_SMITH_URL} from '@/utils/env-variable-loader';
</script>

