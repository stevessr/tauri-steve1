use tauri::{utils::assets::EmbeddedAssets, Context, Menu};

pub fn init(context: &Context<EmbeddedAssets>) -> Menu {
    // 获取应用名称
    let name = &context.package_info().name;
    let native_menu = tauri::Menu::os_default(name);
    Menu::new()
    .add_submenu(native_menu)
}
