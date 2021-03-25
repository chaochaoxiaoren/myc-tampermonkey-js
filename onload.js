// ==UserScript==
// @name         屏蔽需要触发事件
// @namespace    myc
// @version      0.1
// @description  屏蔽52听书网站音频播放页必须被focus情况
// @author       myc
// @match        https://www.ting22.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.addEventListener('onload',function(){
      console.log('window load');
      window.focus();
    })
})();