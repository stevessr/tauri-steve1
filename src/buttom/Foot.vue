<script lang="ts">
import { appWindow, WebviewWindow } from "@tauri-apps/api/window";//引入

export default {
    name: "index",
    data() {
        return {};
    },
    methods: {
        Win(description: string, weburl: string, title: string) {
            var webview = new WebviewWindow(description, {
                url: weburl,
                title: title
            });
            console.log(weburl);
            console.log(description);
            console.log(title);
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
<style>
.el-divider {
    background-color: rgb(84, 92, 100);
}
</style>
<style scoped>
.footer {
    height: 2080px;
    text-align: end;
    font-size: 16px;
    padding: 0px 100px;
    position: relative;
}

button.small-button {
    height: auto;
    text-align: end;
    font-size: auto;
    padding: auto auto;
    position: relative;
    top: 1800px;
}

.footer {
    cursor: pointer;
}

.copyright {
    font-size: 12px;
}

.info {
    font-size: 14px;
    color: #72767b;
    line-height: 25px;
}

.footer .scroll {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #448aff;
    background-color: rgba(68, 138, 255, 0.2);
    position: auto;
    left: 5%;
    top: -25px;
    z-index: 10;
    animation: scrollA infinite 20s linear alternate;
}

@keyframes scrollA {
    0% {
        left: 5%;
        transform: rotate(180deg);
    }

    ;

    10% {
        left: 5%;
        transform: rotate(270deg);
    }

    20% {
        left: 5%;
        transform: rotate(450deg);
    }

    25% {
        left: 10%;
        transform: rotate(540deg);
    }

    30% {
        left: 20%;
        transform: rotate(720deg);
    }

    35% {
        left: 30%;
        transform: rotate(900deg);
    }

    40% {
        left: 40%;
        transform: rotate(1080deg);
    }

    45% {
        left: 50%;
        transform: rotate(1260deg);
    }

    50% {
        left: 60%;
        transform: rotate(1440deg);
    }

    55% {
        left: 70%;
        transform: rotate(1620deg);
    }

    60% {
        left: 80%;
        transform: rotate(1800deg);
    }

    80% {
        left: 90%;
        transform: rotate(2610deg);
    }

    90% {
        left: 90%;
        transform: rotate(2340deg);
    }

    100% {
        left: 90%;
        transform: rotate(2520deg);
    }
}
</style>
<template>
    <div class='footer'>
        <span class="scroll"></span>
        <el-divider></el-divider>
        <el-divider direction="vertical"></el-divider>
        <el-divider direction="vertical"></el-divider>
        <el-drawer title="联系我" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
            <p class='info'>
            </p>
        </el-drawer>
        <div>
            <button class='small-button'
                @click="Win('google-mirror', 'https://caddy.firsts1.repl.co/', 'google mirror')">google自建反代</button>
            <button class='small-button'
                @click="Win('谷歌地图', 'https://caddy.firsts1.repl.co/maps', '谷歌地图')">谷歌地图自建反代</button>
            <button class='small-button'
                @click="Win('中文维基', 'https://pg.stevessr-team.repl.co/wiki/Wikipedia:首页', '中文维基')">中文维基自建反代</button>

        </div>
        <div>
            <button class='small-button'
                @click="Win('uptimerobot', 'https://stats.uptimerobot.com/jW0Z0Sljwn', 'uptimerobot')">uptimerobot监视器</button>
            <button class='small-button'
                @click="Win('nasportal-4everland', 'https://nasportal.4everland.app/', 'nasportal 4everland')">nasportal-4everland</button>
            <button class='small-button'
                @click="Win('nasportal-netlify', 'https://steve-ssr.netlify.app/', 'nasportal netlify')">nasportal-netlify</button>
        </div>
        <div>
            <button class='small-button'
                @click="Win('replit监视器', 'https://uptime-kuma.firsts1.repl.co/status/replit', 'replit监视器')">replit监视器</button>
            <button class='small-button'
                @click="Win('alist监视器', 'https://status.alis-st.repl.co/status/alist', 'alist监视器')">alist监视器</button>
            <button class='small-button'
                @click="Win('cloudflare监视器', 'https://status.firsts1.repl.co/status/cloudflare', 'cloudflare监视器')">cloudflare监视器</button>
            <button class='small-button'
                @click="Win('me监视器', 'https://status--stevessr-group.repl.co/status/me', 'me监视器')">me监视器</button>
        </div>
        <div>
            <button class='small-button' @click="Win('age-anime', 'https://www.agemys.org', 'age动漫')">age动漫</button>
            <button
                class='small-button'
                @click="Win('geekgpt', 'https://chat.geekgpt.org/', 'geekgpt')">geekgpt</button>
                <button
                class='small-button'
                @click="Win('chat-shared2', 'https://chat-shared2.zhile.io/shared.html', 'chat-shared2')">chat-shared2</button>
                <button class='small-button' @click="Win('优选一些好网址', 'https://c.aalib.net/', '优选一些好网址')">优选一些好网址</button>
                
        </div>
        <div>
            <button class='small-button'
                @click="Win('waline', 'https://waline.alis-st.repl.co/', 'waline')">自建waline</button>
            <button class='small-button'
                @click="Win('自建halo', 'https://halo.stevessr-group.repl.co/', '自建halo')">自建halo</button>
            <button class='small-button'
                @click="Win('自建adguard', 'https://adguard--alis-st.repl.co/', '自建adguard')">自建adguard</button>
        </div>

    </div>
</template>

