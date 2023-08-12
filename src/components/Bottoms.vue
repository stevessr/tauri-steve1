<script lang="ts">
import { appWindow, WebviewWindow } from "@tauri-apps/api/window";//引入

export default {
    name: "index",
    data() {
        return {};
    },
    methods: {
        Win() {
            //这个appWindow.hide();是实现登录之后隐藏（关闭）登录界面，然后再显示新打开的test界面
            //appWindow.hide();
            const testWindow = WebviewWindow.getByLabel("test");//这里就是获取label
            testWindow.show();
            appWindow.hide();
        },
    },
}

</script>

<template>
    <button @click="count++">You clicked me {{ count }} times.</button>
</template>