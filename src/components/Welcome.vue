<script lang="ts">
export default {
    name: "Welcome",
    data() {
        return {

        };
    },
    methods: {
    },
}
</script>
<script lang="ts" setup>
import { ref } from 'vue';

const activeNames = ref(['welcome']);
</script>
<template>
    <el-collapse v-model="activeNames" accordion>
        <el-collapse-item title="welcome" name="welcome">
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
                        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
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
            </div>
        </el-collapse-item>
    </el-collapse>
</template>