"use strict";

// break points site
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var breakPoint = {
  desctop: 1920,
  desctopMid: 1450,
  desctopMin: 1230,
  table: 1024,
  mobile: 768,
  tel: 480
};

/***** INITIALIZING PLUGINS ******/

// скрол страницы к нужной координате
var scrollingWindow = scrollWindow();

//AOS плагин
if (isElem('[data-aos]')) {
  AOS.init({
    //disable: "mobile",
    duration: 3000,
    offset: 0,
    once: true,
    anchorPlacement: 'bottom-bottom'
  });
}

//slinky header menu
if (isElem('header .bro-menu')) {
  var toggleMenu = function toggleMenu() {
    if (mediaQuery.matches) {
      menu.init();
    } else {
      menu.destroy();
    }
  };
  var $menu = document.querySelector('header .bro-menu');
  var menu = broMenu($menu);
  var mediaQuery = window.matchMedia("(max-width: ".concat(breakPoint.desctopMin, "px)"));
  toggleMenu();
  mediaQuery.addListener(toggleMenu);
}

// 	main slider 
(function () {
  if (isElem('.main-slider')) {
    var slideChanger = function slideChanger(slider) {
      if (currentResolutionState !== "desktop" && window.innerWidth >= 840) {
        additionMobileSlides(slider).map(function (e) {
          e.style.display = 'none';
          e.setAttribute('aria-hidden', 'true');
          e.remove();
        });
        currentResolutionState = "desktop";
      } else if (currentResolutionState !== "mobile" && window.innerWidth < 840) {
        slider.addSlide(1, mobileSlides);
        additionMobileSlides(slider).map(function (e) {
          e.style.display = '';
          e.setAttribute('aria-hidden', 'false');
        });
        currentResolutionState = "mobile";
      }
    };
    var additionMobileSlides = function additionMobileSlides(slider) {
      var hiddenSlides = [];
      slider.slides.forEach(function (item) {
        if (item.getAttribute('aria-hidden')) {
          hiddenSlides.push(item);
        }
      });
      return hiddenSlides;
    };
    var sliderNode = document.querySelector('.main-slider');
    var swiper = slider(sliderNode, {
      effect: "coverflow",
      grabCursor: true,
      autoplay: true,
      speed: 1200,
      autoHeight: false,
      spaceBetween: 300,
      coverflowEffect: {
        rotate: 80,
        depth: 100,
        slideShadows: 1
      },
      pagination: {
        el: sliderNode.parentElement.querySelector('.slider-pagination'),
        clickable: true
      }
    });
    var currentResolutionState = "",
      mobileSlides = additionMobileSlides(sliderNode.swiper);
    slideChanger(sliderNode.swiper);
    sliderNode.swiper.on('resize', function (slider) {
      slideChanger(slider);
    });
  }
})();

// advantages slider
if (isElem('.advantages-slider')) {
  var $sliderNodes = document.querySelectorAll('.advantages-slider');
  var _iterator = _createForOfIteratorHelper($sliderNodes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var $slider = _step.value;
      var swiper = new Swiper($slider, {
        slidesPerView: 1,
        spaceBetween: 200,
        breakpoints: _defineProperty({
          320: {
            grabCursor: true,
            enabled: true
          }
        }, breakPoint.mobile + 1, {
          enabled: false
        }),
        pagination: {
          el: $slider.parentElement.querySelector('.slider-pagination'),
          clickable: true
        }
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

// 	main slider 
if (isElem('.slider-scroll')) {
  var sliderNode = document.querySelector('.slider-scroll');
  var _swiper = new Swiper(sliderNode, {
    freeMode: true,
    slidesPerView: 'auto',
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      hide: false,
      dragSize: 35,
      snapOnRelease: false
    }
  });
}

// heading slider	
if (isElem('.hiding-slider')) {
  var _$sliderNodes = document.querySelectorAll('.hiding-slider');
  var _iterator2 = _createForOfIteratorHelper(_$sliderNodes),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _breakpoints2;
      var $sliderNode = _step2.value;
      var _swiper2 = new Swiper($sliderNode, {
        freeMode: true,
        loopAdditionalSlides: 1,
        watchSlidesProgress: true,
        watchOverflow: true,
        dynamicBullets: true,
        breakpoints: (_breakpoints2 = {
          300: {
            slidesPerView: 'auto',
            spaceBetween: 23
          }
        }, _defineProperty(_breakpoints2, breakPoint.table + 1, {
          slidesPerView: 'auto',
          spaceBetween: 30,
          grabCursor: true
        }), _defineProperty(_breakpoints2, breakPoint.desctopMin + 1, {
          grabCursor: false,
          slidesPerView: 3,
          spaceBetween: 30
        }), _breakpoints2)
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

// gallery slider	
if (isElem('.gallery')) {
  var $galleries = document.querySelectorAll('.gallery');
  var _iterator3 = _createForOfIteratorHelper($galleries),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var $gallery = _step3.value;
      gallery($gallery);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

// img slider	
if (isElem('.img-slider')) {
  var _$sliderNodes2 = document.querySelectorAll('.img-slider');
  var _iterator4 = _createForOfIteratorHelper(_$sliderNodes2),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _$sliderNode = _step4.value;
      var _swiper3 = new Swiper(_$sliderNode, {
        loopAdditionalSlides: 1,
        watchSlidesProgress: true,
        watchOverflow: true,
        dynamicBullets: true,
        navigation: {
          prevEl: _$sliderNode.parentElement.querySelector('.slider-arr--prev'),
          nextEl: _$sliderNode.parentElement.querySelector('.slider-arr--next')
        }
      });
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
}

// shop place slider	
if (isElem('.shop-place-slider')) {
  var _$sliderNodes3 = document.querySelectorAll('.shop-place-slider');
  var _iterator5 = _createForOfIteratorHelper(_$sliderNodes3),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _$sliderNode2 = _step5.value;
      var _swiper4 = new Swiper(_$sliderNode2, {
        grabCursor: true,
        loopAdditionalSlides: 1,
        watchSlidesProgress: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
        watchOverflow: true,
        dynamicBullets: true,
        lazy: {
          loadPrevNext: true
        },
        breakpoints: _defineProperty({}, breakPoint.mobile + 1, {
          spaceBetween: 24
        }),
        navigation: {
          prevEl: _$sliderNode2.parentElement.querySelector('.slider-arr--prev'),
          nextEl: _$sliderNode2.parentElement.querySelector('.slider-arr--next')
        }
      });
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
}

// slider stages
if (isElem('.stages-slider')) {
  var _$sliderNode3 = document.querySelector('.stages-slider');
  var stageClass = 'js-slide-stage';
  var toPaginationItem = function toPaginationItem(className, content, i) {
    content = content ? content : '';
    return "\n\t\t\t<div class=\"".concat(className, "\">\n\t\t\t\t<div class=\"stage-num\">").concat(i, "</div>\n\t\t\t\t").concat(content, "\n\t\t\t</div>\n\t\t");
  };
  var _swiper5 = new Swiper(_$sliderNode3, {
    autoHeight: true,
    spaceBetween: 50,
    effect: "fade",
    breakpoints: _defineProperty({
      300: {
        allowTouchMove: true
      }
    }, breakPoint.table + 1, {
      effect: "fade",
      allowTouchMove: false
    }),
    pagination: {
      el: _$sliderNode3.parentElement.querySelector('.slider-pagination'),
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        var stageNode = this.slides[index].querySelector(".".concat(stageClass));
        var contentStage = stageNode ? stageNode.outerHTML : null;
        return "\n\t\t\t\t\t".concat(toPaginationItem(className, contentStage, index + 1), "\n\t\t\t\t");
      }
    }
  });
}

// bTabs
if (isElem('.b-tabs')) {
  var tabs = document.querySelectorAll('.b-tabs');
  var _iterator6 = _createForOfIteratorHelper(tabs),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var tab = _step6.value;
      bTabs(tab);
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
}

// window modal
if (isElem('.v-modal')) {
  modalWindow();
}

/****** CUSTOM PLUGIN ******/

document.addEventListener("DOMContentLoaded", function () {});
(function () {
  function findIndex($obj, $item) {
    var index = null;
    $obj.each(function (i, item) {
      if (item === $item[0]) {
        index = i;
      }
    });
    return index;
  }
  function initTabsItem($tabs, $tabsItemActive) {
    var dataTabs = $tabs.attr('data-tabs');
    if (dataTabs) {
      var $itemsTabs = $tabs.find('[data-tab]');
      $itemsTabs.each(function (i) {
        var $sectionsTabs = $("[data-tabs=\"".concat(dataTabs, ", ").concat(i, "\"]"));
        var index = findIndex($itemsTabs, $tabsItemActive);
        var $unloadedSrc = $sectionsTabs.find('[data-src]');
        if (index !== i) {
          $sectionsTabs.attr('hidden', true);
        } else {
          $("[data-tabs=\"".concat(dataTabs, ", ").concat(index, "\"]")).removeAttr('hidden');
          if ($unloadedSrc.length) {
            $unloadedSrc.each(function (i, item) {
              var src = $(item).data('src');
              $(item).attr('src', src).removeAttr('data-src');
            });
          }
        }
      });
    }
    $tabs[0].dispatchEvent(new CustomEvent("tabs:change", {
      bubbles: true,
      cancelable: true
    }));
  }
  $('.tabs').each(function (i) {
    var $tabs = $(this);
    var $tabsItemActive = $tabs.find('[data-tab].active');
    if ($tabsItemActive.length !== 1) {
      var $tabsItems = $tabs.find('[data-tab]');
      $tabsItems.removeClass('active');
      $tabsItems.eq(0).addClass('active');
      $tabsItemActive = $tabsItems.eq(0);
    }
    initTabsItem($tabs, $tabsItemActive);
    this.dispatchEvent(new CustomEvent("tabs:init", {
      bubbles: true,
      cancelable: true
    }));
  });
  $(document).on('click', '[data-tab]', function () {
    var $tabsItem = $(this);
    var $tabs = $tabsItem.closest('[data-tabs]');
    var $tabsItems = $tabs.find('[data-tab]');
    $tabsItems.not($tabsItem).removeClass('active');
    $tabsItem.addClass('active');
    console.log($tabs[0]);
    initTabsItem($tabs, $tabsItem);
  });
})();
if (document.querySelector('.shop-place__togglers')) {
  var setValue = function setValue() {
    var activeBtn = togglersParentEl.querySelector('button.active');
    shopValueToggleEl.textContent = activeBtn.textContent;
  };
  var shopValueWrapEl = document.querySelector('.shop-place__value-wrap');
  var shopValueToggleEl = document.querySelector('.shop-place__value');
  var togglersParentEl = document.querySelector('.shop-place__togglers');
  setValue();
  document.addEventListener('tabs:change', function () {
    setValue();
  });
  document.addEventListener('click', function (e) {
    if (e.target.closest('.shop-place__value-wrap')) {
      var targetEl = e.target.closest('.shop-place__value-wrap');
      shopValueWrapEl.classList.toggle('active');
    } else if (!e.target.closest('.shop-place__boxes-side') || e.target.closest('.shop-place__togglers button')) {
      shopValueWrapEl.classList.remove('active');
    }
  });
}

//Hamburger открытия мобильного меню
if (isElem('.header__hamburger')) {
  var hamburgerClassName = '.header__hamburger';
  var burgerBlockClassName = '.header__burger';
  var burgerInnerClassName = '.header__burger-inner';
  var $body = document.querySelector('body');
  var $header = document.querySelector('header');
  var $hamburger = document.querySelector(hamburgerClassName);
  var $burgerBlock = document.querySelector(burgerBlockClassName);
  var $burgerInner = document.querySelector(burgerInnerClassName);
  var _mediaQuery = window.matchMedia("(max-width: ".concat(breakPoint.desctopMin, "px)"));
  document.addEventListener('click', function (e) {
    if (e.target.closest(hamburgerClassName)) {
      var offsetRight = window.innerWidth - $body.offsetWidth;
      $hamburger.classList.toggle('active');
      $burgerBlock.style.top = $header.offsetHeight + 'px';
      var isActive = $hamburger.classList.contains('active');
      $burgerBlock.classList[isActive ? 'add' : 'remove']('open');
      $burgerInner.style.maxHeight = isActive ? "calc(100vh - ".concat($header.offsetHeight, "px)") : '';
      $body.style.overflow = isActive ? 'hidden' : '';
    } else if ($burgerBlock.classList.contains('open') && !$burgerInner.contains(e.target)) {
      $hamburger.classList.remove('active');
      $burgerBlock.classList.remove('open');
      $body.style.overflow = '';
    }
  });
  _mediaQuery.addListener(function (e) {
    if (!e.matches && $burgerBlock.classList.contains('open')) {
      $hamburger.classList.remove('active');
      $burgerBlock.classList.remove('open');
      $body.style.overflow = '';
      document.documentElement.style.paddingRight = '';
    }
  });
}

//fixed header
if (isElem('header')) {
  var showHeader = function showHeader(el) {
    var $el = typeof el === 'string' ? document.querySelector(el) : el;
    var htmlEl = document.documentElement;
    var offsetTopEl = $el.getBoundingClientRect().height;
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > offsetTopEl + 40) {
        show();
      } else if (window.pageYOffset < offsetTopEl / 2) {
        fixed();
      }
    }, {});
    window.addEventListener('resize', function () {
      offsetTopEl = $el.getBoundingClientRect().height;
    });
    function show() {
      if ($el.classList.contains('fixed')) return;
      htmlEl.style.paddingTop = $el.offsetHeight + "px";
      $el.classList.add('fixed');
    }
    function fixed() {
      if (!$el.classList.contains('fixed')) return;
      $el.classList.remove('fixed');
      htmlEl.style.paddingTop = '';
    }
    return {
      show: show,
      fixed: fixed
    };
  };
  var fixedHeader = showHeader('header');
}

// под меню с гамбургером внутри основного меню
if (isElem('.menu__item--drop')) {
  var menuDrop = document.querySelector('.menu__item--drop');
  var toggle = menuDrop.querySelector('.menu__item-toggle');
  var linkbtn = menuDrop.querySelector('.menu__item-toggle ~ .menu__link');
  var itemMenuList = document.querySelectorAll('.menu__item:not(.menu__item--drop)');
  toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');
    menuDrop.classList.toggle('active');
  });
  linkbtn.addEventListener('click', function (e) {
    e.preventDefault();
    toggle.classList.toggle('active');
    menuDrop.classList.toggle('active');
  });
  document.addEventListener('click', function (ev) {
    if (!ev.target.closest('.menu__item--drop')) {
      if (menuDrop.classList.contains('active')) {
        toggle.classList.remove('active');
        menuDrop.classList.remove('active');
      }
    }
  });
}

// v-up кнопка вверх
(function () {
  document.querySelector('body').insertAdjacentHTML('afterbegin', "\n\t\t<div class=\"v-up\"></div>\n\t");
  var btnDown = document.querySelector('.v-up');
  var vUpTriggerTimer = 0;
  vUp(btnDown, getScroledWindow);
  btnDown.addEventListener('click', function () {
    //backToTop(-45, 0);
    scrollingWindow.startAmimationScroll(1);
  });
  window.addEventListener('scroll', function () {
    clearTimeout(vUpTriggerTimer);
    vUpTriggerTimer = setTimeout(function () {
      vUp(btnDown, getScroledWindow);
    }, 200);
  });

  //пролистываине окна вверх при клике на кнопку
  function vUp(btn, scroled) {
    if (scroled() > window.innerHeight / 2) {
      btn.classList.add('active');
    } else if (scroled() < window.innerHeight / 2 || btn.classList.contains('active')) {
      btn.classList.remove('active');
    }
  }

  //прокрутка окна вверх вниз
  function backToTop(interval, to) {
    if (window.pageYOffset <= to) return;
    window.scrollBy(0, interval);
    setTimeout(function () {
      backToTop(interval, to);
    }, 0);
  }

  //на сколько прокручено окно
  function getScroledWindow() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
})();

/***** FUNCTION PLUGIN ******/

//slinky menu
function broMenu(selector, options) {
  var $menu = typeof selector === "string" ? document.querySelector(selector) : selector;
  var $level_1 = $menu.lastElementChild;
  var $subMenuList = $menu.querySelectorAll('li > ul');
  var $subMenuLink = $menu.querySelectorAll('li > a');
  var activated;
  var defaulOptions = {
    arrow: "\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n\t\t\t<path d=\"M12.219 2.281L10.78 3.72 18.062 11H2v2h16.063l-7.282 7.281 1.438 1.438 9-9 .687-.719-.687-.719z\" />\n\t\t\t</svg>\n\t\t"
  };
  Object.assign(defaulOptions, options);
  var $activeUl;
  var translate = 0;
  var method = {
    init: function init() {
      if (activated) return;
      $menu.classList.add('bro-menu');
      var _iterator7 = _createForOfIteratorHelper($subMenuList),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var submenu = _step7.value;
          var link = submenu.parentElement.querySelector('li > a');
          link.classList.add('bro-menu__next');
          submenu.classList.add('bro-menu__submenu');
          _addBtnBack(submenu, link);
          _addBtnNext(link);
          activated = true;
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var _iterator8 = _createForOfIteratorHelper($subMenuLink),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var $link = _step8.value;
          $link.classList.add('active');
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      $menu.addEventListener('click', clickHandler);
      window.addEventListener('resize', _setHeighMenu);
    },
    destroy: function destroy() {
      if (!activated) return;

      /* Удаляем обработчики событий */
      $menu.removeEventListener('click', clickHandler);
      window.removeEventListener('resize', _setHeighMenu);

      /* Удаляем классы плагина на ссылках и кнопку назад */
      var _iterator9 = _createForOfIteratorHelper($menu.querySelectorAll('.link')),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var $link = _step9.value;
          if ($link.classList.contains('bro-menu__back')) {
            $link.closest('li').remove();
            continue;
          }
          $link.classList.remove('link');
          $link.classList.remove('bro-menu__next');
        }

        /* Удаляем классы плагина на вложеных менюшках	*/
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      var _iterator10 = _createForOfIteratorHelper($menu.querySelectorAll('.bro-menu__submenu')),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var $subMenu = _step10.value;
          $subMenu.classList.remove('bro-menu__submenu');
        }

        /* Удаляем стрелки в ссылках */
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      var _iterator11 = _createForOfIteratorHelper($menu.querySelectorAll('.bro-menu__arr')),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var $arr = _step11.value;
          $arr.remove();
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      $activeUl && $activeUl.classList.remove('active');
      $menu.style.height = '';
      $level_1.style.transform = "";
      translate = 0;
      activated = false;
    }
  };
  function clickHandler(e) {
    var target = e.target;
    if (target.closest('.bro-menu__next')) {
      e.preventDefault();
      var $nestedMenu = target.closest('li').querySelector('ul');
      if ($activeUl) $activeUl.classList.remove('active');
      $nestedMenu.classList.add('active');
      $nestedMenu.style.visibility = 'visible';
      translate -= 100;
      $level_1.style.transform = "translateX(".concat(translate, "%)");
      $activeUl = $nestedMenu;
      scrollToVisible($activeUl);
      _setHeighMenu();
    } else if (target.closest('.bro-menu__back')) {
      e.preventDefault();
      var $upperMenu = $activeUl.parentElement.closest('ul');
      $upperMenu.classList.add('active');
      $activeUl.style.visibility = '';
      translate += 100;
      $level_1.style.transform = "translateX(".concat(translate, "%)");
      $activeUl.classList.remove('active');
      $activeUl = $upperMenu;
      _setHeighMenu();
    }
  }
  function _addBtnNext(elem) {
    elem.classList.add('link');
    elem.insertAdjacentHTML('beforeend', "\n\t\t\t".concat(defaulOptions.arrow, "\n\t\t"));
    elem.lastElementChild.classList.add('bro-menu__arr');
  }
  function _addBtnBack(elem, link) {
    var href = link.getAttribute('href');
    elem.insertAdjacentHTML('afterbegin', "\n\t\t\t<li>\n\t\t\t\t<a class=\"bro-menu__back link\" ".concat(href ? "href=".concat(href) : '', ">\n\t\t\t\t\t").concat(defaulOptions.arrow, "\n\t\t\t\t\t").concat(link.textContent, "\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t"));
  }
  function _setHeighMenu() {
    if (!$activeUl) return;
    $menu.style.height = $activeUl.offsetHeight + "px";
  }
  function scrollToVisible(el) {
    if (_getPosAbsWindow(el) > window.pageYOffset) return;
    backToTop(-10, _getPos(el));
  }
  function _getPosAbsWindow(elem) {
    var offsetTop = elem.getBoundingClientRect().top;
    return offsetTop - window.pageYOffset;
  }
  function _getPos(el) {
    return el.getBoundingClientRect().top + window.pageYOffset;
  }
  function backToTop(interval, to) {
    if (window.pageYOffset <= to) return;
    window.scrollBy(0, interval);
    setTimeout(function () {
      backToTop(interval, to);
    }, 0);
  }
  return method;
}

// bTabs
function bTabs(target) {
  var _elemTabs = typeof target === 'string' ? document.querySelector(target) : target,
    _eventTabsShow,
    _showTab = function _showTab(tabsLinkTarget) {
      var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
      tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
      tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.b-tabs__link.active');
      tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.b-tabs__pane.active');
      // если следующая вкладка равна активной, то завершаем работу
      if (tabsLinkTarget === tabsLinkActive) return;
      // удаляем классы у текущих активных элементов
      if (tabsLinkActive !== null) tabsLinkActive.classList.remove('active');
      if (tabsPaneShow !== null) tabsPaneShow.classList.remove('active');
      // добавляем классы к элементам (в завимости от выбранной вкладки)
      tabsLinkTarget.classList.add('active');
      tabsPaneTarget.classList.add('active');
      document.dispatchEvent(_eventTabsShow);
    },
    _switchTabTo = function _switchTabTo(tabsLinkIndex) {
      var tabsLinks = _elemTabs.querySelectorAll('.b-tabs__link');
      if (tabsLinks.length > 0) {
        if (tabsLinkIndex > tabsLinks.length) {
          tabsLinkIndex = tabsLinks.length;
        } else if (tabsLinkIndex < 1) {
          tabsLinkIndex = 1;
        }
        _showTab(tabsLinks[tabsLinkIndex - 1]);
      }
    };
  _eventTabsShow = new CustomEvent('tab.show', {
    detail: _elemTabs
  });
  _elemTabs.addEventListener('click', function (e) {
    var tabsLinkTarget = e.target;
    // завершаем выполнение функции, если кликнули не по ссылке
    if (!tabsLinkTarget.classList.contains('b-tabs__link')) return;
    e.preventDefault();
    _showTab(tabsLinkTarget);
  });
  return {
    showTab: function showTab(target) {
      _showTab(target);
    },
    switchTabTo: function switchTabTo(index) {
      _switchTabTo(index);
    }
  };
}
;

//	modal window
function modalWindow() {
  var body = document.querySelector('body'),
    modalEls = document.querySelectorAll('.v-modal'),
    btnOpenClassName = "js-openModal",
    btnCloseClassName = 'js-closeModal';
  document.addEventListener('click', function (e) {
    if (e.target.closest(".".concat(btnOpenClassName)) && e.target.dataset.typeModal) {
      e.preventDefault();
      var typeModal = e.target.dataset['typeModal'];
      var _iterator12 = _createForOfIteratorHelper(modalEls),
        _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var $modal = _step12.value;
          if ($modal.dataset && $modal.dataset['typeModal'] === typeModal) {
            $modal.classList.add('active');
            e.preventDefault();
            var scrollBarWidth = window.innerWidth - body.offsetWidth;
            body.style.overflow = 'hidden';
            body.style.paddingRight = scrollBarWidth + "px";
            break;
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
    } else if (e.target.classList.contains('v-modal__inner') || e.target.closest(".".concat(btnCloseClassName))) {
      e.target.closest('.v-modal').classList.remove('active');
      body.style.overflow = '';
      body.style.paddingRight = "";
    }
  });
}

// анимация скрола окна браузера
function scrollWindow() {
  var scrollAnimationId;
  var currentScroll = window.pageYOffset;
  var scrolls = false;
  function startAmimationScroll(newScrollY) {
    if (!scrolls) {
      currentScroll = window.pageYOffset;
      scrolls = true;
    }
    var deltaScroll = newScrollY - currentScroll;
    currentScroll += deltaScroll * 0.15;
    window.scrollTo(0, currentScroll);
    if (Math.abs(deltaScroll) > 5) {
      scrollAnimationId = window.requestAnimationFrame(function () {
        startAmimationScroll(newScrollY);
      });
    } else {
      window.scrollTo(0, newScrollY);
      stopAnimationScroll();
      scrolls = false;
    }
  }
  function stopAnimationScroll() {
    window.cancelAnimationFrame(scrollAnimationId);
    scrollAnimationId = undefined;
  }
  return {
    startAmimationScroll: startAmimationScroll,
    stopAnimationScroll: stopAnimationScroll
  };
}
function gallery(selector) {
  var $gallery = typeof selector === 'string' ? document.querySelector(selector) : selector;
  var $thumbsSlider = $gallery.querySelector('.gallery__thumbs'),
    $fullSlider = $gallery.querySelector('.gallery__slider');

  /* thumbs */
  var galleryThumbs = new Swiper($thumbsSlider, {
    spaceBetween: 20,
    slidesPerView: "auto",
    watchSlidesProgress: true,
    freeMode: {
      enabled: true,
      sticky: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    mousewheel: true
  });
  var galleryFull = new Swiper($fullSlider, {
    spaceBetween: 10,
    slidesPerView: "auto",
    // autoplay: {
    // 	delay: 5000
    // },
    navigation: {
      prevEl: $fullSlider.parentElement.querySelector('.slider-arr--prev'),
      nextEl: $fullSlider.parentElement.querySelector('.slider-arr--next')
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
}

//slider 
function slider(selector) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $slider = typeof selector === 'string' ? document.querySelector(selector) : selector;
  var $sliderWrap = $slider.closest('.slider-wrap');
  var setings = {
    navigation: $sliderWrap.querySelector('.slider-nav'),
    pagination: $sliderWrap.querySelector('.slider-pagination'),
    options: _objectSpread({
      watchOverflow: true
    }, option)
  };
  Object.assign(setings.options, {
    watchSlidesVisibility: true,
    watchOverflow: true,
    autoplay: +$slider.dataset.swiperAutoplay > 0 ? {
      delay: +$slider.dataset.swiperAutoplay,
      pauseOnMouseEnter: true,
      disableOnInteraction: false
    } : '',
    navigation: setings.navigation ? {
      nextEl: $sliderWrap.querySelector('.slider-arr--next'),
      prevEl: $sliderWrap.querySelector('.slider-arr--prev')
    } : '',
    pagination: setings.pagination ? {
      el: $sliderWrap.querySelector('.slider-pagination'),
      clickable: true
    } : ''
  });
  return new Swiper($slider, setings.options);
}

/****** UTILS ******/

function isElem(selector) {
  return document.querySelector(selector) ? true : false;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImJyZWFrUG9pbnQiLCJkZXNjdG9wIiwiZGVzY3RvcE1pZCIsImRlc2N0b3BNaW4iLCJ0YWJsZSIsIm1vYmlsZSIsInRlbCIsInNjcm9sbGluZ1dpbmRvdyIsInNjcm9sbFdpbmRvdyIsImlzRWxlbSIsIkFPUyIsImluaXQiLCJkdXJhdGlvbiIsIm9mZnNldCIsIm9uY2UiLCJhbmNob3JQbGFjZW1lbnQiLCJ0b2dnbGVNZW51IiwibWVkaWFRdWVyeSIsIm1hdGNoZXMiLCJtZW51IiwiZGVzdHJveSIsIiRtZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnJvTWVudSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInNsaWRlQ2hhbmdlciIsInNsaWRlciIsImN1cnJlbnRSZXNvbHV0aW9uU3RhdGUiLCJpbm5lcldpZHRoIiwiYWRkaXRpb25Nb2JpbGVTbGlkZXMiLCJtYXAiLCJlIiwic3R5bGUiLCJkaXNwbGF5Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwiYWRkU2xpZGUiLCJtb2JpbGVTbGlkZXMiLCJoaWRkZW5TbGlkZXMiLCJzbGlkZXMiLCJmb3JFYWNoIiwiaXRlbSIsImdldEF0dHJpYnV0ZSIsInB1c2giLCJzbGlkZXJOb2RlIiwic3dpcGVyIiwiZWZmZWN0IiwiZ3JhYkN1cnNvciIsImF1dG9wbGF5Iiwic3BlZWQiLCJhdXRvSGVpZ2h0Iiwic3BhY2VCZXR3ZWVuIiwiY292ZXJmbG93RWZmZWN0Iiwicm90YXRlIiwiZGVwdGgiLCJzbGlkZVNoYWRvd3MiLCJwYWdpbmF0aW9uIiwiZWwiLCJwYXJlbnRFbGVtZW50IiwiY2xpY2thYmxlIiwib24iLCIkc2xpZGVyTm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJHNsaWRlciIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJicmVha3BvaW50cyIsImVuYWJsZWQiLCJmcmVlTW9kZSIsInNjcm9sbGJhciIsImRyYWdnYWJsZSIsImhpZGUiLCJkcmFnU2l6ZSIsInNuYXBPblJlbGVhc2UiLCIkc2xpZGVyTm9kZSIsImxvb3BBZGRpdGlvbmFsU2xpZGVzIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsIndhdGNoT3ZlcmZsb3ciLCJkeW5hbWljQnVsbGV0cyIsIiRnYWxsZXJpZXMiLCIkZ2FsbGVyeSIsImdhbGxlcnkiLCJuYXZpZ2F0aW9uIiwicHJldkVsIiwibmV4dEVsIiwic2xpZGVzUGVyR3JvdXAiLCJsYXp5IiwibG9hZFByZXZOZXh0Iiwic3RhZ2VDbGFzcyIsInRvUGFnaW5hdGlvbkl0ZW0iLCJjbGFzc05hbWUiLCJjb250ZW50IiwiaSIsImFsbG93VG91Y2hNb3ZlIiwicmVuZGVyQnVsbGV0IiwiaW5kZXgiLCJzdGFnZU5vZGUiLCJjb250ZW50U3RhZ2UiLCJvdXRlckhUTUwiLCJ0YWJzIiwidGFiIiwiYlRhYnMiLCJtb2RhbFdpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaW5kSW5kZXgiLCIkb2JqIiwiJGl0ZW0iLCJlYWNoIiwiaW5pdFRhYnNJdGVtIiwiJHRhYnMiLCIkdGFic0l0ZW1BY3RpdmUiLCJkYXRhVGFicyIsImF0dHIiLCIkaXRlbXNUYWJzIiwiZmluZCIsIiRzZWN0aW9uc1RhYnMiLCIkIiwiJHVubG9hZGVkU3JjIiwicmVtb3ZlQXR0ciIsImxlbmd0aCIsInNyYyIsImRhdGEiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsIiR0YWJzSXRlbXMiLCJyZW1vdmVDbGFzcyIsImVxIiwiYWRkQ2xhc3MiLCIkdGFic0l0ZW0iLCJjbG9zZXN0Iiwibm90IiwiY29uc29sZSIsImxvZyIsInNldFZhbHVlIiwiYWN0aXZlQnRuIiwidG9nZ2xlcnNQYXJlbnRFbCIsInNob3BWYWx1ZVRvZ2dsZUVsIiwidGV4dENvbnRlbnQiLCJzaG9wVmFsdWVXcmFwRWwiLCJ0YXJnZXQiLCJ0YXJnZXRFbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhhbWJ1cmdlckNsYXNzTmFtZSIsImJ1cmdlckJsb2NrQ2xhc3NOYW1lIiwiYnVyZ2VySW5uZXJDbGFzc05hbWUiLCIkYm9keSIsIiRoZWFkZXIiLCIkaGFtYnVyZ2VyIiwiJGJ1cmdlckJsb2NrIiwiJGJ1cmdlcklubmVyIiwib2Zmc2V0UmlnaHQiLCJvZmZzZXRXaWR0aCIsInRvcCIsIm9mZnNldEhlaWdodCIsImlzQWN0aXZlIiwiY29udGFpbnMiLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsImRvY3VtZW50RWxlbWVudCIsInBhZGRpbmdSaWdodCIsInNob3dIZWFkZXIiLCIkZWwiLCJodG1sRWwiLCJvZmZzZXRUb3BFbCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsInBhZ2VZT2Zmc2V0Iiwic2hvdyIsImZpeGVkIiwicGFkZGluZ1RvcCIsImFkZCIsImZpeGVkSGVhZGVyIiwibWVudURyb3AiLCJsaW5rYnRuIiwiaXRlbU1lbnVMaXN0IiwicHJldmVudERlZmF1bHQiLCJldiIsImluc2VydEFkamFjZW50SFRNTCIsImJ0bkRvd24iLCJ2VXBUcmlnZ2VyVGltZXIiLCJ2VXAiLCJnZXRTY3JvbGVkV2luZG93Iiwic3RhcnRBbWltYXRpb25TY3JvbGwiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYnRuIiwic2Nyb2xlZCIsImlubmVySGVpZ2h0IiwiYmFja1RvVG9wIiwiaW50ZXJ2YWwiLCJ0byIsInNjcm9sbEJ5Iiwic2Nyb2xsVG9wIiwic2VsZWN0b3IiLCJvcHRpb25zIiwiJGxldmVsXzEiLCJsYXN0RWxlbWVudENoaWxkIiwiJHN1Yk1lbnVMaXN0IiwiJHN1Yk1lbnVMaW5rIiwiYWN0aXZhdGVkIiwiZGVmYXVsT3B0aW9ucyIsImFycm93IiwiT2JqZWN0IiwiYXNzaWduIiwiJGFjdGl2ZVVsIiwidHJhbnNsYXRlIiwibWV0aG9kIiwic3VibWVudSIsImxpbmsiLCJfYWRkQnRuQmFjayIsIl9hZGRCdG5OZXh0IiwiJGxpbmsiLCJjbGlja0hhbmRsZXIiLCJfc2V0SGVpZ2hNZW51IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIiRzdWJNZW51IiwiJGFyciIsInRyYW5zZm9ybSIsIiRuZXN0ZWRNZW51IiwidmlzaWJpbGl0eSIsInNjcm9sbFRvVmlzaWJsZSIsIiR1cHBlck1lbnUiLCJlbGVtIiwiaHJlZiIsIl9nZXRQb3NBYnNXaW5kb3ciLCJfZ2V0UG9zIiwib2Zmc2V0VG9wIiwiX2VsZW1UYWJzIiwiX2V2ZW50VGFic1Nob3ciLCJfc2hvd1RhYiIsInRhYnNMaW5rVGFyZ2V0IiwidGFic1BhbmVUYXJnZXQiLCJ0YWJzTGlua0FjdGl2ZSIsInRhYnNQYW5lU2hvdyIsIl9zd2l0Y2hUYWJUbyIsInRhYnNMaW5rSW5kZXgiLCJ0YWJzTGlua3MiLCJkZXRhaWwiLCJzaG93VGFiIiwic3dpdGNoVGFiVG8iLCJib2R5IiwibW9kYWxFbHMiLCJidG5PcGVuQ2xhc3NOYW1lIiwiYnRuQ2xvc2VDbGFzc05hbWUiLCJkYXRhc2V0IiwidHlwZU1vZGFsIiwiJG1vZGFsIiwic2Nyb2xsQmFyV2lkdGgiLCJzY3JvbGxBbmltYXRpb25JZCIsImN1cnJlbnRTY3JvbGwiLCJzY3JvbGxzIiwibmV3U2Nyb2xsWSIsImRlbHRhU2Nyb2xsIiwic2Nyb2xsVG8iLCJNYXRoIiwiYWJzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RvcEFuaW1hdGlvblNjcm9sbCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwidW5kZWZpbmVkIiwiJHRodW1ic1NsaWRlciIsIiRmdWxsU2xpZGVyIiwiZ2FsbGVyeVRodW1icyIsInN0aWNreSIsImtleWJvYXJkIiwib25seUluVmlld3BvcnQiLCJtb3VzZXdoZWVsIiwiZ2FsbGVyeUZ1bGwiLCJ0aHVtYnMiLCJvcHRpb24iLCIkc2xpZGVyV3JhcCIsInNldGluZ3MiLCJ3YXRjaFNsaWRlc1Zpc2liaWxpdHkiLCJzd2lwZXJBdXRvcGxheSIsImRlbGF5IiwicGF1c2VPbk1vdXNlRW50ZXIiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFB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LEVBQUE7SUFDQXJNLFVBQUEsRUFBQWdNLE9BQUEsQ0FBQWhNLFVBQUEsR0FBQTtNQUNBRSxNQUFBLEVBQUE2TCxXQUFBLENBQUE3UCxhQUFBLENBQUEsbUJBQUEsQ0FBQTtNQUNBK0QsTUFBQSxFQUFBOEwsV0FBQSxDQUFBN1AsYUFBQSxDQUFBLG1CQUFBO0lBQ0EsQ0FBQSxHQUFBLEVBQUE7SUFDQW9DLFVBQUEsRUFBQTBOLE9BQUEsQ0FBQTFOLFVBQUEsR0FBQTtNQUNBQyxFQUFBLEVBQUF3TixXQUFBLENBQUE3UCxhQUFBLENBQUEsb0JBQUEsQ0FBQTtNQUNBdUMsU0FBQSxFQUFBO0lBQ0EsQ0FBQSxHQUFBO0VBQ0EsQ0FBQSxDQUFBO0VBRUEsT0FBQSxJQUFBSyxNQUFBLENBQUFELE9BQUEsRUFBQW1OLE9BQUEsQ0FBQTdFLE9BQUEsQ0FBQTtBQUNBOztBQUVBOztBQUVBLFNBQUEvTCxNQUFBLENBQUE4TCxRQUFBLEVBQUE7RUFDQSxPQUFBakwsUUFBQSxDQUFBQyxhQUFBLENBQUFnTCxRQUFBLENBQUEsR0FBQSxJQUFBLEdBQUEsS0FBQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuLy8gYnJlYWsgcG9pbnRzIHNpdGVcclxuY29uc3QgYnJlYWtQb2ludCA9IHtcclxuXHRkZXNjdG9wOiAxOTIwLFxyXG5cdGRlc2N0b3BNaWQ6IDE0NTAsXHJcblx0ZGVzY3RvcE1pbjogMTIzMCxcclxuXHR0YWJsZTogMTAyNCxcclxuXHRtb2JpbGU6IDc2OCxcclxuXHR0ZWw6IDQ4MCxcclxufVxyXG5cclxuXHJcbi8qKioqKiBJTklUSUFMSVpJTkcgUExVR0lOUyAqKioqKiovXHJcblxyXG4vLyDRgdC60YDQvtC7INGB0YLRgNCw0L3QuNGG0Ysg0Log0L3Rg9C20L3QvtC5INC60L7QvtGA0LTQuNC90LDRgtC1XHJcbmxldCBzY3JvbGxpbmdXaW5kb3cgPSBzY3JvbGxXaW5kb3coKTtcclxuXHJcbi8vQU9TINC/0LvQsNCz0LjQvVxyXG5pZiAoaXNFbGVtKCdbZGF0YS1hb3NdJykpIHtcclxuXHRBT1MuaW5pdCh7XHJcblx0XHQvL2Rpc2FibGU6IFwibW9iaWxlXCIsXHJcblx0XHRkdXJhdGlvbjogMzAwMCxcclxuXHRcdG9mZnNldDogMCxcclxuXHRcdG9uY2U6IHRydWUsXHJcblx0XHRhbmNob3JQbGFjZW1lbnQ6ICdib3R0b20tYm90dG9tJ1xyXG5cdH0pO1xyXG59XHJcblxyXG4vL3NsaW5reSBoZWFkZXIgbWVudVxyXG5pZiAoaXNFbGVtKCdoZWFkZXIgLmJyby1tZW51JykpIHtcclxuXHRjb25zdCAkbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciAuYnJvLW1lbnUnKTtcclxuXHRjb25zdCBtZW51ID0gYnJvTWVudSgkbWVudSk7XHJcblx0Y29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke2JyZWFrUG9pbnQuZGVzY3RvcE1pbn1weClgKTtcclxuXHJcblx0dG9nZ2xlTWVudSgpO1xyXG5cclxuXHRtZWRpYVF1ZXJ5LmFkZExpc3RlbmVyKHRvZ2dsZU1lbnUpXHJcblxyXG5cdGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XHJcblx0XHRpZiAobWVkaWFRdWVyeS5tYXRjaGVzKSB7XHJcblx0XHRcdG1lbnUuaW5pdCgpO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG1lbnUuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8gXHRtYWluIHNsaWRlciBcclxuKGZ1bmN0aW9uICgpIHtcclxuXHRpZiAoaXNFbGVtKCcubWFpbi1zbGlkZXInKSkge1xyXG5cdFx0Y29uc3Qgc2xpZGVyTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNsaWRlcicpO1xyXG5cclxuXHRcdGNvbnN0IHN3aXBlciA9IHNsaWRlcihzbGlkZXJOb2RlLCB7XHJcblx0XHRcdGVmZmVjdDogXCJjb3ZlcmZsb3dcIixcclxuXHRcdFx0Z3JhYkN1cnNvcjogdHJ1ZSxcclxuXHRcdFx0YXV0b3BsYXk6IHRydWUsXHJcblx0XHRcdHNwZWVkOiAxMjAwLFxyXG5cdFx0XHRhdXRvSGVpZ2h0OiBmYWxzZSxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAzMDAsXHJcblx0XHRcdGNvdmVyZmxvd0VmZmVjdDoge1xyXG5cdFx0XHRcdHJvdGF0ZTogODAsXHJcblx0XHRcdFx0ZGVwdGg6IDEwMCxcclxuXHRcdFx0XHRzbGlkZVNoYWRvd3M6IDEsXHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogc2xpZGVyTm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItcGFnaW5hdGlvbicpLFxyXG5cdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IGN1cnJlbnRSZXNvbHV0aW9uU3RhdGUgPSBcIlwiLFxyXG5cdFx0XHRtb2JpbGVTbGlkZXMgPSBhZGRpdGlvbk1vYmlsZVNsaWRlcyhzbGlkZXJOb2RlLnN3aXBlcik7XHJcblxyXG4gICAgc2xpZGVDaGFuZ2VyKHNsaWRlck5vZGUuc3dpcGVyKTtcclxuXHRcdHNsaWRlck5vZGUuc3dpcGVyLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoc2xpZGVyKSB7XHJcblx0XHRcdHNsaWRlQ2hhbmdlcihzbGlkZXIpO1xyXG5cdFx0fSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2xpZGVDaGFuZ2VyKHNsaWRlcikge1xyXG4gICAgICBpZiAoY3VycmVudFJlc29sdXRpb25TdGF0ZSAhPT0gXCJkZXNrdG9wXCIgJiYgd2luZG93LmlubmVyV2lkdGggPj0gODQwKSB7XHJcblx0XHRcdFx0YWRkaXRpb25Nb2JpbGVTbGlkZXMoc2xpZGVyKS5tYXAoKGUpID0+IHtcclxuXHRcdFx0XHRcdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0XHRcdGUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcblx0XHRcdFx0XHRlLnJlbW92ZSgpO1xyXG5cdFx0XHRcdH0pO1xyXG4gICAgICAgIGN1cnJlbnRSZXNvbHV0aW9uU3RhdGUgPSBcImRlc2t0b3BcIjtcclxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmVzb2x1dGlvblN0YXRlICE9PSBcIm1vYmlsZVwiICYmIHdpbmRvdy5pbm5lcldpZHRoIDwgODQwKSB7XHJcblx0XHRcdFx0c2xpZGVyLmFkZFNsaWRlKDEsIG1vYmlsZVNsaWRlcyk7XHJcbiAgICAgICAgYWRkaXRpb25Nb2JpbGVTbGlkZXMoc2xpZGVyKS5tYXAoKGUpID0+IHtcclxuXHRcdFx0XHRcdGUuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG5cdFx0XHRcdFx0ZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcblx0XHRcdFx0fSk7XHJcbiAgICAgICAgY3VycmVudFJlc29sdXRpb25TdGF0ZSA9IFwibW9iaWxlXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblx0XHRmdW5jdGlvbiBhZGRpdGlvbk1vYmlsZVNsaWRlcyhzbGlkZXIpIHtcclxuXHRcdFx0bGV0IGhpZGRlblNsaWRlcyA9IFtdO1xyXG5cdFx0XHRzbGlkZXIuc2xpZGVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRpZiAoaXRlbS5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcclxuXHRcdFx0XHRcdGhpZGRlblNsaWRlcy5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybiBoaWRkZW5TbGlkZXM7XHJcblx0XHR9XHJcblx0fVxyXG59KCkpO1xyXG5cclxuLy8gYWR2YW50YWdlcyBzbGlkZXJcclxuaWYgKGlzRWxlbSgnLmFkdmFudGFnZXMtc2xpZGVyJykpIHtcclxuXHRjb25zdCAkc2xpZGVyTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWR2YW50YWdlcy1zbGlkZXInKTtcclxuXHJcblx0Zm9yIChjb25zdCAkc2xpZGVyIG9mICRzbGlkZXJOb2Rlcykge1xyXG5cdFx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcigkc2xpZGVyLCB7XHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMjAwLFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDMyMDoge1xyXG5cdFx0XHRcdFx0Z3JhYkN1cnNvcjogdHJ1ZSxcclxuXHRcdFx0XHRcdGVuYWJsZWQ6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbYnJlYWtQb2ludC5tb2JpbGUgKyAxXToge1xyXG5cdFx0XHRcdFx0ZW5hYmxlZDogZmFsc2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJHNsaWRlci5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItcGFnaW5hdGlvbicpLFxyXG5cdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG4vLyBcdG1haW4gc2xpZGVyIFxyXG5pZiAoaXNFbGVtKCcuc2xpZGVyLXNjcm9sbCcpKSB7XHJcblx0Y29uc3Qgc2xpZGVyTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItc2Nyb2xsJyk7XHJcblxyXG5cdGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoc2xpZGVyTm9kZSwge1xyXG5cdFx0ZnJlZU1vZGU6IHRydWUsXHJcblx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRzY3JvbGxiYXI6IHtcclxuXHRcdFx0ZWw6IFwiLnN3aXBlci1zY3JvbGxiYXJcIixcclxuXHRcdFx0ZHJhZ2dhYmxlOiB0cnVlLFxyXG5cdFx0XHRoaWRlOiBmYWxzZSxcclxuXHRcdFx0ZHJhZ1NpemU6IDM1LFxyXG5cdFx0XHRzbmFwT25SZWxlYXNlOiBmYWxzZSxcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8gaGVhZGluZyBzbGlkZXJcdFxyXG5pZiAoaXNFbGVtKCcuaGlkaW5nLXNsaWRlcicpKSB7XHJcblx0Y29uc3QgJHNsaWRlck5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZGluZy1zbGlkZXInKTtcclxuXHJcblx0Zm9yIChsZXQgJHNsaWRlck5vZGUgb2YgJHNsaWRlck5vZGVzKSB7XHJcblx0XHRjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCRzbGlkZXJOb2RlLCB7XHJcblx0XHRcdGZyZWVNb2RlOiB0cnVlLFxyXG5cdFx0XHRsb29wQWRkaXRpb25hbFNsaWRlczogMSxcclxuXHRcdFx0d2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcclxuXHRcdFx0d2F0Y2hPdmVyZmxvdzogdHJ1ZSxcclxuXHRcdFx0ZHluYW1pY0J1bGxldHM6IHRydWUsXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0MzAwOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDIzLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0W2JyZWFrUG9pbnQudGFibGUgKyAxXToge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0XHRcdGdyYWJDdXJzb3I6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbYnJlYWtQb2ludC5kZXNjdG9wTWluICsgMV06IHtcclxuXHRcdFx0XHRcdGdyYWJDdXJzb3I6IGZhbHNlLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuLy8gZ2FsbGVyeSBzbGlkZXJcdFxyXG5pZiAoaXNFbGVtKCcuZ2FsbGVyeScpKSB7XHJcblx0Y29uc3QgJGdhbGxlcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5Jyk7XHJcblxyXG5cdGZvciAoY29uc3QgJGdhbGxlcnkgb2YgJGdhbGxlcmllcykge1xyXG5cdFx0Z2FsbGVyeSgkZ2FsbGVyeSk7XHJcblx0fVxyXG59XHJcblxyXG4vLyBpbWcgc2xpZGVyXHRcclxuaWYgKGlzRWxlbSgnLmltZy1zbGlkZXInKSkge1xyXG5cdGNvbnN0ICRzbGlkZXJOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWctc2xpZGVyJyk7XHJcblxyXG5cdGZvciAobGV0ICRzbGlkZXJOb2RlIG9mICRzbGlkZXJOb2Rlcykge1xyXG5cdFx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcigkc2xpZGVyTm9kZSwge1xyXG5cdFx0XHRsb29wQWRkaXRpb25hbFNsaWRlczogMSxcclxuXHRcdFx0d2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcclxuXHRcdFx0d2F0Y2hPdmVyZmxvdzogdHJ1ZSxcclxuXHRcdFx0ZHluYW1pY0J1bGxldHM6IHRydWUsXHJcblx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRwcmV2RWw6ICRzbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnItLXByZXYnKSxcclxuXHRcdFx0XHRuZXh0RWw6ICRzbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnItLW5leHQnKSxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuLy8gc2hvcCBwbGFjZSBzbGlkZXJcdFxyXG5pZiAoaXNFbGVtKCcuc2hvcC1wbGFjZS1zbGlkZXInKSkge1xyXG5cdGNvbnN0ICRzbGlkZXJOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaG9wLXBsYWNlLXNsaWRlcicpO1xyXG5cdFxyXG5cdGZvciAobGV0ICRzbGlkZXJOb2RlIG9mICRzbGlkZXJOb2Rlcykge1xyXG5cdFx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcigkc2xpZGVyTm9kZSwge1xyXG5cdFx0XHRncmFiQ3Vyc29yOiB0cnVlLFxyXG5cdFx0XHRsb29wQWRkaXRpb25hbFNsaWRlczogMSxcclxuXHRcdFx0d2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMixcclxuXHRcdFx0c2xpZGVzUGVyR3JvdXA6IDIsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMTAsXHJcblx0XHRcdHdhdGNoT3ZlcmZsb3c6IHRydWUsXHJcblx0XHRcdGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG5cdFx0XHRsYXp5OiB7XHJcblx0XHRcdFx0bG9hZFByZXZOZXh0OiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdFticmVha1BvaW50Lm1vYmlsZSArIDFdOiB7XHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDI0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0cHJldkVsOiAkc2xpZGVyTm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1wcmV2JyksXHJcblx0XHRcdFx0bmV4dEVsOiAkc2xpZGVyTm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1uZXh0JyksXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIHNsaWRlciBzdGFnZXNcclxuaWYgKGlzRWxlbSgnLnN0YWdlcy1zbGlkZXInKSkge1xyXG5cdGNvbnN0ICRzbGlkZXJOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YWdlcy1zbGlkZXInKTtcclxuXHRjb25zdCBzdGFnZUNsYXNzID0gJ2pzLXNsaWRlLXN0YWdlJztcclxuXHJcblx0Y29uc3QgdG9QYWdpbmF0aW9uSXRlbSA9IChjbGFzc05hbWUsIGNvbnRlbnQsIGkpID0+IHtcclxuXHRcdGNvbnRlbnQgPSBjb250ZW50ID8gY29udGVudCA6ICcnO1xyXG5cclxuXHRcdHJldHVybiBgXHJcblx0XHRcdDxkaXYgY2xhc3M9XCIke2NsYXNzTmFtZX1cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3RhZ2UtbnVtXCI+JHtpfTwvZGl2PlxyXG5cdFx0XHRcdCR7Y29udGVudH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRgXHJcblx0fVxyXG5cclxuXHRsZXQgc3dpcGVyID0gbmV3IFN3aXBlcigkc2xpZGVyTm9kZSwge1xyXG5cclxuXHRcdGF1dG9IZWlnaHQ6IHRydWUsXHJcblx0XHRzcGFjZUJldHdlZW46IDUwLFxyXG5cdFx0ZWZmZWN0OiBcImZhZGVcIixcclxuXHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdDMwMDoge1xyXG5cdFx0XHRcdGFsbG93VG91Y2hNb3ZlOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRbYnJlYWtQb2ludC50YWJsZSArIDFdOiB7XHJcblx0XHRcdFx0ZWZmZWN0OiBcImZhZGVcIixcclxuXHRcdFx0XHRhbGxvd1RvdWNoTW92ZTogZmFsc2UsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGVsOiAkc2xpZGVyTm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItcGFnaW5hdGlvbicpLFxyXG5cdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcclxuXHRcdFx0XHRjb25zdCBzdGFnZU5vZGUgPSB0aGlzLnNsaWRlc1tpbmRleF0ucXVlcnlTZWxlY3RvcihgLiR7c3RhZ2VDbGFzc31gKTtcclxuXHRcdFx0XHRjb25zdCBjb250ZW50U3RhZ2UgPSBzdGFnZU5vZGUgPyBzdGFnZU5vZGUub3V0ZXJIVE1MIDogbnVsbDtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGBcclxuXHRcdFx0XHRcdCR7dG9QYWdpbmF0aW9uSXRlbShjbGFzc05hbWUsIGNvbnRlbnRTdGFnZSwgaW5kZXggKyAxKX1cclxuXHRcdFx0XHRgO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9KTtcclxufVxyXG5cclxuLy8gYlRhYnNcclxuaWYgKGlzRWxlbSgnLmItdGFicycpKSB7XHJcblx0Y29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iLXRhYnMnKTtcclxuXHJcblx0Zm9yIChjb25zdCB0YWIgb2YgdGFicykge1xyXG5cclxuXHRcdGJUYWJzKHRhYik7XHJcblx0fVxyXG59XHJcblxyXG4vLyB3aW5kb3cgbW9kYWxcclxuaWYgKGlzRWxlbSgnLnYtbW9kYWwnKSkge1xyXG5cdG1vZGFsV2luZG93KCk7XHJcbn1cclxuXHJcbi8qKioqKiogQ1VTVE9NIFBMVUdJTiAqKioqKiovXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiggKXtcclxuXHJcbn0pO1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cdGZ1bmN0aW9uIGZpbmRJbmRleCgkb2JqLCAkaXRlbSkge1xyXG5cdFx0bGV0IGluZGV4ID0gbnVsbDtcclxuXHJcblx0XHQkb2JqLmVhY2goKGksIGl0ZW0pID0+IHtcclxuXHRcdFx0aWYgKGl0ZW0gPT09ICRpdGVtWzBdKSB7XHJcblx0XHRcdFx0aW5kZXggPSBpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGluZGV4O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaW5pdFRhYnNJdGVtKCR0YWJzLCAkdGFic0l0ZW1BY3RpdmUpIHtcclxuXHRcdGNvbnN0IGRhdGFUYWJzID0gJHRhYnMuYXR0cignZGF0YS10YWJzJyk7XHJcblxyXG5cdFx0aWYgKGRhdGFUYWJzKSB7XHJcblx0XHRcdGNvbnN0ICRpdGVtc1RhYnMgPSAkdGFicy5maW5kKCdbZGF0YS10YWJdJyk7XHJcblxyXG5cdFx0XHQkaXRlbXNUYWJzLmVhY2goZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRcdGNvbnN0ICRzZWN0aW9uc1RhYnMgPSAkKGBbZGF0YS10YWJzPVwiJHtkYXRhVGFic30sICR7aX1cIl1gKTtcclxuXHRcdFx0XHRjb25zdCBpbmRleCA9IGZpbmRJbmRleCgkaXRlbXNUYWJzLCAkdGFic0l0ZW1BY3RpdmUpO1xyXG5cdFx0XHRcdGNvbnN0ICR1bmxvYWRlZFNyYyA9ICRzZWN0aW9uc1RhYnMuZmluZCgnW2RhdGEtc3JjXScpOyBcclxuXHJcblx0XHRcdFx0aWYgKGluZGV4ICE9PSBpKSB7XHJcblx0XHRcdFx0XHQkc2VjdGlvbnNUYWJzLmF0dHIoJ2hpZGRlbicsIHRydWUpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkKGBbZGF0YS10YWJzPVwiJHtkYXRhVGFic30sICR7aW5kZXh9XCJdYCkucmVtb3ZlQXR0cignaGlkZGVuJyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCR1bmxvYWRlZFNyYy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0JHVubG9hZGVkU3JjLmVhY2goKGksIGl0ZW0pID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBzcmMgPSAkKGl0ZW0pLmRhdGEoJ3NyYycpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdCQoaXRlbSkuYXR0cignc3JjJywgc3JjKS5yZW1vdmVBdHRyKCdkYXRhLXNyYycpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFxyXG5cdFx0JHRhYnNbMF0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ0YWJzOmNoYW5nZVwiLCB7YnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZX0pKTtcclxuXHR9XHJcblx0XHJcblx0JCgnLnRhYnMnKS5lYWNoKGZ1bmN0aW9uKGkpIHtcclxuXHRcdGNvbnN0ICR0YWJzID0gJCh0aGlzKTtcclxuXHRcdGxldCAkdGFic0l0ZW1BY3RpdmUgPSAkdGFicy5maW5kKCdbZGF0YS10YWJdLmFjdGl2ZScpO1xyXG5cdFxyXG5cdFx0aWYgKCR0YWJzSXRlbUFjdGl2ZS5sZW5ndGggIT09IDEpIHtcclxuXHRcdFx0Y29uc3QgJHRhYnNJdGVtcyA9ICR0YWJzLmZpbmQoJ1tkYXRhLXRhYl0nKTtcclxuXHRcclxuXHRcdFx0JHRhYnNJdGVtcy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdCR0YWJzSXRlbXMuZXEoMCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkdGFic0l0ZW1BY3RpdmUgPSAkdGFic0l0ZW1zLmVxKDApO1xyXG5cdFx0fVxyXG5cdFxyXG5cdFx0aW5pdFRhYnNJdGVtKCR0YWJzLCAkdGFic0l0ZW1BY3RpdmUpO1xyXG5cclxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ0YWJzOmluaXRcIiwge2J1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWV9KSk7XHJcblx0fSk7XHJcblx0XHJcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXRhYl0nLCBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnN0ICR0YWJzSXRlbSA9ICQodGhpcyk7XHJcblx0XHRjb25zdCAkdGFicyA9ICR0YWJzSXRlbS5jbG9zZXN0KCdbZGF0YS10YWJzXScpO1xyXG5cdFx0Y29uc3QgJHRhYnNJdGVtcyA9ICR0YWJzLmZpbmQoJ1tkYXRhLXRhYl0nKTtcclxuXHRcclxuXHRcdCR0YWJzSXRlbXMubm90KCR0YWJzSXRlbSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JHRhYnNJdGVtLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdGNvbnNvbGUubG9nKCR0YWJzWzBdKTtcclxuXHRcdGluaXRUYWJzSXRlbSgkdGFicywgJHRhYnNJdGVtKTtcclxuXHR9KTtcclxufSgpKTtcclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcC1wbGFjZV9fdG9nZ2xlcnMnKSkge1xyXG5cdGNvbnN0IHNob3BWYWx1ZVdyYXBFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLXBsYWNlX192YWx1ZS13cmFwJyk7XHJcblx0Y29uc3Qgc2hvcFZhbHVlVG9nZ2xlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcC1wbGFjZV9fdmFsdWUnKTtcclxuXHRjb25zdCB0b2dnbGVyc1BhcmVudEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AtcGxhY2VfX3RvZ2dsZXJzJyk7XHJcblxyXG5cdHNldFZhbHVlKCk7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RhYnM6Y2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRzZXRWYWx1ZSgpO1xyXG5cdH0pXHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5zaG9wLXBsYWNlX192YWx1ZS13cmFwJykpIHtcclxuXHRcdFx0Y29uc3QgdGFyZ2V0RWwgPSBlLnRhcmdldC5jbG9zZXN0KCcuc2hvcC1wbGFjZV9fdmFsdWUtd3JhcCcpO1xyXG5cdFx0XHRzaG9wVmFsdWVXcmFwRWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0XHR9IGVsc2UgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcuc2hvcC1wbGFjZV9fYm94ZXMtc2lkZScpIFxyXG5cdFx0XHR8fCBlLnRhcmdldC5jbG9zZXN0KCcuc2hvcC1wbGFjZV9fdG9nZ2xlcnMgYnV0dG9uJykgICkge1xyXG5cdFx0XHRcdHNob3BWYWx1ZVdyYXBFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gc2V0VmFsdWUoKSB7XHJcblx0XHRjb25zdCBhY3RpdmVCdG4gPSB0b2dnbGVyc1BhcmVudEVsLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5hY3RpdmUnKTtcclxuXHRcdHNob3BWYWx1ZVRvZ2dsZUVsLnRleHRDb250ZW50ID0gYWN0aXZlQnRuLnRleHRDb250ZW50O1xyXG5cdH1cclxufVxyXG5cclxuLy9IYW1idXJnZXIg0L7RgtC60YDRi9GC0LjRjyDQvNC+0LHQuNC70YzQvdC+0LPQviDQvNC10L3RjlxyXG5pZiAoaXNFbGVtKCcuaGVhZGVyX19oYW1idXJnZXInKSkge1xyXG5cclxuXHRjb25zdCBoYW1idXJnZXJDbGFzc05hbWUgPSAnLmhlYWRlcl9faGFtYnVyZ2VyJztcclxuXHRjb25zdCBidXJnZXJCbG9ja0NsYXNzTmFtZSA9ICcuaGVhZGVyX19idXJnZXInO1xyXG5cdGNvbnN0IGJ1cmdlcklubmVyQ2xhc3NOYW1lID0gJy5oZWFkZXJfX2J1cmdlci1pbm5lcic7XHJcblx0Y29uc3QgJGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblx0Y29uc3QgJGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG5cdGNvbnN0ICRoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhhbWJ1cmdlckNsYXNzTmFtZSk7XHJcblx0Y29uc3QgJGJ1cmdlckJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXJnZXJCbG9ja0NsYXNzTmFtZSk7XHJcblx0Y29uc3QgJGJ1cmdlcklubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidXJnZXJJbm5lckNsYXNzTmFtZSk7XHJcblx0Y29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke2JyZWFrUG9pbnQuZGVzY3RvcE1pbn1weClgKTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoaGFtYnVyZ2VyQ2xhc3NOYW1lKSkge1xyXG5cdFx0XHRjb25zdCBvZmZzZXRSaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gJGJvZHkub2Zmc2V0V2lkdGg7XHJcblx0XHRcdCRoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0XHRcdCRidXJnZXJCbG9jay5zdHlsZS50b3AgPSAkaGVhZGVyLm9mZnNldEhlaWdodCArICdweCc7XHJcblxyXG5cdFx0XHRsZXQgaXNBY3RpdmUgPSAkaGFtYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XHJcblx0XHRcdCRidXJnZXJCbG9jay5jbGFzc0xpc3RbaXNBY3RpdmUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnb3BlbicpO1xyXG5cdFx0XHQkYnVyZ2VySW5uZXIuc3R5bGUubWF4SGVpZ2h0ID0gKGlzQWN0aXZlKSA/IGBjYWxjKDEwMHZoIC0gJHskaGVhZGVyLm9mZnNldEhlaWdodH1weClgIDogJyc7XHJcblx0XHRcdCRib2R5LnN0eWxlLm92ZXJmbG93ID0gKGlzQWN0aXZlKSA/ICdoaWRkZW4nIDogJyc7XHJcblx0XHR9IGVsc2UgaWYgKCRidXJnZXJCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSAmJiAhJGJ1cmdlcklubmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG5cdFx0XHQkaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkYnVyZ2VyQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cdFx0XHQkYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRtZWRpYVF1ZXJ5LmFkZExpc3RlbmVyKGZ1bmN0aW9uIChlKSB7XHJcblx0XHRpZiAoIWUubWF0Y2hlcyAmJiAkYnVyZ2VyQmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcclxuXHRcdFx0JGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0JGJ1cmdlckJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0JGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8vZml4ZWQgaGVhZGVyXHJcbmlmIChpc0VsZW0oJ2hlYWRlcicpKSB7XHJcblx0bGV0IGZpeGVkSGVhZGVyID0gc2hvd0hlYWRlcignaGVhZGVyJyk7XHJcblxyXG5cdGZ1bmN0aW9uIHNob3dIZWFkZXIoZWwpIHtcclxuXHRcdGNvbnN0ICRlbCA9ICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpIDogZWxcclxuXHJcblx0XHRjb25zdCBodG1sRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblx0XHRsZXQgb2Zmc2V0VG9wRWwgPSAkZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBvZmZzZXRUb3BFbCArIDQwKSB7XHJcblx0XHRcdFx0c2hvdygpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IG9mZnNldFRvcEVsIC8gMikge1xyXG5cdFx0XHRcdGZpeGVkKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sIHt9KVxyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdG9mZnNldFRvcEVsID0gJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuXHRcdH0pXHJcblxyXG5cdFx0ZnVuY3Rpb24gc2hvdygpIHtcclxuXHRcdFx0aWYgKCRlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpeGVkJykpIHJldHVybjtcclxuXHJcblx0XHRcdGh0bWxFbC5zdHlsZS5wYWRkaW5nVG9wID0gJGVsLm9mZnNldEhlaWdodCArIFwicHhcIjtcclxuXHRcdFx0JGVsLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZml4ZWQoKSB7XHJcblx0XHRcdGlmICghJGVsLmNsYXNzTGlzdC5jb250YWlucygnZml4ZWQnKSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0JGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcblx0XHRcdGh0bWxFbC5zdHlsZS5wYWRkaW5nVG9wID0gJyc7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c2hvdyxcclxuXHRcdFx0Zml4ZWQsXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyDQv9C+0LQg0LzQtdC90Y4g0YEg0LPQsNC80LHRg9GA0LPQtdGA0L7QvCDQstC90YPRgtGA0Lgg0L7RgdC90L7QstC90L7Qs9C+INC80LXQvdGOXHJcbmlmIChpc0VsZW0oJy5tZW51X19pdGVtLS1kcm9wJykpIHtcclxuXHRjb25zdCBtZW51RHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19pdGVtLS1kcm9wJyk7XHJcblx0Y29uc3QgdG9nZ2xlID0gbWVudURyb3AucXVlcnlTZWxlY3RvcignLm1lbnVfX2l0ZW0tdG9nZ2xlJyk7XHJcblx0Y29uc3QgbGlua2J0biA9IG1lbnVEcm9wLnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19pdGVtLXRvZ2dsZSB+IC5tZW51X19saW5rJyk7XHJcblx0Y29uc3QgaXRlbU1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnVfX2l0ZW06bm90KC5tZW51X19pdGVtLS1kcm9wKScpO1xyXG5cclxuXHJcblx0dG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0dG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdFx0bWVudURyb3AuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0fSk7XHJcblxyXG5cdGxpbmtidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdFx0bWVudURyb3AuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0fSk7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2KSB7XHJcblx0XHRpZiAoIWV2LnRhcmdldC5jbG9zZXN0KCcubWVudV9faXRlbS0tZHJvcCcpKSB7XHJcblx0XHRcdGlmIChtZW51RHJvcC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0dG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdG1lbnVEcm9wLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuLy8gdi11cCDQutC90L7Qv9C60LAg0LLQstC10YDRhVxyXG4oZnVuY3Rpb24gKCkge1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwidi11cFwiPjwvZGl2PlxyXG5cdGApO1xyXG5cclxuXHRjb25zdCBidG5Eb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnYtdXAnKTtcclxuXHRsZXQgdlVwVHJpZ2dlclRpbWVyID0gMDtcclxuXHJcblx0dlVwKGJ0bkRvd24sIGdldFNjcm9sZWRXaW5kb3cpO1xyXG5cclxuXHRidG5Eb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0Ly9iYWNrVG9Ub3AoLTQ1LCAwKTtcclxuXHRcdHNjcm9sbGluZ1dpbmRvdy5zdGFydEFtaW1hdGlvblNjcm9sbCgxKTtcclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGNsZWFyVGltZW91dCh2VXBUcmlnZ2VyVGltZXIpO1xyXG5cdFx0dlVwVHJpZ2dlclRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHZVcChidG5Eb3duLCBnZXRTY3JvbGVkV2luZG93KTtcclxuXHRcdH0sIDIwMClcclxuXHR9KTtcclxuXHJcblx0Ly/Qv9GA0L7Qu9C40YHRgtGL0LLQsNC40L3QtSDQvtC60L3QsCDQstCy0LXRgNGFINC/0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDXHJcblx0ZnVuY3Rpb24gdlVwKGJ0biwgc2Nyb2xlZCkge1xyXG5cdFx0aWYgKHNjcm9sZWQoKSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSkge1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHR9IGVsc2UgaWYgKHNjcm9sZWQoKSA8ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSB8fCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvL9C/0YDQvtC60YDRg9GC0LrQsCDQvtC60L3QsCDQstCy0LXRgNGFINCy0L3QuNC3XHJcblx0ZnVuY3Rpb24gYmFja1RvVG9wKGludGVydmFsLCB0bykge1xyXG5cdFx0aWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8PSB0bykgcmV0dXJuO1xyXG5cclxuXHRcdHdpbmRvdy5zY3JvbGxCeSgwLCBpbnRlcnZhbCk7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0YmFja1RvVG9wKGludGVydmFsLCB0bylcclxuXHRcdH0sIDApO1xyXG5cdH1cclxuXHJcblx0Ly/QvdCwINGB0LrQvtC70YzQutC+INC/0YDQvtC60YDRg9GH0LXQvdC+INC+0LrQvdC+XHJcblx0ZnVuY3Rpb24gZ2V0U2Nyb2xlZFdpbmRvdygpIHtcclxuXHRcdHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHR9XHJcbn0oKSk7XHJcblxyXG4vKioqKiogRlVOQ1RJT04gUExVR0lOICoqKioqKi9cclxuXHJcbi8vc2xpbmt5IG1lbnVcclxuZnVuY3Rpb24gYnJvTWVudShzZWxlY3Rvciwgb3B0aW9ucykge1xyXG5cdGNvbnN0ICRtZW51ID0gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBzZWxlY3RvcjtcclxuXHRjb25zdCAkbGV2ZWxfMSA9ICRtZW51Lmxhc3RFbGVtZW50Q2hpbGQ7XHJcblx0Y29uc3QgJHN1Yk1lbnVMaXN0ID0gJG1lbnUucXVlcnlTZWxlY3RvckFsbCgnbGkgPiB1bCcpO1xyXG5cdGNvbnN0ICRzdWJNZW51TGluayA9ICRtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpID4gYScpO1xyXG5cdGxldCBhY3RpdmF0ZWQ7XHJcblxyXG5cdGxldCBkZWZhdWxPcHRpb25zID0ge1xyXG5cdFx0YXJyb3c6IGBcclxuXHRcdFx0PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG5cdFx0XHQ8cGF0aCBkPVwiTTEyLjIxOSAyLjI4MUwxMC43OCAzLjcyIDE4LjA2MiAxMUgydjJoMTYuMDYzbC03LjI4MiA3LjI4MSAxLjQzOCAxLjQzOCA5LTkgLjY4Ny0uNzE5LS42ODctLjcxOXpcIiAvPlxyXG5cdFx0XHQ8L3N2Zz5cclxuXHRcdGBcclxuXHR9XHJcblxyXG5cdE9iamVjdC5hc3NpZ24oZGVmYXVsT3B0aW9ucywgb3B0aW9ucyk7XHJcblxyXG5cdGxldCAkYWN0aXZlVWw7XHJcblx0bGV0IHRyYW5zbGF0ZSA9IDA7XHJcblxyXG5cdGNvbnN0IG1ldGhvZCA9IHtcclxuXHRcdGluaXQoKSB7XHJcblx0XHRcdGlmIChhY3RpdmF0ZWQpIHJldHVybjtcclxuXHJcblx0XHRcdCRtZW51LmNsYXNzTGlzdC5hZGQoJ2Jyby1tZW51Jyk7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBzdWJtZW51IG9mICRzdWJNZW51TGlzdCkge1xyXG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBzdWJtZW51LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignbGkgPiBhJyk7XHJcblx0XHRcdFx0bGluay5jbGFzc0xpc3QuYWRkKCdicm8tbWVudV9fbmV4dCcpO1xyXG5cdFx0XHRcdHN1Ym1lbnUuY2xhc3NMaXN0LmFkZCgnYnJvLW1lbnVfX3N1Ym1lbnUnKTtcclxuXHJcblx0XHRcdFx0X2FkZEJ0bkJhY2soc3VibWVudSwgbGluayk7XHJcblx0XHRcdFx0X2FkZEJ0bk5leHQobGluayk7XHJcblxyXG5cdFx0XHRcdGFjdGl2YXRlZCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvciAoY29uc3QgJGxpbmsgb2YgJHN1Yk1lbnVMaW5rKSB7XHJcblx0XHRcdFx0JGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCRtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcclxuXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBfc2V0SGVpZ2hNZW51KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0ZGVzdHJveSgpIHtcclxuXHRcdFx0aWYgKCFhY3RpdmF0ZWQpIHJldHVybjtcclxuXHJcblx0XHRcdC8qINCj0LTQsNC70Y/QtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0YHQvtCx0YvRgtC40LkgKi9cclxuXHRcdFx0JG1lbnUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgX3NldEhlaWdoTWVudSk7XHJcblxyXG5cdFx0XHQvKiDQo9C00LDQu9GP0LXQvCDQutC70LDRgdGB0Ysg0L/Qu9Cw0LPQuNC90LAg0L3QsCDRgdGB0YvQu9C60LDRhSDQuCDQutC90L7Qv9C60YMg0L3QsNC30LDQtCAqL1xyXG5cdFx0XHRmb3IgKGNvbnN0ICRsaW5rIG9mICRtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rJykpIHtcclxuXHRcdFx0XHRpZiAoJGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdicm8tbWVudV9fYmFjaycpKSB7XHJcblx0XHRcdFx0XHQkbGluay5jbG9zZXN0KCdsaScpLnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQkbGluay5jbGFzc0xpc3QucmVtb3ZlKCdsaW5rJyk7XHJcblx0XHRcdFx0JGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYnJvLW1lbnVfX25leHQnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lyog0KPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgdGLINC/0LvQsNCz0LjQvdCwINC90LAg0LLQu9C+0LbQtdC90YvRhSDQvNC10L3RjtGI0LrQsNGFXHQqL1xyXG5cdFx0XHRmb3IgKGNvbnN0ICRzdWJNZW51IG9mICRtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoJy5icm8tbWVudV9fc3VibWVudScpKSB7XHJcblx0XHRcdFx0JHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYnJvLW1lbnVfX3N1Ym1lbnUnKVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKiDQo9C00LDQu9GP0LXQvCDRgdGC0YDQtdC70LrQuCDQsiDRgdGB0YvQu9C60LDRhSAqL1xyXG5cdFx0XHRmb3IgKGNvbnN0ICRhcnIgb2YgJG1lbnUucXVlcnlTZWxlY3RvckFsbCgnLmJyby1tZW51X19hcnInKSkge1xyXG5cdFx0XHRcdCRhcnIucmVtb3ZlKCk7XHJcblx0XHRcdH1cclxuXHJcblxyXG5cclxuXHRcdFx0JGFjdGl2ZVVsICYmICRhY3RpdmVVbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdCRtZW51LnN0eWxlLmhlaWdodCA9ICcnO1xyXG5cdFx0XHQkbGV2ZWxfMS5zdHlsZS50cmFuc2Zvcm0gPSBgYDtcclxuXHRcdFx0dHJhbnNsYXRlID0gMDtcclxuXHRcdFx0YWN0aXZhdGVkID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjbGlja0hhbmRsZXIoZSkge1xyXG5cdFx0Y29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcblxyXG5cdFx0aWYgKHRhcmdldC5jbG9zZXN0KCcuYnJvLW1lbnVfX25leHQnKSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRjb25zdCAkbmVzdGVkTWVudSA9IHRhcmdldC5jbG9zZXN0KCdsaScpLnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XHJcblxyXG5cdFx0XHRpZiAoJGFjdGl2ZVVsKSAkYWN0aXZlVWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHQkbmVzdGVkTWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0JG5lc3RlZE1lbnUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHRcdFx0dHJhbnNsYXRlIC09IDEwMDtcclxuXHJcblx0XHRcdCRsZXZlbF8xLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlfSUpYDtcclxuXHRcdFx0JGFjdGl2ZVVsID0gJG5lc3RlZE1lbnU7XHJcblxyXG5cdFx0XHRzY3JvbGxUb1Zpc2libGUoJGFjdGl2ZVVsKTtcclxuXHRcdFx0X3NldEhlaWdoTWVudSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5icm8tbWVudV9fYmFjaycpKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGNvbnN0ICR1cHBlck1lbnUgPSAkYWN0aXZlVWwucGFyZW50RWxlbWVudC5jbG9zZXN0KCd1bCcpO1xyXG5cdFx0XHQkdXBwZXJNZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0JGFjdGl2ZVVsLnN0eWxlLnZpc2liaWxpdHkgPSAnJztcclxuXHJcblx0XHRcdHRyYW5zbGF0ZSArPSAxMDA7XHJcblxyXG5cdFx0XHQkbGV2ZWxfMS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZX0lKWA7XHJcblx0XHRcdCRhY3RpdmVVbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0JGFjdGl2ZVVsID0gJHVwcGVyTWVudTtcclxuXHRcdFx0X3NldEhlaWdoTWVudSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2FkZEJ0bk5leHQoZWxlbSkge1xyXG5cdFx0ZWxlbS5jbGFzc0xpc3QuYWRkKCdsaW5rJylcclxuXHRcdGVsZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcblx0XHRcdCR7ZGVmYXVsT3B0aW9ucy5hcnJvd31cclxuXHRcdGApO1xyXG5cclxuXHRcdGVsZW0ubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuYWRkKCdicm8tbWVudV9fYXJyJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfYWRkQnRuQmFjayhlbGVtLCBsaW5rKSB7XHJcblx0XHRjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuXHJcblx0XHRlbGVtLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGBcclxuXHRcdFx0PGxpPlxyXG5cdFx0XHRcdDxhIGNsYXNzPVwiYnJvLW1lbnVfX2JhY2sgbGlua1wiICR7KGhyZWYpID8gYGhyZWY9JHtocmVmfWAgOiAnJ30+XHJcblx0XHRcdFx0XHQke2RlZmF1bE9wdGlvbnMuYXJyb3d9XHJcblx0XHRcdFx0XHQke2xpbmsudGV4dENvbnRlbnR9XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0YCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfc2V0SGVpZ2hNZW51KCkge1xyXG5cdFx0aWYgKCEkYWN0aXZlVWwpIHJldHVybjtcclxuXHJcblx0XHQkbWVudS5zdHlsZS5oZWlnaHQgPSAkYWN0aXZlVWwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2Nyb2xsVG9WaXNpYmxlKGVsKSB7XHJcblx0XHRpZiAoX2dldFBvc0Fic1dpbmRvdyhlbCkgPiB3aW5kb3cucGFnZVlPZmZzZXQpIHJldHVybjtcclxuXHJcblx0XHRiYWNrVG9Ub3AoLTEwLCBfZ2V0UG9zKGVsKSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfZ2V0UG9zQWJzV2luZG93KGVsZW0pIHtcclxuXHRcdGNvbnN0IG9mZnNldFRvcCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cclxuXHRcdHJldHVybiBvZmZzZXRUb3AgLSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfZ2V0UG9zKGVsKSB7XHJcblx0XHRyZXR1cm4gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gYmFja1RvVG9wKGludGVydmFsLCB0bykge1xyXG5cdFx0aWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8PSB0bykgcmV0dXJuO1xyXG5cclxuXHRcdHdpbmRvdy5zY3JvbGxCeSgwLCBpbnRlcnZhbCk7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0YmFja1RvVG9wKGludGVydmFsLCB0bylcclxuXHRcdH0sIDApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG1ldGhvZDtcclxufVxyXG5cclxuLy8gYlRhYnNcclxuZnVuY3Rpb24gYlRhYnModGFyZ2V0KSB7XHJcblx0bGV0IF9lbGVtVGFicyA9ICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldCksXHJcblx0XHRfZXZlbnRUYWJzU2hvdyxcclxuXHRcdF9zaG93VGFiID0gZnVuY3Rpb24gKHRhYnNMaW5rVGFyZ2V0KSB7XHJcblx0XHRcdHZhciB0YWJzUGFuZVRhcmdldCwgdGFic0xpbmtBY3RpdmUsIHRhYnNQYW5lU2hvdztcclxuXHRcdFx0dGFic1BhbmVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhYnNMaW5rVGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcclxuXHRcdFx0dGFic0xpbmtBY3RpdmUgPSB0YWJzTGlua1RhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iLXRhYnNfX2xpbmsuYWN0aXZlJyk7XHJcblx0XHRcdHRhYnNQYW5lU2hvdyA9IHRhYnNQYW5lVGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmItdGFic19fcGFuZS5hY3RpdmUnKTtcclxuXHRcdFx0Ly8g0LXRgdC70Lgg0YHQu9C10LTRg9GO0YnQsNGPINCy0LrQu9Cw0LTQutCwINGA0LDQstC90LAg0LDQutGC0LjQstC90L7QuSwg0YLQviDQt9Cw0LLQtdGA0YjQsNC10Lwg0YDQsNCx0L7RgtGDXHJcblx0XHRcdGlmICh0YWJzTGlua1RhcmdldCA9PT0gdGFic0xpbmtBY3RpdmUpIHJldHVybjtcclxuXHRcdFx0Ly8g0YPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgdGLINGDINGC0LXQutGD0YnQuNGFINCw0LrRgtC40LLQvdGL0YUg0Y3Qu9C10LzQtdC90YLQvtCyXHJcblx0XHRcdGlmICh0YWJzTGlua0FjdGl2ZSAhPT0gbnVsbCkgdGFic0xpbmtBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRpZiAodGFic1BhbmVTaG93ICE9PSBudWxsKSB0YWJzUGFuZVNob3cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdC8vINC00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGB0Ysg0Log0Y3Qu9C10LzQtdC90YLQsNC8ICjQsiDQt9Cw0LLQuNC80L7RgdGC0Lgg0L7RgiDQstGL0LHRgNCw0L3QvdC+0Lkg0LLQutC70LDQtNC60LgpXHJcblx0XHRcdHRhYnNMaW5rVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR0YWJzUGFuZVRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChfZXZlbnRUYWJzU2hvdyk7XHJcblx0XHR9LFxyXG5cdFx0X3N3aXRjaFRhYlRvID0gZnVuY3Rpb24gKHRhYnNMaW5rSW5kZXgpIHtcclxuXHRcdFx0dmFyIHRhYnNMaW5rcyA9IF9lbGVtVGFicy5xdWVyeVNlbGVjdG9yQWxsKCcuYi10YWJzX19saW5rJyk7XHJcblx0XHRcdGlmICh0YWJzTGlua3MubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdGlmICh0YWJzTGlua0luZGV4ID4gdGFic0xpbmtzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0dGFic0xpbmtJbmRleCA9IHRhYnNMaW5rcy5sZW5ndGg7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0YWJzTGlua0luZGV4IDwgMSkge1xyXG5cdFx0XHRcdFx0dGFic0xpbmtJbmRleCA9IDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdF9zaG93VGFiKHRhYnNMaW5rc1t0YWJzTGlua0luZGV4IC0gMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRfZXZlbnRUYWJzU2hvdyA9IG5ldyBDdXN0b21FdmVudCgndGFiLnNob3cnLCB7IGRldGFpbDogX2VsZW1UYWJzIH0pO1xyXG5cclxuXHRfZWxlbVRhYnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0dmFyIHRhYnNMaW5rVGFyZ2V0ID0gZS50YXJnZXQ7XHJcblx0XHQvLyDQt9Cw0LLQtdGA0YjQsNC10Lwg0LLRi9C/0L7Qu9C90LXQvdC40LUg0YTRg9C90LrRhtC40LgsINC10YHQu9C4INC60LvQuNC60L3Rg9C70Lgg0L3QtSDQv9C+INGB0YHRi9C70LrQtVxyXG5cdFx0aWYgKCF0YWJzTGlua1RhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ItdGFic19fbGluaycpKSByZXR1cm47XHJcblxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0X3Nob3dUYWIodGFic0xpbmtUYXJnZXQpO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0c2hvd1RhYjogZnVuY3Rpb24gKHRhcmdldCkge1xyXG5cdFx0XHRfc2hvd1RhYih0YXJnZXQpO1xyXG5cdFx0fSxcclxuXHRcdHN3aXRjaFRhYlRvOiBmdW5jdGlvbiAoaW5kZXgpIHtcclxuXHRcdFx0X3N3aXRjaFRhYlRvKGluZGV4KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59O1xyXG5cclxuLy9cdG1vZGFsIHdpbmRvd1xyXG5mdW5jdGlvbiBtb2RhbFdpbmRvdygpIHtcclxuXHRjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxyXG5cdFx0bW9kYWxFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudi1tb2RhbCcpLFxyXG5cdFx0YnRuT3BlbkNsYXNzTmFtZSA9IFwianMtb3Blbk1vZGFsXCIsXHJcblx0XHRidG5DbG9zZUNsYXNzTmFtZSA9ICdqcy1jbG9zZU1vZGFsJztcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoYC4ke2J0bk9wZW5DbGFzc05hbWV9YCkgJiYgZS50YXJnZXQuZGF0YXNldC50eXBlTW9kYWwpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRjb25zdCB0eXBlTW9kYWwgPSBlLnRhcmdldC5kYXRhc2V0Wyd0eXBlTW9kYWwnXTtcclxuXHJcblx0XHRcdGZvciAobGV0ICRtb2RhbCBvZiBtb2RhbEVscykge1xyXG5cclxuXHRcdFx0XHRpZiAoJG1vZGFsLmRhdGFzZXQgJiYgJG1vZGFsLmRhdGFzZXRbJ3R5cGVNb2RhbCddID09PSB0eXBlTW9kYWwpIHtcclxuXHRcdFx0XHRcdCRtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRjb25zdCBzY3JvbGxCYXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gYm9keS5vZmZzZXRXaWR0aDtcclxuXHRcdFx0XHRcdGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHRcdFx0XHRcdGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc2Nyb2xsQmFyV2lkdGggKyBcInB4XCI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndi1tb2RhbF9faW5uZXInKSB8fCBlLnRhcmdldC5jbG9zZXN0KGAuJHtidG5DbG9zZUNsYXNzTmFtZX1gKSkge1xyXG5cdFx0XHRlLnRhcmdldC5jbG9zZXN0KCcudi1tb2RhbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcblx0XHRcdGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIjtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8g0LDQvdC40LzQsNGG0LjRjyDRgdC60YDQvtC70LAg0L7QutC90LAg0LHRgNCw0YPQt9C10YDQsFxyXG5mdW5jdGlvbiBzY3JvbGxXaW5kb3coKSB7XHJcblx0bGV0IHNjcm9sbEFuaW1hdGlvbklkO1xyXG5cdGxldCBjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdGxldCBzY3JvbGxzID0gZmFsc2U7XHJcblxyXG5cdGZ1bmN0aW9uIHN0YXJ0QW1pbWF0aW9uU2Nyb2xsKG5ld1Njcm9sbFkpIHtcclxuXHRcdGlmICghc2Nyb2xscykge1xyXG5cdFx0XHRjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdFx0XHRzY3JvbGxzID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBkZWx0YVNjcm9sbCA9IChuZXdTY3JvbGxZIC0gY3VycmVudFNjcm9sbCk7XHJcblxyXG5cdFx0Y3VycmVudFNjcm9sbCArPSBkZWx0YVNjcm9sbCAqIDAuMTU7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgY3VycmVudFNjcm9sbCk7XHJcblxyXG5cdFx0aWYgKE1hdGguYWJzKGRlbHRhU2Nyb2xsKSA+IDUpIHtcclxuXHRcdFx0c2Nyb2xsQW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzdGFydEFtaW1hdGlvblNjcm9sbChuZXdTY3JvbGxZKTtcclxuXHRcdFx0fSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBuZXdTY3JvbGxZKTtcclxuXHRcdFx0c3RvcEFuaW1hdGlvblNjcm9sbCgpO1xyXG5cdFx0XHRzY3JvbGxzID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzdG9wQW5pbWF0aW9uU2Nyb2xsKCkge1xyXG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHNjcm9sbEFuaW1hdGlvbklkKTtcclxuXHRcdHNjcm9sbEFuaW1hdGlvbklkID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHN0YXJ0QW1pbWF0aW9uU2Nyb2xsLFxyXG5cdFx0c3RvcEFuaW1hdGlvblNjcm9sbCxcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhbGxlcnkoc2VsZWN0b3IpIHtcclxuXHRjb25zdCAkZ2FsbGVyeSA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogc2VsZWN0b3I7XHJcblxyXG5cdGNvbnN0ICR0aHVtYnNTbGlkZXIgPSAkZ2FsbGVyeS5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fdGh1bWJzJyksXHJcblx0XHQkZnVsbFNsaWRlciA9ICRnYWxsZXJ5LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X19zbGlkZXInKTtcclxuXHJcblxyXG5cdC8qIHRodW1icyAqL1xyXG5cdGxldCBnYWxsZXJ5VGh1bWJzID0gbmV3IFN3aXBlcigkdGh1bWJzU2xpZGVyLCB7XHJcblx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcblx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cdFx0ZnJlZU1vZGU6IHtcclxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0c3RpY2t5OiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdGtleWJvYXJkOiB7XHJcblx0XHRcdGVuYWJsZWQ6IHRydWUsXHJcblx0XHRcdG9ubHlJblZpZXdwb3J0OiBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdG1vdXNld2hlZWw6IHRydWUsXHJcblx0fSk7XHJcblxyXG5cdGxldCBnYWxsZXJ5RnVsbCA9IG5ldyBTd2lwZXIoJGZ1bGxTbGlkZXIsIHtcclxuXHRcdHNwYWNlQmV0d2VlbjogMTAsXHJcblx0XHRzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuXHRcdC8vIGF1dG9wbGF5OiB7XHJcblx0XHQvLyBcdGRlbGF5OiA1MDAwXHJcblx0XHQvLyB9LFxyXG5cdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRwcmV2RWw6ICRmdWxsU2xpZGVyLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnItLXByZXYnKSxcclxuXHRcdFx0bmV4dEVsOiAkZnVsbFNsaWRlci5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1uZXh0JyksXHJcblx0XHR9LFxyXG5cdFx0a2V5Ym9hcmQ6IHtcclxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0b25seUluVmlld3BvcnQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0dGh1bWJzOiB7XHJcblx0XHRcdHN3aXBlcjogZ2FsbGVyeVRodW1icyxcclxuXHRcdH0sXHJcblx0fSk7XHJcbn1cclxuXHJcbi8vc2xpZGVyIFxyXG5mdW5jdGlvbiBzbGlkZXIoc2VsZWN0b3IsIG9wdGlvbiA9IHt9KSB7XHJcblx0Y29uc3QgJHNsaWRlciA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogc2VsZWN0b3I7XHJcblx0Y29uc3QgJHNsaWRlcldyYXAgPSAkc2xpZGVyLmNsb3Nlc3QoJy5zbGlkZXItd3JhcCcpO1xyXG5cclxuXHRjb25zdCBzZXRpbmdzID0ge1xyXG5cdFx0bmF2aWdhdGlvbjogJHNsaWRlcldyYXAucXVlcnlTZWxlY3RvcignLnNsaWRlci1uYXYnKSxcclxuXHRcdHBhZ2luYXRpb246ICRzbGlkZXJXcmFwLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItcGFnaW5hdGlvbicpLFxyXG5cdFx0b3B0aW9uczoge1xyXG5cdFx0XHR3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG5cdFx0XHQuLi5vcHRpb24sXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRPYmplY3QuYXNzaWduKHNldGluZ3Mub3B0aW9ucywge1xyXG5cdFx0d2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxyXG5cdFx0d2F0Y2hPdmVyZmxvdzogdHJ1ZSxcclxuXHRcdGF1dG9wbGF5OiAoKyRzbGlkZXIuZGF0YXNldC5zd2lwZXJBdXRvcGxheSA+IDApID8ge1xyXG5cdFx0XHRkZWxheTogKyRzbGlkZXIuZGF0YXNldC5zd2lwZXJBdXRvcGxheSxcclxuXHRcdFx0cGF1c2VPbk1vdXNlRW50ZXI6IHRydWUsXHJcblx0XHRcdGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuXHRcdH0gOiAnJyxcclxuXHRcdG5hdmlnYXRpb246IHNldGluZ3MubmF2aWdhdGlvbiA/IHtcclxuXHRcdFx0bmV4dEVsOiAkc2xpZGVyV3JhcC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWFyci0tbmV4dCcpLFxyXG5cdFx0XHRwcmV2RWw6ICRzbGlkZXJXcmFwLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1wcmV2JyksXHJcblx0XHR9IDogJycsXHJcblx0XHRwYWdpbmF0aW9uOiBzZXRpbmdzLnBhZ2luYXRpb24gPyB7XHJcblx0XHRcdGVsOiAkc2xpZGVyV3JhcC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXBhZ2luYXRpb24nKSxcclxuXHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0fSA6ICcnLFxyXG5cdH0pXHJcblxyXG5cdHJldHVybiBuZXcgU3dpcGVyKCRzbGlkZXIsIHNldGluZ3Mub3B0aW9ucyk7XHJcbn1cclxuXHJcbi8qKioqKiogVVRJTFMgKioqKioqL1xyXG5cclxuZnVuY3Rpb24gaXNFbGVtKHNlbGVjdG9yKSB7XHJcblx0cmV0dXJuIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkgPyB0cnVlIDogZmFsc2U7XHJcbn0iXX0=
