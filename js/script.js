"use strict";

window.addEventListener("DOMContentLoaded", () => {
    //*<Fixed sidebar>=================================================================================================

    const sidebarFixed = document.querySelector(".top5-sidebar");

    window.addEventListener("scroll", (e) => {
        if (document.documentElement.scrollTop >= 2700 && document.documentElement.scrollTop < 17400) {
            sidebarFixed.classList.add("top5-sidebar_fixed");
        } else {
            sidebarFixed.classList.remove("top5-sidebar_fixed");
        }
    });

    //*</Fixed sidebar>=================================================================================================

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

    //*<Cookie>=================================================================================================

    const cookieBtn = $(".cookie__btn"),
        cookie = $(".cookie");

    cookieBtn.click(function () {
        cookie.fadeOut();
    });

    //*</Cookie>=================================================================================================

    //*<Change mainscreen text>=================================================================================================

    if ($(window).width() < 768) {
        const mainscreenChangingText = $(".mainscreen__text [data-mobile=changingtext]");
        mainscreenChangingText.text(
            "Wir von ChefOnlineCasino sind Experten im Bereich Glücksspiel in der Schweiz. Wir nutzen unsere Erfahrung und unser Fachwissen, um Ihnen die top online Casinos in der Schweiz 2022 empfehlen zu können. Dazu nutzen wir bestimmte Kriterien, um die Anbieter zu bewerten und schlechte Anbieter auszusortieren. "
        );
    }

    //*</Change mainscreen text>=================================================================================================

    //*<Toggle mainscreen text>=================================================================================================

    const mainscreenMore = $(".mainscreen__more"),
        mainscreenHidden = $(".mainscreen__text [data-mobile=hidden]"),
        mainscreenMoreText = $("[data-mainscreen-more=text]"),
        mainscreenArrow = $(".mainscreen__arrow");

    $(mainscreenMore).click(function () {
        mainscreenHidden.slideToggle(300);
        $(this).toggleClass("open");
        $(mainscreenArrow).toggleClass("open");
        if ($(mainscreenMore).hasClass("open")) {
            mainscreenMoreText.text("Verstecken");
        } else {
            mainscreenMoreText.text("Mehr anzeigen");
        }
    });

    //*</Toggle mainscreen text>=================================================================================================

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
