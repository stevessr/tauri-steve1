import { appWindow, WebviewWindow } from "@tauri-apps/api/window"; //引入

function CreateWindows(description: string, weburl: string, title: string) {
  var webview = new WebviewWindow(description, {
    url: weburl,
    title: title,
  });
  appWindow;
  webview.show();
  webview.once("tauri://created", function () {});
  webview.once("tauri://error", function (e) {
    console.log(e);
  });
}
function ShowWindows(label: string) {
  const webview = WebviewWindow.getByLabel(label); //这里就是获取label
  if (webview == void 1) {
    window.alert("无效label");
  } else {
    webview.show();
  }
}
function CloseWindows(label: string) {
  const webview = WebviewWindow.getByLabel(label); //这里就是获取label
  if (webview == void 1) {
    window.alert("无效label");
  } else {
    webview.close();
  }
}
function HideWindows(label: string) {
  const webview = WebviewWindow.getByLabel(label); //这里就是获取label
  if (webview == void 1) {
    window.alert("无效label");
  } else {
    webview.hide();
  }
}

function Win(description: string, weburl: string, title: string) {
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
        console.log(e);
    });
    // emit an event to the backend
}

export {
    CreateWindows ,
    ShowWindows ,
    CloseWindows ,
    HideWindows ,
    Win
};
