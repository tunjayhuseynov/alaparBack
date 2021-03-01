module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/add.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/utilities.js":
/*!*********************************!*\
  !*** ./components/utilities.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd-html5-backend */ "react-dnd-html5-backend");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\tunca\\Desktop\\AlApar_master\\next\\alapar\\components\\utilities.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const {
  TabPane
} = antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"];
const {
  Option,
  OptGroup
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_1__["Input"];


function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = error => reject(error);
  });
}

function onChange(a, b, c) {
  console.log(a, b, c);
}

class Utilities {
  constructor(th) {
    _defineProperty(this, "divider", (text, side = "left") => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: 'separator',
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, this);
    });

    _defineProperty(this, "showError", text => {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(text);
    });

    _defineProperty(this, "tabGenerator", (tabs, ...items) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
        onTabClick: (key, event) => this.th.setState({
          activeKey: key
        }),
        activeKey: this.th.state.activeKey,
        centered: true,
        tabPosition: 'top',
        animated: true,
        children: items.map((w, k) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TabPane, {
            forceRender: true,
            tab: tabs[k],
            children: [w, k != items.length - 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: 'tabBtn',
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: 'btn',
                onClick: () => this.th.setState({
                  activeKey: `${k + 2}`
                }),
                children: "Sonraki"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 33
            }, this) : null]
          }, `${k + 1}`, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }, this);
    });

    _defineProperty(this, "inputGenerator", (title, placeholder, callback, state) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: 'subitem simpleInput',
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'item',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 41
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'item',
          validatename: state,
          displayname: title.replace(":", ""),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
            className: 'width',
            name: state,
            placeholder: placeholder,
            onKeyUp: callback
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }, this);
    });

    _defineProperty(this, "numberGenerator", (title, placeholder, callback, name, visibility, min = 1, max = Number.MAX_VALUE, {
      addonAfterList = null,
      addonAfterCallback = null,
      addonName = null,
      addonValue = null,
      addonAfterOnlyText = null
    } = {}) => {
      if (!visibility) {
        this.th.state.selected[name] = null;
        return null;
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: 'subitem numberInput',
        validatename: name,
        displayname: title.replace(":", ""),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'item',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            className: 'title',
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'item',
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
            style: {
              verticalAlign: 'middle',
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0
            },
            name: name,
            min: min,
            max: max,
            className: 'width inputnumber',
            placeholder: placeholder,
            formatter: value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
            parser: value => `${value}`.replace(/\$\s?|(,*)/g, ''),
            onKeyUp: callback
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 21
          }, this), !addonAfterList ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "ant-input-group-addon",
            style: {
              paddingTop: '2px',
              verticalAlign: 'middle',
              display: 'inline-table',
              lineHeight: '24px',
              height: '32px'
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
              style: {
                width: 120
              },
              value: addonValue,
              onSelect: addonAfterCallback,
              name: addonName,
              children: addonAfterList.map((w, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option, {
                state: addonName,
                value: w.id,
                children: w.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 63
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 25
          }, this), !addonAfterOnlyText ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "ant-input-group-addon",
            style: {
              paddingTop: '2px',
              verticalAlign: 'middle',
              display: 'inline-table',
              lineHeight: '24px',
              height: '32px'
            },
            children: addonAfterOnlyText
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }, this);
    });

    _defineProperty(this, "textAreaGeneretor", (title, placeholder, callback, name) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: 'subitem textAreaInput',
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'item',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'item',
          validatename: name,
          displayname: title.replace(":", ""),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextArea, {
            className: 'width inputarea',
            name: name,
            placeholder: placeholder,
            autoSize: {
              minRows: 5,
              maxRows: 12
            },
            onKeyUp: callback,
            maxLength: 5000
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }, this);
    });

    _defineProperty(this, "price\u0130nputGenerator", (title, minName, maxName, min, step, Callback, visibility) => {
      if (!visibility) {
        this.th.state.selected[minName] = null;
        this.th.state.selected[maxName] = null;
        return null;
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: 'subitem priceInput',
        validatename: minName,
        displayname: title.replace(":", ""),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'item',
          validatename: maxName,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 64
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'item',
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
            placeholder: "Min.",
            onBlur: Callback,
            onInput: Callback,
            min: min,
            step: step,
            name: minName,
            formatter: value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
            parser: value => value.replace(/\$\s?|(,*)/g, '')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 21
          }, this), "-", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
            placeholder: "Max.",
            onBlur: Callback,
            onInput: Callback,
            min: min,
            step: step,
            name: maxName,
            formatter: value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
            parser: value => value.replace(/\$\s?|(,*)/g, '')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 13
      }, this);
    });

    _defineProperty(this, "selectGenerator", (title, options, name, selected, callback, sort, selectAll, subname = null) => {
      if (!options || options.length < 1) {
        this.th.state.selected[name] = null;
        return null;
      }

      if (sort) {
        options.sort((a, b) => {
          let fa = a.name.toLowerCase();
          let fb = b.name.toLowerCase();
          if (fa < fb) return -1;
          if (fa > fb) return 1;
          return 0;
        });
      }

      if (subname) {
        console.log(subname);
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'subitem selectInput',
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: 'item',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 45
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: 'item',
            validatename: name,
            displayname: title.replace(":", ""),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
              virtual: false,
              onSelect: callback,
              placeholder: "Seçin",
              value: selected,
              name: name,
              className: 'width',
              children: [selectAll ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option, {
                state: name,
                value: 0,
                children: "Ham\u0131s\u0131"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 42
              }, this) : null, subname.map((w, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(OptGroup, {
                label: w.name,
                children: w.category.map((d, q) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option, {
                  state: name,
                  value: d.id,
                  children: d.name
                }, Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])(), false, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 59
                }, this))
              }, Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])(), false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 52
              }, this))]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 17
        }, this);
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: 'subitem selectInput',
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'item',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 37
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'item',
          validatename: name,
          displayname: title.replace(":", ""),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
            virtual: false,
            onSelect: callback,
            placeholder: "Seçin",
            value: selected,
            name: name,
            className: 'width',
            children: [selectAll ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option, {
              state: name,
              value: 0,
              children: "Ham\u0131s\u0131"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 34
            }, this) : null, options.map((w, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option, {
              state: name,
              value: w.id,
              children: w.name
            }, new Date().getTime() + i, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 44
            }, this))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }, this);
    });

    _defineProperty(this, "checkBoxGenerator", (title, callback, name, visible) => {
      if (!visible) {
        this.th.state.selected[name] = null;
        return null;
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: 'subitem checkInput',
        displayname: title.replace(":", ""),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
          state: name,
          name: name,
          onChange: callback,
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 13
      }, this);
    });

    _defineProperty(this, "radioGenerator", (title, values, defaultValue, callback, name, secondValues) => {
      if (!values) return null;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "subitem radioInput",
        validatename: name,
        displayname: title.replace(":", ""),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 17
        }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 40
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
          onChange: callback,
          defaultValue: defaultValue,
          buttonStyle: "solid",
          children: !secondValues ? values.map((w, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
            value: w.id,
            children: w.name
          }, new Date().getTime() + i, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 46
          }, this)) : secondValues.map((w, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
            value: w.id,
            children: w.name
          }, new Date().getTime() + i, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 52
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 13
      }, this);
    });

    _defineProperty(this, "DragableUploadListItem", ({
      originNode,
      moveRow,
      file,
      fileList
    }) => {
      const type = 'DragableUploadList';
      const ref = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef();
      const index = fileList.indexOf(file);
      const [{
        isOver,
        dropClassName
      }, drop] = Object(react_dnd__WEBPACK_IMPORTED_MODULE_2__["useDrop"])({
        accept: type,
        collect: monitor => {
          const {
            index: dragIndex
          } = monitor.getItem() || {};

          if (dragIndex === index) {
            return {};
          }

          return {
            isOver: monitor.isOver(),
            dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward'
          };
        },
        drop: item => {
          moveRow(item.index, index);
        }
      });
      const [, drag] = Object(react_dnd__WEBPACK_IMPORTED_MODULE_2__["useDrag"])({
        item: {
          type,
          index
        },
        collect: monitor => ({
          isDragging: monitor.isDragging()
        })
      });
      drop(drag(ref));

      const errorNode = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
        title: "Upload Error",
        getPopupContainer: () => document.body,
        children: originNode.props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 13
      }, this);

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: ref,
        className: `ant-upload-draggable-list-item ${isOver ? dropClassName : ''}`,
        style: {
          cursor: 'move'
        },
        children: file.status === 'error' ? errorNode : originNode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 13
      }, this);
    });

    _defineProperty(this, "moveRow", (dragIndex, hoverIndex) => {
      let fileList = this.th.state.fileList;
      [fileList[dragIndex], fileList[hoverIndex]] = [fileList[hoverIndex], fileList[dragIndex]];
      this.th.setState({
        fileList: fileList
      });
      this.handleChange({
        fileList: fileList
      });
    });

    _defineProperty(this, "manager", Object(react_dnd__WEBPACK_IMPORTED_MODULE_2__["createDndContext"])(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3__["HTML5Backend"]));

    _defineProperty(this, "imageUploadGenerator", (fileList, previewVisible, previewTitle, previewImage) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "subitem",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_dnd__WEBPACK_IMPORTED_MODULE_2__["DndProvider"], {
          manager: this.manager.dragDropManager,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
            action: "http://192.168.1.107:5566/api/bina/image",
            name: "images",
            multiple: true,
            listType: "picture-card",
            fileList: fileList,
            onPreview: this.handlePreview,
            onChange: this.handleChange,
            itemRender: (originNode, file, currFileList) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(this.DragableUploadListItem, {
              originNode: originNode,
              file: file,
              fileList: currFileList,
              moveRow: this.moveRow
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 29
            }, this),
            children: fileList.length >= 25 ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["PlusOutlined"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 353,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  marginTop: 8
                },
                children: "\u015E\u0259kil"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 354,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 352,
              columnNumber: 57
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 335,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
          visible: previewVisible,
          title: previewTitle,
          footer: null,
          onCancel: this.handleCancel,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: "example",
            style: {
              width: '100%'
            },
            src: previewImage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 364,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 13
      }, this);
    });

    _defineProperty(this, "getImageState", {
      previewVisible: false,
      previewImage: '',
      previewTitle: '',
      fileList: []
    });

    _defineProperty(this, "handleCancel", () => this.th.setState({
      previewVisible: false
    }));

    _defineProperty(this, "handlePreview", async file => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }

      this.th.setState({
        previewImage: file.url || file.preview,
        previewVisible: true,
        previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
      });
    });

    _defineProperty(this, "handleChange", async ({
      fileList
    }) => {
      this.th.setState(_objectSpread(_objectSpread({}, this.th.state), {}, {
        fileList: [...fileList],
        selected: _objectSpread(_objectSpread({}, this.th.state.selected), {}, {
          images: [...fileList].filter(w => w.response).map(w => w.response.fileName)
        })
      }));
    });

    _defineProperty(this, "googleMap", (lat, lan, callback, title, latName, lanName) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        displayname: title.replace(":", ""),
        className: "subitem",
        style: {
          height: '100%',
          width: '50%'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'item',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 416,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'item',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            type: "primary",
            onClick: () => {
              this.th.setState({
                mapVisible: true
              });
            },
            children: "A\xE7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 419,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
          title: "X\u0259rit\u0259",
          visible: this.th.state.mapVisible,
          width: '50%',
          footer: null,
          onCancel: () => {
            this.th.setState({
              mapVisible: false
            });
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RegularMap, {
            googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD6Vz_IKnktPC_TLl9DAmm_BpxokzQ4fIQ",
            loadingElement: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: loadingElementStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 426,
              columnNumber: 41
            }, this),
            containerElement: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: containerElementStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 427,
              columnNumber: 43
            }, this),
            mapElement: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: mapElementStyle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 428,
              columnNumber: 37
            }, this),
            info: {
              lat: lat,
              lan: lan,
              callback: callback
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 424,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 13
      }, this);
    });

    this.th = th;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Utilities);
const defaultOptions = {
  scrollwheel: false
};
const RegularMap = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_5__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_5__["withGoogleMap"])(props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMap"], {
  defaultZoom: 12,
  defaultCenter: {
    lat: +props.info.lat,
    lng: +props.info.lan
  },
  defaultOptions: defaultOptions,
  onClick: props.info.callback,
  options: {
    mapTypeControl: true,
    clickableIcons: false
  },
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_google_maps__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
    position: {
      lat: +props.info.lat,
      lng: +props.info.lan
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 455,
    columnNumber: 13
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 447,
  columnNumber: 9
}, undefined)));
const loadingElementStyle = {
  height: '100%'
};
const containerElementStyle = {
  height: '500px'
};
const mapElementStyle = {
  height: '100%'
};

/***/ }),

/***/ "./pages/add.js":
/*!**********************!*\
  !*** ./pages/add.js ***!
  \**********************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utilities */ "./components/utilities.js");

var _jsxFileName = "C:\\Users\\tunca\\Desktop\\AlApar_master\\next\\alapar\\pages\\add.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Add extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "header", (title, classname) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: classname,
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }, this);
    });

    _defineProperty(this, "ilkin", () => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: 'part',
        children: [this.header("Ilkin", "basliq"), this.utility.radioGenerator("Əmlak:", this.state.sellTypeList, 1, this.sellTypeCallback, "sellType"), this.utility.selectGenerator("Kategoriya:", this.state.categoryList, "category", this.state.selected.category, this.categoryCallback, false, false, this.state.subCategory), this.utility.selectGenerator("Şəhər:", this.state.cityList, "city", this.state.selected.city, this.cityCallback, true, false), this.utility.selectGenerator("Rayon:", this.state.regionList, "region", this.state.selected.region, this.regionCallback, true, false), this.utility.selectGenerator("Qəsəbə:", this.state.villageList, "village", this.state.selected.village, this.commonCallback, true, false), this.utility.selectGenerator("Metro:", this.state.metroList, "metro", this.state.selected.metro, this.commonCallback, true, false), this.utility.numberGenerator("Metroya olan dəqiqə müddəti:", "Daxil Edin", this.numberCallback, "metroDuration", this.state.selected.metro, 1, 120, {
          addonAfterList: this.state.metroWayList,
          addonAfterCallback: this.commonCallback,
          addonName: "metroWay",
          addonValue: this.state.selected.metroWay
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'radioGroup',
          children: this.utility.checkBoxGenerator("Metro Yoxdur", this.isMetroCallback, "nometro", this.state.nometro)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 17
        }, this), this.utility.googleMap(this.state.lat, this.state.lng, this.googleMapCallback, "Xəritə:", "lat", "lng")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }, this);
    });

    _defineProperty(this, "esas", () => {
      let sellingBox = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: 'sellingTypeBox radioGroup',
        style: {
          textAlign: ''
        },
        children: [this.utility.checkBoxGenerator("Cixaris", this.checkboxCallback, "licence", this.state.license), this.utility.checkBoxGenerator("Barter", this.checkboxCallback, "barter", this.state.addition.barter), this.utility.checkBoxGenerator("Ipoteka", this.checkboxCallback, "ipoteka", this.state.ipoteka), this.utility.checkBoxGenerator("Cixaris (Icare)", this.checkboxCallback, "icare", this.state.addition.icare), this.utility.checkBoxGenerator("Belediyye", this.checkboxCallback, "belediyye", this.state.addition.belediyye)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 26
      }, this);

      let rentingBox = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: 'rentingBox radioGroup',
        style: {
          textAlign: ''
        },
        children: [this.utility.checkBoxGenerator("Mətbəx Mebeli", this.checkboxCallback, "metbex", this.state.rentalAddition.metbexM), this.utility.checkBoxGenerator("Qabyuyan", this.checkboxCallback, "qab", this.state.rentalAddition.qabY), this.utility.checkBoxGenerator("Paltaryuyan", this.checkboxCallback, "paltar", this.state.rentalAddition.paltarY), this.utility.checkBoxGenerator("Soyuducu", this.checkboxCallback, "soyuducu", this.state.rentalAddition.soyuducu), this.utility.checkBoxGenerator("TV", this.checkboxCallback, "tv", this.state.rentalAddition.tv), this.utility.checkBoxGenerator("Kondicioner", this.checkboxCallback, "kondicioner", this.state.rentalAddition.kondicioner), this.utility.checkBoxGenerator("Internet", this.checkboxCallback, "internet", this.state.rentalAddition.internet), this.utility.checkBoxGenerator("Telefon", this.checkboxCallback, "telefon", this.state.rentalAddition.telefon), this.utility.checkBoxGenerator("Usag ilə", this.checkboxCallback, "usag", this.state.rentalAddition.usag), this.utility.checkBoxGenerator("Heyvan ilə", this.checkboxCallback, "heyvan", this.state.rentalAddition.heyvan)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 26
      }, this);

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: 'part',
        children: [this.header("Əsas", "basliq"), this.utility.selectGenerator("Kirayə müddəti:", this.state.rentDurationList, "rentDuration", this.state.selected.rentDuration, this.commonCallback, true, false), this.state.rentingTypeBoxVisibility ? this.utility.radioGenerator("Kirayə Tipi:", this.state.rentalAddition.otagordaire, 0, this.rentTypeCallback, "otagordaire", [{
          id: 0,
          name: "Bütün Yer"
        }, {
          id: 1,
          name: "Otag"
        }]) : null, this.utility.numberGenerator("Qiymət:", "Daxil Edin", this.numberCallback, "price", true, 1, Number.MAX_VALUE, {
          addonAfterList: this.state.currencyList,
          addonAfterCallback: this.commonCallback,
          addonName: "currency",
          addonValue: this.state.selected.currency
        }), this.utility.numberGenerator("Sahə:", "Daxil Edin", this.numberCallback, "areaSize", true, 1, Number.MAX_VALUE, {
          addonAfterOnlyText: this.state.areaUnit
        }), this.utility.numberGenerator("Torpaq Sahəsi:", "Daxil Edin", this.numberCallback, "secondAreaSize", this.state.addition.secondArea, 1, Number.MAX_VALUE, {
          addonAfterOnlyText: "sot"
        }), this.utility.numberGenerator("Otag:", "Daxil Edin", this.numberCallback, "roomAmount", this.state.addition.roomAmount), this.utility.selectGenerator("Torpag Teyinati:", this.state.addition.landAppointment ? this.state.landAppointmentList : false, "landAppointment", this.state.selected.landAppointment, this.commonCallback, null, true, false), this.utility.numberGenerator("Menzil Mertebesi:", "Daxil Edin", this.numberCallback, "floor", this.state.addition.floor, 0), this.utility.numberGenerator("Bina Mertebesi:", "Daxil Edin", this.numberCallback, "buildingFloor", this.state.addition.buildingFloor), this.utility.numberGenerator("Hamam Sayı", "Daxil Edin", this.numberCallback, "hamam", this.state.addition.hamam, 0, 20), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'radioGroup',
          style: {
            textAlign: ''
          },
          children: [this.utility.checkBoxGenerator("Eyvan", this.checkboxCallback, "eyvan", this.state.addition.eyvan), this.utility.checkBoxGenerator("Lift", this.checkboxCallback, "lift", this.state.addition.lift), this.utility.checkBoxGenerator("Mebel", this.checkboxCallback, "mebel", this.state.addition.mebel), this.utility.checkBoxGenerator("Temir", this.checkboxCallback, "temir", this.state.addition.temir), this.utility.checkBoxGenerator("Hovuz", this.checkboxCallback, "hovuz", this.state.addition.hovuz), this.utility.checkBoxGenerator("Qaz", this.checkboxCallback, "qaz", this.state.addition.qaz), this.utility.checkBoxGenerator("Su", this.checkboxCallback, "su", this.state.addition.su), this.utility.checkBoxGenerator("Isig", this.checkboxCallback, "isig", this.state.addition.isig), this.utility.checkBoxGenerator("Kanalizasiya", this.checkboxCallback, "kanalizasiya", this.state.addition.kanalizasiya)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 17
        }, this), this.state.rentingTypeBoxVisibility ? rentingBox : null, this.utility.textAreaGeneretor("Məlumat:", "Ən azı 100 hərfdən ibarət olmalıdır", this.textAreaCallback, "aboutInfo"), this.state.sellingTypeBoxVisibility ? sellingBox : null, this.utility.imageUploadGenerator(this.state.fileList, this.state.previewVisible, this.state.previewTitle, this.state.previewImage)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 13
      }, this);
    });

    _defineProperty(this, "elaqe", () => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: 'part',
        children: [this.header("Əlaqə", "basliq"), this.utility.radioGenerator("Əlaqədar Şəxsin Statusu:", [{
          id: 1,
          name: "Sahibi"
        }, {
          id: 0,
          name: "Vastəçi"
        }], 1, this.ownerCallback, "owner"), this.utility.inputGenerator("Ad:", "Daxil Edin", this.textAreaCallback, "name"), this.utility.inputGenerator("Nömrə:", "Daxil Edin", this.textAreaCallback, "phone"), this.utility.inputGenerator("E-mail:", "Daxil Edin", this.textAreaCallback, "email"), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'radioGroup',
          style: {
            textAlign: ''
          },
          children: [this.utility.checkBoxGenerator("WhatsApp", this.checkboxCallback, "wp", true), this.utility.checkBoxGenerator("Zəng", this.checkboxCallback, "call", true)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            onClick: this.submitClick,
            children: "Elave et"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 13
      }, this);
    });

    _defineProperty(this, "elave", () => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 13
      }, this);
    });

    _defineProperty(this, "validation", () => {
      let inputs = document.querySelectorAll("#addSection [validatename]");
      let hasError = false;

      for (let index = 0; index < inputs.length; index++) {
        if (!this.state.selected[inputs[index].getAttribute("validatename")]) {
          if (!hasError) {
            hasError = !hasError;
          }

          let text = `Məlumat Doldurulmayıb: ${inputs[index].getAttribute("displayname")}`;
          this.utility.showError(text);
          let ele = inputs[index].querySelector(".ant-select-selector") || inputs[index].querySelector("textarea") || inputs[index].querySelector("input");

          if (ele) {
            ele.classList.add("errorBorder");

            ele.onclick = e => {
              ele.classList.remove("errorBorder");
            };
          }
        }
      }

      if (this.state.selected.images == null || this.state.selected.images.length == 0) {
        let text = `Məlumat Doldurulmayıb: Şəkillər`;
        this.utility.showError(text);
        return false;
      }

      return hasError;
    });

    _defineProperty(this, "submitClick", async e => {
      if (this.validation()) return;
      let header = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(this.state.selected)
      };
      let res = await fetch("http://192.168.1.107:5566/api/bina/Add", header);

      if (res.status == 200) {
        alert("Done");
      }
    });

    _defineProperty(this, "isMetroCallback", value => {
      let city = this.state.cityList.find(w => w.id == this.state.selected.city) || false;

      if (!value.target.checked && city) {
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          metroList: city.metros
        }));
      } else {
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          metroList: null
        }));
      }
    });

    _defineProperty(this, "googleMapCallback", w => {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        selected: _objectSpread(_objectSpread({}, this.state.selected), {}, {
          lat: w.latLng.lat(),
          lng: w.latLng.lng()
        }),
        lat: w.latLng.lat(),
        lng: w.latLng.lng()
      }));
    });

    _defineProperty(this, "ownerCallback", value => {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        selected: _objectSpread(_objectSpread({}, this.state.selected), {}, {
          owner: value.target.value ? true : false
        })
      }));
    });

    _defineProperty(this, "rentTypeCallback", value => {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        selected: _objectSpread(_objectSpread({}, this.state.selected), {}, {
          otagordaire: value.target.value ? true : false
        })
      }));
    });

    _defineProperty(this, "sellTypeCallback", value => {
      let rent = this.state.sellTypeList.find(w => w.id == value.target.value).rent;
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        selected: _objectSpread(_objectSpread({}, this.state.selected), {}, {
          category: null,
          sellType: value.target.value,
          rentDuration: rent.length > 0 ? this.state.selected.rentDuration : null
        }),
        rentDurationList: rent.length > 0 ? rent : null,
        sellingTypeBoxVisibility: rent.length > 0 ? false : true,
        rentingTypeBoxVisibility: rent.length > 0 ? true : false,
        rentalAddition: rent.length > 0 ? this.state.rentalAddition : {}
      }));
    });

    _defineProperty(this, "categoryCallback", value => {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        areaUnit: this.props.filter.categories.find(w => w.id == value).areaUnit,
        selected: _objectSpread(_objectSpread({}, this.state.selected), {}, {
          category: value
        }),
        addition: _objectSpread({}, this.props.filter.categories.find(w => w.id == value)),
        rentalAddition: this.props.filter.rentals.find(w => w.id == this.props.filter.categories.find(w => w.id == value).rentalProİd) || {}
      }));
    });

    _defineProperty(this, "cityCallback", value => {
      let regions = this.state.cityList.find(w => w.id == value).regions;
      let metros = this.state.cityList.find(w => w.id == value).metros;
      this.setState({
        selected: _objectSpread(_objectSpread({}, this.state.selected), {}, {
          city: value,
          region: null,
          village: null,
          metro: null
        }),
        metroList: !metros.length ? null : metros,
        nometro: !metros.length ? false : true,
        regionList: !regions.length ? null : regions,
        villageList: null
      });
    });

    _defineProperty(this, "regionCallback", value => {
      if (!value) {
        this.setState({
          selected: _objectSpread(_objectSpread({}, this.state.selected), {}, {
            region: 0,
            village: null
          }),
          villageList: null
        });
        return;
      }

      let villages = this.state.regionList.find(w => w.id == value).villages;
      this.setState({
        selected: _objectSpread(_objectSpread({}, this.state.selected), {}, {
          region: value,
          village: null
        }),
        villageList: !villages.length ? null : villages
      });
    });

    _defineProperty(this, "commonCallback", (value, option) => {
      this.setState({
        selected: _objectSpread(_objectSpread({}, this.state.selected), {}, {
          [option.state]: value
        })
      });
    });

    _defineProperty(this, "textAreaCallback", value => {
      this.setState({
        selected: _objectSpread(_objectSpread({}, this.state.selected), {}, {
          [value.target.name]: value.target.defaultValue
        })
      });
    });

    _defineProperty(this, "numberCallback", value => {
      this.setState({
        selected: _objectSpread(_objectSpread({}, this.state.selected), {}, {
          [value.target.name]: +value.target.defaultValue.replace(/[^\d]/g, '')
        })
      });
    });

    _defineProperty(this, "checkboxCallback", e => {
      let value = e.target.checked;
      this.setState({
        selected: _objectSpread(_objectSpread({}, this.state.selected), {}, {
          [e.target.state]: value
        })
      });
    });

    this.utility = new _utilities__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.state = _objectSpread(_objectSpread({}, this.utility.getImageState), {}, {
      selected: {
        images: null,
        //list<string>
        category: null,
        //int
        city: null,
        //int
        region: null,
        //int
        village: null,
        //int
        metro: null,
        //int
        sellType: null,
        //int
        licence: null,
        //bool
        ipoteka: null,
        //bool
        roomAmount: null,
        //int
        floor: null,
        //int
        buildingFloor: null,
        //int
        landAppointment: null,
        //int
        icare: null,
        //bool
        belediyye: null,
        //bool
        rentDuration: null,
        //int
        price: null,
        //int
        areaSize: null,
        //int
        aboutInfo: null,
        //string
        email: null,
        //string
        phone: null,
        //string
        name: null,
        //string
        wp: null,
        //bool
        call: null,
        //bool
        lat: null,
        lng: null,
        hamam: null,
        eyvan: null,
        lift: null,
        mebel: null,
        temir: null,
        hovuz: null,
        qaz: null,
        su: null,
        isig: null,
        kanalizasiya: null,
        barter: null,
        owner: true,
        metbex: null,
        qab: null,
        paltar: null,
        soyuducu: null,
        tv: null,
        kondicioner: null,
        internet: null,
        telefon: null,
        usag: null,
        heyvan: null,
        otagordaire: false,
        currency: 1,
        metroWay: 1,
        metroDuration: null,
        secondAreaSize: null
      },
      areaUnit: null,
      sellingTypeBoxVisibility: true,
      rentingTypeBoxVisibility: false,
      mapVisible: false,
      sellTypeList: null,
      categoryList: null,
      cityList: null,
      regionList: null,
      villageList: null,
      metroList: null,
      metroWayList: null,
      landAppointmentList: null,
      rentDurationList: null,
      rentTypeList: null,
      currencyList: null,
      license: true,
      ipoteka: true,
      price: true,
      area: true,
      lat: 40.409264,
      lng: 49.867092,
      activeKey: "1",
      nometro: false,
      addition: {
        secondArea: false,
        roomAmount: false,
        floor: false,
        buildingFloor: false,
        landAppointment: false,
        icare: false,
        belediyye: false,
        barter: true
      },
      rentalAddition: {}
    });

    if (this.props.filter) {
      this.state.categoryList = this.props.filter.categories;
      this.state.subCategory = [...new Set(this.props.filter.categories.map(w => w.subname))].map((w, i) => {
        return {
          name: w,
          category: this.props.filter.categories.filter(d => d.subname == w)
        };
      });
      this.state.metroWayList = this.props.filter.metroWays;
      this.state.currencyList = this.props.filter.currency;
      this.state.cityList = this.props.filter.cities;
      this.state.sellTypeList = this.props.filter.sellTypes;
      this.state.landAppointmentList = this.props.filter.landAppointment;
      this.state.selected = _objectSpread(_objectSpread({}, this.state.selected), {}, {
        sellType: this.props.filter.sellTypes[0].id
      });
    }
  }

  render(h) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: 'addSection',
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: 'container',
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'row',
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: 'col first',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: 'customCol',
              children: [this.ilkin(), this.esas(), this.elaqe()]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: 'col second',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: 'customCol'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 308,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }, this);
  }

}

async function getStaticProps() {
  const res = await fetch('http://192.168.1.107:5566/api/bina/Form');
  const filter = await res.json();
  return {
    props: {
      filter
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Add);

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dnd":
/*!****************************!*\
  !*** external "react-dnd" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dnd");

/***/ }),

/***/ "react-dnd-html5-backend":
/*!******************************************!*\
  !*** external "react-dnd-html5-backend" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dnd-html5-backend");

/***/ }),

/***/ "react-google-maps":
/*!************************************!*\
  !*** external "react-google-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRkLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG5kXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG5kLWh0bWw1LWJhY2tlbmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtbWFwc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiJdLCJuYW1lcyI6WyJUYWJQYW5lIiwiVGFicyIsIk9wdGlvbiIsIk9wdEdyb3VwIiwiU2VsZWN0IiwiVGV4dEFyZWEiLCJJbnB1dCIsImdldEJhc2U2NCIsImZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwicmVzdWx0Iiwib25lcnJvciIsImVycm9yIiwib25DaGFuZ2UiLCJhIiwiYiIsImMiLCJjb25zb2xlIiwibG9nIiwiVXRpbGl0aWVzIiwiY29uc3RydWN0b3IiLCJ0aCIsInRleHQiLCJzaWRlIiwibWVzc2FnZSIsInRhYnMiLCJpdGVtcyIsImtleSIsImV2ZW50Iiwic2V0U3RhdGUiLCJhY3RpdmVLZXkiLCJzdGF0ZSIsIm1hcCIsInciLCJrIiwibGVuZ3RoIiwidGl0bGUiLCJwbGFjZWhvbGRlciIsImNhbGxiYWNrIiwicmVwbGFjZSIsIm5hbWUiLCJ2aXNpYmlsaXR5IiwibWluIiwibWF4IiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwiYWRkb25BZnRlckxpc3QiLCJhZGRvbkFmdGVyQ2FsbGJhY2siLCJhZGRvbk5hbWUiLCJhZGRvblZhbHVlIiwiYWRkb25BZnRlck9ubHlUZXh0Iiwic2VsZWN0ZWQiLCJ2ZXJ0aWNhbEFsaWduIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsInZhbHVlIiwicGFkZGluZ1RvcCIsImRpc3BsYXkiLCJsaW5lSGVpZ2h0IiwiaGVpZ2h0Iiwid2lkdGgiLCJpIiwiaWQiLCJtaW5Sb3dzIiwibWF4Um93cyIsIm1pbk5hbWUiLCJtYXhOYW1lIiwic3RlcCIsIkNhbGxiYWNrIiwib3B0aW9ucyIsInNvcnQiLCJzZWxlY3RBbGwiLCJzdWJuYW1lIiwiZmEiLCJ0b0xvd2VyQ2FzZSIsImZiIiwiY2F0ZWdvcnkiLCJkIiwicSIsInV1aWR2NCIsIkRhdGUiLCJnZXRUaW1lIiwidmlzaWJsZSIsInZhbHVlcyIsImRlZmF1bHRWYWx1ZSIsInNlY29uZFZhbHVlcyIsIm9yaWdpbk5vZGUiLCJtb3ZlUm93IiwiZmlsZUxpc3QiLCJ0eXBlIiwicmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJpbmRleCIsImluZGV4T2YiLCJpc092ZXIiLCJkcm9wQ2xhc3NOYW1lIiwiZHJvcCIsInVzZURyb3AiLCJhY2NlcHQiLCJjb2xsZWN0IiwibW9uaXRvciIsImRyYWdJbmRleCIsImdldEl0ZW0iLCJpdGVtIiwiZHJhZyIsInVzZURyYWciLCJpc0RyYWdnaW5nIiwiZXJyb3JOb2RlIiwiZG9jdW1lbnQiLCJib2R5IiwicHJvcHMiLCJjaGlsZHJlbiIsImN1cnNvciIsInN0YXR1cyIsImhvdmVySW5kZXgiLCJoYW5kbGVDaGFuZ2UiLCJjcmVhdGVEbmRDb250ZXh0IiwiSFRNTDVCYWNrZW5kIiwicHJldmlld1Zpc2libGUiLCJwcmV2aWV3VGl0bGUiLCJwcmV2aWV3SW1hZ2UiLCJtYW5hZ2VyIiwiZHJhZ0Ryb3BNYW5hZ2VyIiwiaGFuZGxlUHJldmlldyIsImN1cnJGaWxlTGlzdCIsIm1hcmdpblRvcCIsImhhbmRsZUNhbmNlbCIsInVybCIsInByZXZpZXciLCJvcmlnaW5GaWxlT2JqIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJpbWFnZXMiLCJmaWx0ZXIiLCJyZXNwb25zZSIsImZpbGVOYW1lIiwibGF0IiwibGFuIiwibGF0TmFtZSIsImxhbk5hbWUiLCJtYXBWaXNpYmxlIiwibG9hZGluZ0VsZW1lbnRTdHlsZSIsImNvbnRhaW5lckVsZW1lbnRTdHlsZSIsIm1hcEVsZW1lbnRTdHlsZSIsImRlZmF1bHRPcHRpb25zIiwic2Nyb2xsd2hlZWwiLCJSZWd1bGFyTWFwIiwid2l0aFNjcmlwdGpzIiwid2l0aEdvb2dsZU1hcCIsImluZm8iLCJsbmciLCJtYXBUeXBlQ29udHJvbCIsImNsaWNrYWJsZUljb25zIiwiQWRkIiwiQ29tcG9uZW50IiwiY2xhc3NuYW1lIiwiaGVhZGVyIiwidXRpbGl0eSIsInJhZGlvR2VuZXJhdG9yIiwic2VsbFR5cGVMaXN0Iiwic2VsbFR5cGVDYWxsYmFjayIsInNlbGVjdEdlbmVyYXRvciIsImNhdGVnb3J5TGlzdCIsImNhdGVnb3J5Q2FsbGJhY2siLCJzdWJDYXRlZ29yeSIsImNpdHlMaXN0IiwiY2l0eSIsImNpdHlDYWxsYmFjayIsInJlZ2lvbkxpc3QiLCJyZWdpb24iLCJyZWdpb25DYWxsYmFjayIsInZpbGxhZ2VMaXN0IiwidmlsbGFnZSIsImNvbW1vbkNhbGxiYWNrIiwibWV0cm9MaXN0IiwibWV0cm8iLCJudW1iZXJHZW5lcmF0b3IiLCJudW1iZXJDYWxsYmFjayIsIm1ldHJvV2F5TGlzdCIsIm1ldHJvV2F5IiwiY2hlY2tCb3hHZW5lcmF0b3IiLCJpc01ldHJvQ2FsbGJhY2siLCJub21ldHJvIiwiZ29vZ2xlTWFwIiwiZ29vZ2xlTWFwQ2FsbGJhY2siLCJzZWxsaW5nQm94IiwidGV4dEFsaWduIiwiY2hlY2tib3hDYWxsYmFjayIsImxpY2Vuc2UiLCJhZGRpdGlvbiIsImJhcnRlciIsImlwb3Rla2EiLCJpY2FyZSIsImJlbGVkaXl5ZSIsInJlbnRpbmdCb3giLCJyZW50YWxBZGRpdGlvbiIsIm1ldGJleE0iLCJxYWJZIiwicGFsdGFyWSIsInNveXVkdWN1IiwidHYiLCJrb25kaWNpb25lciIsImludGVybmV0IiwidGVsZWZvbiIsInVzYWciLCJoZXl2YW4iLCJyZW50RHVyYXRpb25MaXN0IiwicmVudER1cmF0aW9uIiwicmVudGluZ1R5cGVCb3hWaXNpYmlsaXR5Iiwib3RhZ29yZGFpcmUiLCJyZW50VHlwZUNhbGxiYWNrIiwiY3VycmVuY3lMaXN0IiwiY3VycmVuY3kiLCJhcmVhVW5pdCIsInNlY29uZEFyZWEiLCJyb29tQW1vdW50IiwibGFuZEFwcG9pbnRtZW50IiwibGFuZEFwcG9pbnRtZW50TGlzdCIsImZsb29yIiwiYnVpbGRpbmdGbG9vciIsImhhbWFtIiwiZXl2YW4iLCJsaWZ0IiwibWViZWwiLCJ0ZW1pciIsImhvdnV6IiwicWF6Iiwic3UiLCJpc2lnIiwia2FuYWxpemFzaXlhIiwidGV4dEFyZWFHZW5lcmV0b3IiLCJ0ZXh0QXJlYUNhbGxiYWNrIiwic2VsbGluZ1R5cGVCb3hWaXNpYmlsaXR5IiwiaW1hZ2VVcGxvYWRHZW5lcmF0b3IiLCJvd25lckNhbGxiYWNrIiwiaW5wdXRHZW5lcmF0b3IiLCJzdWJtaXRDbGljayIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoYXNFcnJvciIsImdldEF0dHJpYnV0ZSIsInNob3dFcnJvciIsImVsZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJvbmNsaWNrIiwiZSIsInJlbW92ZSIsInZhbGlkYXRpb24iLCJtZXRob2QiLCJoZWFkZXJzIiwibW9kZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJmZXRjaCIsImFsZXJ0IiwiZmluZCIsInRhcmdldCIsImNoZWNrZWQiLCJtZXRyb3MiLCJsYXRMbmciLCJvd25lciIsInJlbnQiLCJzZWxsVHlwZSIsImNhdGVnb3JpZXMiLCJyZW50YWxzIiwicmVudGFsUHJvxLBkIiwicmVnaW9ucyIsInZpbGxhZ2VzIiwib3B0aW9uIiwiZ2V0SW1hZ2VTdGF0ZSIsImxpY2VuY2UiLCJwcmljZSIsImFyZWFTaXplIiwiYWJvdXRJbmZvIiwiZW1haWwiLCJwaG9uZSIsIndwIiwiY2FsbCIsIm1ldGJleCIsInFhYiIsInBhbHRhciIsIm1ldHJvRHVyYXRpb24iLCJzZWNvbmRBcmVhU2l6ZSIsInJlbnRUeXBlTGlzdCIsImFyZWEiLCJTZXQiLCJtZXRyb1dheXMiLCJjaXRpZXMiLCJzZWxsVHlwZXMiLCJyZW5kZXIiLCJoIiwiaWxraW4iLCJlc2FzIiwiZWxhcWUiLCJnZXRTdGF0aWNQcm9wcyIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQSxNQUFNO0FBQUVBO0FBQUYsSUFBY0MseUNBQXBC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Ozs7Ozs7OztBQzNoQkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hZGQuanNcIik7XG4iLCJpbXBvcnQgeyBtZXNzYWdlLCBUYWJzLCBCdXR0b24sIFVwbG9hZCwgTW9kYWwsIFNlbGVjdCwgUmFkaW8sIENoZWNrYm94LCBJbnB1dE51bWJlciwgQ29sbGFwc2UsIElucHV0LCBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IERuZFByb3ZpZGVyLCB1c2VEcmFnLCB1c2VEcm9wLCBjcmVhdGVEbmRDb250ZXh0IH0gZnJvbSAncmVhY3QtZG5kJztcclxuaW1wb3J0IHsgSFRNTDVCYWNrZW5kIH0gZnJvbSAncmVhY3QtZG5kLWh0bWw1LWJhY2tlbmQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgICB3aXRoU2NyaXB0anMsXHJcbiAgICB3aXRoR29vZ2xlTWFwLFxyXG4gICAgR29vZ2xlTWFwLFxyXG4gICAgTWFya2VyXHJcbn0gZnJvbSBcInJlYWN0LWdvb2dsZS1tYXBzXCI7XHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXHJcblxyXG5jb25zdCB7IFRhYlBhbmUgfSA9IFRhYnM7XHJcbmNvbnN0IHsgT3B0aW9uLCBPcHRHcm91cCB9ID0gU2VsZWN0O1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0QmFzZTY0KGZpbGUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgICByZWFkZXIub25lcnJvciA9IGVycm9yID0+IHJlamVjdChlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uQ2hhbmdlKGEsIGIsIGMpIHtcclxuICAgIGNvbnNvbGUubG9nKGEsIGIsIGMpO1xyXG59XHJcblxyXG5jbGFzcyBVdGlsaXRpZXMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRoKSB7XHJcbiAgICAgICAgdGhpcy50aCA9IHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdmlkZXIgPSAodGV4dCwgc2lkZSA9IFwibGVmdFwiKSA9PiB7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NlcGFyYXRvcid9Pnt0ZXh0fTwvZGl2PilcclxuICAgIH1cclxuXHJcbiAgICBzaG93RXJyb3IgPSAodGV4dCkgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2UuZXJyb3IodGV4dClcclxuICAgIH1cclxuXHJcbiAgICB0YWJHZW5lcmF0b3IgPSAodGFicywgLi4uaXRlbXMpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgb25UYWJDbGljaz17KGtleSwgZXZlbnQpID0+IHRoaXMudGguc2V0U3RhdGUoeyBhY3RpdmVLZXk6IGtleSB9KX1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUtleT17dGhpcy50aC5zdGF0ZS5hY3RpdmVLZXl9XHJcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgdGFiUG9zaXRpb249eyd0b3AnfVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZWRcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgodywgaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIGZvcmNlUmVuZGVyPXt0cnVlfSB0YWI9e3RhYnNba119IGtleT17YCR7ayArIDF9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtrICE9IGl0ZW1zLmxlbmd0aCAtIDEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndGFiQnRuJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17J2J0bid9IG9uQ2xpY2s9eygpID0+IHRoaXMudGguc2V0U3RhdGUoeyBhY3RpdmVLZXk6IGAke2sgKyAyfWAgfSl9PlNvbnJha2k8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0R2VuZXJhdG9yID0gKHRpdGxlLCBwbGFjZWhvbGRlciwgY2FsbGJhY2ssIHN0YXRlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzdWJpdGVtIHNpbXBsZUlucHV0J30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2l0ZW0nfT48bGFiZWw+e3RpdGxlfTwvbGFiZWw+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2l0ZW0nfSB2YWxpZGF0ZW5hbWU9e3N0YXRlfSBkaXNwbGF5bmFtZT17dGl0bGUucmVwbGFjZShcIjpcIiwgXCJcIil9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnd2lkdGgnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtzdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXtjYWxsYmFja30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgbnVtYmVyR2VuZXJhdG9yID0gKHRpdGxlLCBwbGFjZWhvbGRlciwgY2FsbGJhY2ssIG5hbWUsIHZpc2liaWxpdHksIG1pbiA9IDEsIG1heCA9IE51bWJlci5NQVhfVkFMVUUsIHsgYWRkb25BZnRlckxpc3QgPSBudWxsLCBhZGRvbkFmdGVyQ2FsbGJhY2sgPSBudWxsLCBhZGRvbk5hbWUgPSBudWxsLCBhZGRvblZhbHVlID0gbnVsbCwgYWRkb25BZnRlck9ubHlUZXh0ID0gbnVsbCB9ID0ge30pID0+IHtcclxuICAgICAgICBpZiAoIXZpc2liaWxpdHkpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGguc3RhdGUuc2VsZWN0ZWRbbmFtZV0gPSBudWxsXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3N1Yml0ZW0gbnVtYmVySW5wdXQnfSB2YWxpZGF0ZW5hbWU9e25hbWV9IGRpc3BsYXluYW1lPXt0aXRsZS5yZXBsYWNlKFwiOlwiLCBcIlwiKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2l0ZW0nfT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXsndGl0bGUnfT57dGl0bGV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydpdGVtJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0TnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLCBib3JkZXJCb3R0b21SaWdodFJhZGl1czogMCwgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXttaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17bWF4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyd3aWR0aCBpbnB1dG51bWJlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyPXt2YWx1ZSA9PiBgJHt2YWx1ZX1gLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlcj17dmFsdWUgPT4gYCR7dmFsdWV9YC5yZXBsYWNlKC9cXCRcXHM/fCgsKikvZywgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXtjYWxsYmFja31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHshYWRkb25BZnRlckxpc3QgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtaW5wdXQtZ3JvdXAtYWRkb25cIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAnMnB4JywgdmVydGljYWxBbGlnbjogJ21pZGRsZScsIGRpc3BsYXk6ICdpbmxpbmUtdGFibGUnLCBsaW5lSGVpZ2h0OiAnMjRweCcsIGhlaWdodDogJzMycHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBzdHlsZT17eyB3aWR0aDogMTIwIH19IHZhbHVlPXthZGRvblZhbHVlfSBvblNlbGVjdD17YWRkb25BZnRlckNhbGxiYWNrfSBuYW1lPXthZGRvbk5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthZGRvbkFmdGVyTGlzdC5tYXAoKHcsIGkpID0+IDxPcHRpb24gc3RhdGU9e2FkZG9uTmFtZX0gdmFsdWU9e3cuaWR9Pnt3Lm5hbWV9PC9PcHRpb24+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFhZGRvbkFmdGVyT25seVRleHQgPyBudWxsIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnQtaW5wdXQtZ3JvdXAtYWRkb25cIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAnMnB4JywgdmVydGljYWxBbGlnbjogJ21pZGRsZScsIGRpc3BsYXk6ICdpbmxpbmUtdGFibGUnLCBsaW5lSGVpZ2h0OiAnMjRweCcsIGhlaWdodDogJzMycHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAge2FkZG9uQWZ0ZXJPbmx5VGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0QXJlYUdlbmVyZXRvciA9ICh0aXRsZSwgcGxhY2Vob2xkZXIsIGNhbGxiYWNrLCBuYW1lKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzdWJpdGVtIHRleHRBcmVhSW5wdXQnfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnaXRlbSd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD57dGl0bGV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydpdGVtJ30gdmFsaWRhdGVuYW1lPXtuYW1lfSBkaXNwbGF5bmFtZT17dGl0bGUucmVwbGFjZShcIjpcIiwgXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyd3aWR0aCBpbnB1dGFyZWEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9TaXplPXt7IG1pblJvd3M6IDUsIG1heFJvd3M6IDEyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e2NhbGxiYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezUwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcHJpY2XEsG5wdXRHZW5lcmF0b3IgPSAodGl0bGUsIG1pbk5hbWUsIG1heE5hbWUsIG1pbiwgc3RlcCwgQ2FsbGJhY2ssIHZpc2liaWxpdHkpID0+IHtcclxuICAgICAgICBpZiAoIXZpc2liaWxpdHkpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGguc3RhdGUuc2VsZWN0ZWRbbWluTmFtZV0gPSBudWxsXHJcbiAgICAgICAgICAgIHRoaXMudGguc3RhdGUuc2VsZWN0ZWRbbWF4TmFtZV0gPSBudWxsXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3N1Yml0ZW0gcHJpY2VJbnB1dCd9IHZhbGlkYXRlbmFtZT17bWluTmFtZX0gZGlzcGxheW5hbWU9e3RpdGxlLnJlcGxhY2UoXCI6XCIsIFwiXCIpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnaXRlbSd9IHZhbGlkYXRlbmFtZT17bWF4TmFtZX0+PGxhYmVsPnt0aXRsZX08L2xhYmVsPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydpdGVtJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0TnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIk1pbi5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtDYWxsYmFja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17Q2FsbGJhY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17bWlufSBzdGVwPXtzdGVwfSBuYW1lPXttaW5OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI9e3ZhbHVlID0+IGAke3ZhbHVlfWAucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VyPXt2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKC9cXCRcXHM/fCgsKikvZywgJycpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAtXHJcbiAgICAgICAgICAgICAgICA8SW5wdXROdW1iZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiTWF4LlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e0NhbGxiYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXtDYWxsYmFja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXttaW59IHN0ZXA9e3N0ZXB9IG5hbWU9e21heE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcj17dmFsdWUgPT4gYCR7dmFsdWV9YC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZXI9e3ZhbHVlID0+IHZhbHVlLnJlcGxhY2UoL1xcJFxccz98KCwqKS9nLCAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0R2VuZXJhdG9yID0gKHRpdGxlLCBvcHRpb25zLCBuYW1lLCBzZWxlY3RlZCwgY2FsbGJhY2ssIHNvcnQsIHNlbGVjdEFsbCwgc3VibmFtZSA9IG51bGwpID0+IHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMgfHwgb3B0aW9ucy5sZW5ndGggPCAxKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRoLnN0YXRlLnNlbGVjdGVkW25hbWVdID0gbnVsbFxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNvcnQpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmEgPSBhLm5hbWUudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgbGV0IGZiID0gYi5uYW1lLnRvTG93ZXJDYXNlKClcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZmEgPCBmYikgcmV0dXJuIC0xXHJcbiAgICAgICAgICAgICAgICBpZiAoZmEgPiBmYikgcmV0dXJuIDFcclxuICAgICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3VibmFtZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdWJuYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzdWJpdGVtIHNlbGVjdElucHV0J30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydpdGVtJ30+PGxhYmVsPnt0aXRsZX08L2xhYmVsPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnaXRlbSd9IHZhbGlkYXRlbmFtZT17bmFtZX0gZGlzcGxheW5hbWU9e3RpdGxlLnJlcGxhY2UoXCI6XCIsIFwiXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCB2aXJ0dWFsPXtmYWxzZX0gb25TZWxlY3Q9e2NhbGxiYWNrfSBwbGFjZWhvbGRlcj17XCJTZcOnaW5cIn0gdmFsdWU9e3NlbGVjdGVkfSBuYW1lPXtuYW1lfSBjbGFzc05hbWU9eyd3aWR0aCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdEFsbCA/IDxPcHRpb24gc3RhdGU9e25hbWV9IHZhbHVlPXswfT5IYW3EsXPEsTwvT3B0aW9uPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VibmFtZS5tYXAoKHcsIGkpID0+IDxPcHRHcm91cCBrZXk9e3V1aWR2NCgpfSBsYWJlbD17dy5uYW1lfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3cuY2F0ZWdvcnkubWFwKChkLCBxKSA9PiA8T3B0aW9uIHN0YXRlPXtuYW1lfSBrZXk9e3V1aWR2NCgpfSB2YWx1ZT17ZC5pZH0+e2QubmFtZX08L09wdGlvbj4pfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdEdyb3VwPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXsnc3ViaXRlbSBzZWxlY3RJbnB1dCd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2l0ZW0nfT48bGFiZWw+e3RpdGxlfTwvbGFiZWw+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnaXRlbSd9IHZhbGlkYXRlbmFtZT17bmFtZX0gZGlzcGxheW5hbWU9e3RpdGxlLnJlcGxhY2UoXCI6XCIsIFwiXCIpfT5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3QgdmlydHVhbD17ZmFsc2V9IG9uU2VsZWN0PXtjYWxsYmFja30gcGxhY2Vob2xkZXI9e1wiU2XDp2luXCJ9IHZhbHVlPXtzZWxlY3RlZH0gbmFtZT17bmFtZX0gY2xhc3NOYW1lPXsnd2lkdGgnfT5cclxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0QWxsID8gPE9wdGlvbiBzdGF0ZT17bmFtZX0gdmFsdWU9ezB9PkhhbcSxc8SxPC9PcHRpb24+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKHcsIGkpID0+IDxPcHRpb24gc3RhdGU9e25hbWV9IGtleT17bmV3IERhdGUoKS5nZXRUaW1lKCkgKyBpfSB2YWx1ZT17dy5pZH0+e3cubmFtZX08L09wdGlvbj4pfVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0JveEdlbmVyYXRvciA9ICh0aXRsZSwgY2FsbGJhY2ssIG5hbWUsIHZpc2libGUpID0+IHtcclxuICAgICAgICBpZiAoIXZpc2libGUpIHtcclxuICAgICAgICAgICAgdGhpcy50aC5zdGF0ZS5zZWxlY3RlZFtuYW1lXSA9IG51bGxcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzdWJpdGVtIGNoZWNrSW5wdXQnfSBkaXNwbGF5bmFtZT17dGl0bGUucmVwbGFjZShcIjpcIiwgXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94IHN0YXRlPXtuYW1lfSBuYW1lPXtuYW1lfSBvbkNoYW5nZT17Y2FsbGJhY2t9Pnt0aXRsZX08L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJhZGlvR2VuZXJhdG9yID0gKHRpdGxlLCB2YWx1ZXMsIGRlZmF1bHRWYWx1ZSwgY2FsbGJhY2ssIG5hbWUsIHNlY29uZFZhbHVlcykgPT4ge1xyXG4gICAgICAgIGlmICghdmFsdWVzKSByZXR1cm4gbnVsbFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInN1Yml0ZW0gcmFkaW9JbnB1dFwifSB2YWxpZGF0ZW5hbWU9e25hbWV9IGRpc3BsYXluYW1lPXt0aXRsZS5yZXBsYWNlKFwiOlwiLCBcIlwiKX0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+e3RpdGxlfTwvbGFiZWw+IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIG9uQ2hhbmdlPXtjYWxsYmFja30gZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9IGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7IXNlY29uZFZhbHVlcyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5tYXAoKHcsIGkpID0+IDxSYWRpby5CdXR0b24ga2V5PXtuZXcgRGF0ZSgpLmdldFRpbWUoKSArIGl9IHZhbHVlPXt3LmlkfT57dy5uYW1lfTwvUmFkaW8uQnV0dG9uPikgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRWYWx1ZXMubWFwKCh3LCBpKSA9PiA8UmFkaW8uQnV0dG9uIGtleT17bmV3IERhdGUoKS5nZXRUaW1lKCkgKyBpfSB2YWx1ZT17dy5pZH0+e3cubmFtZX08L1JhZGlvLkJ1dHRvbj4pfVxyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcblxyXG4gICAgSU1BR0VcclxuICAgIElNQUdFXHJcbiAgICBJTUFHRVxyXG5cclxuICAgICovXHJcblxyXG5cclxuICAgIERyYWdhYmxlVXBsb2FkTGlzdEl0ZW0gPSAoeyBvcmlnaW5Ob2RlLCBtb3ZlUm93LCBmaWxlLCBmaWxlTGlzdCB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9ICdEcmFnYWJsZVVwbG9hZExpc3QnO1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZmlsZUxpc3QuaW5kZXhPZihmaWxlKTtcclxuICAgICAgICBjb25zdCBbeyBpc092ZXIsIGRyb3BDbGFzc05hbWUgfSwgZHJvcF0gPSB1c2VEcm9wKHtcclxuICAgICAgICAgICAgYWNjZXB0OiB0eXBlLFxyXG4gICAgICAgICAgICBjb2xsZWN0OiBtb25pdG9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaW5kZXg6IGRyYWdJbmRleCB9ID0gbW9uaXRvci5nZXRJdGVtKCkgfHwge307XHJcbiAgICAgICAgICAgICAgICBpZiAoZHJhZ0luZGV4ID09PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNPdmVyOiBtb25pdG9yLmlzT3ZlcigpLFxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3BDbGFzc05hbWU6IGRyYWdJbmRleCA8IGluZGV4ID8gJyBkcm9wLW92ZXItZG93bndhcmQnIDogJyBkcm9wLW92ZXItdXB3YXJkJyxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRyb3A6IGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgbW92ZVJvdyhpdGVtLmluZGV4LCBpbmRleCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgWywgZHJhZ10gPSB1c2VEcmFnKHtcclxuICAgICAgICAgICAgaXRlbTogeyB0eXBlLCBpbmRleCB9LFxyXG4gICAgICAgICAgICBjb2xsZWN0OiBtb25pdG9yID0+ICh7XHJcbiAgICAgICAgICAgICAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZHJvcChkcmFnKHJlZikpO1xyXG4gICAgICAgIGNvbnN0IGVycm9yTm9kZSA9IChcclxuICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJVcGxvYWQgRXJyb3JcIiBnZXRQb3B1cENvbnRhaW5lcj17KCkgPT4gZG9jdW1lbnQuYm9keX0+XHJcbiAgICAgICAgICAgICAgICB7b3JpZ2luTm9kZS5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhbnQtdXBsb2FkLWRyYWdnYWJsZS1saXN0LWl0ZW0gJHtpc092ZXIgPyBkcm9wQ2xhc3NOYW1lIDogJyd9YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ21vdmUnIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtmaWxlLnN0YXR1cyA9PT0gJ2Vycm9yJyA/IGVycm9yTm9kZSA6IG9yaWdpbk5vZGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBtb3ZlUm93ID1cclxuICAgICAgICAoZHJhZ0luZGV4LCBob3ZlckluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlTGlzdCA9IHRoaXMudGguc3RhdGUuZmlsZUxpc3Q7XHJcbiAgICAgICAgICAgIFtmaWxlTGlzdFtkcmFnSW5kZXhdLCBmaWxlTGlzdFtob3ZlckluZGV4XV0gPSBbZmlsZUxpc3RbaG92ZXJJbmRleF0sIGZpbGVMaXN0W2RyYWdJbmRleF1dXHJcbiAgICAgICAgICAgIHRoaXMudGguc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZmlsZUxpc3Q6IGZpbGVMaXN0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHsgZmlsZUxpc3Q6IGZpbGVMaXN0IH0pXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICBtYW5hZ2VyID0gY3JlYXRlRG5kQ29udGV4dChIVE1MNUJhY2tlbmQpO1xyXG5cclxuICAgIGltYWdlVXBsb2FkR2VuZXJhdG9yID0gKGZpbGVMaXN0LCBwcmV2aWV3VmlzaWJsZSwgcHJldmlld1RpdGxlLCBwcmV2aWV3SW1hZ2UpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzdWJpdGVtXCJ9PlxyXG4gICAgICAgICAgICAgICAgPERuZFByb3ZpZGVyIG1hbmFnZXI9e3RoaXMubWFuYWdlci5kcmFnRHJvcE1hbmFnZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiaHR0cDovLzE5Mi4xNjguMS4xMDc6NTU2Ni9hcGkvYmluYS9pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e1wiaW1hZ2VzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0VHlwZT1cInBpY3R1cmUtY2FyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVMaXN0PXtmaWxlTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QcmV2aWV3PXt0aGlzLmhhbmRsZVByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlcj17KG9yaWdpbk5vZGUsIGZpbGUsIGN1cnJGaWxlTGlzdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoaXMuRHJhZ2FibGVVcGxvYWRMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbk5vZGU9e29yaWdpbk5vZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZT17ZmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTGlzdD17Y3VyckZpbGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVSb3c9e3RoaXMubW92ZVJvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmlsZUxpc3QubGVuZ3RoID49IDI1ID8gbnVsbCA6IDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGx1c091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT7FnsmZa2lsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICA8L1VwbG9hZD5cclxuICAgICAgICAgICAgICAgIDwvRG5kUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXtwcmV2aWV3VmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17cHJldmlld1RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5oYW5kbGVDYW5jZWx9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJleGFtcGxlXCIgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBzcmM9e3ByZXZpZXdJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbWFnZVN0YXRlID0ge1xyXG4gICAgICAgIHByZXZpZXdWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICBwcmV2aWV3SW1hZ2U6ICcnLFxyXG4gICAgICAgIHByZXZpZXdUaXRsZTogJycsXHJcbiAgICAgICAgZmlsZUxpc3Q6IFtdXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2FuY2VsID0gKCkgPT4gdGhpcy50aC5zZXRTdGF0ZSh7IHByZXZpZXdWaXNpYmxlOiBmYWxzZSB9KTtcclxuXHJcbiAgICBoYW5kbGVQcmV2aWV3ID0gYXN5bmMgKGZpbGUpID0+IHtcclxuICAgICAgICBpZiAoIWZpbGUudXJsICYmICFmaWxlLnByZXZpZXcpIHtcclxuICAgICAgICAgICAgZmlsZS5wcmV2aWV3ID0gYXdhaXQgZ2V0QmFzZTY0KGZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRoLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgcHJldmlld0ltYWdlOiBmaWxlLnVybCB8fCBmaWxlLnByZXZpZXcsXHJcbiAgICAgICAgICAgIHByZXZpZXdWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBwcmV2aWV3VGl0bGU6IGZpbGUubmFtZSB8fCBmaWxlLnVybC5zdWJzdHJpbmcoZmlsZS51cmwubGFzdEluZGV4T2YoJy8nKSArIDEpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSBhc3luYyAoeyBmaWxlTGlzdCB9KSA9PiB7XHJcbiAgICAgICAgdGhpcy50aC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMudGguc3RhdGUsXHJcbiAgICAgICAgICAgIGZpbGVMaXN0OiBbLi4uZmlsZUxpc3RdLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDpcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy50aC5zdGF0ZS5zZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgIGltYWdlczogWy4uLmZpbGVMaXN0XS5maWx0ZXIodyA9PiB3LnJlc3BvbnNlKS5tYXAodyA9PiB3LnJlc3BvbnNlLmZpbGVOYW1lKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIC8qXHJcbiAgICBFTkRcclxuICAgIElNQUdFXHJcbiAgICBJTUFHRVxyXG4gICAgSU1BR0VcclxuXHJcbiAgICAqL1xyXG5cclxuICAgIGdvb2dsZU1hcCA9IChsYXQsIGxhbiwgY2FsbGJhY2ssIHRpdGxlLCBsYXROYW1lLCBsYW5OYW1lKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBkaXNwbGF5bmFtZT17dGl0bGUucmVwbGFjZShcIjpcIiwgXCJcIil9IGNsYXNzTmFtZT17XCJzdWJpdGVtXCJ9IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzUwJScgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2l0ZW0nfT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3RpdGxlfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnaXRlbSd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7IHRoaXMudGguc2V0U3RhdGUoeyBtYXBWaXNpYmxlOiB0cnVlIH0pIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBw6dcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgdGl0bGU9XCJYyZlyaXTJmVwiIHZpc2libGU9e3RoaXMudGguc3RhdGUubWFwVmlzaWJsZX0gd2lkdGg9eyc1MCUnfSBmb290ZXI9e251bGx9IG9uQ2FuY2VsPXsoKSA9PiB7IHRoaXMudGguc2V0U3RhdGUoeyBtYXBWaXNpYmxlOiBmYWxzZSB9KSB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8UmVndWxhck1hcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnb29nbGVNYXBVUkw9XCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PUFJemFTeUQ2VnpfSUtua3RQQ19UTGw5REFtbV9CcHhva3pRNGZJUVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdFbGVtZW50PXs8ZGl2IHN0eWxlPXtsb2FkaW5nRWxlbWVudFN0eWxlfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyRWxlbWVudD17PGRpdiBzdHlsZT17Y29udGFpbmVyRWxlbWVudFN0eWxlfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwRWxlbWVudD17PGRpdiBzdHlsZT17bWFwRWxlbWVudFN0eWxlfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5mbz17eyBsYXQ6IGxhdCwgbGFuOiBsYW4sIGNhbGxiYWNrOiBjYWxsYmFjayB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0aWxpdGllcztcclxuXHJcblxyXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHsgc2Nyb2xsd2hlZWw6IGZhbHNlIH07XHJcblxyXG5jb25zdCBSZWd1bGFyTWFwID0gd2l0aFNjcmlwdGpzKFxyXG4gICAgd2l0aEdvb2dsZU1hcChwcm9wcyA9PiAoXHJcbiAgICAgICAgPEdvb2dsZU1hcFxyXG4gICAgICAgICAgICBkZWZhdWx0Wm9vbT17MTJ9XHJcbiAgICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e3sgbGF0OiArcHJvcHMuaW5mby5sYXQsIGxuZzogK3Byb3BzLmluZm8ubGFuIH19XHJcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zPXtkZWZhdWx0T3B0aW9uc31cclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMuaW5mby5jYWxsYmFja31cclxuICAgICAgICAgICAgb3B0aW9ucz17eyBtYXBUeXBlQ29udHJvbDogdHJ1ZSwgY2xpY2thYmxlSWNvbnM6IGZhbHNlIH19XHJcblxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPE1hcmtlciBwb3NpdGlvbj17eyBsYXQ6ICtwcm9wcy5pbmZvLmxhdCwgbG5nOiArcHJvcHMuaW5mby5sYW4gfX0gLz5cclxuICAgICAgICA8L0dvb2dsZU1hcD5cclxuICAgICkpXHJcbik7XHJcblxyXG5jb25zdCBsb2FkaW5nRWxlbWVudFN0eWxlID0geyBoZWlnaHQ6ICcxMDAlJyB9O1xyXG5jb25zdCBjb250YWluZXJFbGVtZW50U3R5bGUgPSB7IGhlaWdodDogJzUwMHB4JyB9O1xyXG5jb25zdCBtYXBFbGVtZW50U3R5bGUgPSB7IGhlaWdodDogJzEwMCUnIH07IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBVdGlsaXRpZXMgZnJvbSAnQC91dGlsaXRpZXMnO1xyXG5cclxuY2xhc3MgQWRkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLnV0aWxpdHkgPSBuZXcgVXRpbGl0aWVzKHRoaXMpO1xyXG4gICBcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnV0aWxpdHkuZ2V0SW1hZ2VTdGF0ZSxcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHtcclxuICAgICAgICAgICAgICAgIGltYWdlczogbnVsbCwgLy9saXN0PHN0cmluZz5cclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBudWxsLCAvL2ludFxyXG4gICAgICAgICAgICAgICAgY2l0eTogbnVsbCwgLy9pbnRcclxuICAgICAgICAgICAgICAgIHJlZ2lvbjogbnVsbCwgLy9pbnRcclxuICAgICAgICAgICAgICAgIHZpbGxhZ2U6IG51bGwsIC8vaW50XHJcbiAgICAgICAgICAgICAgICBtZXRybzogbnVsbCwgLy9pbnRcclxuICAgICAgICAgICAgICAgIHNlbGxUeXBlOiBudWxsLCAvL2ludFxyXG4gICAgICAgICAgICAgICAgbGljZW5jZTogbnVsbCwgLy9ib29sXHJcbiAgICAgICAgICAgICAgICBpcG90ZWthOiBudWxsLCAvL2Jvb2xcclxuICAgICAgICAgICAgICAgIHJvb21BbW91bnQ6IG51bGwsIC8vaW50XHJcbiAgICAgICAgICAgICAgICBmbG9vcjogbnVsbCwgLy9pbnRcclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nRmxvb3I6IG51bGwsIC8vaW50XHJcbiAgICAgICAgICAgICAgICBsYW5kQXBwb2ludG1lbnQ6IG51bGwsIC8vaW50XHJcbiAgICAgICAgICAgICAgICBpY2FyZTogbnVsbCwgLy9ib29sXHJcbiAgICAgICAgICAgICAgICBiZWxlZGl5eWU6IG51bGwsIC8vYm9vbFxyXG4gICAgICAgICAgICAgICAgcmVudER1cmF0aW9uOiBudWxsLCAvL2ludFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IG51bGwsIC8vaW50XHJcbiAgICAgICAgICAgICAgICBhcmVhU2l6ZTogbnVsbCwgLy9pbnRcclxuICAgICAgICAgICAgICAgIGFib3V0SW5mbzogbnVsbCwgLy9zdHJpbmdcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBudWxsLCAvL3N0cmluZ1xyXG4gICAgICAgICAgICAgICAgcGhvbmU6IG51bGwsIC8vc3RyaW5nXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBudWxsLCAvL3N0cmluZ1xyXG4gICAgICAgICAgICAgICAgd3A6IG51bGwsIC8vYm9vbFxyXG4gICAgICAgICAgICAgICAgY2FsbDogbnVsbCwgLy9ib29sXHJcbiAgICAgICAgICAgICAgICBsYXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsbmc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBoYW1hbTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGV5dmFuOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbGlmdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIG1lYmVsOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdGVtaXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBob3Z1ejogbnVsbCxcclxuICAgICAgICAgICAgICAgIHFhejogbnVsbCxcclxuICAgICAgICAgICAgICAgIHN1OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgaXNpZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGthbmFsaXphc2l5YTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGJhcnRlcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIG93bmVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWV0YmV4OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcWFiOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcGFsdGFyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc295dWR1Y3U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0djogbnVsbCxcclxuICAgICAgICAgICAgICAgIGtvbmRpY2lvbmVyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgaW50ZXJuZXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0ZWxlZm9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdXNhZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGhleXZhbjogbnVsbCxcclxuICAgICAgICAgICAgICAgIG90YWdvcmRhaXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAxLFxyXG4gICAgICAgICAgICAgICAgbWV0cm9XYXk6IDEsXHJcbiAgICAgICAgICAgICAgICBtZXRyb0R1cmF0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc2Vjb25kQXJlYVNpemU6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXJlYVVuaXQ6IG51bGwsXHJcbiAgICAgICAgICAgIHNlbGxpbmdUeXBlQm94VmlzaWJpbGl0eTogdHJ1ZSxcclxuICAgICAgICAgICAgcmVudGluZ1R5cGVCb3hWaXNpYmlsaXR5OiBmYWxzZSxcclxuICAgICAgICAgICAgbWFwVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlbGxUeXBlTGlzdDogbnVsbCxcclxuICAgICAgICAgICAgY2F0ZWdvcnlMaXN0OiBudWxsLFxyXG4gICAgICAgICAgICBjaXR5TGlzdDogbnVsbCxcclxuICAgICAgICAgICAgcmVnaW9uTGlzdDogbnVsbCxcclxuICAgICAgICAgICAgdmlsbGFnZUxpc3Q6IG51bGwsXHJcbiAgICAgICAgICAgIG1ldHJvTGlzdDogbnVsbCxcclxuICAgICAgICAgICAgbWV0cm9XYXlMaXN0OiBudWxsLFxyXG4gICAgICAgICAgICBsYW5kQXBwb2ludG1lbnRMaXN0OiBudWxsLFxyXG4gICAgICAgICAgICByZW50RHVyYXRpb25MaXN0OiBudWxsLFxyXG4gICAgICAgICAgICByZW50VHlwZUxpc3Q6IG51bGwsXHJcbiAgICAgICAgICAgIGN1cnJlbmN5TGlzdDogbnVsbCxcclxuICAgICAgICAgICAgbGljZW5zZTogdHJ1ZSxcclxuICAgICAgICAgICAgaXBvdGVrYTogdHJ1ZSxcclxuICAgICAgICAgICAgcHJpY2U6IHRydWUsXHJcbiAgICAgICAgICAgIGFyZWE6IHRydWUsXHJcbiAgICAgICAgICAgIGxhdDogNDAuNDA5MjY0LFxyXG4gICAgICAgICAgICBsbmc6IDQ5Ljg2NzA5MixcclxuICAgICAgICAgICAgYWN0aXZlS2V5OiBcIjFcIixcclxuICAgICAgICAgICAgbm9tZXRybzogZmFsc2UsXHJcbiAgICAgICAgICAgIGFkZGl0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRBcmVhOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJvb21BbW91bnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmxvb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdGbG9vcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsYW5kQXBwb2ludG1lbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaWNhcmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYmVsZWRpeXllOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJhcnRlcjogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZW50YWxBZGRpdGlvbjoge31cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmZpbHRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNhdGVnb3J5TGlzdCA9IHRoaXMucHJvcHMuZmlsdGVyLmNhdGVnb3JpZXM7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc3ViQ2F0ZWdvcnkgPSBbLi4ubmV3IFNldCh0aGlzLnByb3BzLmZpbHRlci5jYXRlZ29yaWVzLm1hcCgodykgPT4gdy5zdWJuYW1lKSldLm1hcCgodywgaSkgPT4geyByZXR1cm4geyBuYW1lOiB3LCBjYXRlZ29yeTogdGhpcy5wcm9wcy5maWx0ZXIuY2F0ZWdvcmllcy5maWx0ZXIoZCA9PiBkLnN1Ym5hbWUgPT0gdykgfSB9KVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm1ldHJvV2F5TGlzdCA9IHRoaXMucHJvcHMuZmlsdGVyLm1ldHJvV2F5cztcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW5jeUxpc3QgPSB0aGlzLnByb3BzLmZpbHRlci5jdXJyZW5jeVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNpdHlMaXN0ID0gdGhpcy5wcm9wcy5maWx0ZXIuY2l0aWVzXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VsbFR5cGVMaXN0ID0gdGhpcy5wcm9wcy5maWx0ZXIuc2VsbFR5cGVzXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubGFuZEFwcG9pbnRtZW50TGlzdCA9IHRoaXMucHJvcHMuZmlsdGVyLmxhbmRBcHBvaW50bWVudFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkID0ge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5zZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgIHNlbGxUeXBlOiB0aGlzLnByb3BzLmZpbHRlci5zZWxsVHlwZXNbMF0uaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaGVhZGVyID0gKHRpdGxlLCBjbGFzc25hbWUpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2xhc3NuYW1lfT57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBpbGtpbiA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3BhcnQnfT5cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5oZWFkZXIoXCJJbGtpblwiLCBcImJhc2xpcVwiKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy51dGlsaXR5LnJhZGlvR2VuZXJhdG9yKFwixo9tbGFrOlwiLCB0aGlzLnN0YXRlLnNlbGxUeXBlTGlzdCwgMSwgdGhpcy5zZWxsVHlwZUNhbGxiYWNrLCBcInNlbGxUeXBlXCIpfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkuc2VsZWN0R2VuZXJhdG9yKFwiS2F0ZWdvcml5YTpcIiwgdGhpcy5zdGF0ZS5jYXRlZ29yeUxpc3QsIFwiY2F0ZWdvcnlcIiwgdGhpcy5zdGF0ZS5zZWxlY3RlZC5jYXRlZ29yeSwgdGhpcy5jYXRlZ29yeUNhbGxiYWNrLCBmYWxzZSwgZmFsc2UsIHRoaXMuc3RhdGUuc3ViQ2F0ZWdvcnkpfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkuc2VsZWN0R2VuZXJhdG9yKFwixZ7JmWjJmXI6XCIsIHRoaXMuc3RhdGUuY2l0eUxpc3QsIFwiY2l0eVwiLCB0aGlzLnN0YXRlLnNlbGVjdGVkLmNpdHksIHRoaXMuY2l0eUNhbGxiYWNrLCB0cnVlLCBmYWxzZSl9XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMudXRpbGl0eS5zZWxlY3RHZW5lcmF0b3IoXCJSYXlvbjpcIiwgdGhpcy5zdGF0ZS5yZWdpb25MaXN0LCBcInJlZ2lvblwiLCB0aGlzLnN0YXRlLnNlbGVjdGVkLnJlZ2lvbiwgdGhpcy5yZWdpb25DYWxsYmFjaywgdHJ1ZSwgZmFsc2UpfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkuc2VsZWN0R2VuZXJhdG9yKFwiUcmZc8mZYsmZOlwiLCB0aGlzLnN0YXRlLnZpbGxhZ2VMaXN0LCBcInZpbGxhZ2VcIiwgdGhpcy5zdGF0ZS5zZWxlY3RlZC52aWxsYWdlLCB0aGlzLmNvbW1vbkNhbGxiYWNrLCB0cnVlLCBmYWxzZSl9XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMudXRpbGl0eS5zZWxlY3RHZW5lcmF0b3IoXCJNZXRybzpcIiwgdGhpcy5zdGF0ZS5tZXRyb0xpc3QsIFwibWV0cm9cIiwgdGhpcy5zdGF0ZS5zZWxlY3RlZC5tZXRybywgdGhpcy5jb21tb25DYWxsYmFjaywgdHJ1ZSwgZmFsc2UpfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkubnVtYmVyR2VuZXJhdG9yKFwiTWV0cm95YSBvbGFuIGTJmXFpccmZIG3DvGRkyZl0aTpcIiwgXCJEYXhpbCBFZGluXCIsIHRoaXMubnVtYmVyQ2FsbGJhY2ssIFwibWV0cm9EdXJhdGlvblwiLCB0aGlzLnN0YXRlLnNlbGVjdGVkLm1ldHJvLCAxLCAxMjAsIFxyXG4gICAgICAgICAgICAgICAge2FkZG9uQWZ0ZXJMaXN0OiB0aGlzLnN0YXRlLm1ldHJvV2F5TGlzdCwgYWRkb25BZnRlckNhbGxiYWNrOiB0aGlzLmNvbW1vbkNhbGxiYWNrLCBhZGRvbk5hbWU6IFwibWV0cm9XYXlcIiwgYWRkb25WYWx1ZTogdGhpcy5zdGF0ZS5zZWxlY3RlZC5tZXRyb1dheX0pfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncmFkaW9Hcm91cCd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkuY2hlY2tCb3hHZW5lcmF0b3IoXCJNZXRybyBZb3hkdXJcIiwgdGhpcy5pc01ldHJvQ2FsbGJhY2ssIFwibm9tZXRyb1wiLCB0aGlzLnN0YXRlLm5vbWV0cm8pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy51dGlsaXR5Lmdvb2dsZU1hcCh0aGlzLnN0YXRlLmxhdCwgdGhpcy5zdGF0ZS5sbmcsIHRoaXMuZ29vZ2xlTWFwQ2FsbGJhY2ssIFwiWMmZcml0yZk6XCIsIFwibGF0XCIsIFwibG5nXCIpfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGVzYXMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNlbGxpbmdCb3ggPSA8ZGl2IGNsYXNzTmFtZT17J3NlbGxpbmdUeXBlQm94IHJhZGlvR3JvdXAnfSBzdHlsZT17eyB0ZXh0QWxpZ246ICcnIH19PlxyXG5cclxuICAgICAgICAgICAge3RoaXMudXRpbGl0eS5jaGVja0JveEdlbmVyYXRvcihcIkNpeGFyaXNcIiwgdGhpcy5jaGVja2JveENhbGxiYWNrLCBcImxpY2VuY2VcIiwgdGhpcy5zdGF0ZS5saWNlbnNlKX1cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkuY2hlY2tCb3hHZW5lcmF0b3IoXCJCYXJ0ZXJcIiwgdGhpcy5jaGVja2JveENhbGxiYWNrLCBcImJhcnRlclwiLCB0aGlzLnN0YXRlLmFkZGl0aW9uLmJhcnRlcil9XHJcblxyXG4gICAgICAgICAgICB7dGhpcy51dGlsaXR5LmNoZWNrQm94R2VuZXJhdG9yKFwiSXBvdGVrYVwiLCB0aGlzLmNoZWNrYm94Q2FsbGJhY2ssIFwiaXBvdGVrYVwiLCB0aGlzLnN0YXRlLmlwb3Rla2EpfVxyXG5cclxuICAgICAgICAgICAge3RoaXMudXRpbGl0eS5jaGVja0JveEdlbmVyYXRvcihcIkNpeGFyaXMgKEljYXJlKVwiLCB0aGlzLmNoZWNrYm94Q2FsbGJhY2ssIFwiaWNhcmVcIiwgdGhpcy5zdGF0ZS5hZGRpdGlvbi5pY2FyZSl9XHJcblxyXG4gICAgICAgICAgICB7dGhpcy51dGlsaXR5LmNoZWNrQm94R2VuZXJhdG9yKFwiQmVsZWRpeXllXCIsIHRoaXMuY2hlY2tib3hDYWxsYmFjaywgXCJiZWxlZGl5eWVcIiwgdGhpcy5zdGF0ZS5hZGRpdGlvbi5iZWxlZGl5eWUpfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgbGV0IHJlbnRpbmdCb3ggPSA8ZGl2IGNsYXNzTmFtZT17J3JlbnRpbmdCb3ggcmFkaW9Hcm91cCd9IHN0eWxlPXt7IHRleHRBbGlnbjogJycgfX0+XHJcblxyXG4gICAgICAgICAgICB7dGhpcy51dGlsaXR5LmNoZWNrQm94R2VuZXJhdG9yKFwiTcmZdGLJmXggTWViZWxpXCIsIHRoaXMuY2hlY2tib3hDYWxsYmFjaywgXCJtZXRiZXhcIiwgdGhpcy5zdGF0ZS5yZW50YWxBZGRpdGlvbi5tZXRiZXhNKX1cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkuY2hlY2tCb3hHZW5lcmF0b3IoXCJRYWJ5dXlhblwiLCB0aGlzLmNoZWNrYm94Q2FsbGJhY2ssIFwicWFiXCIsIHRoaXMuc3RhdGUucmVudGFsQWRkaXRpb24ucWFiWSl9XHJcblxyXG4gICAgICAgICAgICB7dGhpcy51dGlsaXR5LmNoZWNrQm94R2VuZXJhdG9yKFwiUGFsdGFyeXV5YW5cIiwgdGhpcy5jaGVja2JveENhbGxiYWNrLCBcInBhbHRhclwiLCB0aGlzLnN0YXRlLnJlbnRhbEFkZGl0aW9uLnBhbHRhclkpfVxyXG5cclxuICAgICAgICAgICAge3RoaXMudXRpbGl0eS5jaGVja0JveEdlbmVyYXRvcihcIlNveXVkdWN1XCIsIHRoaXMuY2hlY2tib3hDYWxsYmFjaywgXCJzb3l1ZHVjdVwiLCB0aGlzLnN0YXRlLnJlbnRhbEFkZGl0aW9uLnNveXVkdWN1KX1cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkuY2hlY2tCb3hHZW5lcmF0b3IoXCJUVlwiLCB0aGlzLmNoZWNrYm94Q2FsbGJhY2ssIFwidHZcIiwgdGhpcy5zdGF0ZS5yZW50YWxBZGRpdGlvbi50dil9XHJcblxyXG4gICAgICAgICAgICB7dGhpcy51dGlsaXR5LmNoZWNrQm94R2VuZXJhdG9yKFwiS29uZGljaW9uZXJcIiwgdGhpcy5jaGVja2JveENhbGxiYWNrLCBcImtvbmRpY2lvbmVyXCIsIHRoaXMuc3RhdGUucmVudGFsQWRkaXRpb24ua29uZGljaW9uZXIpfVxyXG5cclxuICAgICAgICAgICAge3RoaXMudXRpbGl0eS5jaGVja0JveEdlbmVyYXRvcihcIkludGVybmV0XCIsIHRoaXMuY2hlY2tib3hDYWxsYmFjaywgXCJpbnRlcm5ldFwiLCB0aGlzLnN0YXRlLnJlbnRhbEFkZGl0aW9uLmludGVybmV0KX1cclxuXHJcbiAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkuY2hlY2tCb3hHZW5lcmF0b3IoXCJUZWxlZm9uXCIsIHRoaXMuY2hlY2tib3hDYWxsYmFjaywgXCJ0ZWxlZm9uXCIsIHRoaXMuc3RhdGUucmVudGFsQWRkaXRpb24udGVsZWZvbil9XHJcblxyXG4gICAgICAgICAgICB7dGhpcy51dGlsaXR5LmNoZWNrQm94R2VuZXJhdG9yKFwiVXNhZyBpbMmZXCIsIHRoaXMuY2hlY2tib3hDYWxsYmFjaywgXCJ1c2FnXCIsIHRoaXMuc3RhdGUucmVudGFsQWRkaXRpb24udXNhZyl9XHJcblxyXG4gICAgICAgICAgICB7dGhpcy51dGlsaXR5LmNoZWNrQm94R2VuZXJhdG9yKFwiSGV5dmFuIGlsyZlcIiwgdGhpcy5jaGVja2JveENhbGxiYWNrLCBcImhleXZhblwiLCB0aGlzLnN0YXRlLnJlbnRhbEFkZGl0aW9uLmhleXZhbil9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3BhcnQnfT5cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5oZWFkZXIoXCLGj3Nhc1wiLCBcImJhc2xpcVwiKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy51dGlsaXR5LnNlbGVjdEdlbmVyYXRvcihcIktpcmF5yZkgbcO8ZGTJmXRpOlwiLCB0aGlzLnN0YXRlLnJlbnREdXJhdGlvbkxpc3QsIFwicmVudER1cmF0aW9uXCIsIHRoaXMuc3RhdGUuc2VsZWN0ZWQucmVudER1cmF0aW9uLCB0aGlzLmNvbW1vbkNhbGxiYWNrLCB0cnVlLCBmYWxzZSl9XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVudGluZ1R5cGVCb3hWaXNpYmlsaXR5P3RoaXMudXRpbGl0eS5yYWRpb0dlbmVyYXRvcihcIktpcmF5yZkgVGlwaTpcIiwgdGhpcy5zdGF0ZS5yZW50YWxBZGRpdGlvbi5vdGFnb3JkYWlyZSwgMCwgdGhpcy5yZW50VHlwZUNhbGxiYWNrLCBcIm90YWdvcmRhaXJlXCIsIFt7IGlkOiAwLCBuYW1lOiBcIkLDvHTDvG4gWWVyXCIgfSwgeyBpZDogMSwgbmFtZTogXCJPdGFnXCIgfV0pOm51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMudXRpbGl0eS5udW1iZXJHZW5lcmF0b3IoXCJRaXltyZl0OlwiLCBcIkRheGlsIEVkaW5cIiwgdGhpcy5udW1iZXJDYWxsYmFjaywgXCJwcmljZVwiLCB0cnVlLCAxLCBOdW1iZXIuTUFYX1ZBTFVFLCB7YWRkb25BZnRlckxpc3Q6IHRoaXMuc3RhdGUuY3VycmVuY3lMaXN0LCBhZGRvbkFmdGVyQ2FsbGJhY2s6IHRoaXMuY29tbW9uQ2FsbGJhY2ssIGFkZG9uTmFtZTogXCJjdXJyZW5jeVwiLCBhZGRvblZhbHVlOiB0aGlzLnN0YXRlLnNlbGVjdGVkLmN1cnJlbmN5fSl9XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMudXRpbGl0eS5udW1iZXJHZW5lcmF0b3IoXCJTYWjJmTpcIiwgXCJEYXhpbCBFZGluXCIsIHRoaXMubnVtYmVyQ2FsbGJhY2ssIFwiYXJlYVNpemVcIiwgdHJ1ZSwgMSwgTnVtYmVyLk1BWF9WQUxVRSwge2FkZG9uQWZ0ZXJPbmx5VGV4dDogdGhpcy5zdGF0ZS5hcmVhVW5pdH0pfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkubnVtYmVyR2VuZXJhdG9yKFwiVG9ycGFxIFNhaMmZc2k6XCIsIFwiRGF4aWwgRWRpblwiLCB0aGlzLm51bWJlckNhbGxiYWNrLCBcInNlY29uZEFyZWFTaXplXCIsIHRoaXMuc3RhdGUuYWRkaXRpb24uc2Vjb25kQXJlYSwgMSwgTnVtYmVyLk1BWF9WQUxVRSwge2FkZG9uQWZ0ZXJPbmx5VGV4dDogXCJzb3RcIn0pfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkubnVtYmVyR2VuZXJhdG9yKFwiT3RhZzpcIiwgXCJEYXhpbCBFZGluXCIsIHRoaXMubnVtYmVyQ2FsbGJhY2ssIFwicm9vbUFtb3VudFwiLCB0aGlzLnN0YXRlLmFkZGl0aW9uLnJvb21BbW91bnQpfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkuc2VsZWN0R2VuZXJhdG9yKFwiVG9ycGFnIFRleWluYXRpOlwiLCB0aGlzLnN0YXRlLmFkZGl0aW9uLmxhbmRBcHBvaW50bWVudCA/IHRoaXMuc3RhdGUubGFuZEFwcG9pbnRtZW50TGlzdCA6IGZhbHNlLCBcImxhbmRBcHBvaW50bWVudFwiLCB0aGlzLnN0YXRlLnNlbGVjdGVkLmxhbmRBcHBvaW50bWVudCwgdGhpcy5jb21tb25DYWxsYmFjaywgbnVsbCwgdHJ1ZSwgZmFsc2UpfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkubnVtYmVyR2VuZXJhdG9yKFwiTWVuemlsIE1lcnRlYmVzaTpcIiwgXCJEYXhpbCBFZGluXCIsIHRoaXMubnVtYmVyQ2FsbGJhY2ssIFwiZmxvb3JcIiwgdGhpcy5zdGF0ZS5hZGRpdGlvbi5mbG9vciwgMCl9XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMudXRpbGl0eS5udW1iZXJHZW5lcmF0b3IoXCJCaW5hIE1lcnRlYmVzaTpcIiwgXCJEYXhpbCBFZGluXCIsIHRoaXMubnVtYmVyQ2FsbGJhY2ssIFwiYnVpbGRpbmdGbG9vclwiLCB0aGlzLnN0YXRlLmFkZGl0aW9uLmJ1aWxkaW5nRmxvb3IpfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkubnVtYmVyR2VuZXJhdG9yKFwiSGFtYW0gU2F5xLFcIiwgXCJEYXhpbCBFZGluXCIsIHRoaXMubnVtYmVyQ2FsbGJhY2ssIFwiaGFtYW1cIiwgdGhpcy5zdGF0ZS5hZGRpdGlvbi5oYW1hbSwgMCwgMjApfVxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncmFkaW9Hcm91cCd9IHN0eWxlPXt7IHRleHRBbGlnbjogJycgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkuY2hlY2tCb3hHZW5lcmF0b3IoXCJFeXZhblwiLCB0aGlzLmNoZWNrYm94Q2FsbGJhY2ssIFwiZXl2YW5cIiwgdGhpcy5zdGF0ZS5hZGRpdGlvbi5leXZhbil9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMudXRpbGl0eS5jaGVja0JveEdlbmVyYXRvcihcIkxpZnRcIiwgdGhpcy5jaGVja2JveENhbGxiYWNrLCBcImxpZnRcIiwgdGhpcy5zdGF0ZS5hZGRpdGlvbi5saWZ0KX1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy51dGlsaXR5LmNoZWNrQm94R2VuZXJhdG9yKFwiTWViZWxcIiwgdGhpcy5jaGVja2JveENhbGxiYWNrLCBcIm1lYmVsXCIsIHRoaXMuc3RhdGUuYWRkaXRpb24ubWViZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkuY2hlY2tCb3hHZW5lcmF0b3IoXCJUZW1pclwiLCB0aGlzLmNoZWNrYm94Q2FsbGJhY2ssIFwidGVtaXJcIiwgdGhpcy5zdGF0ZS5hZGRpdGlvbi50ZW1pcil9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMudXRpbGl0eS5jaGVja0JveEdlbmVyYXRvcihcIkhvdnV6XCIsIHRoaXMuY2hlY2tib3hDYWxsYmFjaywgXCJob3Z1elwiLCB0aGlzLnN0YXRlLmFkZGl0aW9uLmhvdnV6KX1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy51dGlsaXR5LmNoZWNrQm94R2VuZXJhdG9yKFwiUWF6XCIsIHRoaXMuY2hlY2tib3hDYWxsYmFjaywgXCJxYXpcIiwgdGhpcy5zdGF0ZS5hZGRpdGlvbi5xYXopfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkuY2hlY2tCb3hHZW5lcmF0b3IoXCJTdVwiLCB0aGlzLmNoZWNrYm94Q2FsbGJhY2ssIFwic3VcIiwgdGhpcy5zdGF0ZS5hZGRpdGlvbi5zdSl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMudXRpbGl0eS5jaGVja0JveEdlbmVyYXRvcihcIklzaWdcIiwgdGhpcy5jaGVja2JveENhbGxiYWNrLCBcImlzaWdcIiwgdGhpcy5zdGF0ZS5hZGRpdGlvbi5pc2lnKX1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy51dGlsaXR5LmNoZWNrQm94R2VuZXJhdG9yKFwiS2FuYWxpemFzaXlhXCIsIHRoaXMuY2hlY2tib3hDYWxsYmFjaywgXCJrYW5hbGl6YXNpeWFcIiwgdGhpcy5zdGF0ZS5hZGRpdGlvbi5rYW5hbGl6YXNpeWEpfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlbnRpbmdUeXBlQm94VmlzaWJpbGl0eSA/IHJlbnRpbmdCb3ggOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkudGV4dEFyZWFHZW5lcmV0b3IoXCJNyZlsdW1hdDpcIiwgXCLGj24gYXrEsSAxMDAgaMmZcmZkyZluIGliYXLJmXQgb2xtYWzEsWTEsXJcIiwgdGhpcy50ZXh0QXJlYUNhbGxiYWNrLCBcImFib3V0SW5mb1wiKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWxsaW5nVHlwZUJveFZpc2liaWxpdHkgPyBzZWxsaW5nQm94IDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy51dGlsaXR5LmltYWdlVXBsb2FkR2VuZXJhdG9yKHRoaXMuc3RhdGUuZmlsZUxpc3QsIHRoaXMuc3RhdGUucHJldmlld1Zpc2libGUsIHRoaXMuc3RhdGUucHJldmlld1RpdGxlLCB0aGlzLnN0YXRlLnByZXZpZXdJbWFnZSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBlbGFxZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3BhcnQnfT5cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5oZWFkZXIoXCLGj2xhccmZXCIsIFwiYmFzbGlxXCIpfVxyXG5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkucmFkaW9HZW5lcmF0b3IoXCLGj2xhccmZZGFyIMWeyZl4c2luIFN0YXR1c3U6XCIsIFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlNhaGliaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlZhc3TJmcOnaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sIDEsIHRoaXMub3duZXJDYWxsYmFjaywgXCJvd25lclwiKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy51dGlsaXR5LmlucHV0R2VuZXJhdG9yKFwiQWQ6XCIsIFwiRGF4aWwgRWRpblwiLCB0aGlzLnRleHRBcmVhQ2FsbGJhY2ssIFwibmFtZVwiKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy51dGlsaXR5LmlucHV0R2VuZXJhdG9yKFwiTsO2bXLJmTpcIiwgXCJEYXhpbCBFZGluXCIsIHRoaXMudGV4dEFyZWFDYWxsYmFjaywgXCJwaG9uZVwiKX1cclxuXHJcbiAgICAgICAgICAgICAgICB7dGhpcy51dGlsaXR5LmlucHV0R2VuZXJhdG9yKFwiRS1tYWlsOlwiLCBcIkRheGlsIEVkaW5cIiwgdGhpcy50ZXh0QXJlYUNhbGxiYWNrLCBcImVtYWlsXCIpfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncmFkaW9Hcm91cCd9IHN0eWxlPXt7IHRleHRBbGlnbjogJycgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnV0aWxpdHkuY2hlY2tCb3hHZW5lcmF0b3IoXCJXaGF0c0FwcFwiLCB0aGlzLmNoZWNrYm94Q2FsbGJhY2ssIFwid3BcIiwgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMudXRpbGl0eS5jaGVja0JveEdlbmVyYXRvcihcIlrJmW5nXCIsIHRoaXMuY2hlY2tib3hDYWxsYmFjaywgXCJjYWxsXCIsIHRydWUpfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYnV0dG9uXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuc3VibWl0Q2xpY2t9PkVsYXZlIGV0PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBlbGF2ZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD17J2FkZFNlY3Rpb24nfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29udGFpbmVyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydyb3cnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb2wgZmlyc3QnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY3VzdG9tQ29sJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuaWxraW4oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5lc2FzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuZWxhcWUoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb2wgc2Vjb25kJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2N1c3RvbUNvbCd9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNhZGRTZWN0aW9uIFt2YWxpZGF0ZW5hbWVdXCIpO1xyXG5cclxuICAgICAgICBsZXQgaGFzRXJyb3IgPSBmYWxzZVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW5wdXRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuc2VsZWN0ZWRbaW5wdXRzW2luZGV4XS5nZXRBdHRyaWJ1dGUoXCJ2YWxpZGF0ZW5hbWVcIildKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0Vycm9yKSB7IGhhc0Vycm9yID0gIWhhc0Vycm9yOyB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBgTcmZbHVtYXQgRG9sZHVydWxtYXnEsWI6ICR7aW5wdXRzW2luZGV4XS5nZXRBdHRyaWJ1dGUoXCJkaXNwbGF5bmFtZVwiKX1gXHJcbiAgICAgICAgICAgICAgICB0aGlzLnV0aWxpdHkuc2hvd0Vycm9yKHRleHQpXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGVsZSA9IGlucHV0c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcIi5hbnQtc2VsZWN0LXNlbGVjdG9yXCIpIHx8IGlucHV0c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcInRleHRhcmVhXCIpIHx8IGlucHV0c1tpbmRleF0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JCb3JkZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlLm9uY2xpY2sgPSAoZSkgPT4geyBlbGUuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yQm9yZGVyXCIpIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWQuaW1hZ2VzID09IG51bGwgfHwgdGhpcy5zdGF0ZS5zZWxlY3RlZC5pbWFnZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSBgTcmZbHVtYXQgRG9sZHVydWxtYXnEsWI6IMWeyZlraWxsyZlyYFxyXG4gICAgICAgICAgICB0aGlzLnV0aWxpdHkuc2hvd0Vycm9yKHRleHQpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBoYXNFcnJvclxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXRDbGljayA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGlvbigpKSByZXR1cm5cclxuXHJcbiAgICAgICAgbGV0IGhlYWRlciA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuc2VsZWN0ZWQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTkyLjE2OC4xLjEwNzo1NTY2L2FwaS9iaW5hL0FkZFwiLCBoZWFkZXIpO1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICBhbGVydChcIkRvbmVcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNNZXRyb0NhbGxiYWNrID0gKHZhbHVlKSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBjaXR5ID0gdGhpcy5zdGF0ZS5jaXR5TGlzdC5maW5kKHcgPT4gdy5pZCA9PSB0aGlzLnN0YXRlLnNlbGVjdGVkLmNpdHkpIHx8IGZhbHNlO1xyXG4gICAgICAgIGlmICghdmFsdWUudGFyZ2V0LmNoZWNrZWQgJiYgY2l0eSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZXRyb0xpc3Q6IGNpdHkubWV0cm9zXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWV0cm9MaXN0OiBudWxsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnb29nbGVNYXBDYWxsYmFjayA9ICh3KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgbGF0OiB3LmxhdExuZy5sYXQoKSxcclxuICAgICAgICAgICAgICAgIGxuZzogdy5sYXRMbmcubG5nKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbGF0OiB3LmxhdExuZy5sYXQoKSxcclxuICAgICAgICAgICAgbG5nOiB3LmxhdExuZy5sbmcoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb3duZXJDYWxsYmFjayA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5zZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgIG93bmVyOiB2YWx1ZS50YXJnZXQudmFsdWUgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVudFR5cGVDYWxsYmFjayA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICBzZWxlY3RlZDoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5zZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgIG90YWdvcmRhaXJlOiB2YWx1ZS50YXJnZXQudmFsdWUgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2VsbFR5cGVDYWxsYmFjayA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGxldCByZW50ID0gdGhpcy5zdGF0ZS5zZWxsVHlwZUxpc3QuZmluZCh3ID0+IHcuaWQgPT0gdmFsdWUudGFyZ2V0LnZhbHVlKS5yZW50XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzZWxsVHlwZTogdmFsdWUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcmVudER1cmF0aW9uOiByZW50Lmxlbmd0aCA+IDAgPyB0aGlzLnN0YXRlLnNlbGVjdGVkLnJlbnREdXJhdGlvbiA6IG51bGxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVudER1cmF0aW9uTGlzdDogcmVudC5sZW5ndGggPiAwID8gcmVudCA6IG51bGwsXHJcbiAgICAgICAgICAgIHNlbGxpbmdUeXBlQm94VmlzaWJpbGl0eTogcmVudC5sZW5ndGggPiAwID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgICAgICAgICByZW50aW5nVHlwZUJveFZpc2liaWxpdHk6IHJlbnQubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVudGFsQWRkaXRpb246IHJlbnQubGVuZ3RoID4gMCA/IHRoaXMuc3RhdGUucmVudGFsQWRkaXRpb24gOiB7fSxcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjYXRlZ29yeUNhbGxiYWNrID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICAgIGFyZWFVbml0OiB0aGlzLnByb3BzLmZpbHRlci5jYXRlZ29yaWVzLmZpbmQodz0+dy5pZCA9PSB2YWx1ZSkuYXJlYVVuaXQsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHZhbHVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhZGRpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5maWx0ZXIuY2F0ZWdvcmllcy5maW5kKHcgPT4gdy5pZCA9PSB2YWx1ZSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVudGFsQWRkaXRpb246IHRoaXMucHJvcHMuZmlsdGVyLnJlbnRhbHMuZmluZCh3ID0+IHcuaWQgPT0gdGhpcy5wcm9wcy5maWx0ZXIuY2F0ZWdvcmllcy5maW5kKHcgPT4gdy5pZCA9PSB2YWx1ZSkucmVudGFsUHJvxLBkKSB8fCB7fVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2l0eUNhbGxiYWNrID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlZ2lvbnMgPSB0aGlzLnN0YXRlLmNpdHlMaXN0LmZpbmQodyA9PiB3LmlkID09IHZhbHVlKS5yZWdpb25zO1xyXG4gICAgICAgIGxldCBtZXRyb3MgPSB0aGlzLnN0YXRlLmNpdHlMaXN0LmZpbmQodyA9PiB3LmlkID09IHZhbHVlKS5tZXRyb3M7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkOiB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgY2l0eTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICByZWdpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgICB2aWxsYWdlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbWV0cm86IG51bGwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldHJvTGlzdDogIW1ldHJvcy5sZW5ndGggPyBudWxsIDogbWV0cm9zLFxyXG4gICAgICAgICAgICBub21ldHJvOiAhbWV0cm9zLmxlbmd0aCA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgcmVnaW9uTGlzdDogIXJlZ2lvbnMubGVuZ3RoID8gbnVsbCA6IHJlZ2lvbnMsXHJcbiAgICAgICAgICAgIHZpbGxhZ2VMaXN0OiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZWdpb25DYWxsYmFjayA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaW9uOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHZpbGxhZ2U6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdmlsbGFnZUxpc3Q6IG51bGxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZpbGxhZ2VzID0gdGhpcy5zdGF0ZS5yZWdpb25MaXN0LmZpbmQodyA9PiB3LmlkID09IHZhbHVlKS52aWxsYWdlcztcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICByZWdpb246IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgdmlsbGFnZTogbnVsbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2aWxsYWdlTGlzdDogIXZpbGxhZ2VzLmxlbmd0aCA/IG51bGwgOiB2aWxsYWdlc1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29tbW9uQ2FsbGJhY2sgPSAodmFsdWUsIG9wdGlvbikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZDoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5zZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgIFtvcHRpb24uc3RhdGVdOiB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdGV4dEFyZWFDYWxsYmFjayA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZDoge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5zZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgIFt2YWx1ZS50YXJnZXQubmFtZV06IHZhbHVlLnRhcmdldC5kZWZhdWx0VmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbnVtYmVyQ2FsbGJhY2sgPSAodmFsdWUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICBbdmFsdWUudGFyZ2V0Lm5hbWVdOiArdmFsdWUudGFyZ2V0LmRlZmF1bHRWYWx1ZS5yZXBsYWNlKC9bXlxcZF0vZywgJycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrYm94Q2FsbGJhY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LmNoZWNrZWRcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICBbZS50YXJnZXQuc3RhdGVdOiB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xOTIuMTY4LjEuMTA3OjU1NjYvYXBpL2JpbmEvRm9ybScpXHJcbiAgICBjb25zdCBmaWx0ZXIgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGZpbHRlcixcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kbmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG5kLWh0bWw1LWJhY2tlbmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ29vZ2xlLW1hcHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==