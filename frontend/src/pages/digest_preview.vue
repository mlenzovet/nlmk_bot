<template>
    <custom-iframe
        name="Настройки ранжирования LLM"
        :url="DIGEST_TEMPLATE_EDIT_URL"
    />
</template>
<script setup lang="ts">
import CustomIframe from '@/components/CustomIframe.vue';
import {DIGEST_TEMPLATE_EDIT_URL} from '@/utils/env-variable-loader';
</script>

