
window.onload = function () {

	// код на случай если будет 10 слайдов
	const slidersCollection = document.querySelectorAll('.slider-rooms__slide')
	const dotts = document.querySelector('.slider-rooms__dotts')
	if (slidersCollection.length > 15) {
		dotts.style.bottom = "15px"
	}
	//========================================
	// код для wordpress (9990000000 => 8-999-000-00-00)
	const mobilePhoneNumber = document.querySelectorAll('.phone-mobile')
	mobilePhoneNumber.forEach((number) => {
		const arrNumbers = number.textContent.split('')
		arrNumbers.splice(0, 0, "8-")
		arrNumbers.forEach((item, index) => {
			if (index === 4 || index === 8 || index === 10) {
				if(index === 10) {
					index = index + 1
				}
				arrNumbers.splice(index, 0, "-")
			}
		})
		const numberReady = arrNumbers.join('')
		number.innerHTML = numberReady
	})

	const homePhoneNumber = document.querySelectorAll('.phone-home')
	homePhoneNumber.forEach((number) => {
		const arrNumbers = number.textContent.split('')
		arrNumbers.splice(0, 0, "8 ")
		arrNumbers.splice(1, 0, "(")
		arrNumbers.splice(5, 0, ") ")
		arrNumbers.splice(9, 0, "-")
		arrNumbers.splice(12, 0, "-")
		const numberReady = arrNumbers.join('')
		number.innerHTML = numberReady
	})
	//========================================


	document.addEventListener("click", documentActions);

	// Actions (делегирование события click)
	function documentActions(e) {
		const targetElement = e.target;
		// if(window.innerWidth > 768 && isMobile.any()) {
		if(window.innerWidth > 768 || isMobile.any()) {
			if(targetElement.classList.contains('menu__arrow')) {
				targetElement.closest('.menu__item').classList.toggle('_hover')
			}
			if(!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
				_removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover")
			}
		}
		if(isMobile.any()) {
			if(targetElement.classList.contains('price-table__questions')) {
				targetElement.closest('.price-table__th-icon').classList.toggle('_hover')
		 	}
			if(!targetElement.closest('.price-table__th-icon') && document.querySelectorAll('.price-table__th-icon._hover').length > 0) {
				_removeClasses(document.querySelectorAll('.price-table__th-icon._hover'), "_hover")
		 	}
			if(targetElement.closest('.price-table__th-icon') && document.querySelectorAll('.price-table__th-icon._hover').length > 1 && targetElement.classList.contains('price-table__questions')) {
				_removeClasses(document.querySelectorAll('.price-table__th-icon._hover'), "_hover")
				targetElement.closest('.price-table__th-icon').classList.toggle('_hover')
		 	}
		}
 }

	// Header
	const headerElement = document.querySelector('.header__wrapper')
	const menuElement = document.querySelector('.main-menu')

	const callback = function (entries, observer) {
		if (entries[0].isIntersecting) {
				menuElement.classList.remove('_scroll')
		} else {
				menuElement.classList.add('_scroll') 
		}
	}

	const menuObserver = new IntersectionObserver(callback);
	menuObserver.observe(headerElement);


// Прокрутка при клике	
	// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
	const menuLinks = document.querySelectorAll('.about__text-link[data-goto]');
	if (menuLinks.length > 0) {
		menuLinks.forEach(menuLink => {
			menuLink.addEventListener("click", onMenuLinkClick);
		});

		function onMenuLinkClick(e) {
			const menuLink = e.target;
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				const gotoBlock = document.querySelector(menuLink.dataset.goto);
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

				if (iconMenu.classList.contains('_active')) {
					document.body.classList.remove('_lock');
					iconMenu.classList.remove('_active');
					menuBody.classList.remove('_active');
				}

				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth"
				});
				e.preventDefault();
			}
		}
	}
}

