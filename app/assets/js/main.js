"use strict"; // break points site

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var scrollingWindow = scrollWindow(); //AOS плагин

if (isElem('[data-aos]')) {
  AOS.init({
    //disable: "mobile",
    duration: 3000,
    offset: 0,
    once: true,
    anchorPlacement: 'bottom-bottom'
  });
} //slinky header menu


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
} // 	main slider 


(function () {
  if (isElem('.main-slider')) {
    var sliderNode = document.querySelector('.main-slider');
    var swiper = slider(sliderNode, {
      effect: "coverflow",
      grabCursor: true,
      speed: 1200,
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
  }
})(); // advantages slider


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
} // 	main slider 


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
} // heading slider	


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
} // gallery slider	


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
} // img slider	


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
} // shop place slider	


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
} // slider stages


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
} // bTabs


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
} // window modal


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
} //Hamburger открытия мобильного меню


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
} //fixed header


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
} // под меню с гамбургером внутри основного меню


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
} // v-up кнопка вверх


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
  }); //пролистываине окна вверх при клике на кнопку

  function vUp(btn, scroled) {
    if (scroled() > window.innerHeight / 2) {
      btn.classList.add('active');
    } else if (scroled() < window.innerHeight / 2 || btn.classList.contains('active')) {
      btn.classList.remove('active');
    }
  } //прокрутка окна вверх вниз


  function backToTop(interval, to) {
    if (window.pageYOffset <= to) return;
    window.scrollBy(0, interval);
    setTimeout(function () {
      backToTop(interval, to);
    }, 0);
  } //на сколько прокручено окно


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
} // bTabs


function bTabs(target) {
  var _elemTabs = typeof target === 'string' ? document.querySelector(target) : target,
      _eventTabsShow,
      _showTab = function _showTab(tabsLinkTarget) {
    var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
    tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
    tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.b-tabs__link.active');
    tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.b-tabs__pane.active'); // если следующая вкладка равна активной, то завершаем работу

    if (tabsLinkTarget === tabsLinkActive) return; // удаляем классы у текущих активных элементов

    if (tabsLinkActive !== null) tabsLinkActive.classList.remove('active');
    if (tabsPaneShow !== null) tabsPaneShow.classList.remove('active'); // добавляем классы к элементам (в завимости от выбранной вкладки)

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
    var tabsLinkTarget = e.target; // завершаем выполнение функции, если кликнули не по ссылке

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

; //	modal window

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
} // анимация скрола окна браузера


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
} //slider 


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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImJyZWFrUG9pbnQiLCJkZXNjdG9wIiwiZGVzY3RvcE1pZCIsImRlc2N0b3BNaW4iLCJ0YWJsZSIsIm1vYmlsZSIsInRlbCIsInNjcm9sbGluZ1dpbmRvdyIsInNjcm9sbFdpbmRvdyIsImlzRWxlbSIsIkFPUyIsImluaXQiLCJkdXJhdGlvbiIsIm9mZnNldCIsIm9uY2UiLCJhbmNob3JQbGFjZW1lbnQiLCJ0b2dnbGVNZW51IiwibWVkaWFRdWVyeSIsIm1hdGNoZXMiLCJtZW51IiwiZGVzdHJveSIsIiRtZW51IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnJvTWVudSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInNsaWRlck5vZGUiLCJzd2lwZXIiLCJzbGlkZXIiLCJlZmZlY3QiLCJncmFiQ3Vyc29yIiwic3BlZWQiLCJzcGFjZUJldHdlZW4iLCJjb3ZlcmZsb3dFZmZlY3QiLCJyb3RhdGUiLCJkZXB0aCIsInNsaWRlU2hhZG93cyIsInBhZ2luYXRpb24iLCJlbCIsInBhcmVudEVsZW1lbnQiLCJjbGlja2FibGUiLCIkc2xpZGVyTm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJHNsaWRlciIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJicmVha3BvaW50cyIsImVuYWJsZWQiLCJmcmVlTW9kZSIsInNjcm9sbGJhciIsImRyYWdnYWJsZSIsImhpZGUiLCJkcmFnU2l6ZSIsInNuYXBPblJlbGVhc2UiLCIkc2xpZGVyTm9kZSIsImxvb3BBZGRpdGlvbmFsU2xpZGVzIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsIndhdGNoT3ZlcmZsb3ciLCJkeW5hbWljQnVsbGV0cyIsIiRnYWxsZXJpZXMiLCIkZ2FsbGVyeSIsImdhbGxlcnkiLCJuYXZpZ2F0aW9uIiwicHJldkVsIiwibmV4dEVsIiwic2xpZGVzUGVyR3JvdXAiLCJsYXp5IiwibG9hZFByZXZOZXh0Iiwic3RhZ2VDbGFzcyIsInRvUGFnaW5hdGlvbkl0ZW0iLCJjbGFzc05hbWUiLCJjb250ZW50IiwiaSIsImF1dG9IZWlnaHQiLCJhbGxvd1RvdWNoTW92ZSIsInJlbmRlckJ1bGxldCIsImluZGV4Iiwic3RhZ2VOb2RlIiwic2xpZGVzIiwiY29udGVudFN0YWdlIiwib3V0ZXJIVE1MIiwidGFicyIsInRhYiIsImJUYWJzIiwibW9kYWxXaW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZmluZEluZGV4IiwiJG9iaiIsIiRpdGVtIiwiZWFjaCIsIml0ZW0iLCJpbml0VGFic0l0ZW0iLCIkdGFicyIsIiR0YWJzSXRlbUFjdGl2ZSIsImRhdGFUYWJzIiwiYXR0ciIsIiRpdGVtc1RhYnMiLCJmaW5kIiwiJHNlY3Rpb25zVGFicyIsIiQiLCIkdW5sb2FkZWRTcmMiLCJyZW1vdmVBdHRyIiwibGVuZ3RoIiwic3JjIiwiZGF0YSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiJHRhYnNJdGVtcyIsInJlbW92ZUNsYXNzIiwiZXEiLCJhZGRDbGFzcyIsIm9uIiwiJHRhYnNJdGVtIiwiY2xvc2VzdCIsIm5vdCIsImNvbnNvbGUiLCJsb2ciLCJzZXRWYWx1ZSIsImFjdGl2ZUJ0biIsInRvZ2dsZXJzUGFyZW50RWwiLCJzaG9wVmFsdWVUb2dnbGVFbCIsInRleHRDb250ZW50Iiwic2hvcFZhbHVlV3JhcEVsIiwiZSIsInRhcmdldCIsInRhcmdldEVsIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlIiwiaGFtYnVyZ2VyQ2xhc3NOYW1lIiwiYnVyZ2VyQmxvY2tDbGFzc05hbWUiLCJidXJnZXJJbm5lckNsYXNzTmFtZSIsIiRib2R5IiwiJGhlYWRlciIsIiRoYW1idXJnZXIiLCIkYnVyZ2VyQmxvY2siLCIkYnVyZ2VySW5uZXIiLCJvZmZzZXRSaWdodCIsImlubmVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsInN0eWxlIiwidG9wIiwib2Zmc2V0SGVpZ2h0IiwiaXNBY3RpdmUiLCJjb250YWlucyIsIm1heEhlaWdodCIsIm92ZXJmbG93IiwiZG9jdW1lbnRFbGVtZW50IiwicGFkZGluZ1JpZ2h0Iiwic2hvd0hlYWRlciIsIiRlbCIsImh0bWxFbCIsIm9mZnNldFRvcEVsIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwicGFnZVlPZmZzZXQiLCJzaG93IiwiZml4ZWQiLCJwYWRkaW5nVG9wIiwiYWRkIiwiZml4ZWRIZWFkZXIiLCJtZW51RHJvcCIsImxpbmtidG4iLCJpdGVtTWVudUxpc3QiLCJwcmV2ZW50RGVmYXVsdCIsImV2IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiYnRuRG93biIsInZVcFRyaWdnZXJUaW1lciIsInZVcCIsImdldFNjcm9sZWRXaW5kb3ciLCJzdGFydEFtaW1hdGlvblNjcm9sbCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJidG4iLCJzY3JvbGVkIiwiaW5uZXJIZWlnaHQiLCJiYWNrVG9Ub3AiLCJpbnRlcnZhbCIsInRvIiwic2Nyb2xsQnkiLCJzY3JvbGxUb3AiLCJzZWxlY3RvciIsIm9wdGlvbnMiLCIkbGV2ZWxfMSIsImxhc3RFbGVtZW50Q2hpbGQiLCIkc3ViTWVudUxpc3QiLCIkc3ViTWVudUxpbmsiLCJhY3RpdmF0ZWQiLCJkZWZhdWxPcHRpb25zIiwiYXJyb3ciLCJPYmplY3QiLCJhc3NpZ24iLCIkYWN0aXZlVWwiLCJ0cmFuc2xhdGUiLCJtZXRob2QiLCJzdWJtZW51IiwibGluayIsIl9hZGRCdG5CYWNrIiwiX2FkZEJ0bk5leHQiLCIkbGluayIsImNsaWNrSGFuZGxlciIsIl9zZXRIZWlnaE1lbnUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiJHN1Yk1lbnUiLCIkYXJyIiwidHJhbnNmb3JtIiwiJG5lc3RlZE1lbnUiLCJ2aXNpYmlsaXR5Iiwic2Nyb2xsVG9WaXNpYmxlIiwiJHVwcGVyTWVudSIsImVsZW0iLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwiX2dldFBvc0Fic1dpbmRvdyIsIl9nZXRQb3MiLCJvZmZzZXRUb3AiLCJfZWxlbVRhYnMiLCJfZXZlbnRUYWJzU2hvdyIsIl9zaG93VGFiIiwidGFic0xpbmtUYXJnZXQiLCJ0YWJzUGFuZVRhcmdldCIsInRhYnNMaW5rQWN0aXZlIiwidGFic1BhbmVTaG93IiwiX3N3aXRjaFRhYlRvIiwidGFic0xpbmtJbmRleCIsInRhYnNMaW5rcyIsImRldGFpbCIsInNob3dUYWIiLCJzd2l0Y2hUYWJUbyIsImJvZHkiLCJtb2RhbEVscyIsImJ0bk9wZW5DbGFzc05hbWUiLCJidG5DbG9zZUNsYXNzTmFtZSIsImRhdGFzZXQiLCJ0eXBlTW9kYWwiLCIkbW9kYWwiLCJzY3JvbGxCYXJXaWR0aCIsInNjcm9sbEFuaW1hdGlvbklkIiwiY3VycmVudFNjcm9sbCIsInNjcm9sbHMiLCJuZXdTY3JvbGxZIiwiZGVsdGFTY3JvbGwiLCJzY3JvbGxUbyIsIk1hdGgiLCJhYnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdG9wQW5pbWF0aW9uU2Nyb2xsIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ1bmRlZmluZWQiLCIkdGh1bWJzU2xpZGVyIiwiJGZ1bGxTbGlkZXIiLCJnYWxsZXJ5VGh1bWJzIiwic3RpY2t5Iiwia2V5Ym9hcmQiLCJvbmx5SW5WaWV3cG9ydCIsIm1vdXNld2hlZWwiLCJnYWxsZXJ5RnVsbCIsInRodW1icyIsIm9wdGlvbiIsIiRzbGlkZXJXcmFwIiwic2V0aW5ncyIsIndhdGNoU2xpZGVzVmlzaWJpbGl0eSIsImF1dG9wbGF5Iiwic3dpcGVyQXV0b3BsYXkiLCJkZWxheSIsInBhdXNlT25Nb3VzZUVudGVyIiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBLGEsQ0FDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFBQSxVQUFBLEdBQUE7QUFDQUMsRUFBQUEsT0FBQSxFQUFBLElBREE7QUFFQUMsRUFBQUEsVUFBQSxFQUFBLElBRkE7QUFHQUMsRUFBQUEsVUFBQSxFQUFBLElBSEE7QUFJQUMsRUFBQUEsS0FBQSxFQUFBLElBSkE7QUFLQUMsRUFBQUEsTUFBQSxFQUFBLEdBTEE7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QUFBO0FBQ0FFLE1BQUFBLE1BQUEsRUFBQXNNLFdBQUEsQ0FBQWpQLGFBQUEsQ0FBQSxtQkFBQSxDQURBO0FBRUEwQyxNQUFBQSxNQUFBLEVBQUF1TSxXQUFBLENBQUFqUCxhQUFBLENBQUEsbUJBQUE7QUFGQSxLQUFBLEdBR0EsRUFYQTtBQVlBZ0IsSUFBQUEsVUFBQSxFQUFBa08sT0FBQSxDQUFBbE8sVUFBQSxHQUFBO0FBQ0FDLE1BQUFBLEVBQUEsRUFBQWdPLFdBQUEsQ0FBQWpQLGFBQUEsQ0FBQSxvQkFBQSxDQURBO0FBRUFtQixNQUFBQSxTQUFBLEVBQUE7QUFGQSxLQUFBLEdBR0E7QUFmQSxHQUFBO0FBa0JBLFNBQUEsSUFBQUksTUFBQSxDQUFBRCxPQUFBLEVBQUE0TixPQUFBLENBQUE5RSxPQUFBLENBQUE7QUFDQTtBQUVBOzs7QUFFQSxTQUFBbEwsTUFBQSxDQUFBaUwsUUFBQSxFQUFBO0FBQ0EsU0FBQXBLLFFBQUEsQ0FBQUMsYUFBQSxDQUFBbUssUUFBQSxDQUFBLEdBQUEsSUFBQSxHQUFBLEtBQUE7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vIGJyZWFrIHBvaW50cyBzaXRlXHJcbmNvbnN0IGJyZWFrUG9pbnQgPSB7XHJcblx0ZGVzY3RvcDogMTkyMCxcclxuXHRkZXNjdG9wTWlkOiAxNDUwLFxyXG5cdGRlc2N0b3BNaW46IDEyMzAsXHJcblx0dGFibGU6IDEwMjQsXHJcblx0bW9iaWxlOiA3NjgsXHJcblx0dGVsOiA0ODAsXHJcbn1cclxuXHJcblxyXG4vKioqKiogSU5JVElBTElaSU5HIFBMVUdJTlMgKioqKioqL1xyXG5cclxuLy8g0YHQutGA0L7QuyDRgdGC0YDQsNC90LjRhtGLINC6INC90YPQttC90L7QuSDQutC+0L7RgNC00LjQvdCw0YLQtVxyXG5sZXQgc2Nyb2xsaW5nV2luZG93ID0gc2Nyb2xsV2luZG93KCk7XHJcblxyXG4vL0FPUyDQv9C70LDQs9C40L1cclxuaWYgKGlzRWxlbSgnW2RhdGEtYW9zXScpKSB7XHJcblx0QU9TLmluaXQoe1xyXG5cdFx0Ly9kaXNhYmxlOiBcIm1vYmlsZVwiLFxyXG5cdFx0ZHVyYXRpb246IDMwMDAsXHJcblx0XHRvZmZzZXQ6IDAsXHJcblx0XHRvbmNlOiB0cnVlLFxyXG5cdFx0YW5jaG9yUGxhY2VtZW50OiAnYm90dG9tLWJvdHRvbSdcclxuXHR9KTtcclxufVxyXG5cclxuLy9zbGlua3kgaGVhZGVyIG1lbnVcclxuaWYgKGlzRWxlbSgnaGVhZGVyIC5icm8tbWVudScpKSB7XHJcblx0Y29uc3QgJG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgLmJyby1tZW51Jyk7XHJcblx0Y29uc3QgbWVudSA9IGJyb01lbnUoJG1lbnUpO1xyXG5cdGNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHticmVha1BvaW50LmRlc2N0b3BNaW59cHgpYCk7XHJcblxyXG5cdHRvZ2dsZU1lbnUoKTtcclxuXHJcblx0bWVkaWFRdWVyeS5hZGRMaXN0ZW5lcih0b2dnbGVNZW51KVxyXG5cclxuXHRmdW5jdGlvbiB0b2dnbGVNZW51KCkge1xyXG5cdFx0aWYgKG1lZGlhUXVlcnkubWF0Y2hlcykge1xyXG5cdFx0XHRtZW51LmluaXQoKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRtZW51LmRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIFx0bWFpbiBzbGlkZXIgXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0aWYgKGlzRWxlbSgnLm1haW4tc2xpZGVyJykpIHtcclxuXHRcdGNvbnN0IHNsaWRlck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zbGlkZXInKTtcclxuXHJcblx0XHRjb25zdCBzd2lwZXIgPSBzbGlkZXIoc2xpZGVyTm9kZSwge1xyXG5cdFx0XHRlZmZlY3Q6IFwiY292ZXJmbG93XCIsXHJcblx0XHRcdGdyYWJDdXJzb3I6IHRydWUsXHJcblx0XHRcdHNwZWVkOiAxMjAwLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDMwMCxcclxuXHRcdFx0Y292ZXJmbG93RWZmZWN0OiB7XHJcblx0XHRcdFx0cm90YXRlOiA4MCxcclxuXHRcdFx0XHRkZXB0aDogMTAwLFxyXG5cdFx0XHRcdHNsaWRlU2hhZG93czogMSxcclxuXHRcdFx0fSxcclxuXHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdGVsOiBzbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1wYWdpbmF0aW9uJyksXHJcblx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn0oKSk7XHJcblxyXG4vLyBhZHZhbnRhZ2VzIHNsaWRlclxyXG5pZiAoaXNFbGVtKCcuYWR2YW50YWdlcy1zbGlkZXInKSkge1xyXG5cdGNvbnN0ICRzbGlkZXJOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZHZhbnRhZ2VzLXNsaWRlcicpO1xyXG5cclxuXHRmb3IgKGNvbnN0ICRzbGlkZXIgb2YgJHNsaWRlck5vZGVzKSB7XHJcblx0XHRjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCRzbGlkZXIsIHtcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAyMDAsXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0MzIwOiB7XHJcblx0XHRcdFx0XHRncmFiQ3Vyc29yOiB0cnVlLFxyXG5cdFx0XHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFticmVha1BvaW50Lm1vYmlsZSArIDFdOiB7XHJcblx0XHRcdFx0XHRlbmFibGVkOiBmYWxzZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdGVsOiAkc2xpZGVyLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1wYWdpbmF0aW9uJyksXHJcblx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbi8vIFx0bWFpbiBzbGlkZXIgXHJcbmlmIChpc0VsZW0oJy5zbGlkZXItc2Nyb2xsJykpIHtcclxuXHRjb25zdCBzbGlkZXJOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1zY3JvbGwnKTtcclxuXHJcblx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihzbGlkZXJOb2RlLCB7XHJcblx0XHRmcmVlTW9kZTogdHJ1ZSxcclxuXHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdHNjcm9sbGJhcjoge1xyXG5cdFx0XHRlbDogXCIuc3dpcGVyLXNjcm9sbGJhclwiLFxyXG5cdFx0XHRkcmFnZ2FibGU6IHRydWUsXHJcblx0XHRcdGhpZGU6IGZhbHNlLFxyXG5cdFx0XHRkcmFnU2l6ZTogMzUsXHJcblx0XHRcdHNuYXBPblJlbGVhc2U6IGZhbHNlLFxyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG4vLyBoZWFkaW5nIHNsaWRlclx0XHJcbmlmIChpc0VsZW0oJy5oaWRpbmctc2xpZGVyJykpIHtcclxuXHRjb25zdCAkc2xpZGVyTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlkaW5nLXNsaWRlcicpO1xyXG5cclxuXHRmb3IgKGxldCAkc2xpZGVyTm9kZSBvZiAkc2xpZGVyTm9kZXMpIHtcclxuXHRcdGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJHNsaWRlck5vZGUsIHtcclxuXHRcdFx0ZnJlZU1vZGU6IHRydWUsXHJcblx0XHRcdGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAxLFxyXG5cdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cdFx0XHR3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG5cdFx0XHRkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQzMDA6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjMsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbYnJlYWtQb2ludC50YWJsZSArIDFdOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdFx0Z3JhYkN1cnNvcjogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFticmVha1BvaW50LmRlc2N0b3BNaW4gKyAxXToge1xyXG5cdFx0XHRcdFx0Z3JhYkN1cnNvcjogZmFsc2UsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG4vLyBnYWxsZXJ5IHNsaWRlclx0XHJcbmlmIChpc0VsZW0oJy5nYWxsZXJ5JykpIHtcclxuXHRjb25zdCAkZ2FsbGVyaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnknKTtcclxuXHJcblx0Zm9yIChjb25zdCAkZ2FsbGVyeSBvZiAkZ2FsbGVyaWVzKSB7XHJcblx0XHRnYWxsZXJ5KCRnYWxsZXJ5KTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIGltZyBzbGlkZXJcdFxyXG5pZiAoaXNFbGVtKCcuaW1nLXNsaWRlcicpKSB7XHJcblx0Y29uc3QgJHNsaWRlck5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltZy1zbGlkZXInKTtcclxuXHJcblx0Zm9yIChsZXQgJHNsaWRlck5vZGUgb2YgJHNsaWRlck5vZGVzKSB7XHJcblx0XHRjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCRzbGlkZXJOb2RlLCB7XHJcblx0XHRcdGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAxLFxyXG5cdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cdFx0XHR3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG5cdFx0XHRkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuXHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdHByZXZFbDogJHNsaWRlck5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWFyci0tcHJldicpLFxyXG5cdFx0XHRcdG5leHRFbDogJHNsaWRlck5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWFyci0tbmV4dCcpLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG4vLyBzaG9wIHBsYWNlIHNsaWRlclx0XHJcbmlmIChpc0VsZW0oJy5zaG9wLXBsYWNlLXNsaWRlcicpKSB7XHJcblx0Y29uc3QgJHNsaWRlck5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3AtcGxhY2Utc2xpZGVyJyk7XHJcblx0XHJcblx0Zm9yIChsZXQgJHNsaWRlck5vZGUgb2YgJHNsaWRlck5vZGVzKSB7XHJcblx0XHRjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCRzbGlkZXJOb2RlLCB7XHJcblx0XHRcdGdyYWJDdXJzb3I6IHRydWUsXHJcblx0XHRcdGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAxLFxyXG5cdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRzbGlkZXNQZXJHcm91cDogMixcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAxMCxcclxuXHRcdFx0d2F0Y2hPdmVyZmxvdzogdHJ1ZSxcclxuXHRcdFx0ZHluYW1pY0J1bGxldHM6IHRydWUsXHJcblx0XHRcdGxhenk6IHtcclxuXHRcdFx0XHRsb2FkUHJldk5leHQ6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0W2JyZWFrUG9pbnQubW9iaWxlICsgMV06IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRwcmV2RWw6ICRzbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnItLXByZXYnKSxcclxuXHRcdFx0XHRuZXh0RWw6ICRzbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnItLW5leHQnKSxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuLy8gc2xpZGVyIHN0YWdlc1xyXG5pZiAoaXNFbGVtKCcuc3RhZ2VzLXNsaWRlcicpKSB7XHJcblx0Y29uc3QgJHNsaWRlck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhZ2VzLXNsaWRlcicpO1xyXG5cdGNvbnN0IHN0YWdlQ2xhc3MgPSAnanMtc2xpZGUtc3RhZ2UnO1xyXG5cclxuXHRjb25zdCB0b1BhZ2luYXRpb25JdGVtID0gKGNsYXNzTmFtZSwgY29udGVudCwgaSkgPT4ge1xyXG5cdFx0Y29udGVudCA9IGNvbnRlbnQgPyBjb250ZW50IDogJyc7XHJcblxyXG5cdFx0cmV0dXJuIGBcclxuXHRcdFx0PGRpdiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdGFnZS1udW1cIj4ke2l9PC9kaXY+XHJcblx0XHRcdFx0JHtjb250ZW50fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdGBcclxuXHR9XHJcblxyXG5cdGxldCBzd2lwZXIgPSBuZXcgU3dpcGVyKCRzbGlkZXJOb2RlLCB7XHJcblxyXG5cdFx0YXV0b0hlaWdodDogdHJ1ZSxcclxuXHRcdHNwYWNlQmV0d2VlbjogNTAsXHJcblx0XHRlZmZlY3Q6IFwiZmFkZVwiLFxyXG5cdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0MzAwOiB7XHJcblx0XHRcdFx0YWxsb3dUb3VjaE1vdmU6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdFticmVha1BvaW50LnRhYmxlICsgMV06IHtcclxuXHRcdFx0XHRlZmZlY3Q6IFwiZmFkZVwiLFxyXG5cdFx0XHRcdGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0ZWw6ICRzbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1wYWdpbmF0aW9uJyksXHJcblx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0cmVuZGVyQnVsbGV0OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xyXG5cdFx0XHRcdGNvbnN0IHN0YWdlTm9kZSA9IHRoaXMuc2xpZGVzW2luZGV4XS5xdWVyeVNlbGVjdG9yKGAuJHtzdGFnZUNsYXNzfWApO1xyXG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRTdGFnZSA9IHN0YWdlTm9kZSA/IHN0YWdlTm9kZS5vdXRlckhUTUwgOiBudWxsO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gYFxyXG5cdFx0XHRcdFx0JHt0b1BhZ2luYXRpb25JdGVtKGNsYXNzTmFtZSwgY29udGVudFN0YWdlLCBpbmRleCArIDEpfVxyXG5cdFx0XHRcdGA7XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0pO1xyXG59XHJcblxyXG4vLyBiVGFic1xyXG5pZiAoaXNFbGVtKCcuYi10YWJzJykpIHtcclxuXHRjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmItdGFicycpO1xyXG5cclxuXHRmb3IgKGNvbnN0IHRhYiBvZiB0YWJzKSB7XHJcblxyXG5cdFx0YlRhYnModGFiKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIHdpbmRvdyBtb2RhbFxyXG5pZiAoaXNFbGVtKCcudi1tb2RhbCcpKSB7XHJcblx0bW9kYWxXaW5kb3coKTtcclxufVxyXG5cclxuLyoqKioqKiBDVVNUT00gUExVR0lOICoqKioqKi9cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCApe1xyXG5cclxufSk7XHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcblx0ZnVuY3Rpb24gZmluZEluZGV4KCRvYmosICRpdGVtKSB7XHJcblx0XHRsZXQgaW5kZXggPSBudWxsO1xyXG5cclxuXHRcdCRvYmouZWFjaCgoaSwgaXRlbSkgPT4ge1xyXG5cdFx0XHRpZiAoaXRlbSA9PT0gJGl0ZW1bMF0pIHtcclxuXHRcdFx0XHRpbmRleCA9IGk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gaW5kZXg7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBpbml0VGFic0l0ZW0oJHRhYnMsICR0YWJzSXRlbUFjdGl2ZSkge1xyXG5cdFx0Y29uc3QgZGF0YVRhYnMgPSAkdGFicy5hdHRyKCdkYXRhLXRhYnMnKTtcclxuXHJcblx0XHRpZiAoZGF0YVRhYnMpIHtcclxuXHRcdFx0Y29uc3QgJGl0ZW1zVGFicyA9ICR0YWJzLmZpbmQoJ1tkYXRhLXRhYl0nKTtcclxuXHJcblx0XHRcdCRpdGVtc1RhYnMuZWFjaChmdW5jdGlvbihpKSB7XHJcblx0XHRcdFx0Y29uc3QgJHNlY3Rpb25zVGFicyA9ICQoYFtkYXRhLXRhYnM9XCIke2RhdGFUYWJzfSwgJHtpfVwiXWApO1xyXG5cdFx0XHRcdGNvbnN0IGluZGV4ID0gZmluZEluZGV4KCRpdGVtc1RhYnMsICR0YWJzSXRlbUFjdGl2ZSk7XHJcblx0XHRcdFx0Y29uc3QgJHVubG9hZGVkU3JjID0gJHNlY3Rpb25zVGFicy5maW5kKCdbZGF0YS1zcmNdJyk7IFxyXG5cclxuXHRcdFx0XHRpZiAoaW5kZXggIT09IGkpIHtcclxuXHRcdFx0XHRcdCRzZWN0aW9uc1RhYnMuYXR0cignaGlkZGVuJywgdHJ1ZSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCQoYFtkYXRhLXRhYnM9XCIke2RhdGFUYWJzfSwgJHtpbmRleH1cIl1gKS5yZW1vdmVBdHRyKCdoaWRkZW4nKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoJHVubG9hZGVkU3JjLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHQkdW5sb2FkZWRTcmMuZWFjaCgoaSwgaXRlbSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHNyYyA9ICQoaXRlbSkuZGF0YSgnc3JjJyk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0JChpdGVtKS5hdHRyKCdzcmMnLCBzcmMpLnJlbW92ZUF0dHIoJ2RhdGEtc3JjJyk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHJcblx0XHQkdGFic1swXS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInRhYnM6Y2hhbmdlXCIsIHtidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlfSkpO1xyXG5cdH1cclxuXHRcclxuXHQkKCcudGFicycpLmVhY2goZnVuY3Rpb24oaSkge1xyXG5cdFx0Y29uc3QgJHRhYnMgPSAkKHRoaXMpO1xyXG5cdFx0bGV0ICR0YWJzSXRlbUFjdGl2ZSA9ICR0YWJzLmZpbmQoJ1tkYXRhLXRhYl0uYWN0aXZlJyk7XHJcblx0XHJcblx0XHRpZiAoJHRhYnNJdGVtQWN0aXZlLmxlbmd0aCAhPT0gMSkge1xyXG5cdFx0XHRjb25zdCAkdGFic0l0ZW1zID0gJHRhYnMuZmluZCgnW2RhdGEtdGFiXScpO1xyXG5cdFxyXG5cdFx0XHQkdGFic0l0ZW1zLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0JHRhYnNJdGVtcy5lcSgwKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdCR0YWJzSXRlbUFjdGl2ZSA9ICR0YWJzSXRlbXMuZXEoMCk7XHJcblx0XHR9XHJcblx0XHJcblx0XHRpbml0VGFic0l0ZW0oJHRhYnMsICR0YWJzSXRlbUFjdGl2ZSk7XHJcblxyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInRhYnM6aW5pdFwiLCB7YnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZX0pKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtdGFiXScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0Y29uc3QgJHRhYnNJdGVtID0gJCh0aGlzKTtcclxuXHRcdGNvbnN0ICR0YWJzID0gJHRhYnNJdGVtLmNsb3Nlc3QoJ1tkYXRhLXRhYnNdJyk7XHJcblx0XHRjb25zdCAkdGFic0l0ZW1zID0gJHRhYnMuZmluZCgnW2RhdGEtdGFiXScpO1xyXG5cdFxyXG5cdFx0JHRhYnNJdGVtcy5ub3QoJHRhYnNJdGVtKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkdGFic0l0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0Y29uc29sZS5sb2coJHRhYnNbMF0pO1xyXG5cdFx0aW5pdFRhYnNJdGVtKCR0YWJzLCAkdGFic0l0ZW0pO1xyXG5cdH0pO1xyXG59KCkpO1xyXG5cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLXBsYWNlX190b2dnbGVycycpKSB7XHJcblx0Y29uc3Qgc2hvcFZhbHVlV3JhcEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3AtcGxhY2VfX3ZhbHVlLXdyYXAnKTtcclxuXHRjb25zdCBzaG9wVmFsdWVUb2dnbGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLXBsYWNlX192YWx1ZScpO1xyXG5cdGNvbnN0IHRvZ2dsZXJzUGFyZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcC1wbGFjZV9fdG9nZ2xlcnMnKTtcclxuXHJcblx0c2V0VmFsdWUoKTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGFiczpjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdHNldFZhbHVlKCk7XHJcblx0fSlcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnNob3AtcGxhY2VfX3ZhbHVlLXdyYXAnKSkge1xyXG5cdFx0XHRjb25zdCB0YXJnZXRFbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5zaG9wLXBsYWNlX192YWx1ZS13cmFwJyk7XHJcblx0XHRcdHNob3BWYWx1ZVdyYXBFbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdH0gZWxzZSBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJy5zaG9wLXBsYWNlX19ib3hlcy1zaWRlJykgXHJcblx0XHRcdHx8IGUudGFyZ2V0LmNsb3Nlc3QoJy5zaG9wLXBsYWNlX190b2dnbGVycyBidXR0b24nKSAgKSB7XHJcblx0XHRcdFx0c2hvcFZhbHVlV3JhcEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBzZXRWYWx1ZSgpIHtcclxuXHRcdGNvbnN0IGFjdGl2ZUJ0biA9IHRvZ2dsZXJzUGFyZW50RWwucXVlcnlTZWxlY3RvcignYnV0dG9uLmFjdGl2ZScpO1xyXG5cdFx0c2hvcFZhbHVlVG9nZ2xlRWwudGV4dENvbnRlbnQgPSBhY3RpdmVCdG4udGV4dENvbnRlbnQ7XHJcblx0fVxyXG59XHJcblxyXG4vL0hhbWJ1cmdlciDQvtGC0LrRgNGL0YLQuNGPINC80L7QsdC40LvRjNC90L7Qs9C+INC80LXQvdGOXHJcbmlmIChpc0VsZW0oJy5oZWFkZXJfX2hhbWJ1cmdlcicpKSB7XHJcblxyXG5cdGNvbnN0IGhhbWJ1cmdlckNsYXNzTmFtZSA9ICcuaGVhZGVyX19oYW1idXJnZXInO1xyXG5cdGNvbnN0IGJ1cmdlckJsb2NrQ2xhc3NOYW1lID0gJy5oZWFkZXJfX2J1cmdlcic7XHJcblx0Y29uc3QgYnVyZ2VySW5uZXJDbGFzc05hbWUgPSAnLmhlYWRlcl9fYnVyZ2VyLWlubmVyJztcclxuXHRjb25zdCAkYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHRjb25zdCAkaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XHJcblx0Y29uc3QgJGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGFtYnVyZ2VyQ2xhc3NOYW1lKTtcclxuXHRjb25zdCAkYnVyZ2VyQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1cmdlckJsb2NrQ2xhc3NOYW1lKTtcclxuXHRjb25zdCAkYnVyZ2VySW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1cmdlcklubmVyQ2xhc3NOYW1lKTtcclxuXHRjb25zdCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoYChtYXgtd2lkdGg6ICR7YnJlYWtQb2ludC5kZXNjdG9wTWlufXB4KWApO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRpZiAoZS50YXJnZXQuY2xvc2VzdChoYW1idXJnZXJDbGFzc05hbWUpKSB7XHJcblx0XHRcdGNvbnN0IG9mZnNldFJpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggLSAkYm9keS5vZmZzZXRXaWR0aDtcclxuXHRcdFx0JGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdFx0JGJ1cmdlckJsb2NrLnN0eWxlLnRvcCA9ICRoZWFkZXIub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuXHJcblx0XHRcdGxldCBpc0FjdGl2ZSA9ICRoYW1idXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKTtcclxuXHRcdFx0JGJ1cmdlckJsb2NrLmNsYXNzTGlzdFtpc0FjdGl2ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdvcGVuJyk7XHJcblx0XHRcdCRidXJnZXJJbm5lci5zdHlsZS5tYXhIZWlnaHQgPSAoaXNBY3RpdmUpID8gYGNhbGMoMTAwdmggLSAkeyRoZWFkZXIub2Zmc2V0SGVpZ2h0fXB4KWAgOiAnJztcclxuXHRcdFx0JGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAoaXNBY3RpdmUpID8gJ2hpZGRlbicgOiAnJztcclxuXHRcdH0gZWxzZSBpZiAoJGJ1cmdlckJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpICYmICEkYnVyZ2VySW5uZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcblx0XHRcdCRoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdCRidXJnZXJCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcblx0XHRcdCRib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdG1lZGlhUXVlcnkuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKGUpIHtcclxuXHRcdGlmICghZS5tYXRjaGVzICYmICRidXJnZXJCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xyXG5cdFx0XHQkaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkYnVyZ2VyQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cdFx0XHQkYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJyc7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuLy9maXhlZCBoZWFkZXJcclxuaWYgKGlzRWxlbSgnaGVhZGVyJykpIHtcclxuXHRsZXQgZml4ZWRIZWFkZXIgPSBzaG93SGVhZGVyKCdoZWFkZXInKTtcclxuXHJcblx0ZnVuY3Rpb24gc2hvd0hlYWRlcihlbCkge1xyXG5cdFx0Y29uc3QgJGVsID0gKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCkgOiBlbFxyXG5cclxuXHRcdGNvbnN0IGh0bWxFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHRcdGxldCBvZmZzZXRUb3BFbCA9ICRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IG9mZnNldFRvcEVsICsgNDApIHtcclxuXHRcdFx0XHRzaG93KCk7XHJcblx0XHRcdH0gZWxzZSBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgb2Zmc2V0VG9wRWwgLyAyKSB7XHJcblx0XHRcdFx0Zml4ZWQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwge30pXHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0b2Zmc2V0VG9wRWwgPSAkZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG5cdFx0fSlcclxuXHJcblx0XHRmdW5jdGlvbiBzaG93KCkge1xyXG5cdFx0XHRpZiAoJGVsLmNsYXNzTGlzdC5jb250YWlucygnZml4ZWQnKSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0aHRtbEVsLnN0eWxlLnBhZGRpbmdUb3AgPSAkZWwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xyXG5cdFx0XHQkZWwuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBmaXhlZCgpIHtcclxuXHRcdFx0aWYgKCEkZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaXhlZCcpKSByZXR1cm47XHJcblxyXG5cdFx0XHQkZWwuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKTtcclxuXHRcdFx0aHRtbEVsLnN0eWxlLnBhZGRpbmdUb3AgPSAnJztcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRzaG93LFxyXG5cdFx0XHRmaXhlZCxcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vINC/0L7QtCDQvNC10L3RjiDRgSDQs9Cw0LzQsdGD0YDQs9C10YDQvtC8INCy0L3Rg9GC0YDQuCDQvtGB0L3QvtCy0L3QvtCz0L4g0LzQtdC90Y5cclxuaWYgKGlzRWxlbSgnLm1lbnVfX2l0ZW0tLWRyb3AnKSkge1xyXG5cdGNvbnN0IG1lbnVEcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2l0ZW0tLWRyb3AnKTtcclxuXHRjb25zdCB0b2dnbGUgPSBtZW51RHJvcC5xdWVyeVNlbGVjdG9yKCcubWVudV9faXRlbS10b2dnbGUnKTtcclxuXHRjb25zdCBsaW5rYnRuID0gbWVudURyb3AucXVlcnlTZWxlY3RvcignLm1lbnVfX2l0ZW0tdG9nZ2xlIH4gLm1lbnVfX2xpbmsnKTtcclxuXHRjb25zdCBpdGVtTWVudUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudV9faXRlbTpub3QoLm1lbnVfX2l0ZW0tLWRyb3ApJyk7XHJcblxyXG5cclxuXHR0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHR0b2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0XHRtZW51RHJvcC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0bGlua2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0b2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0XHRtZW51RHJvcC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXYpIHtcclxuXHRcdGlmICghZXYudGFyZ2V0LmNsb3Nlc3QoJy5tZW51X19pdGVtLS1kcm9wJykpIHtcclxuXHRcdFx0aWYgKG1lbnVEcm9wLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHR0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdFx0bWVudURyb3AuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG4vLyB2LXVwINC60L3QvtC/0LrQsCDQstCy0LXRgNGFXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJ2LXVwXCI+PC9kaXY+XHJcblx0YCk7XHJcblxyXG5cdGNvbnN0IGJ0bkRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudi11cCcpO1xyXG5cdGxldCB2VXBUcmlnZ2VyVGltZXIgPSAwO1xyXG5cclxuXHR2VXAoYnRuRG93biwgZ2V0U2Nyb2xlZFdpbmRvdyk7XHJcblxyXG5cdGJ0bkRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQvL2JhY2tUb1RvcCgtNDUsIDApO1xyXG5cdFx0c2Nyb2xsaW5nV2luZG93LnN0YXJ0QW1pbWF0aW9uU2Nyb2xsKDEpO1xyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHZVcFRyaWdnZXJUaW1lcik7XHJcblx0XHR2VXBUcmlnZ2VyVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dlVwKGJ0bkRvd24sIGdldFNjcm9sZWRXaW5kb3cpO1xyXG5cdFx0fSwgMjAwKVxyXG5cdH0pO1xyXG5cclxuXHQvL9C/0YDQvtC70LjRgdGC0YvQstCw0LjQvdC1INC+0LrQvdCwINCy0LLQtdGA0YUg0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YNcclxuXHRmdW5jdGlvbiB2VXAoYnRuLCBzY3JvbGVkKSB7XHJcblx0XHRpZiAoc2Nyb2xlZCgpID4gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpKSB7XHJcblx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdH0gZWxzZSBpZiAoc2Nyb2xlZCgpIDwgKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIHx8IGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8v0L/RgNC+0LrRgNGD0YLQutCwINC+0LrQvdCwINCy0LLQtdGA0YUg0LLQvdC40LdcclxuXHRmdW5jdGlvbiBiYWNrVG9Ub3AoaW50ZXJ2YWwsIHRvKSB7XHJcblx0XHRpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDw9IHRvKSByZXR1cm47XHJcblxyXG5cdFx0d2luZG93LnNjcm9sbEJ5KDAsIGludGVydmFsKTtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRiYWNrVG9Ub3AoaW50ZXJ2YWwsIHRvKVxyXG5cdFx0fSwgMCk7XHJcblx0fVxyXG5cclxuXHQvL9C90LAg0YHQutC+0LvRjNC60L4g0L/RgNC+0LrRgNGD0YfQtdC90L4g0L7QutC90L5cclxuXHRmdW5jdGlvbiBnZXRTY3JvbGVkV2luZG93KCkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdH1cclxufSgpKTtcclxuXHJcbi8qKioqKiBGVU5DVElPTiBQTFVHSU4gKioqKioqL1xyXG5cclxuLy9zbGlua3kgbWVudVxyXG5mdW5jdGlvbiBicm9NZW51KHNlbGVjdG9yLCBvcHRpb25zKSB7XHJcblx0Y29uc3QgJG1lbnUgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xyXG5cdGNvbnN0ICRsZXZlbF8xID0gJG1lbnUubGFzdEVsZW1lbnRDaGlsZDtcclxuXHRjb25zdCAkc3ViTWVudUxpc3QgPSAkbWVudS5xdWVyeVNlbGVjdG9yQWxsKCdsaSA+IHVsJyk7XHJcblx0Y29uc3QgJHN1Yk1lbnVMaW5rID0gJG1lbnUucXVlcnlTZWxlY3RvckFsbCgnbGkgPiBhJyk7XHJcblx0bGV0IGFjdGl2YXRlZDtcclxuXHJcblx0bGV0IGRlZmF1bE9wdGlvbnMgPSB7XHJcblx0XHRhcnJvdzogYFxyXG5cdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcblx0XHRcdDxwYXRoIGQ9XCJNMTIuMjE5IDIuMjgxTDEwLjc4IDMuNzIgMTguMDYyIDExSDJ2MmgxNi4wNjNsLTcuMjgyIDcuMjgxIDEuNDM4IDEuNDM4IDktOSAuNjg3LS43MTktLjY4Ny0uNzE5elwiIC8+XHJcblx0XHRcdDwvc3ZnPlxyXG5cdFx0YFxyXG5cdH1cclxuXHJcblx0T2JqZWN0LmFzc2lnbihkZWZhdWxPcHRpb25zLCBvcHRpb25zKTtcclxuXHJcblx0bGV0ICRhY3RpdmVVbDtcclxuXHRsZXQgdHJhbnNsYXRlID0gMDtcclxuXHJcblx0Y29uc3QgbWV0aG9kID0ge1xyXG5cdFx0aW5pdCgpIHtcclxuXHRcdFx0aWYgKGFjdGl2YXRlZCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0JG1lbnUuY2xhc3NMaXN0LmFkZCgnYnJvLW1lbnUnKTtcclxuXHJcblx0XHRcdGZvciAobGV0IHN1Ym1lbnUgb2YgJHN1Yk1lbnVMaXN0KSB7XHJcblx0XHRcdFx0Y29uc3QgbGluayA9IHN1Ym1lbnUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdsaSA+IGEnKTtcclxuXHRcdFx0XHRsaW5rLmNsYXNzTGlzdC5hZGQoJ2Jyby1tZW51X19uZXh0Jyk7XHJcblx0XHRcdFx0c3VibWVudS5jbGFzc0xpc3QuYWRkKCdicm8tbWVudV9fc3VibWVudScpO1xyXG5cclxuXHRcdFx0XHRfYWRkQnRuQmFjayhzdWJtZW51LCBsaW5rKTtcclxuXHRcdFx0XHRfYWRkQnRuTmV4dChsaW5rKTtcclxuXHJcblx0XHRcdFx0YWN0aXZhdGVkID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Zm9yIChjb25zdCAkbGluayBvZiAkc3ViTWVudUxpbmspIHtcclxuXHRcdFx0XHQkbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xyXG5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIF9zZXRIZWlnaE1lbnUpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRkZXN0cm95KCkge1xyXG5cdFx0XHRpZiAoIWFjdGl2YXRlZCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0Lyog0KPQtNCw0LvRj9C10Lwg0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDRgdC+0LHRi9GC0LjQuSAqL1xyXG5cdFx0XHQkbWVudS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBfc2V0SGVpZ2hNZW51KTtcclxuXHJcblx0XHRcdC8qINCj0LTQsNC70Y/QtdC8INC60LvQsNGB0YHRiyDQv9C70LDQs9C40L3QsCDQvdCwINGB0YHRi9C70LrQsNGFINC4INC60L3QvtC/0LrRgyDQvdCw0LfQsNC0ICovXHJcblx0XHRcdGZvciAoY29uc3QgJGxpbmsgb2YgJG1lbnUucXVlcnlTZWxlY3RvckFsbCgnLmxpbmsnKSkge1xyXG5cdFx0XHRcdGlmICgkbGluay5jbGFzc0xpc3QuY29udGFpbnMoJ2Jyby1tZW51X19iYWNrJykpIHtcclxuXHRcdFx0XHRcdCRsaW5rLmNsb3Nlc3QoJ2xpJykucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCRsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2xpbmsnKTtcclxuXHRcdFx0XHQkbGluay5jbGFzc0xpc3QucmVtb3ZlKCdicm8tbWVudV9fbmV4dCcpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKiDQo9C00LDQu9GP0LXQvCDQutC70LDRgdGB0Ysg0L/Qu9Cw0LPQuNC90LAg0L3QsCDQstC70L7QttC10L3Ri9GFINC80LXQvdGO0YjQutCw0YVcdCovXHJcblx0XHRcdGZvciAoY29uc3QgJHN1Yk1lbnUgb2YgJG1lbnUucXVlcnlTZWxlY3RvckFsbCgnLmJyby1tZW51X19zdWJtZW51JykpIHtcclxuXHRcdFx0XHQkc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdicm8tbWVudV9fc3VibWVudScpXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8qINCj0LTQsNC70Y/QtdC8INGB0YLRgNC10LvQutC4INCyINGB0YHRi9C70LrQsNGFICovXHJcblx0XHRcdGZvciAoY29uc3QgJGFyciBvZiAkbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcuYnJvLW1lbnVfX2FycicpKSB7XHJcblx0XHRcdFx0JGFyci5yZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cclxuXHJcblxyXG5cdFx0XHQkYWN0aXZlVWwgJiYgJGFjdGl2ZVVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0JG1lbnUuc3R5bGUuaGVpZ2h0ID0gJyc7XHJcblx0XHRcdCRsZXZlbF8xLnN0eWxlLnRyYW5zZm9ybSA9IGBgO1xyXG5cdFx0XHR0cmFuc2xhdGUgPSAwO1xyXG5cdFx0XHRhY3RpdmF0ZWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XHJcblx0XHRjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcblx0XHRpZiAodGFyZ2V0LmNsb3Nlc3QoJy5icm8tbWVudV9fbmV4dCcpKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdGNvbnN0ICRuZXN0ZWRNZW51ID0gdGFyZ2V0LmNsb3Nlc3QoJ2xpJykucXVlcnlTZWxlY3RvcigndWwnKTtcclxuXHJcblx0XHRcdGlmICgkYWN0aXZlVWwpICRhY3RpdmVVbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdCRuZXN0ZWRNZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkbmVzdGVkTWVudS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cdFx0XHR0cmFuc2xhdGUgLT0gMTAwO1xyXG5cclxuXHRcdFx0JGxldmVsXzEuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGV9JSlgO1xyXG5cdFx0XHQkYWN0aXZlVWwgPSAkbmVzdGVkTWVudTtcclxuXHJcblx0XHRcdHNjcm9sbFRvVmlzaWJsZSgkYWN0aXZlVWwpO1xyXG5cdFx0XHRfc2V0SGVpZ2hNZW51KCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCgnLmJyby1tZW51X19iYWNrJykpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0Y29uc3QgJHVwcGVyTWVudSA9ICRhY3RpdmVVbC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoJ3VsJyk7XHJcblx0XHRcdCR1cHBlck1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHQkYWN0aXZlVWwuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xyXG5cclxuXHRcdFx0dHJhbnNsYXRlICs9IDEwMDtcclxuXHJcblx0XHRcdCRsZXZlbF8xLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlfSUpYDtcclxuXHRcdFx0JGFjdGl2ZVVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkYWN0aXZlVWwgPSAkdXBwZXJNZW51O1xyXG5cdFx0XHRfc2V0SGVpZ2hNZW51KCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfYWRkQnRuTmV4dChlbGVtKSB7XHJcblx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoJ2xpbmsnKVxyXG5cdFx0ZWxlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuXHRcdFx0JHtkZWZhdWxPcHRpb25zLmFycm93fVxyXG5cdFx0YCk7XHJcblxyXG5cdFx0ZWxlbS5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5hZGQoJ2Jyby1tZW51X19hcnInKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9hZGRCdG5CYWNrKGVsZW0sIGxpbmspIHtcclxuXHRcdGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cclxuXHRcdGVsZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxyXG5cdFx0XHQ8bGk+XHJcblx0XHRcdFx0PGEgY2xhc3M9XCJicm8tbWVudV9fYmFjayBsaW5rXCIgJHsoaHJlZikgPyBgaHJlZj0ke2hyZWZ9YCA6ICcnfT5cclxuXHRcdFx0XHRcdCR7ZGVmYXVsT3B0aW9ucy5hcnJvd31cclxuXHRcdFx0XHRcdCR7bGluay50ZXh0Q29udGVudH1cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvbGk+XHJcblx0XHRgKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9zZXRIZWlnaE1lbnUoKSB7XHJcblx0XHRpZiAoISRhY3RpdmVVbCkgcmV0dXJuO1xyXG5cclxuXHRcdCRtZW51LnN0eWxlLmhlaWdodCA9ICRhY3RpdmVVbC5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzY3JvbGxUb1Zpc2libGUoZWwpIHtcclxuXHRcdGlmIChfZ2V0UG9zQWJzV2luZG93KGVsKSA+IHdpbmRvdy5wYWdlWU9mZnNldCkgcmV0dXJuO1xyXG5cclxuXHRcdGJhY2tUb1RvcCgtMTAsIF9nZXRQb3MoZWwpKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9nZXRQb3NBYnNXaW5kb3coZWxlbSkge1xyXG5cdFx0Y29uc3Qgb2Zmc2V0VG9wID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblxyXG5cdFx0cmV0dXJuIG9mZnNldFRvcCAtIHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9nZXRQb3MoZWwpIHtcclxuXHRcdHJldHVybiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBiYWNrVG9Ub3AoaW50ZXJ2YWwsIHRvKSB7XHJcblx0XHRpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDw9IHRvKSByZXR1cm47XHJcblxyXG5cdFx0d2luZG93LnNjcm9sbEJ5KDAsIGludGVydmFsKTtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRiYWNrVG9Ub3AoaW50ZXJ2YWwsIHRvKVxyXG5cdFx0fSwgMCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbWV0aG9kO1xyXG59XHJcblxyXG4vLyBiVGFic1xyXG5mdW5jdGlvbiBiVGFicyh0YXJnZXQpIHtcclxuXHRsZXQgX2VsZW1UYWJzID0gKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0KSxcclxuXHRcdF9ldmVudFRhYnNTaG93LFxyXG5cdFx0X3Nob3dUYWIgPSBmdW5jdGlvbiAodGFic0xpbmtUYXJnZXQpIHtcclxuXHRcdFx0dmFyIHRhYnNQYW5lVGFyZ2V0LCB0YWJzTGlua0FjdGl2ZSwgdGFic1BhbmVTaG93O1xyXG5cdFx0XHR0YWJzUGFuZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFic0xpbmtUYXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xyXG5cdFx0XHR0YWJzTGlua0FjdGl2ZSA9IHRhYnNMaW5rVGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmItdGFic19fbGluay5hY3RpdmUnKTtcclxuXHRcdFx0dGFic1BhbmVTaG93ID0gdGFic1BhbmVUYXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYi10YWJzX19wYW5lLmFjdGl2ZScpO1xyXG5cdFx0XHQvLyDQtdGB0LvQuCDRgdC70LXQtNGD0Y7RidCw0Y8g0LLQutC70LDQtNC60LAg0YDQsNCy0L3QsCDQsNC60YLQuNCy0L3QvtC5LCDRgtC+INC30LDQstC10YDRiNCw0LXQvCDRgNCw0LHQvtGC0YNcclxuXHRcdFx0aWYgKHRhYnNMaW5rVGFyZ2V0ID09PSB0YWJzTGlua0FjdGl2ZSkgcmV0dXJuO1xyXG5cdFx0XHQvLyDRg9C00LDQu9GP0LXQvCDQutC70LDRgdGB0Ysg0YMg0YLQtdC60YPRidC40YUg0LDQutGC0LjQstC90YvRhSDRjdC70LXQvNC10L3RgtC+0LJcclxuXHRcdFx0aWYgKHRhYnNMaW5rQWN0aXZlICE9PSBudWxsKSB0YWJzTGlua0FjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdGlmICh0YWJzUGFuZVNob3cgIT09IG51bGwpIHRhYnNQYW5lU2hvdy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0Ly8g0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YHRiyDQuiDRjdC70LXQvNC10L3RgtCw0LwgKNCyINC30LDQstC40LzQvtGB0YLQuCDQvtGCINCy0YvQsdGA0LDQvdC90L7QuSDQstC60LvQsNC00LrQuClcclxuXHRcdFx0dGFic0xpbmtUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdHRhYnNQYW5lVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KF9ldmVudFRhYnNTaG93KTtcclxuXHRcdH0sXHJcblx0XHRfc3dpdGNoVGFiVG8gPSBmdW5jdGlvbiAodGFic0xpbmtJbmRleCkge1xyXG5cdFx0XHR2YXIgdGFic0xpbmtzID0gX2VsZW1UYWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5iLXRhYnNfX2xpbmsnKTtcclxuXHRcdFx0aWYgKHRhYnNMaW5rcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0aWYgKHRhYnNMaW5rSW5kZXggPiB0YWJzTGlua3MubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHR0YWJzTGlua0luZGV4ID0gdGFic0xpbmtzLmxlbmd0aDtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRhYnNMaW5rSW5kZXggPCAxKSB7XHJcblx0XHRcdFx0XHR0YWJzTGlua0luZGV4ID0gMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0X3Nob3dUYWIodGFic0xpbmtzW3RhYnNMaW5rSW5kZXggLSAxXSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdF9ldmVudFRhYnNTaG93ID0gbmV3IEN1c3RvbUV2ZW50KCd0YWIuc2hvdycsIHsgZGV0YWlsOiBfZWxlbVRhYnMgfSk7XHJcblxyXG5cdF9lbGVtVGFicy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHR2YXIgdGFic0xpbmtUYXJnZXQgPSBlLnRhcmdldDtcclxuXHRcdC8vINC30LDQstC10YDRiNCw0LXQvCDQstGL0L/QvtC70L3QtdC90LjQtSDRhNGD0L3QutGG0LjQuCwg0LXRgdC70Lgg0LrQu9C40LrQvdGD0LvQuCDQvdC1INC/0L4g0YHRgdGL0LvQutC1XHJcblx0XHRpZiAoIXRhYnNMaW5rVGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYi10YWJzX19saW5rJykpIHJldHVybjtcclxuXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRfc2hvd1RhYih0YWJzTGlua1RhcmdldCk7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRzaG93VGFiOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcblx0XHRcdF9zaG93VGFiKHRhcmdldCk7XHJcblx0XHR9LFxyXG5cdFx0c3dpdGNoVGFiVG86IGZ1bmN0aW9uIChpbmRleCkge1xyXG5cdFx0XHRfc3dpdGNoVGFiVG8oaW5kZXgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn07XHJcblxyXG4vL1x0bW9kYWwgd2luZG93XHJcbmZ1bmN0aW9uIG1vZGFsV2luZG93KCkge1xyXG5cdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksXHJcblx0XHRtb2RhbEVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52LW1vZGFsJyksXHJcblx0XHRidG5PcGVuQ2xhc3NOYW1lID0gXCJqcy1vcGVuTW9kYWxcIixcclxuXHRcdGJ0bkNsb3NlQ2xhc3NOYW1lID0gJ2pzLWNsb3NlTW9kYWwnO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRpZiAoZS50YXJnZXQuY2xvc2VzdChgLiR7YnRuT3BlbkNsYXNzTmFtZX1gKSAmJiBlLnRhcmdldC5kYXRhc2V0LnR5cGVNb2RhbCkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGNvbnN0IHR5cGVNb2RhbCA9IGUudGFyZ2V0LmRhdGFzZXRbJ3R5cGVNb2RhbCddO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgJG1vZGFsIG9mIG1vZGFsRWxzKSB7XHJcblxyXG5cdFx0XHRcdGlmICgkbW9kYWwuZGF0YXNldCAmJiAkbW9kYWwuZGF0YXNldFsndHlwZU1vZGFsJ10gPT09IHR5cGVNb2RhbCkge1xyXG5cdFx0XHRcdFx0JG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdGNvbnN0IHNjcm9sbEJhcldpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBib2R5Lm9mZnNldFdpZHRoO1xyXG5cdFx0XHRcdFx0Ym9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cdFx0XHRcdFx0Ym9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzY3JvbGxCYXJXaWR0aCArIFwicHhcIjtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2LW1vZGFsX19pbm5lcicpIHx8IGUudGFyZ2V0LmNsb3Nlc3QoYC4ke2J0bkNsb3NlQ2xhc3NOYW1lfWApKSB7XHJcblx0XHRcdGUudGFyZ2V0LmNsb3Nlc3QoJy52LW1vZGFsJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuXHRcdFx0Ym9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG4vLyDQsNC90LjQvNCw0YbQuNGPINGB0LrRgNC+0LvQsCDQvtC60L3QsCDQsdGA0LDRg9C30LXRgNCwXHJcbmZ1bmN0aW9uIHNjcm9sbFdpbmRvdygpIHtcclxuXHRsZXQgc2Nyb2xsQW5pbWF0aW9uSWQ7XHJcblx0bGV0IGN1cnJlbnRTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblx0bGV0IHNjcm9sbHMgPSBmYWxzZTtcclxuXHJcblx0ZnVuY3Rpb24gc3RhcnRBbWltYXRpb25TY3JvbGwobmV3U2Nyb2xsWSkge1xyXG5cdFx0aWYgKCFzY3JvbGxzKSB7XHJcblx0XHRcdGN1cnJlbnRTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblx0XHRcdHNjcm9sbHMgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGRlbHRhU2Nyb2xsID0gKG5ld1Njcm9sbFkgLSBjdXJyZW50U2Nyb2xsKTtcclxuXHJcblx0XHRjdXJyZW50U2Nyb2xsICs9IGRlbHRhU2Nyb2xsICogMC4xNTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCBjdXJyZW50U2Nyb2xsKTtcclxuXHJcblx0XHRpZiAoTWF0aC5hYnMoZGVsdGFTY3JvbGwpID4gNSkge1xyXG5cdFx0XHRzY3JvbGxBbmltYXRpb25JZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHN0YXJ0QW1pbWF0aW9uU2Nyb2xsKG5ld1Njcm9sbFkpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIG5ld1Njcm9sbFkpO1xyXG5cdFx0XHRzdG9wQW5pbWF0aW9uU2Nyb2xsKCk7XHJcblx0XHRcdHNjcm9sbHMgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHN0b3BBbmltYXRpb25TY3JvbGwoKSB7XHJcblx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoc2Nyb2xsQW5pbWF0aW9uSWQpO1xyXG5cdFx0c2Nyb2xsQW5pbWF0aW9uSWQgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0c3RhcnRBbWltYXRpb25TY3JvbGwsXHJcblx0XHRzdG9wQW5pbWF0aW9uU2Nyb2xsLFxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2FsbGVyeShzZWxlY3Rvcikge1xyXG5cdGNvbnN0ICRnYWxsZXJ5ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBzZWxlY3RvcjtcclxuXHJcblx0Y29uc3QgJHRodW1ic1NsaWRlciA9ICRnYWxsZXJ5LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X190aHVtYnMnKSxcclxuXHRcdCRmdWxsU2xpZGVyID0gJGdhbGxlcnkucXVlcnlTZWxlY3RvcignLmdhbGxlcnlfX3NsaWRlcicpO1xyXG5cclxuXHJcblx0LyogdGh1bWJzICovXHJcblx0bGV0IGdhbGxlcnlUaHVtYnMgPSBuZXcgU3dpcGVyKCR0aHVtYnNTbGlkZXIsIHtcclxuXHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuXHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcblx0XHRmcmVlTW9kZToge1xyXG5cdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRzdGlja3k6IHRydWUsXHJcblx0XHR9LFxyXG5cdFx0a2V5Ym9hcmQ6IHtcclxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0b25seUluVmlld3BvcnQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0bW91c2V3aGVlbDogdHJ1ZSxcclxuXHR9KTtcclxuXHJcblx0bGV0IGdhbGxlcnlGdWxsID0gbmV3IFN3aXBlcigkZnVsbFNsaWRlciwge1xyXG5cdFx0c3BhY2VCZXR3ZWVuOiAxMCxcclxuXHRcdHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG5cdFx0Ly8gYXV0b3BsYXk6IHtcclxuXHRcdC8vIFx0ZGVsYXk6IDUwMDBcclxuXHRcdC8vIH0sXHJcblx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdHByZXZFbDogJGZ1bGxTbGlkZXIucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWFyci0tcHJldicpLFxyXG5cdFx0XHRuZXh0RWw6ICRmdWxsU2xpZGVyLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnItLW5leHQnKSxcclxuXHRcdH0sXHJcblx0XHRrZXlib2FyZDoge1xyXG5cdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRvbmx5SW5WaWV3cG9ydDogZmFsc2VcclxuXHRcdH0sXHJcblx0XHR0aHVtYnM6IHtcclxuXHRcdFx0c3dpcGVyOiBnYWxsZXJ5VGh1bWJzLFxyXG5cdFx0fSxcclxuXHR9KTtcclxufVxyXG5cclxuLy9zbGlkZXIgXHJcbmZ1bmN0aW9uIHNsaWRlcihzZWxlY3Rvciwgb3B0aW9uID0ge30pIHtcclxuXHRjb25zdCAkc2xpZGVyID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBzZWxlY3RvcjtcclxuXHRjb25zdCAkc2xpZGVyV3JhcCA9ICRzbGlkZXIuY2xvc2VzdCgnLnNsaWRlci13cmFwJyk7XHJcblxyXG5cdGNvbnN0IHNldGluZ3MgPSB7XHJcblx0XHRuYXZpZ2F0aW9uOiAkc2xpZGVyV3JhcC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLW5hdicpLFxyXG5cdFx0cGFnaW5hdGlvbjogJHNsaWRlcldyYXAucXVlcnlTZWxlY3RvcignLnNsaWRlci1wYWdpbmF0aW9uJyksXHJcblx0XHRvcHRpb25zOiB7XHJcblx0XHRcdHdhdGNoT3ZlcmZsb3c6IHRydWUsXHJcblx0XHRcdC4uLm9wdGlvbixcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdE9iamVjdC5hc3NpZ24oc2V0aW5ncy5vcHRpb25zLCB7XHJcblx0XHR3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXHJcblx0XHR3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG5cdFx0YXV0b3BsYXk6ICgrJHNsaWRlci5kYXRhc2V0LnN3aXBlckF1dG9wbGF5ID4gMCkgPyB7XHJcblx0XHRcdGRlbGF5OiArJHNsaWRlci5kYXRhc2V0LnN3aXBlckF1dG9wbGF5LFxyXG5cdFx0XHRwYXVzZU9uTW91c2VFbnRlcjogdHJ1ZSxcclxuXHRcdFx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG5cdFx0fSA6ICcnLFxyXG5cdFx0bmF2aWdhdGlvbjogc2V0aW5ncy5uYXZpZ2F0aW9uID8ge1xyXG5cdFx0XHRuZXh0RWw6ICRzbGlkZXJXcmFwLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1uZXh0JyksXHJcblx0XHRcdHByZXZFbDogJHNsaWRlcldyYXAucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnItLXByZXYnKSxcclxuXHRcdH0gOiAnJyxcclxuXHRcdHBhZ2luYXRpb246IHNldGluZ3MucGFnaW5hdGlvbiA/IHtcclxuXHRcdFx0ZWw6ICRzbGlkZXJXcmFwLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItcGFnaW5hdGlvbicpLFxyXG5cdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHR9IDogJycsXHJcblx0fSlcclxuXHJcblx0cmV0dXJuIG5ldyBTd2lwZXIoJHNsaWRlciwgc2V0aW5ncy5vcHRpb25zKTtcclxufVxyXG5cclxuLyoqKioqKiBVVElMUyAqKioqKiovXHJcblxyXG5mdW5jdGlvbiBpc0VsZW0oc2VsZWN0b3IpIHtcclxuXHRyZXR1cm4gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSA/IHRydWUgOiBmYWxzZTtcclxufSJdfQ==
