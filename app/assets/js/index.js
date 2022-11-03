"use strict";
// break points site
const breakPoint = {
	desctop: 1920,
	desctopMid: 1450,
	desctopMin: 1230,
	table: 1024,
	mobile: 768,
	tel: 480,
}


/***** INITIALIZING PLUGINS ******/

// скрол страницы к нужной координате
let scrollingWindow = scrollWindow();

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
	const $menu = document.querySelector('header .bro-menu');
	const menu = broMenu($menu);
	const mediaQuery = window.matchMedia(`(max-width: ${breakPoint.desctopMin}px)`);

	toggleMenu();

	mediaQuery.addListener(toggleMenu)

	function toggleMenu() {
		if (mediaQuery.matches) {
			menu.init();

		} else {
			menu.destroy();
		}
	}
}

// 	main slider 
(function () {
	if (isElem('.main-slider')) {
		const sliderNode = document.querySelector('.main-slider');

		const swiper = slider(sliderNode, {
			effect: "coverflow",
			grabCursor: true,
			autoplay: true,
			speed: 1200,
			autoHeight: false,
			spaceBetween: 300,
			coverflowEffect: {
				rotate: 80,
				depth: 100,
				slideShadows: 1,
			},
			pagination: {
				el: sliderNode.parentElement.querySelector('.slider-pagination'),
				clickable: true,
			}
		});

		let currentResolutionState = "",
			mobileSlides = additionMobileSlides(sliderNode.swiper);

    slideChanger(sliderNode.swiper);
		sliderNode.swiper.on('resize', function (slider) {
			slideChanger(slider);
		});

    function slideChanger(slider) {
      if (currentResolutionState !== "desktop" && window.innerWidth >= 840) {
				additionMobileSlides(slider).map((e) => {
					e.style.display = 'none';
					e.setAttribute('aria-hidden', 'true');
					e.remove();
				});
        currentResolutionState = "desktop";
      } else if (currentResolutionState !== "mobile" && window.innerWidth < 840) {
				slider.addSlide(1, mobileSlides);
        additionMobileSlides(slider).map((e) => {
					e.style.display = '';
					e.setAttribute('aria-hidden', 'false');
				});
        currentResolutionState = "mobile";
      }
    }

		function additionMobileSlides(slider) {
			let hiddenSlides = [];
			slider.slides.forEach((item) => {
				if (item.getAttribute('aria-hidden')) {
					hiddenSlides.push(item);
				}
			});
			return hiddenSlides;
		}
	}
}());

// advantages slider
if (isElem('.advantages-slider')) {
	const $sliderNodes = document.querySelectorAll('.advantages-slider');

	for (const $slider of $sliderNodes) {
		const swiper = new Swiper($slider, {
			slidesPerView: 1,
			spaceBetween: 200,
			breakpoints: {
				320: {
					grabCursor: true,
					enabled: true,
				},
				[breakPoint.mobile + 1]: {
					enabled: false
				}
			},
			pagination: {
				el: $slider.parentElement.querySelector('.slider-pagination'),
				clickable: true,
			},
		})
	}
}

// 	main slider 
if (isElem('.slider-scroll')) {
	const sliderNode = document.querySelector('.slider-scroll');

	const swiper = new Swiper(sliderNode, {
		freeMode: true,
		slidesPerView: 'auto',
		scrollbar: {
			el: ".swiper-scrollbar",
			draggable: true,
			hide: false,
			dragSize: 35,
			snapOnRelease: false,
		}
	});
}

// heading slider	
if (isElem('.hiding-slider')) {
	const $sliderNodes = document.querySelectorAll('.hiding-slider');

	for (let $sliderNode of $sliderNodes) {
		const swiper = new Swiper($sliderNode, {
			freeMode: true,
			loopAdditionalSlides: 1,
			watchSlidesProgress: true,
			watchOverflow: true,
			dynamicBullets: true,
			breakpoints: {
				300: {
					slidesPerView: 'auto',
					spaceBetween: 23,
				},
				[breakPoint.table + 1]: {
					slidesPerView: 'auto',
					spaceBetween: 30,
					grabCursor: true,
				},
				[breakPoint.desctopMin + 1]: {
					grabCursor: false,
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		});
	}
}

// gallery slider	
if (isElem('.gallery')) {
	const $galleries = document.querySelectorAll('.gallery');

	for (const $gallery of $galleries) {
		gallery($gallery);
	}
}

// img slider	
if (isElem('.img-slider')) {
	const $sliderNodes = document.querySelectorAll('.img-slider');

	for (let $sliderNode of $sliderNodes) {
		const swiper = new Swiper($sliderNode, {
			loopAdditionalSlides: 1,
			watchSlidesProgress: true,
			watchOverflow: true,
			dynamicBullets: true,
			navigation: {
				prevEl: $sliderNode.parentElement.querySelector('.slider-arr--prev'),
				nextEl: $sliderNode.parentElement.querySelector('.slider-arr--next'),
			},
		});
	}
}

// shop place slider	
if (isElem('.shop-place-slider')) {
	const $sliderNodes = document.querySelectorAll('.shop-place-slider');
	
	for (let $sliderNode of $sliderNodes) {
		const swiper = new Swiper($sliderNode, {
			grabCursor: true,
			loopAdditionalSlides: 1,
			watchSlidesProgress: true,
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 10,
			watchOverflow: true,
			dynamicBullets: true,
			lazy: {
				loadPrevNext: true,
			},
			breakpoints: {
				[breakPoint.mobile + 1]: {
					spaceBetween: 24
				}
			},
			navigation: {
				prevEl: $sliderNode.parentElement.querySelector('.slider-arr--prev'),
				nextEl: $sliderNode.parentElement.querySelector('.slider-arr--next'),
			},
		});
	}
}

// slider stages
if (isElem('.stages-slider')) {
	const $sliderNode = document.querySelector('.stages-slider');
	const stageClass = 'js-slide-stage';

	const toPaginationItem = (className, content, i) => {
		content = content ? content : '';

		return `
			<div class="${className}">
				<div class="stage-num">${i}</div>
				${content}
			</div>
		`
	}

	let swiper = new Swiper($sliderNode, {

		autoHeight: true,
		spaceBetween: 50,
		effect: "fade",
		breakpoints: {
			300: {
				allowTouchMove: true,
			},
			[breakPoint.table + 1]: {
				effect: "fade",
				allowTouchMove: false,
			}
		},
		pagination: {
			el: $sliderNode.parentElement.querySelector('.slider-pagination'),
			clickable: true,
			renderBullet: function (index, className) {
				const stageNode = this.slides[index].querySelector(`.${stageClass}`);
				const contentStage = stageNode ? stageNode.outerHTML : null;

				return `
					${toPaginationItem(className, contentStage, index + 1)}
				`;
			},
		},
	});
}

// bTabs
if (isElem('.b-tabs')) {
	const tabs = document.querySelectorAll('.b-tabs');

	for (const tab of tabs) {

		bTabs(tab);
	}
}

// window modal
if (isElem('.v-modal')) {
	modalWindow();
}

/****** CUSTOM PLUGIN ******/

document.addEventListener("DOMContentLoaded", function( ){

});

(function() {
	function findIndex($obj, $item) {
		let index = null;

		$obj.each((i, item) => {
			if (item === $item[0]) {
				index = i;
			}
		});
		
		return index;
	}

	function initTabsItem($tabs, $tabsItemActive) {
		const dataTabs = $tabs.attr('data-tabs');

		if (dataTabs) {
			const $itemsTabs = $tabs.find('[data-tab]');

			$itemsTabs.each(function(i) {
				const $sectionsTabs = $(`[data-tabs="${dataTabs}, ${i}"]`);
				const index = findIndex($itemsTabs, $tabsItemActive);
				const $unloadedSrc = $sectionsTabs.find('[data-src]'); 

				if (index !== i) {
					$sectionsTabs.attr('hidden', true);
				} else {
					$(`[data-tabs="${dataTabs}, ${index}"]`).removeAttr('hidden');

					if ($unloadedSrc.length) {
						$unloadedSrc.each((i, item) => {
							const src = $(item).data('src');
							
							$(item).attr('src', src).removeAttr('data-src');
						});
					}
				}
			});
		}
	
		$tabs[0].dispatchEvent(new CustomEvent("tabs:change", {bubbles: true, cancelable: true}));
	}
	
	$('.tabs').each(function(i) {
		const $tabs = $(this);
		let $tabsItemActive = $tabs.find('[data-tab].active');
	
		if ($tabsItemActive.length !== 1) {
			const $tabsItems = $tabs.find('[data-tab]');
	
			$tabsItems.removeClass('active');
			$tabsItems.eq(0).addClass('active');
			$tabsItemActive = $tabsItems.eq(0);
		}
	
		initTabsItem($tabs, $tabsItemActive);

		this.dispatchEvent(new CustomEvent("tabs:init", {bubbles: true, cancelable: true}));
	});
	
	$(document).on('click', '[data-tab]', function() {
		const $tabsItem = $(this);
		const $tabs = $tabsItem.closest('[data-tabs]');
		const $tabsItems = $tabs.find('[data-tab]');
	
		$tabsItems.not($tabsItem).removeClass('active');
		$tabsItem.addClass('active');
		console.log($tabs[0]);
		initTabsItem($tabs, $tabsItem);
	});
}());

if (document.querySelector('.shop-place__togglers')) {
	const shopValueWrapEl = document.querySelector('.shop-place__value-wrap');
	const shopValueToggleEl = document.querySelector('.shop-place__value');
	const togglersParentEl = document.querySelector('.shop-place__togglers');

	setValue();

	document.addEventListener('tabs:change', function() {
		setValue();
	})

	document.addEventListener('click', function(e) {
		if (e.target.closest('.shop-place__value-wrap')) {
			const targetEl = e.target.closest('.shop-place__value-wrap');
			shopValueWrapEl.classList.toggle('active');
		} else if (!e.target.closest('.shop-place__boxes-side') 
			|| e.target.closest('.shop-place__togglers button')  ) {
				shopValueWrapEl.classList.remove('active');
		}
	});

	function setValue() {
		const activeBtn = togglersParentEl.querySelector('button.active');
		shopValueToggleEl.textContent = activeBtn.textContent;
	}
}

//Hamburger открытия мобильного меню
if (isElem('.header__hamburger')) {

	const hamburgerClassName = '.header__hamburger';
	const burgerBlockClassName = '.header__burger';
	const burgerInnerClassName = '.header__burger-inner';
	const $body = document.querySelector('body');
	const $header = document.querySelector('header');
	const $hamburger = document.querySelector(hamburgerClassName);
	const $burgerBlock = document.querySelector(burgerBlockClassName);
	const $burgerInner = document.querySelector(burgerInnerClassName);
	const mediaQuery = window.matchMedia(`(max-width: ${breakPoint.desctopMin}px)`);

	document.addEventListener('click', function (e) {
		if (e.target.closest(hamburgerClassName)) {
			const offsetRight = window.innerWidth - $body.offsetWidth;
			$hamburger.classList.toggle('active');
			$burgerBlock.style.top = $header.offsetHeight + 'px';

			let isActive = $hamburger.classList.contains('active');
			$burgerBlock.classList[isActive ? 'add' : 'remove']('open');
			$burgerInner.style.maxHeight = (isActive) ? `calc(100vh - ${$header.offsetHeight}px)` : '';
			$body.style.overflow = (isActive) ? 'hidden' : '';
		} else if ($burgerBlock.classList.contains('open') && !$burgerInner.contains(e.target)) {
			$hamburger.classList.remove('active');
			$burgerBlock.classList.remove('open');
			$body.style.overflow = '';
		}
	});

	mediaQuery.addListener(function (e) {
		if (!e.matches && $burgerBlock.classList.contains('open')) {
			$hamburger.classList.remove('active');
			$burgerBlock.classList.remove('open');
			$body.style.overflow = '';
			document.documentElement.style.paddingRight = '';
		}
	})
}

//fixed header
if (isElem('header')) {
	let fixedHeader = showHeader('header');

	function showHeader(el) {
		const $el = (typeof el === 'string') ? document.querySelector(el) : el

		const htmlEl = document.documentElement;
		let offsetTopEl = $el.getBoundingClientRect().height;

		window.addEventListener('scroll', function () {
			if (window.pageYOffset > offsetTopEl + 40) {
				show();
			} else if (window.pageYOffset < offsetTopEl / 2) {
				fixed();
			}
		}, {})

		window.addEventListener('resize', function () {
			offsetTopEl = $el.getBoundingClientRect().height;
		})

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
			show,
			fixed,
		}
	}
}

// под меню с гамбургером внутри основного меню
if (isElem('.menu__item--drop')) {
	const menuDrop = document.querySelector('.menu__item--drop');
	const toggle = menuDrop.querySelector('.menu__item-toggle');
	const linkbtn = menuDrop.querySelector('.menu__item-toggle ~ .menu__link');
	const itemMenuList = document.querySelectorAll('.menu__item:not(.menu__item--drop)');


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
	})
}

// v-up кнопка вверх
(function () {
	document.querySelector('body').insertAdjacentHTML('afterbegin', `
		<div class="v-up"></div>
	`);

	const btnDown = document.querySelector('.v-up');
	let vUpTriggerTimer = 0;

	vUp(btnDown, getScroledWindow);

	btnDown.addEventListener('click', function () {
		//backToTop(-45, 0);
		scrollingWindow.startAmimationScroll(1);
	});

	window.addEventListener('scroll', function () {
		clearTimeout(vUpTriggerTimer);
		vUpTriggerTimer = setTimeout(() => {
			vUp(btnDown, getScroledWindow);
		}, 200)
	});

	//пролистываине окна вверх при клике на кнопку
	function vUp(btn, scroled) {
		if (scroled() > (window.innerHeight / 2)) {
			btn.classList.add('active');
		} else if (scroled() < (window.innerHeight / 2) || btn.classList.contains('active')) {
			btn.classList.remove('active');
		}
	}

	//прокрутка окна вверх вниз
	function backToTop(interval, to) {
		if (window.pageYOffset <= to) return;

		window.scrollBy(0, interval);
		setTimeout(() => {
			backToTop(interval, to)
		}, 0);
	}

	//на сколько прокручено окно
	function getScroledWindow() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
}());

/***** FUNCTION PLUGIN ******/

//slinky menu
function broMenu(selector, options) {
	const $menu = typeof selector === "string" ? document.querySelector(selector) : selector;
	const $level_1 = $menu.lastElementChild;
	const $subMenuList = $menu.querySelectorAll('li > ul');
	const $subMenuLink = $menu.querySelectorAll('li > a');
	let activated;

	let defaulOptions = {
		arrow: `
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M12.219 2.281L10.78 3.72 18.062 11H2v2h16.063l-7.282 7.281 1.438 1.438 9-9 .687-.719-.687-.719z" />
			</svg>
		`
	}

	Object.assign(defaulOptions, options);

	let $activeUl;
	let translate = 0;

	const method = {
		init() {
			if (activated) return;

			$menu.classList.add('bro-menu');

			for (let submenu of $subMenuList) {
				const link = submenu.parentElement.querySelector('li > a');
				link.classList.add('bro-menu__next');
				submenu.classList.add('bro-menu__submenu');

				_addBtnBack(submenu, link);
				_addBtnNext(link);

				activated = true;
			}

			for (const $link of $subMenuLink) {
				$link.classList.add('active');
			}

			$menu.addEventListener('click', clickHandler);

			window.addEventListener('resize', _setHeighMenu);
		},

		destroy() {
			if (!activated) return;

			/* Удаляем обработчики событий */
			$menu.removeEventListener('click', clickHandler);
			window.removeEventListener('resize', _setHeighMenu);

			/* Удаляем классы плагина на ссылках и кнопку назад */
			for (const $link of $menu.querySelectorAll('.link')) {
				if ($link.classList.contains('bro-menu__back')) {
					$link.closest('li').remove();
					continue;
				}

				$link.classList.remove('link');
				$link.classList.remove('bro-menu__next');
			}

			/* Удаляем классы плагина на вложеных менюшках	*/
			for (const $subMenu of $menu.querySelectorAll('.bro-menu__submenu')) {
				$subMenu.classList.remove('bro-menu__submenu')
			}

			/* Удаляем стрелки в ссылках */
			for (const $arr of $menu.querySelectorAll('.bro-menu__arr')) {
				$arr.remove();
			}



			$activeUl && $activeUl.classList.remove('active');

			$menu.style.height = '';
			$level_1.style.transform = ``;
			translate = 0;
			activated = false;
		}
	}

	function clickHandler(e) {
		const target = e.target;

		if (target.closest('.bro-menu__next')) {
			e.preventDefault();

			const $nestedMenu = target.closest('li').querySelector('ul');

			if ($activeUl) $activeUl.classList.remove('active');

			$nestedMenu.classList.add('active');
			$nestedMenu.style.visibility = 'visible';
			translate -= 100;

			$level_1.style.transform = `translateX(${translate}%)`;
			$activeUl = $nestedMenu;

			scrollToVisible($activeUl);
			_setHeighMenu();
		}
		else if (target.closest('.bro-menu__back')) {
			e.preventDefault();

			const $upperMenu = $activeUl.parentElement.closest('ul');
			$upperMenu.classList.add('active');

			$activeUl.style.visibility = '';

			translate += 100;

			$level_1.style.transform = `translateX(${translate}%)`;
			$activeUl.classList.remove('active');
			$activeUl = $upperMenu;
			_setHeighMenu();
		}
	}

	function _addBtnNext(elem) {
		elem.classList.add('link')
		elem.insertAdjacentHTML('beforeend', `
			${defaulOptions.arrow}
		`);

		elem.lastElementChild.classList.add('bro-menu__arr');
	}

	function _addBtnBack(elem, link) {
		const href = link.getAttribute('href');

		elem.insertAdjacentHTML('afterbegin', `
			<li>
				<a class="bro-menu__back link" ${(href) ? `href=${href}` : ''}>
					${defaulOptions.arrow}
					${link.textContent}
				</a>
			</li>
		`);
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
		const offsetTop = elem.getBoundingClientRect().top;

		return offsetTop - window.pageYOffset;
	}

	function _getPos(el) {
		return el.getBoundingClientRect().top + window.pageYOffset;
	}

	function backToTop(interval, to) {
		if (window.pageYOffset <= to) return;

		window.scrollBy(0, interval);
		setTimeout(() => {
			backToTop(interval, to)
		}, 0);
	}

	return method;
}

// bTabs
function bTabs(target) {
	let _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
		_eventTabsShow,
		_showTab = function (tabsLinkTarget) {
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
		_switchTabTo = function (tabsLinkIndex) {
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

	_eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

	_elemTabs.addEventListener('click', function (e) {
		var tabsLinkTarget = e.target;
		// завершаем выполнение функции, если кликнули не по ссылке
		if (!tabsLinkTarget.classList.contains('b-tabs__link')) return;

		e.preventDefault();
		_showTab(tabsLinkTarget);
	});

	return {
		showTab: function (target) {
			_showTab(target);
		},
		switchTabTo: function (index) {
			_switchTabTo(index);
		}
	}

};

//	modal window
function modalWindow() {
	const body = document.querySelector('body'),
		modalEls = document.querySelectorAll('.v-modal'),
		btnOpenClassName = "js-openModal",
		btnCloseClassName = 'js-closeModal';

	document.addEventListener('click', function (e) {
		if (e.target.closest(`.${btnOpenClassName}`) && e.target.dataset.typeModal) {
			e.preventDefault();
			const typeModal = e.target.dataset['typeModal'];

			for (let $modal of modalEls) {

				if ($modal.dataset && $modal.dataset['typeModal'] === typeModal) {
					$modal.classList.add('active');

					e.preventDefault();
					const scrollBarWidth = window.innerWidth - body.offsetWidth;
					body.style.overflow = 'hidden';
					body.style.paddingRight = scrollBarWidth + "px";
					break;
				}
			}
		}
		else if (e.target.classList.contains('v-modal__inner') || e.target.closest(`.${btnCloseClassName}`)) {
			e.target.closest('.v-modal').classList.remove('active');
			body.style.overflow = '';
			body.style.paddingRight = "";
		}
	});
}

// анимация скрола окна браузера
function scrollWindow() {
	let scrollAnimationId;
	let currentScroll = window.pageYOffset;
	let scrolls = false;

	function startAmimationScroll(newScrollY) {
		if (!scrolls) {
			currentScroll = window.pageYOffset;
			scrolls = true;
		}

		const deltaScroll = (newScrollY - currentScroll);

		currentScroll += deltaScroll * 0.15;
		window.scrollTo(0, currentScroll);

		if (Math.abs(deltaScroll) > 5) {
			scrollAnimationId = window.requestAnimationFrame(function () {
				startAmimationScroll(newScrollY);
			})
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
		startAmimationScroll,
		stopAnimationScroll,
	}
}

function gallery(selector) {
	const $gallery = (typeof selector === 'string') ? document.querySelector(selector) : selector;

	const $thumbsSlider = $gallery.querySelector('.gallery__thumbs'),
		$fullSlider = $gallery.querySelector('.gallery__slider');


	/* thumbs */
	let galleryThumbs = new Swiper($thumbsSlider, {
		spaceBetween: 20,
		slidesPerView: "auto",
		watchSlidesProgress: true,
		freeMode: {
			enabled: true,
			sticky: true,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false
		},
		mousewheel: true,
	});

	let galleryFull = new Swiper($fullSlider, {
		spaceBetween: 10,
		slidesPerView: "auto",
		// autoplay: {
		// 	delay: 5000
		// },
		navigation: {
			prevEl: $fullSlider.parentElement.querySelector('.slider-arr--prev'),
			nextEl: $fullSlider.parentElement.querySelector('.slider-arr--next'),
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});
}

//slider 
function slider(selector, option = {}) {
	const $slider = (typeof selector === 'string') ? document.querySelector(selector) : selector;
	const $sliderWrap = $slider.closest('.slider-wrap');

	const setings = {
		navigation: $sliderWrap.querySelector('.slider-nav'),
		pagination: $sliderWrap.querySelector('.slider-pagination'),
		options: {
			watchOverflow: true,
			...option,
		}
	}

	Object.assign(setings.options, {
		watchSlidesVisibility: true,
		watchOverflow: true,
		autoplay: (+$slider.dataset.swiperAutoplay > 0) ? {
			delay: +$slider.dataset.swiperAutoplay,
			pauseOnMouseEnter: true,
			disableOnInteraction: false,
		} : '',
		navigation: setings.navigation ? {
			nextEl: $sliderWrap.querySelector('.slider-arr--next'),
			prevEl: $sliderWrap.querySelector('.slider-arr--prev'),
		} : '',
		pagination: setings.pagination ? {
			el: $sliderWrap.querySelector('.slider-pagination'),
			clickable: true,
		} : '',
	})

	return new Swiper($slider, setings.options);
}

/****** UTILS ******/

function isElem(selector) {
	return (document.querySelector(selector)) ? true : false;
}