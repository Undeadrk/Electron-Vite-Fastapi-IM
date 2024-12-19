<template>
    <el-container class="login-container">
        <el-aside width="40vw" class="flex flex-col justify-center items-center shadow-lg">
            <div class="size-3/5">
                <img src="@renderer/assets/logo.svg" alt="logo">
            </div>
            <div class="logo flex justify-center items-center">
                <a href="https://github.com/Undeadrk?tab=repositories" target="_blank"><img src="@renderer/assets/icons/github-fill.svg" style="width: 30px;"></a>
                <span><span class=" text-2xl">Author: </span><span>UnDead</span></span>
            </div>
        </el-aside>
        <el-main class="login-main">
            <div class="login-panel bg-white rounded-lg w-4/5 h-2/3 flex flex-col items-center justify-center shadow-lg">
                <div class="text-center mb-4 select-none">
                    <span class="text-2xl">欢迎登陆 </span>
                    <span class="text-lg text-gray-500">electron-vite-fastapi</span>
                </div>
                <el-input v-model="username" placeholder="请输入用户名" class="input-item my-2" :prefix-icon="User"></el-input>
                <el-input v-model="password" placeholder="请输入密码" class="input-item my-2" :prefix-icon="Lock"></el-input>
                <el-button type="primary" class="login-btn w-4/5 my-3" @click="login">登录</el-button>
                <div class="flex justify-between w-4/5">
                    <el-checkbox v-model="rememberMe" class="">记住密码</el-checkbox>
                    <el-checkbox v-model="autoLogin" class="">自动登录</el-checkbox>
                </div>
                <div class="flex justify-between w-4/5"> <!-- 确保容器宽度足够 -->
                    <el-button type="text" class="login-btn" @click="toRegister">注册</el-button>
                    <el-button type="text" class="login-btn" @click="toForget">忘记密码?</el-button>
                </div>
            </div>
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
    import { useLoginStore } from '@renderer/store/login';
    import { ref } from 'vue';
    import { User, Lock } from '@element-plus/icons-vue';

    let username = ref('');
    let password = ref('');
    let rememberMe = ref(false);
    let autoLogin = ref(false);

    const loginStore = useLoginStore();
    function login() {
        
    }
    function toRegister() {
    }
    function toForget() {
    }
</script>

<style scoped>
    .login-container {
        height: 100vh;
        width: 100vw;
        background: linear-gradient(135deg, rgba(70, 130, 180, 0.5), rgba(255, 255, 255, 0.5));
        position: relative; /* 确保气泡动画可以覆盖 */
    }
</style>

<style>
    .login-main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .input-item {
        width: 80%;
    }
</style>

