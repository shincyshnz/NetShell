(function () {

    'use strict';

    // Enable hover on desktop only
    if (window.innerWidth > 992) {
        const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown'));
        const dropendElementList = [].slice.call(document.querySelectorAll('.dropend'));
        // For each dropdown menu, disable click event and add event listener for mouse enter and mouse leave
        dropdownElementList.forEach(function (dropdown) {
            dropdown.addEventListener('click', function (event) {
                event.stopPropagation();
                event.preventDefault();
            });
            dropdown.addEventListener('mouseenter', function () {
                dropdown.classList.add('show');
                dropdown.querySelector('.dropdown-menu').classList.add('show');
            });
            dropdown.addEventListener('mouseleave', function () {
                dropdown.classList.remove('show');
                dropdown.querySelector('.dropdown-menu').classList.remove('show');
            });
        });
        // For each dropend menu, disable click event and add event listener for mouse enter and mouse leave
        dropendElementList.forEach(function (dropend) {
            dropend.addEventListener('click', function (event) {
                event.stopPropagation();
                event.preventDefault();
            });
            dropend.addEventListener('mouseenter', function () {
                dropend.classList.add('show');
                dropend.querySelector('.dropdown-menu').classList.add('show');
            });
            dropend.addEventListener('mouseleave', function () {
                dropend.classList.remove('show');
                dropend.querySelector('.dropdown-menu').classList.remove('show');
            });
        });
    }


    /* -----------------------Dynamically adjusting height of Products Dropdown Megamenu------------------------------------ */
    const headerNavListItems = document.querySelectorAll('#header-main > nav > ul > li');
    const categoryListItems = document.querySelectorAll('.product-category > li');

    function changeHeightContainer(item) {
        const megaMenuHeight = document.querySelector('.product-category > li .product-mega-menu').offsetHeight;
        const containerHeight = item.closest('.product-category-contain').offsetHeight;
        if (megaMenuHeight > containerHeight) {
            item.closest('.product-category-contain').style.height = megaMenuHeight + 'px';
        } else {
            item.closest('.product-category-contain').style.height = containerHeight + 'px';
        }
    }

    function changeHeightList(item) {
        const activeListItem = document.querySelector('.product-category > li.active');
        if (activeListItem) {
            activeListItem.classList.remove('active');
            activeListItem.querySelector('.product-mega-menu.hover').classList.remove('hover');
            activeListItem.closest('.product-category-contain').removeAttribute('style');
        }
        item.classList.add('active');
        item.querySelector('.product-mega-menu').classList.add('hover');
        const megaMenuHeight = item.querySelector('.product-mega-menu.hover').offsetHeight;
        const containerHeight = item.closest('.product-category-contain').offsetHeight;
        if (megaMenuHeight > containerHeight) {
            item.closest('.product-category-contain').style.height = megaMenuHeight + 'px';
            // item.querySelector('.product-menu > ul').style.height = megaMenuHeight + 'px';
        } else {
            item.closest('.product-category-contain').style.height = containerHeight + 'px';
            // item.querySelector('.product-menu > ul').style.height = containerHeight + 'px';
        }
    }

    headerNavListItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            changeHeightContainer(item);
        });

        if (window.innerWidth < 600) {
            item.addEventListener('mouseenter', function (event) {
                event.stopPropagation();
                event.preventDefault();
            });
            item.addEventListener('click', () => {
                changeHeightContainer(item);
            });
        }

    });

    categoryListItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            changeHeightList(item);
        });

        if (window.innerWidth < 600) {
            item.addEventListener('mouseenter', function (event) {
                event.stopPropagation();
                event.preventDefault();
            });
            item.addEventListener('click', () => {
                changeHeightList(item);
            });
        }
    });

    window.addEventListener("load", function () {
        let activeMegaMenuHeight = document.querySelector(".product-category>li.active .product-mega-menu.hover").offsetHeight;
        let containerHeight = document.querySelector(".product-category>li").closest(".product-category-contain").offsetHeight;

        if (activeMegaMenuHeight > containerHeight) {
            document.querySelector(".product-category>li").closest(".product-category-contain").style.height = activeMegaMenuHeight + "px";
        } else {
            document.querySelector(".product-category>li").closest(".product-category-contain").style.height = containerHeight + "px";
        }
    });

    /* -----------------------// End Dynamically adjusting height of Products Dropdown Megamenu //------------------------------------ */

})();
