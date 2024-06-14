<template>
    
    <template v-if="runAction">
<!-- class="d-none d-sm-flex  -->
    <v-btn class="ma-2" :preloader="loading" :append-icon="!loading && 'mdi-play'" v-if="runAction" variant="outlined" @click="run">
    {{runAction.label}}
    <v-progress-circular indeterminate v-if="loading"/>
    </v-btn>
    <!-- <v-btn
        class="hidden-sm-and-up ma-2"
        density="comfortable"
        icon="mdi-play"
        variant="outlined"
        @click="run">
        <v-progress-circular indeterminate v-if="loading"/>
    </v-btn> -->
    </template>
</template>

<script setup lang="ts">import { findRunAction } from '../sitemap/utils';

const route = useRoute();
const runAction = computed(()=>findRunAction(route.name));
const loading = ref(false);
async function run(){
    if (runAction.value?.runFunction){
        loading.value = true;
        // await fetch(runAction.value?.runUrl);
        console.log('running action');
        try {
            await runAction.value?.runFunction();
        }
        catch(e){
            console.log(e);
        }
        console.log('finished action');
        setTimeout(function (){
            loading.value = false;
        }, 100)
    }
    else {
            loading.value = false;
    }
}
</script>

<style scoped>

</style>