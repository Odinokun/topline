!function(){return function o(e,n,t){function r(i,s){if(!n[i]){if(!e[i]){var u="function"==typeof require&&require;if(!s&&u)return u(i,!0);if(c)return c(i,!0);var p=new Error("Cannot find module '"+i+"'");throw p.code="MODULE_NOT_FOUND",p}var l=n[i]={exports:{}};e[i][0].call(l.exports,function(o){return r(e[i][1][o]||o)},l,l.exports,o,e,n,t)}return n[i].exports}for(var c="function"==typeof require&&require,i=0;i<t.length;i++)r(t[i]);return r}}()({1:[function(o,e,n){$(function(){o("./modules/svg4everybody")(),o("./modules/noJs")(),o("./modules/accordion")(),o("./modules/scroll2ancor")(),o("./modules/popup")()})},{"./modules/accordion":2,"./modules/noJs":3,"./modules/popup":4,"./modules/scroll2ancor":5,"./modules/svg4everybody":6}],2:[function(o,e,n){e.exports=function(){$(".how-accordion-top").on("click",function(){$(this).toggleClass("active"),$(this).siblings(".how-accordion__body").slideToggle()}),$(".teacher-sec__footer-open").on("click",function(){$(".teacher-sec__footer").addClass("active"),$(".teacher-sec__item-hidden").slideDown()}),$(".teacher-sec__footer-close").on("click",function(){$(".teacher-sec__footer").removeClass("active"),$(".teacher-sec__item-hidden").slideUp()})}},{}],3:[function(o,e,n){e.exports=function(){$(".main-wrap").removeClass("no-js")}},{}],4:[function(o,e,n){e.exports=function(){$(".popup-open").on("click",function(o){o.preventDefault();let e="#"+$(this).data("popup");$("#popup__layer").fadeIn(),$(e).addClass("active")}),$("#popup__layer, .popup__close, .popup__btn").on("click",function(){$("#popup__layer").fadeOut(),$(".popup").removeClass("active")})}},{}],5:[function(o,e,n){e.exports=function(){$(function(){return $(".scroll-link[href*=\\#]").on("click",function(o){var e=$(this);$("html, body").stop().animate({scrollTop:$(e.attr("href")).offset().top-0+"px"},1e3)}),!1})}},{}],6:[function(o,e,n){e.exports=function(){$(function(){svg4everybody()})}},{}]},{},[1]);