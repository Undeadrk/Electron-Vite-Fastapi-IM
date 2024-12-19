<template>
    <div class="header">
      <img src="@/assets/electron.svg" alt="Logo" class="logo" />
      <div class="controls">
        <button @click="minimize" class="control-btn">_</button>
        <button @click="toggleFullscreen" class="control-btn">📏</button>
        <button @click="close" class="control-btn">✖</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      minimize() {
        this.$electron.remote.BrowserWindow.getFocusedWindow().minimize();
      },
      toggleFullscreen() {
        const window = this.$electron.remote.BrowserWindow.getFocusedWindow();
        if (window.isFullscreen()) {
          window.setFullscreen(false);
        } else {
          window.setFullscreen(true);
        }
      },
      close() {
        this.$electron.remote.BrowserWindow.getFocusedWindow().close();
      }
    }
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f1f1f1; /* 背景颜色 */
    -webkit-user-drag: unset;/* 设置可以拖动 */
  }
  
  .logo {
    height: 40px; /* logo高度 */
  }
  
  .controls {
    display: flex;
  }
  
  .control-btn {
    border: none;
    background: none;
    font-size: 24px; /* 按钮字体大小 */
    margin-left: 10px; /* 按钮间距 */
    cursor: pointer; /* 鼠标指针 */
    outline: none;
  }
  </style>
  