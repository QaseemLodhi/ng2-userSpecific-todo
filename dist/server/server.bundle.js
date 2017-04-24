module.exports =
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authGuard_service__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__http__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__authGuard_service__["a"]; });



//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/index.js.map

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var config = {
    jwtSecret: 'superdupersecretofREI',
    salt: 'DJEW*324KNAScsafAwe987y2e@#RWoihwefn98!',
    mongoURL: process.env.MONGODB_URI || 'mongodb://localhost:27017/ungtodo',
    port: process.env.PORT || 8000,
};
/* harmony default export */ exports["a"] = config;
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/config.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(
        // private route: ActivatedRoute,
        router, alertService, hs, route) {
        this.router = router;
        this.alertService = alertService;
        this.hs = hs;
        this.route = route;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser')) {
            this.router.navigate(['/todo']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.hs.PostRequest('/api/login', this.model).subscribe(function (res) {
            if (!res.success) {
                _this.loading = false;
                _this.alertService.error(res.error);
            }
            else {
                _this.alertService.success('Login successful', true);
                localStorage.setItem('currentUser', JSON.stringify(res.data));
                _this.loading = false;
                _this.router.navigate(['/todo']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(39),
            styles: [__webpack_require__(34)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* HttpService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/login.component.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(router, alertService, hs) {
        this.router = router;
        this.alertService = alertService;
        this.hs = hs;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser')) {
            this.router.navigate(['/todo']);
        }
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.hs.PostRequest('/api/register', this.model).subscribe(function (res) {
            if (!res.success) {
                _this.loading = false;
                _this.alertService.error(res.error);
            }
            else {
                _this.alertService.success('Registration successful', true);
                _this.loading = false;
                _this.router.navigate(['/login']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(40),
            styles: [__webpack_require__(35)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* HttpService */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/register.component.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            this.router.navigate(['/todo']);
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/authGuard.service.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TodoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoComponent = (function () {
    function TodoComponent(hs, router, alertService) {
        this.hs = hs;
        this.router = router;
        this.alertService = alertService;
        this.loading = false;
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.loadTodos();
    };
    TodoComponent.prototype.loadTodos = function () {
        var _this = this;
        this.hs.GetRequest('/api/todo/' + this.currentUser.id).subscribe(function (res) {
            if (!res.success) {
            }
            else {
                _this.todoList = res.data;
            }
        });
    };
    TodoComponent.prototype.addTodo = function (valid, value) {
        var _this = this;
        this.loading = true;
        event.preventDefault();
        if (!valid || (value.todoTask === undefined))
            return;
        var obj = {
            todoTask: value.todoTask,
            user_id: this.currentUser.id,
            completed: false
        };
        value.todoTask = '';
        this.hs.PostRequest('/api/todo', { todo: obj }).subscribe(function (res) {
            if (!res.success) {
                _this.loading = false;
                _this.alertService.error(res.error);
            }
            else {
                _this.loading = false;
                _this.alertService.success('Todo add Successful!');
                _this.loadTodos();
            }
        });
    };
    TodoComponent.prototype.deleteTodo = function (id) {
        var _this = this;
        this.hs.DeleteRequest('/api/todo/' + id).subscribe(function (res) {
            if (!res.success) {
                _this.alertService.error(res.error);
            }
            else {
                _this.alertService.success('Todo delete Successful!');
                _this.loadTodos();
            }
        });
    };
    TodoComponent.prototype.updateTodo = function (event, value) {
        var _this = this;
        var obj = {
            completed: event.target.checked,
            todoId: value._id
        };
        this.hs.PutRequest('/api/todo', { todo: obj }).subscribe(function (res) {
            if (!res.success) {
                _this.alertService.error(res.error);
            }
            else {
                _this.loadTodos();
            }
        });
    };
    TodoComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    };
    TodoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(41),
            styles: [__webpack_require__(36)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* HttpService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AlertService */]) === 'function' && _c) || Object])
    ], TodoComponent);
    return TodoComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/todo.component.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_user__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_crypto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_crypto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_verify__ = __webpack_require__(31);
/* unused harmony export index */
/* unused harmony export show */
/* harmony export (immutable) */ exports["a"] = create;
/* harmony export (immutable) */ exports["b"] = login;




function index(req, res) {
    res.send('User api is working now');
}
function show(req, res) {
}
function create(req, res) {
    __WEBPACK_IMPORTED_MODULE_0__models_user__["a" /* default */].findOne({ email: req.body.email })
        .exec(function (err, userObj) {
        if (err) {
            return res.json({ success: false, data: null, error: 'Contact support' });
        }
        else if (userObj == null) {
            var pwHash = __WEBPACK_IMPORTED_MODULE_1_crypto__["createHmac"]('sha1', __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].salt).update(req.body.password).digest('hex');
            var user = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: pwHash
            };
            __WEBPACK_IMPORTED_MODULE_0__models_user__["a" /* default */].create(user)
                .then(function (user) {
                return res.json({ success: true, data: 'User created', error: null });
            })
                .catch(function (err) {
                console.error('err', err);
                return res.json({ success: false, data: null, error: 'Contact support' });
            });
        }
        else {
            return res.json({ success: false, data: 'User already exists', error: null });
        }
    });
}
// login
function login(req, res) {
    __WEBPACK_IMPORTED_MODULE_0__models_user__["a" /* default */].findOne({ email: req.body.email })
        .exec(function (err, userObj) {
        if (err) {
            return res.json({ success: false, data: null, error: err });
        }
        else if (!userObj) {
            return res.json({ success: false, data: null, error: 'Email address not found' });
        }
        var hash = __WEBPACK_IMPORTED_MODULE_1_crypto__["createHmac"]('sha1', __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].salt).update(req.body.password).digest('hex');
        if (hash == userObj['password']) {
            var currentUser = {
                id: userObj._id,
                firstName: userObj['firstName'],
                lastName: userObj['lastName'],
                email: userObj['email'],
            };
            var token = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__service_verify__["a" /* createToken */])(currentUser);
            currentUser['token'] = token;
            return res.json({ success: true, data: currentUser, error: null });
        }
        else {
            return res.json({ success: false, data: null, error: 'Incorrect Password!' });
        }
    });
}
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/user.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_compression__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_express_engine__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_express_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_express_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_node_module__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__server_routes__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__server_routes_todo__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__server_routes_register__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__server_routes_login__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__server_config__ = __webpack_require__(5);
















// App
var app = __WEBPACK_IMPORTED_MODULE_3_express__();
var ROOT = __WEBPACK_IMPORTED_MODULE_2_path__["join"](__WEBPACK_IMPORTED_MODULE_2_path__["resolve"](__dirname, '..'));
var port = process.env.PORT || 4200;
/**
 * enable prod mode for production environments
 */
if (__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["enableProdMode"])();
}
/**
 * Express View
 */
app.engine('.html', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_angular2_express_engine__["createEngine"])({}));
app.set('views', __WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'));
app.set('view engine', 'html');
// MongoDB Connection
__WEBPACK_IMPORTED_MODULE_4_mongoose__["connect"](__WEBPACK_IMPORTED_MODULE_15__server_config__["a" /* default */].mongoURL, function (error) {
    if (error) {
        console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
        throw error;
    }
});
/**
 * Enable compression
 */
app.use(__WEBPACK_IMPORTED_MODULE_6_compression__());
/**
 * serve static files
 */
app.use(__WEBPACK_IMPORTED_MODULE_6_compression__());
app.use(__WEBPACK_IMPORTED_MODULE_5_body_parser__["json"]({ limit: '20mb' }));
app.use(__WEBPACK_IMPORTED_MODULE_5_body_parser__["urlencoded"]({ limit: '20mb', extended: false }));
app.use('/', __WEBPACK_IMPORTED_MODULE_3_express__["static"](__WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'), { index: false }));
/**
 * place your api routes here
 */
// app.use('/api', api);
app.use('/api', __WEBPACK_IMPORTED_MODULE_12__server_routes_todo__["a" /* default */]);
app.use('/api', __WEBPACK_IMPORTED_MODULE_13__server_routes_register__["a" /* default */]);
app.use('/api', __WEBPACK_IMPORTED_MODULE_14__server_routes_login__["a" /* default */]);
/**
 * bootstrap universal app
 * @param req
 * @param res
 */
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        ngModule: __WEBPACK_IMPORTED_MODULE_9__app_app_node_module__["a" /* AppModule */],
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: req.hostname
    });
}
/**
 * use universal for specific routes
 */
app.get('/', ngApp);
__WEBPACK_IMPORTED_MODULE_11__server_routes__["a" /* routes */].forEach(function (route) {
    app.get("/" + route, ngApp);
    app.get("/" + route + "/*", ngApp);
});
/**
 * if you want to use universal for all routes, you can use the '*' wildcard
 */
app.get('*', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var pojo = { status: 404, message: 'No Content' };
    var json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/server.js.map

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(42);
var __core_private__ = __webpack_require__(0);
var patch = false;
if (!__core_private__.hasOwnProperty('ViewUtils')) {
    patch = true;
    __core_private__.ViewUtils = __core_private__.view_utils;
}
if (!__compiler__.__compiler_private__) {
    patch = true;
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    };
}
var __universal__ = __webpack_require__(46);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/__2.1.1.workaround.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'alert',
            template: __webpack_require__(37),
            styles: [__webpack_require__(32)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* AlertService */]) === 'function' && _a) || Object])
    ], AlertComponent);
    return AlertComponent;
    var _a;
}());
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/alert.component.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(38),
            styles: [__webpack_require__(33)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/app.component.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__todo_todo_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__alert_alert_component__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Top-level NgModule "container"
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            /** Root App Component */
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* AppComponent */]],
            /** Our Components */
            declarations: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__todo_todo_component__["a" /* TodoComponent */], __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_10__alert_alert_component__["a" /* AlertComponent */]],
            imports: [
                /**
                 * NOTE: Needs to be your first import (!)
                 * NodeModule, NodeHttpModule, NodeJsonpModule are included
                 */
                __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["UniversalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                /**
                 * using routes
                 */
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* appRoutes */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_index__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_7__services_index__["b" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_7__services_index__["c" /* AuthGuard */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/app.module.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });

//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/app.node.module.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo_todo_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authGuard_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return appRoutes; });




var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */] },
    { path: 'todo', component: __WEBPACK_IMPORTED_MODULE_0__todo_todo_component__["a" /* TodoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__services_authGuard_service__["a" /* AuthGuard */]] },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];
// export const routing = RouterModule.forRoot(appRoutes);
// export appRoutes; 
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/app.routing.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });

//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/index.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object])
    ], AlertService);
    return AlertService;
    var _a;
}());
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/alert.service.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.GetHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        options.headers = headers;
        return options;
    };
    HttpService.prototype.ResponseMap = function (res) {
        var response = res.json();
        if (response && response.hasOwnProperty('success')) {
            return response;
        }
        else if (response && response.hasOwnProperty('access_token') || response.hasOwnProperty('headline')) {
            return response;
        }
        else {
            return {
                success: false,
                data: null,
                error: response
            };
        }
    };
    HttpService.prototype.GetRequest = function (url) {
        return this.http.get(url).map(this.ResponseMap);
    };
    HttpService.prototype.PostRequest = function (url, obj) {
        return this.http.post(url, obj, this.GetHeaders()).map(this.ResponseMap);
    };
    HttpService.prototype.PutRequest = function (url, obj) {
        return this.http.put(url, obj, this.GetHeaders()).map(this.ResponseMap);
    };
    HttpService.prototype.DeleteRequest = function (url) {
        return this.http.delete(url).map((this.ResponseMap));
    };
    HttpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], HttpService);
    return HttpService;
    var _a;
}());
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/http.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ung build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/environment.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/polyfills.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });
/**
 * Server-side routes. Only the listed routes support html5pushstate.
 * Has to match client side routes.
 *
 * Index (/) route does not have to be listed here.
 *
 * @example
 * export const routes: string[] = [
 * 'home', 'about'
 * ];
 **/
var routes = [
    'todo', 'login', 'register'
];
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/server.routes.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_todo__ = __webpack_require__(26);
/* harmony export (immutable) */ exports["a"] = getTodos;
/* harmony export (immutable) */ exports["c"] = addTodo;
/* harmony export (immutable) */ exports["b"] = getTodo;
/* harmony export (immutable) */ exports["d"] = deleteTodo;
/* harmony export (immutable) */ exports["e"] = updateTodo;

function getTodos(req, res) {
    __WEBPACK_IMPORTED_MODULE_0__models_todo__["a" /* default */].find({ user_id: req.params.id }).sort('-date').exec(function (err, Todos) {
        if (err) {
            return res.json({ success: false, data: null, error: err });
        }
        res.json({ success: true, data: Todos, error: null });
    });
}
function addTodo(req, res) {
    if (!req.body.todo.todoTask) {
        return res.json({ success: false, data: null, error: 'Missing todo task!' });
    }
    var newTodo = new __WEBPACK_IMPORTED_MODULE_0__models_todo__["a" /* default */](req.body.todo);
    newTodo.save(function (err, saved) {
        if (err) {
            return res.json({ success: false, data: null, error: err });
        }
        __WEBPACK_IMPORTED_MODULE_0__models_todo__["a" /* default */].findOne({ _id: saved._id }).exec(function (err, todo) {
            if (err) {
                return res.json({ success: false, data: null, error: err });
            }
            res.json({ success: true, data: todo, error: null });
        });
    });
}
function getTodo(req, res) {
    __WEBPACK_IMPORTED_MODULE_0__models_todo__["a" /* default */].findOne({ _id: req.params._id }).exec(function (err, todo) {
        if (err) {
            return res.json({ success: false, data: null, error: err });
        }
        res.json({ success: true, data: todo, error: null });
    });
}
function deleteTodo(req, res) {
    __WEBPACK_IMPORTED_MODULE_0__models_todo__["a" /* default */].findOne({ _id: req.params.id }).exec(function (err, todo) {
        if (err) {
            return res.json({ success: false, data: null, error: err });
        }
        todo.remove(function () {
            res.json({ success: true, data: null, error: null });
            ;
        });
    });
}
function updateTodo(req, res) {
    __WEBPACK_IMPORTED_MODULE_0__models_todo__["a" /* default */].findByIdAndUpdate({ _id: req.body.todo.todoId }, { completed: req.body.todo.completed }, function (err, result) {
        if (err) {
            return res.json({ success: false, data: null, error: 'Todo not found' });
        }
        else {
            res.json({ success: true, data: result, error: null });
        }
    });
}
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/todo.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"];
var todoSchema = new Schema({
    todoTask: { type: 'String', required: true },
    completed: { type: 'Boolean', required: true },
    user_id: { type: 'String', required: true },
    date: { type: 'Date', default: Date.now, required: true },
});
/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose__["model"]('Todo', todoSchema);
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/todo.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var userSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose__["Schema"]({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, lowercase: true, unique: true },
    createdAt: { type: Date, default: Date.now() },
    password: { type: String }
});
/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose__["model"]('User', userSchema);
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/user.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_user__ = __webpack_require__(10);


var router = __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
router.route('/login').post(__WEBPACK_IMPORTED_MODULE_1__controllers_user__["b" /* login */]);
/* harmony default export */ exports["a"] = router;
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/login.js.map

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_user__ = __webpack_require__(10);


var router = __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
router.route('/register').post(__WEBPACK_IMPORTED_MODULE_1__controllers_user__["a" /* create */]);
/* harmony default export */ exports["a"] = router;
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/register.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_todo__ = __webpack_require__(25);


var router = __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();
// Get all Posts
router.route('/todo/:id').get(__WEBPACK_IMPORTED_MODULE_1__controllers_todo__["a" /* getTodos */]);
// Get one post by cuid
router.route('/todo/:id').get(__WEBPACK_IMPORTED_MODULE_1__controllers_todo__["b" /* getTodo */]);
// Add a new Post
router.route('/todo').post(__WEBPACK_IMPORTED_MODULE_1__controllers_todo__["c" /* addTodo */]);
// Delete a post by cuid
router.route('/todo/:id').delete(__WEBPACK_IMPORTED_MODULE_1__controllers_todo__["d" /* deleteTodo */]);
//Update data
router.route('/todo').put(__WEBPACK_IMPORTED_MODULE_1__controllers_todo__["e" /* updateTodo */]);
/* harmony default export */ exports["a"] = router;
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/todo.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(5);
/* harmony export (immutable) */ exports["a"] = createToken;
/* unused harmony export verifyToken */


function createToken(user) {
    console.log('user Obj', user);
    var token = __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__["sign"](user, __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].jwtSecret, { expiresIn: "90 days" }); //expires in 90 days
    return token;
}
function verifyToken(token) {
    return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_0_jsonwebtoken__["verify"](token, __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].jwtSecret, function (err, verifiedJwt) {
            if (err) {
                reject(err);
            }
            else {
                resolve(verifiedJwt);
            }
        });
    });
}
//# sourceMappingURL=E:/angular-universal/ng2-userSpecific-todo/src/verify.js.map

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = ".center{\r\n    text-align: center;\r\n}\r\n.checked {\r\n    text-decoration: line-through;\r\n  }\r\n  .checkbox {\r\n    display: inline !important;\r\n  }"

/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = "<!--<h1>\n  {{title}}\n</h1>-->\n\n<router-outlet></router-outlet>"

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n    <alert></alert>\n    <div class=\"col-sm-8 col-sm-offset-2\">\n        <div class=\"col-md-6 col-md-offset-3\">\n            <h2>Login</h2>\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                </div>\n                <div class=\"form-group\">\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                    />\n                    <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n    <alert></alert>\n    <div class=\"col-sm-8 col-sm-offset-2\">\n        <div class=\"col-md-6 col-md-offset-3\">\n            \n            <h2>Register</h2>\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !firstName.valid }\">\n                    <label for=\"firstName\">First Name</label>\n                    <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !lastName.valid }\">\n                    <label for=\"lastName\">Last Name</label>\n                    <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n                    <label for=\"username\">Email</label>\n                    <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                </div>\n                <div class=\"form-group\">\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                    />\n                    <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"col-lg-11\">\n    <div style=\"float:left\">\n      <h3>TodoApp</h3>\n    </div>\n    <div style=\"text-align:center\">\n      <h3>{{currentUser.firstName + ' ' + currentUser.lastName }}</h3>\n    </div>\n  </div>\n  <div class=\"col-lg-1\">\n    <h4><a (click)=\"logout()\">Logout</a></h4>\n  </div>\n</nav>\n<alert></alert>\n<div class=\"col-lg-12\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n      <form #todoForm=\"ngForm\" (submit)=\"addTodo(todoForm.valid, todoForm.value)\" novalidate class=\"navbar-form center\">\n        <div class=\"form-group\">\n          <input placeholder=\"What needs to be done?\" name=\"todoTask\" (keyup.enter)=\"todoTask=''\" [(ngModel)]=\"todoTask\" type=\"text\"\n            class=\"form-control\">\n        </div>\n        <button [disabled]=\"loading\" type=\"submit\" class=\"btn btn-default\">Add</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n        />\n      </form>\n      <div class=\"pull-right\"><button type=\"submit\" class=\"btn btn-default\" (click)=\"loadTodos()\"><span class=\"glyphicon glyphicon-refresh\"></span></button></div>\n    </div>\n\n    <!-- List group -->\n    <ul class=\"list-group\">\n      <li *ngFor=\"let todo of todoList\" class=\"list-group-item\">\n        <span><input (click)=\"updateTodo($event,todo)\" type=\"checkbox\" class=\"checkbox\" [(ngModel)]=\"todo.completed\" /></span>\n        <span [ngClass]=\"{'checked': todo.completed}\">{{todo.todoTask}}</span>\n        <span class=\"pull-right\">\n          <button type=\"button\" type=\"submit\" class=\"btn btn-danger btn-sm\" (click)=\"deleteTodo(todo._id)\">\n        <span class=\"glyphicon glyphicon-trash\"></span>\n        </button>\n        </span>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = require("@angular/compiler");

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = require("@angular/http");

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports = require("angular2-platform-node/__private_imports__");

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports = require("angular2-universal");

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 49 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 50 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 51 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/array");

/***/ },
/* 52 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/date");

/***/ },
/* 53 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/function");

/***/ },
/* 54 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/map");

/***/ },
/* 55 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/math");

/***/ },
/* 56 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/number");

/***/ },
/* 57 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ },
/* 58 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-float");

/***/ },
/* 59 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-int");

/***/ },
/* 60 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/reflect");

/***/ },
/* 61 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/regexp");

/***/ },
/* 62 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/set");

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/symbol");

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = require("core-js/es7/reflect");

/***/ },
/* 66 */
/***/ function(module, exports) {

module.exports = require("crypto");

/***/ },
/* 67 */
/***/ function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ },
/* 68 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 69 */
/***/ function(module, exports) {

module.exports = require("rxjs/Subject");

/***/ },
/* 70 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTZkOWVmZWY0Y2E1YWI5ZWI2YzMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy9hdXRoR3VhcmQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3RvZG8vdG9kby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9jb250cm9sbGVycy91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19fMi4xLjEud29ya2Fyb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLm5vZGUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLnJvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NlcnZpY2VzL2FsZXJ0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy9odHRwLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlmaWxscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2NvbnRyb2xsZXJzL3RvZG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9tb2RlbHMvdG9kby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL21vZGVscy91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcm91dGVzL2xvZ2luLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcm91dGVzL3JlZ2lzdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcm91dGVzL3RvZG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZXJ2aWNlL3ZlcmlmeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hbGVydC9hbGVydC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90b2RvL3RvZG8uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbXByZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9kYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbnVtYmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvb2JqZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcmVnZXhwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc2V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc3ltYm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczcvcmVmbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzlEQSwwQzs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7Ozs7QUNBZ0M7QUFDVDtBQUNjOzs7Ozs7O0FDRnJDLG9DOzs7Ozs7QUNBQSxxQzs7Ozs7OztBQ0FBLElBQUksTUFBTSxHQUFHO0lBQ1gsU0FBUyxFQUFFLHVCQUF1QjtJQUNsQyxJQUFJLEVBQUUseUNBQXlDO0lBQy9DLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxtQ0FBbUM7SUFDeEUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUk7Q0FDL0IsQ0FBQztBQUVGLDRDQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDRCO0FBQ087QUFFSztBQU83RDtJQU1JO1FBQ0ksaUNBQWlDO1FBQ3pCLE1BQWMsRUFDZCxZQUEwQixFQUMxQixFQUFlLEVBQ2YsS0FBcUI7UUFIckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQVRqQyxVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFTWixDQUFDO0lBRUwsaUNBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFhQztRQVpHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLGFBQUc7WUFDdkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDZixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDcEQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDOUQsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdENMO1FBQUMsK0VBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLGlDQUFxQztZQUNyQyxpQ0FBb0M7U0FDdkMsQ0FBQzs7c0JBQUE7SUFvQ0YscUJBQUM7O0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q2lEO0FBQ1Y7QUFFcUI7QUFPN0Q7SUFLRSwyQkFDVSxNQUFjLEVBQ2QsWUFBMEIsRUFDMUIsRUFBZTtRQUZmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBTnpCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsWUFBTyxHQUFHLEtBQUssQ0FBQztJQU1aLENBQUM7SUFFTCxvQ0FBUSxHQUFSO1FBQ0csRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsb0NBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBRztZQUM1RCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDcEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBakNIO1FBQUMsK0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLGlDQUF3QztZQUN4QyxpQ0FBdUM7U0FDeEMsQ0FBQzs7eUJBQUE7SUE4QkYsd0JBQUM7O0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDeUM7QUFDd0Q7QUFHbEc7SUFFSSxtQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBSSxDQUFDO0lBRXZDLCtCQUFXLEdBQVgsVUFBWSxLQUE2QixFQUFFLEtBQTBCO1FBQ2pFLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLDJCQUEyQjtZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsOERBQThEO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFmTDtRQUFDLGdGQUFVLEVBQUU7O2lCQUFBO0lBZ0JiLGdCQUFDOztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJnRDtBQUNUO0FBRXFCO0FBTzdEO0lBTUUsdUJBQ1UsRUFBZSxFQUNmLE1BQWMsRUFDZCxZQUEwQjtRQUYxQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSnBDLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFLWixDQUFDO0lBRUwsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyxpQ0FBUyxHQUFqQjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLGFBQUc7WUFDbEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNuQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQzNCLENBQUM7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0QsK0JBQU8sR0FBUCxVQUFRLEtBQVUsRUFBRSxLQUFVO1FBQTlCLGlCQW9CQztRQW5CQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDO1FBQ3JELElBQUksR0FBRyxHQUFHO1lBQ1IsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDNUIsU0FBUyxFQUFFLEtBQUs7U0FDakI7UUFDRCxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBRztZQUMzRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDbEQsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25CLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxrQ0FBVSxHQUFWLFVBQVcsRUFBTztRQUFsQixpQkFTQztRQVJDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBRztZQUNwRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Z0JBQ3JELEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNuQixDQUFDO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELGtDQUFVLEdBQVYsVUFBVyxLQUFLLEVBQUUsS0FBSztRQUF2QixpQkFhQztRQVpDLElBQUksR0FBRyxHQUFHO1lBQ1IsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTztZQUMvQixNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUc7U0FDbEI7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBRztZQUMxRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNuQixDQUFDO1FBQ0gsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQUNELDhCQUFNLEdBQU47UUFDRSxZQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBOUVIO1FBQUMsK0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLGlDQUFvQztZQUNwQyxpQ0FBbUM7U0FDcEMsQ0FBQzs7cUJBQUE7SUEyRUYsb0JBQUM7O0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRmdDO0FBQ0Q7QUFDRjtBQUNpQjtBQUUvQyxlQUFzQixHQUFHLEVBQUUsR0FBRztJQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUNELGNBQXFCLEdBQUcsRUFBRSxHQUFHO0FBRTdCLENBQUM7QUFDRCxnQkFBdUIsR0FBRyxFQUFFLEdBQUc7SUFDM0IsNkRBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsQyxJQUFJLENBQUMsVUFBQyxHQUFHLEVBQUUsT0FBTztRQUNmLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxNQUFNLEdBQUcsa0RBQWlCLENBQUMsTUFBTSxFQUFFLHdEQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVGLElBQUksSUFBSSxHQUFHO2dCQUNQLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVM7Z0JBQzdCLFFBQVEsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQzNCLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ3JCLFFBQVEsRUFBRSxNQUFNO2FBQ25CLENBQUM7WUFDRiw2REFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7aUJBQ1osSUFBSSxDQUFDLGNBQUk7Z0JBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDMUUsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxhQUFHO2dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1lBQzlFLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsRixDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBQ0QsUUFBUTtBQUNSLGVBQXNCLEdBQUcsRUFBRSxHQUFHO0lBQzFCLDZEQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbEMsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFFLE9BQU87UUFDZixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLHlCQUF5QixFQUFFLENBQUMsQ0FBQztRQUN0RixDQUFDO1FBQ0QsSUFBSSxJQUFJLEdBQUcsa0RBQWlCLENBQUMsTUFBTSxFQUFFLHdEQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFGLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksV0FBVyxHQUFHO2dCQUNkLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRztnQkFDZixTQUFTLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQztnQkFDL0IsUUFBUSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUM7Z0JBQzdCLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDO2FBQzFCO1lBQ0QsSUFBSSxLQUFLLEdBQUcsMkZBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxDQUFDLENBQUM7UUFDbEYsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURzQjtBQUNTO0FBQ0o7QUFDTTtBQUNFO0FBQ0s7QUFFQztBQUNZO0FBQ1I7QUFDRztBQUNPO0FBQ2hCO0FBQ0Q7QUFDUTtBQUNOO0FBQ0M7QUFFMUMsTUFBTTtBQUVOLElBQU0sR0FBRyxHQUFJLHFDQUFPLEVBQUUsQ0FBQztBQUN2QixJQUFNLElBQUksR0FBRywwQ0FBUyxDQUFDLDZDQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdEQsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBRXRDOztHQUVHO0FBQ0gsRUFBRSxDQUFDLENBQUMsK0VBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzNCLG9GQUFjLEVBQUUsQ0FBQztBQUNuQixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSw0RkFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsMENBQVMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUM1QyxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUcvQixxQkFBcUI7QUFDckIsaURBQWdCLENBQUMsZ0VBQVksQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFLO0lBQzVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDVixPQUFPLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsQ0FBQyxpQ0FBaUM7UUFDdEcsTUFBTSxLQUFLLENBQUM7SUFDZCxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSDs7R0FFRztBQUNILEdBQUcsQ0FBQyxHQUFHLENBQUMseUNBQVcsRUFBRSxDQUFDLENBQUM7QUFFdkI7O0dBRUc7QUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLHlDQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaURBQWUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyx1REFBcUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSwrQ0FBYyxDQUFDLDBDQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztBQUV4RTs7R0FFRztBQUNILHdCQUF3QjtBQUV4QixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxxRUFBSSxDQUFDLENBQUM7QUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUseUVBQVEsQ0FBQyxDQUFDO0FBQzFCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHNFQUFLLENBQUMsQ0FBQztBQUV2Qjs7OztHQUlHO0FBQ0gsZUFBZSxHQUFRLEVBQUUsR0FBUTtJQUMvQixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUNsQixRQUFHO1FBQ0gsUUFBRztRQUNILFFBQVEsRUFBRSx1RUFBUztRQUNuQixPQUFPLEVBQUUsS0FBSztRQUNkLE9BQU8sRUFBRSxHQUFHO1FBQ1osVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXO1FBQzNCLFNBQVMsRUFBRSxHQUFHLENBQUMsUUFBUTtLQUN4QixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwQiwrREFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFLO0lBQ2xCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBSSxLQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFJLEtBQUssT0FBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBRUg7O0dBRUc7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLEdBQVEsRUFBRSxHQUFRO0lBQ3ZDLEdBQUcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDbEQsSUFBTSxJQUFJLEdBQUcsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUMsQ0FBQztJQUNsRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXFCLElBQU0sQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7OztBQy9HSDs7R0FFRztBQUVILG9CQUFvQjtBQUNwQixJQUFJLFlBQVksR0FBUSxtQkFBTyxDQUFDLEVBQW1CLENBQUMsQ0FBQztBQUVyRCxJQUFJLGdCQUFnQixHQUFRLG1CQUFPLENBQUMsQ0FBZSxDQUFDLENBQUM7QUFDckQsSUFBSSxLQUFLLEdBQVksS0FBSyxDQUFDO0FBRTNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ2IsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztBQUM3RCxDQUFDO0FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDYixDQUFDLFlBQVksQ0FBQyxDQUFDLG9CQUFvQixHQUFHO1FBQ2xDLGVBQWUsRUFBRSxZQUFZLENBQUMsZUFBZTtRQUM3QyxXQUFXLEVBQUUsWUFBWSxDQUFDLFdBQVc7S0FDeEM7QUFDTCxDQUFDO0FBRUQsSUFBSSxhQUFhLEdBQVEsbUJBQU8sQ0FBQyxFQUE0QyxDQUFDLENBQUM7QUFDL0UsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNSLGFBQWEsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0lBQ3RELGFBQWEsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLFdBQVc7SUFDcEQsYUFBYSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZTtBQUNoRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QmdEO0FBRUQ7QUFPaEQ7SUFJRSx3QkFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBSSxDQUFDO0lBRW5ELGlDQUFRLEdBQVI7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLGlCQUFPLElBQU0sS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBYkg7UUFBQywrRUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsaUNBQXFDO1lBQ3JDLGlDQUFvQztTQUNyQyxDQUFDOztzQkFBQTtJQVVGLHFCQUFDOztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ3QztBQU96QztJQUFBO1FBQ0UsVUFBSyxHQUFHLFlBQVksQ0FBQztJQUN2QixDQUFDO0lBUEQ7UUFBQywrRUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsaUNBQW1DO1lBQ25DLGlDQUFrQztTQUNuQyxDQUFDOztvQkFBQTtJQUdGLG1CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNURDtBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7OztBQUVxQztBQUNZO0FBQ1I7QUFDTjtBQUNlO0FBQ1A7QUFDTDtBQUM4QjtBQUNmO0FBQ1M7QUFDVDtBQUV4RDs7R0FFRztBQXdCSDtJQUFBO0lBRUEsQ0FBQztJQXpCRDtRQUFDLDhFQUFRLENBQUM7WUFDUix5QkFBeUI7WUFDekIsU0FBUyxFQUFFLENBQUUsNERBQVksQ0FBRTtZQUMzQixxQkFBcUI7WUFDckIsWUFBWSxFQUFFLENBQUUsNERBQVksRUFBRSwyRUFBYSxFQUFFLDhFQUFjLEVBQUUsdUZBQWlCLEVBQUUsK0VBQWMsQ0FBRTtZQUNoRyxPQUFPLEVBQUU7Z0JBQ1A7OzttQkFHRztnQkFDSCxtRUFBZTtnQkFDZiwyREFBVztnQkFDWDs7bUJBRUc7Z0JBQ0gsNkRBQVksQ0FBQyxPQUFPLENBQUMsK0RBQVMsQ0FBQzthQUNoQztZQUNELFNBQVMsRUFBRTtnQkFDVCxvRUFBVztnQkFDWCxxRUFBWTtnQkFDWixrRUFBUzthQUNWO1NBQ0YsQ0FBQzs7aUJBQUE7SUFHRixnQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7QUNoRHdDOzs7Ozs7Ozs7Ozs7O0FDRVk7QUFDRztBQUNTO0FBQ1Q7QUFHakQsSUFBTSxTQUFTLEdBQVc7SUFDN0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSw4RUFBYyxFQUFDO0lBQzNDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsdUZBQWlCLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSwyRUFBYSxFQUFFLFdBQVcsRUFBQyxDQUFDLDhFQUFTLENBQUMsRUFBRTtJQUVuRSw2QkFBNkI7SUFDN0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUU7Q0FDdEMsQ0FBQztBQUVGLDBEQUEwRDtBQUMxRCxvQkFBb0I7Ozs7Ozs7Ozs7QUNsQlk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FVO0FBQ2U7QUFFbkI7QUFHdEM7SUFJSSxzQkFBb0IsTUFBYztRQUp0QyxpQkFnQ0M7UUE1QnVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIMUIsWUFBTyxHQUFHLElBQUkscURBQU8sRUFBTyxDQUFDO1FBQzdCLDhCQUF5QixHQUFHLEtBQUssQ0FBQztRQUd0QyxzQ0FBc0M7UUFDdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBSztZQUN6QixFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksZ0VBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLHlDQUF5QztvQkFDekMsS0FBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztnQkFDM0MsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixjQUFjO29CQUNkLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFRLE9BQWUsRUFBRSx5QkFBaUM7UUFBakMseUNBQWlDLEdBQWpDLGlDQUFpQztRQUN0RCxJQUFJLENBQUMseUJBQXlCLEdBQUcseUJBQXlCLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sT0FBZSxFQUFFLHlCQUFpQztRQUFqQyx5Q0FBaUMsR0FBakMsaUNBQWlDO1FBQ3BELElBQUksQ0FBQyx5QkFBeUIsR0FBRyx5QkFBeUIsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELGlDQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBaENMO1FBQUMsZ0ZBQVUsRUFBRTs7b0JBQUE7SUFpQ2IsbUJBQUM7O0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEN5QztBQUM2QjtBQUl6QztBQUs5QjtJQUNFLHFCQUFtQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFbEMsZ0NBQVUsR0FBVjtRQUNFLElBQUksT0FBTyxHQUFZLElBQUksc0RBQU8sRUFBRSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsSUFBSSxPQUFPLEdBQW1CLElBQUksNkRBQWMsRUFBRSxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxHQUFhO1FBQ3ZCLElBQUksUUFBUSxHQUErQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEQsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDbEIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2xCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQztnQkFDTCxPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsSUFBSTtnQkFDVixLQUFLLEVBQUUsUUFBUTthQUNoQixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsR0FBVztRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLEdBQVcsRUFBRSxHQUFXO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxHQUFXLEVBQUUsR0FBVztRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsR0FBVztRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQXpDSDtRQUFDLGdGQUFVLEVBQUU7O21CQUFBO0lBMENiLGtCQUFDOztBQUFELENBQUM7Ozs7Ozs7O0FDbkREO0FBQUEsbUZBQW1GO0FBQ25GLDhGQUE4RjtBQUM5RiwwRUFBMEU7QUFDMUUsK0VBQStFO0FBRXhFLElBQU0sV0FBVyxHQUFHO0lBQ3pCLFVBQVUsRUFBRSxLQUFLO0NBQ2xCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEY7QUFBQTtBQUFBLHdFQUF3RTtBQUN4RSw4REFBOEQ7QUFFekI7QUFDVjtBQUNBO0FBQ0U7QUFDQztBQUNFO0FBQ0w7QUFDRjtBQUNFO0FBQ0Y7QUFDQztBQUNDO0FBQ0g7QUFDQTtBQUNJO0FBRUE7Ozs7Ozs7O0FDbkI1QjtBQUFBOzs7Ozs7Ozs7O0lBVUk7QUFDRyxJQUFNLE1BQU0sR0FBYTtJQUM1QixNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVU7Q0FDOUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNiK0I7QUFFakMsa0JBQXlCLEdBQUcsRUFBRSxHQUFHO0lBQy9CLDZEQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7UUFDbEUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNSLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELGlCQUF3QixHQUFHLEVBQUUsR0FBRztJQUM5QixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsSUFBTSxPQUFPLEdBQUcsSUFBSSw2REFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDUixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM5RCxDQUFDO1FBQ0QsNkRBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFFLElBQUk7WUFDOUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDUixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELGlCQUF3QixHQUFHLEVBQUUsR0FBRztJQUM5Qiw2REFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFFLElBQUk7UUFDbkQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNSLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELG9CQUEyQixHQUFHLEVBQUUsR0FBRztJQUNqQyw2REFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFFLElBQUk7UUFDbEQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNSLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ1YsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUFBLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxvQkFBMkIsR0FBRyxFQUFFLEdBQUc7SUFDakMsNkRBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNO1FBQ3hHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDUixNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDMUQsQ0FBQztJQUNILENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7Ozs7QUMzRG1DO0FBRXBDLElBQU0sTUFBTSxHQUFHLGdEQUFlLENBQUM7QUFFL0IsSUFBTSxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDNUIsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzVDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUM5QyxPQUFPLEVBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDMUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0NBQzFELENBQUMsQ0FBQztBQUVILDRDQUFlLCtDQUFjLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDWGQ7QUFDTDtBQUMvQixJQUFJLFVBQVUsR0FBRyxJQUFJLGdEQUFNLENBQUM7SUFDeEIsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUMzQixRQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO0lBQ3hCLEtBQUssRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQ3BELFNBQVMsRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBQztJQUM1QyxRQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO0NBQzNCLENBQUMsQ0FBQztBQUNILDRDQUFlLCtDQUFjLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ1RoQjtBQUVtQjtBQUVyRCxJQUFJLE1BQU0sR0FBbUIsK0NBQWMsRUFBRSxDQUFDO0FBRTlDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLGdFQUFvQixDQUFDLENBQUM7QUFFbEQsNENBQWUsTUFBTSxDQUFDOzs7Ozs7Ozs7OztBQ1JZO0FBRW1CO0FBRXJELElBQUksTUFBTSxHQUFtQiwrQ0FBYyxFQUFFLENBQUM7QUFFOUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsaUVBQXFCLENBQUMsQ0FBQztBQUV0RCw0Q0FBZSxNQUFNLENBQUM7Ozs7Ozs7Ozs7O0FDUlk7QUFFbUI7QUFFckQsSUFBSSxNQUFNLEdBQW1CLCtDQUFjLEVBQUUsQ0FBQztBQUU5QyxnQkFBZ0I7QUFDaEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsbUVBQXVCLENBQUMsQ0FBQztBQUV2RCx1QkFBdUI7QUFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsa0VBQXNCLENBQUMsQ0FBQztBQUV0RCxpQkFBaUI7QUFDakIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsa0VBQXNCLENBQUMsQ0FBQztBQUVuRCx3QkFBd0I7QUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMscUVBQXlCLENBQUMsQ0FBQztBQUU1RCxhQUFhO0FBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMscUVBQXlCLENBQUMsQ0FBQztBQUVyRCw0Q0FBZSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNyQmE7QUFDTDtBQUc5QixxQkFBNEIsSUFBWTtJQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixJQUFJLEtBQUssR0FBRyxrREFBUSxDQUFDLElBQUksRUFBRSx3REFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO0lBQzVGLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVELHFCQUE0QixLQUFhO0lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLG9EQUFVLENBQUMsS0FBSyxFQUFFLHdEQUFNLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRyxFQUFFLFdBQVc7WUFDbkQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDUixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7OztBQ3BCRCxtQjs7Ozs7O0FDQUEsbUI7Ozs7OztBQ0FBLG1COzs7Ozs7QUNBQSxtQjs7Ozs7O0FDQUEsMEJBQTBCLDJCQUEyQixLQUFLLGNBQWMsc0NBQXNDLE9BQU8saUJBQWlCLG1DQUFtQyxPQUFPLEM7Ozs7OztBQ0FoTCxzREFBc0QsMEdBQTBHLEtBQUssY0FBYyxPOzs7Ozs7QUNBbkwsZ0NBQWdDLE9BQU8sOEM7Ozs7OztBQ0F2Qyx1VkFBdVYsMkNBQTJDLG9ZQUFvWSw4Q0FBOEMsK2lCQUEraUIsa2xDOzs7Ozs7QUNBbjJDLDJXQUEyVywrQ0FBK0Msa2FBQWthLDhDQUE4QywyWkFBMlosMkNBQTJDLHVZQUF1WSw4Q0FBOEMsa2pCQUFrakIsNmtDOzs7Ozs7QUNBdnhFLDZNQUE2TSxxREFBcUQsMnVCQUEydUIsdTRDQUF1NEMsMEJBQTBCLEtBQUssZUFBZSwyUzs7Ozs7O0FDQWw2RSw4Qzs7Ozs7O0FDQUEsMkM7Ozs7OztBQ0FBLDBDOzs7Ozs7QUNBQSxvRDs7Ozs7O0FDQUEsdUU7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSx5RDs7Ozs7O0FDQUEsd0M7Ozs7OztBQ0FBLHdDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsNkM7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsb0Q7Ozs7OztBQ0FBLGtEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxtQzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSx5Qzs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoic2VydmVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb3J5IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vcnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3MSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTZkOWVmZWY0Y2E1YWI5ZWI2YzMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vYWxlcnQuc2VydmljZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vaHR0cCc7XHJcbmV4cG9ydCAqIGZyb20gICcuL2F1dGhHdWFyZC5zZXJ2aWNlJztcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9uZ29vc2VcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJsZXQgY29uZmlnID0ge1xyXG4gIGp3dFNlY3JldDogJ3N1cGVyZHVwZXJzZWNyZXRvZlJFSScsXHJcbiAgc2FsdDogJ0RKRVcqMzI0S05BU2NzYWZBd2U5ODd5MmVAI1JXb2lod2Vmbjk4IScsXHJcbiAgbW9uZ29VUkw6IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIHx8ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L3VuZ3RvZG8nLFxyXG4gIHBvcnQ6IHByb2Nlc3MuZW52LlBPUlQgfHwgODAwMCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2NvbmZpZy50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlLCBIdHRwU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG1vZGVsOiBhbnkgPSB7fTtcbiAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgcmV0dXJuVXJsOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgLy8gcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgaHM6IEh0dHBTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7IFxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJykpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3RvZG8nXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ocy5Qb3N0UmVxdWVzdCgnL2FwaS9sb2dpbicsIHRoaXMubW9kZWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKHJlcy5lcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoJ0xvZ2luIHN1Y2Nlc3NmdWwnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFVzZXInLCBKU09OLnN0cmluZ2lmeShyZXMuZGF0YSkpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3RvZG8nXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UsIEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcmVnaXN0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIG1vZGVsOiBhbnkgPSB7fTtcbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSxcbiAgICBwcml2YXRlIGhzOiBIdHRwU2VydmljZVxuICApIHsgfVxuICBcbiAgbmdPbkluaXQoKSB7XG4gICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdG9kbyddKTtcbiAgICAgICAgfVxuICB9XG4gIHJlZ2lzdGVyKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5ocy5Qb3N0UmVxdWVzdCgnL2FwaS9yZWdpc3RlcicsIHRoaXMubW9kZWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgaWYgKCFyZXMuc3VjY2Vzcykge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKHJlcy5lcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdWNjZXNzKCdSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCcsIHRydWUpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJykpIHtcclxuICAgICAgICAgICAgLy8gbG9nZ2VkIGluIHNvIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3RvZG8nXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbm90IGxvZ2dlZCBpbiBzbyByZWRpcmVjdCB0byBsb2dpbiBwYWdlIHdpdGggdGhlIHJldHVybiB1cmxcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NlcnZpY2VzL2F1dGhHdWFyZC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEh0dHBTZXJ2aWNlLCBBbGVydFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10b2RvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RvZG8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90b2RvLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb2RvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB0b2RvczogYW55O1xuICB0b2RvTGlzdDogYW55O1xuICBjdXJyZW50VXNlcjogYW55O1xuICBsb2FkaW5nID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHM6IEh0dHBTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpKTtcbiAgICB0aGlzLmxvYWRUb2RvcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkVG9kb3MoKSB7XG4gICAgdGhpcy5ocy5HZXRSZXF1ZXN0KCcvYXBpL3RvZG8vJyArIHRoaXMuY3VycmVudFVzZXIuaWQpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgaWYgKCFyZXMuc3VjY2Vzcykge1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b2RvTGlzdCA9IHJlcy5kYXRhO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgYWRkVG9kbyh2YWxpZDogYW55LCB2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdmFsaWQgfHwgKHZhbHVlLnRvZG9UYXNrID09PSB1bmRlZmluZWQpKSByZXR1cm47XG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIHRvZG9UYXNrOiB2YWx1ZS50b2RvVGFzayxcbiAgICAgIHVzZXJfaWQ6IHRoaXMuY3VycmVudFVzZXIuaWQsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfVxuICAgIHZhbHVlLnRvZG9UYXNrID0gJyc7XG4gICAgdGhpcy5ocy5Qb3N0UmVxdWVzdCgnL2FwaS90b2RvJywgeyB0b2RvOiBvYmogfSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBpZiAoIXJlcy5zdWNjZXNzKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihyZXMuZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoJ1RvZG8gYWRkIFN1Y2Nlc3NmdWwhJyk7XG4gICAgICAgIHRoaXMubG9hZFRvZG9zKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZGVsZXRlVG9kbyhpZDogYW55KSB7XG4gICAgdGhpcy5ocy5EZWxldGVSZXF1ZXN0KCcvYXBpL3RvZG8vJyArIGlkKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGlmICghcmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IocmVzLmVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN1Y2Nlc3MoJ1RvZG8gZGVsZXRlIFN1Y2Nlc3NmdWwhJyk7XG4gICAgICAgIHRoaXMubG9hZFRvZG9zKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICB1cGRhdGVUb2RvKGV2ZW50LCB2YWx1ZSkge1xuICAgIGxldCBvYmogPSB7XG4gICAgICBjb21wbGV0ZWQ6IGV2ZW50LnRhcmdldC5jaGVja2VkLFxuICAgICAgdG9kb0lkOiB2YWx1ZS5faWRcbiAgICB9XG4gICAgdGhpcy5ocy5QdXRSZXF1ZXN0KCcvYXBpL3RvZG8nLCB7IHRvZG86IG9iaiB9KS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGlmICghcmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IocmVzLmVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9hZFRvZG9zKCk7XG4gICAgICB9XG4gICAgfSlcblxuICB9XG4gIGxvZ291dCgpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VycmVudFVzZXInKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC90b2RvL3RvZG8uY29tcG9uZW50LnRzIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xyXG5pbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgeyBjcmVhdGVUb2tlbiB9IGZyb20gJy4uL3NlcnZpY2UvdmVyaWZ5JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmRleChyZXEsIHJlcykge1xyXG4gICAgcmVzLnNlbmQoJ1VzZXIgYXBpIGlzIHdvcmtpbmcgbm93Jyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3cocmVxLCByZXMpIHtcclxuXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShyZXEsIHJlcykge1xyXG4gICAgVXNlci5maW5kT25lKHsgZW1haWw6IHJlcS5ib2R5LmVtYWlsIH0pXHJcbiAgICAgICAgLmV4ZWMoKGVyciwgdXNlck9iaikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6ICdDb250YWN0IHN1cHBvcnQnIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVzZXJPYmogPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHB3SGFzaCA9IGNyeXB0by5jcmVhdGVIbWFjKCdzaGExJywgY29uZmlnLnNhbHQpLnVwZGF0ZShyZXEuYm9keS5wYXNzd29yZCkuZGlnZXN0KCdoZXgnKTtcclxuICAgICAgICAgICAgICAgIGxldCB1c2VyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogcmVxLmJvZHkuZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiByZXEuYm9keS5sYXN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHB3SGFzaFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIFVzZXIuY3JlYXRlKHVzZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6ICdVc2VyIGNyZWF0ZWQnLCBlcnJvcjogbnVsbCB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdlcnInLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6ICdDb250YWN0IHN1cHBvcnQnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIGRhdGE6ICdVc2VyIGFscmVhZHkgZXhpc3RzJywgZXJyb3I6IG51bGwgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufVxyXG4vLyBsb2dpblxyXG5leHBvcnQgZnVuY3Rpb24gbG9naW4ocmVxLCByZXMpIHtcclxuICAgIFVzZXIuZmluZE9uZSh7IGVtYWlsOiByZXEuYm9keS5lbWFpbCB9KVxyXG4gICAgICAgIC5leGVjKChlcnIsIHVzZXJPYmopID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiBlcnIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXVzZXJPYmopIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ0VtYWlsIGFkZHJlc3Mgbm90IGZvdW5kJyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgaGFzaCA9IGNyeXB0by5jcmVhdGVIbWFjKCdzaGExJywgY29uZmlnLnNhbHQpLnVwZGF0ZShyZXEuYm9keS5wYXNzd29yZCkuZGlnZXN0KCdoZXgnKTtcclxuICAgICAgICAgICAgaWYgKGhhc2ggPT0gdXNlck9ialsncGFzc3dvcmQnXSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRVc2VyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB1c2VyT2JqLl9pZCxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IHVzZXJPYmpbJ2ZpcnN0TmFtZSddLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiB1c2VyT2JqWydsYXN0TmFtZSddLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB1c2VyT2JqWydlbWFpbCddLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHRva2VuID0gY3JlYXRlVG9rZW4oY3VycmVudFVzZXIpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFVzZXJbJ3Rva2VuJ10gPSB0b2tlbjtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGN1cnJlbnRVc2VyLCBlcnJvcjogbnVsbCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ0luY29ycmVjdCBQYXNzd29yZCEnIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9jb250cm9sbGVycy91c2VyLnRzIiwiLyoqXHJcbiAqIHRoZSBwb2x5ZmlsbHMgbXVzdCBiZSB0aGUgZmlyc3QgdGhpbmcgaW1wb3J0ZWRcclxuICovXHJcbmltcG9ydCAnLi9wb2x5ZmlsbHMudHMnO1xyXG5pbXBvcnQgJy4vX18yLjEuMS53b3JrYXJvdW5kLnRzJzsgLy8gdGVtcG9yYXJ5IHVudGlsIDIuMS4xIHRoaW5ncyBhcmUgcGF0Y2hlZCBpbiBDb3JlXHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcbmltcG9ydCAqIGFzIG1vcmdhbiBmcm9tICdtb3JnYW4nO1xyXG5pbXBvcnQgKiBhcyBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XHJcbmltcG9ydCB7IGNyZWF0ZUVuZ2luZSB9IGZyb20gJ2FuZ3VsYXIyLWV4cHJlc3MtZW5naW5lJztcclxuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm5vZGUubW9kdWxlJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vc2VydmVyLnJvdXRlcyc7XHJcbmltcG9ydCB0b2RvIGZyb20gJy4vc2VydmVyL3JvdXRlcy90b2RvJztcclxuaW1wb3J0IHJlZ2lzdGVyIGZyb20gJy4vc2VydmVyL3JvdXRlcy9yZWdpc3Rlcic7XHJcbmltcG9ydCBsb2dpbiBmcm9tICcuL3NlcnZlci9yb3V0ZXMvbG9naW4nO1xyXG5pbXBvcnQgc2VydmVyQ29uZmlnIGZyb20gJy4vc2VydmVyL2NvbmZpZyc7XHJcblxyXG4vLyBBcHBcclxuXHJcbmNvbnN0IGFwcCAgPSBleHByZXNzKCk7XHJcbmNvbnN0IFJPT1QgPSBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJykpO1xyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MjAwO1xyXG5cclxuLyoqXHJcbiAqIGVuYWJsZSBwcm9kIG1vZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzXHJcbiAqL1xyXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xyXG4gIGVuYWJsZVByb2RNb2RlKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHByZXNzIFZpZXdcclxuICovXHJcbmFwcC5lbmdpbmUoJy5odG1sJywgY3JlYXRlRW5naW5lKHt9KSk7XHJcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKFJPT1QsICdjbGllbnQnKSk7XHJcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2h0bWwnKTtcclxuXHJcblxyXG4vLyBNb25nb0RCIENvbm5lY3Rpb25cclxubW9uZ29vc2UuY29ubmVjdChzZXJ2ZXJDb25maWcubW9uZ29VUkwsIChlcnJvcikgPT4ge1xyXG4gIGlmIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignUGxlYXNlIG1ha2Ugc3VyZSBNb25nb2RiIGlzIGluc3RhbGxlZCBhbmQgcnVubmluZyEnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIEVuYWJsZSBjb21wcmVzc2lvblxyXG4gKi9cclxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcclxuXHJcbi8qKlxyXG4gKiBzZXJ2ZSBzdGF0aWMgZmlsZXNcclxuICovXHJcbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKHsgbGltaXQ6ICcyMG1iJyB9KSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgbGltaXQ6ICcyMG1iJywgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcclxuYXBwLnVzZSgnLycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihST09ULCAnY2xpZW50JyksIHtpbmRleDogZmFsc2V9KSk7XHJcblxyXG4vKipcclxuICogcGxhY2UgeW91ciBhcGkgcm91dGVzIGhlcmVcclxuICovXHJcbi8vIGFwcC51c2UoJy9hcGknLCBhcGkpO1xyXG5cclxuYXBwLnVzZSgnL2FwaScsIHRvZG8pO1xyXG5hcHAudXNlKCcvYXBpJywgcmVnaXN0ZXIpO1xyXG5hcHAudXNlKCcvYXBpJywgbG9naW4pO1xyXG5cclxuLyoqXHJcbiAqIGJvb3RzdHJhcCB1bml2ZXJzYWwgYXBwXHJcbiAqIEBwYXJhbSByZXFcclxuICogQHBhcmFtIHJlc1xyXG4gKi9cclxuZnVuY3Rpb24gbmdBcHAocmVxOiBhbnksIHJlczogYW55KSB7XHJcbiAgcmVzLnJlbmRlcignaW5kZXgnLCB7XHJcbiAgICByZXEsXHJcbiAgICByZXMsXHJcbiAgICBuZ01vZHVsZTogQXBwTW9kdWxlLFxyXG4gICAgcHJlYm9vdDogZmFsc2UsXHJcbiAgICBiYXNlVXJsOiAnLycsXHJcbiAgICByZXF1ZXN0VXJsOiByZXEub3JpZ2luYWxVcmwsXHJcbiAgICBvcmlnaW5Vcmw6IHJlcS5ob3N0bmFtZVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogdXNlIHVuaXZlcnNhbCBmb3Igc3BlY2lmaWMgcm91dGVzXHJcbiAqL1xyXG5hcHAuZ2V0KCcvJywgbmdBcHApO1xyXG5yb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XHJcbiAgYXBwLmdldChgLyR7cm91dGV9YCwgbmdBcHApO1xyXG4gIGFwcC5nZXQoYC8ke3JvdXRlfS8qYCwgbmdBcHApO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBpZiB5b3Ugd2FudCB0byB1c2UgdW5pdmVyc2FsIGZvciBhbGwgcm91dGVzLCB5b3UgY2FuIHVzZSB0aGUgJyonIHdpbGRjYXJkXHJcbiAqL1xyXG5cclxuYXBwLmdldCgnKicsIGZ1bmN0aW9uIChyZXE6IGFueSwgcmVzOiBhbnkpIHtcclxuICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gIGNvbnN0IHBvam8gPSB7c3RhdHVzOiA0MDQsIG1lc3NhZ2U6ICdObyBDb250ZW50J307XHJcbiAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHBvam8sIG51bGwsIDIpO1xyXG4gIHJlcy5zdGF0dXMoNDA0KS5zZW5kKGpzb24pO1xyXG59KTtcclxuXHJcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnRzIiwiLypcclxuICogVEhJUyBJUyBURU1QT1JBUlkgVE8gUEFUQ0ggMi4xLjErIENvcmUgYnVnc1xyXG4gKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlICovXHJcbmxldCBfX2NvbXBpbGVyX186IGFueSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbXBpbGVyJyk7XHJcbmltcG9ydCB7IF9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxudmFyIF9fY29yZV9wcml2YXRlX186IGFueSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxubGV0IHBhdGNoOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG5pZiAoIV9fY29yZV9wcml2YXRlX18uaGFzT3duUHJvcGVydHkoJ1ZpZXdVdGlscycpKSB7XHJcbiAgICBwYXRjaCA9IHRydWU7XHJcbiAgICBfX2NvcmVfcHJpdmF0ZV9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX18udmlld191dGlscztcclxufVxyXG5cclxuaWYgKCFfX2NvbXBpbGVyX18uX19jb21waWxlcl9wcml2YXRlX18pIHtcclxuICAgIHBhdGNoID0gdHJ1ZTtcclxuICAgIChfX2NvbXBpbGVyX18pLl9fY29tcGlsZXJfcHJpdmF0ZV9fID0ge1xyXG4gICAgICAgIFNlbGVjdG9yTWF0Y2hlcjogX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlcixcclxuICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBfX3VuaXZlcnNhbF9fOiBhbnkgPSByZXF1aXJlKCdhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX18nKTtcclxuaWYgKHBhdGNoKSB7XHJcbiAgICBfX3VuaXZlcnNhbF9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX18udmlld191dGlscztcclxuICAgIF9fdW5pdmVyc2FsX18uQ3NzU2VsZWN0b3IgPSBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcclxuICAgIF9fdW5pdmVyc2FsX18uU2VsZWN0b3JNYXRjaGVyID0gX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlclxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fXzIuMS4xLndvcmthcm91bmQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FsZXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FsZXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWxlcnQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50e1xuXG4gIG1lc3NhZ2U6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFsZXJ0U2VydmljZS5nZXRNZXNzYWdlKCkuc3Vic2NyaWJlKG1lc3NhZ2UgPT4geyB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlOyB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICB0aXRsZSA9ICdhcHAgd29ya3MhJztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgYW5kIGBtYWluLmJyb3dzZXIudHNgIGFyZSBpZGVudGljYWwsIGF0IHRoZSBtb21lbnQoISlcclxuICogQnkgc3BsaXR0aW5nIHRoZXNlLCB5b3UncmUgYWJsZSB0byBjcmVhdGUgbG9naWMsIGltcG9ydHMsIGV0YyB0aGF0IGFyZSBcIlBsYXRmb3JtXCIgc3BlY2lmaWMuXHJcbiAqIElmIHlvdSB3YW50IHlvdXIgY29kZSB0byBiZSBjb21wbGV0ZWx5IFVuaXZlcnNhbCBhbmQgZG9uJ3QgbmVlZCB0aGF0XHJcbiAqIFlvdSBjYW4gYWxzbyBqdXN0IGhhdmUgMSBmaWxlLCB0aGF0IGlzIGltcG9ydGVkIGludG8gYm90aFxyXG4gKiBjbGllbnQudHMgYW5kIHNlcnZlci50c1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHsgVG9kb0NvbXBvbmVudCB9IGZyb20gJy4vdG9kby90b2RvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IGFwcFJvdXRlcyB9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSwgQWxlcnRTZXJ2aWNlLCBBdXRoR3VhcmQgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQvYWxlcnQuY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiBUb3AtbGV2ZWwgTmdNb2R1bGUgXCJjb250YWluZXJcIlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICAvKiogUm9vdCBBcHAgQ29tcG9uZW50ICovXHJcbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxyXG4gIC8qKiBPdXIgQ29tcG9uZW50cyAqL1xyXG4gIGRlY2xhcmF0aW9uczogWyBBcHBDb21wb25lbnQsIFRvZG9Db21wb25lbnQsIExvZ2luQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudCwgQWxlcnRDb21wb25lbnQgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICAvKipcclxuICAgICAqIE5PVEU6IE5lZWRzIHRvIGJlIHlvdXIgZmlyc3QgaW1wb3J0ICghKVxyXG4gICAgICogTm9kZU1vZHVsZSwgTm9kZUh0dHBNb2R1bGUsIE5vZGVKc29ucE1vZHVsZSBhcmUgaW5jbHVkZWRcclxuICAgICAqL1xyXG4gICAgVW5pdmVyc2FsTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICAvKipcclxuICAgICAqIHVzaW5nIHJvdXRlc1xyXG4gICAgICovXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEh0dHBTZXJ2aWNlLFxyXG4gICAgQWxlcnRTZXJ2aWNlLFxyXG4gICAgQXV0aEd1YXJkXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwiZXhwb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLm5vZGUubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgVG9kb0NvbXBvbmVudCB9IGZyb20gJy4vdG9kby90b2RvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoR3VhcmQuc2VydmljZSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiAnbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50fSxcclxuICAgIHsgcGF0aDogJ3JlZ2lzdGVyJywgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAndG9kbycsIGNvbXBvbmVudDogVG9kb0NvbXBvbmVudCwgY2FuQWN0aXZhdGU6W0F1dGhHdWFyZF0gfSxcclxuXHJcbiAgICAvLyBvdGhlcndpc2UgcmVkaXJlY3QgdG8gaG9tZVxyXG4gICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnbG9naW4nIH1cclxuXTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCByb3V0aW5nID0gUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKTtcclxuLy8gZXhwb3J0IGFwcFJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5yb3V0aW5nLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9hcHAuY29tcG9uZW50JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFsZXJ0U2VydmljZSB7XG4gICAgcHJpdmF0ZSBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHByaXZhdGUga2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICAvLyBjbGVhciBhbGVydCBtZXNzYWdlIG9uIHJvdXRlIGNoYW5nZVxuICAgICAgICByb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5rZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkga2VlcCBmb3IgYSBzaW5nbGUgbG9jYXRpb24gY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIGFsZXJ0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMua2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSA9IGtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2U7XG4gICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KHsgdHlwZTogJ3N1Y2Nlc3MnLCB0ZXh0OiBtZXNzYWdlIH0pO1xuICAgIH1cblxuICAgIGVycm9yKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMua2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSA9IGtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2U7XG4gICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KHsgdHlwZTogJ2Vycm9yJywgdGV4dDogbWVzc2FnZSB9KTtcbiAgICB9XG5cbiAgICBnZXRNZXNzYWdlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvYWxlcnQuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zLCBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5cclxuZXhwb3J0IHR5cGUgY3VzdG9tU2VydmVyUmVzcG9uc2VPYmplY3QgPSB7ICdzdWNjZXNzJzogYm9vbGVhbiwgJ2RhdGEnOiBhbnksICdlcnJvcic6IGFueSB9O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgR2V0SGVhZGVycygpIHtcclxuICAgIGxldCBoZWFkZXJzOiBIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgbGV0IG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKCk7XHJcbiAgICBvcHRpb25zLmhlYWRlcnMgPSBoZWFkZXJzO1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gXHJcbiAgUmVzcG9uc2VNYXAocmVzOiBSZXNwb25zZSkge1xyXG4gICAgbGV0IHJlc3BvbnNlOiBjdXN0b21TZXJ2ZXJSZXNwb25zZU9iamVjdCA9IHJlcy5qc29uKCk7XHJcbiAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ3N1Y2Nlc3MnKSkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmhhc093blByb3BlcnR5KCdhY2Nlc3NfdG9rZW4nKSB8fCByZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnaGVhZGxpbmUnKSkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgZXJyb3I6IHJlc3BvbnNlXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBHZXRSZXF1ZXN0KHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxjdXN0b21TZXJ2ZXJSZXNwb25zZU9iamVjdD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKS5tYXAodGhpcy5SZXNwb25zZU1hcCk7XHJcbiAgfVxyXG5cclxuICBQb3N0UmVxdWVzdCh1cmw6IHN0cmluZywgb2JqOiBPYmplY3QpOiBPYnNlcnZhYmxlPGN1c3RvbVNlcnZlclJlc3BvbnNlT2JqZWN0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBvYmosIHRoaXMuR2V0SGVhZGVycygpKS5tYXAodGhpcy5SZXNwb25zZU1hcCk7XHJcbiAgfVxyXG4gIFxyXG4gIFB1dFJlcXVlc3QodXJsOiBzdHJpbmcsIG9iajogT2JqZWN0KTogT2JzZXJ2YWJsZTxjdXN0b21TZXJ2ZXJSZXNwb25zZU9iamVjdD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBvYmosIHRoaXMuR2V0SGVhZGVycygpKS5tYXAodGhpcy5SZXNwb25zZU1hcCk7XHJcbiAgfVxyXG5cclxuICBEZWxldGVSZXF1ZXN0KHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxjdXN0b21TZXJ2ZXJSZXNwb25zZU9iamVjdD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsKS5tYXAoKHRoaXMuUmVzcG9uc2VNYXApKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy9odHRwLnRzIiwiLy8gVGhlIGZpbGUgY29udGVudHMgZm9yIHRoZSBjdXJyZW50IGVudmlyb25tZW50IHdpbGwgb3ZlcndyaXRlIHRoZXNlIGR1cmluZyBidWlsZC5cclxuLy8gVGhlIGJ1aWxkIHN5c3RlbSBkZWZhdWx0cyB0byB0aGUgZGV2IGVudmlyb25tZW50IHdoaWNoIHVzZXMgYGVudmlyb25tZW50LnRzYCwgYnV0IGlmIHlvdSBkb1xyXG4vLyBgdW5nIGJ1aWxkIC0tZW52PXByb2RgIHRoZW4gYGVudmlyb25tZW50LnByb2QudHNgIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxyXG4vLyBUaGUgbGlzdCBvZiB3aGljaCBlbnYgbWFwcyB0byB3aGljaCBmaWxlIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci1jbGkuanNvbmAuXHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XHJcbiAgcHJvZHVjdGlvbjogZmFsc2VcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIi8vIFRoaXMgZmlsZSBpbmNsdWRlcyBwb2x5ZmlsbHMgbmVlZGVkIGJ5IEFuZ3VsYXIgMiBhbmQgaXMgbG9hZGVkIGJlZm9yZVxyXG4vLyB0aGUgYXBwLiBZb3UgY2FuIGFkZCB5b3VyIG93biBleHRyYSBwb2x5ZmlsbHMgdG8gdGhpcyBmaWxlLlxyXG5cclxuaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9zeW1ib2wnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L29iamVjdCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvZnVuY3Rpb24nO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWludCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtZmxvYXQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L251bWJlcic7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvbWF0aCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvc3RyaW5nJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9kYXRlJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9hcnJheSc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvcmVnZXhwJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXAnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3NldCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvcmVmbGVjdCc7XHJcblxyXG5pbXBvcnQgJ2NvcmUtanMvZXM3L3JlZmxlY3QnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcG9seWZpbGxzLnRzIiwiLyoqXHJcbiAqIFNlcnZlci1zaWRlIHJvdXRlcy4gT25seSB0aGUgbGlzdGVkIHJvdXRlcyBzdXBwb3J0IGh0bWw1cHVzaHN0YXRlLlxyXG4gKiBIYXMgdG8gbWF0Y2ggY2xpZW50IHNpZGUgcm91dGVzLlxyXG4gKlxyXG4gKiBJbmRleCAoLykgcm91dGUgZG9lcyBub3QgaGF2ZSB0byBiZSBsaXN0ZWQgaGVyZS5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogZXhwb3J0IGNvbnN0IHJvdXRlczogc3RyaW5nW10gPSBbXHJcbiAqICdob21lJywgJ2Fib3V0J1xyXG4gKiBdO1xyXG4gKiovXHJcbmV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgJ3RvZG8nLCAnbG9naW4nLCAncmVnaXN0ZXInXHJcbl07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIucm91dGVzLnRzIiwiaW1wb3J0IFRvZG8gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9zKHJlcSwgcmVzKSB7XHJcbiAgVG9kby5maW5kKHsgdXNlcl9pZDogcmVxLnBhcmFtcy5pZCB9KS5zb3J0KCctZGF0ZScpLmV4ZWMoKGVyciwgVG9kb3MpID0+IHtcclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiBlcnIgfSk7XHJcbiAgICB9XHJcbiAgICByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IFRvZG9zLCBlcnJvcjogbnVsbCB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG8ocmVxLCByZXMpIHtcclxuICBpZiAoIXJlcS5ib2R5LnRvZG8udG9kb1Rhc2spIHtcclxuICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogJ01pc3NpbmcgdG9kbyB0YXNrIScgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8ocmVxLmJvZHkudG9kbyk7XHJcbiAgbmV3VG9kby5zYXZlKChlcnIsIHNhdmVkKSA9PiB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogZXJyIH0pO1xyXG4gICAgfVxyXG4gICAgVG9kby5maW5kT25lKHsgX2lkOiBzYXZlZC5faWQgfSkuZXhlYygoZXJyLCB0b2RvKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6IGVyciB9KTtcclxuICAgICAgfVxyXG4gICAgICByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHRvZG8sIGVycm9yOiBudWxsIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvKHJlcSwgcmVzKSB7XHJcbiAgVG9kby5maW5kT25lKHsgX2lkOiByZXEucGFyYW1zLl9pZCB9KS5leGVjKChlcnIsIHRvZG8pID0+IHtcclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiBlcnIgfSk7XHJcbiAgICB9XHJcbiAgICByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHRvZG8sIGVycm9yOiBudWxsIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVG9kbyhyZXEsIHJlcykge1xyXG4gIFRvZG8uZmluZE9uZSh7IF9pZDogcmVxLnBhcmFtcy5pZCB9KS5leGVjKChlcnIsIHRvZG8pID0+IHtcclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiBlcnIgfSk7XHJcbiAgICB9XHJcbiAgICB0b2RvLnJlbW92ZSgoKSA9PiB7XHJcbiAgICAgIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbnVsbCwgZXJyb3I6IG51bGwgfSk7O1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb2RvKHJlcSwgcmVzKSB7XHJcbiAgVG9kby5maW5kQnlJZEFuZFVwZGF0ZSh7IF9pZDogcmVxLmJvZHkudG9kby50b2RvSWQgfSwgeyBjb21wbGV0ZWQ6IHJlcS5ib2R5LnRvZG8uY29tcGxldGVkIH0sIChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgaWYgKGVycikge1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6ICdUb2RvIG5vdCBmb3VuZCcgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgIHJlcy5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzdWx0LCBlcnJvcjogbnVsbCB9KTtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvY29udHJvbGxlcnMvdG9kby50cyIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuXHJcbmNvbnN0IHRvZG9TY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICB0b2RvVGFzazogeyB0eXBlOiAnU3RyaW5nJywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICBjb21wbGV0ZWQ6IHsgdHlwZTogJ0Jvb2xlYW4nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIHVzZXJfaWQ6eyB0eXBlOiAnU3RyaW5nJywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICBkYXRlOiB7IHR5cGU6ICdEYXRlJywgZGVmYXVsdDogRGF0ZS5ub3csIHJlcXVpcmVkOiB0cnVlIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoJ1RvZG8nLCB0b2RvU2NoZW1hKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9tb2RlbHMvdG9kby50cyIsImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHtTY2hlbWF9IGZyb20gJ21vbmdvb3NlJztcclxubGV0IHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAgIGZpcnN0TmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGxhc3ROYW1lOiB7dHlwZTogU3RyaW5nfSxcclxuICAgIGVtYWlsOiB7dHlwZTogU3RyaW5nLCBsb3dlcmNhc2U6IHRydWUsIHVuaXF1ZTogdHJ1ZX0sXHJcbiAgICBjcmVhdGVkQXQ6IHt0eXBlOiBEYXRlLCBkZWZhdWx0OiBEYXRlLm5vdygpfSxcclxuICAgIHBhc3N3b3JkOiB7dHlwZTogU3RyaW5nfVxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL21vZGVscy91c2VyLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCAqIGFzIFVzZXJDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL3VzZXInO1xyXG5cclxubGV0IHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxucm91dGVyLnJvdXRlKCcvbG9naW4nKS5wb3N0KFVzZXJDb250cm9sbGVyLmxvZ2luKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9yb3V0ZXMvbG9naW4udHMiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0ICogYXMgVXNlckNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvdXNlcic7XHJcblxyXG5sZXQgcm91dGVyOiBleHByZXNzLlJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIucm91dGUoJy9yZWdpc3RlcicpLnBvc3QoVXNlckNvbnRyb2xsZXIuY3JlYXRlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9yb3V0ZXMvcmVnaXN0ZXIudHMiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5cclxuaW1wb3J0ICogYXMgVG9kb0NvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvdG9kbyc7XHJcblxyXG5sZXQgcm91dGVyOiBleHByZXNzLlJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG4vLyBHZXQgYWxsIFBvc3RzXHJcbnJvdXRlci5yb3V0ZSgnL3RvZG8vOmlkJykuZ2V0KFRvZG9Db250cm9sbGVyLmdldFRvZG9zKTtcclxuXHJcbi8vIEdldCBvbmUgcG9zdCBieSBjdWlkXHJcbnJvdXRlci5yb3V0ZSgnL3RvZG8vOmlkJykuZ2V0KFRvZG9Db250cm9sbGVyLmdldFRvZG8pO1xyXG5cclxuLy8gQWRkIGEgbmV3IFBvc3Rcclxucm91dGVyLnJvdXRlKCcvdG9kbycpLnBvc3QoVG9kb0NvbnRyb2xsZXIuYWRkVG9kbyk7XHJcblxyXG4vLyBEZWxldGUgYSBwb3N0IGJ5IGN1aWRcclxucm91dGVyLnJvdXRlKCcvdG9kby86aWQnKS5kZWxldGUoVG9kb0NvbnRyb2xsZXIuZGVsZXRlVG9kbyk7XHJcblxyXG4vL1VwZGF0ZSBkYXRhXHJcbnJvdXRlci5yb3V0ZSgnL3RvZG8nKS5wdXQoVG9kb0NvbnRyb2xsZXIudXBkYXRlVG9kbyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvcm91dGVzL3RvZG8udHMiLCJpbXBvcnQgKiBhcyBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2tlbih1c2VyOiBPYmplY3QpIHtcclxuICAgIGNvbnNvbGUubG9nKCd1c2VyIE9iaicsIHVzZXIpO1xyXG4gICAgbGV0IHRva2VuID0gand0LnNpZ24odXNlciwgY29uZmlnLmp3dFNlY3JldCwgeyBleHBpcmVzSW46IFwiOTAgZGF5c1wiIH0pOyAvL2V4cGlyZXMgaW4gOTAgZGF5c1xyXG4gICAgcmV0dXJuIHRva2VuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VG9rZW4odG9rZW46IHN0cmluZykge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBqd3QudmVyaWZ5KHRva2VuLCBjb25maWcuand0U2VjcmV0LCAoZXJyLCB2ZXJpZmllZEp3dCkgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzb2x2ZSh2ZXJpZmllZEp3dCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9zZXJ2aWNlL3ZlcmlmeS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hbGVydC9hbGVydC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5jZW50ZXJ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNoZWNrZWQge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIH1cXHJcXG4gIC5jaGVja2JveCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xcclxcbiAgfVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3RvZG8vdG9kby5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAqbmdJZj1cXFwibWVzc2FnZVxcXCIgW25nQ2xhc3NdPVxcXCJ7ICdhbGVydCc6IG1lc3NhZ2UsICdhbGVydC1zdWNjZXNzJzogbWVzc2FnZS50eXBlID09PSAnc3VjY2VzcycsICdhbGVydC1kYW5nZXInOiBtZXNzYWdlLnR5cGUgPT09ICdlcnJvcicgfVxcXCI+e3ttZXNzYWdlLnRleHR9fTwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLTxoMT5cXG4gIHt7dGl0bGV9fVxcbjwvaDE+LS0+XFxuXFxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxhbGVydD48L2FsZXJ0PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtc20tb2Zmc2V0LTJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXFxcIj5cXG4gICAgICAgICAgICA8aDI+TG9naW48L2gyPlxcbiAgICAgICAgICAgIDxmb3JtIG5hbWU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcImYuZm9ybS52YWxpZCAmJiBsb2dpbigpXFxcIiAjZj1cXFwibmdGb3JtXFxcIiBub3ZhbGlkYXRlPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsgJ2hhcy1lcnJvcic6IGYuc3VibWl0dGVkICYmICFlbWFpbC52YWxpZCB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsXFxcIj5FbWFpbDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIFsobmdNb2RlbCldPVxcXCJtb2RlbC5lbWFpbFxcXCIgI2VtYWlsPVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZCAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiZi5zdWJtaXR0ZWQgJiYgIWVtYWlsLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+RW1haWwgaXMgcmVxdWlyZWQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieyAnaGFzLWVycm9yJzogZi5zdWJtaXR0ZWQgJiYgIXBhc3N3b3JkLnZhbGlkIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRcXFwiPlBhc3N3b3JkPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIFsobmdNb2RlbCldPVxcXCJtb2RlbC5wYXNzd29yZFxcXCIgI3Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZCAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiZi5zdWJtaXR0ZWQgJiYgIXBhc3N3b3JkLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+UGFzc3dvcmQgaXMgcmVxdWlyZWQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVxcXCJsb2FkaW5nXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5Mb2dpbjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cXFwibG9hZGluZ1xcXCIgc3JjPVxcXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhFQUFRQVBJQUFQLy8vd0FBQU1MQ3drSkNRZ0FBQUdKaVlvS0NncEtTa2lIL0MwNUZWRk5EUVZCRk1pNHdBd0VBQUFBaC9ocERjbVZoZEdWa0lIZHBkR2dnWVdwaGVHeHZZV1F1YVc1bWJ3QWgrUVFKQ2dBQUFDd0FBQUFBRUFBUUFBQURNd2k2M1A0d3lrbHJFMk1JT2dnWm5BZE9tR1lKUmJFeHdyb1VtY0cyTG1ERXduSFFMVnNZT2QybUJ6a1lEQWRLYStkSUFBQWgrUVFKQ2dBQUFDd0FBQUFBRUFBUUFBQUROQWk2M1A1T2pDRWdHNFFNdTdEbWlrUnhRbEZVWURFWklHQk1SVnNhcUh3Y3RYWGY3V0VZQjRBZzF4amloa01ac2lVa0toSUFJZmtFQ1FvQUFBQXNBQUFBQUJBQUVBQUFBellJdWpJaks4cEJ5SkRNbEZZdkJvVmpIQTcwR1U3eFNVSmhtS3R3SFBBS3pMTzlITWFvS3dKWjdSZjhBWVBERHpLcFpCcWZ2d1FBSWZrRUNRb0FBQUFzQUFBQUFCQUFFQUFBQXpNSXVtSWxLOG95aHBIc25GWmZoWXVtQ1lVaERBUXhSSWRoSEJHcVJvS3cwUjhEWWxKZDh6MGZNRGdzR28vSXBISTVUQUFBSWZrRUNRb0FBQUFzQUFBQUFCQUFFQUFBQXpJSXVuSW5LMHJuWkJUd0dQTk1nUXdtZHNOZ1hHSlVsSVdFdVI1b1dVSXB6OHBBRUFNZTZUd2Z3eVlzR28vSXBGS1NBQUFoK1FRSkNnQUFBQ3dBQUFBQUVBQVFBQUFETXdpNklNS1FPUmZqZE9lODJwNHdHY2NjNENFdVFyYWR5bGVzb2pFTUJnc1VjMkc3c0RYM2xRR0JNTEFKaWJ1ZmJTbEtBQUFoK1FRSkNnQUFBQ3dBQUFBQUVBQVFBQUFETWdpNjNQN3dDUkhabkZWZG1nSHUybkZ3bFdDSTNXR2MzVFNXaFVGR3hUQVVrR0NidGdFTkJNSkFFSnN4Z01MV3pwRUFBQ0g1QkFrS0FBQUFMQUFBQUFBUUFCQUFBQU15Q0xyYy9qREtTYXRsUXRTY0tkY2VDQWpESUk3SGNRNEVNVENweXJDdVVCakNZUmdIVnRxbEFpQjFZaGlDbmxzUmtBQUFPd0FBQUFBQUFBQUFBQT09XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvcmVnaXN0ZXInXVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlua1xcXCI+UmVnaXN0ZXI8L2E+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxhbGVydD48L2FsZXJ0PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtc20tb2Zmc2V0LTJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXFxcIj5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8aDI+UmVnaXN0ZXI8L2gyPlxcbiAgICAgICAgICAgIDxmb3JtIG5hbWU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcImYuZm9ybS52YWxpZCAmJiByZWdpc3RlcigpXFxcIiAjZj1cXFwibmdGb3JtXFxcIiBub3ZhbGlkYXRlPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsgJ2hhcy1lcnJvcic6IGYuc3VibWl0dGVkICYmICFmaXJzdE5hbWUudmFsaWQgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJmaXJzdE5hbWVcXFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmZpcnN0TmFtZVxcXCIgI2ZpcnN0TmFtZT1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImYuc3VibWl0dGVkICYmICFmaXJzdE5hbWUudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5GaXJzdCBOYW1lIGlzIHJlcXVpcmVkPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsgJ2hhcy1lcnJvcic6IGYuc3VibWl0dGVkICYmICFsYXN0TmFtZS52YWxpZCB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImxhc3ROYW1lXFxcIj5MYXN0IE5hbWU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwibW9kZWwubGFzdE5hbWVcXFwiICNsYXN0TmFtZT1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImYuc3VibWl0dGVkICYmICFsYXN0TmFtZS52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPkxhc3QgTmFtZSBpcyByZXF1aXJlZDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7ICdoYXMtZXJyb3InOiBmLnN1Ym1pdHRlZCAmJiAhZW1haWwudmFsaWQgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ1c2VybmFtZVxcXCI+RW1haWw8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBbKG5nTW9kZWwpXT1cXFwibW9kZWwuZW1haWxcXFwiICNlbWFpbD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImYuc3VibWl0dGVkICYmICFlbWFpbC52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPkVtYWlsIGlzIHJlcXVpcmVkPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsgJ2hhcy1lcnJvcic6IGYuc3VibWl0dGVkICYmICFwYXNzd29yZC52YWxpZCB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiBbKG5nTW9kZWwpXT1cXFwibW9kZWwucGFzc3dvcmRcXFwiICNwYXNzd29yZD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImYuc3VibWl0dGVkICYmICFwYXNzd29yZC52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPlBhc3N3b3JkIGlzIHJlcXVpcmVkPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cXFwibG9hZGluZ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+UmVnaXN0ZXI8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XFxcImxvYWRpbmdcXFwiIHNyYz1cXFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoRUFBUUFQSUFBUC8vL3dBQUFNTEN3a0pDUWdBQUFHSmlZb0tDZ3BLU2tpSC9DMDVGVkZORFFWQkZNaTR3QXdFQUFBQWgvaHBEY21WaGRHVmtJSGRwZEdnZ1lXcGhlR3h2WVdRdWFXNW1id0FoK1FRSkNnQUFBQ3dBQUFBQUVBQVFBQUFETXdpNjNQNHd5a2xyRTJNSU9nZ1puQWRPbUdZSlJiRXh3cm9VbWNHMkxtREV3bkhRTFZzWU9kMm1CemtZREFkS2ErZElBQUFoK1FRSkNnQUFBQ3dBQUFBQUVBQVFBQUFETkFpNjNQNU9qQ0VnRzRRTXU3RG1pa1J4UWxGVVlERVpJR0JNUlZzYXFId2N0WFhmN1dFWUI0QWcxeGppaGtNWnNpVWtLaElBSWZrRUNRb0FBQUFzQUFBQUFCQUFFQUFBQXpZSXVqSWpLOHBCeUpETWxGWXZCb1ZqSEE3MEdVN3hTVUpobUt0d0hQQUt6TE85SE1hb0t3Slo3UmY4QVlQRER6S3BaQnFmdndRQUlma0VDUW9BQUFBc0FBQUFBQkFBRUFBQUF6TUl1bUlsSzhveWhwSHNuRlpmaFl1bUNZVWhEQVF4UklkaEhCR3FSb0t3MFI4RFlsSmQ4ejBmTURnc0dvL0lwSEk1VEFBQUlma0VDUW9BQUFBc0FBQUFBQkFBRUFBQUF6SUl1bkluSzByblpCVHdHUE5NZ1F3bWRzTmdYR0pVbElXRXVSNW9XVUlwejhwQUVBTWU2VHdmd3lZc0dvL0lwRktTQUFBaCtRUUpDZ0FBQUN3QUFBQUFFQUFRQUFBRE13aTZJTUtRT1JmamRPZTgycDR3R2NjYzRDRXVRcmFkeWxlc29qRU1CZ3NVYzJHN3NEWDNsUUdCTUxBSmlidWZiU2xLQUFBaCtRUUpDZ0FBQUN3QUFBQUFFQUFRQUFBRE1naTYzUDd3Q1JIWm5GVmRtZ0h1Mm5Gd2xXQ0kzV0djM1RTV2hVRkd4VEFVa0dDYnRnRU5CTUpBRUpzeGdNTFd6cEVBQUNINUJBa0tBQUFBTEFBQUFBQVFBQkFBQUFNeUNMcmMvakRLU2F0bFF0U2NLZGNlQ0FqRElJN0hjUTRFTVRDcHlyQ3VVQmpDWVJnSFZ0cWxBaUIxWWhpQ25sc1JrQUFBT3dBQUFBQUFBQUFBQUE9PVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmtcXFwiPkNhbmNlbDwvYT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMVxcXCI+XFxuICAgIDxkaXYgc3R5bGU9XFxcImZsb2F0OmxlZnRcXFwiPlxcbiAgICAgIDxoMz5Ub2RvQXBwPC9oMz5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgc3R5bGU9XFxcInRleHQtYWxpZ246Y2VudGVyXFxcIj5cXG4gICAgICA8aDM+e3tjdXJyZW50VXNlci5maXJzdE5hbWUgKyAnICcgKyBjdXJyZW50VXNlci5sYXN0TmFtZSB9fTwvaDM+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMVxcXCI+XFxuICAgIDxoND48YSAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCI+TG9nb3V0PC9hPjwvaDQ+XFxuICA8L2Rpdj5cXG48L25hdj5cXG48YWxlcnQ+PC9hbGVydD5cXG48ZGl2IGNsYXNzPVxcXCJjb2wtbGctMTJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcbiAgICAgIDxmb3JtICN0b2RvRm9ybT1cXFwibmdGb3JtXFxcIiAoc3VibWl0KT1cXFwiYWRkVG9kbyh0b2RvRm9ybS52YWxpZCwgdG9kb0Zvcm0udmFsdWUpXFxcIiBub3ZhbGlkYXRlIGNsYXNzPVxcXCJuYXZiYXItZm9ybSBjZW50ZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cXFwiV2hhdCBuZWVkcyB0byBiZSBkb25lP1xcXCIgbmFtZT1cXFwidG9kb1Rhc2tcXFwiIChrZXl1cC5lbnRlcik9XFxcInRvZG9UYXNrPScnXFxcIiBbKG5nTW9kZWwpXT1cXFwidG9kb1Rhc2tcXFwiIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cXFwibG9hZGluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj5BZGQ8L2J1dHRvbj5cXG4gICAgICAgIDxpbWcgKm5nSWY9XFxcImxvYWRpbmdcXFwiIHNyYz1cXFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoRUFBUUFQSUFBUC8vL3dBQUFNTEN3a0pDUWdBQUFHSmlZb0tDZ3BLU2tpSC9DMDVGVkZORFFWQkZNaTR3QXdFQUFBQWgvaHBEY21WaGRHVmtJSGRwZEdnZ1lXcGhlR3h2WVdRdWFXNW1id0FoK1FRSkNnQUFBQ3dBQUFBQUVBQVFBQUFETXdpNjNQNHd5a2xyRTJNSU9nZ1puQWRPbUdZSlJiRXh3cm9VbWNHMkxtREV3bkhRTFZzWU9kMm1CemtZREFkS2ErZElBQUFoK1FRSkNnQUFBQ3dBQUFBQUVBQVFBQUFETkFpNjNQNU9qQ0VnRzRRTXU3RG1pa1J4UWxGVVlERVpJR0JNUlZzYXFId2N0WFhmN1dFWUI0QWcxeGppaGtNWnNpVWtLaElBSWZrRUNRb0FBQUFzQUFBQUFCQUFFQUFBQXpZSXVqSWpLOHBCeUpETWxGWXZCb1ZqSEE3MEdVN3hTVUpobUt0d0hQQUt6TE85SE1hb0t3Slo3UmY4QVlQRER6S3BaQnFmdndRQUlma0VDUW9BQUFBc0FBQUFBQkFBRUFBQUF6TUl1bUlsSzhveWhwSHNuRlpmaFl1bUNZVWhEQVF4UklkaEhCR3FSb0t3MFI4RFlsSmQ4ejBmTURnc0dvL0lwSEk1VEFBQUlma0VDUW9BQUFBc0FBQUFBQkFBRUFBQUF6SUl1bkluSzByblpCVHdHUE5NZ1F3bWRzTmdYR0pVbElXRXVSNW9XVUlwejhwQUVBTWU2VHdmd3lZc0dvL0lwRktTQUFBaCtRUUpDZ0FBQUN3QUFBQUFFQUFRQUFBRE13aTZJTUtRT1JmamRPZTgycDR3R2NjYzRDRXVRcmFkeWxlc29qRU1CZ3NVYzJHN3NEWDNsUUdCTUxBSmlidWZiU2xLQUFBaCtRUUpDZ0FBQUN3QUFBQUFFQUFRQUFBRE1naTYzUDd3Q1JIWm5GVmRtZ0h1Mm5Gd2xXQ0kzV0djM1RTV2hVRkd4VEFVa0dDYnRnRU5CTUpBRUpzeGdNTFd6cEVBQUNINUJBa0tBQUFBTEFBQUFBQVFBQkFBQUFNeUNMcmMvakRLU2F0bFF0U2NLZGNlQ0FqRElJN0hjUTRFTVRDcHlyQ3VVQmpDWVJnSFZ0cWxBaUIxWWhpQ25sc1JrQUFBT3dBQUFBQUFBQUFBQUE9PVxcXCJcXG4gICAgICAgIC8+XFxuICAgICAgPC9mb3JtPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPjxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiAoY2xpY2spPVxcXCJsb2FkVG9kb3MoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaFxcXCI+PC9zcGFuPjwvYnV0dG9uPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPCEtLSBMaXN0IGdyb3VwIC0tPlxcbiAgICA8dWwgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiPlxcbiAgICAgIDxsaSAqbmdGb3I9XFxcImxldCB0b2RvIG9mIHRvZG9MaXN0XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG4gICAgICAgIDxzcGFuPjxpbnB1dCAoY2xpY2spPVxcXCJ1cGRhdGVUb2RvKCRldmVudCx0b2RvKVxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJjaGVja2JveFxcXCIgWyhuZ01vZGVsKV09XFxcInRvZG8uY29tcGxldGVkXFxcIiAvPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cXFwieydjaGVja2VkJzogdG9kby5jb21wbGV0ZWR9XFxcIj57e3RvZG8udG9kb1Rhc2t9fTwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlVG9kbyh0b2RvLl9pZClcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICA8L2Rpdj5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC90b2RvL3RvZG8uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbXBpbGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIlxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCJcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbXByZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2FycmF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvYXJyYXlcIlxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvZGF0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2RhdGVcIlxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXBcIlxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbWF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L21hdGhcIlxuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbnVtYmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbnVtYmVyXCJcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L29iamVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L29iamVjdFwiXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCJcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWludFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcmVmbGVjdFwiXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9yZWdleHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWdleHBcIlxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc2V0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc2V0XCJcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3N0cmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3N0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zeW1ib2xcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zeW1ib2xcIlxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczcvcmVmbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM3L3JlZmxlY3RcIlxuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY3J5cHRvXCJcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpzb253ZWJ0b2tlblwiXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL1N1YmplY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIlxuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=