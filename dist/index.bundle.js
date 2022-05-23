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




const gameController = (function () {
  let boardSize = 50;
  let gridBoard = new _modules_Gridboard__WEBPACK_IMPORTED_MODULE_1__.Gridboard("div", "gridboard", { size: boardSize });
  let controlPanel = new _modules_ControlPanel__WEBPACK_IMPORTED_MODULE_2__.ControlPanel("div", "control-panel");

  let isPaused = false;
  let interval = 500;

  const initializeGame = () => {
    //initializes and draws board and initializes control panel
    gridBoard.setBoardSize(boardSize, boardSize);
    document.body.appendChild(gridBoard.render());
    document.body.appendChild(controlPanel.render());
    controlPanel.initializeButtons();
    gridBoard.initializeClickListeners();
    gridBoard.drawBoard();

    //adds event lisenters to buttons
    const htmlStartButton = document.getElementById("start-button");
    htmlStartButton.addEventListener("click", startGame);
    const htmlResetButton = document.getElementById("reset-button");
    htmlResetButton.addEventListener("click", resetGame);
    const htmlStepButton = document.getElementById("step-button");
    htmlStepButton.addEventListener("click", stepGame);
  };

  const startGame = () => {
    isPaused = !isPaused;
    const htmlStartButton = document.getElementById("start-button");
    if (isPaused) {
      htmlStartButton.innerText = "Stop";
    } else {
      htmlStartButton.innerText = "Start";
    }

    let turn = setInterval(function () {
      if (isPaused) {
        gridBoard.startGame();
      } else {
        clearInterval(turn);
      }
    }, interval);
  };
  const resetGame = () => {
    isPaused = false;
    gridBoard.resetGame();
  };
  const stepGame = () => {
    gridBoard.stepGame();
  };

  return {
    initializeGame: initializeGame,
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
/* harmony import */ var _utils_coordParseReverse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/coordParseReverse */ "./src/utils/coordParseReverse.js");
/* harmony import */ var _utils_isAlive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/isAlive */ "./src/utils/isAlive.js");
/* harmony import */ var _utils_conwayLogicHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/conwayLogicHandler */ "./src/utils/conwayLogicHandler.js");
/* harmony import */ var _utils_checkNeighbors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/checkNeighbors */ "./src/utils/checkNeighbors.js");






class Gridboard extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(type, id, props) {
    super(type, id);
    this.array = [];
    this.props=props;
  }

  setBoardSize = (rows, cols) => {
    console.log(this.props.size)
    for (let i = 0; i < rows; i++) {
      this.array.push([]);

      for (let c = 0; c < cols; c++) {
        this.array[i].push(0);
      }
    }
  };

  drawBoard = () => {
    let gridContainer = document.getElementById(this.id);
    gridContainer.innerHTML = "";
    gridContainer.style.setProperty("--grid-rows", this.array.length);
    gridContainer.style.setProperty("--grid-cols", this.array[0].length);
    for (let c = 0; c < this.array.length; c++) {
      for (let i = 0; i < this.array[0].length; i++) {
        let cell = document.createElement("div");

        if (this.array[c][i] === 0) {
          cell.className = "unclicked";
        } else {
          cell.className = "clicked";
        }
        cell.id = `x${c + 1}y${i + 1}`;
        gridContainer.appendChild(cell);
      }
    }
  };

  initializeClickListeners = () => {
    let gridContainer = document.getElementById(this.id);
    gridContainer.addEventListener("click", (e) => {
      let id = e.target.id;

      let clickedCoord = (0,_utils_coordParseReverse__WEBPACK_IMPORTED_MODULE_1__.coordParseReverse)(id.toString());
      this.array[clickedCoord[0] - 1][clickedCoord[1] - 1] = 1;
      this.drawBoard();
    });
  };

  startGame = () => {
    let newArray = [];

    for (let x = 0; x < this.array.length; x++) {
      newArray.push([]);
      for (let y = 0; y < this.array[0].length; y++) {
        let numAlive = (0,_utils_checkNeighbors__WEBPACK_IMPORTED_MODULE_4__.checkNumNeighbors)(x, y, this.array);
        let newStatus = (0,_utils_conwayLogicHandler__WEBPACK_IMPORTED_MODULE_3__.conwayLogicHandler)(this.array[x][y], numAlive);
        newArray[x].push(newStatus);
      }
    }

    this.array.splice(0, this.array.length, ...newArray);

    this.drawBoard();
  };

  resetGame = () => {
    this.array = [];

    this.setBoardSize(this.props.size, this.props.size);
    this.drawBoard();
  };

  stepGame = () => {
    this.startGame();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29ud2F5Ly4vc3JjL3N0eWxlcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9jb253YXkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NvbndheS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NvbndheS8uL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3M/MjAzYiIsIndlYnBhY2s6Ly9jb253YXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY29ud2F5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jb253YXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY29ud2F5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NvbndheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NvbndheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NvbndheS8uL3NyYy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vY29ud2F5Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2NvbndheS8uL3NyYy9tb2R1bGVzL0NvbnRyb2xQYW5lbC5qcyIsIndlYnBhY2s6Ly9jb253YXkvLi9zcmMvbW9kdWxlcy9HcmlkYm9hcmQuanMiLCJ3ZWJwYWNrOi8vY29ud2F5Ly4vc3JjL3V0aWxzL2NoZWNrTmVpZ2hib3JzLmpzIiwid2VicGFjazovL2NvbndheS8uL3NyYy91dGlscy9jb253YXlMb2dpY0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vY29ud2F5Ly4vc3JjL3V0aWxzL2Nvb3JkUGFyc2VSZXZlcnNlLmpzIiwid2VicGFjazovL2NvbndheS8uL3NyYy91dGlscy9pc0FsaXZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1ncmlkLWNvbHM6IDE7XFxuICAtLWdyaWQtcm93czogMTtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuI2dyaWRib2FyZCA+ICoge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNncmlkYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWdyaWQtY29scyksIDFlbSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ncmlkLXJvd3MpLCAxZW0pO1xcbn1cXG5cXG4udW5jbGlja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbn1cXG5cXG4uY2xpY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFFSSxjQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdFO0VBQ0ksVUFBQTtBQUFOOztBQUdJO0VBRUUsdUJBQUE7QUFETjs7QUFJSTtFQUVFLGFBQUE7RUFDQSxvREFBQTtFQUNBLGlEQUFBO0FBRk47O0FBS0k7RUFDRSx1QkFBQTtBQUZOOztBQUtJO0VBQ0UscUJBQUE7QUFGTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuXFxuICAgIC0tZ3JpZC1jb2xzOiAxO1xcbiAgICAtLWdyaWQtcm93czogMTtcXG4gIH1cXG4gIFxcbiAgaDEge1xcbiAgICAgIGNvbG9yOiByZWQ7XFxuICAgIH1cXG4gIFxcbiAgICAjZ3JpZGJvYXJkID4gKiB7XFxuICBcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgfVxcbiAgXFxuICAgICNncmlkYm9hcmQge1xcbiAgICAgICBcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWdyaWQtY29scyksIDFlbSk7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQodmFyKC0tZ3JpZC1yb3dzKSwgMWVtKTtcXG4gICAgfVxcblxcbiAgICAudW5jbGlja2VkIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gICAgfVxcblxcbiAgICAuY2xpY2tlZCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL2dlbmVyaWMgY29tcG9uZW50IGNsYXNzXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IodHlwZSwgaWQgPSBcIlwiLCBpbm5lckh0bWw9XCJcIikge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuaW5uZXJIdG1sID0gaW5uZXJIdG1sO1xuICB9XG5cbiAgLy9yZW5kZXIgZnVuY3Rpb24gdGhhdCBqdXN0IHJldHVybnMgdGhlIGh0bWwgZWxlbWVudCwgYnV0IGFsc28gd3JhcHMgaXQgaW4gYSBnZW5lcmF0ZWQgY29udGFpbmVyIGRpdiBmb3IgXG4gIC8vc3R5bGluZyBwdXJwb3Nlc1xuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy50eXBlLnRvU3RyaW5nKCkpO1xuICAgIGVsZW1lbnQuaWQgPSB0aGlzLmlkLnRvU3RyaW5nKCk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmlubmVySHRtbDtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5pZD0oYCR7dGhpcy5pZH0tY29udGFpbmVyYClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudClcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH07XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IHsgR3JpZGJvYXJkIH0gZnJvbSBcIi4vbW9kdWxlcy9HcmlkYm9hcmRcIjtcbmltcG9ydCB7IENvbnRyb2xQYW5lbCB9IGZyb20gXCIuL21vZHVsZXMvQ29udHJvbFBhbmVsXCI7XG5cbmNvbnN0IGdhbWVDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgbGV0IGJvYXJkU2l6ZSA9IDUwO1xuICBsZXQgZ3JpZEJvYXJkID0gbmV3IEdyaWRib2FyZChcImRpdlwiLCBcImdyaWRib2FyZFwiLCB7IHNpemU6IGJvYXJkU2l6ZSB9KTtcbiAgbGV0IGNvbnRyb2xQYW5lbCA9IG5ldyBDb250cm9sUGFuZWwoXCJkaXZcIiwgXCJjb250cm9sLXBhbmVsXCIpO1xuXG4gIGxldCBpc1BhdXNlZCA9IGZhbHNlO1xuICBsZXQgaW50ZXJ2YWwgPSA1MDA7XG5cbiAgY29uc3QgaW5pdGlhbGl6ZUdhbWUgPSAoKSA9PiB7XG4gICAgLy9pbml0aWFsaXplcyBhbmQgZHJhd3MgYm9hcmQgYW5kIGluaXRpYWxpemVzIGNvbnRyb2wgcGFuZWxcbiAgICBncmlkQm9hcmQuc2V0Qm9hcmRTaXplKGJvYXJkU2l6ZSwgYm9hcmRTaXplKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdyaWRCb2FyZC5yZW5kZXIoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250cm9sUGFuZWwucmVuZGVyKCkpO1xuICAgIGNvbnRyb2xQYW5lbC5pbml0aWFsaXplQnV0dG9ucygpO1xuICAgIGdyaWRCb2FyZC5pbml0aWFsaXplQ2xpY2tMaXN0ZW5lcnMoKTtcbiAgICBncmlkQm9hcmQuZHJhd0JvYXJkKCk7XG5cbiAgICAvL2FkZHMgZXZlbnQgbGlzZW50ZXJzIHRvIGJ1dHRvbnNcbiAgICBjb25zdCBodG1sU3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWJ1dHRvblwiKTtcbiAgICBodG1sU3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZSk7XG4gICAgY29uc3QgaHRtbFJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldC1idXR0b25cIik7XG4gICAgaHRtbFJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldEdhbWUpO1xuICAgIGNvbnN0IGh0bWxTdGVwQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGVwLWJ1dHRvblwiKTtcbiAgICBodG1sU3RlcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RlcEdhbWUpO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICBpc1BhdXNlZCA9ICFpc1BhdXNlZDtcbiAgICBjb25zdCBodG1sU3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWJ1dHRvblwiKTtcbiAgICBpZiAoaXNQYXVzZWQpIHtcbiAgICAgIGh0bWxTdGFydEJ1dHRvbi5pbm5lclRleHQgPSBcIlN0b3BcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaHRtbFN0YXJ0QnV0dG9uLmlubmVyVGV4dCA9IFwiU3RhcnRcIjtcbiAgICB9XG5cbiAgICBsZXQgdHVybiA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc1BhdXNlZCkge1xuICAgICAgICBncmlkQm9hcmQuc3RhcnRHYW1lKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKHR1cm4pO1xuICAgICAgfVxuICAgIH0sIGludGVydmFsKTtcbiAgfTtcbiAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgIGlzUGF1c2VkID0gZmFsc2U7XG4gICAgZ3JpZEJvYXJkLnJlc2V0R2FtZSgpO1xuICB9O1xuICBjb25zdCBzdGVwR2FtZSA9ICgpID0+IHtcbiAgICBncmlkQm9hcmQuc3RlcEdhbWUoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXRpYWxpemVHYW1lOiBpbml0aWFsaXplR2FtZSxcbiAgfTtcbn0pKCk7XG5cbmdhbWVDb250cm9sbGVyLmluaXRpYWxpemVHYW1lKCk7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBpZCkge1xuICAgIHN1cGVyKHR5cGUsIGlkKTtcbiAgfVxuICBpbml0aWFsaXplQnV0dG9ucyA9ICgpID0+IHtcbiAgICBsZXQgY29udHJvbFBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250cm9sLXBhbmVsXCIpO1xuICAgIGxldCBzdGFydEJ1dHRvbiA9IG5ldyBDb21wb25lbnQoXCJidXR0b25cIiwgXCJzdGFydC1idXR0b25cIiwgXCJTdGFydFwiKTtcbiAgICBsZXQgcmVzZXRCdXR0b24gPSBuZXcgQ29tcG9uZW50KFwiYnV0dG9uXCIsIFwicmVzZXQtYnV0dG9uXCIsIFwiUmVzZXRcIik7XG4gICAgbGV0IHN0ZXBCdXR0b24gPSBuZXcgQ29tcG9uZW50KFwiYnV0dG9uXCIsIFwic3RlcC1idXR0b25cIiwgXCJTdGVwXCIpO1xuICAgIGxldCBzcGVlZEJ1dHRvbiA9IG5ldyBDb21wb25lbnQoXCJidXR0b25cIiwgXCJzcGVlZC1idXR0b25cIiwgXCJTcGVlZCB1cFwiKTtcbiAgICBsZXQgc2xvd0J1dHRvbiA9IG5ldyBDb21wb25lbnQoXCJidXR0b25cIiwgXCJzbG93LWJ1dHRvblwiLCBcIlNsb3cgZG93blwiKTtcbiAgICBjb250cm9sUGFuZWwuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24ucmVuZGVyKCkpO1xuICAgIGNvbnRyb2xQYW5lbC5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbi5yZW5kZXIoKSk7XG4gICAgY29udHJvbFBhbmVsLmFwcGVuZENoaWxkKHN0ZXBCdXR0b24ucmVuZGVyKCkpO1xuICAgIGNvbnRyb2xQYW5lbC5hcHBlbmRDaGlsZChzcGVlZEJ1dHRvbi5yZW5kZXIoKSk7XG4gICAgY29udHJvbFBhbmVsLmFwcGVuZENoaWxkKHNsb3dCdXR0b24ucmVuZGVyKCkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uL0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgY29vcmRQYXJzZVJldmVyc2UgfSBmcm9tIFwiLi4vdXRpbHMvY29vcmRQYXJzZVJldmVyc2VcIjtcbmltcG9ydCB7IGlzQWxpdmUgfSBmcm9tIFwiLi4vdXRpbHMvaXNBbGl2ZVwiO1xuaW1wb3J0IHsgY29ud2F5TG9naWNIYW5kbGVyIH0gZnJvbSBcIi4uL3V0aWxzL2NvbndheUxvZ2ljSGFuZGxlclwiO1xuaW1wb3J0IHsgY2hlY2tOdW1OZWlnaGJvcnMgfSBmcm9tIFwiLi4vdXRpbHMvY2hlY2tOZWlnaGJvcnNcIjtcblxuZXhwb3J0IGNsYXNzIEdyaWRib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIGlkLCBwcm9wcykge1xuICAgIHN1cGVyKHR5cGUsIGlkKTtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gICAgdGhpcy5wcm9wcz1wcm9wcztcbiAgfVxuXG4gIHNldEJvYXJkU2l6ZSA9IChyb3dzLCBjb2xzKSA9PiB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5zaXplKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICB0aGlzLmFycmF5LnB1c2goW10pO1xuXG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbHM7IGMrKykge1xuICAgICAgICB0aGlzLmFycmF5W2ldLnB1c2goMCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGRyYXdCb2FyZCA9ICgpID0+IHtcbiAgICBsZXQgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuICAgIGdyaWRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBncmlkQ29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KFwiLS1ncmlkLXJvd3NcIiwgdGhpcy5hcnJheS5sZW5ndGgpO1xuICAgIGdyaWRDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLWdyaWQtY29sc1wiLCB0aGlzLmFycmF5WzBdLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmFycmF5Lmxlbmd0aDsgYysrKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyYXlbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGlmICh0aGlzLmFycmF5W2NdW2ldID09PSAwKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBcInVuY2xpY2tlZFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gXCJjbGlja2VkXCI7XG4gICAgICAgIH1cbiAgICAgICAgY2VsbC5pZCA9IGB4JHtjICsgMX15JHtpICsgMX1gO1xuICAgICAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBpbml0aWFsaXplQ2xpY2tMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgbGV0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgICBncmlkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgbGV0IGlkID0gZS50YXJnZXQuaWQ7XG5cbiAgICAgIGxldCBjbGlja2VkQ29vcmQgPSBjb29yZFBhcnNlUmV2ZXJzZShpZC50b1N0cmluZygpKTtcbiAgICAgIHRoaXMuYXJyYXlbY2xpY2tlZENvb3JkWzBdIC0gMV1bY2xpY2tlZENvb3JkWzFdIC0gMV0gPSAxO1xuICAgICAgdGhpcy5kcmF3Qm9hcmQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgbGV0IG5ld0FycmF5ID0gW107XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYXJyYXkubGVuZ3RoOyB4KyspIHtcbiAgICAgIG5ld0FycmF5LnB1c2goW10pO1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmFycmF5WzBdLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgIGxldCBudW1BbGl2ZSA9IGNoZWNrTnVtTmVpZ2hib3JzKHgsIHksIHRoaXMuYXJyYXkpO1xuICAgICAgICBsZXQgbmV3U3RhdHVzID0gY29ud2F5TG9naWNIYW5kbGVyKHRoaXMuYXJyYXlbeF1beV0sIG51bUFsaXZlKTtcbiAgICAgICAgbmV3QXJyYXlbeF0ucHVzaChuZXdTdGF0dXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYXJyYXkuc3BsaWNlKDAsIHRoaXMuYXJyYXkubGVuZ3RoLCAuLi5uZXdBcnJheSk7XG5cbiAgICB0aGlzLmRyYXdCb2FyZCgpO1xuICB9O1xuXG4gIHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLmFycmF5ID0gW107XG5cbiAgICB0aGlzLnNldEJvYXJkU2l6ZSh0aGlzLnByb3BzLnNpemUsIHRoaXMucHJvcHMuc2l6ZSk7XG4gICAgdGhpcy5kcmF3Qm9hcmQoKTtcbiAgfTtcblxuICBzdGVwR2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICB9O1xufVxuIiwiLy9jaGVja3MgZWFjaCBjZWxscyBuZWlnYmhvcnMgYW5kIHJldHVybnMgYW4gdXBkYXRlZCBhcnJheSBiYXNlZCBvbiB3aGF0IGNlbGxzIGFyZSBhbGl2ZSBvciBkZWFkIGJhc2VkIG9uIHRoZWlyIG5laWdoYm9yc1xuaW1wb3J0IHsgaXNBbGl2ZSB9IGZyb20gXCIuL2lzQWxpdmVcIjtcbmV4cG9ydCBjb25zdCBjaGVja05laWdoYm9ycyA9IChhcnJheSwgaXNBbGl2ZSwgY29ud2F5TG9naWNIYW5kbGVyKSA9PiB7XG4gIGxldCBuZXdBcnJheSA9IGFycmF5O1xuICBmb3IgKGxldCBjID0gMDsgYyA8IGFycmF5Lmxlbmd0aDsgYysrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheVswXS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG51bUFsaXZlID1cbiAgICAgICAgaXNBbGl2ZShjIC0gMSwgaSAtIDEsIGFycmF5KSArXG4gICAgICAgIGlzQWxpdmUoYywgaSAtIDEsIGFycmF5KSArXG4gICAgICAgIGlzQWxpdmUoYyArIDEsIGkgLSAxLCBhcnJheSkgK1xuICAgICAgICBpc0FsaXZlKGMgLSAxLCBpLCBhcnJheSkgK1xuICAgICAgICBpc0FsaXZlKGMgKyAxLCBpLCBhcnJheSkgK1xuICAgICAgICBpc0FsaXZlKGMgLSAxLCBpICsgMSwgYXJyYXkpICtcbiAgICAgICAgaXNBbGl2ZShjLCBpICsgMSwgYXJyYXkpICtcbiAgICAgICAgaXNBbGl2ZShjICsgMSwgaSArIDEsIGFycmF5KTtcbiAgICAgIG5ld0FycmF5W2NdW2ldID0gY29ud2F5TG9naWNIYW5kbGVyKGlzQWxpdmUoYywgaSwgYXJyYXkpLCBudW1BbGl2ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdBcnJheTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGVja051bU5laWdoYm9ycyA9IChjLCBpLCBhcnJheSkgPT4ge1xuXG4gICAgICAgbGV0IG51bUFsaXZlID1cbiAgICAgICAgaXNBbGl2ZShjIC0gMSwgaSAtIDEsIGFycmF5KSArXG4gICAgICAgIGlzQWxpdmUoYywgaSAtIDEsIGFycmF5KSArXG4gICAgICAgIGlzQWxpdmUoYyArIDEsIGkgLSAxLCBhcnJheSkgK1xuICAgICAgICBpc0FsaXZlKGMgLSAxLCBpLCBhcnJheSkgK1xuICAgICAgICBpc0FsaXZlKGMgKyAxLCBpLCBhcnJheSkgK1xuICAgICAgICBpc0FsaXZlKGMgLSAxLCBpICsgMSwgYXJyYXkpICtcbiAgICAgICAgaXNBbGl2ZShjLCBpICsgMSwgYXJyYXkpICtcbiAgICAgICAgaXNBbGl2ZShjICsgMSwgaSArIDEsIGFycmF5KTtcbiBcbiAgcmV0dXJuIG51bUFsaXZlO1xufTtcbiIsImV4cG9ydCBjb25zdCBjb253YXlMb2dpY0hhbmRsZXIgPSAoYWxpdmUsIG51bUFsaXZlTmVpZ2hib3JzKSA9PiB7XG5cblxuaWYgKChhbGl2ZSA9PT0gMSkgJiYgKG51bUFsaXZlTmVpZ2hib3JzID09PSAzIHx8IG51bUFsaXZlTmVpZ2hib3JzID09PSAyKSkge1xuXG4gICAgcmV0dXJuIDFcbn0gZWxzZSBpZiAoKGFsaXZlID09PSAwKSAmJiAobnVtQWxpdmVOZWlnaGJvcnMgPT09IDMpKSB7XG5cbiAgICByZXR1cm4gMTtcblxufSBcblxuICAgIHJldHVybiAwO1xuXG5cblxufSIsIi8vY29udmVydHMgdGhlIHN0cmluZyBpZHMgZnJvbSBncmlkIGdhbWVib2FyZCB0byBhcnJheXMgdG8gc3RvcmUgdGhlbSBpbiBjb21wb25lbnQncyBzdGF0ZSwgaS5lLiBwcm9wZXJ0eVxuXG5leHBvcnQgZnVuY3Rpb24gY29vcmRQYXJzZVJldmVyc2Uoc3RyaW5nKSB7XG5cbiAgICBpZiAoc3RyaW5nID09PSB1bmRlZmluZWQpe1xuICAgICAgICByZXR1cm47XG47ICAgIH1cblxuICAgIGxldCB4ID0gc3RyaW5nLnNsaWNlKDEsIHN0cmluZy5pbmRleE9mKFwieVwiKSk7XG5cbiAgICBsZXQgeSA9IHN0cmluZy5zbGljZShzdHJpbmcuaW5kZXhPZihcInlcIikgKyAxKVxuXG4gICAgbGV0IHogPSBbcGFyc2VJbnQoeCksIHBhcnNlSW50KHkpXTtcbiAgICByZXR1cm4gejtcbiAgICB9IiwiLy9jaGVja3MgdGhhdCBjZWxsIGlzIG9uIGJvYXJkIGFuZCBhbGl2ZSwgaS5lLiAxIGluc3RlYWQgb2YgMFxuXG5leHBvcnQgY29uc3QgaXNBbGl2ZSA9ICh4LCB5LCBhcnJheSk9Plxue1xuICAgIGlmICh4IDwgMCB8fCB4ID49IGFycmF5Lmxlbmd0aCB8fCB5IDwgMCB8fCB5ID49IGFycmF5WzBdLmxlbmd0aCl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbnJldHVybiBhcnJheVt4XVt5XSAhPT0gMCA/IDEgOiAwXG5cblxuICB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=