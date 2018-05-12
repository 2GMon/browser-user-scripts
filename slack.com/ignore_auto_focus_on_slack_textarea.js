"use strict";
// ==UserScript==
// @name        Ignore focus on slack textarea
// @description Slackのタブに切り替えた時に、チャット入力テキストエリアにフォーカスが当たることを防ぐ
// @match       https://*.slack.com/*
// @version     1
// @grant       none
// @run-at      document-end
// ==/UserScript==
window.onfocus = function() {
  let elem = document.activeElement;
  if (elem.tagName == "DIV" && elem.className.indexOf("ql-editor") == 0) {
    let buttonElem = document.getElementById("primary_file_button");
    buttonElem.focus();
  }
};
