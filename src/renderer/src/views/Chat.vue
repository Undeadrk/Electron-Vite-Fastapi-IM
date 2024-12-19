<template>
    <el-container class="h-full">
        <el-aside class="session_list border-r-2 border-gray-400 w-1/4">
            <ul>
            <RouterLink to="/chat/chatzone">
                    聊天区域
            </RouterLink>
            </ul>
        </el-aside>
        <el-main>
            <RouterView/>
        </el-main>
    </el-container>
    

</template>

<script setup lang="ts">
    import { ref, toRefs, computed, defineProps, withDefaults, onMounted } from 'vue'
    import { SessionItem } from '@renderer/class/SessionItem';
    import { RouterLink, useRouter, useRoute } from 'vue-router';

    let props = withDefaults(defineProps<{ sessionList: SessionItem[] }>(), {
        sessionList: () => []
    });
    const router = useRouter();



</script>

<style scoped>

</style>