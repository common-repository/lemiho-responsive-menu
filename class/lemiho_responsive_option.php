<?php class lemiho_responsive_option {
            function lemiho_responsive_option_version() {
                $version = '';
                $version .= '1.0.0';
                return $version;
            }
            function lemiho_responsive_option_page() { 
            wp_enqueue_style('backend_responsive_menu.css',plugins_url('class/backend_responsive_menu.css',dirname(__FILE__)));
            ?>
            <div class="box-option-responsive-menu">
                <form action="options.php" method="POST">
              	     	<?php 
              	     	settings_fields("plugin-section-responsive-menu");
	            		do_settings_sections("plugin-options-responsive-menu");      
	            		submit_button();  ?>
                        <span> Lemiho responsive menu <?php $class = new lemiho_responsive_option; echo $class->lemiho_responsive_option_version(); ?> </span>
                </form>
            </div>    
            <?php }
            /**
             *      this 's width of device 
             *      Ex : 980px       
             */
            function lemiho_responsive_show_width() { ?>
                <input type="number" name="text_lemiho_responsive_show_width" id="text_lemiho_responsive_show_width" value="<?php if(!empty( get_option('text_lemiho_responsive_show_width') ) ) { echo esc_html(get_option('text_lemiho_responsive_show_width')); } else { echo '980';  }?>">
            <?php }
            /**
             *      this 's style of menu
             *      Ex : #ccc    
             */
             function lemiho_responsive_menu_style_color() { ?>
              <input type="color" name="text_lemiho_responsive_menu_style_color" id="text_lemiho_responsive_menu_style_color" value="<?php if(!empty( get_option('text_lemiho_responsive_menu_style_color') ) ) { echo esc_html(get_option('text_lemiho_responsive_menu_style_color')); } else { echo "#ccc"; } ?>">
            <?php }
            /**
             *      this 's custom css
             *      Ex : empty       
             */
             function lemiho_responsive_menu_custom_css() { ?>
                <textarea style="width: 100%;" rows="5" name="text_lemiho_responsive_menu_custom_css" id="text_lemiho_responsive_menu_custom_css" placeholder="Custom css"><?php if(!empty(get_option('text_lemiho_responsive_menu_custom_css'))) echo esc_html(get_option('text_lemiho_responsive_menu_custom_css')); ?></textarea>
             <?php }
            function lemiho_responsive_option_add_menu_page() {
                add_menu_page("Responsive Menu", "Responsive Menu", "manage_options", "lemiho-plugin-responsive-menu", array("lemiho_responsive_option","lemiho_responsive_option_page"), 'dashicons-editor-justify', 99);
            }
            function lemiho_responsive_menu_show_field() {
                add_settings_section("plugin-section-responsive-menu", "<h1 class='title-page-product-setting'>Lemiho responsive menu </h1>", null, "plugin-options-responsive-menu");
                // width of device 
                add_settings_field("text_lemiho_responsive_show_width", "Show menu with width of device ( PX ) ", array("lemiho_responsive_option","lemiho_responsive_show_width"), "plugin-options-responsive-menu", "plugin-section-responsive-menu");
                register_setting("plugin-section-responsive-menu", "text_lemiho_responsive_show_width");
                // style menu 
                add_settings_field("text_lemiho_responsive_menu_style_color", "Color style menu ", array("lemiho_responsive_option","lemiho_responsive_menu_style_color"), "plugin-options-responsive-menu", "plugin-section-responsive-menu");
                register_setting("plugin-section-responsive-menu", "text_lemiho_responsive_menu_style_color");
                // Custom css 
                add_settings_field("text_lemiho_responsive_menu_custom_css", "Custom css ", array("lemiho_responsive_option","lemiho_responsive_menu_custom_css"), "plugin-options-responsive-menu", "plugin-section-responsive-menu");
                register_setting("plugin-section-responsive-menu", "text_lemiho_responsive_menu_custom_css");
            }
}
add_action("admin_menu",array("lemiho_responsive_option","lemiho_responsive_option_add_menu_page"));
add_action("admin_init",array("lemiho_responsive_option","lemiho_responsive_menu_show_field"));