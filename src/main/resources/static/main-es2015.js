(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "navigation-bar"], ["routerLink", "/contest"], ["routerLink", "/words"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Word List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".navigation-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  list-style-type: none;\n  text-transform: uppercase;\n  font-size: 150%;\n  padding: 1vh;\n  background-color: white;\n}\n.navigation-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.navigation-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #1f1f1f;\n}\n.navigation-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n  color: #4a4181;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNYXRldXN6XFxJZGVhUHJvamVjdHNcXHR5cGluZ19jb250ZXN0XFxzcmNcXG1haW5cXFVJL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQU5JLGFBQUE7RUFDQSxtQkFNYztFQUxkLDZCQUsyQjtFQUozQixtQkFJbUI7RUFDbkIscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNSSjtBRFVJO0VBQ0ksZUFBQTtBQ1JSO0FEVVE7RUFDSSxxQkFBQTtFQUNBLGNBekJKO0FDaUJSO0FEVVk7RUFDSSxzQkFBQTtFQUNBLGNBM0JQO0VBNEJPLGlCQUFBO0FDUmhCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJsYWNrOiByZ2IoMzEsIDMxLCAzMSk7XHJcbiRncmVlbjogI2FmZmZjYTtcclxuJHB1cnBsZTogIzRhNDE4MTtcclxuJHB1cnBsZTI6ICM5ODZiZGY7XHJcblxyXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uLCAkYWxpZ25JdGVtcywgJGp1c3RpZnlDb250ZW50KSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5Q29udGVudDtcclxuICAgIGFsaWduLWl0ZW1zOiAkYWxpZ25JdGVtcztcclxufVxyXG5cclxuLm5hdmlnYXRpb24tYmFyIHtcclxuICAgIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIHNwYWNlLWV2ZW5seSk7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgcGFkZGluZzogMXZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcHVycGxlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCIubmF2aWdhdGlvbi1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE1MCU7XG4gIHBhZGRpbmc6IDF2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubmF2aWdhdGlvbi1iYXIgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2aWdhdGlvbi1iYXIgbGkgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMxZjFmMWY7XG59XG4ubmF2aWdhdGlvbi1iYXIgbGkgYTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XG4gIGNvbG9yOiAjNGE0MTgxO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contest_contest_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contest/contest.module */ "./src/app/contest/contest.module.ts");
/* harmony import */ var _words_list_words_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./words-list/words-list.module */ "./src/app/words-list/words-list.module.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _contest_contest_module__WEBPACK_IMPORTED_MODULE_4__["ContestModule"],
            _words_list_words_list_module__WEBPACK_IMPORTED_MODULE_5__["WordsListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _contest_contest_module__WEBPACK_IMPORTED_MODULE_4__["ContestModule"],
        _words_list_words_list_module__WEBPACK_IMPORTED_MODULE_5__["WordsListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _contest_contest_module__WEBPACK_IMPORTED_MODULE_4__["ContestModule"],
                    _words_list_words_list_module__WEBPACK_IMPORTED_MODULE_5__["WordsListModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contest/contest-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/contest/contest-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ContestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestRoutingModule", function() { return ContestRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tcontest_tcontest_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tcontest/tcontest.component */ "./src/app/contest/tcontest/tcontest.component.ts");





const routes = [
    { path: 'contest', component: _tcontest_tcontest_component__WEBPACK_IMPORTED_MODULE_2__["TContestComponent"] }
];
class ContestRoutingModule {
}
ContestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContestRoutingModule });
ContestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContestRoutingModule_Factory(t) { return new (t || ContestRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContestRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contest/contest.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contest/contest.module.ts ***!
  \*******************************************/
/*! exports provided: ContestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContestModule", function() { return ContestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _contest_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contest-routing.module */ "./src/app/contest/contest-routing.module.ts");
/* harmony import */ var _tcontest_tcontest_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tcontest/tcontest.component */ "./src/app/contest/tcontest/tcontest.component.ts");


// It makes avaiable to use http requests




class ContestModule {
}
ContestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContestModule });
ContestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContestModule_Factory(t) { return new (t || ContestModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _contest_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContestRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContestModule, { declarations: [_tcontest_tcontest_component__WEBPACK_IMPORTED_MODULE_4__["TContestComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _contest_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContestRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_tcontest_tcontest_component__WEBPACK_IMPORTED_MODULE_4__["TContestComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _contest_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContestRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contest/tcontest/tcontest.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contest/tcontest/tcontest.component.ts ***!
  \********************************************************/
/*! exports provided: TContestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TContestComponent", function() { return TContestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _typingapp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../typingapp.service */ "./src/app/contest/typingapp.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TContestComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", "translateX(calc(-" + ctx_r0.index + "*100%))");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.wordsType1[i_r2], "");
} }
class TContestComponent {
    constructor(typingapp) {
        this.typingapp = typingapp;
        // Declaration Of Class Attributes
        this.words = [];
        this.wordsType1 = [];
        this.wordsType2 = [];
        this.index = 0;
        this.iterations = 0;
    }
    ngOnInit() {
    }
    // Words Comparison Function
    compare(word1, word2) {
        if (word1 === word2) {
            return true;
        }
        else {
            return false;
        }
    }
    // Get Current Word From Comparison List ( wordsType2 )
    getCurrentWord(index) {
        return this.wordsType2[index];
    }
    // Circle Events
    // Change Circle Color Everytime When User Give Some Input
    changeCircleStyle(circleState) {
        const circle = document.getElementById('circle');
        if (circleState === true) {
            circle.style.backgroundColor = 'rgb(175, 255, 202)';
            circle.style.transition = 'background-color 0.4s ease-in';
        }
        else if (circleState === false) {
            circle.style.backgroundColor = 'rgb(255, 175, 202)';
            circle.style.transition = 'background-color 0.4s esee-in';
        }
    }
    // Change Hand Position
    changeHandPosition() {
        const hand = document.querySelector('.circle .hand');
        let clockInterval = setInterval(() => {
            hand.style.setProperty('--rotation', (this.iterations / 6 * 360).toString());
            if (this.iterations == 6) {
                alert('Game Over !');
            }
            this.iterations++;
        }, 500);
    }
    // Reset Hand Position
    resetHandPosition() {
        const hand = document.querySelector('.circle .hand');
        hand.style.setProperty('--rotation', '0');
        this.iterations = 0;
    }
    // Import List
    onImport(value) {
        this.typingapp.getWordsList().subscribe((response) => {
            this.words = response;
            // Depending On Chosen Option Set Values Of Comparison List and Displayed List
            switch (value) {
                case 1:
                    this.words.forEach(i => { this.wordsType1[this.words.indexOf(i)] = i.en; });
                    this.words.forEach(i => { this.wordsType2[this.words.indexOf(i)] = i.en; });
                    break;
                case 2:
                    this.words.forEach(i => { this.wordsType1[this.words.indexOf(i)] = i.pl; });
                    this.words.forEach(i => { this.wordsType2[this.words.indexOf(i)] = i.pl; });
                    break;
                case 3:
                    this.words.forEach(i => { this.wordsType1[this.words.indexOf(i)] = i.en; });
                    this.words.forEach(i => { this.wordsType2[this.words.indexOf(i)] = i.pl; });
                    break;
                case 4:
                    this.words.forEach(i => { this.wordsType1[this.words.indexOf(i)] = i.pl; });
                    this.words.forEach(i => { this.wordsType2[this.words.indexOf(i)] = i.en; });
                    break;
            }
        });
    }
    // When A User Starts To Type Something In The Input Field
    onInput(value1) {
        this.wordInput = value1;
        if (this.getCurrentWord(this.index).includes(this.wordInput)) {
            this.circleState = true;
            this.changeCircleStyle(this.circleState);
        }
        else {
            this.circleState = false;
            this.changeCircleStyle(this.circleState);
        }
        if (this.wordInput === this.getCurrentWord(this.index)) {
            // Increment Index
            this.index++;
            // Clear field
            event.target.value = "";
            this.resetHandPosition();
        }
    }
}
TContestComponent.ɵfac = function TContestComponent_Factory(t) { return new (t || TContestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_typingapp_service__WEBPACK_IMPORTED_MODULE_1__["TypingappService"])); };
TContestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TContestComponent, selectors: [["app-tcontest"]], decls: 32, vars: 5, consts: [[1, "word-list"], [1, "liEl"], ["class", "liEl", 3, "transform", 4, "ngFor", "ngForOf"], [1, "pointer"], [1, "option-btn", 3, "click"], ["id", "section-one"], ["id", "circle", 1, "circle"], ["id", "hand", 1, "hand"], [1, "number", "number1"], [1, "number", "number2"], [1, "number", "number3"], [1, "number", "number4"], [1, "number", "number5"], [1, "number", "number6"], ["type", "text", "id", "text-field", "placeholder", "Enter the word...", 1, "text-field", 3, "keyup", "click"]], template: function TContestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TContestComponent_li_6_Template, 2, 3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TContestComponent_Template_button_click_8_listener() { return ctx.onImport(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TContestComponent_Template_button_click_10_listener() { return ctx.onImport(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "PL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TContestComponent_Template_button_click_12_listener() { return ctx.onImport(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "EN / PL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TContestComponent_Template_button_click_14_listener() { return ctx.onImport(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "PL / EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TContestComponent_Template_input_keyup_31_listener($event) { return ctx.onInput($event.target.value); })("click", function TContestComponent_Template_input_click_31_listener() { return ctx.changeHandPosition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", "translateX(calc(-" + ctx.index + "*100%))");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", "translateX(calc(-" + ctx.index + "*100%))");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.words);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  background-color: #4a4181;\n  height: 8vh;\n  width: 100%;\n  z-index: 0;\n}\nnav[_ngcontent-%COMP%]   .pointer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5vh;\n  left: 40%;\n  width: 20%;\n  height: 7vh;\n  border: solid 1vh #afffca;\n  border-radius: 3vh;\n  background-color: rgba(50, 221, 150, 0.2);\n}\nnav[_ngcontent-%COMP%]   .word-list[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 80%;\n  color: white;\n  list-style: none;\n  font-size: 130%;\n  padding: 2.5vh 0;\n  background-color: #403872;\n  border-radius: 30px;\n  border-bottom: solid 3px #d7d7d7;\n  border-top: solid 3px #d7d7d7;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: nowrap;\n}\nnav[_ngcontent-%COMP%]   .word-list[_ngcontent-%COMP%]   .liEl[_ngcontent-%COMP%] {\n  flex-basis: 20%;\n  flex-grow: 0;\n  flex-shrink: 0;\n  text-align: center;\n  background-color: #4a4181;\n}\n.option-btn[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: white;\n  color: #4a4181;\n  font-weight: bold;\n  width: 10vw;\n  height: 3vh;\n  border: solid 2px #4a4181;\n  border-radius: 6px;\n  margin: 1vh;\n  cursor: pointer;\n  z-index: 3;\n}\n.option-btn[_ngcontent-%COMP%]:hover {\n  background-color: #afffca;\n}\n#section-one[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8vh;\n  left: 15vw;\n  width: 70vw;\n  height: 92vh;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n#section-one[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  height: 45vh;\n  width: 45vh;\n  box-shadow: 0 0 60px #aaaaaa;\n  background-color: white;\n  border-radius: 50%;\n  border: solid 0.3vh rgba(0, 0, 0, 0.1);\n  -webkit-animation-name: fill;\n  animation-name: fill;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n  position: relative;\n}\n#section-one[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  --rotation: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-size: 2rem;\n  transform: rotate(var(--rotation));\n  padding: 1rem;\n}\n#section-one[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .number1[_ngcontent-%COMP%] {\n  --rotation: 0deg;\n}\n#section-one[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .number2[_ngcontent-%COMP%] {\n  --rotation: 60deg;\n}\n#section-one[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .number3[_ngcontent-%COMP%] {\n  --rotation: 120deg;\n}\n#section-one[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .number4[_ngcontent-%COMP%] {\n  --rotation: 180deg;\n}\n#section-one[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .number5[_ngcontent-%COMP%] {\n  --rotation: 240deg;\n}\n#section-one[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .number6[_ngcontent-%COMP%] {\n  --rotation: 300deg;\n}\n#section-one[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .hand[_ngcontent-%COMP%] {\n  --rotation: 0;\n  position: absolute;\n  bottom: 50%;\n  left: 50%;\n  width: 2vh;\n  height: 21vh;\n  background-color: #aaaaaa;\n  border-top-left-radius: 1vh;\n  border-top-right-radius: 1vh;\n  transform: translate(-50%, -50%);\n  transform-origin: bottom;\n  transform: translateX(-50%) rotate(calc(var(--rotation)*1deg));\n}\n#section-one[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  background-color: #afffca;\n  border: 0.3vh solid #aaaaaa;\n  z-index: 7;\n  width: 2.5vh;\n  height: 2.5vh;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n}\n#section-one[_ngcontent-%COMP%]   .text-field[_ngcontent-%COMP%] {\n  margin-top: 7vh;\n  width: 60vh;\n  height: 6vh;\n  border-radius: 5vh;\n  box-shadow: 0 0 20px #aaaaaa;\n  border: solid 3px white;\n  background-color: #4a4181;\n  color: white;\n  padding: 1.5vh;\n  font-size: 2vh;\n  opacity: 0.8;\n  text-align: center;\n  cursor: pointer;\n}\n#section-one[_ngcontent-%COMP%]   .text-field[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: scale(1.01);\n}\n#section-one[_ngcontent-%COMP%]   .text-field[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: white;\n}\n#section-one[_ngcontent-%COMP%]   .text-field[_ngcontent-%COMP%]::-moz-placeholder {\n  color: white;\n}\n#section-one[_ngcontent-%COMP%]   .text-field[_ngcontent-%COMP%]::placeholder {\n  color: white;\n}\n@-webkit-keyframes fill {\n  from {\n    background-color: #aaaaaa;\n  }\n  to {\n    background-color: white;\n  }\n}\n@keyframes fill {\n  from {\n    background-color: #aaaaaa;\n  }\n  to {\n    background-color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVzdC90Y29udGVzdC9DOlxcVXNlcnNcXE1hdGV1c3pcXElkZWFQcm9qZWN0c1xcdHlwaW5nX2NvbnRlc3RcXHNyY1xcbWFpblxcVUkvc3JjXFxhcHBcXGNvbnRlc3RcXHRjb250ZXN0XFx0Y29udGVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVzdC90Y29udGVzdC90Y29udGVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLGFBQUE7RUFJUSxtQkFBQTtFQUdBLHVCQUFBO0VBR0EsbUJBQUE7RUFDUixrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQ0NSO0FERUk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxhQUFBO0VBSVEsbUJBQUE7RUFHQSx1QkFBQTtFQUdBLG1CQUFBO0VBR0EsMkJBQUE7RUFFSixpQkFBQTtBQ0FaO0FERVk7RUFFUSxlQUFBO0VBR0ksWUFBQTtFQUVKLGNBQUE7RUFDSixrQkFBQTtFQUNBLHlCQUFBO0FDQWhCO0FES0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDRkY7QURHRTtFQUNFLHlCQUFBO0FDREo7QURLQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFHQSxhQUFBO0VBSVEsc0JBQUE7RUFHQSx1QkFBQTtFQUdBLG1CQUFBO0FDRlo7QURJWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBRVEsNEJBQUE7RUFDUix1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSw0QkFBQTtFQUNRLG9CQUFBO0VBQ1IsOEJBQUE7RUFDUSxzQkFBQTtFQUNSLG9DQUFBO0VBQ1EsNEJBQUE7RUFDUixrQkFBQTtBQ0ZoQjtBRElnQjtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRVEsa0NBQUE7RUFDUixhQUFBO0FDRnBCO0FES2tCO0VBQ0UsZ0JBQUE7QUNIcEI7QURNa0I7RUFDRSxpQkFBQTtBQ0pwQjtBRE9rQjtFQUNFLGtCQUFBO0FDTHBCO0FEUWtCO0VBQ0Usa0JBQUE7QUNOcEI7QURTa0I7RUFDRSxrQkFBQTtBQ1BwQjtBRFVrQjtFQUNFLGtCQUFBO0FDUnBCO0FEV2tCO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUVRLGdDQUFBO0VBRUEsd0JBQUE7RUFFQSw4REFBQTtBQ1Q1QjtBRFlrQjtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVRLGdDQUFBO0VBQ1Isa0JBQUE7QUNWcEI7QURjYztFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRVEsNEJBQUE7RUFDUix1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1poQjtBRGNnQjtFQUNJLFVBQUE7RUFFQSxzQkFBQTtBQ1pwQjtBRHlCYztFQUNFLFlBQUE7QUNqQmhCO0FEb0JjO0VBQ0UsWUFBQTtBQ2xCaEI7QURpQmM7RUFDRSxZQUFBO0FDbEJoQjtBRDRCQTtFQUNJO0lBQ0UseUJBQUE7RUN6Qko7RUQyQkU7SUFDRSx1QkFBQTtFQ3pCSjtBQUNGO0FENEJFO0VBQ0U7SUFDRSx5QkFBQTtFQzFCSjtFRDRCRTtJQUNFLHVCQUFBO0VDMUJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250ZXN0L3Rjb250ZXN0L3Rjb250ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTQxODE7XHJcbiAgICBoZWlnaHQ6IDh2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMDtcclxuXHJcbiAgICAucG9pbnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMC41dmg7XHJcbiAgICAgICAgbGVmdDogNDAlO1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA3dmg7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxdmggI2FmZmZjYTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzdmg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgMjIxLCAxNTAsIDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgLndvcmQtbGlzdCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMzAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDIuNXZoIDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQwMzg3MjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjZDdkN2Q3O1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDNweCAjZDdkN2Q3O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xyXG4gICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAtbXMtZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG5cclxuICAgICAgICAgICAgLmxpRWwge1xyXG4gICAgICAgICAgICAgICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICAgICAgICAgICAgICAtbXMtZmxleC1uZWdhdGl2ZTogMDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTQxODE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICB9ICAgICAgXHJcbn1cclxuXHJcbi5vcHRpb24tYnRuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICM0YTQxODE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgaGVpZ2h0OiAzdmg7XHJcbiAgYm9yZGVyOiBzb2xpZCAycHggIzRhNDE4MTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgbWFyZ2luOiAxdmg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZmZmNhO1xyXG4gIH1cclxufVxyXG5cclxuI3NlY3Rpb24tb25lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOHZoO1xyXG4gICAgbGVmdDogMTV2dztcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgaGVpZ2h0OiA5MnZoO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICAgICAgICAgLmNpcmNsZSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1dmg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDV2aDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDYwcHggI2FhYWFhYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDYwcHggI2FhYWFhYTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAwLjN2aCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmaWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmlsbDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAubnVtYmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAtLXJvdGF0aW9uOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKHZhcigtLXJvdGF0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSh2YXIoLS1yb3RhdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5udW1iZXIxIHtcclxuICAgICAgICAgICAgICAgICAgICAtLXJvdGF0aW9uOiAwZGVnO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAubnVtYmVyMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1yb3RhdGlvbjogNjBkZWc7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5udW1iZXIzIHtcclxuICAgICAgICAgICAgICAgICAgICAtLXJvdGF0aW9uOiAxMjBkZWc7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5udW1iZXI0IHtcclxuICAgICAgICAgICAgICAgICAgICAtLXJvdGF0aW9uOiAxODBkZWc7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5udW1iZXI1IHtcclxuICAgICAgICAgICAgICAgICAgICAtLXJvdGF0aW9uOiAyNDBkZWc7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5udW1iZXI2IHtcclxuICAgICAgICAgICAgICAgICAgICAtLXJvdGF0aW9uOiAzMDBkZWc7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5oYW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAtLXJvdGF0aW9uOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJ2aDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDF2aDtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKGNhbGModmFyKC0tcm90YXRpb24pKjFkZWcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoY2FsYyh2YXIoLS1yb3RhdGlvbikqMWRlZykpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhZmZmY2E7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwLjN2aCBzb2xpZCAjYWFhYWFhO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDc7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIuNXZoO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMi41dmg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7IFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAudGV4dC1maWVsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3dmg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjB2aDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNnZoO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXZoO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCAjYWFhYWFhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAjYWFhYWFhO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0MTgxO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS41dmg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJ2aDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC50ZXh0LWZpZWxkOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAudGV4dC1maWVsZDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnRleHQtZmllbGQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAudGV4dC1maWVsZDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBcclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmaWxsIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmaWxsIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICIsIm5hdiB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0MTgxO1xuICBoZWlnaHQ6IDh2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDA7XG59XG5uYXYgLnBvaW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC41dmg7XG4gIGxlZnQ6IDQwJTtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiA3dmg7XG4gIGJvcmRlcjogc29saWQgMXZoICNhZmZmY2E7XG4gIGJvcmRlci1yYWRpdXM6IDN2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgMjIxLCAxNTAsIDAuMik7XG59XG5uYXYgLndvcmQtbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDgwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDEzMCU7XG4gIHBhZGRpbmc6IDIuNXZoIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDM4NzI7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjZDdkN2Q3O1xuICBib3JkZXItdG9wOiBzb2xpZCAzcHggI2Q3ZDdkNztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcbiAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbm5hdiAud29yZC1saXN0IC5saUVsIHtcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDIwJTtcbiAgZmxleC1iYXNpczogMjAlO1xuICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAtbXMtZmxleC1wb3NpdGl2ZTogMDtcbiAgZmxleC1ncm93OiAwO1xuICAtbXMtZmxleC1uZWdhdGl2ZTogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhNDE4MTtcbn1cblxuLm9wdGlvbi1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzRhNDE4MTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMHZ3O1xuICBoZWlnaHQ6IDN2aDtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzRhNDE4MTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW46IDF2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAzO1xufVxuLm9wdGlvbi1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZmZmNhO1xufVxuXG4jc2VjdGlvbi1vbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHZoO1xuICBsZWZ0OiAxNXZ3O1xuICB3aWR0aDogNzB2dztcbiAgaGVpZ2h0OiA5MnZoO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI3NlY3Rpb24tb25lIC5jaXJjbGUge1xuICBoZWlnaHQ6IDQ1dmg7XG4gIHdpZHRoOiA0NXZoO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA2MHB4ICNhYWFhYWE7XG4gIGJveC1zaGFkb3c6IDAgMCA2MHB4ICNhYWFhYWE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogc29saWQgMC4zdmggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmaWxsO1xuICBhbmltYXRpb24tbmFtZTogZmlsbDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNzZWN0aW9uLW9uZSAuY2lyY2xlIC5udW1iZXIge1xuICAtLXJvdGF0aW9uOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKHZhcigtLXJvdGF0aW9uKSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKHZhcigtLXJvdGF0aW9uKSk7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4jc2VjdGlvbi1vbmUgLmNpcmNsZSAubnVtYmVyMSB7XG4gIC0tcm90YXRpb246IDBkZWc7XG59XG4jc2VjdGlvbi1vbmUgLmNpcmNsZSAubnVtYmVyMiB7XG4gIC0tcm90YXRpb246IDYwZGVnO1xufVxuI3NlY3Rpb24tb25lIC5jaXJjbGUgLm51bWJlcjMge1xuICAtLXJvdGF0aW9uOiAxMjBkZWc7XG59XG4jc2VjdGlvbi1vbmUgLmNpcmNsZSAubnVtYmVyNCB7XG4gIC0tcm90YXRpb246IDE4MGRlZztcbn1cbiNzZWN0aW9uLW9uZSAuY2lyY2xlIC5udW1iZXI1IHtcbiAgLS1yb3RhdGlvbjogMjQwZGVnO1xufVxuI3NlY3Rpb24tb25lIC5jaXJjbGUgLm51bWJlcjYge1xuICAtLXJvdGF0aW9uOiAzMDBkZWc7XG59XG4jc2VjdGlvbi1vbmUgLmNpcmNsZSAuaGFuZCB7XG4gIC0tcm90YXRpb246IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDJ2aDtcbiAgaGVpZ2h0OiAyMXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxdmg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxdmg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoY2FsYyh2YXIoLS1yb3RhdGlvbikqMWRlZykpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKGNhbGModmFyKC0tcm90YXRpb24pKjFkZWcpKTtcbn1cbiNzZWN0aW9uLW9uZSAuY2lyY2xlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmZmZjYTtcbiAgYm9yZGVyOiAwLjN2aCBzb2xpZCAjYWFhYWFhO1xuICB6LWluZGV4OiA3O1xuICB3aWR0aDogMi41dmg7XG4gIGhlaWdodDogMi41dmg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4jc2VjdGlvbi1vbmUgLnRleHQtZmllbGQge1xuICBtYXJnaW4tdG9wOiA3dmg7XG4gIHdpZHRoOiA2MHZoO1xuICBoZWlnaHQ6IDZ2aDtcbiAgYm9yZGVyLXJhZGl1czogNXZoO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAyMHB4ICNhYWFhYWE7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4ICNhYWFhYWE7XG4gIGJvcmRlcjogc29saWQgM3B4IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0MTgxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEuNXZoO1xuICBmb250LXNpemU6IDJ2aDtcbiAgb3BhY2l0eTogMC44O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNzZWN0aW9uLW9uZSAudGV4dC1maWVsZDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cbiNzZWN0aW9uLW9uZSAudGV4dC1maWVsZDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNzZWN0aW9uLW9uZSAudGV4dC1maWVsZDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG4jc2VjdGlvbi1vbmUgLnRleHQtZmllbGQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiNzZWN0aW9uLW9uZSAudGV4dC1maWVsZDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmaWxsIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmlsbCB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWFhYWE7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TContestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tcontest',
                templateUrl: './tcontest.component.html',
                styleUrls: ['./tcontest.component.scss']
            }]
    }], function () { return [{ type: _typingapp_service__WEBPACK_IMPORTED_MODULE_1__["TypingappService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contest/typingapp.service.ts":
/*!**********************************************!*\
  !*** ./src/app/contest/typingapp.service.ts ***!
  \**********************************************/
/*! exports provided: TypingappService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingappService", function() { return TypingappService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class TypingappService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
    }
    getWordsList() {
        // Request Of Type Get That Is Used In .ts File To Upload List Of Words From Database
        let url = this.baseUrl + '/words';
        return this.http.get(url);
    }
}
TypingappService.ɵfac = function TypingappService_Factory(t) { return new (t || TypingappService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TypingappService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TypingappService, factory: TypingappService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypingappService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/words-list/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/words-list/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _typingapp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../typingapp.service */ "./src/app/words-list/typingapp.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ListComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_li_4_Template_span_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onLiClick($event.target.value, ctx_r3.words[i_r2].id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_li_4_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removeElement($event, ctx_r5.words[i_r2].id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.words[i_r2].en, " , ", ctx_r0.words[i_r2].pl, " ");
} }
class ListComponent {
    constructor(typingapp) {
        this.typingapp = typingapp;
        this.words = [];
        this.wordId = "";
        this.inputEnState = false;
        this.inputPlState = false;
    }
    ngOnInit() {
    }
    // Import List
    onImport() {
        this.typingapp.getWordsList().subscribe((response) => { this.words = response; });
    }
    // Remove Element
    removeElement(e, id) {
        // Remove Element From UI
        e.target.parentElement.remove();
        // Remove Element From Db
        this.typingapp.deleteWord(id).subscribe();
    }
    // Validate Inputs
    validateEn(value) {
        let letters = /^[A-Za-z]+$/;
        const formBtn = document.querySelector(".form-button");
        if (value.match(letters) && value !== "" && value.length > 2) {
            this.inputEnState = true;
        }
        else {
            this.inputEnState = false;
        }
    }
    validatePl(value) {
        let letters = /^[A-Za-z]+$/;
        if (value.match(letters) && value !== "" && value.length > 2) {
            this.inputPlState = true;
        }
        else {
            this.inputPlState = false;
        }
    }
    // Add Element
    addWord(inputState1 = this.inputEnState, inputState2 = this.inputPlState, iden = this.wordId) {
        const formBtn = document.querySelector(".form-button");
        const wordEn = document.querySelector(".word-en");
        const wordPl = document.querySelector(".word-pl");
        const form = document.querySelector(".word-form");
        if (inputState1 === true && inputState2 === true) {
            this.inputEnState = false;
            this.inputPlState = false;
            formBtn.style.backgroundColor = '#71ee9b';
            setTimeout(() => { formBtn.style.backgroundColor = '#4a4181'; }, 500);
            // If Everything Is Okay Make An JSON Array
            let Word = {
                id: iden,
                pl: (wordPl.value).toString(),
                en: (wordEn.value).toString()
            };
            // Use Post Method To Add A New Record
            this.wordId = "";
            wordEn.value = "";
            wordPl.value = "";
            this.typingapp.addWord(JSON.stringify(Word)).subscribe();
        }
        else {
            formBtn.style.backgroundColor = 'red';
            setTimeout(() => { formBtn.style.backgroundColor = '#4a4181'; }, 2000);
            // If Something Went Wrong Display A Custom Alert
            let node = document.createElement("p");
            let textnode = document.createTextNode("Both words must have more than 2 characters and contain letters only.");
            node.appendChild(textnode);
            node.style.color = "red";
            node.style.textAlign = "center";
            form.appendChild(node);
            // Remove An Alert After 2 Seconds
            setTimeout(() => { form.removeChild(node); }, 2000);
        }
    }
    //  Put The Words To Be Modified In The Fields
    onLiClick(e, id) {
        this.typingapp.getWordsList(id.toString()).subscribe(response => {
            let content = response;
            const wordEn = document.querySelector(".word-en");
            const wordPl = document.querySelector(".word-pl");
            wordEn.value = content.en;
            wordPl.value = content.pl;
            this.wordId = content.id;
        });
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_typingapp_service__WEBPACK_IMPORTED_MODULE_1__["TypingappService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 16, vars: 1, consts: [[3, "click"], [1, "underline"], [1, "words-list"], [4, "ngFor", "ngForOf"], [1, "word-form"], [1, "form-button", 3, "click"], ["type", "text", "placeholder", "Write down word in English", 1, "word-en", 3, "keyup"], ["type", "text", "placeholder", "Write down word in Polish", 1, "word-pl", 3, "keyup"], [1, "here"], [1, "box", 3, "click"], [1, "remove", 3, "click"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_0_listener() { return ctx.onImport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Import Words");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListComponent_li_4_Template, 5, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_6_listener() { return ctx.addWord(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Word");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Word In English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ListComponent_Template_input_keyup_11_listener($event) { return ctx.validateEn($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Word In Polish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ListComponent_Template_input_keyup_14_listener($event) { return ctx.validatePl($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.words);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["button[_ngcontent-%COMP%] {\n  margin-left: 40vw;\n  margin-top: 5px;\n  padding: 5px;\n  width: 20vw;\n  background-color: #4a4181;\n  color: white;\n  border: 2px solid white;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.underline[_ngcontent-%COMP%] {\n  margin-left: 10vw;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  width: 80vw;\n  height: 3px;\n  background-color: #403872;\n}\n\n.words-list[_ngcontent-%COMP%] {\n  width: 80vw;\n  margin-left: 10vw;\n  height: auto;\n}\n\n.words-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  border: solid 1px #aaaaaa;\n  width: 100%;\n  height: 3vh;\n  min-height: 30px;\n  margin-bottom: -1px;\n  padding: 2.5px;\n  list-style-type: none;\n  color: black;\n  background-color: white;\n  margin-bottom: 5px;\n  border-radius: 6px;\n}\n\n.words-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover {\n  background-color: #e4cef1;\n  color: black;\n  cursor: pointer;\n}\n\n.words-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  margin-top: -1px;\n  right: 1vw;\n  width: 25px;\n  height: 25px;\n  background-color: #b45a5a;\n  color: white;\n  border: solid white 1px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.words-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #afffca;\n  cursor: pointer;\n}\n\n.word-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 40vw;\n  margin-left: 30vw;\n}\n\n.word-form[_ngcontent-%COMP%]   .form-button[_ngcontent-%COMP%] {\n  margin-left: 10vw;\n}\n\n.word-form[_ngcontent-%COMP%]   .underline[_ngcontent-%COMP%] {\n  margin-left: 0;\n  width: 100%;\n}\n\n.word-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 0.5vh;\n  margin-bottom: 0.5vh;\n  width: 100%;\n  border: solid 2px #4a4181;\n  height: 3vh;\n  min-height: 30px;\n  padding: 5px;\n  border-radius: 6px;\n  color: black;\n  background-color: #e4cef1;\n}\n\n.word-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yZHMtbGlzdC9saXN0L0M6XFxVc2Vyc1xcTWF0ZXVzelxcSWRlYVByb2plY3RzXFx0eXBpbmdfY29udGVzdFxcc3JjXFxtYWluXFxVSS9zcmNcXGFwcFxcd29yZHMtbGlzdFxcbGlzdFxcbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd29yZHMtbGlzdC9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQVRLO0VBVUwsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTEo7O0FEUUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBdkJTO0FDa0JiOztBRFFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRE1JO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSlI7O0FETVk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSmhCOztBRE9RO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkEzRE47RUE0RE0sWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTFo7O0FET1E7RUFDSSx5QkEvREw7RUFnRUssZUFBQTtBQ0xaOztBRFVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDUEo7O0FEU0k7RUFDSSxpQkFBQTtBQ1BSOztBRFVJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUNSUjs7QURXSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNUUjs7QURZSTtFQUNJLGlCQUFBO0FDVlIiLCJmaWxlIjoic3JjL2FwcC93b3Jkcy1saXN0L2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyZWQ6IHJnYigxODAsOTAsOTApO1xyXG4kZGFya1B1cnBsZTogIzQwMzg3MjtcclxuJHB1cnBsZTogIzRhNDE4MTtcclxuJG1pbnQ6ICNhZmZmY2E7XHJcbiRncmV5OiAjYWFhYWFhO1xyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHZ3O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDIwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHVycGxlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51bmRlcmxpbmUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtQdXJwbGU7XHJcbn1cclxuXHJcbi53b3Jkcy1saXN0IHtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBsaSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJGdyZXk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzdmg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIuNXB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMDYsIDI0MSk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlbW92ZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDF2dztcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlIDFweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWludDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLndvcmQtZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwdnc7XHJcblxyXG4gICAgLmZvcm0tYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTB2dztcclxuICAgIH1cclxuXHJcbiAgICAudW5kZXJsaW5lIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41dmg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41dmg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggJHB1cnBsZTtcclxuICAgICAgICBoZWlnaHQ6IDN2aDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDIwNiwgMjQxKTtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA0MHZ3O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDIwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTQxODE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udW5kZXJsaW5lIHtcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB3aWR0aDogODB2dztcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MDM4NzI7XG59XG5cbi53b3Jkcy1saXN0IHtcbiAgd2lkdGg6IDgwdnc7XG4gIG1hcmdpbi1sZWZ0OiAxMHZ3O1xuICBoZWlnaHQ6IGF1dG87XG59XG4ud29yZHMtbGlzdCBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2FhYWFhYTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3ZoO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBwYWRkaW5nOiAyLjVweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi53b3Jkcy1saXN0IGxpIC5ib3g6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRjZWYxO1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi53b3Jkcy1saXN0IGxpIC5yZW1vdmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDM7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIHJpZ2h0OiAxdnc7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNDVhNWE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCB3aGl0ZSAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLndvcmRzLWxpc3QgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZmZmNhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi53b3JkLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNDB2dztcbiAgbWFyZ2luLWxlZnQ6IDMwdnc7XG59XG4ud29yZC1mb3JtIC5mb3JtLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHZ3O1xufVxuLndvcmQtZm9ybSAudW5kZXJsaW5lIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndvcmQtZm9ybSBpbnB1dCB7XG4gIG1hcmdpbi10b3A6IDAuNXZoO1xuICBtYXJnaW4tYm90dG9tOiAwLjV2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgMnB4ICM0YTQxODE7XG4gIGhlaWdodDogM3ZoO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRjZWYxO1xufVxuLndvcmQtZm9ybSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss']
            }]
    }], function () { return [{ type: _typingapp_service__WEBPACK_IMPORTED_MODULE_1__["TypingappService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/words-list/typingapp.service.ts":
/*!*************************************************!*\
  !*** ./src/app/words-list/typingapp.service.ts ***!
  \*************************************************/
/*! exports provided: TypingappService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingappService", function() { return TypingappService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





class TypingappService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    getWordsList(id = "") {
        let url = this.baseUrl + '/words/';
        // Request Of Type Get That Is Used In .ts File To Upload List Of Words From Database
        return this.http.get(url + id);
    }
    // Request Of Type Delete That Is Used In .ts File To Delete A Record In Database
    deleteWord(id) {
        let url = this.baseUrl + '/words/';
        return this.http.delete(url + id.toString());
    }
    // Request Of Type Delete That Is Used In .ts File To Add A Record In Database
    addWord(word) {
        let url = this.baseUrl + '/words/';
        const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post(url, word, { headers: header });
    }
}
TypingappService.ɵfac = function TypingappService_Factory(t) { return new (t || TypingappService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TypingappService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TypingappService, factory: TypingappService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypingappService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/words-list/words-list-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/words-list/words-list-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WordsListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsListRoutingModule", function() { return WordsListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/words-list/list/list.component.ts");





const routes = [
    { path: 'words', component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"] }
];
class WordsListRoutingModule {
}
WordsListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WordsListRoutingModule });
WordsListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WordsListRoutingModule_Factory(t) { return new (t || WordsListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WordsListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordsListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/words-list/words-list.module.ts":
/*!*************************************************!*\
  !*** ./src/app/words-list/words-list.module.ts ***!
  \*************************************************/
/*! exports provided: WordsListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsListModule", function() { return WordsListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _words_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./words-list-routing.module */ "./src/app/words-list/words-list-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/words-list/list/list.component.ts");


// It makes avaiable to use http requests




class WordsListModule {
}
WordsListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WordsListModule });
WordsListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WordsListModule_Factory(t) { return new (t || WordsListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _words_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["WordsListRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WordsListModule, { declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _words_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["WordsListRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WordsListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _words_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["WordsListRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'http://localhost:8081/typing_contest-0.0.0'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mateusz\IdeaProjects\typing_contest\src\main\UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map