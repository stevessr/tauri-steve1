use tauri::{CustomMenuItem, Menu, Submenu, WindowBuilder, WindowMenuEvent, WindowUrl, Wry};
pub fn create() -> Menu {
    // 创建菜单 "New Window" 和子菜单 "Vue-ts"
    let new_window_menu = Menu::new().add_item(CustomMenuItem::new("vue_ts", "Vue-ts"));
    Menu::new().add_submenu(Submenu::new("New Window", new_window_menu))
}
pub fn handler(event: WindowMenuEvent<Wry>) {
    match event.menu_item_id() {
        // 当点击 "Vue-ts" 菜单时
        "vue_ts" => {
            // 创建一个新的窗口，并加载 vue-ts.html 文件
            let new_window = WindowBuilder::new()
                .label("vue-ts")
                .url(WindowUrl::App("vue-ts.html".into()))
                .build(event.window().clone());
            // 显示新窗口
            new_window.show().unwrap();
        }
        _ => {}
    }
}
