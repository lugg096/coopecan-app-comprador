(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notfound-notfound-module"],{

/***/ "5e10":
/*!*************************************************!*\
  !*** ./src/app/pages/notfound/notfound.page.ts ***!
  \*************************************************/
/*! exports provided: NotfoundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundPage", function() { return NotfoundPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notfound_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notfound.page.html */ "tLX0");
/* harmony import */ var _notfound_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notfound.page.scss */ "wag6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NotfoundPage = class NotfoundPage {
    constructor() { }
    ngOnInit() {
    }
};
NotfoundPage.ctorParameters = () => [];
NotfoundPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notfound',
        template: _raw_loader_notfound_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notfound_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotfoundPage);



/***/ }),

/***/ "GSxL":
/*!***************************************************!*\
  !*** ./src/app/pages/notfound/notfound.module.ts ***!
  \***************************************************/
/*! exports provided: NotfoundPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundPageModule", function() { return NotfoundPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _notfound_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notfound-routing.module */ "HEHQ");
/* harmony import */ var _notfound_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notfound.page */ "5e10");







let NotfoundPageModule = class NotfoundPageModule {
};
NotfoundPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notfound_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotfoundPageRoutingModule"]
        ],
        declarations: [_notfound_page__WEBPACK_IMPORTED_MODULE_6__["NotfoundPage"]]
    })
], NotfoundPageModule);



/***/ }),

/***/ "HEHQ":
/*!***********************************************************!*\
  !*** ./src/app/pages/notfound/notfound-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: NotfoundPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundPageRoutingModule", function() { return NotfoundPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notfound_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notfound.page */ "5e10");




const routes = [
    {
        path: '',
        component: _notfound_page__WEBPACK_IMPORTED_MODULE_3__["NotfoundPage"]
    }
];
let NotfoundPageRoutingModule = class NotfoundPageRoutingModule {
};
NotfoundPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotfoundPageRoutingModule);



/***/ }),

/***/ "tLX0":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notfound/notfound.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box\">\n  <div class=\"box__ghost\">\n    <div class=\"symbol\"></div>\n    <div class=\"symbol\"></div>\n    <div class=\"symbol\"></div>\n    <div class=\"symbol\"></div>\n    <div class=\"symbol\"></div>\n    <div class=\"symbol\"></div>\n    \n    <div class=\"box__ghost-container\">\n      <div class=\"box__ghost-eyes\">\n        <div class=\"box__eye-left\"></div>\n        <div class=\"box__eye-right\"></div>\n      </div>\n      <div class=\"box__ghost-bottom\">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n    </div>\n    <div class=\"box__ghost-shadow\"></div>\n  </div>\n  \n  <div class=\"box__description\">\n    <div class=\"box__description-container\">\n      <div class=\"box__description-title\">Whoops!</div>\n      <div class=\"box__description-text\">Tuvimos problemas para obtener infomaci??n del lote, intente escanear nuevamente el c??digo QR</div>\n    </div>\n    \n    <a href=\"javascript:void(0)\" class=\"box__button\">Entendido</a>\n    \n  </div>\n  \n</div>");

/***/ }),

/***/ "wag6":
/*!***************************************************!*\
  !*** ./src/app/pages/notfound/notfound.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css?family=Ubuntu);\nhtml, body {\n  background: #353434;\n  font-family: \"Ubuntu\";\n}\n* {\n  box-sizing: border-box;\n}\n.box {\n  width: 100%;\n  height: 100%;\n  /* max-height: 600px; */\n  /* min-height: 450px; */\n  background: #484848;\n  /* border-radius: 20px; */\n  position: absolute;\n  /* left: 50%; */\n  /* top: 50%; */\n  /* transform: translate(-50%, -50%); */\n  /* padding: 30px 50px; */\n}\n.box .box__ghost {\n  padding: 15px 25px 25px;\n  position: absolute;\n  left: 50%;\n  top: 30%;\n  transform: translate(-50%, -30%);\n}\n.box .box__ghost .symbol:nth-child(1) {\n  opacity: 0.2;\n  animation: shine 4s ease-in-out 3s infinite;\n}\n.box .box__ghost .symbol:nth-child(1):before, .box .box__ghost .symbol:nth-child(1):after {\n  content: \"\";\n  width: 12px;\n  height: 4px;\n  background: #fff;\n  position: absolute;\n  border-radius: 5px;\n  bottom: 65px;\n  left: 0;\n}\n.box .box__ghost .symbol:nth-child(1):before {\n  transform: rotate(45deg);\n}\n.box .box__ghost .symbol:nth-child(1):after {\n  transform: rotate(-45deg);\n}\n.box .box__ghost .symbol:nth-child(2) {\n  position: absolute;\n  left: -5px;\n  top: 30px;\n  height: 18px;\n  width: 18px;\n  border: 4px solid;\n  border-radius: 50%;\n  border-color: #fff;\n  opacity: 0.2;\n  animation: shine 4s ease-in-out 1.3s infinite;\n}\n.box .box__ghost .symbol:nth-child(3) {\n  opacity: 0.2;\n  animation: shine 3s ease-in-out 0.5s infinite;\n}\n.box .box__ghost .symbol:nth-child(3):before, .box .box__ghost .symbol:nth-child(3):after {\n  content: \"\";\n  width: 12px;\n  height: 4px;\n  background: #fff;\n  position: absolute;\n  border-radius: 5px;\n  top: 5px;\n  left: 40px;\n}\n.box .box__ghost .symbol:nth-child(3):before {\n  transform: rotate(90deg);\n}\n.box .box__ghost .symbol:nth-child(3):after {\n  transform: rotate(180deg);\n}\n.box .box__ghost .symbol:nth-child(4) {\n  opacity: 0.2;\n  animation: shine 6s ease-in-out 1.6s infinite;\n}\n.box .box__ghost .symbol:nth-child(4):before, .box .box__ghost .symbol:nth-child(4):after {\n  content: \"\";\n  width: 15px;\n  height: 4px;\n  background: #fff;\n  position: absolute;\n  border-radius: 5px;\n  top: 10px;\n  right: 30px;\n}\n.box .box__ghost .symbol:nth-child(4):before {\n  transform: rotate(45deg);\n}\n.box .box__ghost .symbol:nth-child(4):after {\n  transform: rotate(-45deg);\n}\n.box .box__ghost .symbol:nth-child(5) {\n  position: absolute;\n  right: 5px;\n  top: 40px;\n  height: 12px;\n  width: 12px;\n  border: 3px solid;\n  border-radius: 50%;\n  border-color: #fff;\n  opacity: 0.2;\n  animation: shine 1.7s ease-in-out 7s infinite;\n}\n.box .box__ghost .symbol:nth-child(6) {\n  opacity: 0.2;\n  animation: shine 2s ease-in-out 6s infinite;\n}\n.box .box__ghost .symbol:nth-child(6):before, .box .box__ghost .symbol:nth-child(6):after {\n  content: \"\";\n  width: 15px;\n  height: 4px;\n  background: #fff;\n  position: absolute;\n  border-radius: 5px;\n  bottom: 65px;\n  right: -5px;\n}\n.box .box__ghost .symbol:nth-child(6):before {\n  transform: rotate(90deg);\n}\n.box .box__ghost .symbol:nth-child(6):after {\n  transform: rotate(180deg);\n}\n.box .box__ghost .box__ghost-container {\n  background: #fff;\n  width: 100px;\n  height: 100px;\n  border-radius: 100px 100px 0 0;\n  position: relative;\n  margin: 0 auto;\n  animation: upndown 3s ease-in-out infinite;\n}\n.box .box__ghost .box__ghost-container .box__ghost-eyes {\n  position: absolute;\n  right: 30%;\n  top: 45%;\n  height: 12px;\n  width: 70px;\n}\n.box .box__ghost .box__ghost-container .box__ghost-eyes .box__eye-left {\n  width: 12px;\n  height: 12px;\n  background: #3f3d3d;\n  border-radius: 50%;\n  margin: 0 10px;\n  position: absolute;\n  left: 0;\n}\n.box .box__ghost .box__ghost-container .box__ghost-eyes .box__eye-right {\n  width: 12px;\n  height: 12px;\n  background: #3f3d3d;\n  border-radius: 50%;\n  margin: 0 10px;\n  position: absolute;\n  right: 0;\n}\n.box .box__ghost .box__ghost-container .box__ghost-bottom {\n  display: flex;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n}\n.box .box__ghost .box__ghost-container .box__ghost-bottom div {\n  flex-grow: 1;\n  position: relative;\n  top: -10px;\n  height: 20px;\n  border-radius: 100%;\n  background-color: #fff;\n}\n.box .box__ghost .box__ghost-container .box__ghost-bottom div:nth-child(2n) {\n  top: -12px;\n  margin: 0 0px;\n  border-top: 15px solid #3f3d3d;\n  background: transparent;\n}\n.box .box__ghost .box__ghost-shadow {\n  height: 20px;\n  box-shadow: 0 50px 15px 5px #353434;\n  border-radius: 50%;\n  margin: 0 auto;\n  animation: smallnbig 3s ease-in-out infinite;\n}\n.box .box__description {\n  position: absolute;\n  bottom: 100px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.box .box__description .box__description-container {\n  color: #fff;\n  text-align: center;\n  width: 200px;\n  font-size: 16px;\n  margin: 0 auto;\n}\n.box .box__description .box__description-container .box__description-title {\n  font-size: 24px;\n  letter-spacing: 0.5px;\n}\n.box .box__description .box__description-container .box__description-text {\n  color: #d6d6d6;\n  line-height: 20px;\n  margin-top: 20px;\n  font-size: 15px;\n}\n.box .box__description .box__button {\n  display: block;\n  position: relative;\n  background: #5e6bff;\n  border: 1px solid transparent;\n  border-radius: 50px;\n  height: 50px;\n  text-align: center;\n  text-decoration: none;\n  color: #fff;\n  line-height: 50px;\n  font-size: 17px;\n  padding: 0 70px;\n  white-space: nowrap;\n  margin-top: 25px;\n  transition: background 0.5s ease;\n  overflow: hidden;\n  -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n.box .box__description .box__button:before {\n  content: \"\";\n  position: absolute;\n  width: 20px;\n  height: 100px;\n  background: #fff;\n  bottom: -25px;\n  left: 0;\n  border: 2px solid #fff;\n  transform: translateX(-50px) rotate(45deg);\n  transition: transform 0.5s ease;\n}\n.box .box__description .box__button:hover {\n  background: transparent;\n  border-color: #fff;\n}\n.box .box__description .box__button:hover:before {\n  transform: translateX(250px) rotate(45deg);\n}\n@keyframes upndown {\n  0% {\n    transform: translateY(5px);\n  }\n  50% {\n    transform: translateY(15px);\n  }\n  100% {\n    transform: translateY(5px);\n  }\n}\n@keyframes smallnbig {\n  0% {\n    width: 90px;\n  }\n  50% {\n    width: 100px;\n  }\n  100% {\n    width: 90px;\n  }\n}\n@keyframes shine {\n  0% {\n    opacity: 0.2;\n  }\n  25% {\n    opacity: 0.1;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0.2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3Rmb3VuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkRBQUE7QUFRUjtFQUNFLG1CQVBPO0VBUVAscUJBQUE7QUFORjtBQVFBO0VBQ0Usc0JBQUE7QUFMRjtBQVFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBRUQsbUJBQUE7RUFFQyx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtFQUNBLHdCQUFBO0FBUEo7QUFVRTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0FBUko7QUFXTTtFQUNFLFlBQUE7RUFDQSwyQ0FBQTtBQVRSO0FBV1E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkExQ0Y7RUEyQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0FBVFY7QUFXUTtFQUNFLHdCQUFBO0FBVFY7QUFXUTtFQUNFLHlCQUFBO0FBVFY7QUFZTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkEvREE7RUFnRUEsWUFBQTtFQUNBLDZDQUFBO0FBVlI7QUFZTTtFQUNFLFlBQUE7RUFDQSw2Q0FBQTtBQVZSO0FBWVE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkEzRUY7RUE0RUUsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBVlY7QUFZUTtFQUNFLHdCQUFBO0FBVlY7QUFZUTtFQUNFLHlCQUFBO0FBVlY7QUFhTTtFQUNFLFlBQUE7RUFDQSw2Q0FBQTtBQVhSO0FBYVE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFoR0Y7RUFpR0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNB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ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1VYnVudHUpO1xyXG4vL3ZhcmlhYmxlc1xyXG4kcHVycGxlOiAjMzUzNDM0O1xyXG4kbC1wdXJwbGU6ICMzZjNkM2Q7XHJcbiR0LXB1cnBsZTogI2Q2ZDZkNjtcclxuJHBpbms6ICM1ZTZiZmY7XHJcbiR3aGl0ZTogI2ZmZjtcclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICRwdXJwbGU7XHJcbiAgZm9udC1mYW1pbHk6ICdVYnVudHUnO1xyXG59XHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiBtYXgtaGVpZ2h0OiA2MDBweDsgKi9cclxuICAgIC8qIG1pbi1oZWlnaHQ6IDQ1MHB4OyAqL1xyXG4gICAvLyBiYWNrZ3JvdW5kOiAjMzMyRjYzO1xyXG4gICBiYWNrZ3JvdW5kOiM0ODQ4NDg7XHJcbiAgICBcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDIwcHg7ICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvKiBsZWZ0OiA1MCU7ICovXHJcbiAgICAvKiB0b3A6IDUwJTsgKi9cclxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAqL1xyXG4gICAgLyogcGFkZGluZzogMzBweCA1MHB4OyAqL1xyXG5cclxuICBcclxuICAuYm94X19naG9zdCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHggMjVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTMwJSk7XHJcblxyXG4gICAgLnN5bWJvbHtcclxuICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIG9wYWNpdHk6IC4yO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc2hpbmUgNHMgZWFzZS1pbi1vdXQgM3MgaW5maW5pdGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgYm90dG9tOiA2NXB4O1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogLTVweDtcclxuICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICBvcGFjaXR5OiAuMjtcclxuICAgICAgICBhbmltYXRpb246IHNoaW5lIDRzIGVhc2UtaW4tb3V0IDEuM3MgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgIG9wYWNpdHk6IC4yO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc2hpbmUgM3MgZWFzZS1pbi1vdXQgLjVzIGluZmluaXRlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgbGVmdDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICBvcGFjaXR5OiAuMjtcclxuICAgICAgICBhbmltYXRpb246IHNoaW5lIDZzIGVhc2UtaW4tb3V0IDEuNnMgaW5maW5pdGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOm50aC1jaGlsZCg1KSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgdG9wOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgb3BhY2l0eTogLjI7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzaGluZSAxLjdzIGVhc2UtaW4tb3V0IDdzIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDYpIHtcclxuICAgICAgICBvcGFjaXR5OiAuMjtcclxuICAgICAgICBhbmltYXRpb246IHNoaW5lIDJzIGVhc2UtaW4tb3V0IDZzIGluZmluaXRlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICY6YmVmb3JlLCAmOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIGJvdHRvbTogNjVweDtcclxuICAgICAgICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYm94X19naG9zdC1jb250YWluZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHggMTAwcHggMCAwO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBhbmltYXRpb246IHVwbmRvd24gM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcblxyXG4gICAgICAuYm94X19naG9zdC1leWVzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDMwJTtcclxuICAgICAgICB0b3A6IDQ1JTtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmJveF9fZXllLWxlZnQge1xyXG4gICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkbC1wdXJwbGU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3hfX2V5ZS1yaWdodCB7XHJcbiAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRsLXB1cnBsZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgICBcclxuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYm94X19naG9zdC1ib3R0b20ge1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOjEwMCU7XHJcbiAgICAgICAgbGVmdDowO1xyXG4gICAgICAgIHJpZ2h0OjA7XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBmbGV4LWdyb3c6MTtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRvcDotMTBweDtcclxuICAgICAgICAgIGhlaWdodDoyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDJuKSB7XHJcbiAgICAgICAgICAgIHRvcDogLTEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAtMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxNXB4IHNvbGlkICRsLXB1cnBsZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgLmJveF9fZ2hvc3Qtc2hhZG93IHtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDUwcHggMTVweCA1cHggIzM1MzQzNDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgYW5pbWF0aW9uOiBzbWFsbG5iaWcgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3hfX2Rlc2NyaXB0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogIDEwMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgXHJcbiAgICAuYm94X19kZXNjcmlwdGlvbi1jb250YWluZXIge1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgXHJcblxyXG4gICAgICAuYm94X19kZXNjcmlwdGlvbi10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYm94X19kZXNjcmlwdGlvbi10ZXh0IHtcclxuICAgICAgICBjb2xvcjogJHQtcHVycGxlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ib3hfX2J1dHRvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRwaW5rO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgcGFkZGluZzogMCA3MHB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC41cyBlYXNlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KHdoaXRlLCBibGFjayk7XHJcbiAgICAgIFxyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTI1cHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1MHB4KSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy9rZXlmcmFtZXNcclxuQGtleWZyYW1lcyB1cG5kb3duIHtcclxuICAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7fVxyXG4gIDUwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO31cclxuICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTt9XHJcbn1cclxuQGtleWZyYW1lcyBzbWFsbG5iaWcge1xyXG4gIDAlIHt3aWR0aDogOTBweDt9XHJcbiAgNTAlIHt3aWR0aDogMTAwcHg7fVxyXG4gIDEwMCUge3dpZHRoOiA5MHB4O31cclxufVxyXG5Aa2V5ZnJhbWVzIHNoaW5lIHtcclxuICAwJSB7b3BhY2l0eTogLjI7fVxyXG4gIDI1JSB7b3BhY2l0eTogLjE7fVxyXG4gIDUwJSB7b3BhY2l0eTogLjI7fVxyXG4gIDEwMCUge29wYWNpdHk6IC4yO31cclxufVxyXG5cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=pages-notfound-notfound-module.js.map