use tauri::utils::assets::EmbeddedAssets;
use tauri::{AboutMetadata, Context, CustomMenuItem, Menu, MenuItem, Submenu};

pub fn init(context: &Context<EmbeddedAssets>) -> Menu {
    // 获取应用名称
    let name = &context.package_info().name;
    let _native_menu = tauri::Menu::os_default(name);
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let close = CustomMenuItem::new("close".to_string(), "Close");
    let submenu = Submenu::new("File", Menu::new().add_item(quit).add_item(close));
    // 应用主菜单
    let app_menu = Submenu::new(
        "原生菜单",
        // MenuItem::About 为原生菜单
        Menu::new()
            .add_native_item(MenuItem::About(name.into(), AboutMetadata::new()))
            .add_native_item(MenuItem::Copy)
            .add_item(CustomMenuItem::new("hide", "Hide"))
            .add_submenu(submenu),
    );
    Menu::new().add_submenu(app_menu)
}
