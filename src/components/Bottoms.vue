<script lang="ts">
import { appWindow, WebviewWindow } from "@tauri-apps/api/window";//引入

export default {
    name: "index",
    data() {
        return {};
    },
    methods: {
        Win() {
            const webview = new WebviewWindow('百度', {
                url: 'https://www.baidu.com',
                title: '百度一下'
            });
            webview.show();
            webview.once('tauri://created', function () {
                // webview window successfully created
            });
            webview.once('tauri://error', function (e) {
                // an error happened creating the webview window
            });
            // emit an event to the backend
        },
    },
}

</script>

<template>
    <button @click="Win()">打开S新窗口</button>
</template>