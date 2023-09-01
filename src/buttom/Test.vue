<script lang = "ts" >
import { CreateWindows, ShowWindows, CloseWindows, HideWindows } from "../tauri/tauri.ts";//引入

export default {
  name: "Test",
  data() {
    return {
      message2: "void",
      description: "example",
      weburl: "https://example.com",
      title: "example",
      label: "example"
    };
  },
  created() {
  },
  methods: {
  },
}
</script>
<script lang="ts" setup>
import { ref } from 'vue';

const activeNames = ref(['0']);
const activeName = ref(['0']);
</script>

<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="InputTest" name="1">
        <h1>你输入了{{ message2 }}</h1>
        <input v-model="message2" type="value" placeholder="edit me" />
      </el-collapse-item>

      <el-collapse-item title="" name="2">
        <el-collapse v-model="activeNames" accordion>

          <el-collapse-item title="打开新窗口" name="boost">
            <h1>描述：{{ description }}<br />网址：{{ weburl }}<br />标题：{{ title }}</h1>
            <button @click="CreateWindows(description, weburl, title)">启动</button>
            <br />
            <input v-model="description" type="value" placeholder="请输入 description" />
            <input v-model="weburl" type="value" placeholder="请输入 weburl" />
            <input v-model="title" type="value" placeholder="请输入 title" />
          </el-collapse-item>

          <el-collapse-item title="显示已有窗口" name="showWIndwos">
            <h1>特征：{{ label }}<br /></h1>
            <button @click="ShowWindows(label)">启动</button>
            <br />
            <input v-model="label" type="value" placeholder="请输入 label" />
          </el-collapse-item>

          <el-collapse-item title="关闭已有窗口" name="CloseWIndwos">
            <h1>特征：{{ label }}<br /></h1>
            <button @click="CloseWindows(label)">关闭</button>
            <br />
            <input v-model="label" type="value" placeholder="请输入 label" />
          </el-collapse-item>

          <el-collapse-item title="隐藏已有窗口" name="HideWIndwos">
            <h1>特征：{{ label }}<br /></h1>
            <button @click="HideWindows(label)">隐藏</button>
            <br />
            <input v-model="label" type="value" placeholder="请输入 label" />
          </el-collapse-item>

          <el-collapse-item title="Consistency" name="1">
            <div>
              Consistent with real life: in line with the process and logic of real
              life, and comply with languages and habits that the users are used to;
            </div>
            <div>
              Consistent within interface: all elements should be consistent, such
              as: design style, icons and texts, position of elements, etc.
            </div>
          </el-collapse-item>

          <el-collapse-item title="Feedback" name="2">
            <div>
              Operation feedback: enable the users to clearly perceive their
              operations by style updates and interactive effects;
            </div>
            <div>
              Visual feedback: reflect current state by updating or rearranging
              elements of the page.
            </div>
          </el-collapse-item>

          <el-collapse-item title="Efficiency" name="3">
            <div>
              Simplify the process: keep operating process simple and intuitive;
            </div>
            <div>
              Definite and clear: enunciate your intentions clearly so that the
              users can quickly understand and make decisions;
            </div>
            <div>
              Easy to identify: the interface should be straightforward, which helps
              the users to identify and frees them from memorizing and recalling.
            </div>
          </el-collapse-item>

          <el-collapse-item title="Controllability" name="4">
            <div>
              Decision making: giving advices about operations is acceptable, but do
              not make decisions for the users;
            </div>
            <div>
              Controlled consequences: users should be granted the freedom to
              operate, including canceling, aborting or terminating current
              operation.
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style></style>