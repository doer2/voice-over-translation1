// ==UserScript==
// @name [VOT Cloudflare] - Voice Over Translation
// @name:de [VOT Cloudflare] - Voice-Over-Video-Übersetzung
// @name:es [VOT Cloudflare] - Traducción de vídeo en off
// @name:fr [VOT Cloudflare] - Traduction vidéo voix-off
// @name:it [VOT Cloudflare] - Traduzione Video fuori campo
// @name:ru [VOT Cloudflare] - Закадровый перевод видео
// @name:zh [VOT Cloudflare] - 画外音视频翻译
// @description A small extension that adds a Yandex Browser video translation to other browsers
// @description:de Eine kleine Erweiterung, die eine Voice-over-Übersetzung von Videos aus dem Yandex-Browser zu anderen Browsern hinzufügt
// @description:es Una pequeña extensión que agrega una traducción de voz en off de un video de Yandex Browser a otros navegadores
// @description:fr Une petite extension qui ajoute la traduction vocale de la vidéo du Navigateur Yandex à d'autres navigateurs
// @description:it Una piccola estensione che aggiunge la traduzione vocale del video dal browser Yandex ad altri browser
// @description:ru Небольшое расширение, которое добавляет закадровый перевод видео из Яндекс Браузера в другие браузеры
// @description:zh 一个小扩展，它增加了视频从Yandex浏览器到其他浏览器的画外音翻译
// @version 1.3.3
// @author sodapng, mynovelhost, Toil, SashaXser
// @supportURL https://github.com/ilyhalight/voice-over-translation/issues
// @match *://*.youtube.com/*
// @match *://*.youtube-nocookie.com/*
// @match *://*.twitch.tv/*
// @match *://*.xvideos.com/*
// @match *://*.pornhub.com/*
// @match *://*.vk.com/*
// @match *://*.vk.ru/*
// @match *://invidious.snopyta.org/*
// @match *://invidious.kavin.rocks/*
// @match *://vid.puffyan.us/*
// @match *://invidious.namazso.eu/*
// @match *://inv.riverside.rocks/*
// @match *://yt.artemislena.eu/*
// @match *://invidious.flokinet.to/*
// @match *://invidious.esmailelbob.xyz/*
// @match *://invidious.nerdvpn.de/*
// @match *://invidious.slipfox.xyz/*
// @match *://invidio.xamh.de/*
// @match *://invidious.dhusch.de/*
// @match *://*.piped.video/*
// @match *://piped.tokhmi.xyz/*
// @match *://piped.moomoo.me/*
// @match *://piped.syncpundit.io/*
// @match *://piped.mha.fi/*
// @match *://watch.whatever.social/*
// @match *://piped.garudalinux.org/*
// @match *://efy.piped.pages.dev/*
// @match *://watch.leptons.xyz/*
// @match *://piped.lunar.icu/*
// @match *://yt.dc09.ru/*
// @match *://piped.mint.lgbt/*
// @match *://*.il.ax/*
// @match *://piped.privacy.com.de/*
// @match *://piped.esmailelbob.xyz/*
// @match *://piped.projectsegfau.lt/*
// @match *://piped.in.projectsegfau.lt/*
// @match *://piped.us.projectsegfau.lt/*
// @match *://piped.privacydev.net/*
// @match *://piped.palveluntarjoaja.eu/*
// @match *://piped.smnz.de/*
// @match *://piped.adminforge.de/*
// @match *://piped.qdi.fi/*
// @match *://piped.hostux.net/*
// @match *://piped.chauvet.pro/*
// @match *://piped.jotoma.de/*
// @match *://piped.pfcd.me/*
// @match *://piped.frontendfriendly.xyz/*
// @match *://*.yewtu.be/*
// @match *://inv.vern.cc/*
// @match *://*.vimeo.com/*
// @match *://*.9gag.com/*
// @match *://*.twitter.com/*
// @match *://*.facebook.com/*
// @match *://*.rutube.ru/*
// @match *://*.bilibili.com/*
// @match *://my.mail.ru/*
// @connect api.browser.yandex.ru
// @downloadURL https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js
// @grant GM_xmlhttpRequest
// @grant GM_info
// @homepageURL https://github.com/ilyhalight/voice-over-translation/issues
// @icon https://translate.yandex.ru/icons/favicon.ico
// @inject-into page
// @namespace vot-cloudflare
// @require https://cdnjs.cloudflare.com/ajax/libs/protobufjs/7.2.3/protobuf.min.js
// @updateURL https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot-cloudflare.user.js
// ==/UserScript==

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.translationBlock {
  padding: 0.45rem !important;
  width: max-content;
  position: absolute;
  background: #2e2f34;
  border-radius: 0.5rem !important;
  left: 50%;
  top: 5rem;
  transform: translate(-50%);
  text-align: center;
  opacity: 0;
  transition: opacity 1s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 100;
}

.translationBtn {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  padding-right: 0.25rem !important;
  cursor: pointer;
  font: 600 12px / 14px "Segoe UI", BlinkMacSystemFont, Arial, sans-serif;
}

.translationBlock:hover {
  opacity: 1;
}

.translationMenu {
  display: inline-block;
  vertical-align: middle;
  border-left: 1px solid #424348;
  max-height: 16px;
  max-width: 24px;
  cursor: pointer;
}

.translationMenuIcon {
  padding: 0 10px !important;
  width: 24px;
}

.translationIAlice {
  display: inline-block;
  vertical-align: middle;
  max-height: 26px;
  max-width: 50px;
}

.translationIconAlice {
  height: 24px !important;
  width: 24px !important;
}

.translationITranslate {
  display: inline-block;
  vertical-align: middle;
  max-height: 20px;
  max-width: 20px;
}

.translationMenuContent {
  position: absolute;
  background: #2e2f34;
  color: #fff;
  display: none;
  border-radius: 1rem !important;
  left: 50%;
  top: 10rem;
  transform: translate(-50%);
  text-align: left;
  font: 600 14px / 16px "Segoe UI", BlinkMacSystemFont, Arial, sans-serif !important;

  width: 300px;
  /* height: 375px; */
  opacity: 0;
  z-index: 100;
  transition: opacity 0.5s ease;
}

.VOTMenuSlider {
  -webkit-appearance: none !important;
  appearance: none !important;
  width: 268px !important;
  height: 8px !important;
  outline: none !important;
  margin-top: 0.5rem;
  opacity: 0.7;
  /* background: #3C3F4D !important; */
  background: rgb(253, 222, 85, 0.6) !important;
  border: none !important;
  border-radius: 2rem !important;
  -webkit-transition: 0.2s !important;
  transition: opacity 0.2s ease !important;
}

.VOTMenuSlider:hover {
  opacity: 1;
}

.VOTMenuSlider::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  appearance: none !important;
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  border: none !important;
  background: #fff !important;
  cursor: pointer !important;
}

.VOTMenuSlider::-moz-range-thumb {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  border: none !important;
  background: #fff !important;
  cursor: pointer !important;
}

.VOTMenuSlider::-ms-thumb {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  border: none !important;
  background: #fff !important;
  cursor: pointer !important;
}

.VOTMenuSlider::-ms-fill-lower {
  height: 8px !important;
  border-radius: 2rem !important;
  background: linear-gradient(
    90.1deg,
    rgba(186, 153, 244, 0.85) -5.78%,
    rgba(236, 138, 202, 0.7) 56.46%,
    rgba(239, 168, 117, 0.6) 108.93%
  ) !important;
}

.VOTMenuSlider::-moz-range-progress {
  height: 8px !important;
  border-radius: 2rem !important;
  background: linear-gradient(
    90.1deg,
    rgba(186, 153, 244, 0.85) -5.78%,
    rgba(236, 138, 202, 0.7) 56.46%,
    rgba(239, 168, 117, 0.6) 108.93%
  ) !important;
}

.translationHeader {
  padding-bottom: 0.5rem !important;
}

.translationMainHeader {
  margin: 16px !important;
  color: #fff;
  font: 900 14px / 16px "Segoe UI", BlinkMacSystemFont, Arial, sans-serif !important;
}

.translationMenuOptions {
  display: flex;
  flex-flow: column wrap;
}

.translationMenuContainer {
  /* width: 100%; */
  padding-left: 16px !important;
  padding-top: 5px !important;
  display: inline-block !important;
}

.translationMenuContainer > input {
  appearance: auto !important;
  vertical-align: text-bottom;
}

.translationMenuText {
  color: #fff;
  display: inline-flex;
  width: 80%;
}

.translationVolumeBox,
.translationVideoVolumeBox {
  padding-top: 0.5rem !important;
}

.translationDropDB {
  border: none !important;
  border-radius: 4px !important;
  background: #5426ff !important;
  color: #fff !important;
  padding: 6px 16px !important;
  margin-left: auto !important;
  cursor: pointer !important;
}

.translationDownload {
  background: #5426ff !important;
  color: #fff !important;
  padding: 2px 10px !important;
  border-radius: 4px !important;
  cursor: pointer;
  display: none;
}

.translationMenuFunctional {
  display: flex;
  margin: 16px !important;
}

.VOTMenuSelect {
  width: 110px;
  border-radius: 5px !important;
  border: 1px solid #dadce0 !important;
  box-shadow: 0 1px 3px -2px #9098a9;
  box-sizing: border-box !important;
  color: #2e2f34 !important;
  background: #fff !important;
  padding: 5px !important;
}

.VOTMenuSelect:focus {
  outline: none;
}

.VOTMenuSelect:focus {
  outline: none;
  border-color: #0077ff;
  box-shadow: 0 0 0 2px rgba(#0077ff, 0.2);
}

#VOTSelectLanguages {
  display: flex !important;
  margin-left: 5px;
}

#VOTSelectLanguages svg {
  margin: 0 5px;
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/config/config-cloudflare.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ yandexHmacKey),
/* harmony export */   i: () => (/* binding */ workerHost)
/* harmony export */ });
// CLOUDFLARE CONFIGURATION
const workerHost = "traslation.vladislavme09.workers.dev";
const yandexHmacKey = "gnnde87s24kcuMH8rbWhLyfeuEKDkGGm";




/***/ }),

/***/ "./src/config/config.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IM: () => (/* binding */ autoVolume),
/* harmony export */   Rr: () => (/* binding */ yandexUserAgent)
/* harmony export */ });
/* unused harmony exports workerHost, yandexHmacKey */
// CONFIGURATION
const workerHost = "api.browser.yandex.ru";
const yandexHmacKey = "gnnde87s24kcuMH8rbWhLyfeuEKDkGGm";
const yandexUserAgent =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 CriOS/104.0.5112.114 YaBrowser/22.9.4.633.10 SA/3 Mobile/15E148 Safari/604.1";
const autoVolume = 0.15; // 0.0 - 1.0 (0% - 100%) - default volume of the video with the translation




/***/ }),

/***/ "./src/config/constants.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Iz: () => (/* binding */ translations),
/* harmony export */   ey: () => (/* binding */ translateFuncParam),
/* harmony export */   g$: () => (/* binding */ siteTranslates),
/* harmony export */   tW: () => (/* binding */ availableLangs)
/* harmony export */ });
const translateFuncParam = 0x40_75_50_00_00_00_00_00;
const availableLangs = {
  ru: "Russian",
  en: "English",
  zh: "Chinese",
  fr: "French",
  it: "Italian",
  es: "Spanish",
  de: "German",
}; // available languages for translation
const siteTranslates = {
  youtube: "https://youtu.be/",
  twitch: "https://twitch.tv/",
  vimeo: "https://vimeo.com/",
  "9gag": "https://9gag.com/gag/",
  vk: "https://vk.com/video?z=",
  xvideos: "https://www.xvideos.com/",
  pornhub: "https://rt.pornhub.com/view_video.php?viewkey=",
  udemy: "https://www.udemy.com",
  twitter: "https://twitter.com/i/status/",
  facebook: "https://www.facebook.com/",
  rutube: "https://rutube.ru/video/",
  "bilibili.com": "https://www.bilibili.com/video/",
  "mail.ru": "https://my.mail.ru/",
};
const translations = {
  ru: {
    recommended: "рекомендуется",
    translateVideo: "Перевести видео",
    disableTranslate: "Выключить",
    translationSettings: "Настройки перевода",
    resetSettings: "Сбросить настройки",
    videoBeingTranslated: "Видео переводится",
    videoLanguage: "Язык видео",
    translationLanguage: "Язык перевода",
    translationTake: "Перевод займёт",
    translationTakeMoreThanHour: "Перевод займёт больше часа",
    translationTakeAboutMinute: "Перевод займёт около минуты",
    translationTakeFewMinutes: "Перевод займёт несколько минут",
    translationTakeApproximatelyMinutes: "Перевод займёт примерно {0} минут",
    translationTakeApproximatelyMinute: "Перевод займёт примерно {0} минуты",
    unSupportedExtensionError: `Ошибка! ${GM_info.scriptHandler} не поддерживается этой версией расширения!\n\nПожалуйста, используйте cloudflare-версию расширения VOT.`,
    requestTranslationFailed: "Не удалось запросить перевод видео",
    audioNotReceived: "Не получена ссылка на аудио",
    grantPermissionToAutoPlay: "Предоставьте разрешение на автовоспроизведение",
    neededAdditionalExtension:
      "Для поддержки этого сайта необходимо дополнительное расширение",
    audioFormatNotSupported: "Формат аудио не поддерживается",
    VOTAutoTranslate: "Переводить при открытии",
    VOTDontTranslateYourLang: "Не переводить с родного языка",
    VOTVolume: "Громкость видео",
    VOTVolumeTranslation: "Громкость перевода",
    VOTAutoSetVolume: "Уменьшать громкость видео до ",
    VOTShowVideoSlider: "Слайдер громкости видео",
    VOTSyncVolume: "Связать громкость перевода и видео",
    VOTAudioProxy: "Проксировать полученное аудио",
    VOTDisableFromYourLang: "VOT: Вы отключили перевод видео на вашем языке",
    VOTLiveNotSupported:
      "VOT: Не поддерживается перевод трансляций в прямом эфире",
    VOTPremiere: "VOT: Дождитесь окончания премьеры перед переводом",
    VOTVideoIsTooLong: "VOT: Видео слишком длинное",
    VOTNoVideoIDFound: "VOT: Не найдено ID видео",
    VOTFailedInitDB: "VOT: Не удалось инициализовать базу данных",
    VOTDBNeedUpdate:
      "VOT: Базе данных нужно обновление, пожалуйста, перезагрузите страницу",
    VOTDisabledForDBUpdating: `VOT отключен из-за ошибки при обновление Базы Данных. Закройте все открытые вкладки с ${window.location.hostname} и попробуйте снова`,
    VOTFailedWriteToDB: "VOT: Не удалось записать данные в базу данных",
    VOTFailedReadFromDB: "VOT: Не удалось получить данные из базы данных",
    Russian: "Русский",
    English: "Английский",
    Chinese: "Китайский",
    French: "Французский",
    Italian: "Итальянский",
    Spanish: "Испанский",
    German: "Немецкий",
  },
  en: {
    recommended: "recommended",
    translateVideo: "Translate video",
    disableTranslate: "Turn off",
    translationSettings: "Translation settings",
    resetSettings: "Reset settings",
    videoBeingTranslated: "The video is being translated",
    videoLanguage: "Video language",
    translationLanguage: "Translation language",
    translationTake: "The translation will take",
    translationTakeMoreThanHour: "The translation will take more than an hour",
    translationTakeAboutMinute: "The translation will take about a minute",
    translationTakeFewMinutes: "The translation will take a few minutes",
    translationTakeApproximatelyMinutes:
      "The translation will take approximately {0} minutes",
    translationTakeApproximatelyMinute:
      "The translation will take approximately {0} minutes",
    unSupportedExtensionError: `Error! ${GM_info.scriptHandler} is not supported by this version of the extension!\n\nPlease use the cloudflare version of the VOT extension.`,
    requestTranslationFailed: "Failed to request video translation",
    audioNotReceived: "Audio link not received",
    grantPermissionToAutoPlay: "Grant permission to autoplay",
    neededAdditionalExtension:
      "An additional extension is needed to support this site",
    audioFormatNotSupported: "The audio format is not supported",
    VOTAutoTranslate: "Translate on open",
    VOTDontTranslateYourLang: "Do not translate from my language",
    VOTVolume: "Video volume",
    VOTVolumeTranslation: "Translation Volume",
    VOTAutoSetVolume: "Reduce video volume to ",
    VOTShowVideoSlider: "Video volume slider",
    VOTSyncVolume: "Link translation and video volume",
    VOTAudioProxy: "Proxy received audio",
    VOTDisableFromYourLang:
      "VOT: You have disabled the translation of the video in your language",
    VOTLiveNotSupported: "VOT: Translation of live streams is not supported",
    VOTPremiere: "VOT: Wait for the premiere to end before translating",
    VOTVideoIsTooLong: "VOT: Video is too long",
    VOTNoVideoIDFound: "VOT: No video ID found",
    VOTFailedInitDB: "VOT: Failed to initialize database",
    VOTDBNeedUpdate:
      "VOT: The database needs an update, please reload the page",
    VOTDisabledForDBUpdating: `VOT is disabled due to an error when updating the Database. Close all open tabs with ${window.location.hostname} and try again`,
    VOTFailedWriteToDB: "VOT: Data could not be written to the database",
    VOTFailedReadFromDB: "VOT: Data could not be retrieved from the database",
    Russian: "Russian",
    English: "English",
    Chinese: "Chinese",
    French: "French",
    Italian: "Italian",
    Spanish: "Spanish",
    German: "German",
  },
  zh: {
    recommended: "推荐使用",
    translateVideo: "翻译视频",
    disableTranslate: "关掉",
    translationSettings: "翻译需要一个多小时",
    resetSettings: "重置设置",
    videoBeingTranslated: "视频正在翻译中",
    videoLanguage: "视频语言",
    translationLanguage: "翻译语言",
    translationTake: "翻译将采取",
    translationTakeMoreThanHour: "翻译将采取一个多小时",
    translationTakeAboutMinute: "翻译将采取一分钟",
    translationTakeFewMinutes: "翻译将采取几分钟",
    translationTakeApproximatelyMinutes: "翻译将采取大约需要{0}分钟",
    translationTakeApproximatelyMinute: "翻译将采取大约需要{0}分钟",
    unSupportedExtensionError: `错误! 此版本的扩展不支持 ${GM_info.scriptHandler}!\n\n请使用cloudflare版本的VOT扩展.`,
    requestTranslationFailed: "请求视频翻译失败",
    audioNotReceived: "未收到音频链接",
    grantPermissionToAutoPlay: "授予自动播放权限",
    neededAdditionalExtension: "需要一个额外的扩展来支持这个网站",
    audioFormatNotSupported: "不支持音频格式",
    VOTAutoTranslate: "打开时翻译",
    VOTDontTranslateYourLang: "不要从你的语言翻译过来",
    VOTVolume: "视频量",
    VOTVolumeTranslation: "翻译量",
    VOTAutoSetVolume: "将视频音量降低到",
    VOTShowVideoSlider: "视频音量滑块",
    VOTSyncVolume: "链接翻译和视频音量",
    VOTAudioProxy: "代理接收的音频",
    VOTDisableFromYourLang: "VOT：你已经禁用了你的语言的视频翻译",
    VOTLiveNotSupported: "VOT：不支持直播流的翻译",
    VOTPremiere: "VOT：等待首映结束后再翻译",
    VOTVideoIsTooLong: "VOT：视频太长",
    VOTNoVideoIDFound: "VOT: 没有找到视频ID",
    VOTFailedInitDB: "VOT: 初始化数据库失败",
    VOTDBNeedUpdate: "VOT: 数据库需要更新,请重新加载页面",
    VOTDisabledForDBUpdating: `VOT由于更新数据库时出错而被禁用。 关闭所有打开的选项卡${window.location.hostname} 再试一次`,
    VOTFailedWriteToDB: "VOT: 无法将数据写入数据库",
    VOTFailedReadFromDB: "VOT: 无法从数据库中检索数据",
    Russian: "俄语",
    English: "英语",
    Chinese: "中文",
    French: "法语",
    Italian: "意大利语",
    Spanish: "西班牙语",
    German: "德语",
  },
  de: {
    recommended: "es wird empfohlen",
    translateVideo: "Video übersetzen",
    disableTranslate: "Ausschalten",
    translationSettings: "Übersetzungseinstellungen",
    resetSettings: "Einstellungen zurücksetzen",
    videoBeingTranslated: "Das Video wird übersetzt",
    videoLanguage: "Sprache Video",
    translationLanguage: "Zielsprache",
    translationTake: "Die Übersetzung dauert",
    translationTakeMoreThanHour: "Die Übersetzung dauert mehr als eine Stunde",
    translationTakeAboutMinute: "Die Übersetzung dauert ungefähr eine Minute",
    translationTakeFewMinutes: "Die Übersetzung dauert einige Minuten",
    translationTakeApproximatelyMinutes:
      "Die Übersetzung dauert ungefähr {0} Minuten",
    translationTakeApproximatelyMinute:
      "Die Übersetzung dauert ungefähr {0} Minuten",
    unSupportedExtensionError: `Fehler! ${GM_info.scriptHandler} wird von dieser Version der Erweiterung nicht unterstützt!\n\nBitte verwenden Sie die Cloudflare-Version der VOT-Erweiterung.`,
    requestTranslationFailed:
      "Videoübersetzung konnte nicht angefordert werden",
    audioNotReceived: "Audiolink nicht empfangen",
    grantPermissionToAutoPlay:
      "Erteilen Sie die Berechtigung zur automatischen Wiedergabe",
    neededAdditionalExtension:
      "Eine zusätzliche Erweiterung ist erforderlich, um diese Website zu unterstützen",
    audioFormatNotSupported: "Das Audioformat wird nicht unterstützt",
    VOTAutoTranslate: "Beim Öffnen übersetzen",
    VOTDontTranslateYourLang: "Nicht aus Ihrer Sprache übersetzen",
    VOTVolume: "Video Lautstärke",
    VOTVolumeTranslation: "Übersetzungsvolumen",
    VOTAutoSetVolume: "Video-Lautstärke auf reduzieren ",
    VOTShowVideoSlider: "Video-Lautstärkeregler",
    VOTSyncVolume: "Übersetzungs- und Videolautstärke verknüpfen",
    VOTAudioProxy: "Empfangenes Audio proxyen",
    VOTDisableFromYourLang:
      "VOT: Sie haben die Übersetzung des Videos in Ihrer Sprache deaktiviert",
    VOTLiveNotSupported:
      "VOT: Übersetzung von Live-Streams wird nicht unterstützt",
    VOTPremiere:
      "VOT: Warten Sie, bis die Premiere beendet ist, bevor Sie übersetzen",
    VOTVideoIsTooLong: "VOT: Video ist zu lang",
    VOTNoVideoIDFound: "VOT: Keine Video-ID gefunden",
    VOTFailedInitDB: "VOT: Datenbank konnte nicht initialisiert werden",
    VOTDBNeedUpdate:
      "VOT: Die Datenbank muss aktualisiert werden, bitte laden Sie die Seite neu",
    VOTDisabledForDBUpdating: `VOT wurde aufgrund eines Fehlers beim Aktualisieren der Datenbank deaktiviert. Schließen Sie alle geöffneten Tabs mit ${window.location.hostname} und versuchen Sie es erneut`,
    VOTFailedWriteToDB:
      "VOT: Daten konnten nicht in die Datenbank geschrieben werden",
    VOTFailedReadFromDB: "VOT: Konnte keine Daten aus der Datenbank abrufen",
    Russian: "Russisch",
    English: "Englisch",
    Chinese: "Chinesisch",
    French: "Französisch",
    Italian: "Italienisch",
    Spanish: "Spanisch",
    German: "Deutsch",
  },
  es: {
    recommended: "es recomendable",
    translateVideo: "Traducir video",
    disableTranslate: "Apagar",
    translationSettings: "Ajustes de traducción",
    resetSettings: "Restablecer ajustes",
    videoBeingTranslated: "El video está siendo traducido",
    videoLanguage: "Idioma del video",
    translationLanguage: "Idioma de la traducción",
    translationTake: "La traducción tardará",
    translationTakeMoreThanHour: "La traducción tardará más de una hora",
    translationTakeAboutMinute:
      "La traducción tardará aproximadamente un minuto",
    translationTakeFewMinutes: "La traducción tardará unos minutos",
    translationTakeApproximatelyMinutes:
      "La traducción tardará aproximadamente {0} minutos",
    translationTakeApproximatelyMinute:
      "La traducción tardará aproximadamente {0} minutos",
    unSupportedExtensionError: `Error! ${GM_info.scriptHandler} no es compatible con esta versión de la extensión!\n\nUtilice la versión cloudflare de la extensión VOT.`,
    requestTranslationFailed: "Error al solicitar la traducción de vídeo",
    audioNotReceived: "Audiolink nicht empfangen",
    grantPermissionToAutoPlay: "Conceder permiso de reproducción automática",
    neededAdditionalExtension:
      "Se necesita una extensión adicional para admitir este sitio",
    audioFormatNotSupported: "El formato de audio no es compatible",
    VOTAutoTranslate: "Traducir al abrir",
    VOTDontTranslateYourLang: "No traduzca de su lengua",
    VOTVolume: "Volumen de vídeo",
    VOTVolumeTranslation: "Volumen de traducción",
    VOTAutoSetVolume: "Reducir el volumen del video al ",
    VOTShowVideoSlider: "Deslizador de volumen de video",
    VOTSyncVolume: "Vincular el volumen de traducción y video",
    VOTAudioProxy: "Proxificar el audio recibido",
    VOTDisableFromYourLang:
      "VOT: Ha desactivado la traducción del vídeo en su idioma",
    VOTLiveNotSupported:
      "VOT: No se admite la traducción de transmisiones en vivo",
    VOTPremiere: "VOT: Espere a que termine el estreno antes de traducir",
    VOTVideoIsTooLong: "VOT: El video es demasiado largo",
    VOTNoVideoIDFound: "VOT: No se encontró id de video",
    VOTFailedInitDB: "VOT: No se pudo inicializar la base de datos",
    VOTDBNeedUpdate:
      "VOT: la Base de datos necesita una actualización, por favor vuelva a cargar la página",
    VOTDisabledForDBUpdating: `VOT está deshabilitado debido a un error al actualizar la Base de Datos. Cierre todas las pestañas abiertas con ${window.location.hostname} y vuelve a intentarlo`,
    VOTFailedWriteToDB: "VOT: No se pudo escribir datos en la base de datos",
    VOTFailedReadFromDB: "VOT: No se pudo recuperar datos de la base de datos",
    Russian: "Ruso",
    English: "Inglés",
    Chinese: "Chino",
    French: "Francés",
    Italian: "Italiano",
    Spanish: "Español",
    German: "Alemán",
  },
  fr: {
    recommended: "recommande",
    translateVideo: "Traduire la vidéo",
    disableTranslate: "Désactiver",
    translationSettings: "Paramètres de traduction",
    resetSettings: "Réinitialiser les paramètres",
    videoBeingTranslated: "La vidéo est en cours de traduction",
    videoLanguage: "Langue vidéo",
    translationLanguage: "Langue cible",
    translationTake: "La traduction prendra",
    translationTakeMoreThanHour: "La traduction prendra plus d'une heure",
    translationTakeAboutMinute: "La traduction prendra environ une minute",
    translationTakeFewMinutes: "La traduction prendra quelques minutes",
    translationTakeApproximatelyMinutes:
      "La traduction prendra environ {0} minutes",
    translationTakeApproximatelyMinute:
      "La traduction prendra environ {0} minutes",
    unSupportedExtensionError: `Erreur! ${GM_info.scriptHandler} n'est pas supporté par cette version de l'extension!!\n\nVeuillez utiliser la version cloudflare de l'extension VOT.`,
    requestTranslationFailed:
      "Impossible de demander la traduction de la vidéo",
    audioNotReceived: "Lien audio non reçu",
    grantPermissionToAutoPlay: "Accorder l'autorisation de lecture automatique",
    neededAdditionalExtension:
      "Une extension supplémentaire est nécessaire pour prendre en charge ce site",
    audioFormatNotSupported: "Format audio non pris en charge",
    VOTAutoTranslate: "Traduire à l'ouverture",
    VOTDontTranslateYourLang: "Ne pas traduire à partir de votre langue",
    VOTVolume: "Volume de la vidéo",
    VOTVolumeTranslation: "Volume de traduction",
    VOTAutoSetVolume: "Réduire le volume de la vidéo à ",
    VOTShowVideoSlider: "Curseur de volume vidéo",
    VOTSyncVolume: "Lier le volume de la traduction et de la vidéo",
    VOTAudioProxy: "Proxy audio reçu",
    VOTDisableFromYourLang:
      "VOT: Vous avez désactivé la traduction de la vidéo dans votre langue",
    VOTLiveNotSupported:
      "VOT: La traduction des flux en direct n'est pas prise en charge",
    VOTPremiere: "VOT: Attendez la fin de la première avant de traduire",
    VOTVideoIsTooLong: "VOT: La vidéo est trop longue",
    VOTNoVideoIDFound: "VOT: ID vidéo introuvable",
    VOTFailedInitDB: "VOT: Impossible d'initialiser la base de données",
    VOTDBNeedUpdate:
      "VOT: la Base de données a besoin d'une mise à jour, veuillez recharger la page",
    VOTDisabledForDBUpdating: `VOT est désactivé en raison d'une erreur lors de la mise à jour de la Base de Données. Fermez tous les onglets ouverts avec ${window.location.hostname} et essayez à nouveau`,
    VOTFailedWriteToDB:
      "VOT: Impossible d'écrire les données dans la base de données",
    VOTFailedReadFromDB:
      "VOT: Impossible de récupérer les données de la base de données",
    Russian: "Russe",
    English: "Anglais",
    Chinese: "Chinois",
    French: "Français",
    Italian: "Italien",
    Spanish: "Espagnol",
    German: "Allemand",
  },
  it: {
    recommended: "è consigliabile",
    translateVideo: "Traduci il video",
    disableTranslate: "Spegnere",
    translationSettings: "Impostazioni di traduzione",
    resetSettings: "Ripristina impostazioni",
    videoBeingTranslated: "Il video è in fase di traduzione",
    videoLanguage: "Lingua Video",
    translationLanguage: "Lingua di traduzione",
    translationTake: "La traduzione richiederà",
    translationTakeMoreThanHour: "La traduzione richiederà più di un'ora",
    translationTakeAboutMinute: "La traduzione richiederà circa un minuto",
    translationTakeFewMinutes: "La traduzione richiederà alcuni minuti",
    translationTakeApproximatelyMinutes:
      "La traduzione richiederà circa {0} minuti",
    translationTakeApproximatelyMinute:
      "La traduzione richiederà circa {0} minuti",
    unSupportedExtensionError: `Errore! ${GM_info.scriptHandler} non è supportato da questa versione dell'estensione!\n\nUtilizzare la versione cloudflare dell'estensione VOT.`,
    requestTranslationFailed: "Richiesta di traduzione video non riuscita",
    audioNotReceived: "Collegamento audio non ricevuto",
    grantPermissionToAutoPlay:
      "Concedere l'Autorizzazione per la riproduzione automatica",
    neededAdditionalExtension:
      "Per supportare questo sito è necessaria un'estensione aggiuntiva",
    audioFormatNotSupported: "Il formato audio non è supportato",
    VOTAutoTranslate: "Traduci all'apertura",
    VOTDontTranslateYourLang: "Non traducete dalla vostra lingua",
    VOTVolume: "Volume video",
    VOTVolumeTranslation: "Volume di traduzione",
    VOTAutoSetVolume: "Riduci il volume del video al ",
    VOTShowVideoSlider: "Cursore del volume del video",
    VOTSyncVolume: "Collega il volume della traduzione e del video",
    VOTAudioProxy: "Proxy audio ricevuto",
    VOTDisableFromYourLang:
      "VOT: Avete disabilitato la traduzione del video nella vostra lingua",
    VOTLiveNotSupported:
      "VOT: La traduzione dei flussi dal vivo non è supportata",
    VOTPremiere: "VOT: Aspetta che la prima finisca prima di tradurre",
    VOTVideoIsTooLong: "VOT: Il video è troppo lungo",
    VOTNoVideoIDFound: "VOT: ID video non trovato",
    VOTFailedInitDB: "VOT: Impossibile inizializzare il database",
    VOTDBNeedUpdate:
      "VOT: Il database ha bisogno di aggiornamento, si prega di ricaricare la pagina",
    VOTDisabledForDBUpdating: `VOT è disabilitato a causa di un errore durante l'aggiornamento del database. CHIUDI tutte le schede aperte con ${window.location.hostname} e riprova`,
    VOTFailedWriteToDB: "VOT: Impossibile scrivere dati nel database",
    VOTFailedReadFromDB: "VOT: Impossibile recuperare i dati dal database",
    Russian: "Russo",
    English: "Inglese",
    Chinese: "Cinese",
    French: "Francese",
    Italian: "Italiano",
    Spanish: "Spagnolo",
    German: "Tedesco",
  },
};




/***/ }),

/***/ "./src/rvt-cloudflare.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ rvt_cloudflare)
});

;// CONCATENATED MODULE: ./src/getUUID.js
function getUUID(isLower) {
  const uuid = ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
  return isLower ? uuid : uuid.toUpperCase();
}



// EXTERNAL MODULE: ./src/yandexRequests.js
var yandexRequests = __webpack_require__("./src/yandexRequests.js");
// EXTERNAL MODULE: ./src/config/config-cloudflare.js
var config_cloudflare = __webpack_require__("./src/config/config-cloudflare.js");
// EXTERNAL MODULE: ./src/config/config.js
var config = __webpack_require__("./src/config/config.js");
// EXTERNAL MODULE: ./src/utils/debug.js
var debug = __webpack_require__("./src/utils/debug.js");
;// CONCATENATED MODULE: ./src/rvt-cloudflare.js






// Request video translation from Yandex API
async function requestVideoTranslation(
  url,
  unknown1,
  requestLang,
  responseLang,
  callback
) {
  // Initialize variables
  let response;
  let responseBody;
  const deviceId = getUUID(true);
  const body = yandexRequests/* yandexRequests */.G.encodeRequest(
    url,
    deviceId,
    unknown1,
    requestLang,
    responseLang
  );

  try {
    debug/* default */.Z.log("requestVideoTranslation");
    // Create a key from the HMAC secret
    const utf8Encoder = new TextEncoder("utf-8");
    const key = await window.crypto.subtle.importKey(
      "raw",
      utf8Encoder.encode(config_cloudflare/* yandexHmacKey */.I),
      { name: "HMAC", hash: { name: "SHA-256" } },
      false,
      ["sign", "verify"]
    );
    // Sign the body with the key
    const signature = await window.crypto.subtle.sign("HMAC", key, body);
    // Convert the signature to a hex string
    const hexSignature = Array.from(new Uint8Array(signature), (x) =>
      x.toString(16).padStart(2, "0")
    ).join("");
    // Create a fetch options object with headers and body
    const options = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        headers: {
          Accept: "application/x-protobuf",
          "Accept-Language": "en",
          "Content-Type": "application/x-protobuf",
          "User-Agent": config/* yandexUserAgent */.Rr,
          Pragma: "no-cache",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Mode": "no-cors",
          "Vtrans-Signature": hexSignature,
          "Sec-Vtrans-Token": getUUID(false),
        },
        body: String.fromCharCode(...body),
      }),
    };
    // Fetch the translation from the worker host
    response = await fetch(
      `https://${config_cloudflare/* workerHost */.i}/video-translation/translate`,
      options
    );
    // Get the response body as an array buffer
    responseBody = await response.arrayBuffer();
  } catch (exception) {
    debug/* default */.Z.log(exception);
    // Handle errors
    response = { status: -1 };
    responseBody = exception;
  }

  // Call the callback function with the result
  callback(response.status == 200, responseBody);
}

/* harmony default export */ const rvt_cloudflare = (requestVideoTranslation);


/***/ }),

/***/ "./src/utils/debug.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/config/constants.js");


const debug = {};
debug.log = (...text) => {
  if (true) {
    return;
  }
  return console.log(
    "%c[VOT DEBUG]",
    "background: #F2452D; color: #fff; padding: 5px;",
    ...text
  );
};

debug.translations = (testLang) => {
  if (true) {
    return;
  }
  // for add indexes
  const testedTranslations = Object.entries(_config_constants_js__WEBPACK_IMPORTED_MODULE_0__/* .translations */ .Iz[testLang]).map(
    ([key, value]) => ({
      phrase: key,
      translated: value,
    })
  );
  testedTranslations.unshift({
    phrase: "language_code (debug only)",
    translated: testLang,
  });
  return console.table(testedTranslations);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debug);


/***/ }),

/***/ "./src/yandexRequests.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ yandexRequests)
/* harmony export */ });
const VideoTranslationRequest = new protobuf.Type("VideoTranslationRequest")
  .add(new protobuf.Field("url", 3, "string"))
  .add(new protobuf.Field("deviceId", 4, "string"))
  .add(new protobuf.Field("firstRequest", 5, "bool")) // true for the first request, false for subsequent ones
  .add(new protobuf.Field("unknown1", 6, "fixed64"))
  .add(new protobuf.Field("unknown2", 7, "int32")) // 1 1
  .add(new protobuf.Field("language", 8, "string")) // source language code
  .add(new protobuf.Field("unknown3", 9, "int32")) // 0 0
  .add(new protobuf.Field("unknown4", 10, "int32")) // 0 0
  .add(new protobuf.Field("responseLanguage", 14, "string")); // target language code

// const VideoWhitelistStreamRequest = new protobuf.Type("VideoWhitelistStreamRequest")
//   .add(new protobuf.Field("url", 1, "string"))
//   .add(new protobuf.Field("deviceId", 4, "string"))

// const VideoTranslationStreamRequest = new protobuf.Type("VideoTranslationStreamRequest")
//   .add(new protobuf.Field("url", 1, "string"))
//   .add(new protobuf.Field("language", 2, "string"))
//   .add(new protobuf.Field("responseLanguage", 3, "string"))

const VideoTranslationResponse = new protobuf.Type("VideoTranslationResponse")
  .add(new protobuf.Field("url", 1, "string"))
  .add(new protobuf.Field("duration", 2, "double"))
  .add(new protobuf.Field("status", 4, "int32")) // status
  .add(new protobuf.Field("remainingTime", 5, "int32")) // secs before translation
  .add(new protobuf.Field("language", 8, "string")) // detected language (if the wrong one is set)
  .add(new protobuf.Field("message", 9, "string"));
// 6 - unknown 0 (1st request) -> 10 (2nd, 3th and etc requests)
// 7 - unknown array

// const VideoWhitelistStreamResponse = new protobuf.Type("VideoWhitelistStreamResponse")
//   .add(new protobuf.Field("inWhitelist", 1, "bool"))

// const VideoTranslationStreamResponse = new protobuf.Type("VideoTranslationStreamResponse")
//   .add(new protobuf.Field("unknown1", 1, "int32"))
//   .add(new protobuf.Field("array", 2, "string"))
//   .add(new protobuf.Field("ping", 3, "int32"))

// Create a root namespace and add the types
// const root = new protobuf.Root().define("yandex").add(VideoWhitelistStreamRequest).add(VideoWhitelistStreamResponse);

// // Export the encoding and decoding functions
// export const yandexRequests = {
//   encodeRequest(url, deviceId, unknown1, requestLang, responseLang) {
//     return root.VideoWhitelistStreamRequest.encode({
//       url,
//       deviceId: 'UCLA_DiR1FfKNvjuUpBHmylQ'
//     }).finish();
//   },
//   decodeResponse(response) {
//     return root.VideoWhitelistStreamResponse.decode(new Uint8Array(response));
//   }
// };

// // Create a root namespace and add the types
// const root = new protobuf.Root().define("yandex").add(VideoTranslationStreamRequest).add(VideoTranslationStreamResponse);

// // Export the encoding and decoding functions
// export const yandexRequests = {
//   encodeRequest(url, deviceId, unknown1, requestLang, responseLang) {
//     return root.VideoTranslationStreamRequest.encode({
//       url,
//       language: requestLang,
//       responseLanguage: responseLang
//     }).finish();
//   },
//   decodeResponse(response) {
//     return root.VideoTranslationStreamResponse.decode(new Uint8Array(response));
//   }
// };

// Create a root namespace and add the types
const root = new protobuf.Root()
  .define("yandex")
  .add(VideoTranslationRequest)
  .add(VideoTranslationResponse);

// Export the encoding and decoding functions
const yandexRequests = {
  encodeRequest(url, deviceId, unknown1, requestLang, responseLang) {
    return root.VideoTranslationRequest.encode({
      url,
      deviceId,
      firstRequest: true,
      unknown1,
      unknown2: 1,
      language: requestLang,
      unknown3: 0,
      unknown4: 0,
      responseLanguage: responseLang,
    }).finish();
  },
  decodeResponse(response) {
    return root.VideoTranslationResponse.decode(new Uint8Array(response));
  },
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css
var main = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");
;// CONCATENATED MODULE: ./src/styles/main.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(main/* default */.Z, options);




       /* harmony default export */ const styles_main = (main/* default */.Z && main/* default */.Z.locals ? main/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/tinyld/dist/tinyld.light.node.mjs
var D={TINYLD_CONFIG:"light"};var v=/[,.。，、#%&/\\+*¡!¿?[\]！？;:…„“«»”"“_–—~]/gi,S=/[0-9]/g,P=/[\uFF10-\uFF19]/g,N=/\s\s+/g,O=/’/gi,w=/[\u0300-\u036f]/g;function b(e){return typeof e=="string"||e instanceof String}function M(e){return e.toLowerCase().replace(O,"'").replace(v," ").replace(P,n=>String.fromCharCode(n.charCodeAt(0)-65248)).replace(S,"").replace(N," ").trim()}function j(e){return e.normalize("NFD").replace(w,"")}var C={light:{TRAINING_UNIQUE_GRAMS:[1,2,3,4],TOP_LANGUAGE_UNIQUE_GRAMS:60,TOP_LANGUAGE_STATS_GRAMS:50},normal:{TRAINING_UNIQUE_GRAMS:[1,2,3,4,5],TOP_LANGUAGE_UNIQUE_GRAMS:100,TOP_LANGUAGE_STATS_GRAMS:180},heavy:{TRAINING_UNIQUE_GRAMS:[1,2,3,4,5],TOP_LANGUAGE_UNIQUE_GRAMS:320,TOP_LANGUAGE_STATS_GRAMS:1024}},g=D.TINYLD_CONFIG||"normal",L=C[g].TRAINING_UNIQUE_GRAMS,o0=C[g].TOP_LANGUAGE_UNIQUE_GRAMS,t0=C[g].TOP_LANGUAGE_STATS_GRAMS,K=1e4;function d(e){return Math.round(e*K)/K}var k=e=>{let n={only:[],verbose:!1};return e?Object.assign(n,e):n},c={afr:{code:"af",region:"africa",name:"Afrikaans",skipLight:!0},amh:{code:"am",region:"africa",name:"Amharic",skipLight:!0,coefProb:0},ber:{code:"ber",region:"africa",name:"Berber",skipLight:!0,coefProb:.25},run:{code:"rn",region:"africa",name:"Kirundi",skipLight:!0},jpn:{code:"ja",region:"asia-east",name:"Japanese",alias:["jp"],coefProb:0},cmn:{code:"zh",region:"asia-east",name:"Chinese",alias:["cn"],coefProb:.25},kor:{code:"ko",region:"asia-east",name:"Korean",alias:["kr"],coefProb:0},mya:{code:"my",region:"asia",name:"Burmese",skipLight:!0,coefProb:0},tha:{code:"th",region:"asia",name:"Thai",coefProb:0},vie:{code:"vi",region:"asia",name:"Vietnamese",skipLight:!0,coefProb:0},ind:{code:"id",region:"asia",name:"Indonesian",skipLight:!0},khm:{code:"km",region:"asia",name:"Khmer",skipLight:!0,coefProb:0},tgl:{code:"tl",region:"asia",name:"Tagalog",skipLight:!0},ben:{code:"bn",region:"asia-south",name:"Bengali",coefProb:0},tam:{code:"ta",region:"asia-south",name:"Tamil",skipLight:!0,coefProb:0},hin:{code:"hi",region:"asia-south",name:"Hindi",coefProb:0},urd:{code:"ur",region:"asia-south",name:"Urdu",skipLight:!0,coefProb:0},guj:{code:"gu",region:"asia-south",name:"Gujarati",skipLight:!0,coefProb:0},kan:{code:"kn",region:"asia-south",name:"Kannada",skipLight:!0,coefProb:0},tel:{code:"te",region:"asia-south",name:"Telugu",skipLight:!0,coefProb:0},fra:{code:"fr",region:"europe-west",name:"French"},eng:{code:"en",region:"europe-west",name:"English",alias:["us","gb"]},deu:{code:"de",region:"europe-west",name:"German",coefProb:.5},spa:{code:"es",region:"europe-west",name:"Spanish"},por:{code:"pt",region:"europe-west",name:"Portuguese",alias:["po"]},ita:{code:"it",region:"europe-west",name:"Italian"},nld:{code:"nl",region:"europe-west",name:"Dutch"},gle:{code:"ga",region:"europe-west",name:"Irish",skipLight:!0},lat:{code:"la",region:"europe",name:"Latin",skipLight:!0},ces:{code:"cs",region:"europe",name:"Czech",skipLight:!0},srp:{code:"sr",region:"europe",name:"Serbian",skipLight:!0},ell:{code:"el",region:"europe",name:"Greek",alias:["gr"],coefProb:0},mkd:{code:"mk",region:"europe",name:"Macedonian",skipLight:!0,coefProb:1.5},slk:{code:"sk",region:"europe",name:"Slovak",skipLight:!0},dan:{code:"da",region:"europe-north",name:"Danish",skipLight:!0,coefProb:1.5},swe:{code:"sv",region:"europe-north",name:"Swedish"},fin:{code:"fi",region:"europe-north",name:"Finnish"},nob:{code:"no",region:"europe-north",name:"Norwegian",coefProb:1.5},isl:{code:"is",region:"europe-north",name:"Icelandic",skipLight:!0,coefProb:.5},hun:{code:"hu",region:"europe-east",name:"Hungarian"},ron:{code:"ro",region:"europe-east",name:"Romanian",coefProb:.5},bul:{code:"bg",region:"europe-east",name:"Bulgarian",skipLight:!0},bel:{code:"be",region:"europe-east",name:"Belarusian",skipLight:!0},rus:{code:"ru",region:"europe-east",name:"Russian"},ukr:{code:"uk",region:"europe-east",name:"Ukrainian",skipLight:!0},pol:{code:"pl",region:"europe-east",name:"Polish",coefProb:.5},lit:{code:"lt",region:"europe-east",name:"Lithuanian",skipLight:!0},est:{code:"et",region:"europe-east",name:"Estonian",skipLight:!0},lvs:{code:"lv",region:"europe-east",name:"Latvian",skipLight:!0},hye:{code:"hy",region:"middle-east",name:"Armenian",skipLight:!0,coefProb:0},tur:{code:"tr",region:"middle-east",name:"Turkish"},heb:{code:"he",region:"middle-east",name:"Hebrew",coefProb:0},yid:{code:"yi",region:"middle-east",name:"Yiddish",skipLight:!0,coefProb:.5},ara:{code:"ar",region:"middle-east",name:"Arabic",coefProb:0},pes:{code:"fa",region:"middle-east",name:"Persian",skipLight:!0,coefProb:0},tat:{code:"tt",region:"middle-east",name:"Tatar",skipLight:!0,coefProb:0},kaz:{code:"kk",region:"middle-east",name:"Kazakh",skipLight:!0},mon:{code:"mn",region:"middle-east",name:"Mongolian",skipLight:!0},tuk:{code:"tk",region:"middle-east",name:"Turkmen",skipLight:!0},epo:{code:"eo",region:"other",name:"Esperanto",skipLight:!0,coefProb:.5},vol:{code:"vo",region:"other",name:"Volapuk",skipLight:!0,coefProb:.5},tlh:{code:"tlh",region:"other",name:"Klingon",skipLight:!0,coefProb:.25}},H=new Set(Object.entries(c).filter(e=>g==="heavy"||g==="normal"||g==="light"&&!e[1].skipLight).map(e=>e[0])),h=[...H.values()],a0=Object.fromEntries(h.map((e,n)=>[e,n+1])),J=Object.fromEntries(h.map((e,n)=>[n+1,e]));function R(e){return e in c?c[e].region:""}function Q(e){return e in c?c[e].name:""}function U(e){let n=Object.entries(c).find(t=>t[1].code===e);if(n)return n[1].code;let o=Object.entries(c).find(t=>t[1].alias&&t[1].alias.includes(e));return o?o[1].code:""}function F(e){return e in c?c[e].code:e}function T(e){let n=Object.entries(c).find(t=>t[1].code===e);if(n)return n[0];let o=Object.entries(c).find(t=>t[1].alias&&t[1].alias.includes(e));return o?o[0]:""}var f={id:"tinyld-dict",multiples:{" '":"D07M0B"," aa":"B02D34G13"," aan":"DA9"," ac":"72F812907A3YB7VC1GD0GF06JEKM0U"," ace":"A18B0SJEKM0B"," ai":"73F809A08B21C2DG61J7AM0U"," all":"74J83H94XA11C6PD5QF6ZG0UH68I04M0C"," am ":"80U91WJG6"," are":"86UA04B05C0IJ5WL04"," at ":"84LA02D08H93M05"," att":"72K80Q902C1MFKTH04I0FM0D"," av ":"F5YHAJ"," az":"A0CB0BC06IJAJ0LL02M12"," az ":"IS8M0T"," be ":"87GF0AI31"," bir":"80EC11I09J0RMRC"," bli":"80490KD2AF2SH5IL0A"," bu ":"707MD7"," bun":"802903H05I03J4LM8V"," by":"81MF0RH0QL8N"," był":"L86"," c'":"75MC1N"," ce ":"7C9C0EJEM"," che":"74080T907A05B2KCO5D04F05J1JL02"," ci":"71580DA2XB2KC6ID02F04I0LJ5UL5OM0S"," com":"7BX83Z907ACUBKZCASD0UJ45"," con":"7A482ZAITBCQCFLD13J80"," cos":"704808A29B0SCIXJ0N"," cs":"I84"," csa":"IAK"," cu":"70V80LA8EB2DC22D02I07JGCL0AM09"," cu ":"JFJ"," cz":"LBQ"," czy":"L8V"," câ":"B08J84"," că":"JF8"," că ":"JIJ"," d'":"78TB02C0T"," da ":"91KA0LB7UC6LH1OJ0UL07M1L"," das":"9JRA03B1MD02"," dat":"70480A903A04B03C18DK0F0EH0SJ3EL02"," de ":"7SGASGBQWDRVF6KH7JI5FJSGM2H"," deg":"702803C0XD08H7UJ0D"," değ":"M9Z"," di ":"A09CPSH04"," did":"881"," die":"70M80N9LQA16B02C0XD67J05L03"," dig":"704802A0OB0WC05F6Y"," do ":"8BRB9QC02LAM"," don":"73E86X903A0UB05C0SD0DM08"," dov":"C8DJ0C"," du ":"77Q9CNFK1HM3"," dzi":"L83"," dé":"76IA0DB03I0A"," dü":"904I04M86"," e ":"A08BAPC5BI02J6I"," ee":"D9C"," een":"DP5"," egy":"803D03F02G02IQ2"," ei ":"902B02D02GHXH09J61"," ein":"9NHD0O"," el ":"APOI82JBXM08"," ela":"B8PI0Q"," ell":"7BLA8QD03F1QG06H27I2CM0D"," em ":"BB7"," en ":"7D2AM9D9FFH6GBVHJIM2Q"," er ":"9AWD8MF24HSCM02"," era":"A2YB2TC8VD09F09J6I"," es ":"71L9C0AKI"," est":"7KG803AQJBPDC10D02G09I1KJPIM03"," et ":"7ANG2PH8AM0I"," ett":"F7BGDGH32I0TM3Y"," eu ":"716BLEJ43"," ez":"IAFJ03M05"," ez ":"IE3"," fai":"7D780FC0FJ07"," faz":"B7KM1Y"," fö":"FF1I0R"," för":"FI0"," fø":"H23"," ger":"702809933A03B0JC0ND0ZF0DI03J0OM97"," gj":"F1OH3T"," gjø":"H5G"," gy":"F03I4G"," gå":"F4SH2D"," gö":"F41I05MAO"," gör":"F57I0AM8D"," ha ":"A3PCFSF2XH3CI7B"," hab":"70Z80399WA8PB08I05M0K"," hav":"87ZB0XD02F07G05H0EI0GM1C"," he ":"8C6A2JG40"," heb":"903A02B02DH2"," hee":"DD1"," her":"70287O92HA2FB06D1CF08G22H2ZI08L0DM71"," het":"DQKF0PG1IH0DI0I"," hij":"A1HDFL"," his":"70G86WA0QB0OF0DG0AH0MI25L0MM1D"," hj":"F25H1S"," ho ":"C9Y"," hog":"A04D07INN"," hon":"70H808902A0CB0BD25FC8G03I0KL02"," hun":"80J915A03D1DF1XG03HBCI03"," hv":"H8E"," hva":"H6S"," hvo":"H89"," hä":"910F9RGGY"," hän":"90GF1SGOM"," här":"FA7G03"," i'":"844"," ic":"71E8049BTF02L0JM02"," ich":"9NPL0S"," ih":"94PF0JG2SM1R"," ik":"DCMF05G1FHAKI02M29"," ik ":"DSG"," ikk":"G0KHMB"," il ":"7JVCKY"," in ":"8CU9AMCP2DGHF1CJ0A"," io":"B02C89J03"," io ":"CCM"," is ":"8FTDQJF03H05I9O"," iss":"80490AB8F"," ist":"9IXB1WC07F05G1AI0YJ0EL0CMBN"," it ":"881"," iç":"MBC"," içi":"MBB"," j'":"78W"," j'a":"7BH"," ja ":"90QD0EF0CGBYH0II05L1B"," jag":"903D02FSG"," jak":"G0DH06L8G"," je ":"7QE90EDN0L0L"," jeg":"HSGI0KL2P"," jes":"805A03B03F02LN0"," kel":"903D03G1EIBSL02M0I"," kj":"F02H2C"," kn":"849906D07F0OH09"," kno":"86F904D07"," kom":"92YD43F8KG0KH6UI0XL18M10"," kä":"906F2EG65"," ké":"I6F"," kö":"91CF2BG0AI5TM2K"," l'":"7D8C6R"," l'a":"7ACC3S"," le ":"7O2A71CBKF02I2MJ1E"," les":"7HW80990JA13B03C03D0CG02H1QI4GL03"," ll":"A5B"," lo ":"ABKC6EH06"," los":"80S90CADJD09L03"," lä":"90IF5MG3Y"," mai":"77L808903B85C3YG1PI0AJDX"," me ":"77J874ADPB7JC3TD7MG38"," meg":"C14HB1IQXL02"," mi ":"A8LCB4H06I5SJ0NL59M56"," mig":"70680XA02C17F9TI02L02"," mij":"DD6J0BL02"," mit":"70697SA07B02C02F22GC7H1JI5T"," moe":"B04D9J"," mui":"B8ED05G24"," my":"703838F2WG26H19L2C"," má":"A54B0GI66"," már":"IAZ"," må":"F4UH2G"," mé":"71AA0FB0MI4I"," n'":"79SC03"," na ":"903B6QD0VI0NLEF"," nag":"70J902D05F03IA3L0J"," ne ":"7JPC21G1QI6OJ2ZM8Q"," nek":"H06ID2"," nem":"B13C0HD0NISFJ06M02"," nie":"70292PA0HC1HDN2G03LQT"," no ":"826APLB77C0NG0LL06"," noe":"D0AH7AM09"," non":"718806CSG"," nou":"7DUD09G11J2Q"," nu ":"702D2AF2PJS4"," nã":"BLO"," não":"BOG"," nä":"90DF3PG5K"," nå":"F4NH2C"," oc":"70K807A19B0UC10D03F6ZJ1PL12M02"," och":"A0AD08F8NJ10L0D"," of ":"8CFD2K"," og":"C21D06F03H6LL15"," og ":"HEI"," old":"80XI0QMA0"," ole":"GNML02"," oli":"A02C03D07F0AGFEI02L02"," om ":"D7WF8ZH6JJ0Z"," on ":"73X860GSGL58M0P"," onu":"MD6"," op ":"DB4"," opp":"705807C05D04G18H5B"," os ":"702A0OB8L"," ov":"80QA03B0BC06D1EF06G3KH1N"," pe ":"JF5"," pou":"7G1804B1R"," pow":"808L89"," prz":"LGN"," pue":"A97"," på":"FCSH7H"," på ":"FG6HGP"," q":"76F80H903ABABB7C5I"," qu":"7OD80Z905AQPBSGCIB"," qu'":"7A1"," qua":"73L806906B9SCCM"," que":"7O880L903ARRBSGCFQ"," qui":"78480ZA93B1CC3J"," qué":"A7V"," sch":"7028159FXC0ND6WF0BI03J1HL0C"," se ":"76NAEWBA7C3FF17GC2H1YI0XJA1"," she":"888G02"," si ":"74TA4NB0CC8DH1DJ05"," sie":"7069G7A3MC2KG1QH1FI0FL1C"," się":"LJL"," ska":"802F50G03H5AL0D"," sl":"80PC07D12F2VH1NJ0WM04"," sn":"809D0MF24H2AL04"," som":"72583U90AA0UB0WC0FD0OF7CG02HATJ0E"," son":"7B780K91JA4MB0SCFPF0HI02M4O"," su ":"704A8VC1AM0H"," sun":"80FG0UH07JFLM05"," sz":"IHAL53"," sze":"IGNL0N"," sä":"906F3ZG1V"," så":"F59H2X"," så ":"F4OH6M"," sö":"F0UG0LI0HMAA"," söy":"MAI"," să":"JPO"," să ":"JSD"," te ":"74FA7DB2VC1UDF0F0EG25H08I5SJ7ZL0W"," tha":"8LQC02D02"," the":"8SG90DD0L"," thi":"8CJ"," tie":"70J80490IAA4C05D0NG8XI04"," til":"803FB5G13HHKI09"," to ":"8QRH1NLG5"," tod":"81890DA8UB58G3Y"," tou":"7CB80C902D02G03"," tu ":"7CQ903A42B0XC3MJ2BL1V"," tud":"B23IFT"," tul":"704G9PH09I0D"," tä":"904F1BGDN"," um":"80291PBK5C08G02H05J0NL18M1D"," um ":"938BFJ"," uma":"902BBTC07J09L07M0F"," un ":"7GWAHNCGSJF1"," una":"804907AD8CB2I0CJ0T"," une":"7D5804908G0JJ15"," vad":"C3TD1AF6WI0OJ0C"," vag":"704A04B03C02IDR"," van":"704803A0JB03C3IDIJF0TG37H3AIHT"," ve ":"A0GC05M8F"," vi ":"A0KB0MC2HF9WH97"," vil":"715805A02B03C05F8TG0KH9OI28"," voc":"702A03BJYC0CD02J0A"," voi":"74Z806C3SGBNJ58"," vol":"71480490QA1RB1NC5BD2CF04H05IFJJ07M02"," voo":"B05DAT"," vou":"7H6B2Q"," vr":"71ID2BF02J6G"," vä":"F6CG42"," væ":"H2M"," vær":"H6J"," w ":"LD1"," wa":"7028CH97BA02B03D8OF02G02L1XM02"," was":"8D396KD9LL0H"," wat":"818DA4"," we ":"85MD9QL0B"," wh":"88WB02"," wie":"96ZD2NL86"," wir":"9B3"," wit":"86Q906D0GL05"," wo":"85K92WD26L22"," wy":"L8Z"," y ":"72JA8M"," yap":"MFB"," ye":"70F81KA05F02J04M8R"," you":"7028LO"," za":"908A0DB07C02D1VI0EJ07LELM6A"," ze":"91FB03C0AD5QI0AJ0LL2FM0W"," ze ":"DCCL1J"," zij":"DII"," zu":"989A03C06D0PI03L0C"," zu ":"9D5"," à":"73CB0Y"," à ":"7F0B37"," á":"A08B0EI2W"," ä":"90BFCOG13"," är":"904FOEG05"," är ":"FRS"," å":"F1MH6J"," å ":"F02H94"," ç":"70OM8P"," ço":"MAT"," çok":"M9Q"," è":"C5N"," è ":"CIM"," é":"727A21B4XD05H03I9Z"," é ":"BI9"," él":"70NA5YI2E"," él ":"A8XI0R"," és":"A0BB08I5O"," és ":"B0AICW"," ét":"76PI0I"," ê":"70N"," î":"JBJ"," în":"JQR"," în ":"JMV"," înt":"JCC"," ö":"905F1SI2KM50"," ø":"H18"," ü":"917I13M24"," ş":"J0EM61"," şe":"M8W"," şey":"M8F"," ż":"L5R"," że":"L8U"," że ":"LAM"," ș":"J49"," și":"J8Y"," și ":"JBW"," б":"KFE"," бы":"KFG"," был":"KCH"," в":"KQJ"," в ":"KJ7"," все":"K7D"," вы":"KF9"," вы ":"KD5"," д":"KHK"," до":"KCG"," за":"KFA"," зна":"KAI"," к":"KGJ"," ка":"KCG"," как":"KBV"," ко":"KCE"," м":"KM1"," мен":"KAA"," мн":"KCI"," мне":"KDC"," мо":"KET"," мы ":"K9E"," мэр":"K7K"," н":"KS4"," на":"KOV"," на ":"KGM"," не":"KSG"," не ":"KSG"," о":"KLC"," он":"KIF"," он ":"KE5"," она":"K8T"," п":"KR9"," по":"KSD"," пр":"KMB"," при":"KCM"," про":"KEF"," ра":"KCG"," с":"KQB"," ска":"K8F"," т":"KPP"," так":"K94"," те":"KBU"," теб":"KAT"," то":"KPV"," том":"KQN"," ты":"KEE"," ты ":"KIB"," хо":"KBV"," ч":"KEK"," чт":"KKA"," что":"KOQ"," эт":"KL4"," это":"KNI"," я":"KGE"," я ":"KQH"," 他":"2I4"," 他们":"2F5"," 你":"2IJ"," 你可以":"2R5"," 你知道":"2O9"," 她":"29B"," 如果":"2E7"," 如果你":"2SA"," 我":"2SG"," 我不":"2OU"," 我不想":"2O0"," 我不知":"2SD"," 我们":"2QU"," 我們":"2O2"," 我喜欢":"2P1"," 我在":"2CQ"," 我希望":"2PL"," 我想":"2I9"," 我的":"2IV"," 我知道":"2RE"," 我觉得":"2O9"," 汤":"261"," 汤姆":"2SG"," 汤姆不":"2OI"," 湯姆":"2MC"," 这":"26O","' ":"802902C0CD02I02","'a":"753C19L02M1D","'ai":"79OC02","'ai ":"7B4","'d":"80LM1N","'e":"73DC0GM04","'es":"7AHC0R","'est":"7ENC0E","'h":"70JC0H","'i":"71DC0IM08","'l":"80RM0F","'m":"814","'o":"70MC0B","'r":"80S","'s":"83K905D0C","'s ":"875908D0I","'t":"863M06","'t ":"8BS","'u":"70PC0BM3K","'un ":"73HM8K","'v":"80Q","'è":"C0K","'é":"70X","-a":"B02G05I02J4T","-a ":"B05J9K","-c":"70KB02","-l":"707802B0KJ0H","-v":"70TB02G02I02J03","a'":"809D03M16",aa:"90BDDZGD4I03L02M0R","aa ":"GJO",aan:"D5AGGL","aan ":"DE7GMY",aar:"90CB02D9PG0V","aar ":"90KDMG",aat:"904D2KG38L02M1O",abl:"72E81L902A41F02I0DJ08L03M05",aca:"70B803A1RB1LC16J1OL0IM9H",acc:"71R80JA0LC5GD02F06J0V",ach:"72581596DA0KB46C04D28J07L2M",aci:"70P805A5WB1LC1GI02J1JL1VM05","ado ":"AEOBB8C40",adı:"MB0","ag ":"80491FD2LFR8H1OI0JJ04",agy:"IBH",agyo:"ICV",aid:"71B837A02B02D02G0KI09J04",aik:"G8VI03",air:"76K80SA08B0TC02D04G0NI02M0G",ais:"7HE805902A09B8ZG9TJ02","ais ":"7JNA0BBAO",ait:"7DS80KG2QI09M07","ait ":"7JB80HD05G08I0MM06",akk:"D0GG1NH2KI15M2R",alc:"707802A0HB0BC47J0LL06M07",alı:"MAI","amo ":"A0EB0FCDVL0C",ando:"70E804A97BA4C8CD06I07J05",anno:"70680ECA6F07G0I","ant ":"7AE84R90ED1RF10H2MI0GJ1SL03",any:"82UI1SL1PM0N",anı:"MAY",aq:"707A0UB18",aqu:"710A2RB5A",arı:"MFI",ası:"MAT","ato ":"802A1KB1HCLFG04I02L05",att:"72M80S917C7BD09FJ8G4FH2VI22M1S","att ":"90CFLIH40I26","au ":"76S90PB08D04H02J9V",auf:"70894RF02L04","av ":"F52H4LJ0BM04","ave ":"70C88PA0IB0EC0KD02H0D",aw:"80OD02L5H","ay ":"702852A2KC0IM1L",aya:"708803A0YMBU","az ":"A0JB1KIGQJ0AL1YM4J",aze:"802B5MC02D02I02J06L0LM0Q",azi:"704805903B0BC5OD03I0BJ17L0CM0D",aç:"702B1FM2A",añ:"A1M",ać:"L4M","ać ":"L99",ağ:"M4L",ał:"LBO","ał ":"L8S",aş:"J08M62",aș:"J23",aț:"J20","ban ":"702802A19G02IG8M06","bb ":"F0HH07I4H","ben ":"7029AIA0KC04DCFF0CH0IIBNM83",bia:"803A0LB10C4EG02J08L0Y",bili:"70E809A0IB0FC0SI03J0OL0BMA4",bir:"808A0JB04C0OI04J0MMQH","bir ":"A0MB03MP9",bt:"803919A02D0EF04I02","bu ":"704L05MBU",bí:"A0MI0I",bø:"H0K","c'":"715C0F","ca ":"805A5EB6RC5NI05J60L1MM30",cas:"70Q80BA4VB59C30J30L02M0B",cer:"71H80GA51B3SC3VD02F08I05J4AL0CM0H","ch ":"70583I9MMA02B02C04D1CF6PL76","che ":"73K80396OA35B07CQ7D12J0H",chen:"7078059C9A03D0NF09",cho:"72W80V914A4PB3PD0WF06L41",cht:"9EFD4M","cht ":"9LXD9D","ci ":"72SB0HC6GI03J8EL52M15",cie:"71O809A39B10C0UD04F05J0SL8J",ció:"A59I0DL0G",cke:"70280O912F6U",cl:"70G80YA0QB0GC06D02J0M","co ":"702802A56B5FC60D02L4Q","com ":"BARL03",con:"77S81YAENBDQCC5D0DI02J5FL05","con ":"704A9TC8LI05",cont:"74680TA58B79C49D0KJ2N",cor:"72F80FA2GB3XC55D03J1PL05",cos:"703805A2TB1TCEHI02J0Q",cost:"703808A0WB0YCCHJ0N",cq:"C06",cs:"702802I9B",csa:"I4X",ct:"70R81PA16B03D0EJ1DL02",cu:"70V80QA4KB1NC20D06I05J8FL13M1D","cu ":"706JA2L0PM0H",cz:"LFV",czy:"LCZ","czy ":"L92",câ:"B02J2M",cê:"B4R","cê ":"BFB",cí:"A0FB03I03",có:"A0NB03I02L0B",că:"J7G","că ":"JJZ","d'":"720808C08M03",dad:"803A61B6BF0RM0I",dag:"902C09D12F45H2BI0C",dans:"79QD0CF0DH0HJ0AM0D",das:"999A2HB43C02F0AG09I08L08M0S","das ":"9EVA3QB4TD04F07G05","dat ":"703DKNF06G07I27J2V",dde:"806C03D0MF1JH2KI05M0R","dde ":"C02D0KF1LH5OM02","deg ":"H7UI0L","des ":"7BQ807934A3RB1GD04F1SG0MH09I0CJ0D","det ":"91DFOHG0MHPFI1QM02",dett:"704C4GF1KG0OH5QI1HM09",değ:"M8T",deği:"M9M",did:"70384IA18B0YC03I02M04","die ":"70I8079HZA1LC02D5AJ05",dig:"70680290QA0KB0TC05D1JF7PH2UI24","dig ":"90MD3XF7PH66I5A",dl:"80990BF0DH0II03L1L","dn'":"83U","dn't":"86Y",dos:"706A66B79C0EG09I06L0XM09","dos ":"707A8WB8HI04",dov:"C5FJ09",dt:"90AD0RF02H1EI2Z","dt ":"90BD14H1XI11",duğu:"M85",dz:"D02I04LEG",dzi:"LKJ",dzie:"LFS",dä:"902F0XG2I",då:"F0DH07",dé:"71SA0AF04H02I1D",dì:"C06",dí:"A10B02I0F",dó:"A0NB03I0FL07",dø:"H0O",dü:"903I0FM5O",dı:"MBL","dı ":"MBL","e'":"81MM07",ear:"83I902A0IB08C03J1E","eb ":"906A02C02D34J0CL04M02",ece:"70480FA4BB5TC0SD02F02I03J2LL08MCC",eci:"70P80LA3QB5NC1LD04F0HJ2HL2FM0B",eef:"D3M",eeft:"DB7",eel:"80L903D2OF02G13","een ":"83J905A07C03DRHGBPH05",eer:"808909A0OD4BG04H03","eer ":"80A90AA0VD8WH06",eft:"80ID3OF1HH04J04M03","eft ":"80XDCTH07","ego ":"803A17B0PC0BLFR",egy:"802F02H0KIFW","egy ":"ILW","ein ":"70H9HCD13G30H0AI03",eine:"70R9NGD0IG0VH0BI05",eir:"80Y908B69H02I02",eit:"807952A04B3BD0AG40H08I0A","ej ":"F0NI03L9Z","ek ":"80C902D23F0FH02IDUL3HME0",eke:"804902C02D1XF09G1AH09I7BJ03L04M1D","ele ":"91PA0NBDIC0MD1VG0XH1JI2QJCTL1BM0I",elig:"706806907A11B0HC06D09F05H6BI02J0HL08",ella:"809A7WC70D02F0NG7PI02M02",elle:"7J2808929A08C3ND20F25G4WH5GI6VM0L",enc:"74281LA4OB34C02I0QL0FM1W","ene ":"80390OA5AB02C3MD0JG0SHAUI1XJ0FM0O",enge:"70380590OB03D20F0WG03H72I4MM09",erc:"71I807A1AB13C5JI0FJ1KL0GM0L","ere ":"89L92JA1NB0CCF5D1WF02H7FI0XJ54M1L","ero ":"802AB0B3XCA2G0DL07",ery:"831G03L0TM06",esc:"70H80791NA4HB66C27D0JJ6A",está:"AB8BAN",esz:"I7ML7R","ete ":"80491CA0ZB0TC9QD0EF0MH0DI1CJ0ZM0I","ett ":"90LF8EH45IBZ",ette:"76P81D911C2ZD17F0HG4GHANIA4M0H",että:"GDJ","eu ":"72Z902BOVJ6F",eux:"78N","eux ":"7CV",ey:"82CA08G05M8V","ey ":"83UA0DB02C03M4U",ez:"72F90DA1CB19C0ID21I9UJ2LL23M1N","ez ":"782A2EB39I6OJ1QL1YM1Z",ezt:"I4L",eä:"G0N",eç:"702B0PM1Q",eñ:"A0L",eğ:"M6O",eği:"MEV",eğil:"M8S",eș:"J2L",eșt:"J80",fai:"78Y80AC09J04M02",faz:"B6BM1Q",fd:"D0L",fj:"F04H09","for ":"87KB07F02HE2",fs:"702908D07",fy:"F07H08",få:"F12H0R",fè:"702C04",fö:"F6RI0K",för:"FG8M02","för ":"FCB",fø:"H1K",fü:"91XI0E",gee:"D25","ger ":"72Y812921A09B04C0FD26F4HH9KI08J05M02",ggi:"802C4J",ght:"84F","ght ":"702871",gio:"706805902A0CB0FC5ZF02H03J03",gj:"F0MH2YI0R",gje:"H1MI05",gjø:"H2B",gjør:"H5Q",gs:"80I90WD0DF0OH11I0T",gt:"705921D0NF25H0RI18","gt ":"705926D0UF5SH0S",gv:"H08I0K",gy:"804F02G02H0EIMM","gy ":"805IMK",gye:"I6I",gyo:"I62",gå:"F23H1M",gö:"F1GI0CM47",gör:"F3YI05M7E",gü:"902A03I0AM3I",hab:"70Z80294BA5UB07I02M0M",hac:"707903A53F05L02","han ":"81RA13D02FFHG3AHF6","har ":"A0FB1NFG4HIEI05J04M06","hat ":"70L8MX986D05G0FI0VM0E",hav:"84JB1BD02F06G06H07I06M16",have:"87PB0KD05F06H07I03",hd:"802903G1WM02",heb:"903A02D53","heb ":"DB7",hee:"807C0BD3ZG0O",heef:"DAM","her ":"71R89B93HB0XH2NM4Y",here:"87T90CA03B0CC08D03G04","het ":"702DQGF1BG09H2HI3C",hey:"83MM0D",hij:"A0YD4Q","hij ":"DFK","his ":"7038CMJ0QM02",hj:"F0SG09H15",hje:"G08H1Q",hl:"80292QG05L03M0A",hm:"91CG0NL05M04","ho ":"819A3LB96C71G03L04",hog:"A05D02IBW",hogy:"IOC","hon ":"705928F9PG0GI19",hou:"708843B0UD1EG05",hr:"70480N965D0FG02L05M07","hr ":"94G",hre:"80P93ID07G06M04",ht:"8279A9D32G2BM15","ht ":"83W9BLD2K","hun ":"D1DG0MHA3",hv:"G08H5IM0B",hva:"G08H2QM08","hva ":"G06H6R",hve:"G02H1RM0L",hvo:"H3D",hvor:"H89",há:"A02B0MI2Z",hã:"B0F",hä:"910F3NG5S",hän:"90AF1EGHN","hän ":"GKG",häne:"GA2",här:"F7RG02","här ":"F9X",hå:"F0XH0F",hé:"70EA02C0XI0W",hö:"914F1JG03I09",hø:"H0X","i'":"827M0D",iac:"A03C4II02L0B",iam:"702804A08B18C9YG04I0BJ0GL0S",iamo:"A03B02CCY",iał:"L8P","ich ":"70380X9SGA02C04D2AL2Q",icht:"9LFD2V",ici:"72X80GA3MB20C4DD05F08I0CJ9ZL0JM0P","ido ":"A84B4WC0OL02",iedz:"L7I",iene:"90BA7WB02C0WD08G0MH05L0Z","iet ":"702807905DLBF0DG02H0PL03",igh:"70282ZC02D05F0SH11J02",igt:"70490KD07F53","igt ":"70390YD0RF6P",iin:"G9UJ0K","iin ":"GC9","ij ":"D81L0L",ijk:"D3I",ijn:"D87","ijn ":"DN9",ikk:"D07G6PHCOI04M0R",ikke:"D0RG0YHNRI06",inde:"703807933A07B07C03D3JF0CH0CI9EJ0YM5U",inge:"70780892UA06B03C0CD3AF60H86I09J0Q",inh:"903B93G07",inha:"702904B7L","ini ":"70FC20G1IJ0VMCC",inul:"GBJJ0Q",inun:"90GA02B02C02GAYJ0O",inä:"GBK","inä ":"GI2",iq:"70PA04B07","ire ":"7E380MA0CB05CFCD05G0AH0FI2AJ1DM07",isk:"803903D04F3JG2JH1WI0QL0SM09",iss:"74080M91ABAGC1UD0JF1VG6UH0TI1BM16",isso:"70PB99G06","ist ":"80T9K6D26F0FH1BJ0WL0HM06",ith:"70283XB02F02G02L02M03","ito ":"803A2PBA0C68G08","itt ":"90DF4QH6NI5U",ità:"C4G",itä:"907GDT","itä ":"GGE",iy:"MDH",iyo:"MIL",iyor:"MKC","iz ":"702A0OB1VM9Q",ià:"C08",iä:"G14",iç:"B0BM6B",içi:"MAF",için:"MBE",iè:"70N",ié:"70CA0PI16",ië:"D0F",iñ:"A0G",iò:"C0A",ió:"A3DI0KL0H","ió ":"A4EI0A",ión:"A6G","ión ":"A9N",iù:"C0W",ię:"LBV","ię ":"LH5",iğ:"M3S",iği:"M94",ił:"L4K",iş:"J02M3V","j'":"71U","j'a":"774","j'ai":"79W",jag:"FQD","jag ":"FSG",jd:"D14F06I0OL0L",jeg:"HHRI0DL2S","jeg ":"HSG",jest:"G0MLM6",jf:"D0GI02",jg:"D07L02",jk:"D2BF05I02L05","jk ":"D2B",jn:"D5II0BL0I","jn ":"D7O","jo ":"A43B0UG15H09",js:"D0BI0AL0Y",jt:"D08I1E",jv:"D0A",já:"B0LI3H",jä:"F1LG1I",jæ:"H08",jø:"H2I",jør:"H2P",kaa:"D0JGB7","kaa ":"G9I",kai:"G6LI0EM02","kan ":"D67FA6G1JH8PI0FM0M",kell:"903G2CIB9","ker ":"80A90PC02D2ZF7KHCUI05M09","ki ":"703A03B03C02G4MH02I5ZL5GM65",kj:"D04F05H2NI03",kje:"D05H2A",kjø:"H1J","kk ":"H29",kke:"D14G0YHEJI0PM07","kke ":"D06G02HNM",kla:"90GD0GF26G06H1TI04L0JM5A",kn:"825905D06F0TH0DI0TL0XM08",kno:"83L902D02L07M02",know:"86E",kom:"91ZD1MF6ZG0VH31I0ML17M0V",komm:"94HD03F6VG09H56I07",kor:"905D07F2CG1HH0FI4RL0KM1Q",ksi:"GAZH04L1LM14","ksi ":"GDQM05",kt:"91CD1YF2ZG05H2SI0UL2OM5D","kt ":"912D29F2SH17L0S",kte:"90ID0MF2LH1TI0CL03M4S",kv:"F0PH0II04",kw:"902D0HL0B",kä:"906F15G43",ké:"I52",kö:"90VF0ZG17I44M0Y",kı:"M4K","l'":"72VC2GM04","l'a":"76DC3D","lar ":"80F90DA2UB2WD08F5NH19J0JMAE",ları:"MBV",lc:"70280290EA08B03C14I0LJ0AL06M08",ldi:"807908A02C12D0AF1AH1MI04M5D",ldu:"902J06M9W",leri:"702905C02F02G03H06M97",lh:"702902B32F02G02H03I0Z",lho:"B5XI03","lig ":"90LD0KF2MH9JI0Q",lij:"D3EG0UI02J03L02",lijk:"D9Y",lik:"82U902D04F10G0TH2KI0IL0GM3S",lj:"D02F16G15H07I2A","lle ":"7IR931A0HC53D1AF5MGGRH9VM04",ller:"73080890YA08C0BD0MF3KG09H5OI05M0X",llä:"F03G91","llä ":"GDN",lma:"702A0AB0CC04D02F02G36I18J05MAM","los ":"70480490MAG6B1ID05G0ZI0AJ0JL02",lr:"807A02F06I0E","ls ":"74S80V92BD2BF0LH02",lui:"73BA04B06C4ED0FG0KJ8J","lui ":"74PB02C6WD03G04JD9",lw:"80BD02L09",lá:"A0AB0EI6D",lä:"90QF2SG4R","lä ":"F02GAF",lå:"F1FH0G",læ:"H0T",lé:"70XA0EB03I2X",lì:"C06",lí:"A0KB0EI0F",lö:"909F0XG0II0P",lø:"H0X",lă:"J26",lı:"M7Q","m'":"70N80CC02L02M4R","m'u":"M8S","m'un":"M8B",maa:"D2VG78M06","mai ":"702C40I0EJEE",mais:"782B8IG1H","mak ":"D02H04I02L03M8H",md:"903D0EF0AH02M20","med ":"80YF8WHB7I05",meg:"C0PH4LIEJL07","meg ":"HAXICL",mek:"G0NH03I0JL09M8Z","mek ":"I0CL0BM8F","mer ":"71C80G93SA1FB0YD23F6RH77I07L06M02",meu:"70GB59J2U",mig:"70580JA1WB2FC17D04F7FI02J03L03","mig ":"F9TI02",mij:"D3RJ06L03",mijn:"DA7",mind:"80J906B08D0DF0AH0CIE3M07",minä:"GB9","mit ":"708807979F0AG03ICJJ1M",mitä:"G9U",ml:"906D02F0HH0AI0JL05M1R",mma:"70F804902C0TD02F4UG1MH05I0H",mme:"77Z80E93PC0WD0HF58G7KH5KI0AM0A","mme ":"76190PC02D05F0CGAWH3U","mo ":"A6FB71CC8G0NL0K",moe:"B04D2V",mond:"72480F906C0OD0AIAYJ07","mos ":"AB3BAVI0HJ0Q",mt:"90QD0EF0RH0UI07J05L06",mui:"B6ZD02G19",muit:"B8EG09","my ":"835L7R",má:"A23B09I5K",már:"B03I4Q","már ":"I98",más:"A5TB0AI3O","más ":"A8QB0AI40",mã:"B0P",mä:"90DF0QG3S",må:"F1WH1W","må ":"F08H1N",mé:"70MA08B08I44",mí:"A0HB05I0H",mø:"H0J",mă:"J2Y",mı:"M5R","n'":"722866C0CM14","n't":"8BS","n't ":"8JF",naa:"D2MG1V",nagy:"IAD","nak ":"IGBL08M04",nb:"90BD0AF08H06I0OM02","nde ":"743931A3VB4IC1XD3MF69H3GJ4FM4K","ndo ":"804AE4BFICBZ",nek:"F02G0FH05IATL0FM0I","nek ":"ID8L0LM08",neke:"G03I9R","nem ":"93MB14ISGJ0AL0WM0F","nen ":"9DJA1AD8VF3KGKGH5FI0JM09",ngen:"70794GA06B04C07D4ZF60G03H78",nger:"72I812917C0PD1LF1RH6XI0QJ0B",nha:"802907B8LF02G0VI02","nha ":"B7WG0S",nho:"904B7KD02G0BI03",nich:"7029HRC02D02L0C","nie ":"70J91LC02D09F02I0ZJ17LSG",niet:"A03DLNL02","nin ":"F02G26M9Y",nlar:"M9D","nn ":"94SF0PH3EI06L02","nno ":"CA8L05",noe:"D0EH2ZM08",non:"71G804COCF02G0RI03","non ":"71ICSGG0LI07","nos ":"70UA7LB5TI14J0AL02",nou:"79980FB0SD02G0NJ1O",nous:"7CNG0U",now:"84JL2D","now ":"86W",nq:"70AA06B07C06",nsk:"F3EG2CH30","nte ":"73J92AAERBERCEGD0MFKMH2EI0OJ3S","nu ":"70YB02D0MF29G05JMAL0XMG5",nul:"708C0UG6OI1GJ48M03",null:"705902C1DGB4I03",nun:"90QA1LB28C08G6LI0EJ0YM94","nun ":"90AGAZM89","nut ":"D02F04GB6J0UL0BM02",nyt:"80MF08G5XH0AI0T","nyt ":"GA6I1M",nz:"91JA0FB02C1ND0CI0VJ09M08",ná:"B05I3E",nál:"I49",nã:"B64",não:"BLP","não ":"BOH",nä:"90BF1NG61","nä ":"GDF",nå:"F1PH1N",någ:"F4E",næ:"H09",nç:"707B0SM0N",né:"70UA07B02I3W",nó:"A08B0QI04L0B",nø:"H0I",nă:"J2E",nı:"M9X","nı ":"MBV","o'":"804C0AD05M05",oar:"804B07F04J9D",och:"714931A28B05C0AD0ZF6HJ0UL38","och ":"959D11F8NL03",ocê:"BH6","ocê ":"BHX",odo:"A4HB3GC0QG18I0GL1E","oe ":"802A02B03C02D1NG02H1P",oen:"B0FD1WF04G05H1L",oet:"A02B03C02D2FG08J02L02","of ":"876904B02D10",ogy:"803IC3","ogy ":"805INQ","oi ":"773B46C7MD07G5MJ5UL0D",oin:"72X832A03B02C03G5IJ05L03",oir:"75XG12",ois:"75N805A06B40C02G6MJ04L03",oit:"73EB1JD0TG7BJ03",oj:"A0JB0IF08G0RI04L4BM04",oldu:"I02MAA","ole ":"71I80I903A04B04C48D02GB2H0EL0P","oli ":"705C0VGAPI02J05L0L","olt ":"903F06H0AIBO","om'":"80OC07G02L04MBW","om'u":"M9Y","omi ":"B05C05F04GAUI5IL02M02",omm:"77880D924C0HD09F5NG1AH2UI0E",omme:"7AP80693JC0LD0HF5BG0FH6P","on'":"83XM23","on't":"86Y","ono ":"A0OB0GCJ3G0EL0E","ons ":"7BI81I902B09D2QF02","ont ":"7BI809902D0UF0JI13J06",oor:"80JD5G","oor ":"80VDB7",opp:"70980E902C1OD06F1OG1NH2TI02","oro ":"A0HB0IC8EG04L0D",orum:"902J05ME3","osa ":"703A24B18C8DG0CI08L04",oss:"71080K90CB4YC4SD04F1SG2WH1GI1L","ost ":"81Q905D0KF0DH0EI5IJBJL06M02",ostr:"A0JB0LCGKF03J0UL15","ott ":"90DF0UH08ICP","ou ":"71H8AJBHKD23J1E",oul:"72N84VG1AJ0O",ould:"88L","our ":"7CD85E",ous:"7K381UB04G0S","ous ":"7QP81LG07",out:"76K840B20D0BF02G0N","out ":"76186GD0P",ouv:"767B1AG03","ow ":"86KB02",owi:"806L8I",oy:"70G80EA1VM1K","oy ":"80CA5LM08",oz:"903A09B0DC0AD04I4BJ0BL2JM09","pas ":"7NKA0DB0ED0AF0OG06",pg:"D07H03","por ":"ACDB9GF04I02M0E",pou:"7AH803B1LG02",pour:"7DN803",powi:"L7U",prz:"LD2",prze:"LAN",przy:"L8S",pue:"A6S",pued:"A7I",py:"809G10L0NM02",pä:"908F03G2D",på:"F4UH4S","på ":"FCIH7D",pø:"H0F",pă:"J23","qu'":"77B",qua:"72G808903B8NC8V",que:"7LK80K904ANZBSDCB0","que ":"7OQ806ARCBRKC0W",quer:"70V903A28B88",ques:"73480LA0EB0DCBK",qui:"75S80PA81B5UC2J",qué:"70PA5C","qué ":"70RA7Y","r'":"804M04",rai:"79P810902A06B0XC1GG0KI04J08","rea ":"806A0GB04C06D02F02G02JC1",rec:"71780R91DA5CB72C0ZD0GF0GI03J4NL08M1H",rer:"71X80290YA0LB0QC0XD02F0JH2HJ0OM09","res ":"77K80K90SA8NB49D0GH18I0ZJ04L0AM02",rij:"B02D22J10",rj:"D02F0LG1JI10M03",rui:"70N804A0GB0EC7MD0SG03J0I",ruir:"704A05B04CBL","rum ":"926D04F0MJ0BL03MDZ",rw:"80390KD0EL10",rz:"912A06C05D0BI0MJ0ALDCM03",rze:"90LC03D03I0GLDD",rzy:"LAE",rà:"C0V",rá:"A1GB17I48",rä:"90MF2IG0U",rå:"F1VH0X",rè:"70U",ré:"71YA0UB04I1F",rí:"A2EB08I0C",ría:"A6MB0D","ría ":"A7S",rò:"C0U",ró:"A0NB0AI21L29",rö:"909F19G02I0T",rø:"H1H",rü:"918I13M2J",ră:"J4A","ră ":"J82",rı:"M7Z","s'":"70W802C05M04","s-":"71BB02I02J1E",saa:"B02G63M1K","sak ":"F0AI96M06",sco:"709808A0XB2WC4FD03J0VL02",sd:"902A08B03D06F04H05I0H",seg:"A1TB2UC2PF04H1XI1D",sei:"70Q947A09B2RC2HG1YH03I06J07","ser ":"73P80593KA2LB3FD05F2PH60I02L03M07",she:"855903D02F02G02I04","she ":"86Z",sic:"70380H93MA0RB0WC20J0KL02M02","sie ":"70E9FHC02D0KJ08L11","sin ":"70I803904A21F2TG9TH2PM5X",sinu:"GCBJ05",się:"LF3","się ":"LJI",sj:"D0EF0WH1JL06","sk ":"80HF1EH2OL04M02","ska ":"F8TG1UI0QL0J",ske:"80O902C02D03F18G2YH4SI09M0C",skj:"F0CH1O","sn'":"83H",sna:"802D04F1DH1QI0NL04M02","so ":"81B91ZA65BDOCBNG0IL04","som ":"B04F79HATI0R",sono:"B07CFS","ss ":"81Y94GF2LH1XI0F","ssa ":"709802B3KC1ZF0XGL5I0C",sse:"76S80V94CB7NC63D0VF0SG06H1RI0FM14","sse ":"74H91EB79C3YD06F02H1NI04","sso ":"BC7C7N",ssz:"I4N",ssä:"F02G6O","ssä ":"GAI","sti ":"B02C2UGA5I05M06","sto ":"905A4RB4RCCZF03G0FH0DL1C",stá:"A7LB8XI0A","stá ":"A81BA5",stä:"90EF2NG9I","stä ":"GB6","su ":"704A5WC0TG0DL12M0W",sunt:"A0AB09C04G08JEJ",sv:"903C0AD03F18G0BH13I04M02",sw:"80E906D03L1G",sz:"906INDLFB","sz ":"I7GL8Z",sza:"I4KL2O",sze:"903ID4L4V",szer:"IFSL06",szo:"I4BL0K",szt:"I4HL0Q",szé:"I4E",sá:"A03B07I2S",sã:"B10",sä:"907F1RG3S","sä ":"G8R",så:"F24H24","så ":"F41H35",sé:"70XA0KB05I3U",ség:"I4N",sì:"C0K",sí:"A0IB07I0Q",sö:"F0WG06I0NM42",söy:"M9A",söyl:"MAI",sø:"H0T",să:"JA3","să ":"JP5",sı:"M84",sın:"M92","t'":"70E81F902C03M02",taa:"904D1DGBNM02","taa ":"GD1",tai:"76K80KB0DC0PD02G4VI0CJ0N","tam ":"B0UIECJ09L1TM0W",tb:"802905A02D08F06H05I0QJ02M04",tc:"80FD02F02I05J04L06","ted ":"86VA1DH0FI39","tem ":"805909B6QD06IDHJ2NL51M02","tet ":"92XF28G09H5WI2CL03",tg:"907D09F02H02","th ":"70284YA02B02L02M02",tha:"7028DL904D02G06I0TM02",that:"8KNI1A","the ":"7028QB",ther:"70288H903D02",they:"86H",thi:"703891903M02",thin:"89L905",this:"86S",tid:"702A19B1GC07F3EH22J02M0A",tien:"71K807904A87C0DD0VF02G1HJ06","til ":"70680G902A0BB0DD08F04HFHJ07M04",till:"70981L907A0DD03FBDG0AH1A",tj:"D0IF0FH0BI0U",tk:"903D03F03G2YH02I0WL2BM0A",toi:"72GC0CG5SL04","tom'":"817G03L05MDE",tomi:"C02F03GIAI7HL04",tos:"704903A41B4RC0ZG2FI1UJ07L07M05",tou:"78F807B5UG06","tre ":"7EE802A17B12C3KF1VH24I0NJ3HM06",treb:"903C0NJC8",trui:"70GA09B08CBPD05J0B","ts ":"75S83C913D1RF16H0EI09","tt ":"90PFO9H70IEH",tta:"70E805906C4WF5UGDTH04I3EM0L","tte ":"76080294LC2ZD1BF0UG3BH96I4BM0G",tti:"70780J902C55D06F0RG6YH0HI05M72",tto:"707804CB1F0AG1UH04I03","tto ":"CEAF02G0B",ttä:"902GCR","ttä ":"GDI","tu ":"7BBA2PB0RC2AG1QJ1EL2HM1M",tw:"80E90YD0SL2N",tz:"92DD05",tà:"C1H","tà ":"C5K",tá:"A2IB2DI5A","tá ":"A5CB8H",tã:"B11",tä:"90IF1GGF4","tä ":"GNT",täm:"F0IG61",tämä:"G9W",tää:"GA5","tää ":"G9V",tå:"F0XH0U",té:"721A0EB0EI4Z","té ":"773A0UB19",tò:"C05",tó:"A0QB0AI2HL1I",tö:"905F0CG0WI38M03",tø:"H0F",tă:"J68","tă ":"JG5",tı:"M71","u'":"71I80O",ual:"70480M902A18B2AC4TG02J0FL05",uan:"71SA2RB57C3AG1PH05M03",uch:"71481793NA4AD0AL1F",ued:"804A6CB04J02",uer:"71M90QA5RB75C0AF02H05",ues:"72N80J904A3DB0FC7IG04H02",uest:"71180NA4BB09CBJG02",ugh:"82V902J05",uh:"70290LG1QH02I0CM0J","ui ":"786A0CB3SC6WD02G2LJBB",uie:"70H803A5PB03J59",uir:"70M804A0MB0OC7PG02J03",uire:"70S805B02CBP",uis:"76N803A0LB0XC07D1FG21",uit:"72L80KA0IB75C0BD2MG0LJ3E",uito:"A06B7BC0AJ06",uld:"84T90DB07D0BF07M1F",ull:"70580F902A09C1KD1NF48G93H1QI09M1D","uma ":"A06BD8C02G0EI02J09M0H",una:"703805903AA9B07C7TG2CI06J2TM1P","una ":"AE3B04CBLG1DJ3EM1L","und ":"81R9C1F1DH0SJ09",une:"7AJ805908A0AB02C0LG0ZH03J4QL05","une ":"7FQ804904C0EJ3S",unk:"80690EF0DG0OH07I58L0IM02","unk ":"808I9F",unn:"807902C07D0NF14G33H27","unt ":"80A902D1HF0DJD4",unu:"G1QJ1CMEA","unu ":"G02J06MC2",uo:"70IA03B03C3JG58L02",utt:"70380690HC4WF0IG78H17I02M0K",uu:"D0RG5F",uw:"D1ZL0Q","ux ":"7A6",uy:"70280CA12M3V",uz:"903A07B09C04D07I04J10L0GM2X",uá:"A0MI02",ué:"70DA20B0H","ué ":"715A5F",uí:"A0OB06",uò:"C0C",uğ:"M3G",uğu:"M8G","v'":"C04",vad:"A0DB0IC2ED0DF5DI0CJ0BM05","vad ":"F6YI03",vag:"706A03B08C08F04I5VJ02",vagy:"IDS",vai:"76E802A03B2QC2BG67I03","van ":"A0MDGZF06G4GIGPJ05M05","var ":"A0KB0RFCEHAII06M72","vat ":"D06F04GCVI05J0VM05",vd:"F06H09M0L","ver ":"72084M904A29B35C0LD4NF4ZH5UI05J05M12","vet ":"F3TG05H5JI2CM0L","vil ":"804A06B02H7M",vill:"717805A0AC05F68G0NH2HI0F",vl:"D0FF0BH03M0K",vn:"F03H0GI04","vo ":"A2HB2SC51G03",voc:"705A0EBH9C0DD02J0D",você:"BJX",voi:"75I806C2DG7OJ50",volt:"B1KC21D02IDFJ08",voo:"B04D34G02",voor:"DB7",vor:"706807921A1MB23C4UD0BF0JH3IJ4EM04",vou:"7E5804B2LD02",vous:"7JG805",vr:"712B0MC0PD1PF04H02I02J1TM0I",vv:"C0GI03",vá:"B07I3Y",vä:"F3EG46",vå:"F15H0L",væ:"H1T",vær:"H2W",vé:"70KA03B02I2Z",waa:"D2P",waar:"D93",wan:"83890OD0ML2P",war:"80M93ZC02D0QL1A",was:"87K93ND2PL0G","was ":"8BP97SD9DL0A",wat:"80OD2TL08","wat ":"D93L03",wd:"D06L18","we ":"835D30L1J",wee:"70480QC04D2KJ03L04",wh:"84L",wha:"83GB02",wie:"937D0PLE2",wil:"821914D23L0O",wir:"94UL02",wit:"83S904D06L0B",with:"86O",wn:"80OL1S",wo:"83292CD24L5L",wr:"80EL0T",ws:"80FD03L33",wy:"L6E",xa:"704805A05B0KD02F05J05",xc:"704805A04B03J03",xp:"70680FA0AB09J0A",xt:"70380D902A0CB06F05J04","y'":"80HM2E",yap:"I05MDO",yb:"809I0GL1FM0E",yc:"803F2FL3XM02",yck:"F6T",ycke:"F6Q","ye ":"703804A05H1LI0SM7Z",yg:"F0IH0FI04L14M0D",yh:"F02G17I09",yi:"80KG0NI2CM64","yi ":"G16I0UM9T",yk:"F06G1CH14I09L1ZM09",yle:"707804G0LI0DL0CMB8",ym:"702807902F07G12H05I0DL53M0D",yor:"702802A0OB02C02F03G03I0MJ03MRC","yor ":"A0JMH0",yoru:"MF8",you:"7028DI","you ":"8HL",yt:"80JF0FG41H0QI16L22","yt ":"F02G6BH03I0XL0R",yv:"F02G1DH04I0UM07",yy:"G1C",yö:"G1VI0AM06",yı:"M4L",ył:"L4H","z-":"70S","ze ":"70780A90QB0AC0OD4ZI0YJ1FL6VM2C",zer:"80290BB5YC09D03I6YJ08L11M1C",zere:"B02IAGM0A",zie:"90RC19D1PJ0DLCA",zij:"D5P",zijn:"DGG",zio:"B02C7OL0E",zion:"CALL08",zt:"916I8EL0J","zt ":"918I70",zu:"964A03B02C02D0II0UJ0SL22M0T","zu ":"95XL0KM0D",zw:"90RD0EL1Z",zy:"802LEPM06","zy ":"804LA5",zá:"A02I3U",zé:"I3I",ß:"90P",ße:"910",à:"71SB0EC13","à ":"73TB0QC2N",á:"A2OB2SIDM","á ":"A2NB46I11",áb:"A05B03I2U",ág:"A03B0AI37",ál:"A09B07I9K",án:"A1AI66",ár:"A08B0OI8U","ár ":"I55",ás:"A2HB0EI5X","ás ":"A7NB16I3G",át:"A06B06I77","át ":"I6B",â:"706B04J34M0B",ân:"B09J3Z",ã:"B4L","ã ":"B0I",ão:"BA3","ão ":"BS0",ä:"91MFDYGMG","ä ":"F02GKQ",äg:"907F1J",äh:"90SG1S",äi:"G2M",äk:"F0OG1G",äl:"90IF3OG2M",äm:"905F0ZG2C",ämä:"G6Z",än:"90ZF5FGBF","än ":"F2NGNO",änd:"90PF3P",äne:"903G67",är:"90QFFXG1K","är ":"FRUG03",äs:"90BF1AG2E",ät:"90YF2FG2Y",ätt:"90MF4NG23",äv:"F0BG1F",äy:"G20",ää:"G7Z","ää ":"GB6",ään:"GBF","ään ":"GGF",å:"F8XH5K","å ":"F7PHDU",åd:"F0KH0G",åg:"F2T",ågo:"F41",åk:"F0SH0I",ål:"F17H0J",ån:"F2PH0I",ång:"F43",åp:"F02H0F",år:"F33H3Q","år ":"F69H4L",ås:"F15H05",åt:"F1MH0Z",æ:"H0V",ær:"H3E",ære:"H2U",ç:"70IB1HM61","ç ":"M3F",ça:"70WB1GM3B",çi:"M5A",çin:"MAH","çin ":"MAR",ço:"706B0OM4H",çok:"M95","çok ":"MA9",çã:"B18",è:"71AC2O","è ":"C6A",èr:"719",ère:"764",ès:"70R","é ":"74LA3LB5BC0ZD02F04I0W",éc:"718A03B04I02",ée:"71I","ée ":"75J",ég:"70BI6T","ég ":"I55",ék:"I32",él:"70IA1WI6U","él ":"A5YI3F",ém:"70AA02B0SI14",én:"70AA0RD05H03I61",ép:"70PI2H",ér:"714A08B0AI81",ért:"I5V",és:"711A13B07I7V","és ":"72RA34B0MI6O",ét:"728A03B03I45",ê:"70WB2M","ê ":"B43",ên:"B0I",ês:"B1J","ês ":"B6H",êt:"71I",ë:"D05","ë ":"D0B",ì:"C0F","ì ":"C10",í:"A2XB0XI2F","í ":"A1ZB03",ía:"A4PB05","ía ":"ABLB02",íc:"A0DB0F",ít:"A05B04I3K",î:"707J50",în:"703J9M","în ":"JFS",ñ:"A0X",ña:"A13",ño:"A1H",ò:"C0T","ò ":"C1Z",ó:"A2SB0YI3TL4P","ó ":"A41B0FI3D",ól:"A0AB04I3BL0G","ól ":"I4SL0C",óm:"A0JI07",ón:"A33I0I","ón ":"A8FI07",ós:"A03B0VI0OL08",ô:"707B06",õ:"B07",õe:"B0I",ö:"915F7KG2BI4TM3Z","ö ":"F06G1A",ön:"915F0OG0LI3MM2G",ör:"90WF98G08I2SM3B","ör ":"903FBII0EM09",örs:"902F3R",öv:"F1QG02I12M04",öve:"F47I11",öy:"G0IM43",öyl:"MAC",öyle:"MAX",ø:"H33",ød:"H0Z",øk:"H0S",øl:"H0S",øm:"H0G",øn:"H11",øp:"H0P",ør:"H4D","ør ":"H27",øre:"H2H",øs:"H0R",øt:"H0Q",øv:"H0M",øy:"H12",ù:"706C0E","ù ":"70DC0X",ú:"A0KB0CI1I",ún:"A0KB05I04",û:"706",ü:"924I2XM80",üb:"91HM03",üc:"915M0C",ül:"908I4UM18",ün:"90LI2GM7P","ünk ":"I97",ür:"926I0CM3B",ă:"JGA","ă ":"JN9",ăr:"J36",ăt:"J1W",ą:"L5Z","ą ":"L82",ć:"L55","ć ":"LC4",ę:"LAM","ę ":"LHC",ğ:"M63",ği:"M95",ğin:"M8G",ğu:"M3T",ğı:"M5K",ı:"MIA","ı ":"MJR",ık:"M4Q",ıl:"M4N",ım:"M8D","ım ":"MEZ",ın:"MFG","ın ":"MFK",ınd:"M9C",ında:"MA4",ını:"MD9","ını ":"MB3",ır:"M6S",ıy:"M5K",ıyo:"MAH",ıyor:"MBU",ız:"M4Y",ış:"M42",ł:"LD6","ł ":"L9M",ła:"L7F",łe:"L66",łem:"L8V","łem ":"LCC",ło:"L5O",ń:"L11",ő:"I3H","ő ":"I36",œ:"704",ś:"L5Z","ś ":"L4S",ş:"J0HM73",şa:"J03M3L",şe:"J03M4F",şı:"M3O",ţ:"J0J",ű:"I0Q",ź:"L0Q",ż:"L6C",że:"L6F","że ":"L97",ș:"J4G",și:"J3U","și ":"J9Z",șt:"J4E",ști:"JAL",ț:"J47",ți:"J78","ți ":"JDV","̇":"M0I",а:"KPL","а ":"KQP","ает ":"K8F",ал:"KFF","ал ":"KEI",ать:"KHM","ать ":"KJY",б:"K8X",в:"KGE",во:"KDH",г:"K7J","гда ":"K8F",го:"KFL","го ":"KIF",гово:"K7T",д:"KDR","да ":"KBW",де:"KEC",дел:"KBG",дела:"KAA",е:"KQR","е ":"KSG","ебе ":"K7E",его:"KD0","его ":"KEP","ему ":"K8J",ен:"KFZ","еня ":"K9Q",ет:"KEY","ет ":"KH9","ешь ":"K8B",ж:"K55",з:"K7K",и:"KLO","и ":"KOL",ит:"KEI",ить:"KBZ","ить ":"KDO",й:"K5A","й ":"KFB",к:"KCN",ка:"KDZ",каза:"K8T","как ":"K8Q",ко:"KFV",л:"KH7","л ":"KFG","ла ":"KBG",ли:"KD3","ли ":"KFU",м:"KGY","м ":"KLY",меня:"KA4","мне ":"KD2","му ":"KB9",мэри:"K7J",н:"KNA",на:"KM8","на ":"KL5",не:"KO8","не ":"KSF",ни:"KGM",но:"KGF","но ":"KH9",о:"KSG","о ":"KSG",ов:"KD4",овор:"K7V",огда:"K7L","ого ":"KC5","ой ":"KE1",ом:"KKG","ом ":"KOQ",он:"KEA","он ":"KC6","она ":"K9G",ост:"KD5",п:"KBR",по:"KKF",пр:"KE6",про:"KDL",р:"KG0",ра:"KHG",ро:"KEM",с:"KJD",сказ:"K7O",ст:"KJO","сть ":"K7P","сь ":"KC0","ся ":"KIV",т:"KPL","т ":"KHV",та:"KD7",те:"KG3","те ":"KCM",то:"KSA","то ":"KRY",том:"KOJ","том ":"KO7","тся ":"KC4","ты ":"KFY",ть:"KIB","ть ":"KR5",у:"KCT","у ":"KIJ",ф:"K0T",х:"K3O",ц:"K1K",ч:"K84",что:"KKH","что ":"KLT",ш:"K4M",щ:"K19",ъ:"K05",ы:"K9R","ы ":"KJX",ь:"KAJ","ь ":"KP3","ься ":"K8D",э:"K3E","эри ":"K7I",это:"KJ4","это ":"KIC",ю:"K3E",я:"KBD","я ":"KRD",ё:"K2N","​":"207",一:"2H5",不:"2I1",不知道:"2DC",了:"2N1","了 ":"2I3",人:"2AJ","什么 ":"2E0",什么时候:"2Q1",他:"2JJ",你:"2K8","吗 ":"275","嗎 ":"25T",在:"2FQ",她:"29M","工作 ":"2C6",我:"2SG",我不知道:"2SG",我们:"27C",我的:"26P",是:"2JR",有:"2E7",汤姆:"27V",的:"2S3","的 ":"29E","的时候 ":"2RL",要:"28S"},uniques:{" aan":"d"," aic":"j"," aik":"g"," aiu":"c"," ao ":"b"," aos":"b"," as-":7," até":"b"," auf":9," auz":"j"," aí":"b"," aú":"a"," cee":"j"," chc":"l"," cs":"i"," ctr":"k"," cu ":"j"," cua":"a"," cóm":"a"," daa":"d"," dl":"l"," dzi":"l"," där":"f"," dår":"h"," dés":7," día":"a"," dón":"a"," död":"f"," ea ":"j"," ear":8," eat":8," een":"d"," eft":"f"," elä":"g"," em ":"b"," epl":"h"," etm":"m"," etw":9," ez ":"i"," ezt":"i"," fez":"b"," fi ":"j"," fiq":"b"," fje":"h"," gaa":"d"," gi ":"h"," gic":"f"," gik":"h"," gje":"h"," gân":"j"," göz":"m"," hje":"h"," hoz":"i"," htt":"k"," hv":"h"," há ":"b"," hâl":"m"," hög":"f"," i'":8," i-":"j"," iar":"j"," ied":"d"," iet":"d"," if ":8," iga":"i"," igj":"h"," ihn":9," iht":"m"," ik ":"d"," ilg":"m"," ilm":"g"," ils":7," ily":"i"," isn":8," it'":8," iub":"j"," iy":"m"," iş":"m"," já ":"b"," kje":"h"," ks":"l"," kt":"l"," kuo":"g"," kuu":"g"," kå":"h"," l-":"j"," lh":"b"," lj":"f"," lle":"a"," luu":"g"," lá ":"b"," låt":"f"," m'a":7," m-":"j"," mj":"f"," mni":"l"," muj":"a"," mè":7," n'a":7," n-a":"j"," ne-":"j"," når":"h"," nós":"b"," oam":"j"," ock":"f"," odp":"l"," og ":"h"," ogg":"c"," ogs":"h"," ohn":9," oik":"g"," olh":"b"," olm":"m"," op ":"d"," oth":8," oí":"a"," pe ":"j"," päi":"g"," rz":"l"," s'e":7," s-":"j"," sb":"c"," sd":"c"," sg":"c"," sje":"h"," szc":"l"," szü":"i"," te-":"j"," tiv":"b"," tym":"l"," työ":"g"," täm":"g"," tè":"c"," töb":"i"," tú ":"a"," túl":"i"," ucc":"c"," un'":"c"," uo":"c"," up ":8," usc":"c"," usk":"g"," v-":"j"," veu":7," vri":"d"," vro":"d"," vän":"f"," way":8," wij":"d"," wo ":9," ws":"l"," wur":9," xí":"b"," yh":"g"," yk":"g"," yl":"g"," ym":"g"," yri":"g"," ys":"g"," yü":"m"," za ":"l"," zas":"l"," zaw":"l"," zd":"l"," zi ":"j"," zij":"d"," zm":"l"," zn":"l"," zo ":"d"," zos":"l"," zr":"l"," zu ":9," |":6," ° ":"c"," ½":9," áll":"i"," án":"a"," äls":"f"," än ":"f"," är ":"f"," äta":"f"," äte":"f"," åk":"f"," åp":"h"," åt ":"f"," ça ":7," çal":"m"," ço":"m"," è ":"c"," é ":"b"," ért":"i"," éta":7," été":7," éx":"a"," éé":"d"," ír":"i"," îm":"j"," în":"j"," ôn":"b"," önc":"m"," öpp":"f"," öss":"i"," úg":"i"," új":"i"," ō":9," şe":"m"," şi ":"j"," şt":"j"," ।":6," २":6," ঈ":5," ঋ":5," ঔ":5," ৩":5," ৪":5," ৬":5," ৮":5," ―":"k"," ‟":9," №":"k"," ご":1," ウサギ":1," エレベ":1," コ":1," ジ":1," テ":1," ド":1," ネズミ":1," バ":1," パ":1," フ":1," ボ":1," マ":1," メ":1," 一人":1," 一日":1," 一般的":1," 不好意":2," 両親":1," 中国語":1," 二人":1," 交通事":1," 今 ":1," 今夜":1," 今度":1," 今晩":1," 今朝":1," 今週末":1," 他一":2," 他不":2," 他人":1," 他可能":2," 他在":2," 他把":2," 他有":2," 会議":1," 何時":1," 俺":1," 僕":1," 先週":1," 列車":1," 労働者":1," 北海道":1," 午前中":1," 博物館":1," 合衆国":1," 君":1," 因為":2," 地下鉄":1," 基本的":1," 外国":1," 多分 ":1," 大学":1," 大家":2," 如":2," 子":1," 実際":1," 宿題":1," 富士山":1," 少年":1," 心配":1," 我今":2," 我从来":2," 我从没":2," 我以":2," 我会":2," 我叔叔":2," 我只":2," 我可":2," 我和":2," 我哥哥":2," 我喜":2," 我妹妹":2," 我完全":2," 我就":2," 我希":2," 我弟弟":2," 我必須":2," 我必须":2," 我感觉":2," 我打算":2," 我把":2," 我无法":2," 我明":2," 我昨":2," 我更喜":2," 我最近":2," 我正在":2," 我没":2," 我無法":2," 我父":2," 我爸爸":2," 我現在":2," 我相信":2," 我看":2," 我知":2," 我能":2," 我覺得":2," 我觉":2," 我認為":2," 我认":2," 我讨厌":2," 我需":2," 我非常":2," 所以":2," 所有":2," 放課後":1," 政治家":1," 新聞":1," 旅行":1," 日曜":1," 昨夜":1," 是的 ":2," 時々 ":1," 晩ご飯":1," 最初":1," 最近 ":1," 最近彼":1," 月日":1," 有些人":2," 来週":1," 残念":1," 湯":2," 現在 ":1," 看護婦":1," 私":1," 科学者":1," 突然 ":1," 結婚":1," 結局":1," 萨米":2," 請":2," 警察官":1," 谢谢 ":2," 這":2," 那":2," 電話番":1," 電車":1," 風邪":1," 飛行":1," 갈 ":3," 같":3," 걱정":3," 걸":3," 결국 ":3," 결혼":3," 경찰":3," 계속":3," 곧 ":3," 공":3," 과학":3," 괜찮":3," 궁금":3," 날":3," 남":3," 넌 ":3," 널 ":3," 네":3," 년 ":3," 노래":3," 노력":3," 누":3," 당":3," 대":3," 더":3," 동":3," 돼 ":3," 되":3," 될 ":3," 두 ":3," 둘 ":3," 때":3," 떠났":3," 또 ":3," 많":3," 먹":3," 메":3," 몇 ":3," 모":3," 몰랐":3," 못":3," 문":3," 뭘 ":3," 미":3," 바":3," 방법":3," 배":3," 번역":3," 벌써 ":3," 본 ":3," 볼 ":3," 봐 ":3," 부":3," 비":3," 살":3," 새 ":3," 생":3," 선생":3," 소":3," 싶":3," 알":3," 언":3," 엄청 ":3," 영":3," 오":3," 완전":3," 왜":3," 운전":3," 음식":3," 음악":3," 잘":3," 재미":3," 저":3," 적":3," 전":3," 절대":3," 점심 ":3," 정":3," 조금":3," 좀":3," 죄송":3," 줄 ":3," 중":3," 줘 ":3," 진짜":3," 질문":3," 집":3," 참 ":3," 처음 ":3," 친구":3," 침대":3," 커피":3," 컴퓨":3," 큰 ":3," 텔레비":3," 파티":3," 프":3," 학교":3," 학생":3," 할":3," 함께":3," 항상":3," 행복":3," 훨씬 ":3," －":9,"'ae":"c","'ai ":7,"'aim":7,"'cl":8,"'d ":8,"'da":"m","'e-":"c","'ea":7,"'eb":"c","'ell":7,"'ep":"c","'eq":"c","'fb":"c","'ha ":"c","'ho ":"c","'hu":7,"'il ":7,"'j":"d","'k":"d","'ll":8,"'ni":"m","'on ":7,"'ou":7,"'ov":"c","'re ":8,"'uc":"c","'uf":"c","'ug":"c","'une":7,"'uo":"c","'uv":"c","'ve":8,"'y ":7,"'ye ":"m","'yi":"m","'à":7,"'á":"b","'â":7,"'è ":"c","'é":7,"'ê":7,"'î":7,"'ü":"m","(-":"k","(q":"b","(y":"a","(z":9,"-$":"n","-'":"m","-ai ":"j","-am ":"j","-ar ":"j","-au ":"j","-ce ":7,"-ell":7,"-il ":7,"-je ":7,"-l ":"j","-lh":"b","-lo ":"b","-là":7,"-me ":"b","-mi ":"j","-moi":7,"-t-":7,"-tu ":7,"-ul":"j","-vou":7,"-à":7,"-ã":"b","-ê":7,"-í":"b","-ó":"i","-ö":"i","-ş":"j","a'd":"m","a'y":"m","aag ":"d","aak ":"d",aakt:"d","aam ":"d",aav:"g",abg:9,acj:"l",acz:"l",adei:"b",afí:"a",agte:9,"agy ":"i",ahd:"g","ahr ":9,aike:"g",aior:"b","ais-":7,aiut:"c",aixo:"b",ajud:"b",alál:"i",amay:"m",ambé:"b","an't":8,apm:"m",aquí:"a",ardz:"l",areb:"c",arfö:"f",arum:9,arü:9,arş:"m",aszt:"i",atok:"i",atât:"j",aufe:9,augh:8,auj:7,autt:"g",avea:"j",avev:"c",avne:"h",avve:"c",avô:"b",ayac:"m",ayud:"a",ayó:"a",azla:"m","azt ":"i",azón:"a",azú:"a",aá:"i",aã:"b",aä:"g",aî:7,aö:"i",aún:"a",baix:"b",baş:"m",berä:"f",besz:"i",bge:9,"biz ":"m",bién:"a",blij:"d","bly ":8,brz:"l",brí:"a","bst ":9,buie:"j",bunu:"m",buon:"c",buu:"d","bym ":"l",bã:"b",bäs:"f",bäu:9,"bè ":"c",bém:"b","bí ":"a","bía ":"a",bî:7,bô:"b",börj:"f",bù:"c",büc:9,"c'es":7,"c'è":"c",cche:"c",ccia:"c",cció:"a",ceea:"j",cepu:"j",chce:"l",chg:9,chk:9,chod:"l",chä:9,chí:"a",chö:9,chü:9,ciod:"j",ciun:"j",ciut:"c",cji:"l",ckan:"f",cma:"j",cois:"b",coj:"a",colh:"b",conh:"b","cos'":"c",csa:"i",cse:"i",csi:"i",cuan:"a",cuch:"a",cuel:"a",cuen:"a",cug:"c",cuie:"j",cuol:"c",cuá:"a","cz ":"l",czas:"l","cze ":"l",czeg:"l",czek:"l",czn:"l",czo:"l",czu:"l",czy:"l",câi:"j",câm:"b",cât:"j",cã:"b",cä:9,cç:"b",cên:"b","cí ":"a","d'h":7,"d'v":8,"d'è":"c","d)":8,daag:"d",daar:"d",daq:"b",davv:"c",daví:"a",daş:"m",ddl:8,degl:"c",deia:"b",dein:9,deir:"b","deu ":"b",deut:9,dey:"m",didn:8,dijo:"a",dinh:"b",dly:8,"dn'":8,"don'":8,dovr:"c",dovu:"c",drik:"h",drz:"l",drí:"a",drü:9,"dta ":"i",dtam:"i","du-":"j",duw:"d",duy:"m","dzi ":"l",dzia:"l",dzie:"l",dzis:"l",dzo:"l",dzy:"l",dà:"c","dá-":"b",dã:"b","dä ":"g","dän ":"g",dät:"g","då ":"f",dål:"f",dè:7,dép:7,dê:"b","dí ":"a","día ":"a",días:"a",dîn:7,dô:"b",dörr:"f",dúv:"b",dû:7,"dü ":"m","dün ":"m",dō:9,"e'r":8,"e'v":8,eady:8,easc:"j",eaun:"j",eave:8,ebè:"c",ecek:"m",eceu:"b",ecir:"a",ecv:"j",ediy:"m",edzi:"l","eea ":"j",eeft:"d",efd:"d",egou:"b",egé:"i","ehe ":9,"ehr ":9,ehs:9,"eht ":9,einm:9,"eio ":"b",eix:"b",ejor:"a",ejó:"a","ekk ":"h",elbs:9,eliy:"m",ellä:"g",elq:7,emey:"m",emiy:"m",emps:7,"emu ":"l","en't":8,enx:"b",enía:"a",eopl:8,eoz:"c",epoi:"b",epui:7,erug:"d","es-t":7,"es-v":7,"esc ":"j",esoi:7,eszc:"l",euch:9,eux:7,"ev'":"c",evn:"h",ewh:8,eyec:"m","eyi ":"m","ezt ":"i",ezte:"i",ezza:"c",ezó:"a",eã:"b","eä ":"g",eça:"b","eço ":"b",eë:"d","eí ":"a",eía:"a",eíb:"a",eíd:"a",eî:"j",eïn:"d",eón:"a",eû:7,"e‘":9,"fa'":"c",fap:"j",faut:7,fazl:"m","fd ":"d","fde ":"d",fds:"d",feel:8,fej:"i",few:8,ffn:9,fft:9,fiec:"j",figl:"c",fikk:"h",filh:"b",flé:7,foar:"j",fois:7,forh:"h",frum:"j",frå:"f",frè:7,frü:9,fuer:"a",fuo:"c",fà:"c",fâr:"j",fã:"b",fäh:9,fåg:"f",fç:"m","fè ":"c",fèr:7,fía:"a",fô:"b",förs:"f",förä:"f",fû:7,füh:9,"g)":8,gaat:"d",ganh:"b",gdy:"l",gdz:"l",gece:"m",geef:"d",geht:9,gesa:9,geï:"d",ggh:"c","ggi ":"c",ggia:"c",ggs:8,ghb:8,ghl:8,giap:"c",gick:"f",gikk:"h",gioc:"c",giov:"c",gitm:"m",gjer:"h",glei:9,glez:"j",glio:"c",glöm:"f",glü:9,goed:"d",gof:"c",good:8,"gou ":"b",gråd:"h",grü:9,gså:"h",gth:8,guf:"c",guma:"b",guv:"j",gye:"i",gyi:"i",gynn:"h",gynt:"h",gyo:"i",gysz:"i","g ":9,gând:"j",gã:"b",gåe:"h",gån:"f",gè:7,gée:7,gía:"a",görm:"m",görü:"m",gù:"c","gún ":"a","gün ":"m",güz:"m","h)":9,hace:"a",haci:"a",hagy:"i",hci:"l",hdä:"g","he'":8,hear:8,hebb:"d","hed ":8,heef:"d","hey'":8,hiam:"c","hij ":"d",hijo:"a",hjem:"h",hjer:"h",hlen:9,hlt:9,hly:8,hlä:9,hnen:9,hnl:9,"ho'":8,hodz:"l",hogy:"i",homb:"a",houd:"d",houg:8,hoy:"a","hoz ":"i",hoş:"m",hrer:9,hrh:9,hrl:9,hrs:9,hrt:9,"hst ":9,http:"k",htä:"g",huo:"g",huvu:"f",huw:"d",hvé:"a",hyv:"g",hár:"i",hã:"b","hän ":"g",häne:"g","här ":"f",hål:"f",hån:"h",håp:"h",hç:"m","hí ":"a",hís:"a",hív:"i",hô:7,höv:"f",hō:9,hş:"m","h‘":9,"i'l":8,"i'm":8,"i'v":8,iacc:"c",iagg:"c",iapp:"c",ibt:9,icz:"l",idzi:"l",idä:"g","iec ":"l",iedy:"l",iedz:"l","iej ":"l",iejs:"l",ielä:"g",igje:"h",igk:9,igvi:"h",igå:"f","ihm ":9,ihmi:"g","ihn ":9,"ihr ":9,ihå:"f",iic:"j",iik:"g",iim:"g","iin ":"g",ijb:"d",ijd:"d",ijf:"d",ijg:"d",ijh:"d","ijk ":"d",ijke:"d","ijn ":"d",ijp:"d",ijt:"d",ijv:"d",ijz:"d",iliy:"m",ilye:"i",incs:"i",inál:"i",iní:"b",ioda:"j",ious:8,ioè:"c",irim:"m",irj:"g",irkl:9,"is-j":7,issz:"i",isä:"g","it's":8,"iu-":"b",iua:"j",iuc:"c",iune:"j",iuo:"c",iusc:"c",iuto:"c",ivät:"g",ixar:"b",iye:"m",iyi:"m",iyo:"m",izio:"c",ià:"c",iã:"b","iä ":"g",iça:"b",iço:"b",ièm:7,iée:7,"ién ":"a",iê:"b",ië:"d",ií:"i",iô:"b",iù:"c",iü:"i","iş ":"m",işe:"m",işi:"m","j'":7,"j-":"i",jaar:"d","jag ":"f",jahr:9,jds:"d",jdt:"d",jedz:"l","jeg ":"h",jego:"l",jelp:"h",jert:"h",jetz:9,jeun:7,"jf ":"d",jft:"d","jg ":"d",jge:"d",jgt:"d",jij:"d",jj:"i",jkh:"d",jks:"d",jkt:"d","jl ":"d",jls:"d",jnl:"d",jns:"d",jnt:"d",joit:"g",jota:"g",joue:7,"jp ":"d",jpe:"d",jpt:"d",jull:"d",juo:"g",juu:"g",jze:"d",jzi:"d",jà:7,jár:"i",ját:"i",jã:"b","jä ":"g",jälv:"f",jå:"h","jé ":"a",jól:"i","kaa ":"g",kauf:9,kijk:"d",kims:"m",kiş:"m",kjed:"h",kjel:"h",kjem:"h",kjen:"h",kjer:"h",kkä:"g",knew:8,know:8,kolm:"g",komt:"d",ksj:"h",kså:"f",kuin:"g",kvel:"h",kvä:"f",kâ:"m","kä ":"g",känd:"f",käv:"g",kåt:"h",kç:"m",kép:"i",kér:"i",kés:"i",két:"i","kö ":"g",köny:"i",köz:"i",kú:"i",kû:"m",kō:9,kş:"m","l'f":"c",laub:9,laş:"m",lbst:9,lcos:"c",lcun:"c","ldu ":"m",left:8,letz:9,"lf-":8,lfd:"d",lgd:"d",lgoz:"i",lgui:"a",lgum:"b",lgú:"a",ligv:"h",lijk:"d",liw:"l",lkä:"g","ll'a":"c","ll'e":"c","llä ":"g",lmay:"m",lmiy:"m",lox:"c",lsj:"d",ltc:"j",ltij:"d",ludz:"l",lvf:"h",lví:"a",lway:8,lyck:"f","lz ":9,lâng:"j",lã:"b",lära:"f",låd:"f",låg:"f","låt ":"f",lè:7,lên:"b","lí ":"a",lía:"a",lû:7,"m'u":"m","m'è":"c","m-v":"b",mawi:"l",mbié:"a","mdi ":"m",megt:"i",megy:"i",mehr:9,meir:"b",mejo:"a",melh:"b",meye:"m",meyi:"m",miei:"c",migh:8,migl:"c",mijn:"d","miz ":"m",miè:7,miş:"m",mjö:"f",mmt:9,mmä:"g","mo-":"b",moet:"d",moje:"l",mq:"c",mulh:"b",muut:"g","muy ":"a",myck:"f",mye:"h",myö:"g","m ":"b",mâi:"j",mânc:"j",mã:"b","mä ":"g",mås:"f",måte:"h",mèr:7,mée:7,mêm:7,"mí ":"a",mía:"a",mój:"l",möc:9,mún:"a",mû:7,müss:9,mş:"m","n'ai":7,"n'd":"m","n't ":8,"n'y":7,"n'è":"c",nagy:"i",namn:"f",nauc:"l",nció:"a",nehm:9,neue:9,next:8,nft:9,nfí:"a",nhec:"b","nho ":"b",nhv:"h",niej:"l",niin:"g",niy:"m",niè:7,nká:"i",nly:8,nnhe:"h",nnr:"h",nnsk:"h",nnst:9,"nnt ":9,nnte:9,nnå:"h",nodi:"d",nooi:"d",noth:8,nouv:7,"now ":8,noë:7,"nq ":7,nskj:"h","nu-":"j",nuev:"a",nung:9,nuov:"c",nuw:"d",nuş:"m",nvän:"f",nych:"l",nyel:"i",nyth:8,nyv:"i",nyá:"i","nz'":"c",nzio:"c","n­":9,"nál ":"i",nã:"b","nä ":"g",näi:"g",näk:"g",någ:"f","når ":"h",nçai:7,nças:"b",nè:7,née:7,nék:"i",néz:"i","nía ":"a",níc:"b","nós ":"b",nù:"c",nş:"m","n‘":9,"o'c":8,obú:"a",ocm:"j",ocui:"j",ocuk:"m",ocz:"l",odob:"l",odpo:"l",odzi:"l",oede:"d",oeg:"d",oek:"d",oesn:8,oew:"d",ofd:"d",oike:"g",oitt:"g",oiu:"j",oix:7,ojc:"l",ojeg:"l",olur:"m",omú:"a",onnt:9,ooit:"d",opd:"d",opg:"d",oruz:"m",osaa:"g",ossz:"i",otde:"j","ou'":8,ough:8,oujo:7,ould:8,ourq:7,ourr:7,ouw:"d",oué:7,"ov'":"c",ovre:"c",ovv:"c","ow'":8,owd:8,"owi ":"l",oyf:8,oyn:"m",oyé:7,ozw:"l",oã:"b",oå:"f",oça:"b",oço:"b","oè ":"c",oël:7,oír:"a",oî:7,oó:"b",où:7,oû:7,"o₂":9,palj:"g",panh:"b",paur:"c",peak:8,pegn:"c",peop:8,peó:"a","pf ":9,pfl:9,pge:"d",piè:7,pmak:"m",pmay:"m","po'":"c",poat:"j",pouv:7,powi:"l",prek:"d",prz:"l",prè:7,pued:"a",puhu:"g",puoi:"c",pués:"a",pyta:"l",pà:"c",pâi:"j",pã:"b",pè:7,pée:7,péu:"b",pôd:"b",pş:"m","q-":"i",qq:"c","qu'":7,qur:8,"quí ":"a","r-o ":"j",raag:"d",rawd:"l","re's":8,"ren'":8,reí:"a",rför:"f",rgd:"d",rijk:"d","rió ":"a",rjoi:"g",rkj:"h",rlf:8,rly:8,rmí:"a",rodz:"l",roun:8,"row ":8,rquo:7,rrow:8,rske:"h",rskj:"h",rsoa:"j",rsq:7,rsök:"f",ruik:"d",ruke:"h",rvä:"f",rykk:"h",rzt:9,rzy:"l","r­":9,rà:"c","rá-":"b",râd:"j",râs:"j",rã:"b",räff:"f",räg:9,räu:9,råg:"f",rån:"f","rè ":"c",rèr:7,"rí ":"a",rías:"a",rív:"b",rôl:7,rù:"c",rû:7,rō:9,"s'es":7,"s'il":7,"s's":8,"s'è":"c","saa ":"g",saan:"g",says:8,saí:"b",saú:"b",sciu:"c",scuc:"a",segí:"i",sehr:9,selb:9,setz:9,"seu ":"b",seul:7,"she ":8,shed:8,shl:8,shr:8,sicu:"c",siin:"g",siit:"g",siy:"m","siz ":"m",siä:"g",siè:7,sión:"a",sjuk:"f",sjö:"f",skje:"h",sks:8,"sn'":8,snil:"h",snö:"f",soas:"b",sotr:"a",spué:"a",ssoa:"b",ssza:"i",ssze:"i",suno:"c",suoi:"c",suur:"g",svå:"f",syy:"g",syö:"g",szab:"i",szik:"i",szy:"l",szá:"i",szé:"i",szí:"i",szül:"i","s­":9,sà:"c",sári:"b","sä ":"g",såd:"f",såg:"f",sè:7,sée:7,ség:"i",sê:"b","sí ":"a",sív:"b",sólo:"a",sô:"b",söy:"m",sù:"c",sû:7,süre:"m","t'v":8,"t'è":"c","t-ce":7,"t-il":7,"t-o ":"j","taa ":"g",tasj:"h",tci:"j",tdea:"j",teir:"b",temt:"h",tení:"a",tept:"j","teu ":"b",tfen:"m",thd:8,they:8,thre:8,tidl:"h",tilb:"h",tinh:"b",tiy:"m",tiè:7,tjen:"h",tly:8,tmek:"m",tmey:"m",tné:"i",toar:"j","tog ":"f",touj:7,tq:9,"tr-":"j",trl:"k",trz:"l",träd:"f",trè:7,ttaa:"g",ttè:"c",tuom:"g",tuvo:"a",tué:7,tvä:"f",två:"f","ty-":8,tylk:"l",tyy:"g","tze ":9,tzl:9,"tzt ":9,tzte:9,tzu:9,tà:"c","tá-":"b","tál ":"i",táx:"b",tâi:"j",tâl:"j",tâmp:"j",târ:"j","tât ":"j",tã:"b","tä ":"g",täi:"g",tåg:"f",tç:"m","tè ":"c",tée:7,ték:"i","tél ":"i",têm:"b",tên:"b","tí ":"a",tío:"a","tól ":"i",tóq:"b",tù:"c","tü ":"m","tün ":"m",tünk:"i",tō:9,"t‘":9,"u'a":7,"u'e":7,"u'i":7,"u'l":8,"u'o":7,"u'r":8,"u'u":7,"u'v":8,"u-i":"j","u-mi":"j",ualc:"c",uap:"a",uase:"b",ucru:"j",ucz:"l",udc:"c",udom:"i",udzi:"l",uede:"a",uego:"a",ueva:"a",uevo:"a",ufen:9,ufg:9,ufz:9,ught:8,ugü:"m",uii:"c",uink:"g",uiu:"b",uién:"a",uió:"a",ujb:"j",ujer:"a",ukaa:"g",umg:9,umne:"j","unn ":"h",unns:"h",unuz:"m",uoc:"c",uog:"c","urd'":7,ureu:7,urü:9,used:8,usst:9,uude:"g",uul:"g","uur ":"d",uuri:"g",uuta:"g",uutt:"g",uvez:7,"uvo ":"a",uvé:7,"uw ":"d",uwd:"d",uws:"d",uwt:"d","ux-":7,uyd:"m",uyor:"m",uyu:"m",uyó:"a",uán:"a",uã:"b",uä:9,uè:7,uée:7,"uém ":"b",uên:"b",uó:"a",uşu:"m","v'e":"c","v'è":"c","v-a":"j","vaa ":"g",vagy:"i",vaik:"g",való:"i",varf:"f","vec ":7,veie:"h",very:8,vesz:"i",veva:"c","vez-":7,vgj:"h",vij:"d",vió:"a","vn ":"h",vnet:"h",voas:"j",vogl:"c",voln:"i",voor:"d",votr:7,"vou ":"b",voul:7,vreb:"c",vreo:"j",vroe:"d",vrou:"d",vuel:"a",vuoi:"c",vuol:"c",vuto:"c",vver:"c",vvo:"c",vz:"m",vâr:"j",vã:"b","vä ":"g",väg:"f",väh:"g",väld:"f",vänd:"f","vät ":"g","vå ":"f",våk:"h",vån:"f",vè:7,vée:7,"vía ":"a",vî:7,"vô ":"b",vú:"i",vş:"m","w's":8,waar:"d",wahr:9,wasn:8,wav:8,ways:8,wcz:"l","we'":8,wea:8,weer:"d",weh:9,wf:8,whe:8,why:8,wia:"l",widz:"l",wiec:"l",wiek:"l",wiem:"l","wil ":"d","wir ":9,wird:9,wirk:9,with:8,"wl ":8,wly:8,woh:9,woi:"l",woj:"l","won'":8,woon:"d",woor:"d",woul:8,wró:"l",wsz:"l",wurd:9,wv:"d",www:"c",wyc:"l",wye:8,wyg:"l",wyj:"l",wyk:"l",wym:"l",wyp:"l",wys:"l",wz:"l",wá:"a",wä:9,wó:"l",wö:9,wü:9,xad:"b",xb:"i","xe-":"b",xed:8,xei:"b",xg:9,xk:9,xm:9,xou:"b",xr:"i",xs:9,xz:9,xã:"b",xíc:"b",xō:"a","y'l":8,"y'n":"m","y'r":8,"y'v":8,"y'y":"m",yaca:"m",yapt:"m",yaş:"m",yby:"l",yci:"l",ycka:"f",ycke:"f",yckl:"f",ycz:"l","ydi ":"m",yea:8,yece:"m",yeu:7,yfr:8,ygd:"h",yhd:"g",yht:"g","yim ":"m",yiy:"m",ykd:"h",ymr:"h",ynyt:"g",yord:"m",yoru:"m",your:8,yrit:"g",ythi:8,ytä:"g",yvin:"g",ywh:8,yâ:"m",yä:"g",yí:"i",yō:9,"z'a":"c","z'o":"c","z-v":7,zaws:"l",zco:"a",zcz:"l",zego:"l",ziec:"l",ziej:"l","zij ":"d",zijn:"d",zinh:"b",ziy:"m","zla ":"m",zoe:"d",zond:"d",zost:"l",zott:"i",zq:"a",zro:"l",ztá:"i",zuu:"d",zwei:9,zyb:"l",zyc:"l",zyj:"l",zyma:"l",zys:"l",zyt:"l",zyw:"l","zz'":"c","zzo ":"c",zzá:"i",zám:"i",zâm:"j",zã:"b",zä:9,zê:"b",zô:"b",zúc:"a","| ":6," =":9," i":9," p":7," u":9," w":"l"," z":"l",ª:"b","­b":9,"­d":9,"­s":9,"²'":"m","· ":"e",ºc:"a","½ ":9,ß:9,"à-":7,àq:"b",às:"b","à ":7,"á'":"i","á-l":"b",áa:"i",ább:"i","ád ":"i","ág ":"i",água:"b",áis:"a",ák:"i",áln:"i",álta:"i","ám ":"i",ána:"i",ány:"i",áo:"i","ár ":"i","ára ":"i",ário:"b",áro:"i",áso:"i","ást ":"i",ásá:"i","át ":"i",áts:"i",átt:"i",ável:"b",áy:"a",áá:"i",áé:"i",áí:"i",áó:"i",áú:"i",áü:"i","â ":"m",âc:7,âg:7,âh:"m","âi ":"j",âin:"j",âk:"m",âln:"j",âmpl:"j",ânca:"j","ând ":"j",ânz:"j",ârs:"j",ârt:"j",ârz:"j","âs ":"j",âu:"j",ây:"m","ã ":"b","ã-":"b",ãe:"b",ãos:"b",ãs:"b",ãz:"b","ä-":"g",äa:"g",äch:9,ädc:9,ädd:"f",äffa:"f",äga:"f",ägg:"f",ägt:9,ähd:"g",ähl:9,ähr:9,ähä:"g",äin:"g",äisi:"g",äit:"g",äiv:"g",äj:"g",äks:"g",äkt:"f",äkä:"g","äl ":"f",äldi:"f","äll ":"f",ällä:"g",älp:"f",älsk:"f","älv ":"f",älä:"g",ämn:"f",ämä:"g",ända:"f",änel:"g","äni ":"g",äny:"g",änä:"g",äq:9,ärn:"f","äsi ":"g",ästa:"f","äta ":"f","ätt ":"f",ätta:"f",ätz:9,ätä:"g",äuf:9,äum:9,ävi:"g",ävä:"g",äx:"f",äy:"g",äz:9,ää:"g",äö:"g",åa:"f",åb:"f",åda:"f",ådi:"h",åel:"h","åg ":"f",åga:"f",åge:"f",ågo:"f",ågr:"f",åh:"f",åka:"f",åkt:"f",åla:"f",åll:"f",åm:"f","ån ":"f",åna:"f",åned:"h",ång:"f",ånn:"h",åpn:"h",åra:"f","åre ":"h",årl:"h",årn:"h",åste:"f",åta:"f","åte ":"h",åtte:"h",åvi:"h",æ:"h","ç ":"m","ç'":"m","ças ":"b",çb:"m",çe:"m",çg:"m",çi:"m",çk:"m",çl:"m",çm:"m",çoc:"m",çok:"m",ços:"b",çou:"b",çr:"m",çs:"m",çt:"m",çy:"m",çá:"b",çã:"b",çç:"m",çó:"b",çö:"m",çú:"b",çü:"m",èb:7,èc:7,èd:7,èg:7,èl:7,èq:7,ès:7,èt:7,èv:7,"è ":"c","é'":"i",écl:7,écou:7,écr:7,ées:7,éfé:7,"ég ":"i","ék ":"i",éke:"i",élet:"i",éln:"i",éno:7,ény:"i",énz:"i","ért ":"i",ész:"i","ét ":"i",étai:7,étud:7,"été ":7,"éu ":"b",éâ:7,éç:7,één:"d",éü:"i","ê ":"b","ê-":"b",êb:"b",êc:7,êl:7,"êm ":"b","ême ":7,ênc:"b",ênd:"b",êni:"b",êp:7,ês:"b",êt:7,êu:"b",êv:7,êx:"b",ëe:"d",ëi:"d",ën:"d",ër:"d",ëz:"d",ì:"c","í-":"b",ían:"a",ík:"i",íng:"b","ío ":"a",íos:"a",íss:"b",íç:"b","î ":"m",îc:7,îi:"j","îl ":"j",îmb:"j",îmi:"j",împ:"j","în ":"j",înc:"j",înd:"j",înf:"j",îng:"j",înn:"j",înr:"j",îns:"j",înt:"j",înv:"j",ît:7,îş:"j",ïf:7,ïnt:"d",ñ:"a",ò:"c","ó-":"i",óa:"i",ócu:"b",óe:"i",óh:"i","ój ":"l","ólo ":"a","ómo ":"a",ónd:"a",óo:"i",ópr:"b",óry:"l",óu:"i",ów:"l",óá:"i",óé:"i",óí:"i",ôni:"b",ôp:7,ôq:"b",ôr:"b",ôs:"b",ôt:7,ôv:"b",õ:"b",öbb:"i",öch:9,öda:"f",öe:9,ögon:"f",öhn:9,öi:"g",öjd:"f",öjl:"f",önce:"m",önnt:9,öo:"g",öra:"f",örja:"f",örsö:"f",örté:"i",össz:"i",ötü:"m",öw:9,öyle:"m",öä:"g",öç:"m",öö:"g",öş:"m",ø:"h","ú-":"i",úe:"a",úgy:"i",úi:"i","új ":"i",úk:"i",úo:"a",úvi:"b",úy:"a","û ":7,ûl:7,ûr:7,ût:7,"ü'":"m",üch:9,ück:9,üen:"a",ühl:9,ühr:9,ünf:9,"ünk ":"i",ünm:"m",ünü:"m",ütf:"m",ütz:9,ütü:"m",üy:"m","üz ":"m",üç:"m",üé:"a",üí:"a",üş:"m",ā:8,ă:"j",ą:"l",ć:"l",ę:"l",ğ:"m","ī ":9,ı:"m",ł:"l",ń:"l","ō ":9,ōb:9,ōc:"a",ōg:9,ōk:9,ōs:9,ōt:9,ő:"i",œ:7,ś:"l","ş'":"m",şam:"m",şan:"m",şar:"m",şb:"m",şek:"m",şey:"m",şf:"m",şg:"m",şh:"m","şi-":"j",şim:"m",şk:"m",şl:"m",şm:"m",şr:"m",şs:"m",ştu:"m",şv:"m",şy:"m",şç:"m",şö:"m",şü:"m",şş:"m",š:"g",ţ:"j",ū:9,ű:"i",ź:"l",ż:"l",ș:"j",ț:"j","́":"k","̇":"m","΄":"e",ΐ:"e",ά:"e",έ:"e",ή:"e",ί:"e",α:"e",β:"e",γ:"e",δ:"e",ε:"e",ζ:"e",η:"e",θ:"e",ι:"e",κ:"e",λ:"e",μ:"e",ν:"e",ξ:"e",ο:"e",π:"e",ρ:"e",ς:"e",σ:"e",τ:"e",υ:"e",φ:"e",χ:"e",ψ:"e",ω:"e",ϊ:"e",ό:"e",ύ:"e",ώ:"e",а:"k",б:"k",в:"k",г:"k",д:"k",е:"k",ж:"k",з:"k",и:"k",й:"k",к:"k",л:"k",м:"k",н:"k",о:"k",п:"k",р:"k",с:"k",т:"k",у:"k",ф:"k",х:"k",ц:"k",ч:"k",ш:"k",щ:"k",ъ:"k",ы:"k",ь:"k",э:"k",ю:"k",я:"k",ё:"k",ѣ:"k","ְ":"n","ֱ":"n","ֲ":"n","ִ":"n","ֵ":"n","ֶ":"n","ַ":"n","ָ":"n","ֹ":"n","ֻ":"n","ּ":"n","ֽ":"n","־":"n","ׁ":"n","ׂ":"n",א:"n",ב:"n",ג:"n",ד:"n",ה:"n",ו:"n",ז:"n",ח:"n",ט:"n",י:"n",ך:"n",כ:"n",ל:"n",ם:"n",מ:"n",ן:"n",נ:"n",ס:"n",ע:"n",ף:"n",פ:"n",ץ:"n",צ:"n",ק:"n",ר:"n",ש:"n",ת:"n","׳":"n","״":"n","،":"o","؛":"o","؟":"o",ء:"o",آ:"o",أ:"o",ؤ:"o",إ:"o",ئ:"o",ا:"o",ب:"o",ة:"o",ت:"o",ث:"o",ج:"o",ح:"o",خ:"o",د:"o",ذ:"o",ر:"o",ز:"o",س:"o",ش:"o",ص:"o",ض:"o",ط:"o",ظ:"o",ع:"o",غ:"o",ـ:"o",ف:"o",ق:"o",ك:"o",ل:"o",م:"o",ن:"o",ه:"o",و:"o",ى:"o",ي:"o","ً":"o","ٌ":"o","ٍ":"o","َ":"o","ُ":"o","ِ":"o","ّ":"o","ْ":"o","٠":"o","١":"o","٩":"o",ٱ:"o",ک:"o",ی:"o","ँ":6,"ं":6,"ः ":6,अ:6,आ:6,इ:6,ई:6,उ:6,ऊ:6,ए:6,ऐ:6,ऑ:6,ओ:6,औ:6,क:6,ख:6,ग:6,घ:6,च:6,छ:6,ज:6,झ:6,ट:6,ठ:6,ड:6,ढ:6,ण:6,त:6,थ:6,द:6,ध:6,न:6,प:6,फ:6,ब:6,भ:6,म:6,य:6,र:6,ल:6,व:6,श:6,ष:6,स:6,ह:6,"़":6,"ा":6,"ि":6,"ी":6,"ु":6,"ू":6,"ृ":6,"ॅ":6,"े":6,"ै":6,"ॉ":6,"ो":6,"ौ":6,"्":6,"०":6,"१":6,"२ ":6,"५ ":6,"९":6,"ঁ":5,"ং":5,অ:5,আ:5,ই:5,উ:5,এ:5,ঐ:5,ও:5,ক:5,খ:5,গ:5,ঘ:5,ঙ:5,চ:5,ছ:5,জ:5,ঝ:5,ঞ:5,ট:5,ঠ:5,ড:5,ঢ:5,ণ:5,ত:5,থ:5,দ:5,ধ:5,ন:5,প:5,ফ:5,ব:5,ভ:5,ম:5,য:5,র:5,ল:5,শ:5,ষ:5,স:5,হ:5,"়":5,"া":5,"ি":5,"ী":5,"ু":5,"ূ":5,"ৃ":5,"ে":5,"ৈ":5,"ো":5,"ৌ":5,"্":5,"ৎ":5,"০":5,"১":5,"২":5,"৩ ":5,"৪ ":5,"৫":5,"৬ ":5,"৭":5,"৮ ":5,"৯":5,ก:4,ข:4,ค:4,ง:4,จ:4,ฉ:4,ช:4,ซ:4,ญ:4,ฎ:4,ฏ:4,ฐ:4,ณ:4,ด:4,ต:4,ถ:4,ท:4,ธ:4,น:4,บ:4,ป:4,ผ:4,ฝ:4,พ:4,ฟ:4,ภ:4,ม:4,ย:4,ร:4,ฤ:4,ล:4,ว:4,ศ:4,ษ:4,ส:4,ห:4,ฬ:4,อ:4,ฮ:4,ะ:4,"ั":4,า:4,ำ:4,"ิ":4,"ี":4,"ึ":4,"ื":4,"ุ":4,"ู":4,เ:4,แ:4,โ:4,ใ:4,ไ:4,ๆ:4,"็":4,"่":4,"้":4,"๊":4,"๋":4,"์":4,ὰ:"e",ὸ:"e","​e":"d","​v":"d","​y":"m","‌":5,"‏":"o","― ":"k","‘ ":9,"‘s":"d","‚":9,"‟ ":9,"‬":"o","‮":"o"," °":9,"№ ":"k","−":9,あ:1,い:1,う:1,え:1,お:1,か:1,が:1,き:1,く:1,け:1,こ:1,さ:1,し:1,じ:1,す:1,せ:1,そ:1,た:1,だ:1,ち:1,っ:1,つ:1,て:1,で:1,と:1,ど:1,な:1,に:1,ね:1,の:1,は:1,ば:1,へ行:1,べ:1,ま:1,み:1,め:1,も:1,ゃ:1,や:1,よ:1,ら:1,り:1,る:1,れ:1,ろ:1,わ:1,を:1,ん:1,ア:1,イ:1,オオカミ:1,カナダ:1,カ合衆国:1,キャプテ:1,ク:1,シャ:1,ジャ:1,ジョ:1,ス:1,タバコ:1,チョコ:1,ッ:1,ティ:1,テレ:1,ディズニ:1,ト:1,ニュ:1,プレゼ:1,プロジェ:1,ミュニケ:1,ム:1,ラ:1,リ:1,ル:1,レビ:1,ン:1,"・・・":1,ー:1,一下:2,一度:1,一日中:1,"一本書 ":2,一生懸:1,一番:1,一緒:1,一起:2,一週間:1,上げ:1,上手:1,"下雨 ":2,不会:2,不可能的:2,"不在家 ":2,不思議:1,不想:2,不是:2,不注意:1,不知:2,不能:2,不要:2,世界一周:1,世界上:2,世界中:1,世界大戦:1,世界平和:1,"东西 ":2,个:2,中華料理:1,为:2,丽:2,么:2,之:2,也:2,书:2,"了 ":2,了一:2,了他:2,了我:2,事務所:1,二次世界:1,交通渋滞:1,人々:1,人間:1,什:2,今天:2,"今日 ":1,仕事:1,"他 ":2,他是:2,他的:2,们:2,"任何人 ":2,会社:1,但:2,住在:2,"作 ":2,你:2,來:2,"個問題 ":2,"個小時 ":2,們:2,"候 ":2,做:2,儿:2,冷蔵庫:1,出発:1,到了:2,勉強:1,動車事故:1,医者:1,"去 ":2,"去学校 ":2,友達:1,发:2,可以:2,可俗話又:2,"可能的 ":2,名前:1,"名字 ":2,吗:2,吧:2,告诉:2,"呢 ":2,"咖啡 ":2,哪:2,"啊 ":2,嗎:2,"回家 ":2,図書館:1,在波士頓:2,在波士顿:2,"地方 ":2,"多少錢 ":2,"多少钱 ":2,大丈夫:1,大統領:1,天早上:2,天然資源:1,她:2,"好 ":2,好的:2,如果:2,姆:2,委員会:1,子供:1,"学习 ":2,学校へ:1,学生時代:1,孩:2,學:2,它:2,宇宙飛行:1,宙飛行士:1,家族:1,对:2,對:2,就是:2,工作:2,"巧克力 ":2,已:2,庁所在地:1,应该:2,开:2,弁護士:1,彼女:1,很:2,怎:2,息子:1,您:2,想要:2,"意思 ":2,"感兴趣 ":2,懸命勉:1,"我 ":2,我々:1,我一:2,我不:2,我在:2,我希望:2,我想:2,我是:2,我有:2,我的:2,我第一次:2,我要:2,我觉得:2,我需要:2,"房子 ":2,所有的:2,手伝:1,手紙:1,"打網球 ":2,打電話給:2,携帯電話:1,日本語:1,早寝早起:1,时:2,明天:2,明日:1,映画:1,昨天:2,昨日:1,是一:2,是不:2,"是多少 ":2,是我:2,時候:2,時間以上:1,晚:2,曜日:1,會:2,有一:2,有人:2,朋:2,本当:1,"来的 ":2,"東西 ":2,样:2,欢:2,歡:2,殺人事件:1,毎日:1,每:2,民主主義:1,気:1,汤:2,沒:2,没有:2,"波士頓 ":2,"波士顿 ":2,海外旅行:1,"游泳 ":2,澳大利亚:2,现:2,生懸命:1,"生活 ":2,的东西:2,的事:2,的人:2,的名字:2,"的問題 ":2,"的国家 ":2,的地方:2,"的城市 ":2,"的女人 ":2,"的想法 ":2,的房子:2,"的房間 ":2,"的故事 ":2,"的照片 ":2,"的話 ":2,"看电视 ":2,看起来:2,"看電視 ":2,県庁所在:1,真的:2,知道:2,私達:1,科学技術:1,第二次世:1,約束:1,经:2,给:2,而:2,自分:1,自動車:1,自己的:2,自己紹介:1,自転車:1,"色的 ":2,行方不明:1,裡:2,西班牙:2,见:2,言葉:1,計画:1,試験:1,誕生日:1,說:2,読む価値:1,话:2,语:2,说:2,请:2,跟:2,车:2,过:2,还:2,这:2,這個:2,運転:1,部屋:1,郵便局:1,"里 ":2,"重要 ":2,重要的:2,間違:1,"问题 ":2,间:2,電話番号:1,音楽:1,飛行機:1,高校時代:1,高速道路:1,麼:2,點:2,가:3,거:3,"건 ":3,"걸 ":3,것:3,게:3,"계속 ":3,고:3,"과 ":3,그:3,기:3,"까 ":3,나:3,난:3,내:3,너:3,"네 ":3,는:3,니:3,다:3,"더 ":3,"데 ":3,도:3,"든 ":3,들:3,라:3,로:3,를:3,리:3,마:3,만:3,말:3,"면 ":3,무:3,보:3,사:3,생각:3,서:3,선생님:3,세:3,수:3,스:3,시:3,신:3,아:3,안:3,않:3,야:3,어:3,없:3,었:3,에:3,여:3,오늘:3,"와 ":3,"왜 ":3,요:3,우:3,으:3,은:3,을:3,의:3,이:3,인:3,일:3,있:3,자:3,"절대 ":3,제:3,"좀 ":3,좋:3,주:3,지:3,"처럼 ":3,컴퓨터:3,"테 ":3,텔레비전:3,톰:3,프랑:3,하:3,한:3,"할 ":3,"함께 ":3,"항상 ":3,해:3,했:3,"히 ":3,"𝑥":9,"－ ":9,"；可俗話":2,"�":9}};var X=/([,，、。!¿?！？":;()「」{}„“«»”"“<>⋯《》*]|[.[\]\\])+/,Z=/[ ]+/;function W(e){return e.split(X)}function Y(e){return e.split(Z)}function y(e,n,o=!0){let t=[],a=o?" ".repeat(n-1)+e+" ".repeat(n-1):e;for(let s=0;s<a.length-(n-1);s++){let r=[],A=0;for(let i=0;i<n;i++)a[s+i]===" "?A+=1:A=0,!(A>1)&&r.push(a[s+i]);let u=r.join("");u.trim().length>0&&u.length===n&&t.push(u)}return t}function x(e,n,o,t){for(let a of L){let s=y(e,a);for(let r of s){if(!o.has(r))continue;let A=F(n.uniques[r]);if(!(t.only.length>0&&!t.only.includes(A)))return t.verbose&&console.log(`[Pass 1] detectUniqueGrams ${a}-grams - match '${r}' to ${A}`),A}}return""}function q(e,n,o){let t=new Map,a=L.map(i=>y(e,i)).flat();o.verbose&&console.log("[Pass 2] DetectPotentialGrams",e,a);let s=new Set([...H.values()].filter(i=>o.only.length>0?o.only.includes(i)||o.only.includes(F(i)):!0));s.forEach(i=>t.set(i,0));for(let i of a){let I=j(i),l=n.multiples[I];if(!l)continue;let G=new Set(Object.keys(l)),m=[];for(let B of s)G.has(B)&&(t.set(B,(t.get(B)||0)+l[B]*I.length/4),m.push(`${B} = ${l[B]/1024*100}%`));o.verbose&&m.length>0&&console.log(`Gram '${I}'`,m)}let r=[...t.entries()];r.sort((i,I)=>I[1]-i[1]);let A=Math.max(...r.map(i=>i[1]))||1,u=r.slice(0,8).map(i=>({lang:F(i[0]),accuracy:1-d((A-i[1])/A),score:d(i[1])}));return o.verbose&&console.log("Result",e,u),u}function p(e,n,o,t){let a=W(e);a=a.map(i=>M(i)).filter(i=>!!i),a.sort((i,I)=>I.length-i.length),a=a.slice(0,7),n.verbose&&console.log("Analize chunks",a);let s=0,r={};for(let i of a){let I=x(i,o,t,n);if(I){r[I]=(r[I]||0)+1*i.length,s+=i.length;continue}let l=Y(i);for(let G of l)q(G,o,n).forEach(B=>{r[B.lang]=(r[B.lang]||0)+B.accuracy}),s+=G.length}let A=Object.entries(r).filter(i=>i[1]>0);A.sort((i,I)=>I[1]-i[1]);let u=A.map(i=>({lang:i[0],accuracy:i[1]/s}));return n.verbose&&console.log("Merge Results",u),u}var E=f,_={uniques:Object.fromEntries(Object.entries(E.uniques).map(e=>[e[0],J[parseInt(e[1].toString(),36)]])),multiples:Object.fromEntries(Object.entries(E.multiples).map(e=>{let n=Object.fromEntries(e[1].match(/(.{1,3})/g)?.map(o=>{let t=o.slice(0,1),a=o.slice(1);return[J[parseInt(t,36)],parseInt(a,36)]})||[]);return[e[0],n]}))},$=new Set(Object.keys(f.uniques));function C0(e,n){let o=e0(e,n);return o.length>0?o[0].lang:""}function e0(e,n){let o=k(n);return b(e)?p(e,o,_,$):[]}

;// CONCATENATED MODULE: ./src/utils/getYTVideoData.js


// Get the language code from the response or the text
function getLanguage(player, response, title, description, author) {
  if (!window.location.hostname.includes("m.youtube.com")) {
    // ! Experimental ! get lang from selected audio track if availabled
    const audioTracks = player.getAudioTrack();
    const trackInfo = audioTracks?.getLanguageInfo(); // get selected track info (id === "und" if tracks are not available)
    if (trackInfo?.id !== "und") {
      return trackInfo.id.split(".")[0];
    }
  }

  // TODO: If the audio tracks will work fine, transfer the receipt of captions to the audioTracks variable
  // Check if there is an automatic caption track in the response
  const captionTracks =
    response?.captions?.playerCaptionsTracklistRenderer?.captionTracks;
  if (captionTracks?.length) {
    const autoCaption = captionTracks.find((caption) => caption.kind === "asr");
    if (autoCaption) {
      return autoCaption.languageCode;
    }
  }
  // If there is no caption track, use detect to get the language code from the text
  const text = [title, description, author].join(" ");
  // Remove anything that is not a letter or a space in any language
  const cleanText = text
    .replace(/https?:\/\/\S+/g, "")
    .replace(/[^\p{L}\s]/gu, "")
    .slice(0, 250);
  return C0(cleanText);
}

// Get the video data from the player
function getYTVideoData() {
  const player = document.querySelector("#movie_player");
  const data = player.getVideoData();
  const response = player.getPlayerResponse();
  const { isLive, isPremiere, title, author } = data;
  const { shortDescription: description } = response?.videoDetails ?? {};
  const videoData = {
    isLive,
    isPremiere,
    title,
    description,
    author,
    detectedLanguage: getLanguage(player, response, title, description, author),
  };
  console.log("VOT Detected language: ", videoData.detectedLanguage);
  return videoData;
}



// EXTERNAL MODULE: ./src/yandexRequests.js
var yandexRequests = __webpack_require__("./src/yandexRequests.js");
// EXTERNAL MODULE: ./src/config/constants.js
var constants = __webpack_require__("./src/config/constants.js");
// EXTERNAL MODULE: ./src/utils/debug.js
var debug = __webpack_require__("./src/utils/debug.js");
;// CONCATENATED MODULE: ./src/menu.js



const userlang = navigator.language || navigator.userLanguage;
let lang = userlang.substr(0, 2).toLowerCase();
if (!(lang in constants/* translations */.Iz)) {
  lang = "en";
}

function changeBtnColor(n) {
  document.querySelector(".translationBtn").style.color = n;
}

function changeBtnState(newState = "none") {
  document.querySelector(".translationBtn").dataset.state = newState;
}

function changeIconBackground(type = "none") {
  let iconBackgroundColor;
  switch (type) {
    case "error":
      iconBackgroundColor = "#7A7A7D";
      break;
    case "success":
      iconBackgroundColor = "#A36EFF";
      break;
    default:
      iconBackgroundColor = "#FFFFFF";
      break;
  }

  document.querySelector(".translateIcon").style.fill = iconBackgroundColor;
}

function transformBtn(type = "none", text) {
  switch (type) {
    case "error":
      changeIconBackground(type);
      changeBtnColor("#7A7A7D");
      changeBtnState(type);
      break;
    case "success":
      changeIconBackground(type);
      changeBtnColor("#A36EFF");
      changeBtnState(type);
      break;
    default:
      changeIconBackground("none");
      changeBtnColor("#FFFFFF");
      changeBtnState("none");
      break;
  }

  document.querySelector(".translationBtn").innerText = text;
}

// Add translation buttton block
function addTranslationBlock(element) {
  if (!element || element.querySelector(".translationBlock")) return;

  const block = document.createElement("div");
  block.classList.add("translationBlock");
  block.innerHTML = `
    <span class = "translationArea" role = "button">
      <span class = "translationITranslate" tabindex = "-1">
        <svg class="translateIcon" width="24" height="24" viewBox="0 0 32 32" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.605 19.703c.794-.13 1.647-.476 2.47-.983.695 1.013 1.255 1.546 1.306 1.593l1.166-1.207c-.011-.01-.504-.48-1.124-1.401.277-.25.547-.512.797-.798a12.1 12.1 0 0 0 2.268-3.826c.383.216.761.541.96 1.027.68 1.649-.301 3.557-1.215 4.385l1.152 1.22c1.52-1.378 2.571-3.959 1.638-6.227-.368-.892-1.077-1.59-2.064-2.037.162-.763.216-1.38.233-1.785h-1.698c-.017.307-.06.762-.173 1.323-1.325-.187-2.818-.006-4.248.508a25.994 25.994 0 0 1-.313-2.547c5.092-.287 8.098-1.488 8.237-1.546l-.654-1.533c-.03.013-2.875 1.14-7.65 1.418-.001-.405-.008-.666-.012-.85-.008-.339-.01-.423.03-.67L17.01 5.75c-.026.283-.024.573-.018 1.278l.002.318c-.026 0-.051 0-.077.002l-.08.001a39.286 39.286 0 0 1-3.27-.14L13.25 8.89c.5.043 2.023.122 3.397.122h.1a19.457 19.457 0 0 1 .208-.003l.106-.002c.067.948.196 2.034.421 3.22a8.05 8.05 0 0 0-2.267 1.963l.811 1.871c.327-.732.995-1.51 1.856-2.111a16.762 16.762 0 0 0 1.33 3.346c-.811.514-1.64.818-2.301.804l.694 1.603Zm2.953-3.488a8.18 8.18 0 0 0 .374-.389 10.465 10.465 0 0 0 1.927-3.224c-.198-.021-.4-.031-.606-.031-.907 0-1.885.199-2.834.574.31 1.209.718 2.23 1.14 3.07ZM9.769 11.688 4.25 24.438h2.259l1.357-3.407h5.582l1.357 3.407h2.258l-5.52-12.75H9.77Zm.887 2.624 2.056 5H8.6l2.056-5Z"></path>
        </svg>
      </span>
      <span class = "translationBtn" tabindex = "0">${constants/* translations */.Iz[lang].translateVideo}</span>
    </span>
    <span class = "translationMenu" tabindex = "0" role = "button">
      <svg class = "translationMenuIcon" height="15" width="5" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
      </svg>
    </span>
  `;

  element.appendChild(block);
  debug/* default */.Z.log("VOT: Added translation button to ", element);
}

function createTranslationMenu() {
  const container = document.createElement("div");
  container.classList.add("translationMenuContent");
  container.innerHTML = `
    <p class = "translationMainHeader">${constants/* translations */.Iz[lang].translationSettings}</p>
    <div class="translationMenuOptions"></div>
    <div class="translationMenuFunctional">
      <a class = "translationDownload">
        <svg width="24px" height="24px" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
        </svg>
      </a>
      <button class = "translationDropDB">${constants/* translations */.Iz[lang].resetSettings}</button>
    </div>
  `;

  container.onclick = (event) => event.stopPropagation();
  return container;
}

// Create checkbox for menu
function createMenuCheckbox(id, valueToCheck, content) {
  const checkboxContainer = document.createElement("div");
  const checkbox = document.createElement("input");
  const checkboxLabel = document.createElement("label");

  checkbox.type = "checkbox";
  checkbox.id = id;
  checkbox.checked = Boolean(valueToCheck);

  checkboxLabel.htmlFor = id;
  checkboxLabel.innerHTML = content;

  checkboxContainer.classList.add("translationMenuContainer");
  checkboxContainer.appendChild(checkbox);
  checkboxContainer.appendChild(checkboxLabel);

  return checkboxContainer;
}

// Create slider for menu
function createMenuSlider(id, sliderValue, content) {
  const sliderContainer = document.createElement("div");
  const slider = document.createElement("input");
  const sliderLabel = document.createElement("label");

  slider.type = "range";
  slider.id = id;
  slider.classList.add("VOTMenuSlider");
  slider.min = 0;
  slider.max = 100;
  slider.value = sliderValue;

  sliderLabel.htmlFor = id;
  sliderLabel.classList.add("translationHeader");
  sliderLabel.innerHTML = content;

  sliderContainer.classList.add("translationMenuContainer");
  sliderContainer.appendChild(sliderLabel);
  sliderContainer.appendChild(slider);

  return sliderContainer;
}

// Create select for menu
function createMenuSelect(id, selectOptions) {
  // selectOptions structure:
  // [
  //     {
  //         label: string,
  //         value: string,
  //         selected: boolean,
  //         disabled: boolean
  //     }
  // ]
  const selectContainer = document.createElement("div");
  const select = document.createElement("select");

  select.id = id;
  select.classList.add("VOTMenuSelect");

  for (const option of selectOptions) {
    const optionElement = document.createElement("option");
    optionElement.innerText = option.label;
    optionElement.value = option.value;
    if (
      Object.prototype.hasOwnProperty.call(option, "selected") &&
      option.selected
    ) {
      optionElement.setAttribute("selected", "selected");
    }

    if (Object.prototype.hasOwnProperty.call(option, "disabled")) {
      optionElement.disabled = option.disabled;
    }

    select.appendChild(optionElement);
  }

  selectContainer.classList.add("translationMenuContainer");
  selectContainer.appendChild(select);

  return selectContainer;
}



;// CONCATENATED MODULE: ./src/utils/utils.js



if (!String.prototype.format) {
  // https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
  // syntax example: "is {0} function".format("format")
  String.prototype.format = function () {
    // store arguments in an array
    var args = arguments;
    // use replace to iterate over the string
    // select the match and check if the related argument is present
    // if yes, replace the match with the argument
    return this.replace(/{(\d+)}/g, function (match, index) {
      // check if the argument is present
      return typeof args[index] != "undefined" ? args[index] : match;
    });
  };
}

function waitForElm(selector) {
  // https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
  return new Promise((resolve) => {
    const element = document.querySelector(selector);
    if (element) {
      return resolve(element);
    }

    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      once: true,
    });
  });
}

const sleep = (m) => new Promise((r) => setTimeout(r, m));

const getVideoId = (service) => {
  const url = new URL(window.location.href);

  switch (service) {
    case "youtube":
      return (
        url.pathname.match(/(?:watch|embed)\/([^/]+)/)?.[1] ||
        url.searchParams.get("v")
      );
    case "vk":
      if (url.pathname.match(/^\/video-?[0-9]{8,9}_[0-9]{9}$/)) {
        return url.pathname.match(/^\/video-?[0-9]{8,9}_[0-9]{9}$/)[0].slice(1);
      } else if (url.searchParams.get("z")) {
        return url.searchParams.get("z").split("/")[0];
      } else if (url.searchParams.get("oid") && url.searchParams.get("id")) {
        return `video-${Math.abs(
          url.searchParams.get("oid")
        )}_${url.searchParams.get("id")}`;
      } else {
        return false;
      }
    case "9gag":
    case "gag":
      return url.pathname.match(/gag\/([^/]+)/)?.[1];
    case "twitch":
      if (/^m\.twitch\.tv$/.test(window.location.hostname)) {
        const linkUrl = document.head.querySelector('link[rel="canonical"]');
        return (
          linkUrl?.href.match(/videos\/([^/]+)/)?.[0] || url.pathname.slice(1)
        );
      } else if (/^player\.twitch\.tv$/.test(window.location.hostname)) {
        return `videos/${url.searchParams.get("video")}`;
      } else if (/^clips\.twitch\.tv$/.test(window.location.hostname)) {
        // get link to twitch channel (ex.: https://www.twitch.tv/xqc)
        const channelLink = document.querySelector(
          ".tw-link[data-test-selector='stream-info-card-component__stream-avatar-link']"
        );
        if (!channelLink) {
          return false;
        }

        const channelName = channelLink.href.replace(
          "https://www.twitch.tv/",
          ""
        );
        return `${channelName}/clip/${url.searchParams.get("clip")}`;
      } else if (url.pathname.match(/([^/]+)\/(?:clip)\/([^/]+)/)) {
        return url.pathname.match(/([^/]+)\/(?:clip)\/([^/]+)/)[0];
      } else {
        return url.pathname.match(/(?:videos)\/([^/]+)/)?.[0];
      }
    case "tiktok":
      return url.pathname.match(/video\/([^/]+)/)?.[1];
    case "vimeo":
      return (
        url.pathname.match(/[^/]+\/[^/]+$/)?.[0] ||
        url.pathname.match(/[^/]+$/)?.[0]
      );
    case "xvideos":
      return url.pathname.match(/[^/]+\/[^/]+$/)?.[0];
    case "pornhub":
      return (
        url.searchParams.get("viewkey") ||
        url.pathname.match(/embed\/([^/]+)/)?.[1]
      );
    case "twitter":
      return url.pathname.match(/status\/([^/]+)/)?.[1];
    case "udemy":
      return url.pathname;
    case "facebook":
      return url.pathname;
    case "rutube":
      return url.pathname.match(/(?:video|embed)\/([^/]+)/)?.[1];
    case "bilibili.com":
      const bvid = url.searchParams.get("bvid");
      if (bvid) {
        return bvid;
      } else {
        let vid = url.pathname.match(/video\/([^/]+)/)?.[1];
        if (vid && url.search && url.searchParams.get("p") !== null) {
          vid += `/?p=${url.searchParams.get("p")}`;
        }
        return vid;
      }
    case "mail.ru":
      if (url.pathname.startsWith("/v/") || url.pathname.startsWith("/mail/")) {
        return url.pathname;
      }
    default:
      return false;
  }
};

function secsToStrTime(secs) {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  if (minutes >= 60) {
    return constants/* translations */.Iz[lang].translationTakeMoreThanHour;
  } else if (minutes >= 10 && minutes % 10) {
    return constants/* translations */.Iz[lang].translationTakeApproximatelyMinutes.format(
      minutes
    );
  } else if (minutes == 1 || (minutes == 0 && seconds > 0)) {
    return constants/* translations */.Iz[lang].translationTakeAboutMinute;
  } else {
    return constants/* translations */.Iz[lang].translationTakeApproximatelyMinute.format(
      minutes
    );
  }
}



// EXTERNAL MODULE: ./src/config/config.js
var config = __webpack_require__("./src/config/config.js");
;// CONCATENATED MODULE: ./src/config/alternativeUrls.js
// Sites host Invidious. I tested the performance only on invidious.kevin.rocks, youtu.be and inv.vern.cc
const sitesInvidious = [
  "invidious.snopyta.org",
  "yewtu.be",
  "invidious.kavin.rocks",
  "vid.puffyan.us",
  "invidious.namazso.eu",
  "inv.riverside.rocks",
  "yt.artemislena.eu",
  "invidious.flokinet.to",
  "invidious.esmailelbob.xyz",
  "y.com.sb",
  "invidious.nerdvpn.de",
  "inv.vern.cc",
  "invidious.slipfox.xyz",
  "invidio.xamh.de",
  "invidious.dhusch.de",
];

// Sites host Piped. I tested the performance only on piped.video
const sitesPiped = [
  "piped.video",
  "piped.tokhmi.xyz",
  "piped.moomoo.me",
  "piped.syncpundit.io",
  "piped.mha.fi",
  "watch.whatever.social",
  "piped.garudalinux.org",
  "efy.piped.pages.dev",
  "watch.leptons.xyz",
  "piped.lunar.icu",
  "yt.dc09.ru",
  "piped.mint.lgbt",
  "il.ax",
  "piped.privacy.com.de",
  "piped.esmailelbob.xyz",
  "piped.projectsegfau.lt",
  "piped.in.projectsegfau.lt",
  "piped.us.projectsegfau.lt",
  "piped.privacydev.net",
  "piped.palveluntarjoaja.eu",
  "piped.smnz.de",
  "piped.adminforge.de",
  "piped.qdi.fi",
  "piped.hostux.net",
  "piped.chauvet.pro",
  "piped.jotoma.de",
  "piped.pfcd.me",
  "piped.frontendfriendly.xyz",
];



;// CONCATENATED MODULE: ./src/indexedDB.js



// --- IndexedDB functions start:
const dbVersion = 2; // current db version
const settingsDefault = {
  key: "settings",
  autoTranslate: 0,
  defaultVolume: 100,
  showVideoSlider: 0,
  syncVolume: 0,
  autoSetVolumeYandexStyle: 1,
  dontTranslateYourLang: 1,
}; // default settings for db v1

const valuesV2 = {
  audioProxy: 0
}

function openDB(name) {
  return indexedDB.open(name, dbVersion);
}

async function initDB() {
  return new Promise((resolve, reject) => {
    function updateVersionProccessor(transaction, db, indexes, previousIndexes = {}) {
      // openRequest is transaction object
      // indexes is object of strings with default values (used for createIndex) ex. {"name": 0}
      // previousIndexes is indexes for previous version
      const objectStore = transaction.objectStore("settings");

      for (const key of Object.keys(indexes)) {
        objectStore.createIndex(key, key, { unique: false });
      }

      console.log("VOT: The database has been updated");
      objectStore.transaction.oncomplete = (event) => {
        const objectStore = db
          .transaction("settings", "readwrite")
          .objectStore("settings");
        const request = objectStore.get("settings");

        request.onerror = (event) => {
          console.error(
            "VOT: Data could not be retrieved from the Database: ",
            event.error
          );
          reject(false);
        };

        request.onsuccess = () => {
          const data = request.result || Object.assign(settingsDefault, previousIndexes); // use data from db or reset all data
          for (const key in indexes) {
            data[key] = indexes[key];
          }

          const requestUpdate = objectStore.put(data);

          requestUpdate.onerror = (event) => {
            console.error(
              "VOT: Failed to update the Database to new version",
              event.error
            );
            reject(false);
          };

          requestUpdate.onsuccess = () => {
            console.log(
              "VOT: Standard settings of the new version have been added to the Database."
            );
            resolve(true);
          };
        };
      };
    }

    const openRequest = openDB("VOT");

    openRequest.onerror = () => {
      console.error(
        `${constants/* translations */.Iz[lang].VOTFailedInitDB}: ${openRequest.error.message}`
      );
      reject(false);
    };

    openRequest.onupgradeneeded = (event) => {
      const db = openRequest.result;

      db.onerror = () => {
        const errorMessage = constants/* translations */.Iz[lang].VOTFailedInitDB;
        alert(errorMessage);
        console.error(errorMessage, openRequest.error);
        reject(false);
      };

      if (event.oldVersion < 1) {
        // db not found
        const objectStore = db.createObjectStore("settings", {
          keyPath: "key",
        });

        // add indexes for 1 version (without key index)
        for (const key of Object.keys(settingsDefault).filter(k => k !== "key")) {
          objectStore.createIndex(key, key, { unique: false });
        }

        console.log("VOT: Database Created");

        objectStore.transaction.oncomplete = (event) => {
          const objectStore = db
            .transaction("settings", "readwrite")
            .objectStore("settings");
          const request = objectStore.add(settingsDefault);

          request.onsuccess = () => {
            console.log(
              "VOT: Standard settings added to the Database: ",
              request.result
            );
            resolve(true);
          };

          request.onerror = () => {
            console.log(
              "VOT: Error when adding standard settings to the Database: ",
              request.error
            );
            reject(false);
          };
        };
      }

      if (event.oldVersion < 2) {
        // db is outdated (db version is 1)
        updateVersionProccessor(openRequest.transaction, db, valuesV2);
      }
    };

    openRequest.onsuccess = () => {
      const db = openRequest.result;
      db.onversionchange = () => {
        db.close();
        const errorMessage = constants/* translations */.Iz[lang].VOTDBNeedUpdate;
        alert(errorMessage);
        console.log(errorMessage);
        window.location.reload();
        reject(false);
      };
      resolve(true);
    };

    openRequest.onblocked = () => {
      const db = openRequest.result;
      const errorMessage = constants/* translations */.Iz[lang].VOTDisabledForDBUpdating;
      console.error(errorMessage, db);
      alert(errorMessage);
      reject(false);
    };
  });
}

async function updateDB({
  autoTranslate,
  defaultVolume,
  showVideoSlider,
  syncVolume,
  autoSetVolumeYandexStyle,
  dontTranslateYourLang,
  audioProxy,
}) {
  return new Promise((resolve, reject) => {
    if (
      typeof autoTranslate === "number" ||
      typeof defaultVolume === "number" ||
      typeof showVideoSlider === "number" ||
      typeof syncVolume === "number" ||
      typeof autoSetVolumeYandexStyle === "number" ||
      typeof dontTranslateYourLang === "number" ||
      typeof audioProxy === "number"
    ) {
      const openRequest = openDB("VOT");

      openRequest.onerror = () => {
        const errorMessage = constants/* translations */.Iz[lang].VOTFailedWriteToDB;
        alert(errorMessage);
        console.error(errorMessage, openRequest.error.message);
        reject(false);
      };

      openRequest.onupgradeneeded = async () => {
        const db = openRequest.result;
        db.close();
        await initDB();
        resolve(true);
      };

      openRequest.onsuccess = () => {
        const db = openRequest.result;
        db.onversionchange = () => {
          db.close();
          console.log(
            "VOT: The database needs an update, please reload the page if it didn't happen automatically"
          );
          window.location.reload();
          reject(false);
        };

        const objectStore = db
          .transaction("settings", "readwrite")
          .objectStore("settings");
        const request = objectStore.get("settings");

        request.onerror = (event) => {
          console.error(
            "VOT: Data could not be retrieved from the Database: ",
            event.error
          );
          reject(false);
        };

        request.onsuccess = () => {
          const data = request.result;

          if (typeof autoTranslate === "number") {
            data.autoTranslate = autoTranslate;
          }

          if (typeof defaultVolume === "number") {
            data.defaultVolume = defaultVolume;
          }

          if (typeof showVideoSlider === "number") {
            data.showVideoSlider = showVideoSlider;
          }

          if (typeof syncVolume === "number") {
            data.syncVolume = syncVolume;
          }

          if (typeof autoSetVolumeYandexStyle === "number") {
            data.autoSetVolumeYandexStyle = autoSetVolumeYandexStyle;
          }

          if (typeof dontTranslateYourLang === "number") {
            data.dontTranslateYourLang = dontTranslateYourLang;
          }

          if (typeof audioProxy === "number") {
            data.audioProxy = audioProxy;
          }

          const requestUpdate = objectStore.put(data);

          requestUpdate.onerror = (event) => {
            console.error(
              "VOT: Не удалось обновить данные в Базе Данных: ",
              event.error
            );
            reject(false);
          };

          requestUpdate.onsuccess = () => {
            resolve(true);
          };
        };
      };

      openRequest.onblocked = () => {
        const db = openRequest.result;
        const errorMessage = constants/* translations */.Iz[lang].VOTDisabledForDBUpdating;
        console.error(errorMessage, db);
        alert(errorMessage);
        reject(false);
      };
    }
  });
}

async function readDB() {
  return new Promise((resolve, reject) => {
    const openRequest = openDB("VOT");

    openRequest.onerror = () => {
      const errorMessage = constants/* translations */.Iz[lang].VOTFailedReadFromDB;
      alert(errorMessage);
      console.error(errorMessage, openRequest.error.message);
      reject(false);
    };

    openRequest.onupgradeneeded = async () => {
      const db = openRequest.result;
      db.close();
      await initDB();
      resolve(true);
    };

    openRequest.onsuccess = () => {
      const db = openRequest.result;
      db.onversionchange = () => {
        db.close();
        const errorMessage = constants/* translations */.Iz[lang].VOTDBNeedUpdate;
        alert(errorMessage);
        console.error(errorMessage);
        reject(false);
      };

      const objectStore = db.transaction("settings").objectStore("settings");
      const request = objectStore.get("settings");

      request.onerror = (event) => {
        console.error(constants/* translations */.Iz[lang].VOTFailedReadFromDB, event.error);
        console.error(event);
        reject(false);
      };

      request.onsuccess = () => {
        if (request.result === undefined) {
          db.close();
          deleteDB();
          reject(false);
        }
        const data = request.result;
        resolve(data);
      };
    };

    openRequest.onblocked = () => {
      const db = openRequest.result;
      const errorMessage = constants/* translations */.Iz[lang].VOTDisabledForDBUpdating;
      console.error(errorMessage, db);
      alert(errorMessage);
      reject(false);
    };
  });
}

function deleteDB() {
  indexedDB.deleteDatabase("VOT");
}


;// CONCATENATED MODULE: ./src/utils/volume.js
// element - audio / video element
function syncVolume(element, sliderVolume, otherSliderVolume, tempVolume) {
  let finalValue;
  if (sliderVolume > tempVolume) {
    // sliderVolume = 100
    // tempVolume = 69
    // volume = 15
    // 100 - 69 = 31
    // 15 + 31 = 46 - final video volume
    finalValue = otherSliderVolume + (sliderVolume - tempVolume);
    finalValue = finalValue > 100 ? 100 : Math.max(finalValue, 0);

    element.volume = finalValue / 100;
  } else if (sliderVolume < tempVolume) {
    // sliderVolume = 69
    // tempVolume = 100
    // volume = 15
    // 100 - 69 = 31
    // 15 - 31 = 0 - final video volume
    finalValue = otherSliderVolume - (tempVolume - sliderVolume);
    finalValue = finalValue > 100 ? 100 : Math.max(finalValue, 0);

    element.volume = finalValue / 100;
  }

  return finalValue;
}



// EXTERNAL MODULE: ./src/config/config-cloudflare.js
var config_cloudflare = __webpack_require__("./src/config/config-cloudflare.js");
;// CONCATENATED MODULE: ./src/config/regexes.js
const regexes = () => {
  return {
    youtubeRegex: /^(www.|m.)?youtube(-nocookie)?.com$/,
  };
};

/* harmony default export */ const config_regexes = (regexes());

;// CONCATENATED MODULE: ./src/config/selectors.js
const selectors = () => {
  return {
    youtubeSelector: ".html5-video-container",
    twitchSelector: ".video-ref",
    twitchMobileSelector: "main > div > section > div > div > div",
    pipedSelector: ".shaka-video-container",
    vkSelector: ".videoplayer_media",
    twitterSelector:
      'div[data-testid="videoComponent"] > div:nth-child(1) > div',
    vimeoSelector: ".player",
    gagSelector: ".video-post",
    bilibilicomSelector: ".bpx-player-video-wrap",
    mailSelector: "#b-video-wrapper",
  };
};

/* harmony default export */ const config_selectors = (selectors());

;// CONCATENATED MODULE: ./src/index.js















const sitesChromiumBlocked = [...sitesInvidious, ...sitesPiped];

// translate properties
let translateFromLang = "en"; // default language of video

let translateToLang = "ru"; // default language of audio response

async function src_main() {
  debug/* default */.Z.log("Loading extension...");
  debug/* default */.Z.log(`Selected menu language: ${lang}`);
  // test all translations in console
  // debug.translations('ru');
  // debug.translations('en');
  // debug.translations('de');
  // debug.translations('zh');
  // debug.translations('es');
  // debug.translations('fr');
  // debug.translations('it');

  const rvt = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./src/rvt-cloudflare.js"));

  const requestVideoTranslation = rvt.default;

  debug/* default */.Z.log("Inited requestVideoTranslation...");

  if (
    false
  ) {}

  debug/* default */.Z.log("Extension compatibility passed...");

  let timer;
  const audio = new Audio();
  let opacityRatio = 0.9;
  let openedMenu = false;

  if (true) {
    var translationPanding = false;
  }

  function logout(n) {
    if (openedMenu) return;

    document.querySelector(".translationBlock").style.opacity = n;
  }

  function resetTimer() {
    clearTimeout(timer);
    logout(1);
    timer = setTimeout(() => {
      logout(0);
    }, 2000);
  }

  function changeOpacityOnEvent(event, timer, opacityRatio) {
    clearTimeout(timer);
    logout(opacityRatio);
    event.stopPropagation();
  }

  const deleteAudioSrc = () => {
    audio.src = "";
    audio.removeAttribute("src");
  };

  // Add menu container
  function addTranslationMenu(element) {
    if (element.querySelector(".translationMenuContent")) return;

    const container = createTranslationMenu();
    element.appendChild(container);

    // click to translation menu icon
    document
      .querySelector(".translationMenu")
      ?.addEventListener("click", (event) => {
        event.stopPropagation();
        const content = document.querySelector(".translationMenuContent");
        content.style.display = openedMenu ? "none" : "block";
        content.style.opacity = opacityRatio;
        openedMenu = !openedMenu;
      });

    document
      .querySelector(".translationDropDB")
      .addEventListener("click", (event) => {
        event.stopPropagation();
        deleteDB();
        location.reload();
      });

    debug/* default */.Z.log("VOT: Added translation menu to ", element);
  }

  function translateVideo(url, unknown1, requestLang, responseLang, callback) {
    debug/* default */.Z.log(
      `Translate video (url: ${url}, unknown1: ${unknown1}, requestLang: ${requestLang}, responseLang: ${responseLang})`
    );

    if ( true && translationPanding) {
      debug/* default */.Z.log("translationPanding return");
      return;
    }

    translationPanding = true;

    requestVideoTranslation(
      url,
      unknown1,
      requestLang,
      responseLang,
      (success, response) => {
        translationPanding = false;

        debug/* default */.Z.log("[exec callback] Requesting video translation");
        if (!success) {
          callback(false, constants/* translations */.Iz[lang].requestTranslationFailed);
          return;
        }

        const translateResponse = yandexRequests/* yandexRequests */.G.decodeResponse(response);
        console.log("VOT Response: ", translateResponse);

        switch (translateResponse.status) {
          case 0:
            callback(false, translateResponse.message);
            break;
          case 1:
            callback(
              !!translateResponse.url,
              translateResponse.url || constants/* translations */.Iz[lang].audioNotReceived
            );
            break;
          case 2:
            callback(
              false,
              translateResponse.remainingTime
                ? secsToStrTime(translateResponse.remainingTime)
                : constants/* translations */.Iz[lang].translationTakeFewMinutes
            );
            break;
          case 3:
            /*
              Иногда, в ответе приходит статус код 3, но видео всё, так же, ожидает перевода. В конечном итоге, это занимает слишком много времени,
              как-будто сервер не понимает, что данное видео уже недавно было переведено и заместо возвращения готовой ссылки на перевод начинает переводить видео заново при чём у него это получается за очень длительное время
            */
            callback(false, constants/* translations */.Iz[lang].videoBeingTranslated);
            break;
        }
      }
    );
  }

  async function translateProccessor(videoContainer, siteHostname, siteEvent) {
    debug/* default */.Z.log("[translateProccessor] execute on element: ", videoContainer);

    let video;
    let autoRetry;
    let volumeOnStart;
    let tempOriginalVolume;
    let tempVolume;
    let dbAutoTranslate;
    let dbDefaultVolume;
    let dbShowVideoSlider;
    let dbAutoSetVolumeYandexStyle;
    let dontTranslateYourLang;
    let dbSyncVolume;
    let dbAudioProxy; // cf version only
    let firstPlay = true;
    let isDBInited;

    debug/* default */.Z.log("videoContainer", videoContainer);

    video =
      siteHostname === "vimeo"
        ? videoContainer.querySelector(
            ".vp-video-wrapper > .vp-video > .vp-telecine > video"
          )
        : videoContainer.querySelector("video");

    debug/* default */.Z.log("video", video);

    let videoData = getVideoData();
    console.log("VOT Video Data: ", videoData);

    const container =
      siteHostname === "pornhub" &&
      window.location.pathname.includes("view_video.php")
        ? document.querySelector(".original.mainPlayerDiv")
        : siteHostname === "pornhub" &&
          window.location.pathname.includes("embed/")
        ? document.querySelector("body")
        : window.location.hostname.includes("m.youtube.com")
        ? document.querySelector("#player-control-container")
        : videoContainer;

    addTranslationBlock(container);
    addTranslationMenu(container);

    try {
      isDBInited = await initDB();
    } catch (err) {
      console.error(
        "[VOT] Failed to initialize database settings. All changes made will not be saved",
        err
      );
    }

    const menuOptions = document.querySelector(".translationMenuOptions");
    if (menuOptions && !menuOptions.querySelector("#VOTTranslateFromLang")) {
      const selectFromLangOptions = [
        {
          label: constants/* translations */.Iz[lang].videoLanguage,
          value: "default",
          disabled: true,
        },
        ...Object.entries(constants/* availableLangs */.tW).map(([key, value]) => ({
          label: constants/* translations */.Iz[lang][value],
          value: key,
          selected: videoData.detectedLanguage === key,
        })),
      ];

      const selectToLangOptions = [
        {
          label: constants/* translations */.Iz[lang].translationLanguage,
          value: "default",
          disabled: true,
        },
        ...Object.entries(constants/* availableLangs */.tW).map(([key, value]) => ({
          label: constants/* translations */.Iz[lang][value],
          value: key,
          selected: videoData.responseLanguage === key,
        })),
      ];

      const selectFromLang = createMenuSelect(
        "VOTTranslateFromLang",
        selectFromLangOptions
      );

      const selectToLang = createMenuSelect(
        "VOTTranslateToLang",
        selectToLangOptions
      ).firstElementChild;

      selectFromLang.id = "VOTSelectLanguages";
      selectFromLang.innerHTML += `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m0 0l-6 6m6-6l-6-6"/>
        </svg>
      `;

      selectFromLang.appendChild(selectToLang);
      menuOptions.appendChild(selectFromLang);

      menuOptions
        .querySelector("#VOTTranslateFromLang")
        .addEventListener("change", (event) => {
          debug/* default */.Z.log("[onchange] select from language", event.target.value);
          videoData = setDetectedLangauge(videoData, event.target.value);
        });

      menuOptions
        .querySelector("#VOTTranslateToLang")
        .addEventListener("change", (event) => {
          debug/* default */.Z.log("[onchange] select to language", event.target.value);
          videoData = setResponseLangauge(videoData, event.target.value);
        });
    }

    if (isDBInited) {
      const dbData = await readDB();
      if (dbData) {
        dbAutoTranslate = dbData.autoTranslate;
        dbDefaultVolume = dbData.defaultVolume;
        dbShowVideoSlider = dbData.showVideoSlider;
        dbAutoSetVolumeYandexStyle = dbData.autoSetVolumeYandexStyle;
        dontTranslateYourLang = dbData.dontTranslateYourLang;
        dbAudioProxy = dbData.audioProxy; // cf version only
        dbSyncVolume = dbData.syncVolume; // youtube only

        debug/* default */.Z.log("[db] data from db: ", dbData);

        if (
          dbAutoTranslate !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTAutoTranslate")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTAutoTranslate",
            dbAutoTranslate,
            constants/* translations */.Iz[lang].VOTAutoTranslate +
              (siteHostname === "vk" ||
              window.location.hostname.includes("m.twitch.tv")
                ? ` <strong>(${constants/* translations */.Iz[lang].recommended})</strong>`
                : "")
          );

          checkbox.querySelector("#VOTAutoTranslate").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ autoTranslate: value });
            dbAutoTranslate = value;
            debug/* default */.Z.log(
              "autoTranslate value changed. New value: ",
              dbAutoTranslate
            );
          };

          menuOptions.appendChild(checkbox);
        }

        if (
          window.location.hostname.includes("youtube.com") &&
          dontTranslateYourLang !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTDontTranslateYourLang")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTDontTranslateYourLang",
            dontTranslateYourLang,
            constants/* translations */.Iz[lang].VOTDontTranslateYourLang
          );

          checkbox.querySelector("#VOTDontTranslateYourLang").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ dontTranslateYourLang: value });
            dontTranslateYourLang = value;
            debug/* default */.Z.log(
              "dontTranslateYourLang value changed. New value: ",
              dontTranslateYourLang
            );
          };

          menuOptions.appendChild(checkbox);
        }

        if (
          dbAutoSetVolumeYandexStyle !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTAutoSetVolume")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTAutoSetVolume",
            dbAutoSetVolumeYandexStyle,
            constants/* translations */.Iz[lang].VOTAutoSetVolume + `${config/* autoVolume */.IM * 100}%`
          );

          checkbox.querySelector("#VOTAutoSetVolume").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ autoSetVolumeYandexStyle: value });
            dbAutoSetVolumeYandexStyle = value;
            debug/* default */.Z.log(
              "autoSetVolumeYandexStyle value changed. New value: ",
              dbAutoSetVolumeYandexStyle
            );
          };

          menuOptions.appendChild(checkbox);
        }

        if (
          dbShowVideoSlider !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTShowVideoSlider")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTShowVideoSlider",
            dbShowVideoSlider,
            constants/* translations */.Iz[lang].VOTShowVideoSlider
          );

          checkbox.querySelector("#VOTShowVideoSlider").onclick = async (
            event
          ) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ showVideoSlider: value });
            dbShowVideoSlider = value;
            debug/* default */.Z.log(
              "showVideoSlider value changed. New value: ",
              dbShowVideoSlider
            );
            if (
              dbShowVideoSlider === 1 &&
              document.querySelector(".translationBtn").dataset.state ===
                "success"
            ) {
              addVideoSlider();
            } else {
              document.querySelector("#VOTVideoSlider")?.parentElement.remove();
            }
          };

          menuOptions.appendChild(checkbox);
        }

        if (
          window.location.hostname.includes("youtube.com") &&
          !window.location.hostname.includes("m.youtube.com") &&
          dbSyncVolume !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTSyncVolume")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTSyncVolume",
            dbSyncVolume,
            constants/* translations */.Iz[lang].VOTSyncVolume
          );

          checkbox.querySelector("#VOTSyncVolume").onclick = async (event) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ syncVolume: value });
            dbSyncVolume = value;
            debug/* default */.Z.log("syncVolume value changed. New value: ", dbSyncVolume);
          };

          menuOptions.appendChild(checkbox);
        }

        // cf version only
        if (
           true &&
          dbAudioProxy !== undefined &&
          menuOptions &&
          !menuOptions.querySelector("#VOTAudioProxy")
        ) {
          const checkbox = createMenuCheckbox(
            "VOTAudioProxy",
            dbAudioProxy,
            constants/* translations */.Iz[lang].VOTAudioProxy
          );

          checkbox.querySelector("#VOTAudioProxy").onclick = async (event) => {
            event.stopPropagation();
            const value = Number(event.target.checked);
            await updateDB({ audioProxy: value });
            dbAudioProxy = value;
            debug/* default */.Z.log("audioProxy value changed. New value: ", dbAudioProxy);
          };

          menuOptions.appendChild(checkbox);
        }
      }
    }

    transformBtn("none", constants/* translations */.Iz[lang].translateVideo);

    if (
      window.location.hostname.includes("youtube.com") &&
      !window.location.hostname.includes("m.youtube.com")
    ) {
      const syncVolumeObserver = new MutationObserver(async function (
        mutations
      ) {
        mutations.forEach(async function (mutation) {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "aria-valuenow" &&
            document.querySelector("#VOTVideoSlider")
          ) {
            syncVideoVolumeSlider();
          }
        });
      });

      syncVolumeObserver.observe(document.querySelector(".ytp-volume-panel"), {
        attributes: true,
        childList: false,
        subtree: true,
        attributeOldValue: true,
      });
    }

    function setSelectMenuValues(from, to = lang) {
      if (!document.querySelector("#VOTSelectLanguages")) {
        return;
      }
      console.log(`Set translation from ${from} to ${to}`);
      document.querySelector("#VOTTranslateFromLang").value = from;
      document.querySelector("#VOTTranslateToLang").value = to;
    }

    // data - ytData or VideoData
    function setDetectedLangauge(data, videolang) {
      switch (videolang) {
        case "en":
          data.detectedLanguage = videolang;
          data.responseLanguage = lang;
          break;
        case "ru":
          data.detectedLanguage = videolang;
          data.responseLanguage = lang;
          if (lang == "ru") data.responseLanguage = "en";
          break;
        default:
          if (!Object.keys(constants/* availableLangs */.tW).includes(videolang)) {
            return setDetectedLangauge(data, "en");
          }

          data.detectedLanguage = videolang;
      }

      setSelectMenuValues(data.detectedLanguage, data.responseLanguage);

      return data;
    }

    // data - ytData or VideoData
    function setResponseLangauge(data, videolang) {
      switch (videolang) {
        case "en":
          data.responseLanguage = videolang;
          data.detectedLanguage = "ru";
          break;
        default:
          if (!Object.keys(constants/* availableLangs */.tW).includes(videolang)) {
            return setResponseLangauge(data, "ru");
          }

          if (data.detectedLanguage && data.responseLanguage === lang) {
            data.detectedLanguage = "en";
          }

          data.responseLanguage = videolang;
      }

      setSelectMenuValues(data.detectedLanguage, data.responseLanguage);

      return data;
    }

    function stopTraslate() {
      // Default actions on stop translate
      audio.pause();
      video.removeEventListener(".translate", stopTraslate, false);
      deleteAudioSrc();
      document.querySelector("#VOTVideoSlider")?.parentElement.remove();
      document.querySelector("#VOTTranslationSlider")?.parentElement.remove();
      const downloadBtn = document.querySelector(".translationDownload");
      downloadBtn.href = "";
      downloadBtn.style.display = "none";
      transformBtn("none", constants/* translations */.Iz[lang].translateVideo);
      if (volumeOnStart) {
        video.volume = volumeOnStart;
      }
    }

    function syncVideoVolumeSlider() {
      // Sync volume slider with original video (youtube only)
      const newSlidersVolume = document
        .querySelector(".ytp-volume-panel")
        .getAttribute("aria-valuenow");

      const videoSlider = document.querySelector("#VOTVideoSlider");

      if (!videoSlider) {
        return;
      }
      videoSlider.value = newSlidersVolume;

      const videoVolumeLabel = document.querySelector("#VOTVideoVolume");

      if (videoVolumeLabel) {
        videoVolumeLabel.innerText = `${newSlidersVolume}%`;
      }

      if (dbSyncVolume === 1) {
        tempOriginalVolume = Number(newSlidersVolume);
      }
    }

    function getVideoData() {
      const videoData = {};

      videoData.duration = video?.duration || 0;

      videoData.videoId = getVideoId(siteHostname);

      videoData.detectedLanguage = translateFromLang;

      videoData.responseLanguage = translateToLang;

      if (window.location.hostname.includes("youtube.com")) {
        let ytData = getYTVideoData();
        ytData = setDetectedLangauge(ytData, ytData.detectedLanguage);
        videoData.detectedLanguage = ytData.detectedLanguage;
        videoData.responseLanguage = ytData.responseLanguage;
      } else if (
        window.location.hostname.includes("rutube") ||
        window.location.hostname.includes("my.mail.ru")
      ) {
        videoData.detectedLanguage = "ru";
        videoData.responseLanguage = "en";
      } else if (window.location.hostname.includes("bilibili.com")) {
        videoData.detectedLanguage = "zh";
      }

      return videoData;
    }

    const lipSync = (mode = false) => {
      debug/* default */.Z.log("lipsync video", video);
      if (!video) {
        return;
      }
      audio.currentTime = video.currentTime;
      audio.playbackRate = video.playbackRate;

      if (!mode) {
        debug/* default */.Z.log("lipsync mode is not set");
        return;
      }

      if (mode === "play") {
        debug/* default */.Z.log("lipsync mode is play");
        const audioPromise = audio.play();
        if (audioPromise !== undefined) {
          audioPromise.catch((e) => {
            console.error(e);
            if (e.name === "NotAllowedError") {
              const errorMessage = constants/* translations */.Iz[lang].grantPermissionToAutoPlay;
              transformBtn("error", errorMessage);
              throw `VOT: ${errorMessage}`;
            } else if (e.name === "NotSupportedError") {
              const errorMessage = sitesChromiumBlocked.includes(
                window.location.hostname
              )
                ? constants/* translations */.Iz[lang].neededAdditionalExtension
                : constants/* translations */.Iz[lang].audioFormatNotSupported;
              transformBtn("error", errorMessage);
              throw `VOT: ${errorMessage}`;
            }
          });
        }
        return;
      }
      if (mode === "pause") {
        debug/* default */.Z.log("lipsync mode is pause");
        audio.pause();
      }
      if (mode === "stop") {
        debug/* default */.Z.log("lipsync mode is stop");
        audio.pause();
      }
      if (mode === "waiting") {
        debug/* default */.Z.log("lipsync mode is waiting");
        audio.pause();
      }
      if (mode === "playing") {
        debug/* default */.Z.log("lipsync mode is playing");
        audio.play();
      }
      if (mode === "abort") {
        debug/* default */.Z.log("lipsync mode is abort");
        audio.pause();
      }
    };

    function addVideoSlider() {
      if (
        dbShowVideoSlider !== 1 ||
        document.querySelector("#VOTVideoSlider") ||
        document.querySelector(".translationBtn").dataset.state !== "success"
      ) {
        return;
      }

      const newVolume =
        window.location.hostname.includes("youtube.com") &&
        !dbAutoSetVolumeYandexStyle
          ? document
              .querySelector(".ytp-volume-panel")
              ?.getAttribute("aria-valuenow")
          : Math.round(video.volume * 100);
      tempOriginalVolume = newVolume;

      const slider = createMenuSlider(
        "VOTVideoSlider",
        newVolume,
        `${constants/* translations */.Iz[lang].VOTVolume}: <b class = "volumePercent" id="VOTOriginalVolume">${newVolume}%</b>`
      );

      slider.querySelector("#VOTVideoSlider").oninput = (event) => {
        const { value } = event.target;
        video.volume = value / 100;
        slider.querySelector("#VOTOriginalVolume").innerText = `${value}%`;

        if (dbSyncVolume !== 1) {
          return;
        }

        // Sync translation volume slider with video volume slider
        const translateVolumeSlider = document.querySelector(
          "#VOTTranslationSlider"
        );

        if (!translateVolumeSlider) {
          return;
        }
        const translateVolume = Number(translateVolumeSlider.value);
        const finalValue = syncVolume(
          audio,
          value,
          translateVolume,
          tempOriginalVolume
        );

        translateVolumeSlider.value = finalValue;

        const translateVolumeLabel = document.querySelector(
          "#VOTTranslationVolume"
        );

        if (translateVolumeLabel) {
          translateVolumeLabel.innerText = `${finalValue}%`;
        }

        tempVolume = finalValue;
        tempOriginalVolume = value;
      };

      const menuOptions = document.querySelector(".translationMenuOptions");
      menuOptions.appendChild(slider);
    }

    function addTranslationSlider() {
      // Return early if slider already exists or translation is not successful
      if (
        document.querySelector("#VOTTranslationSlider") ||
        document.querySelector(".translationBtn").dataset.state !== "success"
      ) {
        return;
      }

      // Use dbDefaultVolume or 100 as the default translation volume
      const defaultTranslateVolume =
        typeof dbDefaultVolume === "number" ? dbDefaultVolume : 100;
      tempOriginalVolume = defaultTranslateVolume;

      // Create a slider element with the default volume and label
      const slider = createMenuSlider(
        "VOTTranslationSlider",
        defaultTranslateVolume,
        `${constants/* translations */.Iz[lang].VOTVolumeTranslation}: <b class = "volumePercent" id="VOTTranslationVolume">${defaultTranslateVolume}%</b>`
      );

      // Add an input event listener to the slider
      slider.querySelector("#VOTTranslationSlider").oninput = async ({
        target: { value },
      }) => {
        // Set the audio volume to the slider value
        audio.volume = value / 100;

        // Update the volume label
        document.querySelector("#VOTTranslationVolume").innerText = `${value}%`;

        // Update the database with the new volume value
        await updateDB({ defaultVolume: Number(value) });
        dbDefaultVolume = Number(value);

        // Sync translation volume with video volume if dbSyncVolume is 1
        if (dbSyncVolume === 1) {
          syncTranslationWithVideo(value);
        }
      };

      // Append the slider to the menu options
      const menuOptions = document.querySelector(".translationMenuOptions");
      menuOptions.appendChild(slider);
    }

    // A helper function to sync translation volume with video volume
    function syncTranslationWithVideo(translationValue) {
      // Get the video volume slider element
      const videoVolumeSlider = document.querySelector("#VOTVideoSlider");

      if (!videoVolumeSlider) {
        return;
      }
      // Get the video volume value
      const videoVolume = Number(videoVolumeSlider.value);

      // Calculate the synced video volume based on the translation volume
      const finalValue = syncVolume(
        video,
        translationValue,
        videoVolume,
        tempVolume
      );

      // Set the video volume slider value to the synced value
      videoVolumeSlider.value = finalValue;

      // Update the video volume label
      const videoVolumeLabel = document.querySelector("#VOTOriginalVolume");
      if (videoVolumeLabel) videoVolumeLabel.innerText = `${finalValue}%`;

      // Update the temp variables for future syncing
      tempOriginalVolume = finalValue;
      tempVolume = translationValue;
    }

    function videoValidator() {
      if (window.location.hostname.includes("youtube.com")) {
        let ytData = getYTVideoData();
        ytData = setDetectedLangauge(ytData, ytData.detectedLanguage);
        debug/* default */.Z.log("VideoValidator videoData: ", videoData);
        if (dontTranslateYourLang === 1 && ytData.detectedLanguage === lang) {
          firstPlay = false;
          throw constants/* translations */.Iz[lang].VOTDisableFromYourLang;
        }

        if (ytData.isLive) {
          throw constants/* translations */.Iz[lang].VOTLiveNotSupported;
        }

        if (ytData.isPremiere) {
          throw constants/* translations */.Iz[lang].VOTPremiere;
        }
        if (videoData.duration > 14_400) {
          throw constants/* translations */.Iz[lang].VOTVideoIsTooLong;
        }
      }
      return true;
    }

    const translateExecutor = (VIDEO_ID) => {
      debug/* default */.Z.log("Run videoValidator");
      videoValidator();
      debug/* default */.Z.log("Run translateFunc");
      translateFunc(
        VIDEO_ID,
        videoData.detectedLanguage,
        videoData.responseLanguage
      );
    };

    // Define a function to handle common events
    function handleVideoEvent(event) {
      debug/* default */.Z.log(`video ${event.type}`);
      lipSync(event.type);
    }

    // Define a function to stop translation and clean up
    function stopTranslation() {
      stopTraslate();
      syncVideoVolumeSlider();
    }

    // Define a function to translate a video and handle the callback
    function translateFunc(VIDEO_ID, requestLang, responseLang) {
      const videoURL = `${constants/* siteTranslates */.g$[siteHostname]}${VIDEO_ID}`;
      translateVideo(
        videoURL,
        constants/* translateFuncParam */.ey,
        requestLang,
        responseLang,
        async (success, urlOrError) => {
          debug/* default */.Z.log("[exec callback] translateVideo");
          if (getVideoId(siteHostname) !== VIDEO_ID) return;
          if (!success) {
            transformBtn("error", urlOrError);
            // if the error line contains information that the translation is being performed, then we wait
            if (urlOrError.includes(constants/* translations */.Iz[lang].translationTake)) {
              clearTimeout(autoRetry);
              autoRetry = setTimeout(
                () => translateFunc(VIDEO_ID, requestLang, responseLang),
                60_000
              );
            }
            throw urlOrError;
          }

          audio.src = urlOrError;

          // cf version only
          if (
             true &&
            dbAudioProxy === 1 &&
            urlOrError.startsWith("https://")
          ) {
            const audioPath = urlOrError.replace(
              "https://vtrans.s3-private.mds.yandex.net/tts/prod/",
              ""
            );
            const proxiedAudioUrl = `https://${config_cloudflare/* workerHost */.i}/video-translation/audio-proxy/${audioPath}`;
            console.log(`VOT Audio proxied via ${proxiedAudioUrl}`);
            audio.src = proxiedAudioUrl;
          }

          volumeOnStart = video?.volume;
          if (typeof dbDefaultVolume === "number") {
            audio.volume = dbDefaultVolume / 100;
          }
          if (
            typeof dbAutoSetVolumeYandexStyle === "number" &&
            dbAutoSetVolumeYandexStyle
          ) {
            video.volume = config/* autoVolume */.IM;
          }

          switch (siteHostname) {
            case "twitter":
              document
                .querySelector('div[data-testid="app-bar-back"][role="button"]')
                .addEventListener("click", stopTranslation);
              break;
            case "invidious":
            case "piped":
              break;
            default:
              if (siteEvent !== null) {
                document.body.addEventListener(siteEvent, stopTranslation);
              }
              break;
          }

          const siteHostnames = [
            "twitch",
            "vimeo",
            "facebook",
            "rutube",
            "twitter",
            "bilibili.com",
            "mail.ru",
          ];
          for (let i = 0; i < siteHostnames.length; i++) {
            if (siteHostname === siteHostnames[i]) {
              const mutationObserver = new MutationObserver(
                async (mutations) => {
                  mutations.forEach(async (mutation) => {
                    if (
                      mutation.type === "attributes" &&
                      mutation.attributeName === "src" &&
                      mutation.target === video &&
                      mutation.target.src !== ""
                    ) {
                      stopTranslation();
                      firstPlay = true;
                    }
                  });
                }
              );
              mutationObserver.observe(videoContainer, {
                attributes: true,
                childList: false,
                subtree: true,
                attributeOldValue: true,
              });
              break;
            }
          }

          if (video && !video.paused) lipSync("play");
          const videos = document.querySelectorAll("video");
          const events = [
            "playing",
            "ratechange",
            "play",
            "abort",
            "waiting",
            "pause",
          ];
          videos.forEach((v) =>
            events.forEach((e) => v.addEventListener(e, handleVideoEvent))
          );
          transformBtn("success", constants/* translations */.Iz[lang].disableTranslate);
          addVideoSlider();
          addTranslationSlider();

          const VOTVideoSlider = document.querySelector("#VOTVideoSlider");
          if (VOTVideoSlider) VOTVideoSlider.value = config/* autoVolume */.IM * 100;

          const VOTOriginalVolume =
            document.querySelector("#VOTOriginalVolume");
          if (VOTOriginalVolume) {
            VOTOriginalVolume.innerText = `${config/* autoVolume */.IM * 100}%`;
          }

          const downloadBtn = document.querySelector(".translationDownload");
          downloadBtn.href = urlOrError;
          downloadBtn.style.display = "initial";
        }
      );
    }

    document.addEventListener("click", (event) => {
      const block = document.querySelector(".translationBlock");
      const menuContainer = document.querySelector(".translationMenuContent");
      const isBlock =
        block || event.target === block ? block.contains(event.target) : false;
      const isContent =
        menuContainer || event.target === menuContainer
          ? menuContainer.contains(event.target)
          : false;
      const isVideo =
        videoContainer || event.target === videoContainer
          ? videoContainer.contains(event.target)
          : false;

      debug/* default */.Z.log(`[document click] ${isBlock} ${isContent} ${isVideo}`);
      if (!(!isBlock && !isContent)) return;
      if (!isVideo) logout(0);

      menuContainer.style.display = "none";
      openedMenu = false;
    });

    const addEventListeners = (element, events, handler) => {
      events.forEach((event) => element.addEventListener(event, handler));
    };

    if (siteHostname === "pornhub") {
      if (window.location.pathname.includes("view_video.php")) {
        const videoElement = document.querySelector(
          ".original.mainPlayerDiv > video-element > div"
        );
        addEventListeners(videoElement, ["mousemove", "mouseout"], resetTimer);
      } else if (window.location.pathname.includes("embed/")) {
        const playerElement = document.querySelector("#player");
        addEventListeners(playerElement, ["mousemove", "mouseout"], resetTimer);
      }
    } else if (siteHostname === "twitter") {
      const videoPlayerElement = document.querySelector(
        'div[data-testid="videoPlayer"'
      );
      addEventListeners(
        videoPlayerElement,
        ["mousemove", "mouseout"],
        resetTimer
      );
    } else {
      addEventListeners(videoContainer, ["mousemove", "mouseout"], resetTimer);
    }

    document
      .querySelector(".translationBlock")
      .addEventListener("mousemove", (event) =>
        changeOpacityOnEvent(event, timer, opacityRatio)
      );
    document
      .querySelector(".translationMenuContent")
      .addEventListener("mousemove", (event) =>
        changeOpacityOnEvent(event, timer, opacityRatio)
      );

    document.addEventListener("touchstart", (event) =>
      changeOpacityOnEvent(event, timer, opacityRatio)
    );
    document.addEventListener("touchmove", (event) =>
      changeOpacityOnEvent(event, timer, opacityRatio)
    );
    document.addEventListener("touchend", (event) =>
      changeOpacityOnEvent(event, timer, opacityRatio)
    );

    document
      .querySelector(".translationBtn")
      .addEventListener("click", async (event) => {
        debug/* default */.Z.log("[click translationBtn] before all functions & methods");
        event.stopPropagation();
        event.stopImmediatePropagation();

        // check if the audio source is not empty
        if (audio.src) {
          debug/* default */.Z.log("[click translationBtn] audio.src is not empty");
          stopTraslate();
          return;
        }

        try {
          debug/* default */.Z.log("[click translationBtn] trying execute translation");
          const VIDEO_ID = getVideoId(siteHostname);

          if (!VIDEO_ID) {
            throw constants/* translations */.Iz[lang].VOTNoVideoIDFound;
          }

          translateExecutor(VIDEO_ID);
        } catch (err) {
          transformBtn("error", String(err).substring(4, err.length));
          console.error(err);
        }
      });

    video.addEventListener("progress", (event) => {
      event.stopPropagation();

      if (!(firstPlay && dbAutoTranslate === 1)) {
        return;
      }
      const VIDEO_ID = getVideoId(siteHostname);

      if (!VIDEO_ID) {
        throw constants/* translations */.Iz[lang].VOTNoVideoIDFound;
      }

      try {
        translateExecutor(VIDEO_ID);
        firstPlay = false;
      } catch (err) {
        transformBtn("error", String(err).substring(4, err.length));
        firstPlay = false;
      }
    });
  }

  async function initWebsite() {
    debug/* default */.Z.log("Runned initWebsite function");
    if (config_regexes.youtubeRegex.test(window.location.hostname)) {
      if (window.location.pathname.includes("embed")) {
        const videoContainer = document.querySelector(".html5-video-container");
        await translateProccessor(videoContainer, "youtube", null);
        return;
      }

      debug/* default */.Z.log("[initWebsite] Found a match with youtube hostname");
      const ytPageEnter = () => {
        const videoContainer = document.querySelector(
          config_selectors.youtubeSelector
        );
        if (videoContainer) {
          debug/* default */.Z.log("[exec] translateProccessor youtube on page enter");
          translateProccessor(videoContainer, "youtube", "yt-translate-stop");
        } else {
          if (!ytplayer || !ytplayer.config) {
            debug/* default */.Z.log("[exec] ytplayer is null");
            return;
          }
          ytplayer.config.args.jsapicallback = () => {
            debug/* default */.Z.log(
              "[exec] translateProccessor youtube on page enter (ytplayer.config.args.jsapicallback)"
            );
            translateProccessor(videoContainer, "youtube", "yt-translate-stop");
          };
        }
      };

      document.addEventListener("spfdone", ytPageEnter);
      document.addEventListener("yt-navigate-finish", ytPageEnter);

      const ytPageLeave = () => {
        document.body.dispatchEvent(new Event("yt-translate-stop"));
      };

      document.addEventListener("spfrequest", ytPageLeave);
      document.addEventListener("yt-navigate-start", ytPageLeave);

      if (window.location.hostname.includes("m.youtube.com")) {
        let ytmobile = await waitForElm("#player");
        if (ytmobile) {
          await sleep(1000);
          await translateProccessor(ytmobile, "youtube", "yt-translate-stop");

          const mutationObserver = new MutationObserver(async (mutations) => {
            for (const mutation of mutations) {
              if (
                mutation.type === "attributes" &&
                mutation.attributeName === "src"
              ) {
                ytmobile = await waitForElm("#player");
                await sleep(1000);
                await translateProccessor(
                  ytmobile,
                  "youtube",
                  "yt-translate-stop"
                );
              }
            }
          });

          mutationObserver.observe(ytmobile, {
            attributes: true,
            childList: true,
            subtree: true,
            attributeOldValue: true,
          });
        }
        const ytPageLeave = () => {
          document.body.dispatchEvent(new Event("yt-translate-stop"));
        };
        document.addEventListener("spfdone", ytPageLeave);
        document.addEventListener("yt-navigate-finish", ytPageLeave);
        document.addEventListener("spfrequest", ytPageLeave);
        document.addEventListener("yt-navigate-start", ytPageLeave);
      }
      return;
    }
    if (window.location.hostname.includes("twitch.tv")) {
      debug/* default */.Z.log("[initWebsite] Found a match with twitch.tv");
      if (
        window.location.hostname.includes("m.twitch.tv") &&
        (window.location.pathname.includes("/videos/") ||
          window.location.pathname.includes("/clip/"))
      ) {
        debug/* default */.Z.log("[initWebsite] Matched Twitch Mobile");
        const el = await waitForElm(config_selectors.twitchMobileSelector);
        if (el) {
          await sleep(200);
          const twitchMobileSelector = document.querySelector(
            config_selectors.twitchMobileSelector
          );
          await translateProccessor(twitchMobileSelector, "twitch", null);

          const mutationObserver = new MutationObserver(async (mutations) => {
            for (const mutation of mutations) {
              if (
                mutation.type === "attributes" &&
                mutation.attributeName === "src" &&
                mutation.target === twitchMobileSelector?.querySelector("video")
              ) {
                await sleep(1000);
                await translateProccessor(twitchMobileSelector, "twitch", null);
              }
            }
          });

          mutationObserver.observe(twitchMobileSelector, {
            attributes: true,
            childList: true,
            subtree: true,
            attributeOldValue: true,
          });
        }
      } else if (
        window.location.hostname.includes("player.twitch.tv") ||
        window.location.hostname.includes("clips.twitch.tv") ||
        window.location.pathname.includes("/videos/") ||
        window.location.pathname.includes("/clip/")
      ) {
        debug/* default */.Z.log("[initWebsite] Matched Twitch Desktop");
        const el = await waitForElm(config_selectors.twitchSelector);
        if (el) {
          await sleep(200);
          await translateProccessor(el, "twitch", null);
        }
      }
      debug/* default */.Z.log("[initWebsite] Exit function in the twitch section");
      return;
    }
    if (window.location.hostname.includes("xvideos.com")) {
      debug/* default */.Z.log("[entered] xvideos");
      await sleep(1000);
      await translateProccessor(
        document.querySelector(".video-bg-pic"),
        "xvideos",
        null
      );
      return;
    }
    if (window.location.hostname.includes("pornhub.com")) {
      debug/* default */.Z.log("[entered] pornhub");
      await sleep(1000);
      await translateProccessor(
        document.querySelector(".mgp_videoWrapper"),
        "pornhub",
        null
      );
      return;
    }
    if (sitesInvidious.includes(window.location.hostname)) {
      // Need an additional extension to work in chrome-like browsers
      debug/* default */.Z.log("[entered] invidious");
      await translateProccessor(
        document.querySelector("#player"),
        "youtube",
        null
      );
    } else if (sitesPiped.includes(window.location.hostname)) {
      // Need an additional extension to work in chrome-like browsers
      debug/* default */.Z.log("[entered] piped");
      const el = await waitForElm(config_selectors.pipedSelector);
      if (el) {
        let videoIDNew;
        let videoID = getVideoId("youtube");
        await translateProccessor(el, "youtube", "piped");
        setInterval(async () => {
          videoIDNew = getVideoId("youtube");
          if (videoID !== videoIDNew) {
            if (videoIDNew) {
              await translateProccessor(
                document.querySelector(config_selectors.pipedSelector),
                "youtube",
                "piped"
              );
            }
            videoID = videoIDNew;
          }
        }, 3000);
      }
    } else if (/^(www.|m.)?vk.(com|ru)$/.test(window.location.hostname)) {
      debug/* default */.Z.log("[entered] vk.com");
      const el = await waitForElm(config_selectors.vkSelector);
      if (el) {
        await translateProccessor(
          document.querySelector(config_selectors.vkSelector),
          "vk",
          null
        );
        let videoIDVKNew;
        let videoIDVK = getVideoId("vk");
        setInterval(async () => {
          videoIDVKNew = getVideoId("vk");
          if (videoIDVK !== videoIDVKNew) {
            if (videoIDVKNew) {
              const el = await waitForElm(config_selectors.vkSelector);
              if (el) {
                await translateProccessor(el, "vk", null);
              }
            }
            videoIDVK = videoIDVKNew;
          }
        }, 3000);
      }
    } else if (window.location.hostname.includes("vimeo.com")) {
      debug/* default */.Z.log("[entered] vimeo.com");
      const el = await waitForElm(config_selectors.vimeoSelector);
      if (el) {
        await sleep(1000);
        await translateProccessor(
          document.querySelector(config_selectors.vimeoSelector),
          "vimeo",
          null
        );
      }
    } else if (window.location.hostname.includes("9gag.com")) {
      await sleep(1000);
      await translateProccessor(
        document.querySelector(config_selectors.gagSelector),
        "9gag",
        null
      );
    } else if (window.location.hostname.includes("rutube.ru")) {
      const elementSelector = window.location.pathname.includes("/play/embed")
        ? "#app > div > div"
        : ".video-player > div > div > div:nth-child(2)";

      const el = await waitForElm(elementSelector);
      if (el) {
        await translateProccessor(el, "rutube", null);
      }
    } else if (window.location.hostname.includes("bilibili.com")) {
      if (window.location.pathname.includes("/video/")) {
        const el = await waitForElm(config_selectors.bilibilicomSelector);
        if (el) {
          await translateProccessor(el, "bilibili.com", null);
        }
      } else if (
        window.location.pathname.includes(
          "/blackboard/webplayer/embed-old.html"
        )
      ) {
        const el = await waitForElm("video");
        if (el) {
          await translateProccessor(el.parentElement, "bilibili.com", null);
        }
      }
    } else if (window.location.hostname.includes("twitter.com")) {
      const el = await waitForElm(config_selectors.twitterSelector);
      if (el) {
        let videoIDNew;
        let videoID = getVideoId("twitter");
        await translateProccessor(el, "twitter", null);
        setInterval(async () => {
          videoIDNew = getVideoId("twitter");
          if (videoID !== videoIDNew) {
            if (videoIDNew) {
              await translateProccessor(
                document.querySelector(config_selectors.twitterSelector),
                "twitter",
                null
              );
            }
            videoID = videoIDNew;
          }
        }, 3000);
      }
    } else if (window.location.hostname.includes("my.mail.ru")) {
      const el = await waitForElm(config_selectors.mailSelector);
      if (el) {
        let videoIDNew;
        let videoID = getVideoId("mail.ru");
        await translateProccessor(el, "mail.ru", null);
        setInterval(async () => {
          videoIDNew = getVideoId("mail.ru");
          if (videoID !== videoIDNew) {
            if (videoIDNew) {
              await translateProccessor(
                document.querySelector(config_selectors.mailSelector),
                "mail.ru",
                null
              );
            }
            videoID = videoIDNew;
          }
        }, 3000);
      }
    }
  }

  await initWebsite();
}

src_main().catch((e) => {
  console.error(e);
});

})();

/******/ })()
;
