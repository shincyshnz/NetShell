(function () {

    'use strict';

    const productsLink = document.querySelector('.main-product-link');
    const megaMenu = document.querySelector('.mega-menu');
    const productMegaMenuAll = document.querySelectorAll('.product-mega-menu');
    const productCategory = document.querySelector('.product-category');
    const productCategoryLists = document.querySelectorAll('.product-category-li');
    const dropdownElementList = Array.from(document.querySelectorAll('.dropdown'));
    let clicked, productMegaMenu;

    const removeActive = function () {
        productCategoryLists.forEach(li => {
            li.classList.remove('active');
        });
        productMegaMenuAll.forEach(menu => {
            menu.classList.remove('hover');
        });
    };

    // const deactivateClick = function (element) {
    //     element.addEventListener('click', function (e) {
    //         e.stopPropagation();
    //         e.preventDefault();
    //     });
    // };

    const categoryLinkActivate = function (clicked, productMegaMenu) {
        //Guard clause
        if (!clicked) return;

        // toggle active class
        if (!clicked.className.includes('active')) {

            // Remove active classes
            removeActive();

            // Activate li
            clicked.classList.add('active');

            // Show mega-menu corresponding to active li
            productMegaMenu.classList.add('hover');
            if (window.innerWidth > 992) {
                const megaMenuActive = document.querySelector('.product-mega-menu.hover');
                const height = Math.max(productCategory.offsetHeight, megaMenuActive.offsetHeight);

                clicked.closest('.product-category-contain').style.height = `${height}px`;
            }
        } else {
            // only in mobile devices
            if (window.innerWidth <= 992) {
                clicked.classList.remove('active');
                productMegaMenu.classList.remove('hover');
            }
        }
    }

    productsLink.addEventListener('click', function () {
        removeActive();
        megaMenu.classList.toggle('display');
    });

    productCategory.addEventListener('click', function (e) {
        clicked = e.target.closest('.product-category-li');
        productMegaMenu = e.target.nextElementSibling;
        categoryLinkActivate(clicked, productMegaMenu);
    });

    /* ---------------- Desktop only ------------------------------- */
    if (window.innerWidth > 992) {

        //disable click event and activate hover
        dropdownElementList.forEach(function (dropdown) {
            // deactivateClick(dropdown);

            dropdown.addEventListener('mouseenter', function () {
                dropdown.classList.add('show');
                dropdown.querySelector('.dropdown-menu').classList.add('show');
            });
            dropdown.addEventListener('mouseleave', function () {
                dropdown.classList.remove('show');
                dropdown.querySelector('.dropdown-menu').classList.remove('show');
            });
        });

        // deactivateClick(productsLink);
        // deactivateClick(productCategory);

        productsLink.addEventListener('mouseenter', function (e) {
            removeActive();
            megaMenu.classList.add('display');

            // Make the first category link active (only for large devices)
            productCategoryLists.item(0).classList.add('active');
            productCategoryLists.item(0).lastElementChild.classList.add('hover');
        });

        megaMenu.addEventListener('mouseleave', function () {
            megaMenu.classList.remove('display');
        });

        productCategoryLists.forEach(li => {
            li.addEventListener('mouseenter', function (e) {
                clicked = e.target;
                productMegaMenu = e.target.lastElementChild;
                categoryLinkActivate(clicked, productMegaMenu);
            });
        })
    }

    console.log(document.querySelectorAll(".product-mega-menu a"));
    document.querySelectorAll(".product-mega-menu a").forEach(node => {
        console.log(node.firstChild.data);
        node.firstChild.addEventListener('click', (e) => {
            console.log(e.target);
        })
    })
})();