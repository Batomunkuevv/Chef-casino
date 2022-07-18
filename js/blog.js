"use strict";

window.addEventListener("DOMContentLoaded", () => {
    //*<Post hover>=================================================================================================

    const postsTitles = document.querySelectorAll(".post__title"),
        postBodies = document.querySelectorAll(".post__body");

    postsTitles.forEach((item, i) => {
        item.addEventListener("mouseover", (e) => {
            postBodies[i].classList.add("hover");
        });
        item.addEventListener("mouseleave", (e) => {
            postBodies[i].classList.remove("hover");
        });
    });

    //*</Post hover>=================================================================================================

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
        sidebar = document.querySelector(".sidebar"),
        menu = document.querySelector(".menu__list"),
        top5 = document.querySelector(".top5"),
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
});
