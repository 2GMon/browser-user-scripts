// ==UserScript==
// @name     bukkenfan-move-entry-data-to-bellow-title
// @description    物件情報をタイトルのすぐ下に移動させます
// @match          https://bukkenfan.jp/e/*
// @version  1
// @grant    none
// @run-at         document-end
// ==/UserScript==
var entry_data = document.querySelector("div.entry-data");
var parent_elem = document.querySelector("section.portal-entry-contents");
var main_elem = document.querySelector("main.entry-desc_text");
parent_elem.insertBefore(entry_data, main_elem);
