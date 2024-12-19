<template>
  <el-container class="main-container bg-zinc-200">
    <el-aside class="sidebar bg-sky-400 border-r-zinc-50 border-r">
      <!-- 使用 :link_list 来传递 props -->
      <SideBar :linkList="linkList" @getLinkList="getLinkList" />
    </el-aside>
    <el-container>
      <el-header class="bg-zinc-300 shadow-md">Header</el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>


<script setup lang="ts">
    import { RouterLinkItem } from '@renderer/class/RouterLinkItem';
    import { ChatDotRound, House, Remove } from '@element-plus/icons-vue';
    import { ref, onMounted } from 'vue';
    import { Header, Footer, SideBar } from '@renderer/components/component';
    // 定义响应式的链接列表
    let linkList = <RouterLinkItem[]>([
        {
        'name' : '主页',
        'icon' : House,
        'path' : '/main/home'
        },
        {
        'name' : '聊天',
        'icon' : ChatDotRound,
        'path' : '/main/chat'
        },
        {
        'name' : '测试',
        'icon' : Remove,
        'path' : '/main/test'
        }
    ]);
    function getLinkList() {

    }
</script>

<style scoped>
  .main-container {
    height: 100vh;
    background-size: cover;
  }
  .sidebar {
    width: 50px;
    height: 100vh;
  }
  
</style>