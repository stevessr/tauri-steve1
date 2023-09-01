<script lang="ts">
import { CreateWindows } from "../tauri/tauri.ts";//引入

export default {
    name: "Foot",
    data() {
        return {};
    },
    methods: {
    },
}
</script>
<script lang="ts" setup>
import { ref } from 'vue';

const activeName = ref(['1']);
</script>

<template>
    <div class='footer'>
        <span class="scroll"></span>
        <el-divider></el-divider>
        <el-divider direction="vertical"></el-divider>
        <el-divider direction="vertical"></el-divider>
        <el-collapse v-model="activeName" class="small-buttom" accordion>

            <el-collapse-item title="Vue" name="Vue">
                <button class='small-button' @click="CreateWindows('Vue', 'https://vuejs.org/', 'Vue')">Vue</button>
            </el-collapse-item>

            <el-collapse-item title="mirrors" name="mirror">
                <button class='small-button'
                    @click="CreateWindows('google-mirror', 'https://caddy.firsts1.repl.co/', 'google mirror')">google自建反代</button>
                <button class='small-button'
                    @click="CreateWindows('谷歌地图', 'https://caddy.firsts1.repl.co/maps', '谷歌地图')">谷歌地图自建反代</button>
                <button class='small-button'
                    @click="CreateWindows('中文维基', 'https://pg.stevessr-team.repl.co/wiki/Wikipedia:首页', '中文维基')">中文维基自建反代</button>
            </el-collapse-item>

            <el-collapse-item title="nasportal" name="nasportal">
                <button class='small-button'
                    @click="CreateWindows('uptimerobot', 'https://stats.uptimerobot.com/jW0Z0Sljwn', 'uptimerobot')">uptimerobot监视器</button>
                <button class='small-button'
                    @click="CreateWindows('nasportal-4everland', 'https://nasportal.4everland.app/', 'nasportal 4everland')">nasportal-4everland</button>
                <button class='small-button'
                    @click="CreateWindows('nasportal-netlify', 'https://steve-ssr.netlify.app/', 'nasportal netlify')">nasportal-netlify</button>
            </el-collapse-item>

            <el-collapse-item title="监视器" name="watchers">
                <button class='small-button'
                    @click="CreateWindows('replit监视器', 'https://uptime-kuma.firsts1.repl.co/status/replit', 'replit监视器')">replit监视器</button>
                <button class='small-button'
                    @click="CreateWindows('alist监视器', 'https://status.alis-st.repl.co/status/alist', 'alist监视器')">alist监视器</button>
                <button class='small-button'
                    @click="CreateWindows('cloudflare监视器', 'https://status.firsts1.repl.co/status/cloudflare', 'cloudflare监视器')">cloudflare监视器</button>
                <button class='small-button'
                    @click="CreateWindows('me监视器', 'https://status--stevessr-group.repl.co/status/me', 'me监视器')">me监视器</button>
            </el-collapse-item>

            <el-collapse-item title="unknown" name="unknown">
                <button class='small-button'
                    @click="CreateWindows('age-anime', 'https://www.agemys.org', 'age动漫')">age动漫</button>
                <button class='small-button'
                    @click="CreateWindows('geekgpt', 'https://chat.geekgpt.org/', 'geekgpt')">geekgpt</button>
                <button class='small-button'
                    @click="CreateWindows('chat-shared2', 'https://chat-shared2.zhile.io/shared.html', 'chat-shared2')">chat-shared2</button>
                <button class='small-button'
                    @click="CreateWindows('优选一些好网址', 'https://c.aalib.net/', '优选一些好网址')">优选一些好网址</button>
            </el-collapse-item>

            <el-collapse-item title="others" name="others">
                <button class='small-button'
                    @click="CreateWindows('waline', 'https://waline.alis-st.repl.co/', 'waline')">自建waline</button>
                <button class='small-button'
                    @click="CreateWindows('自建halo', 'https://halo.stevessr-group.repl.co/', '自建halo')">自建halo</button>
                <button class='small-button'
                    @click="CreateWindows('自建adguard', 'https://adguard--alis-st.repl.co/', '自建adguard')">自建adguard</button>
            </el-collapse-item>

        </el-collapse>
    </div>
</template>

<style></style>