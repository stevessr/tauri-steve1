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
            webview.show();
            appWindow;
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
    <div>
        <button @click="Win('baidu', 'https://www.baidu.com', '百度🔍')">百度一下🔍</button>
        <button @click="Win('bing', 'https://www.bing.com', '必应🔍')">必应搜索🔍</button>
        <button @click="Win('sougo', 'https://www.sogou.com/', '搜狗🔍')">搜狗搜索🔍</button>
    </div>
    <div>
        <button @click="Win('百度翻译', 'https://fanyi.baidu.com', '百度翻译')">百度翻译</button><button
            @click="Win('微软翻译', 'https://www.bing.com/translator', '微软翻译')">微软翻译</button>
        <button @click="Win('deepl翻译', 'https://www.deepl.com/translator', 'deepl翻译')">deepl翻译</button>
    </div>
    <div>
        <button @click="Win('msn', 'https://www.msn.com', '微软msn')">msn新闻</button><button
            @click="Win('readhub', 'https://readhub.cn/', 'readhub')">readhub新闻</button>
            <button @click="Win('腾讯网新闻', 'https://www.qq.com/', '腾讯网新闻')">腾讯网新闻</button>
    </div>

    <div>
        <button @click="Win('知乎', 'https://www.zhihu.com/explore', '知乎')">知乎探索</button>
        <button @click="Win('小红书', 'https://www.xiaohongshu.com/explore', '小红书')">小红书探索</button>
    </div>
    <div>
        <button @click="Win('5000言', 'https://5000yan.com/', '5000言')">5000言</button>
        <button @click="Win('Z-Library', 'https://zh.singlelogin.re/', 'Z-Library')">Z-Library</button>
    </div>
    <div>
        <button @click="Win('geogebra计算器套件', 'https://www.geogebra.org/calculator', 'geogebra计算器套件')">geogebra计算器套件</button>
        <button @click="Win('geogebra图形计算器', 'https://www.geogebra.org/graphing', 'geogebra图形计算器')">geogebra图形计算器</button>
        <button @click="Win('geogebra-3D 计算器', 'https://www.geogebra.org/3d', 'geogebra3D 计算器')">geogebra 3D 计算器</button>
    </div>
    <div>
        <button @click="Win('geogebra几何', 'https://www.geogebra.org/geometry', 'geogebra几何')">geogebra几何</button>
        <button @click="Win('geogebra-CAS-计算器', 'https://www.geogebra.org/cas', 'geogebra CAS 计算器')">geogebra CAS
            计算器</button>
        <button @click="Win('geogebra-经典-6', 'https://www.geogebra.org/classic', 'geogebra 经典 6')">geogebra 经典 6</button>
    </div>
    <div>
        <button @click="Win('简书', 'https://www.jianshu.com', '简书')">打开简书</button>
        <button @click="Win('CSDN', 'https://www.csdn.net', 'CSDN')">打开CSDN</button>
    </div>
    <div>
        <button @click="Win('百度地图', 'https://map.baidu.com/', '百度地图')">百度地图</button>
        <button @click="Win('高德地图', 'https://ditu.amap.com/', '高德地图')">高德地图</button>
        <button @click="Win('谷歌地图', 'https://www.google.com/maps', '谷歌地图')">谷歌地图</button>
    </div>
    <div>
        <button @click="Win('360导航', 'https://hao.360.com/', '360导航')">360导航</button>
        <button @click="Win('hao123导航', 'https://www.hao123.com/', 'hao123导航')">hao123导航</button>
    </div>
    <!--
        <button @click="Win('geogebra', 'https://www.geogebra.org/download', 'geogebra')">打开geogebra</button>
    -->
    <div>
        <button @click="Win('bilibili', 'https://www.bilibili.com', '哔哩哔哩')">打开哔哩哔哩</button>
        <button @click="Win('bilibili', 'https://www.bilibili.com', '哔哩哔哩')">打开哔哩哔哩</button>
        <button @click="Win('bilibili', 'https://www.bilibili.com', '哔哩哔哩')">打开哔哩哔哩</button>
        <button @click="Win('bilibili', 'https://www.bilibili.com', '哔哩哔哩')">打开哔哩哔哩</button>
    </div>

    <button @click="Win('github', 'https://github.com', 'github')">打开github</button>
</template>