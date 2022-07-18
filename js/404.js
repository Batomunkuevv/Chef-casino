"use strict";

window.addEventListener("DOMContentLoaded", () => {
    //*<Language Sub list>=================================================================================================

    const languageChosen = document.querySelector(".language__chosen"),
        subLanguage = document.querySelector(".sub-language__list"),
        languageArrow = document.querySelector(".language__arrow");

    languageChosen.addEventListener("click", (e) => {
        languageArrow.classList.toggle("open");
        languageChosen.classList.toggle("open");
        subLanguage.classList.toggle("open");
    });

    //*</Langua>=================================================================================================

    //*<Menu>=================================================================================================

    if (window.screen.width > 1200) {
        const linksWithSubMenu = document.querySelectorAll("[data-submenus]"),
            subMenuLists = document.querySelectorAll(".sub-menu__list"),
            menuArrow = document.querySelectorAll(".menu__arrow"),
            menuDotts = document.querySelector(".more__dotts"),
            moreList = document.querySelector(".more__list");

        linksWithSubMenu.forEach((item, i) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                if (!item.classList.contains("menu__more")) {
                    menuArrow[i].classList.toggle("open");
                }
                item.classList.toggle("open");
                subMenuLists[i].classList.toggle("open");
                if (menuDotts.classList.contains("open")) {
                    menuDotts.classList.remove("open");
                    moreList.classList.remove("open");
                }
                if (item.classList.contains("open")) {
                    linksWithSubMenu.forEach((link, i) => {
                        if (link != item) {
                            if (link.classList.contains("open") && !item.classList.contains("menu__more")) {
                                link.classList.remove("open");
                                subMenuLists[i].classList.remove("open");
                                menuArrow[i].classList.toggle("open");
                            }
                        }
                    });
                }
            });
        });
    }

    //*</Menu>=================================================================================================

    //*<More>=================================================================================================

    const menuDotts = document.querySelector(".more__dotts"),
        moreList = document.querySelector(".more__list"),
        linksWithSubMenu = document.querySelectorAll("[data-submenus]"),
        subMenuLists = document.querySelectorAll(".sub-menu__list"),
        menuArrow = document.querySelectorAll(".menu__arrow");

    menuDotts.addEventListener("click", (e) => {
        e.target.classList.toggle("open");
        moreList.classList.toggle("open");
        linksWithSubMenu.forEach((item, i) => {
            item.classList.remove("open");
            menuArrow[i].classList.remove("open");
            subMenuLists[i].classList.remove("open");
        });
    });

    //*</More>=================================================================================================

    //*<Header>=================================================================================================

    const header = document.querySelector("header");

    function addScroll() {
        header.classList.add("header-scroll");
    }

    function removeScroll() {
        header.classList.remove("header-scroll");
    }

    window.addEventListener("scroll", (e) => {
        if (document.documentElement.scrollTop >= 1) {
            addScroll();
        } else {
            removeScroll();
        }
    });

    //*</Header>=================================================================================================

    //*<Navbar>=================================================================================================

    const sidebarOpen = document.querySelector('[data-navbar="sidebar"]'),
        menuOpen = document.querySelector('[data-navbar="menu"]'),
        top5Open = document.querySelector('[data-navbar="top5"]'),
        sidebar = document.querySelector(".sidebar_404"),
        menu = document.querySelector(".menu__list"),
        top5 = document.querySelector(".top5"),
        closeNavbar = document.querySelector(".close-navbar"),
        clostNavbarText = closeNavbar.querySelector(".close-navbar__text"),
        closeNavbarCross = closeNavbar.querySelector(".close-navbar__cross");
    console.log(sidebar);
    function openItemNavbar(item) {
        item.classList.add("open");
        closeNavbar.classList.add("open");
        document.body.classList.add("lock");
    }

    function closeItemNavbar(item) {
        if (item.classList.contains("open")) {
            item.classList.remove("open");
        }
        document.body.classList.remove("lock");
    }

    closeNavbarCross.addEventListener("click", (e) => {
        closeNavbar.classList.remove("open");
        closeItemNavbar(sidebar);
        closeItemNavbar(menu);
        closeItemNavbar(top5);
    });

    sidebarOpen.addEventListener("click", (e) => {
        openItemNavbar(sidebar);
        clostNavbarText.textContent = "Seitenleiste";
    });

    menuOpen.addEventListener("click", (e) => {
        openItemNavbar(menu);
        clostNavbarText.textContent = "Speisekarte";
    });

    top5Open.addEventListener("click", (e) => {
        openItemNavbar(top5);
        clostNavbarText.textContent = "Top Casinos";
    });

    //*</Navbar>=================================================================================================
});

$(document).ready(function () {
    //*<Online sublist>=================================================================================================

    const onlineTriggers = $(".online__trigger"),
        onlineSublists = $(".online__sublist"),
        onlineArrows = $(".online__arrow");

    $(onlineTriggers).each(function (i, item) {
        $(item).click(function () {
            $(onlineArrows[i]).toggleClass("open");
            $(this).toggleClass("open");
            $(onlineSublists[i]).toggleClass("open").slideToggle(300);
        });
    });

    //*</Online sublist>=================================================================================================

    //*<More sublist>=================================================================================================

    const moreTriggers = $(".more__trigger");

    $(moreTriggers).each(function (i, item) {
        $(item).click(function (event) {
            $(this).toggleClass(".open").next().slideToggle(300);
        });
    });

    //*</More sublist>=================================================================================================

    //*<Search>=================================================================================================

    const searchBtn = $(".search__btn"),
        searchbar = $(".searchbar"),
        searchbarClose = $(".searchbar__close");

    if ($(window).width() < 768) {
        $(searchBtn).click(function (e) {
            e.preventDefault();
            searchbar.fadeIn();
        });

        $(searchbarClose).click(function () {
            searchbar.fadeOut();
        });
    }

    //*</Search>=================================================================================================

    //*<Menu>=================================================================================================

    if ($(window).width() < 1200) {
        const linksWithSubMenu = $("[data-submenus]"),
            subMenuLists = $(".sub-menu__list"),
            menuArrow = $(".menu__arrow");
        $(linksWithSubMenu).each(function (i, item) {
            $(item).click(function (e) {
                e.preventDefault();
                $(item).toggleClass("open");
                $(item).parent().toggleClass("open");
                // $(subMenuLists[i]).toggleClass("open");
                $(subMenuLists[i]).slideToggle(300);
                if ($(subMenuLists[i]).hasClass("top10-submenu")) {
                    $(subMenuLists[i]).css("display", "flex");
                }
            });
        });
    }
    //*</Menu>=================================================================================================
});
