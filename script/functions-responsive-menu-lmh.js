jQuery(document).ready(function($){
        $("div.lemiho-responsive-menu li.menu-item-has-children").append('<button class="lemiho-icon-open-menu"><i class="fa fa-angle-double-left" aria-hidden="true"></i></button><button class="lemiho-icon-close-menu"><i class="fa fa-angle-double-down" aria-hidden="true"></i></button>');
        // install responsive 
        $("button.button-show-menu-mobile").click(function(){
                $("button.button-show-menu-mobile").hide();
                $("button.button-hide-menu-mobile").show();
                $("div.lemiho-responsive-menu > ul").toggle("slow");
        });
        $("button.button-hide-menu-mobile").click(function(){
                $("button.button-hide-menu-mobile").hide();
                $("button.button-show-menu-mobile").show();
                $("div.lemiho-responsive-menu > ul").toggle("slow");
        });
        // sub 1
        $("div.lemiho-responsive-menu > ul > li:first-child > button.lemiho-icon-open-menu").click(function(){
                // show submenu 1
                $("div.lemiho-responsive-menu > ul > li:first-child > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:first-child > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li:first-child > ul").toggle("slow");
        });
        // sub 1
        $("div.lemiho-responsive-menu > ul > li:first-child > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 1
                $("div.lemiho-responsive-menu > ul > li:first-child > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:first-child > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li:first-child > ul").toggle("slow");
        });
        // sub 2
        $("div.lemiho-responsive-menu > ul > li:nth-child(2) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 2
                $("div.lemiho-responsive-menu > ul > li:nth-child(2) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(2) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(2) > ul").toggle("slow");
        });
        // sub 2
        $("div.lemiho-responsive-menu > ul > li:nth-child(2) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 2
                $("div.lemiho-responsive-menu > ul > li:nth-child(2) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(2) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(2) > ul").toggle("slow");
        });
        // sub 3
        $("div.lemiho-responsive-menu > ul > li:nth-child(3) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 3
                $("div.lemiho-responsive-menu > ul > li:nth-child(3) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(3) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(3) > ul").toggle("slow");
        });
        // sub 3
        $("div.lemiho-responsive-menu > ul > li:nth-child(3) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 3
                $("div.lemiho-responsive-menu > ul > li:nth-child(3) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(3) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(3) > ul").toggle("slow");
        });
        // sub 4
        $("div.lemiho-responsive-menu > ul > li:nth-child(4) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 4
                $("div.lemiho-responsive-menu > ul > li:nth-child(4) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(4) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(4) > ul").toggle("slow");
        });
        // sub 4
        $("div.lemiho-responsive-menu > ul > li:nth-child(4) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 4
                $("div.lemiho-responsive-menu > ul > li:nth-child(4) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(4) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(4) > ul").toggle("slow");
        });
        // sub 5
        $("div.lemiho-responsive-menu > ul > li:nth-child(5) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 5
                $("div.lemiho-responsive-menu > ul > li:nth-child(5) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(5) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(5) > ul").toggle("slow");
        });
        // sub 5
        $("div.lemiho-responsive-menu > ul > li:nth-child(5) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 5
                $("div.lemiho-responsive-menu > ul > li:nth-child(5) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(5) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(5) > ul").toggle("slow");
        });
        // sub 6
        $("div.lemiho-responsive-menu > ul > li:nth-child(6) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 6
                $("div.lemiho-responsive-menu > ul > li:nth-child(6) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(6) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(6) > ul").toggle("slow");
        });
        // sub 6
        $("div.lemiho-responsive-menu > ul > li:nth-child(6) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 6
                $("div.lemiho-responsive-menu > ul > li:nth-child(6) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(6) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(6) > ul").toggle("slow");
        });
        // sub 7
        $("div.lemiho-responsive-menu > ul > li:nth-child(7) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 7
                $("div.lemiho-responsive-menu > ul > li:nth-child(7) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(7) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(7) > ul").toggle("slow");
        });
        // sub 7
        $("div.lemiho-responsive-menu > ul > li:nth-child(7) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 7
                $("div.lemiho-responsive-menu > ul > li:nth-child(7) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(7) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(7) > ul").toggle("slow");
        });
        // sub 8
        $("div.lemiho-responsive-menu > ul > li:nth-child(8) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 8
                $("div.lemiho-responsive-menu > ul > li:nth-child(8) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(8) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(8) > ul").toggle("slow");
        });
        // sub 8
        $("div.lemiho-responsive-menu > ul > li:nth-child(8) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 8
                $("div.lemiho-responsive-menu > ul > li:nth-child(8) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(8) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(8) > ul").toggle("slow");
        });
        // sub 9
        $("div.lemiho-responsive-menu > ul > li:nth-child(9) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 9
                $("div.lemiho-responsive-menu > ul > li:nth-child(9) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(9) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(9) > ul").toggle("slow");
        });
        // sub 9
        $("div.lemiho-responsive-menu > ul > li:nth-child(9) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 9
                $("div.lemiho-responsive-menu > ul > li:nth-child(9) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(9) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(9) > ul").toggle("slow");
        });
        // sub 10
        $("div.lemiho-responsive-menu > ul > li:nth-child(10) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 10
                $("div.lemiho-responsive-menu > ul > li:nth-child(10) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(10) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(10) > ul").toggle("slow");
        });
        // sub 10
        $("div.lemiho-responsive-menu > ul > li:nth-child(10) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 10
                $("div.lemiho-responsive-menu > ul > li:nth-child(10) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li:nth-child(10) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li:nth-child(10) > ul").toggle("slow");
        });
        /**
         *      ==============
         *        Sub menu 2
         *      ==============
         */
        // sub 1
        $("div.lemiho-responsive-menu > ul > li > ul > li:first-child > button.lemiho-icon-open-menu").click(function(){
                // show submenu 1
                $("div.lemiho-responsive-menu > ul > li > ul > li:first-child > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:first-child > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:first-child > ul").toggle("slow");
        });
        // sub 1
        $("div.lemiho-responsive-menu > ul > li > ul > li:first-child > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 1
                $("div.lemiho-responsive-menu > ul > li > ul > li:first-child > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:first-child > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:first-child > ul").toggle("slow");
        });
        // sub 2
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(2) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 2
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(2) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(2) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(2) > ul").toggle("slow");
        });
        // sub 2
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(2) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 2
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(2) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(2) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(2) > ul").toggle("slow");
        });
        // sub 3
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(3) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 3
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(3) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(3) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(3) > ul").toggle("slow");
        });
        // sub 3
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(3) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 3
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(3) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(3) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(3) > ul").toggle("slow");
        });
        // sub 4
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(4) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 4
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(4) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(4) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(4) > ul").toggle("slow");
        });
        // sub 4
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(4) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 4
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(4) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(4) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(4) > ul").toggle("slow");
        });
        // sub 5
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(5) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 5
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(5) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(5) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(5) > ul").toggle("slow");
        });
        // sub 5
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(5) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 5
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(5) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(5) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(5) > ul").toggle("slow");
        });
        // sub 6
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(6) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 6
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(6) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(6) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(6) > ul").toggle("slow");
        });
        // sub 6
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(6) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 6
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(6) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(6) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(6) > ul").toggle("slow");
        });
        // sub 7
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(7) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 7
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(7) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(7) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(7) > ul").toggle("slow");
        });
        // sub 7
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(7) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 7
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(7) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(7) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(7) > ul").toggle("slow");
        });
        // sub 8
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(8) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 8
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(8) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(8) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(8) > ul").toggle("slow");
        });
        // sub 8
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(8) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 8
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(8) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(8) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(8) > ul").toggle("slow");
        });
        // sub 9
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(9) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 9
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(9) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(9) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(9) > ul").toggle("slow");
        });
        // sub 9
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(9) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 9
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(9) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(9) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(9) > ul").toggle("slow");
        });
        // sub 10
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(10) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 10
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(10) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(10) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(10) > ul").toggle("slow");
        });
        // sub 10
        $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(10) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 10
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(10) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(10) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li:nth-child(10) > ul").toggle("slow");
        });
        /**             
         *          ===================     
         *              Sub menu 3
         *          ===================
         */
        // sub 1
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:first-child > button.lemiho-icon-open-menu").click(function(){
                // show submenu 1
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:first-child > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:first-child > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:first-child > ul").toggle("slow");
        });
        // sub 1
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:first-child > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 1
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:first-child > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:first-child > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:first-child > ul").toggle("slow");
        });
        // sub 2
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(2) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 2
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(2) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(2) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(2) > ul").toggle("slow");
        });
        // sub 2
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(2) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 2
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(2) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(2) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(2) > ul").toggle("slow");
        });
        // sub 3
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(3) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 3
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(3) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(3) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(3) > ul").toggle("slow");
        });
        // sub 3
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(3) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 3
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(3) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(3) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(3) > ul").toggle("slow");
        });
        // sub 4
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(4) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 4
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(4) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(4) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(4) > ul").toggle("slow");
        });
        // sub 4
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(4) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 4
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(4) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(4) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(4) > ul").toggle("slow");
        });
        // sub 5
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(5) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 5
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(5) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(5) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(5) > ul").toggle("slow");
        });
        // sub 5
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(5) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 5
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(5) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(5) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(5) > ul").toggle("slow");
        });
        // sub 6
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(6) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 6
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(6) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(6) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(6) > ul").toggle("slow");
        });
        // sub 6
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(6) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 6
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(6) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(6) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(6) > ul").toggle("slow");
        });
        // sub 7
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(7) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 7
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(7) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(7) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(7) > ul").toggle("slow");
        });
        // sub 7
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(7) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 7
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(7) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(7) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(7) > ul").toggle("slow");
        });
        // sub 8
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(8) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 8
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(8) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(8) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(8) > ul").toggle("slow");
        });
        // sub 8
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(8) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 8
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(8) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(8) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(8) > ul").toggle("slow");
        });
        // sub 9
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(9) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 9
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(9) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(9) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(9) > ul").toggle("slow");
        });
        // sub 9
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(9) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 9
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(9) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(9) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(9) > ul").toggle("slow");
        });
        // sub 10
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(10) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 10
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(10) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(10) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(10) > ul").toggle("slow");
        });
        // sub 10
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(10) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 10
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(10) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(10) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li:nth-child(10) > ul").toggle("slow");
        });
        /**
         *           ================   
         *              Submenu 4    
         *           ================     
         */
        // sub 1
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:first-child > button.lemiho-icon-open-menu").click(function(){
                // show submenu 1
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:first-child > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:first-child > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:first-child > ul").toggle("slow");
        });
        // sub 1
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:first-child > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 1
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:first-child > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:first-child > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:first-child > ul").toggle("slow");
        });
        // sub 2
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(2) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 2
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(2) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(2) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(2) > ul").toggle("slow");
        });
        // sub 2
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(2) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 2
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(2) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(2) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(2) > ul").toggle("slow");
        });
        // sub 3
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(3) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 3
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(3) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(3) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(3) > ul").toggle("slow");
        });
        // sub 3
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(3) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 3
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(3) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(3) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(3) > ul").toggle("slow");
        });
        // sub 4
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(4) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 4
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(4) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(4) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(4) > ul").toggle("slow");
        });
        // sub 4
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(4) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 4
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(4) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(4) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(4) > ul").toggle("slow");
        });
        // sub 5
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(5) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 5
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(5) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(5) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(5) > ul").toggle("slow");
        });
        // sub 5
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(5) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 5
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(5) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(5) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(5) > ul").toggle("slow");
        });
        // sub 6
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(6) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 6
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(6) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(6) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(6) > ul").toggle("slow");
        });
        // sub 6
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(6) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 6
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(6) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(6) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(6) > ul").toggle("slow");
        });
        // sub 7
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(7) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 7
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(7) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(7) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(7) > ul").toggle("slow");
        });
        // sub 7
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(7) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 7
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(7) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(7) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(7) > ul").toggle("slow");
        });
        // sub 8
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(8) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 8
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(8) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(8) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(8) > ul").toggle("slow");
        });
        // sub 8
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(8) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 8
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(8) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(8) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(8) > ul").toggle("slow");
        });
        // sub 9
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(9) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 9
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(9) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(9) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(9) > ul").toggle("slow");
        });
        // sub 9
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(9) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 9
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(9) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(9) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(9) > ul").toggle("slow");
        });
        // sub 10
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(10) > button.lemiho-icon-open-menu").click(function(){
                // show submenu 10
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(10) > button.lemiho-icon-open-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(10) > button.lemiho-icon-close-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(10) > ul").toggle("slow");
        });
        // sub 10
        $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(10) > button.lemiho-icon-close-menu").click(function(){
                // hide submenu 10
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(10) > button.lemiho-icon-close-menu").hide();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(10) > button.lemiho-icon-open-menu").show();
                $("div.lemiho-responsive-menu > ul > li > ul > li > ul > li > ul > li:nth-child(10) > ul").toggle("slow");
        });
});