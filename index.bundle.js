"use strict";
(self["webpackChunkconway"] = self["webpackChunkconway"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --grid-cols: 1;\n  --grid-rows: 1;\n}\n\nh1 {\n  color: red;\n}\n\n#gridboard > * {\n  border: 1px solid black;\n}\n\n#gridboard {\n  display: grid;\n  grid-template-columns: repeat(var(--grid-cols), 1em);\n  grid-template-rows: repeat(var(--grid-rows), 1em);\n}\n\n.unclicked {\n  background-color: beige;\n}\n\n.clicked {\n  background-color: red;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.scss"],"names":[],"mappings":"AAAA;EAEI,cAAA;EACA,cAAA;AAAJ;;AAGE;EACI,UAAA;AAAN;;AAGI;EAEE,uBAAA;AADN;;AAII;EAEE,aAAA;EACA,oDAAA;EACA,iDAAA;AAFN;;AAKI;EACE,uBAAA;AAFN;;AAKI;EACE,qBAAA;AAFN","sourcesContent":[":root {\n\n    --grid-cols: 1;\n    --grid-rows: 1;\n  }\n  \n  h1 {\n      color: red;\n    }\n  \n    #gridboard > * {\n  \n      border: 1px solid black;\n    }\n  \n    #gridboard {\n       \n      display: grid;\n      grid-template-columns: repeat(var(--grid-cols), 1em);\n      grid-template-rows: repeat(var(--grid-rows), 1em);\n    }\n\n    .unclicked {\n      background-color: beige;\n    }\n\n    .clicked {\n      background-color: red;\n    }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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
  } // For old IE

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
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ "./src/Component.js":
/*!**************************!*\
  !*** ./src/Component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component)
/* harmony export */ });
//generic component class
class Component {
  constructor(type, id = "", innerHtml="") {
    this.type = type;
    this.id = id;
    this.innerHtml = innerHtml;
  }

  //render function that just returns the html element, but also wraps it in a generated container div for 
  //styling purposes
  render = () => {
    const element = document.createElement(this.type.toString());
    element.id = this.id.toString();
    element.innerHTML = this.innerHtml;

    const container = document.createElement('div');
    container.id=(`${this.id}-container`)
    container.appendChild(element)

    return container;
  };
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _modules_Gridboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Gridboard */ "./src/modules/Gridboard.js");
/* harmony import */ var _modules_ControlPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ControlPanel */ "./src/modules/ControlPanel.js");
/* harmony import */ var _utils_coordParseReverse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/coordParseReverse */ "./src/utils/coordParseReverse.js");





const gameController = (function () {
  let boardSize = 50;
  let gridBoard = new _modules_Gridboard__WEBPACK_IMPORTED_MODULE_1__.Gridboard("div", "gridboard", { size: boardSize });
  let controlPanel = new _modules_ControlPanel__WEBPACK_IMPORTED_MODULE_2__.ControlPanel("div", "control-panel");
  let interval = 500;
  let timer = {
    running: false,
    iv: 500,
    timeout: false,
    cb: function () {},
    start: function (cb, iv) {
      var elm = this;
      clearInterval(this.timeout);
      this.running = true;
      if (cb) this.cb = cb;
      if (iv) this.iv = iv;
      this.timeout = setTimeout(function () {
        elm.execute(elm);
      }, this.iv);
    },
    execute: function (e) {
      if (!e.running) return false;
      e.cb();
      e.start();
    },
    stop: function () {
      this.running = false;
    },
    set_interval: function (iv) {
      clearInterval(this.timeout);
      this.start(false, iv);
    },
  };

  const initializeGame = () => {
    //initializes and draws board and initializes control panel
    gridBoard.setBoardSize(boardSize, boardSize);
    document.body.appendChild(gridBoard.render());
    document.body.appendChild(controlPanel.render());
    controlPanel.initializeButtons();

    // gridBoard.drawBoard();
    viewController.drawBoard(gridBoard.returnArray());
    initializeClickListeners();

    //adds event lisenters to buttons
    const htmlStartButton = document.getElementById("start-button");
    htmlStartButton.addEventListener("click", startGame);
    const htmlResetButton = document.getElementById("reset-button");
    htmlResetButton.addEventListener("click", resetGame);
    const htmlStepButton = document.getElementById("step-button");
    htmlStepButton.addEventListener("click", stepGame);
    const speedButton = document.getElementById("speed-button");
    speedButton.addEventListener("click", speedUp);
    const slowButton = document.getElementById("slow-button");
    slowButton.addEventListener("click", slowDown);
  };

  const initializeClickListeners = () => {
    let gridContainer = document.getElementById("gridboard");
    gridContainer.addEventListener("click", (e) => {
      let id = e.target.id;

      let clickedCoord = (0,_utils_coordParseReverse__WEBPACK_IMPORTED_MODULE_3__.coordParseReverse)(id.toString());
      gridBoard.addLiveCell(clickedCoord[0], clickedCoord[1]);
      viewController.drawBoard(gridBoard.returnArray());
    });
  };

  const startGame = () => {
    if (timer.running === false) {
      timer.start(() => {
        viewController.toggleStartButtonDisplay(false);
        gridBoard.startGame();
        viewController.drawBoard(gridBoard.returnArray());
      }, interval);
    } else {
      viewController.toggleStartButtonDisplay(true);
      timer.stop();
    }
  };
  const resetGame = () => {
    interval = 500;
    viewController.toggleStartButtonDisplay(true);
    timer.stop();
    gridBoard.resetGame();
    viewController.drawBoard(gridBoard.returnArray());
  };
  const stepGame = () => {
    gridBoard.stepGame();
    viewController.drawBoard(gridBoard.returnArray());
  };
  const slowDown = () => {
    interval += 100;
    timer.set_interval(interval);
  };
  const speedUp = () => {
    if (interval > 100) {
      interval -= 100;
    } else {
      interval = 10;
    }

    timer.set_interval(interval);
  };

  return {
    initializeGame: initializeGame,
  };
})();

const viewController = (function () {
  const toggleStartButtonDisplay = (state) => {
    const htmlStartButton = document.getElementById("start-button");
    if (state === true) {
      htmlStartButton.innerText = "Start";
    } else if (state === false) {
      htmlStartButton.innerText = "Stop";
    }
  };

  const drawBoard = (array) => {
    let gridContainer = document.getElementById("gridboard");
    gridContainer.innerHTML = "";
    gridContainer.style.setProperty("--grid-rows", array.length);
    gridContainer.style.setProperty("--grid-cols", array[0].length);
    for (let c = 0; c < array.length; c++) {
      for (let i = 0; i < array[0].length; i++) {
        let cell = document.createElement("div");

        if (array[c][i] === 0) {
          cell.className = "unclicked";
        } else {
          cell.className = "clicked";
        }
        cell.id = `x${c + 1}y${i + 1}`;
        gridContainer.appendChild(cell);
      }
    }
  };

  return {
    drawBoard: drawBoard,
    toggleStartButtonDisplay,
  };
})();
gameController.initializeGame();


/***/ }),

/***/ "./src/modules/ControlPanel.js":
/*!*************************************!*\
  !*** ./src/modules/ControlPanel.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlPanel": () => (/* binding */ ControlPanel)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.js");


class ControlPanel extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(type, id) {
    super(type, id);
  }
  initializeButtons = () => {
    let controlPanel = document.getElementById("control-panel");
    let startButton = new _Component__WEBPACK_IMPORTED_MODULE_0__.Component("button", "start-button", "Start");
    let resetButton = new _Component__WEBPACK_IMPORTED_MODULE_0__.Component("button", "reset-button", "Reset");
    let stepButton = new _Component__WEBPACK_IMPORTED_MODULE_0__.Component("button", "step-button", "Step");
    let speedButton = new _Component__WEBPACK_IMPORTED_MODULE_0__.Component("button", "speed-button", "Speed up");
    let slowButton = new _Component__WEBPACK_IMPORTED_MODULE_0__.Component("button", "slow-button", "Slow down");
    controlPanel.appendChild(startButton.render());
    controlPanel.appendChild(resetButton.render());
    controlPanel.appendChild(stepButton.render());
    controlPanel.appendChild(speedButton.render());
    controlPanel.appendChild(slowButton.render());
  };
}


/***/ }),

/***/ "./src/modules/Gridboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gridboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gridboard": () => (/* binding */ Gridboard)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Component */ "./src/Component.js");
/* harmony import */ var _utils_conwayLogicHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/conwayLogicHandler */ "./src/utils/conwayLogicHandler.js");
/* harmony import */ var _utils_checkNeighbors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/checkNeighbors */ "./src/utils/checkNeighbors.js");




class Gridboard extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(type, id, props) {
    super(type, id);
    this.array = [];
    this.props = props;
  }

  setBoardSize = (rows, cols) => {
    console.log(this.props.size);
    for (let i = 0; i < rows; i++) {
      this.array.push([]);

      for (let c = 0; c < cols; c++) {
        this.array[i].push(0);
      }
    }
  };

  addLiveCell = (x, y) => {
    this.array[x - 1][y - 1] = 1;
  };

  startGame = () => {
    let newArray = [];

    for (let x = 0; x < this.array.length; x++) {
      newArray.push([]);
      for (let y = 0; y < this.array[0].length; y++) {
        let numAlive = (0,_utils_checkNeighbors__WEBPACK_IMPORTED_MODULE_2__.checkNumNeighbors)(x, y, this.array);
        let newStatus = (0,_utils_conwayLogicHandler__WEBPACK_IMPORTED_MODULE_1__.conwayLogicHandler)(this.array[x][y], numAlive);
        newArray[x].push(newStatus);
      }
    }

    this.array.splice(0, this.array.length, ...newArray);
  };

  resetGame = () => {
    this.array = [];
    this.setBoardSize(this.props.size, this.props.size);
  };

  stepGame = () => {
    this.startGame();
  };

  returnArray = () => {
    return this.array;
  };
}


/***/ }),

/***/ "./src/utils/checkNeighbors.js":
/*!*************************************!*\
  !*** ./src/utils/checkNeighbors.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkNeighbors": () => (/* binding */ checkNeighbors),
/* harmony export */   "checkNumNeighbors": () => (/* binding */ checkNumNeighbors)
/* harmony export */ });
/* harmony import */ var _isAlive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isAlive */ "./src/utils/isAlive.js");
//checks each cells neigbhors and returns an updated array based on what cells are alive or dead based on their neighbors

const checkNeighbors = (array, isAlive, conwayLogicHandler) => {
  let newArray = array;
  for (let c = 0; c < array.length; c++) {
    for (let i = 0; i < array[0].length; i++) {
      let numAlive =
        isAlive(c - 1, i - 1, array) +
        isAlive(c, i - 1, array) +
        isAlive(c + 1, i - 1, array) +
        isAlive(c - 1, i, array) +
        isAlive(c + 1, i, array) +
        isAlive(c - 1, i + 1, array) +
        isAlive(c, i + 1, array) +
        isAlive(c + 1, i + 1, array);
      newArray[c][i] = conwayLogicHandler(isAlive(c, i, array), numAlive);
    }
  }
  return newArray;
};

const checkNumNeighbors = (c, i, array) => {

       let numAlive =
        (0,_isAlive__WEBPACK_IMPORTED_MODULE_0__.isAlive)(c - 1, i - 1, array) +
        (0,_isAlive__WEBPACK_IMPORTED_MODULE_0__.isAlive)(c, i - 1, array) +
        (0,_isAlive__WEBPACK_IMPORTED_MODULE_0__.isAlive)(c + 1, i - 1, array) +
        (0,_isAlive__WEBPACK_IMPORTED_MODULE_0__.isAlive)(c - 1, i, array) +
        (0,_isAlive__WEBPACK_IMPORTED_MODULE_0__.isAlive)(c + 1, i, array) +
        (0,_isAlive__WEBPACK_IMPORTED_MODULE_0__.isAlive)(c - 1, i + 1, array) +
        (0,_isAlive__WEBPACK_IMPORTED_MODULE_0__.isAlive)(c, i + 1, array) +
        (0,_isAlive__WEBPACK_IMPORTED_MODULE_0__.isAlive)(c + 1, i + 1, array);
 
  return numAlive;
};


/***/ }),

/***/ "./src/utils/conwayLogicHandler.js":
/*!*****************************************!*\
  !*** ./src/utils/conwayLogicHandler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "conwayLogicHandler": () => (/* binding */ conwayLogicHandler)
/* harmony export */ });
const conwayLogicHandler = (alive, numAliveNeighbors) => {


if ((alive === 1) && (numAliveNeighbors === 3 || numAliveNeighbors === 2)) {

    return 1
} else if ((alive === 0) && (numAliveNeighbors === 3)) {

    return 1;

} 

    return 0;



}

/***/ }),

/***/ "./src/utils/coordParseReverse.js":
/*!****************************************!*\
  !*** ./src/utils/coordParseReverse.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coordParseReverse": () => (/* binding */ coordParseReverse)
/* harmony export */ });
//converts the string ids from grid gameboard to arrays to store them in component's state, i.e. property

function coordParseReverse(string) {

    if (string === undefined){
        return;
;    }

    let x = string.slice(1, string.indexOf("y"));

    let y = string.slice(string.indexOf("y") + 1)

    let z = [parseInt(x), parseInt(y)];
    return z;
    }

/***/ }),

/***/ "./src/utils/isAlive.js":
/*!******************************!*\
  !*** ./src/utils/isAlive.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAlive": () => (/* binding */ isAlive)
/* harmony export */ });
//checks that cell is on board and alive, i.e. 1 instead of 0

const isAlive = (x, y, array)=>
{
    if (x < 0 || x >= array.length || y < 0 || y >= array[0].length){
        return false;
    }

return array[x][y] !== 0 ? 1 : 0


  }


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87O0FBRVA7QUFDQSxRQUFRLGlEQUFPO0FBQ2YsUUFBUSxpREFBTztBQUNmLFFBQVEsaURBQU87QUFDZixRQUFRLGlEQUFPO0FBQ2YsUUFBUSxpREFBTztBQUNmLFFBQVEsaURBQU87QUFDZixRQUFRLGlEQUFPO0FBQ2YsUUFBUSxpREFBTztBQUNmO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENPOzs7QUFHUDs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7O0FBRU87O0FBRVA7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNkQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbndheS8uL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vY29ud2F5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jb253YXkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jb253YXkvLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzPzIwM2IiLCJ3ZWJwYWNrOi8vY29ud2F5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NvbndheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY29ud2F5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NvbndheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jb253YXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jb253YXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jb253YXkvLi9zcmMvQ29tcG9uZW50LmpzIiwid2VicGFjazovL2NvbndheS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jb253YXkvLi9zcmMvbW9kdWxlcy9Db250cm9sUGFuZWwuanMiLCJ3ZWJwYWNrOi8vY29ud2F5Ly4vc3JjL21vZHVsZXMvR3JpZGJvYXJkLmpzIiwid2VicGFjazovL2NvbndheS8uL3NyYy91dGlscy9jaGVja05laWdoYm9ycy5qcyIsIndlYnBhY2s6Ly9jb253YXkvLi9zcmMvdXRpbHMvY29ud2F5TG9naWNIYW5kbGVyLmpzIiwid2VicGFjazovL2NvbndheS8uL3NyYy91dGlscy9jb29yZFBhcnNlUmV2ZXJzZS5qcyIsIndlYnBhY2s6Ly9jb253YXkvLi9zcmMvdXRpbHMvaXNBbGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tZ3JpZC1jb2xzOiAxO1xcbiAgLS1ncmlkLXJvd3M6IDE7XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbiNncmlkYm9hcmQgPiAqIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jZ3JpZGJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ncmlkLWNvbHMpLCAxZW0pO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tZ3JpZC1yb3dzKSwgMWVtKTtcXG59XFxuXFxuLnVuY2xpY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG59XFxuXFxuLmNsaWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBRUksY0FBQTtFQUNBLGNBQUE7QUFBSjs7QUFHRTtFQUNJLFVBQUE7QUFBTjs7QUFHSTtFQUVFLHVCQUFBO0FBRE47O0FBSUk7RUFFRSxhQUFBO0VBQ0Esb0RBQUE7RUFDQSxpREFBQTtBQUZOOztBQUtJO0VBQ0UsdUJBQUE7QUFGTjs7QUFLSTtFQUNFLHFCQUFBO0FBRk5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcblxcbiAgICAtLWdyaWQtY29sczogMTtcXG4gICAgLS1ncmlkLXJvd3M6IDE7XFxuICB9XFxuICBcXG4gIGgxIHtcXG4gICAgICBjb2xvcjogcmVkO1xcbiAgICB9XFxuICBcXG4gICAgI2dyaWRib2FyZCA+ICoge1xcbiAgXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIH1cXG4gIFxcbiAgICAjZ3JpZGJvYXJkIHtcXG4gICAgICAgXFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ncmlkLWNvbHMpLCAxZW0pO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWdyaWQtcm93cyksIDFlbSk7XFxuICAgIH1cXG5cXG4gICAgLnVuY2xpY2tlZCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICAgIH1cXG5cXG4gICAgLmNsaWNrZWQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9nZW5lcmljIGNvbXBvbmVudCBjbGFzc1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGlkID0gXCJcIiwgaW5uZXJIdG1sPVwiXCIpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmlubmVySHRtbCA9IGlubmVySHRtbDtcbiAgfVxuXG4gIC8vcmVuZGVyIGZ1bmN0aW9uIHRoYXQganVzdCByZXR1cm5zIHRoZSBodG1sIGVsZW1lbnQsIGJ1dCBhbHNvIHdyYXBzIGl0IGluIGEgZ2VuZXJhdGVkIGNvbnRhaW5lciBkaXYgZm9yIFxuICAvL3N0eWxpbmcgcHVycG9zZXNcbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMudHlwZS50b1N0cmluZygpKTtcbiAgICBlbGVtZW50LmlkID0gdGhpcy5pZC50b1N0cmluZygpO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5pbm5lckh0bWw7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuaWQ9KGAke3RoaXMuaWR9LWNvbnRhaW5lcmApXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpXG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9O1xufVxuIiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGVzLnNjc3NcIjtcbmltcG9ydCB7IEdyaWRib2FyZCB9IGZyb20gXCIuL21vZHVsZXMvR3JpZGJvYXJkXCI7XG5pbXBvcnQgeyBDb250cm9sUGFuZWwgfSBmcm9tIFwiLi9tb2R1bGVzL0NvbnRyb2xQYW5lbFwiO1xuaW1wb3J0IHsgY29vcmRQYXJzZVJldmVyc2UgfSBmcm9tIFwiLi91dGlscy9jb29yZFBhcnNlUmV2ZXJzZVwiO1xuXG5jb25zdCBnYW1lQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBib2FyZFNpemUgPSA1MDtcbiAgbGV0IGdyaWRCb2FyZCA9IG5ldyBHcmlkYm9hcmQoXCJkaXZcIiwgXCJncmlkYm9hcmRcIiwgeyBzaXplOiBib2FyZFNpemUgfSk7XG4gIGxldCBjb250cm9sUGFuZWwgPSBuZXcgQ29udHJvbFBhbmVsKFwiZGl2XCIsIFwiY29udHJvbC1wYW5lbFwiKTtcbiAgbGV0IGludGVydmFsID0gNTAwO1xuICBsZXQgdGltZXIgPSB7XG4gICAgcnVubmluZzogZmFsc2UsXG4gICAgaXY6IDUwMCxcbiAgICB0aW1lb3V0OiBmYWxzZSxcbiAgICBjYjogZnVuY3Rpb24gKCkge30sXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChjYiwgaXYpIHtcbiAgICAgIHZhciBlbG0gPSB0aGlzO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVvdXQpO1xuICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgIGlmIChjYikgdGhpcy5jYiA9IGNiO1xuICAgICAgaWYgKGl2KSB0aGlzLml2ID0gaXY7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWxtLmV4ZWN1dGUoZWxtKTtcbiAgICAgIH0sIHRoaXMuaXYpO1xuICAgIH0sXG4gICAgZXhlY3V0ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghZS5ydW5uaW5nKSByZXR1cm4gZmFsc2U7XG4gICAgICBlLmNiKCk7XG4gICAgICBlLnN0YXJ0KCk7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9LFxuICAgIHNldF9pbnRlcnZhbDogZnVuY3Rpb24gKGl2KSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZW91dCk7XG4gICAgICB0aGlzLnN0YXJ0KGZhbHNlLCBpdik7XG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBpbml0aWFsaXplR2FtZSA9ICgpID0+IHtcbiAgICAvL2luaXRpYWxpemVzIGFuZCBkcmF3cyBib2FyZCBhbmQgaW5pdGlhbGl6ZXMgY29udHJvbCBwYW5lbFxuICAgIGdyaWRCb2FyZC5zZXRCb2FyZFNpemUoYm9hcmRTaXplLCBib2FyZFNpemUpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ3JpZEJvYXJkLnJlbmRlcigpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRyb2xQYW5lbC5yZW5kZXIoKSk7XG4gICAgY29udHJvbFBhbmVsLmluaXRpYWxpemVCdXR0b25zKCk7XG5cbiAgICAvLyBncmlkQm9hcmQuZHJhd0JvYXJkKCk7XG4gICAgdmlld0NvbnRyb2xsZXIuZHJhd0JvYXJkKGdyaWRCb2FyZC5yZXR1cm5BcnJheSgpKTtcbiAgICBpbml0aWFsaXplQ2xpY2tMaXN0ZW5lcnMoKTtcblxuICAgIC8vYWRkcyBldmVudCBsaXNlbnRlcnMgdG8gYnV0dG9uc1xuICAgIGNvbnN0IGh0bWxTdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtYnV0dG9uXCIpO1xuICAgIGh0bWxTdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRHYW1lKTtcbiAgICBjb25zdCBodG1sUmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0LWJ1dHRvblwiKTtcbiAgICBodG1sUmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0R2FtZSk7XG4gICAgY29uc3QgaHRtbFN0ZXBCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0ZXAtYnV0dG9uXCIpO1xuICAgIGh0bWxTdGVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGVwR2FtZSk7XG4gICAgY29uc3Qgc3BlZWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwZWVkLWJ1dHRvblwiKTtcbiAgICBzcGVlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3BlZWRVcCk7XG4gICAgY29uc3Qgc2xvd0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xvdy1idXR0b25cIik7XG4gICAgc2xvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2xvd0Rvd24pO1xuICB9O1xuXG4gIGNvbnN0IGluaXRpYWxpemVDbGlja0xpc3RlbmVycyA9ICgpID0+IHtcbiAgICBsZXQgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JpZGJvYXJkXCIpO1xuICAgIGdyaWRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBsZXQgaWQgPSBlLnRhcmdldC5pZDtcblxuICAgICAgbGV0IGNsaWNrZWRDb29yZCA9IGNvb3JkUGFyc2VSZXZlcnNlKGlkLnRvU3RyaW5nKCkpO1xuICAgICAgZ3JpZEJvYXJkLmFkZExpdmVDZWxsKGNsaWNrZWRDb29yZFswXSwgY2xpY2tlZENvb3JkWzFdKTtcbiAgICAgIHZpZXdDb250cm9sbGVyLmRyYXdCb2FyZChncmlkQm9hcmQucmV0dXJuQXJyYXkoKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIGlmICh0aW1lci5ydW5uaW5nID09PSBmYWxzZSkge1xuICAgICAgdGltZXIuc3RhcnQoKCkgPT4ge1xuICAgICAgICB2aWV3Q29udHJvbGxlci50b2dnbGVTdGFydEJ1dHRvbkRpc3BsYXkoZmFsc2UpO1xuICAgICAgICBncmlkQm9hcmQuc3RhcnRHYW1lKCk7XG4gICAgICAgIHZpZXdDb250cm9sbGVyLmRyYXdCb2FyZChncmlkQm9hcmQucmV0dXJuQXJyYXkoKSk7XG4gICAgICB9LCBpbnRlcnZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZXdDb250cm9sbGVyLnRvZ2dsZVN0YXJ0QnV0dG9uRGlzcGxheSh0cnVlKTtcbiAgICAgIHRpbWVyLnN0b3AoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICBpbnRlcnZhbCA9IDUwMDtcbiAgICB2aWV3Q29udHJvbGxlci50b2dnbGVTdGFydEJ1dHRvbkRpc3BsYXkodHJ1ZSk7XG4gICAgdGltZXIuc3RvcCgpO1xuICAgIGdyaWRCb2FyZC5yZXNldEdhbWUoKTtcbiAgICB2aWV3Q29udHJvbGxlci5kcmF3Qm9hcmQoZ3JpZEJvYXJkLnJldHVybkFycmF5KCkpO1xuICB9O1xuICBjb25zdCBzdGVwR2FtZSA9ICgpID0+IHtcbiAgICBncmlkQm9hcmQuc3RlcEdhbWUoKTtcbiAgICB2aWV3Q29udHJvbGxlci5kcmF3Qm9hcmQoZ3JpZEJvYXJkLnJldHVybkFycmF5KCkpO1xuICB9O1xuICBjb25zdCBzbG93RG93biA9ICgpID0+IHtcbiAgICBpbnRlcnZhbCArPSAxMDA7XG4gICAgdGltZXIuc2V0X2ludGVydmFsKGludGVydmFsKTtcbiAgfTtcbiAgY29uc3Qgc3BlZWRVcCA9ICgpID0+IHtcbiAgICBpZiAoaW50ZXJ2YWwgPiAxMDApIHtcbiAgICAgIGludGVydmFsIC09IDEwMDtcbiAgICB9IGVsc2Uge1xuICAgICAgaW50ZXJ2YWwgPSAxMDtcbiAgICB9XG5cbiAgICB0aW1lci5zZXRfaW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdGlhbGl6ZUdhbWU6IGluaXRpYWxpemVHYW1lLFxuICB9O1xufSkoKTtcblxuY29uc3Qgdmlld0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCB0b2dnbGVTdGFydEJ1dHRvbkRpc3BsYXkgPSAoc3RhdGUpID0+IHtcbiAgICBjb25zdCBodG1sU3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWJ1dHRvblwiKTtcbiAgICBpZiAoc3RhdGUgPT09IHRydWUpIHtcbiAgICAgIGh0bWxTdGFydEJ1dHRvbi5pbm5lclRleHQgPSBcIlN0YXJ0XCI7XG4gICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIGh0bWxTdGFydEJ1dHRvbi5pbm5lclRleHQgPSBcIlN0b3BcIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZHJhd0JvYXJkID0gKGFycmF5KSA9PiB7XG4gICAgbGV0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyaWRib2FyZFwiKTtcbiAgICBncmlkQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZ3JpZENvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZ3JpZC1yb3dzXCIsIGFycmF5Lmxlbmd0aCk7XG4gICAgZ3JpZENvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZ3JpZC1jb2xzXCIsIGFycmF5WzBdLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCBhcnJheS5sZW5ndGg7IGMrKykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheVswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgaWYgKGFycmF5W2NdW2ldID09PSAwKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcInVuY2xpY2tlZFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjbGlja2VkXCI7XG4gICAgICAgIH1cbiAgICAgICAgY2VsbC5pZCA9IGB4JHtjICsgMX15JHtpICsgMX1gO1xuICAgICAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRyYXdCb2FyZDogZHJhd0JvYXJkLFxuICAgIHRvZ2dsZVN0YXJ0QnV0dG9uRGlzcGxheSxcbiAgfTtcbn0pKCk7XG5nYW1lQ29udHJvbGxlci5pbml0aWFsaXplR2FtZSgpO1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgQ29udHJvbFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IodHlwZSwgaWQpIHtcbiAgICBzdXBlcih0eXBlLCBpZCk7XG4gIH1cbiAgaW5pdGlhbGl6ZUJ1dHRvbnMgPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRyb2xQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJvbC1wYW5lbFwiKTtcbiAgICBsZXQgc3RhcnRCdXR0b24gPSBuZXcgQ29tcG9uZW50KFwiYnV0dG9uXCIsIFwic3RhcnQtYnV0dG9uXCIsIFwiU3RhcnRcIik7XG4gICAgbGV0IHJlc2V0QnV0dG9uID0gbmV3IENvbXBvbmVudChcImJ1dHRvblwiLCBcInJlc2V0LWJ1dHRvblwiLCBcIlJlc2V0XCIpO1xuICAgIGxldCBzdGVwQnV0dG9uID0gbmV3IENvbXBvbmVudChcImJ1dHRvblwiLCBcInN0ZXAtYnV0dG9uXCIsIFwiU3RlcFwiKTtcbiAgICBsZXQgc3BlZWRCdXR0b24gPSBuZXcgQ29tcG9uZW50KFwiYnV0dG9uXCIsIFwic3BlZWQtYnV0dG9uXCIsIFwiU3BlZWQgdXBcIik7XG4gICAgbGV0IHNsb3dCdXR0b24gPSBuZXcgQ29tcG9uZW50KFwiYnV0dG9uXCIsIFwic2xvdy1idXR0b25cIiwgXCJTbG93IGRvd25cIik7XG4gICAgY29udHJvbFBhbmVsLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uLnJlbmRlcigpKTtcbiAgICBjb250cm9sUGFuZWwuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24ucmVuZGVyKCkpO1xuICAgIGNvbnRyb2xQYW5lbC5hcHBlbmRDaGlsZChzdGVwQnV0dG9uLnJlbmRlcigpKTtcbiAgICBjb250cm9sUGFuZWwuYXBwZW5kQ2hpbGQoc3BlZWRCdXR0b24ucmVuZGVyKCkpO1xuICAgIGNvbnRyb2xQYW5lbC5hcHBlbmRDaGlsZChzbG93QnV0dG9uLnJlbmRlcigpKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9Db21wb25lbnRcIjtcbmltcG9ydCB7IGNvbndheUxvZ2ljSGFuZGxlciB9IGZyb20gXCIuLi91dGlscy9jb253YXlMb2dpY0hhbmRsZXJcIjtcbmltcG9ydCB7IGNoZWNrTnVtTmVpZ2hib3JzIH0gZnJvbSBcIi4uL3V0aWxzL2NoZWNrTmVpZ2hib3JzXCI7XG5cbmV4cG9ydCBjbGFzcyBHcmlkYm9hcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBpZCwgcHJvcHMpIHtcbiAgICBzdXBlcih0eXBlLCBpZCk7XG4gICAgdGhpcy5hcnJheSA9IFtdO1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgfVxuXG4gIHNldEJvYXJkU2l6ZSA9IChyb3dzLCBjb2xzKSA9PiB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5zaXplKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgdGhpcy5hcnJheS5wdXNoKFtdKTtcblxuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2xzOyBjKyspIHtcbiAgICAgICAgdGhpcy5hcnJheVtpXS5wdXNoKDApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBhZGRMaXZlQ2VsbCA9ICh4LCB5KSA9PiB7XG4gICAgdGhpcy5hcnJheVt4IC0gMV1beSAtIDFdID0gMTtcbiAgfTtcblxuICBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgbGV0IG5ld0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYXJyYXkubGVuZ3RoOyB4KyspIHtcbiAgICAgIG5ld0FycmF5LnB1c2goW10pO1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmFycmF5WzBdLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgIGxldCBudW1BbGl2ZSA9IGNoZWNrTnVtTmVpZ2hib3JzKHgsIHksIHRoaXMuYXJyYXkpO1xuICAgICAgICBsZXQgbmV3U3RhdHVzID0gY29ud2F5TG9naWNIYW5kbGVyKHRoaXMuYXJyYXlbeF1beV0sIG51bUFsaXZlKTtcbiAgICAgICAgbmV3QXJyYXlbeF0ucHVzaChuZXdTdGF0dXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXJyYXkuc3BsaWNlKDAsIHRoaXMuYXJyYXkubGVuZ3RoLCAuLi5uZXdBcnJheSk7XG4gIH07XG5cbiAgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgIHRoaXMuYXJyYXkgPSBbXTtcbiAgICB0aGlzLnNldEJvYXJkU2l6ZSh0aGlzLnByb3BzLnNpemUsIHRoaXMucHJvcHMuc2l6ZSk7XG4gIH07XG5cbiAgc3RlcEdhbWUgPSAoKSA9PiB7XG4gICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgfTtcblxuICByZXR1cm5BcnJheSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfTtcbn1cbiIsIi8vY2hlY2tzIGVhY2ggY2VsbHMgbmVpZ2Job3JzIGFuZCByZXR1cm5zIGFuIHVwZGF0ZWQgYXJyYXkgYmFzZWQgb24gd2hhdCBjZWxscyBhcmUgYWxpdmUgb3IgZGVhZCBiYXNlZCBvbiB0aGVpciBuZWlnaGJvcnNcbmltcG9ydCB7IGlzQWxpdmUgfSBmcm9tIFwiLi9pc0FsaXZlXCI7XG5leHBvcnQgY29uc3QgY2hlY2tOZWlnaGJvcnMgPSAoYXJyYXksIGlzQWxpdmUsIGNvbndheUxvZ2ljSGFuZGxlcikgPT4ge1xuICBsZXQgbmV3QXJyYXkgPSBhcnJheTtcbiAgZm9yIChsZXQgYyA9IDA7IGMgPCBhcnJheS5sZW5ndGg7IGMrKykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBudW1BbGl2ZSA9XG4gICAgICAgIGlzQWxpdmUoYyAtIDEsIGkgLSAxLCBhcnJheSkgK1xuICAgICAgICBpc0FsaXZlKGMsIGkgLSAxLCBhcnJheSkgK1xuICAgICAgICBpc0FsaXZlKGMgKyAxLCBpIC0gMSwgYXJyYXkpICtcbiAgICAgICAgaXNBbGl2ZShjIC0gMSwgaSwgYXJyYXkpICtcbiAgICAgICAgaXNBbGl2ZShjICsgMSwgaSwgYXJyYXkpICtcbiAgICAgICAgaXNBbGl2ZShjIC0gMSwgaSArIDEsIGFycmF5KSArXG4gICAgICAgIGlzQWxpdmUoYywgaSArIDEsIGFycmF5KSArXG4gICAgICAgIGlzQWxpdmUoYyArIDEsIGkgKyAxLCBhcnJheSk7XG4gICAgICBuZXdBcnJheVtjXVtpXSA9IGNvbndheUxvZ2ljSGFuZGxlcihpc0FsaXZlKGMsIGksIGFycmF5KSwgbnVtQWxpdmUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3QXJyYXk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hlY2tOdW1OZWlnaGJvcnMgPSAoYywgaSwgYXJyYXkpID0+IHtcblxuICAgICAgIGxldCBudW1BbGl2ZSA9XG4gICAgICAgIGlzQWxpdmUoYyAtIDEsIGkgLSAxLCBhcnJheSkgK1xuICAgICAgICBpc0FsaXZlKGMsIGkgLSAxLCBhcnJheSkgK1xuICAgICAgICBpc0FsaXZlKGMgKyAxLCBpIC0gMSwgYXJyYXkpICtcbiAgICAgICAgaXNBbGl2ZShjIC0gMSwgaSwgYXJyYXkpICtcbiAgICAgICAgaXNBbGl2ZShjICsgMSwgaSwgYXJyYXkpICtcbiAgICAgICAgaXNBbGl2ZShjIC0gMSwgaSArIDEsIGFycmF5KSArXG4gICAgICAgIGlzQWxpdmUoYywgaSArIDEsIGFycmF5KSArXG4gICAgICAgIGlzQWxpdmUoYyArIDEsIGkgKyAxLCBhcnJheSk7XG4gXG4gIHJldHVybiBudW1BbGl2ZTtcbn07XG4iLCJleHBvcnQgY29uc3QgY29ud2F5TG9naWNIYW5kbGVyID0gKGFsaXZlLCBudW1BbGl2ZU5laWdoYm9ycykgPT4ge1xuXG5cbmlmICgoYWxpdmUgPT09IDEpICYmIChudW1BbGl2ZU5laWdoYm9ycyA9PT0gMyB8fCBudW1BbGl2ZU5laWdoYm9ycyA9PT0gMikpIHtcblxuICAgIHJldHVybiAxXG59IGVsc2UgaWYgKChhbGl2ZSA9PT0gMCkgJiYgKG51bUFsaXZlTmVpZ2hib3JzID09PSAzKSkge1xuXG4gICAgcmV0dXJuIDE7XG5cbn0gXG5cbiAgICByZXR1cm4gMDtcblxuXG5cbn0iLCIvL2NvbnZlcnRzIHRoZSBzdHJpbmcgaWRzIGZyb20gZ3JpZCBnYW1lYm9hcmQgdG8gYXJyYXlzIHRvIHN0b3JlIHRoZW0gaW4gY29tcG9uZW50J3Mgc3RhdGUsIGkuZS4gcHJvcGVydHlcblxuZXhwb3J0IGZ1bmN0aW9uIGNvb3JkUGFyc2VSZXZlcnNlKHN0cmluZykge1xuXG4gICAgaWYgKHN0cmluZyA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcmV0dXJuO1xuOyAgICB9XG5cbiAgICBsZXQgeCA9IHN0cmluZy5zbGljZSgxLCBzdHJpbmcuaW5kZXhPZihcInlcIikpO1xuXG4gICAgbGV0IHkgPSBzdHJpbmcuc2xpY2Uoc3RyaW5nLmluZGV4T2YoXCJ5XCIpICsgMSlcblxuICAgIGxldCB6ID0gW3BhcnNlSW50KHgpLCBwYXJzZUludCh5KV07XG4gICAgcmV0dXJuIHo7XG4gICAgfSIsIi8vY2hlY2tzIHRoYXQgY2VsbCBpcyBvbiBib2FyZCBhbmQgYWxpdmUsIGkuZS4gMSBpbnN0ZWFkIG9mIDBcblxuZXhwb3J0IGNvbnN0IGlzQWxpdmUgPSAoeCwgeSwgYXJyYXkpPT5cbntcbiAgICBpZiAoeCA8IDAgfHwgeCA+PSBhcnJheS5sZW5ndGggfHwgeSA8IDAgfHwgeSA+PSBhcnJheVswXS5sZW5ndGgpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5yZXR1cm4gYXJyYXlbeF1beV0gIT09IDAgPyAxIDogMFxuXG5cbiAgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9