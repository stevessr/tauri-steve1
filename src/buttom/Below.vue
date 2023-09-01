<script lang="ts">
import { CreateWindows } from "../tauri/tauri.ts";//引入

export default {
    name: "Below",
    data() {
        return {};
    },
    methods: {
    },
}
</script>
<script lang="ts" setup>
import { ref } from 'vue'

const activeNames = ref(['unknown'])
</script>
<template>
    <el-collapse v-model="activeNames" accordion>

        <el-collapse-item title="搜索" name="search">
            <button @click="CreateWindows('baidu', 'https://www.baidu.com', '百度🔍')">百度一下🔍</button>
            <button @click="CreateWindows('bing', 'https://www.bing.com', '必应🔍')">必应搜索🔍</button>
            <button @click="CreateWindows('sougo', 'https://www.sogou.com/', '搜狗🔍')">搜狗搜索🔍</button>
            <button @click="CreateWindows('sougo', '/self', '🔍')">🔍</button>
        </el-collapse-item>

        <el-collapse-item title="翻译" name="translate">
            <button @click="CreateWindows('百度翻译', 'https://fanyi.baidu.com', '百度翻译')">百度翻译</button><button
                @click="CreateWindows('微软翻译', 'https://www.bing.com/translator', '微软翻译')">微软翻译</button>
            <button @click="CreateWindows('deepl翻译', 'https://www.deepl.com/translator', 'deepl翻译')">deepl翻译</button>
        </el-collapse-item>

        <el-collapse-item title="新闻" name="News">
            <button @click="CreateWindows('msn', 'https://www.msn.com', '微软msn')">msn新闻</button><button
                @click="CreateWindows('readhub', 'https://readhub.cn/', 'readhub')">readhub新闻</button><button
                @click="CreateWindows('toutiao', 'https://www.toutiao.com/', '今日头条')">今日头条</button>
            <button @click="CreateWindows('腾讯网新闻', 'https://www.qq.com/', '腾讯网新闻')">腾讯网新闻</button>
        </el-collapse-item>

        <el-collapse-item title="unknown" name="unknown">
            <button @click="CreateWindows('知乎', 'https://www.zhihu.com/explore', '知乎')">知乎探索</button>
            <button @click="CreateWindows('小红书', 'https://www.xiaohongshu.com/explore', '小红书')">小红书探索</button>
        </el-collapse-item>

        <el-collapse-item title="文档" name="doc">
            <button @click="CreateWindows('5000言', 'https://5000yan.com/', '5000言')">5000言</button>
            <button @click="CreateWindows('baiduwenku', 'https://wenku.baidu.com/', '百度文库')">百度文库</button>
            <button @click="CreateWindows('Z-Library', 'https://zh.singlelogin.re/', 'Z-Library')">Z-Library</button>
        </el-collapse-item>

        <el-collapse-item title="Geobebra" name="Geogebra">
            <button
                @click="CreateWindows('geogebra计算器套件', 'https://www.geogebra.org/calculator', 'geogebra计算器套件')">geogebra计算器套件</button>
            <button
                @click="CreateWindows('geogebra图形计算器', 'https://www.geogebra.org/graphing', 'geogebra图形计算器')">geogebra图形计算器</button>
            <button @click="CreateWindows('geogebra-3D 计算器', 'https://www.geogebra.org/3d', 'geogebra3D 计算器')">geogebra 3D
                计算器</button>
            <button
                @click="CreateWindows('geogebra几何', 'https://www.geogebra.org/geometry', 'geogebra几何')">geogebra几何</button>
            <button @click="CreateWindows('geogebra-CAS-计算器', 'https://www.geogebra.org/cas', 'geogebra CAS 计算器')">geogebra
                CAS
                计算器</button>
            <button @click="CreateWindows('geogebra-经典-6', 'https://www.geogebra.org/classic', 'geogebra 经典 6')">geogebra 经典
                6</button>
        </el-collapse-item>

        <el-collapse-item title="coding" name="coding">
            <button @click="CreateWindows('简书', 'https://www.jianshu.com', '简书')">打开简书</button>
            <button @click="CreateWindows('CSDN', 'https://www.csdn.net', 'CSDN')">打开CSDN</button>
            <button @click="CreateWindows('github', 'https://github.com', 'github')">打开github</button>
        </el-collapse-item>

        <el-collapse-item title="地图" name="maps">
            <button @click="CreateWindows('百度地图', 'https://map.baidu.com/', '百度地图')">百度地图</button>
            <button @click="CreateWindows('高德地图', 'https://ditu.amap.com/', '高德地图')">高德地图</button>
            <button @click="CreateWindows('谷歌地图', 'https://www.google.com/maps', '谷歌地图')">谷歌地图</button>
        </el-collapse-item>

        <el-collapse-item title="导航" name="guid">
            <button @click="CreateWindows('360导航', 'https://hao.360.com/', '360导航')">360导航</button>
            <button @click="CreateWindows('hao123导航', 'https://www.hao123.com/', 'hao123导航')">hao123导航</button>
        </el-collapse-item>

        <el-collapse-item title="视频" name="vidoe">
            <button @click="CreateWindows('bilibili主页', 'https://www.bilibili.com', '哔哩哔哩主页')">哔哩哔哩</button>
            <button @click="CreateWindows('bilibili动态', 'https://t.bilibili.com', '哔哩哔哩动态')">哔哩哔哩动态</button>
            <button @click="CreateWindows('bilibili搜索', 'https://search.bilibili.com', '哔哩哔哩搜索🔍')">哔哩哔哩搜索</button>
            <button @click="CreateWindows('bilibili账户', 'https://account.bilibili.com', '哔哩哔哩账户中心')">哔哩哔哩账户中心</button>
            <button @click="CreateWindows('bilibili', 'https://www.bilibili.com', '哔哩哔哩')">打开哔哩哔哩</button>
            <button @click="CreateWindows('douyin', 'https://www.douyin.com/', '抖音')">抖音</button>
            <button @click="CreateWindows('xigua', 'https://www.ixigua.com/', '🍉西瓜视频')">🍉西瓜视频</button>
        </el-collapse-item>
    </el-collapse>
</template>

<style></style>