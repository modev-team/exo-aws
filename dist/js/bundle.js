!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(){i(this,t),this.mobileButton=document.querySelector(".mobile-hamburger-button-container"),this.mobileNav=document.getElementById("header-navigation"),this.bindButtons()}return o(t,[{key:"toggleNavigation",value:function(){this.mobileButton.setAttribute("data-state","active"===this.mobileButton.getAttribute("data-state")?"inactive":"active"),this.mobileNav.setAttribute("data-state","active"===this.mobileNav.getAttribute("data-state")?"inactive":"active")}},{key:"bindButtons",value:function(){this.mobileButton.addEventListener("click",this.toggleNavigation.bind(this))}}]),t}();e.default=r},function(t,e,n){"use strict";var i=n(0),o=function(t){return t&&t.__esModule?t:{default:t}}(i);!function(){document.querySelector(".mobile-hamburger-button-container")&&new o.default}()}]);