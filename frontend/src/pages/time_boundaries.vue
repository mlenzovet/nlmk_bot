<template>
    <div class="pa-4">
    <v-row>
    <v-col :sm="4">
    Максимальная давность новостей, добавляемых в дайджест
    </v-col>
    <v-col>
    <v-slider
      :max="6"
      color="primary"
      track-color="primary"
      track-fill-color="primary"
      thumb-color="primary"
      disabled
      :ticks="dayNumberLabels"
      show-ticks="always"
      step="1"
      tick-size="10"
    />
    </v-col>
    </v-row>
</div>
</template>
<script setup lang="ts">
const dayNumberLabels = {
   0: '1 день',
   1: '2 дня',
   2: '3 дня',
   3: '4 дня',
   4: '5 дней',
   5: '6 дней',
   6: '7 дней',
}
</script>

