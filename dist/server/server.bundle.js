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
        debugger;
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

module.exports = "<div class=\"container\">\n    <alert></alert>\n    <div class=\"col-sm-8 col-sm-offset-2\">\n        <div class=\"col-md-6 col-md-offset-3\">\n            <h2>Login</h2>\n            <!--<form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                    <label for=\"username\">Username</label>\n                    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                </div>\n                <div class=\"form-group\">\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                    />\n                    <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n                </div>\n            </form>-->\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n                    <label for=\"email\">Username</label>\n                    <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Username is required</div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                </div>\n                <div class=\"form-group\">\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                    />\n                    <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n    <alert></alert>\n    <div class=\"col-sm-8 col-sm-offset-2\">\n        <div class=\"col-md-6 col-md-offset-3\">\n            \n            <h2>Register</h2>\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !firstName.valid }\">\n                    <label for=\"firstName\">First Name</label>\n                    <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !lastName.valid }\">\n                    <label for=\"lastName\">Last Name</label>\n                    <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n                    <label for=\"username\">Username</label>\n                    <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                </div>\n                <div class=\"form-group\">\n                    <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n                    />\n                    <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzU4NWU4ZGQzYzc2OGRkYWQ0OGMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy9hdXRoR3VhcmQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3RvZG8vdG9kby5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9jb250cm9sbGVycy91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19fMi4xLjEud29ya2Fyb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLm5vZGUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLnJvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NlcnZpY2VzL2FsZXJ0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy9odHRwLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlmaWxscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2NvbnRyb2xsZXJzL3RvZG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9tb2RlbHMvdG9kby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL21vZGVscy91c2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcm91dGVzL2xvZ2luLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcm91dGVzL3JlZ2lzdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcm91dGVzL3RvZG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZXJ2aWNlL3ZlcmlmeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hbGVydC9hbGVydC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90b2RvL3RvZG8uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbXByZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9kYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbnVtYmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvb2JqZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcmVnZXhwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc2V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc3ltYm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczcvcmVmbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzlEQSwwQzs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7Ozs7QUNBZ0M7QUFDVDtBQUNjOzs7Ozs7O0FDRnJDLG9DOzs7Ozs7QUNBQSxxQzs7Ozs7OztBQ0FBLElBQUksTUFBTSxHQUFHO0lBQ1gsU0FB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OEM7Ozs7OztBQ0FBLDJDOzs7Ozs7QUNBQSwwQzs7Ozs7O0FDQUEsb0Q7Ozs7OztBQ0FBLHVFOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEseUQ7Ozs7OztBQ0FBLHdDOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLG9EOzs7Ozs7QUNBQSxrRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsbUM7Ozs7OztBQ0FBLHlDOzs7Ozs7QUNBQSxpQzs7Ozs7O0FDQUEseUM7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InNlcnZlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9yeSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb3J5IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNzEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM1ODVlOGRkM2M3NjhkZGFkNDhjIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgKiBmcm9tICcuL2FsZXJ0LnNlcnZpY2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL2h0dHAnO1xyXG5leHBvcnQgKiBmcm9tICAnLi9hdXRoR3VhcmQuc2VydmljZSc7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NlcnZpY2VzL2luZGV4LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbmdvb3NlXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibGV0IGNvbmZpZyA9IHtcclxuICBqd3RTZWNyZXQ6ICdzdXBlcmR1cGVyc2VjcmV0b2ZSRUknLFxyXG4gIHNhbHQ6ICdESkVXKjMyNEtOQVNjc2FmQXdlOTg3eTJlQCNSV29paHdlZm45OCEnLFxyXG4gIG1vbmdvVVJMOiBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSB8fCAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy91bmd0b2RvJyxcclxuICBwb3J0OiBwcm9jZXNzLmVudi5QT1JUIHx8IDgwMDAsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWdcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9jb25maWcudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFsZXJ0U2VydmljZSwgSHR0cFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBtb2RlbDogYW55ID0ge307XG4gICAgbG9hZGluZyA9IGZhbHNlO1xuICAgIHJldHVyblVybDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIC8vIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGhzOiBIdHRwU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCkgeyBcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdG9kbyddKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmhzLlBvc3RSZXF1ZXN0KCcvYXBpL2xvZ2luJywgdGhpcy5tb2RlbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IocmVzLmVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3VjY2VzcygnTG9naW4gc3VjY2Vzc2Z1bCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VXNlcicsIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvdG9kbyddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFsZXJ0U2VydmljZSwgSHR0cFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yZWdpc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbW9kZWw6IGFueSA9IHt9O1xuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgaHM6IEh0dHBTZXJ2aWNlXG4gICkgeyB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICByZWdpc3RlcigpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuaHMuUG9zdFJlcXVlc3QoJy9hcGkvcmVnaXN0ZXInLCB0aGlzLm1vZGVsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGlmICghcmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihyZXMuZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3VjY2VzcygnUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwnLCB0cnVlKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XHJcblxyXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpKSB7XHJcbiAgICAgICAgICAgIC8vIGxvZ2dlZCBpbiBzbyByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy90b2RvJ10pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG5vdCBsb2dnZWQgaW4gc28gcmVkaXJlY3QgdG8gbG9naW4gcGFnZSB3aXRoIHRoZSByZXR1cm4gdXJsXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy9hdXRoR3VhcmQuc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIdHRwU2VydmljZSwgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdG9kbycsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2RvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdG9kby5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9kb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdG9kb3M6IGFueTtcbiAgdG9kb0xpc3Q6IGFueTtcbiAgY3VycmVudFVzZXI6IGFueTtcbiAgbG9hZGluZyA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGhzOiBIdHRwU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2VcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmN1cnJlbnRVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSk7XG4gICAgdGhpcy5sb2FkVG9kb3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFRvZG9zKCkge1xuICAgIHRoaXMuaHMuR2V0UmVxdWVzdCgnL2FwaS90b2RvLycgKyB0aGlzLmN1cnJlbnRVc2VyLmlkKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGlmICghcmVzLnN1Y2Nlc3MpIHtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9kb0xpc3QgPSByZXMuZGF0YTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGFkZFRvZG8odmFsaWQ6IGFueSwgdmFsdWU6IGFueSkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXZhbGlkIHx8ICh2YWx1ZS50b2RvVGFzayA9PT0gdW5kZWZpbmVkKSkgcmV0dXJuO1xuICAgIGxldCBvYmogPSB7XG4gICAgICB0b2RvVGFzazogdmFsdWUudG9kb1Rhc2ssXG4gICAgICB1c2VyX2lkOiB0aGlzLmN1cnJlbnRVc2VyLmlkLFxuICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgIH1cbiAgICB2YWx1ZS50b2RvVGFzayA9ICcnO1xuICAgIHRoaXMuaHMuUG9zdFJlcXVlc3QoJy9hcGkvdG9kbycsIHsgdG9kbzogb2JqIH0pLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgaWYgKCFyZXMuc3VjY2Vzcykge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IocmVzLmVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdWNjZXNzKCdUb2RvIGFkZCBTdWNjZXNzZnVsIScpO1xuICAgICAgICB0aGlzLmxvYWRUb2RvcygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGRlbGV0ZVRvZG8oaWQ6IGFueSkge1xuICAgIHRoaXMuaHMuRGVsZXRlUmVxdWVzdCgnL2FwaS90b2RvLycgKyBpZCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBpZiAoIXJlcy5zdWNjZXNzKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKHJlcy5lcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdWNjZXNzKCdUb2RvIGRlbGV0ZSBTdWNjZXNzZnVsIScpO1xuICAgICAgICB0aGlzLmxvYWRUb2RvcygpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgdXBkYXRlVG9kbyhldmVudCwgdmFsdWUpIHtcbiAgICBsZXQgb2JqID0ge1xuICAgICAgY29tcGxldGVkOiBldmVudC50YXJnZXQuY2hlY2tlZCxcbiAgICAgIHRvZG9JZDogdmFsdWUuX2lkXG4gICAgfVxuICAgIHRoaXMuaHMuUHV0UmVxdWVzdCgnL2FwaS90b2RvJywgeyB0b2RvOiBvYmogfSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBpZiAoIXJlcy5zdWNjZXNzKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKHJlcy5lcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvYWRUb2RvcygpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuICBsb2dvdXQoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRVc2VyJyk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC50cyIsImltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy91c2VyJztcclxuaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gJ2NyeXB0byc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IHsgY3JlYXRlVG9rZW4gfSBmcm9tICcuLi9zZXJ2aWNlL3ZlcmlmeSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5kZXgocmVxLCByZXMpIHtcclxuICAgIHJlcy5zZW5kKCdVc2VyIGFwaSBpcyB3b3JraW5nIG5vdycpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93KHJlcSwgcmVzKSB7XHJcblxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUocmVxLCByZXMpIHtcclxuICAgIFVzZXIuZmluZE9uZSh7IGVtYWlsOiByZXEuYm9keS5lbWFpbCB9KVxyXG4gICAgICAgIC5leGVjKChlcnIsIHVzZXJPYmopID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiAnQ29udGFjdCBzdXBwb3J0JyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1c2VyT2JqID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwd0hhc2ggPSBjcnlwdG8uY3JlYXRlSG1hYygnc2hhMScsIGNvbmZpZy5zYWx0KS51cGRhdGUocmVxLmJvZHkucGFzc3dvcmQpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IHJlcS5ib2R5LmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogcmVxLmJvZHkubGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwd0hhc2hcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBVc2VyLmNyZWF0ZSh1c2VyKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiAnVXNlciBjcmVhdGVkJywgZXJyb3I6IG51bGwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZXJyJywgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiAnQ29udGFjdCBzdXBwb3J0JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiAnVXNlciBhbHJlYWR5IGV4aXN0cycsIGVycm9yOiBudWxsIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbn1cclxuLy8gbG9naW5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKHJlcSwgcmVzKSB7XHJcbiAgICBVc2VyLmZpbmRPbmUoeyBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSlcclxuICAgICAgICAuZXhlYygoZXJyLCB1c2VyT2JqKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogZXJyIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCF1c2VyT2JqKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6ICdFbWFpbCBhZGRyZXNzIG5vdCBmb3VuZCcgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGhhc2ggPSBjcnlwdG8uY3JlYXRlSG1hYygnc2hhMScsIGNvbmZpZy5zYWx0KS51cGRhdGUocmVxLmJvZHkucGFzc3dvcmQpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgICAgICAgICAgIGlmIChoYXNoID09IHVzZXJPYmpbJ3Bhc3N3b3JkJ10pIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VXNlciA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdXNlck9iai5faWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3ROYW1lOiB1c2VyT2JqWydmaXJzdE5hbWUnXSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogdXNlck9ialsnbGFzdE5hbWUnXSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlck9ialsnZW1haWwnXSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGNyZWF0ZVRva2VuKGN1cnJlbnRVc2VyKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyWyd0b2tlbiddID0gdG9rZW47XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjdXJyZW50VXNlciwgZXJyb3I6IG51bGwgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6ICdJbmNvcnJlY3QgUGFzc3dvcmQhJyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvY29udHJvbGxlcnMvdXNlci50cyIsIi8qKlxyXG4gKiB0aGUgcG9seWZpbGxzIG11c3QgYmUgdGhlIGZpcnN0IHRoaW5nIGltcG9ydGVkXHJcbiAqL1xyXG5pbXBvcnQgJy4vcG9seWZpbGxzLnRzJztcclxuaW1wb3J0ICcuL19fMi4xLjEud29ya2Fyb3VuZC50cyc7IC8vIHRlbXBvcmFyeSB1bnRpbCAyLjEuMSB0aGluZ3MgYXJlIHBhdGNoZWQgaW4gQ29yZVxyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgKiBhcyBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcclxuaW1wb3J0ICogYXMgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xyXG5pbXBvcnQgeyBjcmVhdGVFbmdpbmUgfSBmcm9tICdhbmd1bGFyMi1leHByZXNzLWVuZ2luZSc7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5ub2RlLm1vZHVsZSc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3NlcnZlci5yb3V0ZXMnO1xyXG5pbXBvcnQgdG9kbyBmcm9tICcuL3NlcnZlci9yb3V0ZXMvdG9kbyc7XHJcbmltcG9ydCByZWdpc3RlciBmcm9tICcuL3NlcnZlci9yb3V0ZXMvcmVnaXN0ZXInO1xyXG5pbXBvcnQgbG9naW4gZnJvbSAnLi9zZXJ2ZXIvcm91dGVzL2xvZ2luJztcclxuaW1wb3J0IHNlcnZlckNvbmZpZyBmcm9tICcuL3NlcnZlci9jb25maWcnO1xyXG5cclxuLy8gQXBwXHJcblxyXG5jb25zdCBhcHAgID0gZXhwcmVzcygpO1xyXG5jb25zdCBST09UID0gcGF0aC5qb2luKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLicpKTtcclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDIwMDtcclxuXHJcbi8qKlxyXG4gKiBlbmFibGUgcHJvZCBtb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50c1xyXG4gKi9cclxuaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcclxuICBlbmFibGVQcm9kTW9kZSgpO1xyXG59XHJcblxyXG4vKipcclxuICogRXhwcmVzcyBWaWV3XHJcbiAqL1xyXG5hcHAuZW5naW5lKCcuaHRtbCcsIGNyZWF0ZUVuZ2luZSh7fSkpO1xyXG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihST09ULCAnY2xpZW50JykpO1xyXG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdodG1sJyk7XHJcblxyXG5cclxuLy8gTW9uZ29EQiBDb25uZWN0aW9uXHJcbm1vbmdvb3NlLmNvbm5lY3Qoc2VydmVyQ29uZmlnLm1vbmdvVVJMLCAoZXJyb3IpID0+IHtcclxuICBpZiAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBtYWtlIHN1cmUgTW9uZ29kYiBpcyBpbnN0YWxsZWQgYW5kIHJ1bm5pbmchJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBFbmFibGUgY29tcHJlc3Npb25cclxuICovXHJcbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XHJcblxyXG4vKipcclxuICogc2VydmUgc3RhdGljIGZpbGVzXHJcbiAqL1xyXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbih7IGxpbWl0OiAnMjBtYicgfSkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGxpbWl0OiAnMjBtYicsIGV4dGVuZGVkOiBmYWxzZSB9KSk7XHJcbmFwcC51c2UoJy8nLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oUk9PVCwgJ2NsaWVudCcpLCB7aW5kZXg6IGZhbHNlfSkpO1xyXG5cclxuLyoqXHJcbiAqIHBsYWNlIHlvdXIgYXBpIHJvdXRlcyBoZXJlXHJcbiAqL1xyXG4vLyBhcHAudXNlKCcvYXBpJywgYXBpKTtcclxuXHJcbmFwcC51c2UoJy9hcGknLCB0b2RvKTtcclxuYXBwLnVzZSgnL2FwaScsIHJlZ2lzdGVyKTtcclxuYXBwLnVzZSgnL2FwaScsIGxvZ2luKTtcclxuXHJcbi8qKlxyXG4gKiBib290c3RyYXAgdW5pdmVyc2FsIGFwcFxyXG4gKiBAcGFyYW0gcmVxXHJcbiAqIEBwYXJhbSByZXNcclxuICovXHJcbmZ1bmN0aW9uIG5nQXBwKHJlcTogYW55LCByZXM6IGFueSkge1xyXG4gIHJlcy5yZW5kZXIoJ2luZGV4Jywge1xyXG4gICAgcmVxLFxyXG4gICAgcmVzLFxyXG4gICAgbmdNb2R1bGU6IEFwcE1vZHVsZSxcclxuICAgIHByZWJvb3Q6IGZhbHNlLFxyXG4gICAgYmFzZVVybDogJy8nLFxyXG4gICAgcmVxdWVzdFVybDogcmVxLm9yaWdpbmFsVXJsLFxyXG4gICAgb3JpZ2luVXJsOiByZXEuaG9zdG5hbWVcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIHVzZSB1bml2ZXJzYWwgZm9yIHNwZWNpZmljIHJvdXRlc1xyXG4gKi9cclxuYXBwLmdldCgnLycsIG5nQXBwKTtcclxucm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xyXG4gIGFwcC5nZXQoYC8ke3JvdXRlfWAsIG5nQXBwKTtcclxuICBhcHAuZ2V0KGAvJHtyb3V0ZX0vKmAsIG5nQXBwKTtcclxufSk7XHJcblxyXG4vKipcclxuICogaWYgeW91IHdhbnQgdG8gdXNlIHVuaXZlcnNhbCBmb3IgYWxsIHJvdXRlcywgeW91IGNhbiB1c2UgdGhlICcqJyB3aWxkY2FyZFxyXG4gKi9cclxuXHJcbmFwcC5nZXQoJyonLCBmdW5jdGlvbiAocmVxOiBhbnksIHJlczogYW55KSB7XHJcbiAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICBjb25zdCBwb2pvID0ge3N0YXR1czogNDA0LCBtZXNzYWdlOiAnTm8gQ29udGVudCd9O1xyXG4gIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShwb2pvLCBudWxsLCAyKTtcclxuICByZXMuc3RhdHVzKDQwNCkuc2VuZChqc29uKTtcclxufSk7XHJcblxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci50cyIsIi8qXHJcbiAqIFRISVMgSVMgVEVNUE9SQVJZIFRPIFBBVENIIDIuMS4xKyBDb3JlIGJ1Z3NcclxuICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5sZXQgX19jb21waWxlcl9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xyXG5pbXBvcnQgeyBfX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbnZhciBfX2NvcmVfcHJpdmF0ZV9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbmxldCBwYXRjaDogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuaWYgKCFfX2NvcmVfcHJpdmF0ZV9fLmhhc093blByb3BlcnR5KCdWaWV3VXRpbHMnKSkge1xyXG4gICAgcGF0Y2ggPSB0cnVlO1xyXG4gICAgX19jb3JlX3ByaXZhdGVfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fLnZpZXdfdXRpbHM7XHJcbn1cclxuXHJcbmlmICghX19jb21waWxlcl9fLl9fY29tcGlsZXJfcHJpdmF0ZV9fKSB7XHJcbiAgICBwYXRjaCA9IHRydWU7XHJcbiAgICAoX19jb21waWxlcl9fKS5fX2NvbXBpbGVyX3ByaXZhdGVfXyA9IHtcclxuICAgICAgICBTZWxlY3Rvck1hdGNoZXI6IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIsXHJcbiAgICAgICAgQ3NzU2VsZWN0b3I6IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxyXG4gICAgfVxyXG59XHJcblxyXG52YXIgX191bml2ZXJzYWxfXzogYW55ID0gcmVxdWlyZSgnYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fJyk7XHJcbmlmIChwYXRjaCkge1xyXG4gICAgX191bml2ZXJzYWxfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fLnZpZXdfdXRpbHM7XHJcbiAgICBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yID0gX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXHJcbiAgICBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciA9IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXJcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbGVydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudHtcblxuICBtZXNzYWdlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hbGVydFNlcnZpY2UuZ2V0TWVzc2FnZSgpLnN1YnNjcmliZShtZXNzYWdlID0+IHsgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTsgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgdGl0bGUgPSAnYXBwIHdvcmtzISc7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCIvKipcclxuICogVGhpcyBmaWxlIGFuZCBgbWFpbi5icm93c2VyLnRzYCBhcmUgaWRlbnRpY2FsLCBhdCB0aGUgbW9tZW50KCEpXHJcbiAqIEJ5IHNwbGl0dGluZyB0aGVzZSwgeW91J3JlIGFibGUgdG8gY3JlYXRlIGxvZ2ljLCBpbXBvcnRzLCBldGMgdGhhdCBhcmUgXCJQbGF0Zm9ybVwiIHNwZWNpZmljLlxyXG4gKiBJZiB5b3Ugd2FudCB5b3VyIGNvZGUgdG8gYmUgY29tcGxldGVseSBVbml2ZXJzYWwgYW5kIGRvbid0IG5lZWQgdGhhdFxyXG4gKiBZb3UgY2FuIGFsc28ganVzdCBoYXZlIDEgZmlsZSwgdGhhdCBpcyBpbXBvcnRlZCBpbnRvIGJvdGhcclxuICogY2xpZW50LnRzIGFuZCBzZXJ2ZXIudHNcclxuICovXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB7IFRvZG9Db21wb25lbnQgfSBmcm9tICcuL3RvZG8vdG9kby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBhcHBSb3V0ZXMgfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UsIEFsZXJ0U2VydmljZSwgQXV0aEd1YXJkIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogVG9wLWxldmVsIE5nTW9kdWxlIFwiY29udGFpbmVyXCJcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgLyoqIFJvb3QgQXBwIENvbXBvbmVudCAqL1xyXG4gIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcclxuICAvKiogT3VyIENvbXBvbmVudHMgKi9cclxuICBkZWNsYXJhdGlvbnM6IFsgQXBwQ29tcG9uZW50LCBUb2RvQ29tcG9uZW50LCBMb2dpbkNvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQsIEFsZXJ0Q29tcG9uZW50IF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgLyoqXHJcbiAgICAgKiBOT1RFOiBOZWVkcyB0byBiZSB5b3VyIGZpcnN0IGltcG9ydCAoISlcclxuICAgICAqIE5vZGVNb2R1bGUsIE5vZGVIdHRwTW9kdWxlLCBOb2RlSnNvbnBNb2R1bGUgYXJlIGluY2x1ZGVkXHJcbiAgICAgKi9cclxuICAgIFVuaXZlcnNhbE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgLyoqXHJcbiAgICAgKiB1c2luZyByb3V0ZXNcclxuICAgICAqL1xyXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBIdHRwU2VydmljZSxcclxuICAgIEFsZXJ0U2VydmljZSxcclxuICAgIEF1dGhHdWFyZFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsImV4cG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5ub2RlLm1vZHVsZS50cyIsImltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFRvZG9Db21wb25lbnQgfSBmcm9tICcuL3RvZG8vdG9kby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vc2VydmljZXMvYXV0aEd1YXJkLnNlcnZpY2UnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudH0sXHJcbiAgICB7IHBhdGg6ICdyZWdpc3RlcicsIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ3RvZG8nLCBjb21wb25lbnQ6IFRvZG9Db21wb25lbnQsIGNhbkFjdGl2YXRlOltBdXRoR3VhcmRdIH0sXHJcblxyXG4gICAgLy8gb3RoZXJ3aXNlIHJlZGlyZWN0IHRvIGhvbWVcclxuICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2xvZ2luJyB9XHJcbl07XHJcblxyXG4vLyBleHBvcnQgY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyk7XHJcbi8vIGV4cG9ydCBhcHBSb3V0ZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAucm91dGluZy50cyIsImV4cG9ydCAqIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbGVydFNlcnZpY2Uge1xuICAgIHByaXZhdGUgc3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICBwcml2YXRlIGtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgLy8gY2xlYXIgYWxlcnQgbWVzc2FnZSBvbiByb3V0ZSBjaGFuZ2VcbiAgICAgICAgcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMua2VlcEFmdGVyTmF2aWdhdGlvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGtlZXAgZm9yIGEgc2luZ2xlIGxvY2F0aW9uIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbGVhciBhbGVydFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YmplY3QubmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBrZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlO1xuICAgICAgICB0aGlzLnN1YmplY3QubmV4dCh7IHR5cGU6ICdzdWNjZXNzJywgdGV4dDogbWVzc2FnZSB9KTtcbiAgICB9XG5cbiAgICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmtlZXBBZnRlck5hdmlnYXRpb25DaGFuZ2UgPSBrZWVwQWZ0ZXJOYXZpZ2F0aW9uQ2hhbmdlO1xuICAgICAgICB0aGlzLnN1YmplY3QubmV4dCh7IHR5cGU6ICdlcnJvcicsIHRleHQ6IG1lc3NhZ2UgfSk7XG4gICAgfVxuXG4gICAgZ2V0TWVzc2FnZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NlcnZpY2VzL2FsZXJ0LnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucywgSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbmV4cG9ydCB0eXBlIGN1c3RvbVNlcnZlclJlc3BvbnNlT2JqZWN0ID0geyAnc3VjY2Vzcyc6IGJvb2xlYW4sICdkYXRhJzogYW55LCAnZXJyb3InOiBhbnkgfTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gIEdldEhlYWRlcnMoKSB7XHJcbiAgICBsZXQgaGVhZGVyczogSGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgIGxldCBvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucygpO1xyXG4gICAgb3B0aW9ucy5oZWFkZXJzID0gaGVhZGVycztcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuIFxyXG4gIFJlc3BvbnNlTWFwKHJlczogUmVzcG9uc2UpIHtcclxuICAgIGxldCByZXNwb25zZTogY3VzdG9tU2VydmVyUmVzcG9uc2VPYmplY3QgPSByZXMuanNvbigpO1xyXG4gICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmhhc093blByb3BlcnR5KCdzdWNjZXNzJykpIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSBlbHNlIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgnYWNjZXNzX3Rva2VuJykgfHwgcmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ2hlYWRsaW5lJykpIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgIGVycm9yOiByZXNwb25zZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgR2V0UmVxdWVzdCh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8Y3VzdG9tU2VydmVyUmVzcG9uc2VPYmplY3Q+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkubWFwKHRoaXMuUmVzcG9uc2VNYXApO1xyXG4gIH1cclxuXHJcbiAgUG9zdFJlcXVlc3QodXJsOiBzdHJpbmcsIG9iajogT2JqZWN0KTogT2JzZXJ2YWJsZTxjdXN0b21TZXJ2ZXJSZXNwb25zZU9iamVjdD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgb2JqLCB0aGlzLkdldEhlYWRlcnMoKSkubWFwKHRoaXMuUmVzcG9uc2VNYXApO1xyXG4gIH1cclxuICBcclxuICBQdXRSZXF1ZXN0KHVybDogc3RyaW5nLCBvYmo6IE9iamVjdCk6IE9ic2VydmFibGU8Y3VzdG9tU2VydmVyUmVzcG9uc2VPYmplY3Q+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgb2JqLCB0aGlzLkdldEhlYWRlcnMoKSkubWFwKHRoaXMuUmVzcG9uc2VNYXApO1xyXG4gIH1cclxuXHJcbiAgRGVsZXRlUmVxdWVzdCh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8Y3VzdG9tU2VydmVyUmVzcG9uc2VPYmplY3Q+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCkubWFwKCh0aGlzLlJlc3BvbnNlTWFwKSk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvaHR0cC50cyIsIi8vIFRoZSBmaWxlIGNvbnRlbnRzIGZvciB0aGUgY3VycmVudCBlbnZpcm9ubWVudCB3aWxsIG92ZXJ3cml0ZSB0aGVzZSBkdXJpbmcgYnVpbGQuXHJcbi8vIFRoZSBidWlsZCBzeXN0ZW0gZGVmYXVsdHMgdG8gdGhlIGRldiBlbnZpcm9ubWVudCB3aGljaCB1c2VzIGBlbnZpcm9ubWVudC50c2AsIGJ1dCBpZiB5b3UgZG9cclxuLy8gYHVuZyBidWlsZCAtLWVudj1wcm9kYCB0aGVuIGBlbnZpcm9ubWVudC5wcm9kLnRzYCB3aWxsIGJlIHVzZWQgaW5zdGVhZC5cclxuLy8gVGhlIGxpc3Qgb2Ygd2hpY2ggZW52IG1hcHMgdG8gd2hpY2ggZmlsZSBjYW4gYmUgZm91bmQgaW4gYGFuZ3VsYXItY2xpLmpzb25gLlxyXG5cclxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xyXG4gIHByb2R1Y3Rpb246IGZhbHNlXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCIvLyBUaGlzIGZpbGUgaW5jbHVkZXMgcG9seWZpbGxzIG5lZWRlZCBieSBBbmd1bGFyIDIgYW5kIGlzIGxvYWRlZCBiZWZvcmVcclxuLy8gdGhlIGFwcC4gWW91IGNhbiBhZGQgeW91ciBvd24gZXh0cmEgcG9seWZpbGxzIHRvIHRoaXMgZmlsZS5cclxuXHJcbmltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvc3ltYm9sJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9vYmplY3QnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L2Z1bmN0aW9uJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1pbnQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWZsb2F0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9udW1iZXInO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hdGgnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N0cmluZyc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvZGF0ZSc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvYXJyYXknO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZ2V4cCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvbWFwJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZmxlY3QnO1xyXG5cclxuaW1wb3J0ICdjb3JlLWpzL2VzNy9yZWZsZWN0JztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BvbHlmaWxscy50cyIsIi8qKlxyXG4gKiBTZXJ2ZXItc2lkZSByb3V0ZXMuIE9ubHkgdGhlIGxpc3RlZCByb3V0ZXMgc3VwcG9ydCBodG1sNXB1c2hzdGF0ZS5cclxuICogSGFzIHRvIG1hdGNoIGNsaWVudCBzaWRlIHJvdXRlcy5cclxuICpcclxuICogSW5kZXggKC8pIHJvdXRlIGRvZXMgbm90IGhhdmUgdG8gYmUgbGlzdGVkIGhlcmUuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xyXG4gKiAnaG9tZScsICdhYm91dCdcclxuICogXTtcclxuICoqL1xyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBzdHJpbmdbXSA9IFtcclxuICAgICd0b2RvJywgJ2xvZ2luJywgJ3JlZ2lzdGVyJ1xyXG5dO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnJvdXRlcy50cyIsImltcG9ydCBUb2RvIGZyb20gJy4uL21vZGVscy90b2RvJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvcyhyZXEsIHJlcykge1xyXG4gIFRvZG8uZmluZCh7IHVzZXJfaWQ6IHJlcS5wYXJhbXMuaWQgfSkuc29ydCgnLWRhdGUnKS5leGVjKChlcnIsIFRvZG9zKSA9PiB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogZXJyIH0pO1xyXG4gICAgfVxyXG4gICAgcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBUb2RvcywgZXJyb3I6IG51bGwgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvKHJlcSwgcmVzKSB7XHJcbiAgaWYgKCFyZXEuYm9keS50b2RvLnRvZG9UYXNrKSB7XHJcbiAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6ICdNaXNzaW5nIHRvZG8gdGFzayEnIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKHJlcS5ib2R5LnRvZG8pO1xyXG4gIG5ld1RvZG8uc2F2ZSgoZXJyLCBzYXZlZCkgPT4ge1xyXG4gICAgaWYgKGVycikge1xyXG4gICAgICByZXR1cm4gcmVzLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogbnVsbCwgZXJyb3I6IGVyciB9KTtcclxuICAgIH1cclxuICAgIFRvZG8uZmluZE9uZSh7IF9pZDogc2F2ZWQuX2lkIH0pLmV4ZWMoKGVyciwgdG9kbykgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiBlcnIgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB0b2RvLCBlcnJvcjogbnVsbCB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kbyhyZXEsIHJlcykge1xyXG4gIFRvZG8uZmluZE9uZSh7IF9pZDogcmVxLnBhcmFtcy5faWQgfSkuZXhlYygoZXJyLCB0b2RvKSA9PiB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogZXJyIH0pO1xyXG4gICAgfVxyXG4gICAgcmVzLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB0b2RvLCBlcnJvcjogbnVsbCB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRvZG8ocmVxLCByZXMpIHtcclxuICBUb2RvLmZpbmRPbmUoeyBfaWQ6IHJlcS5wYXJhbXMuaWQgfSkuZXhlYygoZXJyLCB0b2RvKSA9PiB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBkYXRhOiBudWxsLCBlcnJvcjogZXJyIH0pO1xyXG4gICAgfVxyXG4gICAgdG9kby5yZW1vdmUoKCkgPT4ge1xyXG4gICAgICByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IG51bGwsIGVycm9yOiBudWxsIH0pOztcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVG9kbyhyZXEsIHJlcykge1xyXG4gIFRvZG8uZmluZEJ5SWRBbmRVcGRhdGUoeyBfaWQ6IHJlcS5ib2R5LnRvZG8udG9kb0lkIH0sIHsgY29tcGxldGVkOiByZXEuYm9keS50b2RvLmNvbXBsZXRlZCB9LCAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgIGlmIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIGRhdGE6IG51bGwsIGVycm9yOiAnVG9kbyBub3QgZm91bmQnIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICByZXMuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCwgZXJyb3I6IG51bGwgfSk7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2NvbnRyb2xsZXJzL3RvZG8udHMiLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcblxyXG5jb25zdCB0b2RvU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgdG9kb1Rhc2s6IHsgdHlwZTogJ1N0cmluZycsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgY29tcGxldGVkOiB7IHR5cGU6ICdCb29sZWFuJywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICB1c2VyX2lkOnsgdHlwZTogJ1N0cmluZycsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgZGF0ZTogeyB0eXBlOiAnRGF0ZScsIGRlZmF1bHQ6IERhdGUubm93LCByZXF1aXJlZDogdHJ1ZSB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKCdUb2RvJywgdG9kb1NjaGVtYSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvbW9kZWxzL3RvZG8udHMiLCJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCB7U2NoZW1hfSBmcm9tICdtb25nb29zZSc7XHJcbmxldCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgICBmaXJzdE5hbWU6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBsYXN0TmFtZToge3R5cGU6IFN0cmluZ30sXHJcbiAgICBlbWFpbDoge3R5cGU6IFN0cmluZywgbG93ZXJjYXNlOiB0cnVlLCB1bmlxdWU6IHRydWV9LFxyXG4gICAgY3JlYXRlZEF0OiB7dHlwZTogRGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3coKX0sXHJcbiAgICBwYXNzd29yZDoge3R5cGU6IFN0cmluZ31cclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9tb2RlbHMvdXNlci50cyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgKiBhcyBVc2VyQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy91c2VyJztcclxuXHJcbmxldCByb3V0ZXI6IGV4cHJlc3MuUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5yb3V0ZSgnL2xvZ2luJykucG9zdChVc2VyQ29udHJvbGxlci5sb2dpbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvcm91dGVzL2xvZ2luLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCAqIGFzIFVzZXJDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL3VzZXInO1xyXG5cclxubGV0IHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxucm91dGVyLnJvdXRlKCcvcmVnaXN0ZXInKS5wb3N0KFVzZXJDb250cm9sbGVyLmNyZWF0ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvcm91dGVzL3JlZ2lzdGVyLnRzIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbmltcG9ydCAqIGFzIFRvZG9Db250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL3RvZG8nO1xyXG5cclxubGV0IHJvdXRlcjogZXhwcmVzcy5Sb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxuLy8gR2V0IGFsbCBQb3N0c1xyXG5yb3V0ZXIucm91dGUoJy90b2RvLzppZCcpLmdldChUb2RvQ29udHJvbGxlci5nZXRUb2Rvcyk7XHJcblxyXG4vLyBHZXQgb25lIHBvc3QgYnkgY3VpZFxyXG5yb3V0ZXIucm91dGUoJy90b2RvLzppZCcpLmdldChUb2RvQ29udHJvbGxlci5nZXRUb2RvKTtcclxuXHJcbi8vIEFkZCBhIG5ldyBQb3N0XHJcbnJvdXRlci5yb3V0ZSgnL3RvZG8nKS5wb3N0KFRvZG9Db250cm9sbGVyLmFkZFRvZG8pO1xyXG5cclxuLy8gRGVsZXRlIGEgcG9zdCBieSBjdWlkXHJcbnJvdXRlci5yb3V0ZSgnL3RvZG8vOmlkJykuZGVsZXRlKFRvZG9Db250cm9sbGVyLmRlbGV0ZVRvZG8pO1xyXG5cclxuLy9VcGRhdGUgZGF0YVxyXG5yb3V0ZXIucm91dGUoJy90b2RvJykucHV0KFRvZG9Db250cm9sbGVyLnVwZGF0ZVRvZG8pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3JvdXRlcy90b2RvLnRzIiwiaW1wb3J0ICogYXMgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9rZW4odXNlcjogT2JqZWN0KSB7XHJcbiAgICBjb25zb2xlLmxvZygndXNlciBPYmonLCB1c2VyKTtcclxuICAgIGxldCB0b2tlbiA9IGp3dC5zaWduKHVzZXIsIGNvbmZpZy5qd3RTZWNyZXQsIHsgZXhwaXJlc0luOiBcIjkwIGRheXNcIiB9KTsgLy9leHBpcmVzIGluIDkwIGRheXNcclxuICAgIHJldHVybiB0b2tlbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRva2VuKHRva2VuOiBzdHJpbmcpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgand0LnZlcmlmeSh0b2tlbiwgY29uZmlnLmp3dFNlY3JldCwgKGVyciwgdmVyaWZpZWRKd3QpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc29sdmUodmVyaWZpZWRKd3QpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvc2VydmljZS92ZXJpZnkudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYWxlcnQvYWxlcnQuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuY2VudGVye1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5jaGVja2VkIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICB9XFxyXFxuICAuY2hlY2tib3gge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcXHJcXG4gIH1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC90b2RvL3RvZG8uY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgKm5nSWY9XFxcIm1lc3NhZ2VcXFwiIFtuZ0NsYXNzXT1cXFwieyAnYWxlcnQnOiBtZXNzYWdlLCAnYWxlcnQtc3VjY2Vzcyc6IG1lc3NhZ2UudHlwZSA9PT0gJ3N1Y2Nlc3MnLCAnYWxlcnQtZGFuZ2VyJzogbWVzc2FnZS50eXBlID09PSAnZXJyb3InIH1cXFwiPnt7bWVzc2FnZS50ZXh0fX08L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hbGVydC9hbGVydC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjwhLS08aDE+XFxuICB7e3RpdGxlfX1cXG48L2gxPi0tPlxcblxcbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8YWxlcnQ+PC9hbGVydD5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTggY29sLXNtLW9mZnNldC0yXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1xcXCI+XFxuICAgICAgICAgICAgPGgyPkxvZ2luPC9oMj5cXG4gICAgICAgICAgICA8IS0tPGZvcm0gbmFtZT1cXFwiZm9ybVxcXCIgKG5nU3VibWl0KT1cXFwiZi5mb3JtLnZhbGlkICYmIGxvZ2luKClcXFwiICNmPVxcXCJuZ0Zvcm1cXFwiIG5vdmFsaWRhdGU+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieyAnaGFzLWVycm9yJzogZi5zdWJtaXR0ZWQgJiYgIXVzZXJuYW1lLnZhbGlkIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVcXFwiPlVzZXJuYW1lPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJ1c2VybmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcIm1vZGVsLnVzZXJuYW1lXFxcIiAjdXNlcm5hbWU9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJmLnN1Ym1pdHRlZCAmJiAhdXNlcm5hbWUudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5Vc2VybmFtZSBpcyByZXF1aXJlZDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7ICdoYXMtZXJyb3InOiBmLnN1Ym1pdHRlZCAmJiAhcGFzc3dvcmQudmFsaWQgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgWyhuZ01vZGVsKV09XFxcIm1vZGVsLnBhc3N3b3JkXFxcIiAjcGFzc3dvcmQ9XFxcIm5nTW9kZWxcXFwiIHJlcXVpcmVkIC8+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJmLnN1Ym1pdHRlZCAmJiAhcGFzc3dvcmQudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5QYXNzd29yZCBpcyByZXF1aXJlZDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XFxcImxvYWRpbmdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPkxvZ2luPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nICpuZ0lmPVxcXCJsb2FkaW5nXFxcIiBzcmM9XFxcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEVBQVFBUElBQVAvLy93QUFBTUxDd2tKQ1FnQUFBR0ppWW9LQ2dwS1NraUgvQzA1RlZGTkRRVkJGTWk0d0F3RUFBQUFoL2hwRGNtVmhkR1ZrSUhkcGRHZ2dZV3BoZUd4dllXUXVhVzVtYndBaCtRUUpDZ0FBQUN3QUFBQUFFQUFRQUFBRE13aTYzUDR3eWtsckUyTUlPZ2dabkFkT21HWUpSYkV4d3JvVW1jRzJMbURFd25IUUxWc1lPZDJtQnprWURBZEthK2RJQUFBaCtRUUpDZ0FBQUN3QUFBQUFFQUFRQUFBRE5BaTYzUDVPakNFZ0c0UU11N0RtaWtSeFFsRlVZREVaSUdCTVJWc2FxSHdjdFhYZjdXRVlCNEFnMXhqaWhrTVpzaVVrS2hJQUlma0VDUW9BQUFBc0FBQUFBQkFBRUFBQUF6WUl1aklqSzhwQnlKRE1sRll2Qm9WakhBNzBHVTd4U1VKaG1LdHdIUEFLekxPOUhNYW9Ld0paN1JmOEFZUEREektwWkJxZnZ3UUFJZmtFQ1FvQUFBQXNBQUFBQUJBQUVBQUFBek1JdW1JbEs4b3locEhzbkZaZmhZdW1DWVVoREFReFJJZGhIQkdxUm9LdzBSOERZbEpkOHowZk1EZ3NHby9JcEhJNVRBQUFJZmtFQ1FvQUFBQXNBQUFBQUJBQUVBQUFBeklJdW5Jbkswcm5aQlR3R1BOTWdRd21kc05nWEdKVWxJV0V1UjVvV1VJcHo4cEFFQU1lNlR3Znd5WXNHby9JcEZLU0FBQWgrUVFKQ2dBQUFDd0FBQUFBRUFBUUFBQURNd2k2SU1LUU9SZmpkT2U4MnA0d0djY2M0Q0V1UXJhZHlsZXNvakVNQmdzVWMyRzdzRFgzbFFHQk1MQUppYnVmYlNsS0FBQWgrUVFKQ2dBQUFDd0FBQUFBRUFBUUFBQURNZ2k2M1A3d0NSSFpuRlZkbWdIdTJuRndsV0NJM1dHYzNUU1doVUZHeFRBVWtHQ2J0Z0VOQk1KQUVKc3hnTUxXenBFQUFDSDVCQWtLQUFBQUxBQUFBQUFRQUJBQUFBTXlDTHJjL2pES1NhdGxRdFNjS2RjZUNBakRJSTdIY1E0RU1UQ3B5ckN1VUJqQ1lSZ0hWdHFsQWlCMVloaUNubHNSa0FBQU93QUFBQUFBQUFBQUFBPT1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9yZWdpc3RlciddXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1saW5rXFxcIj5SZWdpc3RlcjwvYT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9mb3JtPi0tPlxcbiAgICAgICAgICAgIDxmb3JtIG5hbWU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcImYuZm9ybS52YWxpZCAmJiBsb2dpbigpXFxcIiAjZj1cXFwibmdGb3JtXFxcIiBub3ZhbGlkYXRlPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsgJ2hhcy1lcnJvcic6IGYuc3VibWl0dGVkICYmICFlbWFpbC52YWxpZCB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImVtYWlsXFxcIj5Vc2VybmFtZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIFsobmdNb2RlbCldPVxcXCJtb2RlbC5lbWFpbFxcXCIgI2VtYWlsPVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZCAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiZi5zdWJtaXR0ZWQgJiYgIWVtYWlsLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+VXNlcm5hbWUgaXMgcmVxdWlyZWQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiIFtuZ0NsYXNzXT1cXFwieyAnaGFzLWVycm9yJzogZi5zdWJtaXR0ZWQgJiYgIXBhc3N3b3JkLnZhbGlkIH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicGFzc3dvcmRcXFwiPlBhc3N3b3JkPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIFsobmdNb2RlbCldPVxcXCJtb2RlbC5wYXNzd29yZFxcXCIgI3Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZCAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiZi5zdWJtaXR0ZWQgJiYgIXBhc3N3b3JkLnZhbGlkXFxcIiBjbGFzcz1cXFwiaGVscC1ibG9ja1xcXCI+UGFzc3dvcmQgaXMgcmVxdWlyZWQ8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVxcXCJsb2FkaW5nXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5Mb2dpbjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cXFwibG9hZGluZ1xcXCIgc3JjPVxcXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhFQUFRQVBJQUFQLy8vd0FBQU1MQ3drSkNRZ0FBQUdKaVlvS0NncEtTa2lIL0MwNUZWRk5EUVZCRk1pNHdBd0VBQUFBaC9ocERjbVZoZEdWa0lIZHBkR2dnWVdwaGVHeHZZV1F1YVc1bWJ3QWgrUVFKQ2dBQUFDd0FBQUFBRUFBUUFBQURNd2k2M1A0d3lrbHJFMk1JT2dnWm5BZE9tR1lKUmJFeHdyb1VtY0cyTG1ERXduSFFMVnNZT2QybUJ6a1lEQWRLYStkSUFBQWgrUVFKQ2dBQUFDd0FBQUFBRUFBUUFBQUROQWk2M1A1T2pDRWdHNFFNdTdEbWlrUnhRbEZVWURFWklHQk1SVnNhcUh3Y3RYWGY3V0VZQjRBZzF4amloa01ac2lVa0toSUFJZmtFQ1FvQUFBQXNBQUFBQUJBQUVBQUFBellJdWpJaks4cEJ5SkRNbEZZdkJvVmpIQTcwR1U3eFNVSmhtS3R3SFBBS3pMTzlITWFvS3dKWjdSZjhBWVBERHpLcFpCcWZ2d1FBSWZrRUNRb0FBQUFzQUFBQUFCQUFFQUFBQXpNSXVtSWxLOG95aHBIc25GWmZoWXVtQ1lVaERBUXhSSWRoSEJHcVJvS3cwUjhEWWxKZDh6MGZNRGdzR28vSXBISTVUQUFBSWZrRUNRb0FBQUFzQUFBQUFCQUFFQUFBQXpJSXVuSW5LMHJuWkJUd0dQTk1nUXdtZHNOZ1hHSlVsSVdFdVI1b1dVSXB6OHBBRUFNZTZUd2Z3eVlzR28vSXBGS1NBQUFoK1FRSkNnQUFBQ3dBQUFBQUVBQVFBQUFETXdpNklNS1FPUmZqZE9lODJwNHdHY2NjNENFdVFyYWR5bGVzb2pFTUJnc1VjMkc3c0RYM2xRR0JNTEFKaWJ1ZmJTbEtBQUFoK1FRSkNnQUFBQ3dBQUFBQUVBQVFBQUFETWdpNjNQN3dDUkhabkZWZG1nSHUybkZ3bFdDSTNXR2MzVFNXaFVGR3hUQVVrR0NidGdFTkJNSkFFSnN4Z01MV3pwRUFBQ0g1QkFrS0FBQUFMQUFBQUFBUUFCQUFBQU15Q0xyYy9qREtTYXRsUXRTY0tkY2VDQWpESUk3SGNRNEVNVENweXJDdVVCakNZUmdIVnRxbEFpQjFZaGlDbmxzUmtBQUFPd0FBQUFBQUFBQUFBQT09XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvcmVnaXN0ZXInXVxcXCIgY2xhc3M9XFxcImJ0biBidG4tbGlua1xcXCI+UmVnaXN0ZXI8L2E+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZm9ybT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxhbGVydD48L2FsZXJ0PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOCBjb2wtc20tb2Zmc2V0LTJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXFxcIj5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8aDI+UmVnaXN0ZXI8L2gyPlxcbiAgICAgICAgICAgIDxmb3JtIG5hbWU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcImYuZm9ybS52YWxpZCAmJiByZWdpc3RlcigpXFxcIiAjZj1cXFwibmdGb3JtXFxcIiBub3ZhbGlkYXRlPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsgJ2hhcy1lcnJvcic6IGYuc3VibWl0dGVkICYmICFmaXJzdE5hbWUudmFsaWQgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJmaXJzdE5hbWVcXFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcIm1vZGVsLmZpcnN0TmFtZVxcXCIgI2ZpcnN0TmFtZT1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImYuc3VibWl0dGVkICYmICFmaXJzdE5hbWUudmFsaWRcXFwiIGNsYXNzPVxcXCJoZWxwLWJsb2NrXFxcIj5GaXJzdCBOYW1lIGlzIHJlcXVpcmVkPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsgJ2hhcy1lcnJvcic6IGYuc3VibWl0dGVkICYmICFsYXN0TmFtZS52YWxpZCB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImxhc3ROYW1lXFxcIj5MYXN0IE5hbWU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImxhc3ROYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwibW9kZWwubGFzdE5hbWVcXFwiICNsYXN0TmFtZT1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImYuc3VibWl0dGVkICYmICFsYXN0TmFtZS52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPkxhc3QgTmFtZSBpcyByZXF1aXJlZDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgW25nQ2xhc3NdPVxcXCJ7ICdoYXMtZXJyb3InOiBmLnN1Ym1pdHRlZCAmJiAhZW1haWwudmFsaWQgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJ1c2VybmFtZVxcXCI+VXNlcm5hbWU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBbKG5nTW9kZWwpXT1cXFwibW9kZWwuZW1haWxcXFwiICNlbWFpbD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImYuc3VibWl0dGVkICYmICFlbWFpbC52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPkVtYWlsIGlzIHJlcXVpcmVkPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbbmdDbGFzc109XFxcInsgJ2hhcy1lcnJvcic6IGYuc3VibWl0dGVkICYmICFwYXNzd29yZC52YWxpZCB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInBhc3N3b3JkXFxcIj5QYXNzd29yZDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInBhc3N3b3JkXFxcIiBbKG5nTW9kZWwpXT1cXFwibW9kZWwucGFzc3dvcmRcXFwiICNwYXNzd29yZD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImYuc3VibWl0dGVkICYmICFwYXNzd29yZC52YWxpZFxcXCIgY2xhc3M9XFxcImhlbHAtYmxvY2tcXFwiPlBhc3N3b3JkIGlzIHJlcXVpcmVkPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cXFwibG9hZGluZ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+UmVnaXN0ZXI8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XFxcImxvYWRpbmdcXFwiIHNyYz1cXFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoRUFBUUFQSUFBUC8vL3dBQUFNTEN3a0pDUWdBQUFHSmlZb0tDZ3BLU2tpSC9DMDVGVkZORFFWQkZNaTR3QXdFQUFBQWgvaHBEY21WaGRHVmtJSGRwZEdnZ1lXcGhlR3h2WVdRdWFXNW1id0FoK1FRSkNnQUFBQ3dBQUFBQUVBQVFBQUFETXdpNjNQNHd5a2xyRTJNSU9nZ1puQWRPbUdZSlJiRXh3cm9VbWNHMkxtREV3bkhRTFZzWU9kMm1CemtZREFkS2ErZElBQUFoK1FRSkNnQUFBQ3dBQUFBQUVBQVFBQUFETkFpNjNQNU9qQ0VnRzRRTXU3RG1pa1J4UWxGVVlERVpJR0JNUlZzYXFId2N0WFhmN1dFWUI0QWcxeGppaGtNWnNpVWtLaElBSWZrRUNRb0FBQUFzQUFBQUFCQUFFQUFBQXpZSXVqSWpLOHBCeUpETWxGWXZCb1ZqSEE3MEdVN3hTVUpobUt0d0hQQUt6TE85SE1hb0t3Slo3UmY4QVlQRER6S3BaQnFmdndRQUlma0VDUW9BQUFBc0FBQUFBQkFBRUFBQUF6TUl1bUlsSzhveWhwSHNuRlpmaFl1bUNZVWhEQVF4UklkaEhCR3FSb0t3MFI4RFlsSmQ4ejBmTURnc0dvL0lwSEk1VEFBQUlma0VDUW9BQUFBc0FBQUFBQkFBRUFBQUF6SUl1bkluSzByblpCVHdHUE5NZ1F3bWRzTmdYR0pVbElXRXVSNW9XVUlwejhwQUVBTWU2VHdmd3lZc0dvL0lwRktTQUFBaCtRUUpDZ0FBQUN3QUFBQUFFQUFRQUFBRE13aTZJTUtRT1JmamRPZTgycDR3R2NjYzRDRXVRcmFkeWxlc29qRU1CZ3NVYzJHN3NEWDNsUUdCTUxBSmlidWZiU2xLQUFBaCtRUUpDZ0FBQUN3QUFBQUFFQUFRQUFBRE1naTYzUDd3Q1JIWm5GVmRtZ0h1Mm5Gd2xXQ0kzV0djM1RTV2hVRkd4VEFVa0dDYnRnRU5CTUpBRUpzeGdNTFd6cEVBQUNINUJBa0tBQUFBTEFBQUFBQVFBQkFBQUFNeUNMcmMvakRLU2F0bFF0U2NLZGNlQ0FqRElJN0hjUTRFTVRDcHlyQ3VVQmpDWVJnSFZ0cWxBaUIxWWhpQ25sc1JrQUFBT3dBQUFBQUFBQUFBQUE9PVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XFxcIlsnL2xvZ2luJ11cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWxpbmtcXFwiPkNhbmNlbDwvYT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMVxcXCI+XFxuICAgIDxkaXYgc3R5bGU9XFxcImZsb2F0OmxlZnRcXFwiPlxcbiAgICAgIDxoMz5Ub2RvQXBwPC9oMz5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgc3R5bGU9XFxcInRleHQtYWxpZ246Y2VudGVyXFxcIj5cXG4gICAgICA8aDM+e3tjdXJyZW50VXNlci5maXJzdE5hbWUgKyAnICcgKyBjdXJyZW50VXNlci5sYXN0TmFtZSB9fTwvaDM+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMVxcXCI+XFxuICAgIDxoND48YSAoY2xpY2spPVxcXCJsb2dvdXQoKVxcXCI+TG9nb3V0PC9hPjwvaDQ+XFxuICA8L2Rpdj5cXG48L25hdj5cXG48YWxlcnQ+PC9hbGVydD5cXG48ZGl2IGNsYXNzPVxcXCJjb2wtbGctMTJcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcbiAgICAgIDxmb3JtICN0b2RvRm9ybT1cXFwibmdGb3JtXFxcIiAoc3VibWl0KT1cXFwiYWRkVG9kbyh0b2RvRm9ybS52YWxpZCwgdG9kb0Zvcm0udmFsdWUpXFxcIiBub3ZhbGlkYXRlIGNsYXNzPVxcXCJuYXZiYXItZm9ybSBjZW50ZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cXFwiV2hhdCBuZWVkcyB0byBiZSBkb25lP1xcXCIgbmFtZT1cXFwidG9kb1Rhc2tcXFwiIChrZXl1cC5lbnRlcik9XFxcInRvZG9UYXNrPScnXFxcIiBbKG5nTW9kZWwpXT1cXFwidG9kb1Rhc2tcXFwiIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cXFwibG9hZGluZ1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj5BZGQ8L2J1dHRvbj5cXG4gICAgICAgIDxpbWcgKm5nSWY9XFxcImxvYWRpbmdcXFwiIHNyYz1cXFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoRUFBUUFQSUFBUC8vL3dBQUFNTEN3a0pDUWdBQUFHSmlZb0tDZ3BLU2tpSC9DMDVGVkZORFFWQkZNaTR3QXdFQUFBQWgvaHBEY21WaGRHVmtJSGRwZEdnZ1lXcGhlR3h2WVdRdWFXNW1id0FoK1FRSkNnQUFBQ3dBQUFBQUVBQVFBQUFETXdpNjNQNHd5a2xyRTJNSU9nZ1puQWRPbUdZSlJiRXh3cm9VbWNHMkxtREV3bkhRTFZzWU9kMm1CemtZREFkS2ErZElBQUFoK1FRSkNnQUFBQ3dBQUFBQUVBQVFBQUFETkFpNjNQNU9qQ0VnRzRRTXU3RG1pa1J4UWxGVVlERVpJR0JNUlZzYXFId2N0WFhmN1dFWUI0QWcxeGppaGtNWnNpVWtLaElBSWZrRUNRb0FBQUFzQUFBQUFCQUFFQUFBQXpZSXVqSWpLOHBCeUpETWxGWXZCb1ZqSEE3MEdVN3hTVUpobUt0d0hQQUt6TE85SE1hb0t3Slo3UmY4QVlQRER6S3BaQnFmdndRQUlma0VDUW9BQUFBc0FBQUFBQkFBRUFBQUF6TUl1bUlsSzhveWhwSHNuRlpmaFl1bUNZVWhEQVF4UklkaEhCR3FSb0t3MFI4RFlsSmQ4ejBmTURnc0dvL0lwSEk1VEFBQUlma0VDUW9BQUFBc0FBQUFBQkFBRUFBQUF6SUl1bkluSzByblpCVHdHUE5NZ1F3bWRzTmdYR0pVbElXRXVSNW9XVUlwejhwQUVBTWU2VHdmd3lZc0dvL0lwRktTQUFBaCtRUUpDZ0FBQUN3QUFBQUFFQUFRQUFBRE13aTZJTUtRT1JmamRPZTgycDR3R2NjYzRDRXVRcmFkeWxlc29qRU1CZ3NVYzJHN3NEWDNsUUdCTUxBSmlidWZiU2xLQUFBaCtRUUpDZ0FBQUN3QUFBQUFFQUFRQUFBRE1naTYzUDd3Q1JIWm5GVmRtZ0h1Mm5Gd2xXQ0kzV0djM1RTV2hVRkd4VEFVa0dDYnRnRU5CTUpBRUpzeGdNTFd6cEVBQUNINUJBa0tBQUFBTEFBQUFBQVFBQkFBQUFNeUNMcmMvakRLU2F0bFF0U2NLZGNlQ0FqRElJN0hjUTRFTVRDcHlyQ3VVQmpDWVJnSFZ0cWxBaUIxWWhpQ25sc1JrQUFBT3dBQUFBQUFBQUFBQUE9PVxcXCJcXG4gICAgICAgIC8+XFxuICAgICAgPC9mb3JtPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInB1bGwtcmlnaHRcXFwiPjxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIiAoY2xpY2spPVxcXCJsb2FkVG9kb3MoKVxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaFxcXCI+PC9zcGFuPjwvYnV0dG9uPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPCEtLSBMaXN0IGdyb3VwIC0tPlxcbiAgICA8dWwgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiPlxcbiAgICAgIDxsaSAqbmdGb3I9XFxcImxldCB0b2RvIG9mIHRvZG9MaXN0XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG4gICAgICAgIDxzcGFuPjxpbnB1dCAoY2xpY2spPVxcXCJ1cGRhdGVUb2RvKCRldmVudCx0b2RvKVxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJjaGVja2JveFxcXCIgWyhuZ01vZGVsKV09XFxcInRvZG8uY29tcGxldGVkXFxcIiAvPjwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cXFwieydjaGVja2VkJzogdG9kby5jb21wbGV0ZWR9XFxcIj57e3RvZG8udG9kb1Rhc2t9fTwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwdWxsLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVxcXCIgKGNsaWNrKT1cXFwiZGVsZXRlVG9kbyh0b2RvLl9pZClcXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tdHJhc2hcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICA8L2Rpdj5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC90b2RvL3RvZG8uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbXBpbGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIlxuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCJcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbXByZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2FycmF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvYXJyYXlcIlxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvZGF0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2RhdGVcIlxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXBcIlxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbWF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L21hdGhcIlxuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbnVtYmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbnVtYmVyXCJcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L29iamVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L29iamVjdFwiXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCJcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWludFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcmVmbGVjdFwiXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9yZWdleHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWdleHBcIlxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc2V0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc2V0XCJcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3N0cmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3N0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zeW1ib2xcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zeW1ib2xcIlxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczcvcmVmbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM3L3JlZmxlY3RcIlxuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY3J5cHRvXCJcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpzb253ZWJ0b2tlblwiXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL1N1YmplY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIlxuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=