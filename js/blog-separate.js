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
            menuArrow = document.querySelectorAll(".menu__arrow");
        linksWithSubMenu.forEach((item, i) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                if (!item.classList.contains("menu__more")) {
                    menuArrow[i].classList.toggle("open");
                }
                item.classList.toggle("open");
                subMenuLists[i].classList.toggle("open");
            });
        });
    }

    //*</Menu>=================================================================================================

    //*<More>=================================================================================================

    const menuDotts = document.querySelector(".more__dotts"),
        moreList = document.querySelector(".more__list");

    menuDotts.addEventListener("click", (e) => {
        e.target.classList.toggle("open");
        moreList.classList.toggle("open");
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
        navbarContentOpen = document.querySelector('[data-navbar="list"]'),
        sidebar = document.querySelector(".sidebar"),
        menu = document.querySelector(".menu__list"),
        top5 = document.querySelector(".top5"),
        navbarContent = document.querySelector(".navbar-content"),
        closeNavbar = document.querySelector(".close-navbar"),
        clostNavbarText = closeNavbar.querySelector(".close-navbar__text"),
        closeNavbarCross = closeNavbar.querySelector(".close-navbar__cross");

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
        closeItemNavbar(navbarContent);
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

    navbarContentOpen.addEventListener("click", (e) => {
        openItemNavbar(navbarContent);
        clostNavbarText.textContent = "Inhaltsverzeichnis";
    });

    //*</Navbar>=================================================================================================
});

$(document).ready(function () {
    //*<Content spoiler>=================================================================================================

    const contentSpoiler = $(".spoiler-content__header"),
        contentSpoilerList = $(".spoiler-content__list"),
        contentSpoilerArrow = $(".spoiler-content__arrow");

    contentSpoiler.click(function () {
        contentSpoilerArrow.toggleClass("open");
        contentSpoilerList.toggleClass("open").slideToggle(300);
    });

    //*</Content spoiler>=================================================================================================

    //*<Navbar Content spoiler>=================================================================================================

    const navbarContentSpoiler = $(".spoiler-navbar-content__header"),
        navbarContentSpoilerList = $(".spoiler-navbar-content__list"),
        navbarContentSpoilerArrow = $(".spoiler-navbar-content__arrow");

    navbarContentSpoiler.click(function () {
        navbarContentSpoilerArrow.toggleClass("open");
        navbarContentSpoilerList.toggleClass("open").slideToggle(300);
    });

    //*</Navbar spoiler>=================================================================================================

    //*<Spoilers>=================================================================================================

    const spoilersHeaders = $(".spoiler-faq__header"),
        spoilersArrows = $(".spoiler-faq__arrow");
    $(spoilersHeaders).each(function (i, item) {
        $(item).click(function () {
            $(spoilersArrows[i]).toggleClass("open");
            $(this).toggleClass("open").next().slideToggle(300);
        });
    });

    //*</Spoilers>=================================================================================================

    //*<Arrow up>=================================================================================================

    const arrowUp = $(".arrowup");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            arrowUp.fadeIn();
            arrowUp.css("display", "flex");
        } else {
            arrowUp.fadeOut();
        }
    });

    arrowUp.click(function () {
        $("html,body").animate(
            {
                scrollTop: 0,
            },
            1000
        );
    });

    //*</Arrow>=================================================================================================

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

    //*<Offer>=================================================================================================

    const offer = $(".offer"),
        offerClose = $(".offer__close");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            if ($(offer).hasClass("close")) {
            } else {
                $(offer).fadeIn();
            }
        }
    });

    $(offerClose).click(function () {
        $(offer).fadeOut();
        $(offer).addClass("close");
    });

    //*</Offer>=================================================================================================
});
