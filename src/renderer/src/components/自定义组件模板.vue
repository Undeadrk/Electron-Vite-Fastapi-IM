<template>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue', (<HTMLInputElement>$event.target).value)">

</template>


<script setup lang="ts">

    import { defineProps, defineEmits } from 'vue';
    // vue3
    defineProps(['modelValue']);
    const emit = defineEmits(['update:modelValue']);
    // vue2
    // defineProps(['value'])
    // const emit = defineEmits(['input']);

    // 实际上modelValue可以改成任何名字，默认情况是这两种，但可以通过v-model:xxx来修改，这时组件内部也需要改defineProps和emit中emit的名字

</script>

<style scoped>


</style>