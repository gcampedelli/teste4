function checkMobileDevice(){
    var isMobile = false; 
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;    
    return isMobile;
};

(function ($, window) {
    var modern = {
        init: function () {
            this.mainBar();
            this.mainMenu();
            this.clickOutside();
            this.sideBar.init();
            this.toolBar.init();
            this.showPopup();
            this.actionPopupShare();
            this.actionShowPreview();
            this.responsive();
            this.checkDevice();

        },
        checkDevice: function () {
            var uA = navigator.userAgent;
            if( uA.indexOf("Android") >= 0 ){
                $('body').addClass('android');
            }
            if(uA.indexOf('Trident') != -1 && uA.indexOf('rv:11') != -1){
                $('body').addClass('ie');
            }
            else if(navigator.userAgent.indexOf("Firefox")!=-1){
                $('body').addClass('firefox');
            }
            else if(navigator.userAgent.indexOf("Opera")!=-1){
                $('body').addClass('Opera');
            }
            else if(navigator.userAgent.indexOf("Chrome") != -1){
                $('body').addClass('chrome');
            }
            else if(navigator.userAgent.indexOf("Safari")!=-1 && navigator.userAgent.indexOf("CriOS") ==-1){
                $('body').addClass('safari');
            }
        },
        clickOutside: function () {
            var $menuItem = $('.nbd-main-menu .menu-item,.nbd-dropdown');
            var $colorPallette = $('.nbd-color-palette');
            var $win = $(document);
            $win.on("click", function(event){
                if ($menuItem.has(event.target).length == 0 && !$menuItem.is(event.target)){
                    $menuItem.removeClass('active');
                    if (checkMobileDevice()) {
                        $('.main-toolbar').removeClass('overflow-hidden');
                    }
                }
                if ($colorPallette.has(event.target).length == 0 && !$colorPallette.is(event.target) && !$('.nbd-show-color-palette span').is(event.target)) {
                    $colorPallette.removeClass('show');
                    $('.nbd-show-color-palette').removeClass('nbd-show');
                }

            });
        },
        mainMenu: function () {
            var $menuItem = $('.nbd-main-menu .menu-item');
            var $nbdDropdown = $('.nbd-dropdown');
            var $subMenu = $('.nbd-main-menu .menu-item .sub-menu');
            var $nbdSubDropdown = $('.nbd-sub-dropdown');
            var $subMenuItem = $('.nbd-main-menu .menu-item .sub-menu-item');
            var $closeSubMenu = $('.nbd-close-sub-menu');
            var $subMenuHover = $('.nbd-main-menu .sub-menu .hover-menu');
            var clickOutside = false;

            $menuItem.on('click touch', function (event) {
                var target = $(event.target);
                $menuItem.not(this).removeClass('active');
                if ( target.hasClass('sub-menu-item') || target.parents('.sub-menu-item').length 
                        || !( target.hasClass('sub-menu') || target.parents('.sub-menu').length ) ){
                    if ($(this).find('.sub-menu').length) {
                        if (!$(this).hasClass('active')) {
                            $menuItem.removeClass('active');
                            $(this).addClass('active');
                            if (checkMobileDevice()) {
                                if ($(this).attr('data-range') == 'true') {
                                    $(this).closest('.main-toolbar').addClass('overflow-hidden');
                                }
                            }
                        }else {
                            $(this).removeClass('active');
                            if (checkMobileDevice()) {
                                if ($(this).attr('data-range') == 'true') {
                                    $(this).closest('.main-toolbar').removeClass('overflow-hidden');
                                }
                            }
                        }
                    }
                }
            });
            $nbdDropdown.on('click', function () {
                if ($(this).find('.nbd-sub-dropdown').length) {
                    if (!$(this).hasClass('active')) {
                        $(this).addClass('active');
                        $(this).find('.nbd-perfect-scroll').perfectScrollbar('update');
                    }else {
                        $(this).removeClass('active');
                    }
                }
            });
            $closeSubMenu.on('click', function () {
                $menuItem.removeClass('active');
            });
            /* Hover in submenu */
            $subMenuHover.on({
                mouseenter: function () {
                    if (!checkMobileDevice()) {
                        $(this).addClass('show');
                    }
                },
                mouseleave: function () {
                    if (!checkMobileDevice()) {
                        $(this).removeClass('show');
                    }
                },
                click: function (e) {
                    if ($(this).hasClass('show')) {
                        $(this).removeClass('show');
                        if (checkMobileDevice()) {
                            $(this).find('.hover-sub-menu-item').slideUp();
                        }
                    }else {
                        $(this).siblings().removeClass('show');
                        $(this).addClass('show');
                        if (checkMobileDevice()) {
                            $(this).find('.hover-sub-menu-item').slideDown();
                        }
                    }
                    if ($(this).find('.hover-sub-menu-item').has(event.target).length == 0 && !$(this).find('.hover-sub-menu-item').is(e.target)) {
                        return false;
                    }

                }
            });
            if (checkMobileDevice()) {
                $subMenuHover.find(' > i').removeClass('rotate-90');
            }
        },
        mainBar: function () {
            var $mainBar = $('.nbd-main-bar');
        },
        sideBar: {
            init: function () {
                this.tab();
                this.tabPhto.init();
                this.tabProductTemplate();
                this.tabElement.init();
            },
            tab: function () {
                var $tab = $('.nbd-sidebar .tabs-nav .tab');
                var $tabContent = $('.nbd-sidebar .tabs-content .tab');
                var $tabLayer = $('.nbd-sidebar .tabs-nav .tab.layerTab');
                var responsive = $(window).width();

                if (checkMobileDevice()) {
                    $tabContent.filter('.active').prevAll().addClass('left');
                    $tabContent.filter('.active').nextAll().addClass('right');
                    $tab.filter('.tab-first').removeClass('active');
                    $('.nbd-sidebar .tabs-content').addClass('nbd-hidden');

                }else{
                    $tabContent.filter('.active').prevAll().addClass('before');
                    $tabContent.filter('.active').nextAll().addClass('after');
                }
                $tab.on('click', function () {
                    var i = $(this).index();
                    i = ($tabLayer.length) ? parseInt(i) - 1 : parseInt(i);
                    var nthTab = 'tab-' + i;
                    if (checkMobileDevice()) {
                        if ($(this).hasClass('layerTab')) {
                            $('.nbd-workspace .main').addClass('active');
                            $('.nbd-sidebar .tabs-content').removeClass('active');
                        }else {
                            $('.nbd-workspace .main').removeClass('active');
                            $('.nbd-sidebar .tabs-content').addClass('active');
                            $('.nbd-sidebar .tabs-content').removeClass('nbd-hidden');
                        }
                    }

                    $(this).parent().removeAttr('data-tab').attr('data-tab', nthTab);
                    $tab.removeClass('active');
                    $(this).addClass('active');
                    $tabContent.removeClass('before after left right');
                    $tabContent.each(function (j) {
                        j += 1;
                        if (i == j) {
                            $(this).addClass('active');
                            if (checkMobileDevice()) {
                                $(this).prevAll().addClass('left');
                                $(this).nextAll().addClass('right');
                            }else {
                                $(this).prevAll().addClass('before');
                                $(this).nextAll().addClass('after');
                            }

                        }else {
                            $(this).removeClass('active');
                        }
                    });
                });
            },
            tabPhto: {
                init: function () {
                    $('#tab-photo .nbd-items-dropdown').nbdDropdown({
                        'getServer': {},
                        'itemInRow': 3,
                        'itemDistance' : 20
                    });

                    var $termCheck = $('.type-upload .nbd-term .nbd-checkbox input');
                    var $formUpload = $('.nbd-sidebar .type-upload .form-upload');
                    var isUpload = false;
                    $termCheck.on('click', function () {
                        var $typeUpload = $(this).closest('.type-upload');
                        if ($(this).is(':checked')) {
                            $typeUpload.addClass('accept');
                            isUpload = true;
                        }else {
                            $typeUpload.removeClass('accept');
                            isUpload = false;
                        }
                    });
                    $formUpload.on('click', function () {
                        if (!isUpload) {
                            return false;
                        }
                    });

                },
                initPositionCate: function () {
                    var $category = $('.nbd-sidebar #tab-photo .categories .category');
                    $category.each(function () {
                        var index = $(this).index();
                        var indexMod = index % 3;
                        var indexI = parseInt(index / 3);
                        $(this).css({
                            'left': 115 * indexMod + 'px',
                            'top' : 132 * indexI + 'px'
                        });
                    });
                }
            },
            tabProductTemplate: function () {
                var $tabProductTemplate = $('.nbd-sidebar #tab-product-template');
                var $product = $('.nbd-sidebar #tab-product .nbd-product');
                var $template = $('.nbd-sidebar #tab-template');
                var $closeTemplate = $('.nbd-sidebar #tab-template .close-template');
                var $productImg = $('.nbd-sidebar #tab-product .nbd-product .nbd-product-img');
                var $itemTemplate = $('.nbd-sidebar #tab-template .nbd-items-dropdown .main-items item');

                $('#tab-template .nbd-items-dropdown').nbdDropdown({
                    'getServer': {},
                    'itemInRow': 3,
                    'itemDistance' : 20
                });
            },
            tabElement : {
                init: function () {
                    $('#tab-element .nbd-items-dropdown').nbdDropdown({
                        'getServer': {},
                        'itemInRow': 3,
                        'itemDistance' : 20
                    });
                },
            }
        },
        toolBar: {
            init: function () {
                this.toolBarImage();
            },
            toolBarImage: function () {
                var $scrollPreset = $('.nbd-toolbar .toolbar-image .filter-scroll');
                var $scrollRight = $('.nbd-toolbar .toolbar-image .filter-scroll.scrollRight');
                var $scrollLeft = $('.nbd-toolbar .toolbar-image .filter-scroll.scrollLeft');
                var $filterImg = $('.nbd-toolbar .toolbar-image .main-presets .preset');
                var $range = $('.nbd-toolbar .toolbar-image .main-ranges .range');
                var $inputSlide = $('.nbd-toolbar .toolbar-image .main-ranges .range .slide-input');

                $scrollPreset.on('click', function () {
                    var tranform = $filterImg.css('transform').split(/[()]/)[1];
                    var curPosTranform = parseInt(tranform.split(',')[4]);
                    var newPosTranform = 0;
                    var addTranform = $filterImg.outerWidth() * 3;
                    var minThreshold = 0;
                    var maxThreshold = -(parseInt($filterImg.length / 3) - 1) * addTranform;
                    if ($(this).hasClass('scrollLeft')) {
                        var newPosTranform = curPosTranform + addTranform;
                        if (curPosTranform >= minThreshold) {
                            $(this).filter('.scrollLeft').addClass('disable');
                            return false;
                        }else {
                            if ($scrollRight.hasClass('disable')) {
                                $scrollRight.removeClass('disable');
                            }
                            $filterImg.css({
                                'transform': 'translateX('+ newPosTranform +'px)'
                            });
                        }
                    }else if ($(this).hasClass('scrollRight')) {
                        var newPosTranform = curPosTranform - addTranform;
                        if (curPosTranform <= maxThreshold) {
                            $(this).filter('.scrollRight').addClass('disable');
                            return false;
                        }else {
                            if ($scrollLeft.hasClass('disable')) {
                                $scrollLeft.removeClass('disable');
                            }
                            $filterImg.css({
                                'transform': 'translateX('+ newPosTranform +'px)'
                            });
                        }
                    }else {
                        return false;
                    }
                });
                $filterImg.on('click', function () {
                    $filterImg.removeClass('active');
                    $(this).addClass('active');
                });
            }
        },
        showPopup: function () {

            // Pop up share
            $('.nbd-show-popup-share').on('click', function () {
                $('.nbd-popup.popup-share').nbShowPopup();
                $('.nbd-popup.popup-share').find('.overlay-main').addClass('active');
            });

            // Popup file type
            $('.nbd-show-popup-fileType').on('click', function () {
                $('.nbd-popup.popup-fileType').nbShowPopup();
            });

            // Popup term
            $('.nbd-term .term-read').on('click', function () {
                $('.nbd-popup.popup-term').nbShowPopup();
            });

            // Popup select
//            $('.nbd-stages .icon-nbd-refresh').on('click', function () {
//                $('.nbd-popup.popup-select').nbShowPopup();
//            });

            // Popup keyboard
            $('.nbd-sidebar .keyboard-shortcuts i').on('click', function () {
                $('.nbd-popup.popup-keyboard').nbShowPopup();
                $('.nbd-popup.popup-keyboard .nbd-tabs').nbTab();
            });

            // popup save tempalte
            $('.nbd-main-bar #save-template').on('click', function () {
                $('.nbd-popup.popup-template').nbShowPopup();
            });
            $('.nbd-popup-tigger').on('click', function () {
                var target = jQuery(this).attr('data-popup');
                jQuery('.' + target).nbShowPopup();
            });
        },
        actionPopupShare: function () {
            var $socialSare = $('.popup-share .socials .social');
            $socialSare.on('click', function () {
                $socialSare.removeClass('active');
                if (!$(this).hasClass('active')) {
                    $(this).addClass('active');
                }
            });
        },

        actionShowPreview: function () {
            var $iconShowPreview = $('.nbd-sidebar #tab-product .nbd-product .product-more-info');
            var $sidebarPreview = $('.nbd-sidebar .nbd-sidebar-preview')
            $iconShowPreview.on('click', function () {
                if ($sidebarPreview.hasClass('show')) {
                    $sidebarPreview.removeClass('show');
                }else {
                    $sidebarPreview.addClass('show');
                }
            });
            $sidebarPreview.find('.close-preview').on('click', function () {
                $sidebarPreview.removeClass('show');
            });
        },
        responsive: function () {
            if (checkMobileDevice()) {
                var $mainTab = $('.nbd-sidebar .main-tabs');
                var $tabs = $('.nbd-sidebar .main-tabs .tab');
                var $menuMobile = $('.nbd-main-bar .menu-mobile');
                var $tabContent = $('.nbd-sidebar .tabs-content .tab');
                var $tabMainContent = $('.nbd-sidebar .tabs-content .tab .tab-main');
                var isRtl = checkRtl();

                // Sidebar Tab
                $menuMobile.on('click', function () {
                    var $mainMenus = $('.nbd-main-bar .nbd-main-menu');
                    if ($(this).hasClass('icon-nbd-menu')) {
                        $(this).removeClass('icon-nbd-menu').addClass('icon-nbd-clear');
                        $mainMenus.each(function (i) {
                            if ($(this).hasClass('menu-left')) {
                                $(this).show();
                            }else {
                                $(this).hide();
                            }
                        });
                    }else{
                        $(this).removeClass('icon-nbd-clear').addClass('icon-nbd-menu');
                        $mainMenus.each(function (i) {
                            if ($(this).hasClass('menu-left')) {
                                $(this).hide();
                            }else {
                                $(this).show();
                            }
                        });
                    }
                });

                // swipe
                $tabMainContent.on({
                    'swiperight': function () {
                        // left to right
                        var $tabCur = $(this).closest('.tab');
                        var nthTab = $tabCur.prev().index();
                        var curSl = (isRtl) ? $mainTab.scrollLeft() : $mainTab.scrollLeft();
                        var tabW = $('.nbd-sidebar .main-tabs .tab').eq(nthTab-1).width();
                        if ($tabCur.hasClass('tab-first')) {
                            return;
                        }
                        if (isRtl) {
                            $mainTab.animate({scrollLeft: curSl + tabW}, 300);
                        }else{
                            $mainTab.animate({scrollLeft: curSl - tabW}, 300);
                        }                        
                        $('.nbd-sidebar .main-tabs .tab').eq(nthTab-1).triggerHandler('click');
                    },
                    'swipeleft': function () {
                        // right to left
                        var $tabCur = $(this).closest('.tab');
                        var nthTab = $tabCur.next().index()
                        var curSl = $mainTab.scrollLeft();
                        var tabW = $('.nbd-sidebar .main-tabs .tab').eq(nthTab-1).width();
                        if ($tabCur.hasClass('tab-last')) {
                            return;
                        }
                        if (isRtl) {
                            $mainTab.animate({scrollLeft: curSl - tabW}, 300);
                        }else {
                            $mainTab.animate({scrollLeft: curSl + tabW}, 300);
                        }
                        $('.nbd-sidebar .main-tabs .tab').eq(nthTab-1).triggerHandler('click');
                    }
                });
            }
        }
    };
    $.fn.nbdDropdown = function (options) {
        var sefl = this;
        var defaults = {
            'getServer': {},
            // Item in 1 row
            'itemInRow': 3,
            // Margin Item
            'itemDistance' : 10
        };

        var opts = $.extend({}, $.fn.nbdDropdown.default, options);
        this.initPositionItem = function (items, item, itemInRow, itemDistance) {
            
            var leftItem = items.width() / itemInRow;
            var topItem = item.height() + itemDistance;
            item.show();
            item.each(function () {
                var index = $(this).index();
                var indexMod = index % itemInRow;
                var indexI = parseInt(index / itemInRow);
                $(this).css({
                    'left': leftItem * indexMod + 'px',
                    'top' : topItem * indexI + 'px'
                });
            });

        };
        return this.each(function () {
            var self = this;
            var $items = $(this).find('.items');
            var $item = $(this).find('.item');
            var $mainItems = $(this).find('.main-items');
            var $resultLoaded = $(this).find('.result-loaded');
            var $galleryItem = $(this).find('.nbdesigner-gallery');
            var $infoSupport = $(this).find('.info-support');
            var $tabScroll = $(this).closest('.tab-scroll');
            var $contentItem = $(this).find('.result-loaded .content-item');
            var noItem = $item.length;
            var noItemRow = parseInt(noItem / opts.itemInRow);
            var itemHeight = $item.outerHeight() + opts.itemDistance;
            var $loadingGif = $(this).find('.loading-photo');
            var isMasonry = false;
            // ========================= Main================================================
            // init items
            sefl.initPositionItem($items, $item, opts.itemInRow, opts.itemDistance);
            // set height for content cate
            $mainItems.css({
                'height': noItemRow * itemHeight + 'px'
            });
            $item.on('click', function () {
                var indexItem = $(this).index();
                var indexItemRow = parseInt(indexItem / opts.itemInRow) + 1;
                var widthItem = $(this).outerWidth();
                var itemName = $(this).find('.item-name').text();
                var dataType = $(this).attr('data-type');
                var dataApi = $(this).attr('data-api');

                if (dataType == 'webcam') {
                    var $popupWebcam = $('.nbd-popup.popup-webcam');
                    $popupWebcam.addClass('nb-show');
                    return false;
                }

                $infoSupport.find('span').text(itemName);
                // Set height for categories
                $mainItems.css({
                    'height': indexItemRow * (itemHeight - 15) + 'px'
                });
                $mainItems.find('.pointer').css({
                    'left': ((widthItem) * (indexItem % opts.itemInRow + 1) - widthItem / 2)  + 'px'
                });
                if (dataApi == 'false') {
                    $resultLoaded.show().addClass('overflow-visible');
                    $contentItem.filter(function (index) {
                        return $(this).attr('data-type') === dataType;
                    }).show().find('input[type="text"]').first().focus();
                    $galleryItem.hide();
                    if (!$mainItems.hasClass('active-expanded')) {
                        $(this).siblings().css({
                            'opacity': '0.5'
                        });
                        $mainItems.addClass('active-expanded');
                        $resultLoaded.addClass('loaded');
                        var nextAllItem = $items.find('.item:nth-child(' + indexItemRow * opts.itemInRow + ')').nextAll();
                        $(nextAllItem).each(function () {
                            $(this).hide();
                        });
                    }else {
                        $(this).css({
                            'opacity': '1'
                        });
                        $(this).siblings().css({
                            'opacity': '1'
                        });
                        $mainItems.removeClass('active-expanded');
                        sefl.initPositionItem($items, $item, opts.itemInRow, opts.itemDistance);
                        $resultLoaded.hide();
                        $contentItem.hide();
                        $resultLoaded.removeClass('loaded');
                    }
                    $infoSupport.find('.close-result-loaded').on('click', function () {
                        $mainItems.removeClass('active-expanded');
                        sefl.initPositionItem($items, $item, opts.itemInRow, opts.itemDistance);
//                        $resultLoaded.find('.nbdesigner-gallery').empty();
                        $resultLoaded.hide();
                        $contentItem.hide();
                        $item.show().css({'opacity' : '1'});
                        $resultLoaded.removeClass('loaded');
                        $tabScroll.scrollTop(0);
                        $infoSupport.removeClass('slideInDown animated show');
                    });
                }else {
                    $resultLoaded.removeClass('overflow-visible');
                    if (!$mainItems.hasClass('active-expanded')) {
                        $(this).siblings().css({
                            'opacity': '0.5'
                        });
                        var nextAllItem = $items.find('.item:nth-child(' + indexItemRow * opts.itemInRow + ')').nextAll();
                        $(nextAllItem).each(function () {
                            $(this).hide();
                        });
                        $resultLoaded.show();
                        $galleryItem.show();
                        $mainItems.addClass('active-expanded');
                        $resultLoaded.addClass('loaded');
                    }else {
                        $(this).css({
                            'opacity': '1'
                        });
                        $(this).siblings().css({
                            'opacity': '1'
                        });
                        $mainItems.removeClass('active-expanded');
                        sefl.initPositionItem($items, $item, opts.itemInRow, opts.itemDistance);
//                        $resultLoaded.find('.nbdesigner-gallery').empty();
                        $resultLoaded.hide();
                        $resultLoaded.removeClass('loaded');
                        $galleryItem.hide();
                        $contentItem.hide();

                    }

                    // Event click in close result
                    $infoSupport.find('.close-result-loaded').on('click', function () {
                        $mainItems.removeClass('active-expanded');
                        sefl.initPositionItem($items, $item, opts.itemInRow, opts.itemDistance);
//                        $resultLoaded.find('.nbdesigner-gallery').empty();
                        $resultLoaded.hide();
                        $item.show().css({'opacity' : '1'});
                        $resultLoaded.removeClass('loaded');
                        $tabScroll.scrollTop(0);
                        $infoSupport.removeClass('slideInDown animated show');
                    });

                    return false;
                }

            });
        });

    };
    $.fn.nbdColorPalette = function (options) {
        var defaults = {};
        var opts = $.extend({}, $.fn.nbdColorPalette.defaults, options);
        return this.each(function () {
            var sefl = this;
            var $colorPalette = $('#nbd-color-palette');
            $(this).on('click', function (e) {
                var posL = $(this).offset().left;
                var toolbarL = $('.nbd-toolbar').offset().left;

                $('.nbd-main-menu .menu-item').removeClass('active');
                $colorPalette.css({
                    'left' : (posL - toolbarL) + 'px'
                });
                if(!$(this).hasClass('nbd-show')){
                    $('.nbd-show-color-palette').removeClass('nbd-show');
                    $colorPalette.addClass('show');
                    $(this).addClass('nbd-show');
                }else{
                    $colorPalette.removeClass('show');
                    $(this).removeClass('nbd-show');
                };
            });
        });
    };
    /**
     *
     * @desc Component Tab
     * @version 2.0.0
     * @author Netbase Online Design Team
     */
    $.fn.nbTab = function () {
        return this.each(function () {
            var $tab = $(this).find('.nbd-tab');
            var $tabContent = $('.nbd-tab-contents .nbd-tab-content');
            $tab.on('click', function () {
                var tabId = $(this).attr('data-tab');
                $tab.removeClass('active');
                $(this).addClass('active');
                $tabContent.removeClass('active');
                $('.nbd-tab-contents #' + tabId).addClass('active')
                $('.nbd-tab-contents .tab-scroll').stop().animate({
                    scrollTop: 0
                }, 100);
            });
        });
    };

    /**
     *  @author Netbase Online Design Team
     */
    $.fn.nbShowPopup = function () {
        return this.each(function () {
            var sefl = this;
            var $close = $(this).find('.overlay-popup, .close-popup');
            if (!$(this).hasClass('nb-show')) {
                $(this).addClass('nb-show');
            }
            $close.on('click', function () {
                $(sefl).removeClass('nb-show');
            });
        });
    };
    /**
     *
     * @param text
     * @version 2.0.0
     * @author Netbase Online Design Team
     */
    $.fn.nbToasts = function () {
        return this.each(function () {
            var $toast = $(this).find('.toast');
            var sefl = $(this);
            $(this).addClass('nbd-show');
            $toast.addClass('nbSlideInUp');
            $toast.find('.nbd-close-toast').on('click', function () {
                $toast.removeClass('nbSlideInUp').addClass('nbSlideInDown');
                $toast.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                    sefl.removeClass('nbd-show');
                });
            });
            if(t) clearTimeout(t);
            var t = setTimeout(function () {
                if( sefl.hasClass('nbd-show') ){
                    $toast.removeClass('nbSlideInUp').addClass('nbSlideInDown');
                    $toast.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                        sefl.removeClass('nbd-show');
                    });
                }else{
                    clearTimeout(t);
                }
            }, 3000);
        });
    };
    /**
     *
     * @param text
     * @version 2.0.0
     * @author Netbase Online Design Team
     */
    $.fn.nbWarning = function (text) {
        return this.each(function () {
            var $itemWarning = $(this).find('.item');
            $(this).addClass('nbd-show');
            if ($itemWarning.length < 3) {
                var htmlWaring = '<div class="item animate300 animated nbScaleOut main-warning nbd-show">' +
                    '<i class="icon-nbd icon-nbd-baseline-warning warning"></i>' +
                    '<span class="title-warning">'+ text +'</span>' +
                    '<i class="icon-nbd icon-nbd-clear close-warning"></i>' +
                    '</div>';
                var $warning = $(htmlWaring);
                var $close = $warning.find('.close-warning');
                $(this).append($warning);
                $close.on('click', function () {
                    $warning.removeClass('nbScaleOut').addClass('nbScaleIn');
                    $warning.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                        $warning.remove();
                    });
                });

                setTimeout(function () {
                    $warning.removeClass('nbScaleOut').addClass('nbScaleIn');
                    $warning.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                        $warning.remove();
                    });
                }, 10000);

            }

        });
    };
    $.fn.nbSimpleSlider = function () {
        return this.each(function () {
            var nextEl = $(this).find('.next'),
                prevEl = $(this).find('.prev'),
                items = $(this).find('.items'),
                itemCount = $(this).find('.item').length,
                self = $(this),
                pos = 0;
            function setTransform() {
                nextEl.removeClass('nbd-disabled');
                prevEl.removeClass('nbd-disabled');
                items.css('transform', 'translateX(' + (-pos * items.width()) + 'px)');
            };
            prevEl.on('click', function(){
                pos = Math.max(pos - 1, 0);
                setTransform();
                if( pos == 0 ){
                    prevEl.addClass('nbd-disabled');
                }
            });
            nextEl.on('click', function(){
                pos = Math.min(pos + 1, itemCount - 1);
                setTransform();
                if( pos == (itemCount - 1) ){
                    nextEl.addClass('nbd-disabled');
                }
            });
        });
    };
    $.fn.nbdRuler = function (config){
        var self = this;
        var svgNS = 'http://www.w3.org/2000/svg';
        function initRuler( config ){
            var width = config.config.cwidth * config.zoomRatio,
            height = config.config.cheight * config.zoomRatio;
            var pixelGap = 100, divisions = [], multiplesX = 1, multiplesY = 1;
            if(config.layout === 'vertical'){
                var pHeight = parseFloat( config.config.pHeight );
                if( pHeight > 1 ){
                    while( Math.floor(pHeight / 10) != 0 ){
                        pHeight /= 10;
                        multiplesY *= 10;
                    }
                }else{
                    while( pHeight > 1 ){
                        pHeight *= 10;
                        multiplesY /= 10;
                    }
                }
                pixelGap = height / pHeight;
            }else{
                var pWidth = parseFloat( config.config.pWidth );
                if( pWidth > 1 ){
                    while( Math.floor(pWidth / 10) != 0 ){
                        pWidth /= 10;
                        multiplesX *= 10;
                    }
                }else{
                    while( pWidth > 1 ){
                        pWidth *= 10;
                        multiplesX /= 10;
                    }
                }
                pixelGap = width / pWidth;
            }
            if( (pixelGap / 10 ) > 10 ){
                divisions = [
                    {
                        pixelGap: pixelGap / 50,
                        lineLength: 5
                    },
                    {
                        pixelGap: pixelGap / 10,
                        lineLength: 10
                    },
                    {
                        pixelGap: pixelGap,
                        lineLength: 20
                    }
                ];
            }else{
                divisions = [
                    {
                        pixelGap: pixelGap / 10,
                        lineLength: 5
                    },
                    {
                        pixelGap: pixelGap,
                        lineLength: 15
                    }
                ];
            };
            return {
                width: config.layout === 'vertical' ? self.width() : width,
                height: config.layout === 'horizontal' ? self.height() : height,
                layout: config.layout,
                alignment: 'top',
                size: config.layout === 'vertical' ? height : width,
                divisions: divisions,
                text: {
                    offset: 27,
                    pixelGap: pixelGap,
                    multiplesX: multiplesX,
                    multiplesY: multiplesY,
                    unit: config.unit
                },
                cursorPos: {
                    x: 0,
                    y: 0
                }
            }
        };
        function isVertical(){
            return rulerConfig.layout === 'vertical';
        };
        function getAlignmentOffset() {
            return isVertical() ? rulerConfig.width : rulerConfig.height;
        }        
        function generateDivisionsAndTexts(g){
            rulerConfig.divisions.forEach(function (division) {
                generateDivisions(g, division);
            });
            generateTexts(g, rulerConfig.text);
            generateCursorIndicator(g, rulerConfig);
        };
        function generateCursorIndicator(g, rulerConfig){
            var line = window.document.createElementNS(svgNS, 'rect');
            var x, y, height, width;
            if (isVertical()) {
                x = 'y';
                y = 'x';
                height = 'width';
                width = 'height';
            } else {
                x = 'x';
                y = 'y';
                height = 'height';
                width = 'width';
            };
            var cursorPos = isVertical() ? rulerConfig.cursorPos.y : rulerConfig.cursorPos.x;
            var klass = isVertical() ? 'rulez-indicator-ver' : 'rulez-indicator-hoz';
            line.setAttribute('class', klass);
            line.setAttribute(x, 0);
            line.setAttribute(y, cursorPos);
            line.setAttribute(height, rulerConfig.divisions[rulerConfig.divisions.length - 1].lineLength * 0.75);
            line.setAttribute(width, 1);
            line.setAttribute('fill', 'red');
            g.appendChild(line);
        };
        function generateTexts(g, textCfg){
            var k = 0;
            for (var i = 0; i <= rulerConfig.size; i += textCfg.pixelGap) {
                var unit = i==0 ? ' ' + textCfg.unit : '';
                var text = createText(i, textCfg, k, unit);
                g.appendChild(text);
                k++;
            }
        };
        function createText(pos, textCfg, k, unit){
            var textSvg = window.document.createElementNS(svgNS, 'text');
            var yPos = textCfg.offset;
            var x, y;
            textSvg.setAttribute('class', 'rulez-text');
            if (isVertical()) {
                x = 'y';
                y = 'x';
            } else {
                x = 'x';
                y = 'y';
            };
            var rotate = isVertical() ?  'rotate(90 ' + yPos + ' ' + (pos + 2) + ')' : 'rotate(0 ' + (pos + 2) + ' ' + yPos + ')';
            textSvg.origPos = pos;
            textSvg.origPosAttribute = x;
            textSvg.setAttribute(x, pos + 2);
            textSvg.setAttribute(y, yPos);
            textSvg.setAttribute('transform', rotate);
            textSvg.textContent = k * (isVertical() ? textCfg.multiplesY : textCfg.multiplesX) + unit;
            return textSvg;
        };
        function generateDivisions(g, division){
            for (var i = 0; i <= rulerConfig.size; i += division.pixelGap) {
                var line = createDivision(i, division);
                g.appendChild(line);
            }
        };
        function createDivision( pos, division ){
            var line = window.document.createElementNS(svgNS, 'rect');
            var x, y, height, width;
            if (isVertical()) {
                x = 'y';
                y = 'x';
                height = 'width';
                width = 'height';
            } else {
                x = 'x';
                y = 'y';
                height = 'height';
                width = 'width';
            }
            line.setAttribute('class', 'rulez-rect');
            line.setAttribute(x, pos);
            line.setAttribute(y, 0);
            line.setAttribute(height, division.lineLength);
            line.setAttribute(width, 0.5);
            return line;
        };
        this.update = function(_config){
            this.rulerConfig.config = JSON.parse(JSON.stringify(_config.config));
            this.rulerConfig.zoomRatio = JSON.parse(JSON.stringify(_config.zoomRatio));
            this.render();
        };
        this.updateCursorIndicator = function(cursorPos){
            this.rulerConfig.cursorPos = JSON.parse(JSON.stringify(cursorPos));
            var indicatorHoz = this.find('.rulez-indicator-hoz'),
                indicatorVer = this.find('.rulez-indicator-ver');
            indicatorHoz.attr('x', cursorPos.x);
            indicatorVer.attr('y', cursorPos.y);
        }
        this.render = function(){
            this.rulerConfig = config ? config : this.rulerConfig;
            var g = window.document.createElementNS(svgNS, 'g');
            rulerConfig = initRuler(this.rulerConfig);
            generateDivisionsAndTexts(g);
            self.html('').append(g);
        };
        return this;
    };
    window.initModernLayout = function(){
        modern.init();
        $('.nbd-tooltip-hover').tooltipster({
            side: "top",
            theme: 'tooltipster-borderless',
        });
        $('.nbd-tooltip-hover-left').tooltipster({
            side: "left",
            theme: 'tooltipster-borderless',
        });
        $('.nbd-tooltip-hover-right').tooltipster({
            side: "right",
            theme: 'tooltipster-borderless',
        });        
        $('#toolbar-font-size-dropdown,#toolbar-font-familly-dropdown, .nbd-sidebar .tab-scroll,.nbd-popup .tab-scroll, .nbd-perfect-scroll').perfectScrollbar();
        $('.nbd-show-color-palette').nbdColorPalette();
        var width = jQuery(window).width();
        if(width > 767 && width <= 1024){
            jQuery('.main-tabs .tab').on('click', function(){
                jQuery('.nbd-sidebar').addClass('is_open');
            });
            jQuery('.hide-tablet').on('click', function(){
                jQuery('.nbd-sidebar').removeClass('is_open');
            });            
        };
        jQuery('.popup-webcam .close-popup, .popup-webcam .overlay-popup').on('click', function(){
            jQuery('.popup-webcam').removeClass('nb-show');
        }); 
        jQuery('.nbd-stages-nav-toggle').on('click', function(){
            jQuery('.nbd-stages-nav').toggleClass('toggle-down');
            document.getElementById('toggle-direction').classList.toggle('toggle-down');
        });
    };
    function checkRtl() {
        var isRtl = false;
        if ($('body').hasClass('nbd-modern-rtl')) {
            isRtl = true;
        }
        return isRtl;
    }
})(jQuery, window);
window.wp = window.wp || {};
wp.template = _.memoize(function ( id ) {
    var compiled,
    options = {
        evaluate:    /<#([\s\S]+?)#>/g,
        interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
        escape:      /\{\{([^\}]+?)\}\}(?!\})/g,
        variable:    'data'
    };
    return function ( data ) {
        compiled = compiled || _.template( $( '#tmpl-' + id ).html(),  options );
        return compiled( data );
    };
});
