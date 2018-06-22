webpackJsonp(["main"],{

/***/ "../../../../../../../node_modules/ngx-cookie-service/cookie-service/cookie.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
// This service is based on the `ng2-cookies` package which sadly is not a service and does
// not use `DOCUMENT` injection and therefore doesn't work well with AoT production builds.
// Package: https://github.com/BCJTI/ng2-cookies


var CookieService = (function () {
    function CookieService(
        // The type `Document` may not be used here. Although a fix is on its way,
        // we will go with `any` for now to support Angular 2.4.x projects.
        // Issue: https://github.com/angular/angular/issues/12631
        // Fix: https://github.com/angular/angular/pull/14894
        document) {
        this.document = document;
        // To avoid issues with server side prerendering, check if `document` is defined.
        this.documentIsAccessible = document !== undefined;
    }
    /**
     * @param name Cookie name
     * @returns {boolean}
     */
    CookieService.prototype.check = function (name) {
        if (!this.documentIsAccessible) {
            return false;
        }
        name = encodeURIComponent(name);
        var regExp = this.getCookieRegExp(name);
        var exists = regExp.test(this.document.cookie);
        return exists;
    };
    /**
     * @param name Cookie name
     * @returns {any}
     */
    CookieService.prototype.get = function (name) {
        if (this.documentIsAccessible && this.check(name)) {
            name = encodeURIComponent(name);
            var regExp = this.getCookieRegExp(name);
            var result = regExp.exec(this.document.cookie);
            return decodeURIComponent(result[1]);
        }
        else {
            return '';
        }
    };
    /**
     * @returns {}
     */
    CookieService.prototype.getAll = function () {
        if (!this.documentIsAccessible) {
            return {};
        }
        var cookies = {};
        var document = this.document;
        if (document.cookie && document.cookie !== '') {
            var split = document.cookie.split(';');
            for (var i = 0; i < split.length; i += 1) {
                var currentCookie = split[i].split('=');
                currentCookie[0] = currentCookie[0].replace(/^ /, '');
                cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
            }
        }
        return cookies;
    };
    /**
     * @param name    Cookie name
     * @param value   Cookie value
     * @param expires Number of days until the cookies expires or an actual `Date`
     * @param path    Cookie path
     * @param domain  Cookie domain
     * @param secure  Secure flag
     */
    CookieService.prototype.set = function (name, value, expires, path, domain, secure) {
        if (!this.documentIsAccessible) {
            return;
        }
        var cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
        if (expires) {
            if (typeof expires === 'number') {
                var dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                cookieString += 'expires=' + dateExpires.toUTCString() + ';';
            }
            else {
                cookieString += 'expires=' + expires.toUTCString() + ';';
            }
        }
        if (path) {
            cookieString += 'path=' + path + ';';
        }
        if (domain) {
            cookieString += 'domain=' + domain + ';';
        }
        if (secure) {
            cookieString += 'secure;';
        }
        this.document.cookie = cookieString;
    };
    /**
     * @param name   Cookie name
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    CookieService.prototype.delete = function (name, path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        this.set(name, '', -1, path, domain);
    };
    /**
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    CookieService.prototype.deleteAll = function (path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        var cookies = this.getAll();
        for (var cookieName in cookies) {
            if (cookies.hasOwnProperty(cookieName)) {
                this.delete(cookieName, path, domain);
            }
        }
    };
    /**
     * @param name Cookie name
     * @returns {RegExp}
     */
    CookieService.prototype.getCookieRegExp = function (name) {
        var escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/ig, '\\$1');
        return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
    };
    return CookieService;
}());

CookieService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/** @nocollapse */
CookieService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */],] },] },
]; };
//# sourceMappingURL=cookie.service.js.map

/***/ }),

/***/ "../../../../../../../node_modules/ngx-cookie-service/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cookie_service_cookie_service__ = __webpack_require__("../../../../../../../node_modules/ngx-cookie-service/cookie-service/cookie.service.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cookie_service_cookie_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cartservices__ = __webpack_require__("../../../../../src/app/services/cartservices.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cartpage_cart_component__ = __webpack_require__("../../../../../src/app/cartpage/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_productservice__ = __webpack_require__("../../../../../src/app/services/productservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loginpage_login_component__ = __webpack_require__("../../../../../src/app/loginpage/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_loginservices__ = __webpack_require__("../../../../../src/app/services/loginservices.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_cookie_service__ = __webpack_require__("../../../../../../../node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__productpage_product_component__ = __webpack_require__("../../../../../src/app/productpage/product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__loginpage_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__productpage_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_1__cartpage_cart_component__["a" /* CartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__loginpage_login_component__["a" /* LoginComponent */] },
                    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_14__productpage_product_component__["a" /* ProductComponent */] },
                    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_1__cartpage_cart_component__["a" /* CartComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_loginservices__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_12_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_3__services_productservice__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_0__services_cartservices__["a" /* CartService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/cartpage/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-invalid:not(.ng-pristine):not(.required-invalid) {\r\n    border: 1px solid #d93a3e;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cartpage/cart.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-header></app-header>\r\n\r\n<div *ngIf=\"itemCarts?.length == 0\">\r\n<h3>There is no data in the cart</h3>\r\n\r\n</div>\r\n<div class=\"row\">\r\n    \r\n        <div class=\"col-sm-6 col-md-4\" *ngFor=\"let itemCart of itemCarts\"> \r\n            <div class=\"thumbnail\">\r\n                <img src={{itemCart.product.image}}   style=\"max-width:250px\">\r\n                <div class=\"caption\">\r\n                    <h3>{{itemCart.product.name}}</h3>\r\n                    <h4>Quantity: {{itemCart.quantity}}</h4>\r\n                    <div class=\"clearfix\">\r\n                        <div class=\"price pull-left\"><strong>Rs.{{itemCart.product.price}}</strong></div>\r\n                        \r\n                        <button class=\"btn btn-danger pull-right\" (click)=remove(itemCart) >Remove</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/cartpage/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cartservices__ = __webpack_require__("../../../../../src/app/services/cartservices.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../../../../node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, cookies, router) {
        this.cartService = cartService;
        this.cookies = cookies;
        this.router = router;
        this.access = {};
        this.itemCarts = [];
        if (cookies.get("userInfo") === undefined || cookies.get("userInfo") === "") {
            this.router.navigate(['']);
        }
    }
    CartComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    CartComponent.prototype.remove = function (itemCart) {
        var _this = this;
        this.cartService.deleteFromCart(itemCart.product.name)
            .then(function (res) {
            _this.getData();
            alert("Deleted");
        })
            .catch(function (err) {
            alert(err);
        });
    };
    CartComponent.prototype.getData = function () {
        var _this = this;
        this.access = JSON.parse(this.cookies.get("userInfo"));
        this.cartService.getCartData(this.access.userId).then(function (res) {
            _this.itemCarts = res;
        });
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/cartpage/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cartpage/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cartservices__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a routerLink=\"/product\" routerLinkActive=\"active\" class=\"navbar-brand\">Products List</a>\n        <a routerLink=\"/cart\" routerLinkActive=\"active\"  class=\"navbar-brand\">Shopping Cart</a>\n      </div>\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-right\">\n          <li><a routerLink=\"/\" (click)=\"logout()\" class=\"navbar-brand\" routerLinkActive=\"active\">logout</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav> \n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../../../../node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(cookiesServce, router) {
        this.cookiesServce = cookiesServce;
        this.router = router;
    }
    HeaderComponent.prototype.logout = function () {
        this.cookiesServce.deleteAll();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loginpage/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-invalid:not(.ng-pristine):not(.required-invalid) {\r\n    border: 1px solid #d93a3e;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginpage/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">    \r\n        <div id=\"loginbox\" style=\"margin-top:50px;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">                    \r\n            <div class=\"panel panel-info\" >\r\n                    <div class=\"panel-heading\">\r\n                        <div class=\"panel-title\">Sign In</div>\r\n                    </div>     \r\n\r\n                    <div style=\"padding-top:30px\" class=\"panel-body\" >\r\n\r\n                        <div style=\"display:none\" id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\r\n                            \r\n                        \r\n                                    \r\n                            <div style=\"margin-bottom: 25px\" class=\"input-group\">\r\n                                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\r\n                                        <input id=\"login-email\" type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"loginDetails.email\" value=\"\" placeholder=\"email\">                                        \r\n                                    </div>\r\n                                \r\n                            <div style=\"margin-bottom: 25px\" class=\"input-group\">\r\n                                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\r\n                                        <input id=\"login-password\" type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"loginDetails.password\" placeholder=\"password\">\r\n                                    </div>\r\n                                    \r\n\r\n                                \r\n\r\n                                <div style=\"margin-top:10px\" class=\"form-group\">\r\n                                    <!-- Button -->\r\n\r\n                                    <div class=\"col-sm-12 controls\">\r\n                                      <a id=\"btn-login\" (click)=\"login()\" class=\"btn btn-success\">Login  </a>\r\n\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12 control\">\r\n                                        <div style=\"border-top: 1px solid#888; padding-top:15px; font-size:85%\" >\r\n                                            Don't have an account! \r\n                                        <a href=\"#\" onClick=\"$('#loginbox').hide(); $('#signupbox').show()\">\r\n                                            Sign Up Here\r\n                                        </a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>      \r\n\r\n\r\n\r\n                        </div>                     \r\n                    </div>  \r\n        </div>\r\n        <div id=\"signupbox\" style=\"display:none; margin-top:50px\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n                    <div class=\"panel panel-info\">\r\n                        <div class=\"panel-heading\">\r\n                            <div class=\"panel-title\">Sign Up</div>\r\n                            <div style=\"float:right; font-size: 85%; position: relative; top:-10px\"><a id=\"signinlink\" href=\"#\" onclick=\"$('#signupbox').hide(); $('#loginbox').show()\">Sign In</a></div>\r\n                        </div>  \r\n                        <div class=\"panel-body\" >\r\n                            <form id=\"signupform\" class=\"form-horizontal\" role=\"form\" \r\n                            [formGroup] = \"form\"\r\n                            (ngSubmit)=\"onSubmit(form.value)\"\r\n                            >\r\n                                \r\n                                <div id=\"signupalert\" style=\"display:none\" class=\"alert alert-danger\">\r\n                                    <p>Error:</p>\r\n                                    <span></span>\r\n                                </div>\r\n                                    \r\n                                \r\n                                  \r\n                                <div class=\"form-group\">\r\n                                    <label for=\"email\" class=\"col-md-3 control-label\">Email</label>\r\n                                    <div class=\"col-md-9\">\r\n                                        <input type=\"text\" class=\"form-control\" name=\"email\" required placeholder=\"Email Address\" re formControlName=\"email\">\r\n                                    </div>\r\n                                </div>\r\n                                    \r\n                                <div class=\"form-group\">\r\n                                    <label for=\"firstname\" class=\"col-md-3 control-label\">Name</label>\r\n                                    <div class=\"col-md-9\">\r\n                                        <input type=\"text\" class=\"form-control\" name=\"name\" required placeholder=\"Name\"  formControlName=\"name\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"password\" class=\"col-md-3 control-label\">Password</label>\r\n                                    <div class=\"col-md-9\">\r\n                                        <input type=\"password\" class=\"form-control\" name=\"password\" required placeholder=\"Password\" \r\n                                         formControlName=\"password\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"password\" class=\"col-md-3 control-label\">Re enter Password</label>\r\n                                  <div class=\"col-md-9\">\r\n                                      <input type=\"password\" class=\"form-control\" name=\"reenterpassword\" required placeholder=\" Re enter Password\" \r\n                                       formControlName=\"reenterpassword\">\r\n                                  </div>\r\n                              </div>\r\n                                    \r\n                               \r\n\r\n                                <div class=\"form-group\">\r\n                                    <!-- Button -->                                        \r\n                                    <div class=\"col-md-offset-3 col-md-9\">\r\n                                        <button id=\"btn-signup\" type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-info\"><i class=\"icon-hand-right\"></i>Sign Up</button>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                                \r\n                                \r\n                                \r\n                            </form>\r\n                         </div>\r\n                    </div>\r\n\r\n               \r\n               \r\n                \r\n         </div> \r\n    </div>\r\n    "

/***/ }),

/***/ "../../../../../src/app/loginpage/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_loginservices__ = __webpack_require__("../../../../../src/app/services/loginservices.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../../../../node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, cookies, router) {
        this.loginService = loginService;
        this.cookies = cookies;
        this.router = router;
        this.userName = {};
        this.loginDetails = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")),
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](''),
            reenterpassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('')
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.loginDetails).then(function (result) {
            console.log(result);
            if (result.successful) {
                _this.cookies.set("userInfo", JSON.stringify(result));
                _this.router.navigate(['product']);
            }
            else {
                alert("Username or Password is wrong");
            }
        }).catch(function (err) {
            alert("Username or Password is wrong");
        });
    };
    LoginComponent.prototype.onSubmit = function (values) {
        console.log(values.name);
        if (values.password !== values.reenterpassword) {
            alert("password and reenter password does not match");
        }
        else {
            this.userName.name = values.name;
            this.userName.email = values.email;
            this.userName.password = values.password;
            this.loginService.signUp(this.userName).then(function (result) {
                console.log("created succesfully");
            }).catch(function (err) {
                alert("something went wrong");
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/loginpage/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loginpage/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_loginservices__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/productpage/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-invalid:not(.ng-pristine):not(.required-invalid) {\r\n    border: 1px solid #d93a3e;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/productpage/product.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div *ngIf=\"upload\">\r\n        <div class=\"row\">\r\n                <div class=\"col-md-6 col-md-offset-3\">\r\n                    <h2>New Product</h2>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6 form-group\">\r\n                                <label for=\"name\">\r\n                                    Name:</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Product Name\" maxlength=\"50\" [(ngModel)]=\"newProduct.name\">\r\n                            </div>\r\n                            <div class=\"col-sm-6 form-group\">\r\n                                <label for=\"price\">\r\n                                    Price:</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"price\" name=\"price\" placeholder=\"Product Price\"  maxlength=\"50\" [(ngModel)]=\"newProduct.price\">\r\n                            </div>\r\n                        </div>\r\n                      \r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12 form-group\">\r\n                                <label for=\"image\">\r\n                                    Image Link:</label>\r\n                                <textarea class=\"form-control\" type=\"textarea\" id=\"image\" name=\"image\" placeholder=\"Image Link\" maxlength=\"600\" rows=\"7\" [(ngModel)]=\"newProduct.image\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                                    <div class=\"row\">\r\n                            <div class=\"col-sm-12 form-group\">\r\n                                <button type=\"submit\" class=\"btn btn-lg btn-success btn-block\" (click) = \"uploadData()\" id=\"btnContactUs\">Upload </button>\r\n                            </div>\r\n                        </div>\r\n            \r\n                    \r\n                    \r\n                </div>\r\n            </div>\r\n</div>\r\n<button *ngIf=\"!upload\" type=\"button\" class=\"btn btn-info\" (click) = \"openNewUplad()\" >Add Product</button> \r\n<div class=\"row\" *ngIf=\"!upload\" >\r\n    \r\n        <div class=\"col-sm-6 col-md-4\" *ngFor=\"let product of products\"> \r\n            <div class=\"thumbnail\">\r\n                <img src={{product.image}}   style=\"height: 300px;width:250px\">\r\n                <div class=\"caption\">\r\n                    <h3>{{product.name}}</h3>\r\n                    <div class=\"clearfix\">\r\n                        <div class=\"price pull-left\"><strong>Rs.{{product.price}}</strong></div>\r\n                        <button class=\"btn btn-success pull-right\" (click)=addToCart(product) >Add to Shopping List</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/productpage/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_productservice__ = __webpack_require__("../../../../../src/app/services/productservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("../../../../../../../node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, cookies, router) {
        this.productService = productService;
        this.cookies = cookies;
        this.router = router;
        this.upload = false;
        this.newProduct = {};
        if (cookies.get("userInfo") === undefined || cookies.get("userInfo") === "") {
            this.router.navigate(['']);
        }
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProduct().then(function (res) {
            _this.products = res;
            console.log(_this.products[0]);
        }).catch(function (err) {
            alert("something went wrong");
        });
    };
    ProductComponent.prototype.addToCart = function (product) {
        var itemCart = {};
        itemCart.product = product;
        var access = JSON.parse(this.cookies.get("userInfo"));
        itemCart.userId = access.userId;
        console.log(itemCart);
        this.productService.addToCart(itemCart).then(function (res) {
            console.log("successfully saved");
        }).catch(function (err) {
            alert("something went wrong" + err);
        });
    };
    ProductComponent.prototype.openNewUplad = function () {
        this.upload = !this.upload;
        this.newProduct = {};
    };
    ProductComponent.prototype.uploadData = function () {
        var _this = this;
        console.log(this.newProduct);
        this.productService.addProduct(this.newProduct).then(function (res) {
            _this.getProducts();
            console.log("successfully upload");
            _this.upload = !_this.upload;
        })
            .catch(function (err) {
            alert("Somthing went wrong");
        });
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/productpage/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/productpage/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_productservice__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/cartservices.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_cookie_service__ = __webpack_require__("../../../../../../../node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartService = /** @class */ (function () {
    function CartService(http, cookies) {
        this.http = http;
        this.cookies = cookies;
    }
    CartService.prototype.getCartData = function (email) {
        return this.http.get('http://localhost:3000/api/carts/getDataForUser?email=' + email)
            .toPromise()
            .then(function (res) { return res["getDataForUser"]; });
    };
    CartService.prototype.deleteFromCart = function (productName) {
        return this.http.delete("http://localhost:3000/api/carts/" + productName)
            .toPromise()
            .then(function (res) {
            return res;
        });
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0_ngx_cookie_service__["a" /* CookieService */]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "../../../../../src/app/services/loginservices.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_cookie_service__ = __webpack_require__("../../../../../../../node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(http, cookies) {
        this.http = http;
        this.cookies = cookies;
    }
    LoginService.prototype.signUp = function (userInfo) {
        return this.http.post('http://localhost:3000/api/users', userInfo)
            .toPromise()
            .then(function (res) { return res; });
    };
    LoginService.prototype.login = function (loginDetails) {
        return this.http.post('http://localhost:3000/api/users/login', loginDetails)
            .toPromise()
            .then(function (res) {
            return res["status"];
        });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0_ngx_cookie_service__["a" /* CookieService */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/services/productservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_cookie_service__ = __webpack_require__("../../../../../../../node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(http, cookies) {
        this.http = http;
        this.cookies = cookies;
    }
    ProductService.prototype.addProduct = function (product) {
        return this.http.post('http://localhost:3000/api/products', product)
            .toPromise()
            .then(function (res) { return res; });
    };
    ProductService.prototype.getProduct = function () {
        return this.http.get('http://localhost:3000/api/products')
            .toPromise()
            .then(function (res) { return res; });
    };
    ProductService.prototype.addToCart = function (itemCart) {
        return this.http.post('http://localhost:3000/api/carts/postDataForUser', itemCart)
            .toPromise()
            .then(function (res) { return res; });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0_ngx_cookie_service__["a" /* CookieService */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map