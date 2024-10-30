<?php class register_system_responsive_menu extends lemiho_responsive_menu {
            function text_domain_menu_responsive() {
                   load_plugin_textdomain('lemiho_responsive_menu','/languages');
            }
            function lemiho_register_menu_responsive() {
                // register nav menu
                register_nav_menus(array('lemiho_responsive_menu' => __('Lemiho responsive menu','lemiho_responsive_menu') ));
            }
            function lemiho_menu_responsive_stylesheet() {
                // style and script 
                wp_enqueue_script('jquery');
                wp_enqueue_style('font-awesome.min.css',plugins_url('lemiho-responsive-menu/Font-Awesome/css/font-awesome.min.css',FALSE));
                wp_enqueue_style('style.css',plugins_url('lemiho-responsive-menu/style.css',FALSE));
                wp_enqueue_script('functions-responsive-menu-lmh.js',plugins_url('lemiho-responsive-menu/script/functions-responsive-menu-lmh.js',FALSE));
            }
}
add_action('after_setup_theme',array('register_system_responsive_menu','text_domain_menu_responsive'));
add_action('after_setup_theme',array('register_system_responsive_menu','lemiho_register_menu_responsive'));
add_action('wp_enqueue_scripts',array('register_system_responsive_menu','lemiho_menu_responsive_stylesheet'));