<template>
    <iframe
        class="custom-iframe"
        :title="title"
        :src="url"
        allowfullscreen
        frameborder="0"
    />
</template>


<script setup lang="ts">
import {toRefs} from 'vue';

export interface Props {
    url: string;
    title: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Без названия'
});
const {title, url} = toRefs(props);

</script>

<style lang="scss" scoped>
.custom-iframe {
    position: relative;
    height: 100%;
    width: 100%;
}
</style>