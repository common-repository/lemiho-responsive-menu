<?php class lemiho_responsive_menu_outputs extends lemiho_responsive_menu {
             function show_menu() {
                wp_nav_menu(array(
                          'theme_location' => 'lemiho_responsive_menu',
                          'container_class' => 'lemiho-responsive-menu',
                          'items_wrap'      => '<button class="button-show-menu-mobile"><i class="fa fa-bars" aria-hidden="true"></i></button><button class="button-hide-menu-mobile"><i class="fa fa-bars" aria-hidden="true"></i></button>
                                                <ul id="%1$s" class="%2$s">
                                                    %3$s
                                                </ul>'
                      ));
             }
             function show_style_color() { ?>
                        <style>
                               <?php if(!empty(get_option('text_lemiho_responsive_show_width'))) { ?>
                                       @media screen and (min-width: 319px ) and ( max-width: <?php echo esc_html(get_option('text_lemiho_responsive_show_width')); ?>px ) {
                                            div.lemiho-responsive-menu {
                                                display: block;
                                            }
                                       }
                              <?php } else { ?>
                                        @media screen and ( min-width: 319px ) and ( max-width: 980px ) {
                                            div.lemiho-responsive-menu {
                                                display: block;
                                            }
                                       }
                              <?php } ?>
                                div.lemiho-responsive-menu > ul, div.lemiho-responsive-menu > ul > li > ul,
                                button.button-hide-menu-mobile, button.button-show-menu-mobile {
                                    background: <?php if(!empty(get_option('text_lemiho_responsive_menu_style_color'))) 
                                    { echo esc_html(get_option('text_lemiho_responsive_menu_style_color')); } 
                                    else { echo '#ccc'; } ?>;
                                }
                                <?php if( !empty(get_option('text_lemiho_responsive_menu_custom_css')) ) echo esc_html(get_option('text_lemiho_responsive_menu_custom_css')); ?>
                        </style>
             <?php }
}
add_action('wp_footer',array('lemiho_responsive_menu_outputs','show_menu'));
// get style color
add_action('wp_head',array('lemiho_responsive_menu_outputs','show_style_color'));