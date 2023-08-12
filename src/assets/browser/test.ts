import { appWindow, WebviewWindow } from "@tauri-apps/api/window"

export default {
  name: "index",
  data(): Record<string, unknown> {
    return {};
  },
  methods: {
    Win(): void {
      //这个appWindow.hide();是实现登录之后隐藏（关闭）登录界面，然后再显示新打开的test界面
      //appWindow.hide();
      const testWindow: WebviewWindow = WebviewWindow.getByLabel("test");//这里就是获取label
      testWindow.show();
    },
  }
};

function openNewWindow() {
  // 打开一个新的空白窗口
  var newWindow = window.open("https://aaca.eu.org", "newWindow", "width=400,height=300");
  // 在新窗口中写入一些内容
  newWindow.document.write("<h1>This is a new window</h1>");
}