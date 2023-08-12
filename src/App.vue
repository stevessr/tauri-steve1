<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Greet from "./components/Greet.vue";
</script>
<script lang="ts">
import { WebviewWindow } from "@tauri-apps/api/window" //引入打开窗口功能
export default {
  name: "Index",
  data(): Record<string, unknown> {
    return {};
  },
  methods: {
    newwin(): void {
      const webview: WebviewWindow = new WebviewWindow("cree", {
        url: "https://aaca.eu.org",
        // 可自行添加属性配置     窗口配置
        //center:true,
        //decorations:false
      })
      webview.once("tauri://created", function (): void {
        // webview window successfully created
        // 窗口创建成功 打印1
        console.log(1);
      });
      webview.once("tauri://error", function (e: Error): void {
        // an error happened creating the webview window
          // 窗口创建失败 打印2
        console.log(2);
      });

      const testWindow: WebviewWindow = WebviewWindow.getByLabel("cree");
      testWindow.show();
    },
  },
}
</script>

<template>
  <div class="container">
    <h1>Welcome to Tauri!</h1>

    <div class="row">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo vite" alt="Vite logo" />
      </a>
      <a href="https://tauri.app" target="_blank">
        <img src="/tauri.svg" class="logo tauri" alt="Tauri logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>

    <p>Click on the Tauri, Vite, and Vue logos to learn more.</p>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      +
      <a href="https://github.com/tauri-apps/tauri-vscode" target="_blank">Tauri</a>
      +
      <a href="https://github.com/rust-lang/rust-analyzer" target="_blank">rust-analyzer</a>
    </p>

    <Greet />
    <div class="index">
      <button @click="newwin()">打开新窗口</button>
    </div>
  </div>
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>