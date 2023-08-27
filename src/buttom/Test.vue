<script lang = "ts" >
export default {
  name: "Test",
  data() {
  },
  created() {
  },
  methods: {
    AskForMessage() {
      return message2;
    }
  }
}
</script>
<script setup lang="ts">
var message2: string = "";
console.log(message2);
</script>
<!--
<script setup lang="ts">
import { message } from '@tauri-apps/api/dialog';
</script>
-->
<template>
  <details>
    <summary>自定义</summary>
    <h1>Message is: {{ message2 }} </h1>
    <input v-model="message2" type="value" placeholder="edit me" />
    <textarea v-model="message2" cols="30" rows="10"> </textarea>
  </details>
</template>