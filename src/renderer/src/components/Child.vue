<template>
    <h1>{{ a }}</h1>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = (defineProps(['a']));


</script>
