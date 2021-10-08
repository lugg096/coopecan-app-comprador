(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"overflow-y: scroll;display: block;--background: var(--color-background-2);\">\n\n  <div class=\"context\">\n    <div class=\"viewport\">\n      <div class=\"canvas\" style=\"position: relative;\">\n\n        <div [ngClass]=\"page!='info'?'quitar' :null\">\n          <app-infolot [trace]=\"trace\" [user]=\"user\"></app-infolot>\n        </div>\n\n        <div  [ngClass]=\"page!='almacen'?'quitar' :null\">\n          <app-alamcen [producersLot]=\"producersLot\"></app-alamcen>\n        </div>\n\n\n         <div  [ngClass]=\"page!='process'?'quitar' :null\">\n          <app-proceso [proceso]=\"traceDetail\"></app-proceso>\n        </div>\n        \n        <div class=\"centered\" style=\"width: 100%;  background: #484848;\">\n          <div class=\"row\">\n\n            <div class=\"col-4 m-0 p-0 nav-bottom \" (click)=\"page='info'\">\n              <div class=\"nav-cont\" [ngClass]=\"page=='info'?'select-nav' :null\">\n                <ion-icon name=\"cart-outline\" style=\"font-size: 22px;\"></ion-icon> <br>\n                <span style=\"font-size: 10px;letter-spacing: 0.6px;\">Información del lote</span>\n              </div>\n            </div>\n\n            <div class=\"col-4 m-0 p-0 nav-bottom\" (click)=\"permisoLogin('almacen')\">\n              <div class=\"nav-cont\" [ngClass]=\"page=='almacen'?'select-nav' :null\">\n                <ion-icon name=\"people-outline\" style=\"font-size: 22px;\"></ion-icon>\n                <ion-badge class=\"status\" style=\"top: 4px;\n                right: 33px;\n                position: absolute;\n                font-size: 10px;\n                border-radius: 7px;\n                background: #3171e0;\n                padding: 3px 7px;\"> {{producersLot.length}}\n                </ion-badge> <br>\n                <span style=\"font-size: 10px;letter-spacing: 0.6px;\">Procedencia de materia prima</span>\n              </div>\n            </div>\n\n            <div class=\"col-4 m-0 p-0 nav-bottom\" (click)=\"permisoLogin('process')\">\n              <div class=\"nav-cont\"  [ngClass]=\"page=='process'?'select-nav' :null\">\n                <ion-icon name=\"analytics\" style=\"font-size: 22px;\"></ion-icon> <br>\n                <span style=\"font-size: 10px;letter-spacing: 0.6px;\"> Proceso de producción</span>\n              </div>\n\n            </div>\n       </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div style=\"background: rgb(72 72 72);    padding: 40px 50px 30px;text-align: center;\">\n\n    <div class=\"row\">\n      <div class=\"col-6 p-0 m-0 pr-2\" style=\"align-self: center;border-right: 1px solid #ffffff66;\">\n        <img src=\../appComprador/assets/images/coopecan-letras-blancas-transparente.png\" style=\"height: 58px;\" alt=\"\">\n      </div>\n      <div class=\"col-6 p-0 m-0 pl-2\" style=\"align-self: center;\">\n        <img src=\../appComprador/assets/images/logo-lacchain-footer.png\" alt=\"\">\n      </div>\n    </div>\n\n    <p style=\"margin: 35px 10px 25px;\n    text-align: center;\n    color: #ffffff;\n    font-weight: 300;\n    font-size: 13px;;\">Coopecan® utiliza tecnologías de vanguardia para construir un puente entre los productores, los\n      consumidores y todos los demás. Nuestra misión es aportar transparencia a la procedencia de los productos,\n      ayudando a crear confianza en la cadena de suministro.</p>\n\n    <div class=\"btn-1\">\n      Más información\n    </div>\n\n    <div class=\"footer\">\n\n\n      <ul>\n        <li>\n          <a href=\"https://www.facebook.com/\" target=\"_blank\">\n            <ion-icon name=\"logo-facebook\"></ion-icon>\n          </a>\n        </li>\n\n        <li>\n          <a href=\"https://www.facebook.com/\" target=\"_blank\">\n            <ion-icon name=\"logo-twitter\"></ion-icon>\n          </a>\n        </li>\n\n        <li>\n          <a href=\"https://www.facebook.com/\" target=\"_blank\">\n            <ion-icon name=\"logo-instagram\"></ion-icon>\n          </a>\n        </li>\n\n\n\n      </ul>\n\n      <p style=\"    font-size: 12px;\n      color: white;\n      margin: 0;\n      margin-top: 20px;\">© 2021 Coopecan®</p>\n\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".aspect-tab {\n  position: relative;\n  width: 100%;\n  max-width: 1000px;\n  margin: 10px auto;\n  border-radius: 4px;\n  background-color: white;\n  box-shadow: 0 0 0 1px #ececec;\n  opacity: 1;\n  transition: box-shadow 0.2s, opacity 0.4s;\n}\n.aspect-tab:hover {\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.11);\n}\n.aspect-input {\n  display: none;\n}\n.aspect-input:checked ~ .aspect-content + .aspect-tab-content {\n  max-height: 3000px;\n}\n.aspect-input:checked ~ .aspect-content:after {\n  transform: rotate(0);\n}\n.aspect-label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  max-height: 80px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 0;\n  z-index: 1;\n  cursor: pointer;\n}\n.aspect-label:hover ~ .aspect-content:after {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTI0IDI0SDBWMGgyNHoiIG9wYWNpdHk9Ii44NyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM1NTZBRUEiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE1Ljg4IDE1LjI5TDEyIDExLjQxbC0zLjg4IDMuODhhLjk5Ni45OTYgMCAxIDEtMS40MS0xLjQxbDQuNTktNC41OWEuOTk2Ljk5NiAwIDAgMSAxLjQxIDBsNC41OSA0LjU5Yy4zOS4zOS4zOSAxLjAyIDAgMS40MS0uMzkuMzgtMS4wMy4zOS0xLjQyIDB6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=\");\n}\n.aspect-content {\n  position: relative;\n  display: block;\n  height: 80px;\n  margin: 0;\n  padding: 0 87px 0 30px;\n  font-size: 0;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.aspect-content:before, .aspect-content:after {\n  content: \"\";\n  display: inline-block;\n  vertical-align: middle;\n}\n.aspect-content:before {\n  height: 100%;\n}\n.aspect-content:after {\n  position: absolute;\n  width: 24px;\n  height: 100%;\n  right: 30px;\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTI0IDI0SDBWMGgyNHoiIG9wYWNpdHk9Ii44NyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNBOUFDQUYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE1Ljg4IDE1LjI5TDEyIDExLjQxbC0zLjg4IDMuODhhLjk5Ni45OTYgMCAxIDEtMS40MS0xLjQxbDQuNTktNC41OWEuOTk2Ljk5NiAwIDAgMSAxLjQxIDBsNC41OSA0LjU5Yy4zOS4zOS4zOSAxLjAyIDAgMS40MS0uMzkuMzgtMS4wMy4zOS0xLjQyIDB6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=\");\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: rotate(180deg);\n}\n.aspect-name {\n  display: inline-block;\n  width: 75%;\n  /* margin-left: 16px; */\n  font-size: 30px;\n  font-weight: 500;\n  color: #242a32;\n  white-space: normal;\n  text-align: left;\n  vertical-align: middle;\n}\n.all-opinions,\n.aspect-name {\n  font-size: 14px;\n  line-height: 22px;\n}\n.all-opinions {\n  color: #5d5d5d;\n  text-align: left;\n}\n.aspect-content + .aspect-tab-content {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.4s;\n}\n.aspect-content > div,\n.aspect-stat > div {\n  display: inline-block;\n}\n.aspect-content > div {\n  vertical-align: middle;\n}\n.aspect-info {\n  width: 60%;\n  white-space: nowrap;\n  font-size: 0;\n}\n.aspect-info:before {\n  content: \"\";\n  display: inline-block;\n  height: 44px;\n  vertical-align: middle;\n}\n.aspect-tab-content {\n  background-color: #f9f9f9;\n  font-size: 0;\n  text-align: justify;\n}\n.sentiment-wrapper {\n  padding: 10px 10px 10px;\n}\n.sentiment-wrapper > div {\n  display: inline-block;\n  width: 33.3%;\n  max-width: 390px;\n  padding: 0 5px;\n  box-sizing: border-box;\n  vertical-align: top;\n  cursor: default;\n}\n.sentiment-wrapper > div > div {\n  width: 100%;\n  padding: 16px 24px 20px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ececec;\n  text-align: left;\n}\n.opinion-header {\n  position: relative;\n  width: 100%;\n  margin: 0 0 24px;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 20px;\n  color: #242a32;\n  text-transform: capitalize;\n}\n.opinion-header > span:nth-child(2) {\n  position: absolute;\n  right: 0;\n}\n.opinion-header + div > span {\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 22px;\n  color: #363636;\n}\n@media screen and (max-width: 800px) {\n  .aspect-label {\n    max-height: 102px;\n  }\n\n  .aspect-content {\n    height: auto;\n    padding: 10px 87px 10px 30px;\n  }\n  .aspect-content:before {\n    display: none;\n  }\n  .aspect-content:after {\n    top: 0;\n  }\n\n  .aspect-content > div {\n    display: block;\n    width: 100%;\n  }\n}\n@media screen and (max-width: 750px) {\n  .sentiment-wrapper > div {\n    display: block;\n    width: 100%;\n    max-width: 100%;\n  }\n\n  .sentiment-wrapper > div:not(:first-child) {\n    margin-top: 10px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .aspect-label {\n    max-height: 140px;\n  }\n\n  .aspect-stat > div {\n    display: block;\n    width: 100%;\n  }\n\n  .all-opinions {\n    margin-bottom: 10px;\n  }\n\n  .all-opinions + div > span:first-child {\n    margin: 0;\n  }\n}\n.input {\n  font-size: 11px;\n  color: #8b898f;\n  font-weight: 500;\n}\n.row_container {\n  display: flex;\n}\n.icon-nav-arrow {\n  color: #f7f8fb;\n  font-size: 25px;\n  padding: 15px 20px;\n}\n.title {\n  text-align: left;\n  color: #f7f8fb;\n  font-size: 17px;\n}\n/* ********************** */\n.context {\n  /* width: 300px; */\n  height: 100%;\n  /* margin: 100px; */\n  background: white;\n  transform: translateZ(0);\n  overflow: scroll;\n}\n.viewport {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  overflow-x: hidden;\n}\n.centered {\n  z-index: 30000;\n  position: fixed;\n  /*  left: 50%; */\n  bottom: 0px;\n  /*   transform: translateX(-50%); */\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: 0px;\n  margin-left: 0px;\n}\n.inp1 {\n  color: #787878 !important;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n}\n.inpValue {\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 1.3;\n  color: #212529;\n}\n.nav.tmf-navigation-footer {\n  position: sticky;\n  z-index: 20;\n  bottom: 0;\n  width: 100%;\n  background-color: #484848;\n  padding: 0 0 5px;\n  margin-top: 50px;\n}\n.mm0 {\n  color: #fd7575;\n}\n.mm1 {\n  color: #20e24a;\n}\n.btn-1 {\n  display: inline-block;\n  text-decoration: none;\n  background-color: transparent;\n  padding: 15px 20px;\n  /* border: none; */\n  color: white;\n  border-radius: 15px;\n  border: 1px solid white;\n  font-size: 12px;\n  box-shadow: var(--shadow-black-300);\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.footer {\n  margin-top: 50px;\n}\n.footer ul {\n  justify-content: center;\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.footer ul li {\n  margin: 0 15px;\n}\n.footer ul li a {\n  color: white;\n  text-decoration: none;\n  background-color: transparent;\n}\n.footer ul li a ion-icon {\n  font-size: 30px;\n}\n.nav-bottom {\n  background: #484848;\n  padding: 1;\n  text-align: center;\n  line-height: 1;\n}\n.nav-bottom .nav-cont {\n  border-radius: 0 0 12px 12px;\n  margin: 0 2px 5px 2px;\n  position: relative;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);\n  padding: 5px;\n  padding-bottom: 15px;\n  padding-top: 8px;\n  min-height: 76px;\n  color: white;\n}\n.select-nav {\n  background: white;\n  color: #484848 !important;\n}\n.quitar {\n  display: none;\n}\n.btn-5 {\n  text-decoration: none;\n  background: linear-gradient(90deg, #0261c3 10%, #5c67ec 100%);\n  padding: 15px 50px;\n  border-radius: 30px;\n  color: #fff;\n  font-size: 11px;\n  box-shadow: var(--shadow-black-100);\n  font-weight: 500;\n}\n/* ****************** */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtBQVBGO0FBU0U7RUFDRSw0Q0FBQTtBQVBKO0FBVUE7RUFDRSxhQUFBO0FBUEY7QUFTQTtFQUNFLGtCQUFBO0FBTkY7QUFRQTtFQUNFLG9CQUFBO0FBTEY7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFKRjtBQUtFO0VBQ0UsMmpCQUFBO0FBSEo7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSEY7QUFJRTtFQUVFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBSEo7QUFLRTtFQUNFLFlBQUE7QUFISjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwyakJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUFISjtBQU1BO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQWxGYTtFQW1GYixtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFIRjtBQU1BOztFQUVFLGVBQUE7RUFDQSxpQkFBQTtBQUhGO0FBS0E7RUFDRSxjQTVGUztFQTZGVCxnQkFBQTtBQUZGO0FBSUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQURGO0FBR0E7O0VBRUUscUJBQUE7QUFBRjtB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QUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWNGO0FBWkU7RUFDRSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBY0o7QUFWQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUFhRjtBQVZBO0VBQ0UsYUFBQTtBQWFGO0FBUkE7RUFDRSxxQkFBQTtFQUNBLDZEQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQVdGO0FBVEEsdUJBQUEiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY2lyY2xlLWdyYXk6ICNlNGU0ZTQ7XG4kaGVhZGVyLWJsYWNrOiAjMjQyYTMyO1xuJGJhY2tncm91bmQtY29sb3I6ICM2ZmNhZTc7XG4kdGFiLXRleHQ6ICM1ZDVkNWQ7XG4kd2hpdGU6ICNmZmY7XG4kcmV2aWV3cy10ZXh0LWJsYWNrOiAjMzYzNjM2O1xuJHdoaXRlLWxpZ2h0LWdyYXk6ICNmOWY5Zjk7XG5cbi5hc3BlY3QtdGFiIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgyMzYsIDIzNiwgMjM2LCAxKTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzLCBvcGFjaXR5IDAuNHM7XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSk7XG4gIH1cbn1cbi5hc3BlY3QtaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFzcGVjdC1pbnB1dDpjaGVja2VkIH4gLmFzcGVjdC1jb250ZW50ICsgLmFzcGVjdC10YWItY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDMwMDBweDtcbn1cbi5hc3BlY3QtaW5wdXQ6Y2hlY2tlZCB+IC5hc3BlY3QtY29udGVudDphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuLmFzcGVjdC1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMDtcbiAgei1pbmRleDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmhvdmVyIH4gLmFzcGVjdC1jb250ZW50OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXlOQ0lnYUdWcFoyaDBQU0l5TkNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkwSURJMElqNEtJQ0FnSUR4bklHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRJMElESTBTREJXTUdneU5Ib2lJRzl3WVdOcGRIazlJaTQ0TnlJdlBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU0xTlRaQlJVRWlJR1pwYkd3dGNuVnNaVDBpYm05dWVtVnlieUlnWkQwaVRURTFMamc0SURFMUxqSTVUREV5SURFeExqUXhiQzB6TGpnNElETXVPRGhoTGprNU5pNDVPVFlnTUNBeElERXRNUzQwTVMweExqUXhiRFF1TlRrdE5DNDFPV0V1T1RrMkxqazVOaUF3SURBZ01TQXhMalF4SURCc05DNDFPU0EwTGpVNVl5NHpPUzR6T1M0ek9TQXhMakF5SURBZ01TNDBNUzB1TXprdU16Z3RNUzR3TXk0ek9TMHhMalF5SURCNklpOCtDaUFnSUNBOEwyYytDand2YzNablBnbz1cIik7XG4gIH1cbn1cbi5hc3BlY3QtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDg3cHggMCAzMHB4O1xuICBmb250LXNpemU6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgJjpiZWZvcmUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAmOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeU5DSWdhR1ZwWjJoMFBTSXlOQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWo0S0lDQWdJRHhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEkwSURJMFNEQldNR2d5TkhvaUlHOXdZV05wZEhrOUlpNDROeUl2UGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1pwYkd3OUlpTkJPVUZEUVVZaUlHWnBiR3d0Y25Wc1pUMGlibTl1ZW1WeWJ5SWdaRDBpVFRFMUxqZzRJREUxTGpJNVRERXlJREV4TGpReGJDMHpMamc0SURNdU9EaGhMams1Tmk0NU9UWWdNQ0F4SURFdE1TNDBNUzB4TGpReGJEUXVOVGt0TkM0MU9XRXVPVGsyTGprNU5pQXdJREFnTVNBeExqUXhJREJzTkM0MU9TQTBMalU1WXk0ek9TNHpPUzR6T1NBeExqQXlJREFnTVM0ME1TMHVNemt1TXpndE1TNHdNeTR6T1MweExqUXlJREI2SWk4K0NpQWdJQ0E4TDJjK0Nqd3ZjM1puUGdvPVwiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG59XG4uYXNwZWN0LW5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA3NSU7XG4gIC8qIG1hcmdpbi1sZWZ0OiAxNnB4OyAqL1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAkaGVhZGVyLWJsYWNrO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uYWxsLW9waW5pb25zLFxuLmFzcGVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbi5hbGwtb3BpbmlvbnMge1xuICBjb2xvcjogJHRhYi10ZXh0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmFzcGVjdC1jb250ZW50ICsgLmFzcGVjdC10YWItY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cztcbn1cbi5hc3BlY3QtY29udGVudCA+IGRpdixcbi5hc3BlY3Qtc3RhdCA+IGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hc3BlY3QtY29udGVudCA+IGRpdiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5hc3BlY3QtaW5mbyB7XG4gIHdpZHRoOiA2MCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMDtcbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogNDRweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG59XG5cbi5hc3BlY3QtdGFiLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtbGlnaHQtZ3JheTtcbiAgZm9udC1zaXplOiAwO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLnNlbnRpbWVudC13cmFwcGVyIHtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHg7XG59XG4uc2VudGltZW50LXdyYXBwZXIgPiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMy4zJTtcbiAgbWF4LXdpZHRoOiAzOTBweDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5zZW50aW1lbnQtd3JhcHBlciA+IGRpdiA+IGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4IDI0cHggMjBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlY2VjO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm9waW5pb24taGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAgMjRweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICRoZWFkZXItYmxhY2s7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLm9waW5pb24taGVhZGVyID4gc3BhbjpudGgtY2hpbGQoMikge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuLm9waW5pb24taGVhZGVyICsgZGl2ID4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAkcmV2aWV3cy10ZXh0LWJsYWNrO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYXNwZWN0LWxhYmVsIHtcbiAgICBtYXgtaGVpZ2h0OiAxMDJweDtcbiAgfVxuICAuYXNwZWN0LWNvbnRlbnQge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDg3cHggMTBweCAzMHB4O1xuICAgICY6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgdG9wOiAwO1xuICAgIH1cbiAgfVxuICAuYXNwZWN0LWNvbnRlbnQgPiBkaXYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuc2VudGltZW50LXdyYXBwZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAuc2VudGltZW50LXdyYXBwZXIgPiBkaXY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5hc3BlY3QtbGFiZWwge1xuICAgIG1heC1oZWlnaHQ6IDE0MHB4O1xuICB9XG4gIC5hc3BlY3Qtc3RhdCA+IGRpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmFsbC1vcGluaW9ucyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAuYWxsLW9waW5pb25zICsgZGl2ID4gc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM4Yjg5OGY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5yb3dfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmljb24tbmF2LWFycm93IHtcbiAgY29sb3I6ICNmN2Y4ZmI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2Y3ZjhmYjtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi5jb250ZXh0IHtcbiAgLyogd2lkdGg6IDMwMHB4OyAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIG1hcmdpbjogMTAwcHg7ICovXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG4udmlld3BvcnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5jZW50ZXJlZCB7XG4gIHotaW5kZXg6IDMwMDAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qICBsZWZ0OiA1MCU7ICovXG4gIGJvdHRvbTogMHB4O1xuICAvKiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgKi9cbn1cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uaW5wMSB7XG4gIGNvbG9yOiAjNzg3ODc4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmlucFZhbHVlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBjb2xvcjogIzIxMjUyOTtcbn1cblxuLm5hdi50bWYtbmF2aWdhdGlvbi1mb290ZXIge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDIwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0ODQ4O1xuICBwYWRkaW5nOiAwIDAgNXB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubW0wIHtcbiAgY29sb3I6ICNmZDc1NzU7XG59XG5cbi5tbTEge1xuICBjb2xvcjogcmdiKDMyLCAyMjYsIDc0KTtcbn1cblxuLmJ0bi0xIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIC8qIGJvcmRlcjogbm9uZTsgKi9cbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYmxhY2stMzAwKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHVsIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGkge1xuICAgICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5uYXYtYm90dG9tIHtcbiAgYmFja2dyb3VuZDogIzQ4NDg0ODtcbiAgcGFkZGluZzogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTtcblxuICAubmF2LWNvbnQge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XG4gICAgbWFyZ2luOiAwIDJweCA1cHggMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiKDAgMCAwIC8gMTUlKTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBtaW4taGVpZ2h0OiA3NnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4uc2VsZWN0LW5hdntcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiM0ODQ4NDggIWltcG9ydGFudDsgIFxufVxuXG4ucXVpdGFye1xuICBkaXNwbGF5OiBub25lXG59XG5cblxuXG4uYnRuLTV7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDI2MWMzICAxMCUsICM1YzY3ZWMgMTAwJSk7XG4gIHBhZGRpbmc6IDE1cHggNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgY29sb3I6ICAjZmZmO1xuICBmb250LXNpemU6IDExcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1ibGFjay0xMDApO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLyogKioqKioqKioqKioqKioqKioqICovXG4iXX0= */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _compartido_funciones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../compartido/funciones */ "3Djf");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/apiMongo.service */ "GtMO");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _components_proceso_proceso_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/proceso/proceso.component */ "lgvJ");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _services_ionic_components_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/ionic-components.service */ "L8EE");












let HomePage = class HomePage {
    constructor(_comp, _storage, _modal, _fun, _apiMongo, fun, router) {
        this._comp = _comp;
        this._storage = _storage;
        this._modal = _modal;
        this._fun = _fun;
        this._apiMongo = _apiMongo;
        this.fun = fun;
        this.router = router;
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            speed: 700,
            autoplay: {
                delay: 10000,
            },
        };
        this.page = 'info';
        //COMPONENT INFO LOTE
        this.trace = {
            credentialSubject: {
                details: [],
                header: {
                    attributes: {
                        country_source: "",
                        country_source_key: "",
                        country_target: "",
                        country_target_key: "",
                        delivery_date: null,
                        notes: "",
                        order_date: null,
                        product_type: "",
                        product_type_key: "",
                        quantity: 0,
                        reference_key: "",
                        sku: "",
                        unit: "",
                        via_type: "",
                        via_type_key: "",
                    }
                }
            }
        };
        //COMPONENT TRAZABILIDAD
        this.traceDetail = [];
        //COMPONET ALAMCEN
        this.producersLot = [];
        this.getTrace();
        /*     this.getUser(); */
    }
    ionViewDidEnter() {
        this.getUser();
    }
    getUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = yield this._storage.getLocalStorage('USER');
        });
    }
    getTrace() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this._comp.presentLoading();
            let codeLote = yield this._storage.getLocalStorage('CODE');
            if (this._fun.isVarInvalid(codeLote)) {
                loading.dismiss();
                this.router.navigate(['/notfound']);
                return;
            }
            try {
                let res_trace = yield this._apiMongo.getTrace(codeLote);
                if (res_trace.code == 401) {
                    loading.dismiss();
                    this.router.navigate(['/notfound']);
                    return;
                }
                //VALIDAR QUE CUADNO SE MANDA UN CODIGO INVALIDO MANDAR A LA PAGINA NOT FOUND
                this.trace = res_trace;
                for (let index = 0; index < this.trace.credentialSubject.details.length; index++) {
                    const trace_detail = this.trace.credentialSubject.details[index];
                    if (trace_detail.code == 'ALMACEN')
                        this.usersAlmacen(trace_detail);
                    else if (trace_detail.code != 'salida_puerto' && trace_detail.code != 'delivery' && trace_detail.code != 'liq_plant')
                        this.traceDetail.push(trace_detail);
                    if (index == (this.trace.credentialSubject.details.length - 1)) {
                        this.traceDetail = this._fun.sortJSON(this.traceDetail, 'start', true);
                        loading.dismiss();
                    }
                }
            }
            catch (error) {
                loading.dismiss();
                yield this._fun.alertError(error);
            }
        });
    }
    permisoLogin(page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.user == 'INVITADO') {
                let res = yield this.fun.initSesion();
                if (this.fun.isVarInvalid(res))
                    return;
                yield this._storage.remove('USER');
                this.router.navigate(['/login']);
            }
            else
                this.page = page;
        });
    }
    usersAlmacen(alm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.producersLot = alm.attributes;
            return;
            for (let index = 0; index < this.producersLot.length; index++) {
                const prod = this.producersLot[index];
                let dateNow = Math.floor(new Date().getTime() / 1000);
                let res = yield this._apiMongo
                    .filter(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].COLLECTION.document, src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].TABLE_SIS.external, {
                    "data.document.subject.data.dids.address": prod.values[0].id,
                    // "data.document.stamp_db": { "$lte": Math.floor(alm.start / 1000) },//INICIO DE PARTIDA
                    "data.document.iat": { "$lte": dateNow },
                    "data.document.exp": { "$gt": dateNow }
                });
                if (this._fun.isEmpty(res.result))
                    this.producersLot[index].certs = [];
                else {
                    this.producersLot[index].certs = res.result[0].external;
                }
            }
        });
    }
    procesos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                /*       cssClass: 'style-info', */
                component: _components_proceso_proceso_component__WEBPACK_IMPORTED_MODULE_9__["ProcesoComponent"],
                componentProps: {
                    proceso: this.traceDetail
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            }));
            return yield modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_ionic_components_service__WEBPACK_IMPORTED_MODULE_11__["IonicComponentsService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _compartido_funciones__WEBPACK_IMPORTED_MODULE_5__["Funciones"] },
    { type: _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_7__["ApiMongoService"] },
    { type: _compartido_funciones__WEBPACK_IMPORTED_MODULE_5__["Funciones"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map