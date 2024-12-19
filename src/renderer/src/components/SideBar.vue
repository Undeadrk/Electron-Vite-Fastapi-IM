<template>
    <ul class="sidebar-list">
        <li v-for="link in linkList" :key="link.path" class="text-neutral-200">
            <RouterLink :to="link.path" class="icon-link" active-class="bg-zinc-400">
                <div class="icon-container">
                    <component :is="link.icon" class="icon-div"></component>
                </div>
            </RouterLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import { defineProps, withDefaults } from 'vue';
    import { type RouterLinkItem } from '@renderer/class/RouterLinkItem';

    let props = withDefaults(defineProps<{ linkList: RouterLinkItem[] }>(), {
        linkList: () => []
    });



</script>

<style scoped>
    .sidebar-list {
        padding: 0;
        margin: 0;
        list-style-type: none;
        width: 100%;
        text-align: center; /* 确保列表项内的内容居中 */
    }

    .icon-link {
        display: inline-flex; /* 使用 inline-flex 让链接在行内居中 */
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        margin-top: 10px;
        margin-bottom: 10px; /* 添加底部间距 */
        border-radius: 20%; /* 圆形 */
        transition: background-color 0.3s ease; /* 平滑的背景色变化 */
    }

    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .icon-div {
        width: 24px;
    }
</style>