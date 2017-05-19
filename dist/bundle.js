/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Vuex = __webpack_require__(21);

module.exports = new Vuex.Store({
    state: {
        items: [{
            selected: true,
            name: 'C'
        }, {
            selected: true,
            name: 'Java'
        }, {
            selected: true,
            name: 'C#'
        }, {
            selected: false,
            name: 'JavaScript'
        }]
    },
    mutations: {
        /**
         * @param {State} state
         * @param {Boolean} selected
         */
        toggleAllSelected: function (state) {
            var selected = !isAllSelected(state.items);
            if (state.items.length > 0) {
                state.items.forEach(function (item) {
                    return item.selected = selected;
                });
            }
        },
        addNewItem: function (state) {
            state.items.push({
                selected: false,
                name: (+new Date()).toString().slice(5)
            });
        },
        deleteItem: function (state, item) {
            var i = state.items.findIndex(function (_item) {
                return _item === item;
            });
            if (i !== -1) {
                state.items.splice(i, 1);
            }
        }
    },
    getters: {
        items: function (state) {
            return state.items;
        },
        selectedCount: function (state) {
            return state.items.filter(function (item) {
                return !!item.selected;
            }).length;
        },
        allSelected: function (state) {
            return isAllSelected(state.items);
        }
    }
});

function isAllSelected(items) {
    return items && items.length > 0 && items.findIndex(function (item) {
        return !item.selected;
    }) === -1;
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(19),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\git\\vue-demo\\src\\app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-edd95182", Component.options)
  } else {
    hotAPI.reload("data-v-edd95182", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__store__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    store: __WEBPACK_IMPORTED_MODULE_0__store___default.a,
    computed: {
        item: function () {
            var name = this.$route.params.name;
            return __WEBPACK_IMPORTED_MODULE_0__store___default.a.state.items.find(function (item) {
                return item.name === name;
            });
        }
    },
    methods: {
        goBack: function () {
            history.back();
        }
    }
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    data: function () {
        return {
            nodes: []
        };
    },
    created: function () {
        if (dice()) this.nodes.push({ name: '1990', desc: 'aaa' });
        if (dice()) this.nodes.push({ name: '1991', desc: 'bbb' });
        if (dice()) this.nodes.push({ name: '1992', desc: 'ccc' });
        if (dice()) this.nodes.push({ name: '1993', desc: 'ddd' });
        if (dice()) this.nodes.push({ name: '1994', desc: 'eee' });
        if (dice()) this.nodes.push({ name: '1995', desc: 'fff' });
        if (dice()) this.nodes.push({ name: '1996', desc: 'ggg' });
        if (dice()) this.nodes.push({ name: '1997', desc: 'hhh' });
        if (dice()) this.nodes.push({ name: '1998', desc: 'jjj' });
        if (dice()) this.nodes.push({ name: '1999', desc: 'kkk' });
        if (dice()) this.nodes.push({ name: '2000', desc: 'lll' });
    }
};

function dice() {
    return Math.random() > 0.5;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__store__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    store: __WEBPACK_IMPORTED_MODULE_0__store___default.a,
    computed: Vuex.mapGetters(['items', 'selectedCount', 'allSelected']),
    methods: Vuex.mapMutations(['toggleAllSelected', 'addNewItem', 'deleteItem'])
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var router = new __WEBPACK_IMPORTED_MODULE_0_vue_router___default.a({
    routes: __WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */]
});

router.beforeEach(function (to, from, next) {
    var title = to.meta.title;
    document.title = (typeof title === 'function' ? title(to) : title) || 'DEMO';
    router.app.transitionName = to.meta.index > from.meta.index ? 'slide-left' : 'slide-right';
    next();
});

/* harmony default export */ __webpack_exports__["default"] = Vue.extend({
    store: __WEBPACK_IMPORTED_MODULE_1__store___default.a,
    data: function () {
        return {
            transitionName: 'slide'
        };
    },
    router: router
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ItemList_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ItemList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ItemList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ItemDetail_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ItemDetail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ItemDetail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ItemHistory_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ItemHistory_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ItemHistory_vue__);




/* harmony default export */ __webpack_exports__["a"] = [{
    name: 'itemList',
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_0__ItemList_vue___default.a,
    meta: {
        index: 0,
        title: 'Item List - VueJS DEMO'
    }
}, {
    name: 'itemDetail',
    path: '/item/:name',
    component: __WEBPACK_IMPORTED_MODULE_1__ItemDetail_vue___default.a,
    meta: {
        index: 1,
        title: function (route) {
            return route.params.name + ' - VueJS DEMO';
        }
    }
}, {
    name: 'itemHistory',
    path: '/itemHistory/:name',
    component: __WEBPACK_IMPORTED_MODULE_2__ItemHistory_vue___default.a,
    meta: {
        index: 2,
        title: function (route) {
            return route.params.name + ' history - VueJS DEMO';
        }
    }
}];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(18),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\git\\vue-demo\\src\\ItemDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ItemDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f226c36", Component.options)
  } else {
    hotAPI.reload("data-v-7f226c36", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(9)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\git\\vue-demo\\src\\ItemHistory.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ItemHistory.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-120f9602", Component.options)
  } else {
    hotAPI.reload("data-v-120f9602", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(17),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\git\\vue-demo\\src\\ItemList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ItemList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d282543", Component.options)
  } else {
    hotAPI.reload("data-v-3d282543", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item-history-container"
  }, [_c('ul', _vm._l((_vm.nodes), function(node) {
    return _c('li', [_vm._v(_vm._s(node.name) + ": " + _vm._s(node.desc))])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-120f9602", module.exports)
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item-list-container page"
  }, [_c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.items.length),
      expression: "items.length"
    }],
    staticClass: "item-list"
  }, _vm._l((_vm.items), function(item) {
    return _c('li', {
      key: item.name,
      class: {
        selected: item.selected
      }
    }, [_c('label', [_c('input', {
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": item.selected
      },
      on: {
        "change": function($event) {
          item.selected = !item.selected
        }
      }
    }), _vm._v(" " + _vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "cmds"
    }, [_c('a', {
      attrs: {
        "href": '#/item/' + item.name
      }
    }, [_vm._v("detail")]), _vm._v(" "), _c('a', {
      staticClass: "cmd-icon",
      on: {
        "click": function($event) {
          _vm.deleteItem(item)
        }
      }
    }, [_vm._v("×")])])])
  })), _vm._v(" "), _c('footer', [_c('label', [_c('input', {
    attrs: {
      "type": "checkbox",
      "disabled": _vm.items.length === 0
    },
    domProps: {
      "checked": _vm.allSelected
    },
    on: {
      "change": _vm.toggleAllSelected
    }
  }), _vm._v(" select all")]), _vm._v(" "), _c('div', {
    staticClass: "summary"
  }, [_vm._v(_vm._s(_vm.selectedCount) + " / " + _vm._s(_vm.items.length))]), _vm._v(" "), _c('div', {
    staticClass: "new-item",
    on: {
      "click": _vm.addNewItem
    }
  }, [_vm._v("add")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3d282543", module.exports)
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item-detail-container page"
  }, [_c('div', {
    staticClass: "head"
  }, [_vm._v(_vm._s(_vm.item.name))]), _vm._v(" "), _c('div', {
    staticClass: "body"
  }, [_c('strong', [_vm._v(_vm._s(_vm.item.name))]), _vm._v(" is " + _vm._s(_vm.item.selected ? 'selected' : 'not selected') + "."), _c('br'), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": {
        name: 'itemHistory',
        param: {
          name: _vm.item.name
        }
      }
    }
  }, [_vm._v("history")])], 1), _vm._v(" "), _c('div', {
    staticClass: "foot"
  }, [_c('button', {
    on: {
      "click": _vm.goBack
    }
  }, [_vm._v("Go Back")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7f226c36", module.exports)
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.transitionName
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-edd95182", module.exports)
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = VueRouter;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = Vuex;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
var App = __webpack_require__(3);

new App({
    el: '#app'
});

/***/ })
/******/ ]);