(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Recursos Luiggi\Ionic\Coopecan\Coopecan-comprador\src\main.ts */"zUnb");


/***/ }),

/***/ "0C09":
/*!*****************************************************************!*\
  !*** ./src/app/components/detail-attr/detail-attr.component.ts ***!
  \*****************************************************************/
/*! exports provided: DetailAttrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailAttrComponent", function() { return DetailAttrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_attr_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail-attr.component.html */ "rb6s");
/* harmony import */ var _detail_attr_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-attr.component.scss */ "xsy3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






let DetailAttrComponent = class DetailAttrComponent {
    constructor(_modal) {
        this._modal = _modal;
        this.task_detail = {
            attributes: []
        };
        this.endPoint = '';
        this.isQA = false;
    }
    ngOnInit() {
        this.endPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url.substr(0, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url.length - 1); //quitar el "/"
        if (this.task_detail.code == 'QA')
            this.isQA = true;
        else
            this.isQA = false;
        console.log('task_detail', this.task_detail);
    }
    closeModal() {
        this._modal.dismiss();
    }
    confirm() {
        this._modal.dismiss({ confirm: true });
    }
};
DetailAttrComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
DetailAttrComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail-attr',
        template: _raw_loader_detail_attr_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_attr_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailAttrComponent);



/***/ }),

/***/ "0VBF":
/*!***************************************************************!*\
  !*** ./src/app/components/list-cert/list-cert.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  text-align: center;\n  color: #F7F8FB;\n  font-size: 15px;\n}\n\n.icon-nav-arrow {\n  color: #F7F8FB;\n  font-size: 25px;\n  padding: 15px 20px;\n}\n\nion-item p {\n  font-size: 11px !important;\n}\n\nion-item ion-label {\n  font-size: 14px !important;\n  color: var(--black-400);\n}\n\n.status {\n  font-size: 10px;\n  padding: 6px 8px;\n  border-radius: 10px;\n  font-weight: 500;\n}\n\n.pending {\n  background: #b1b1b1;\n  /*  background: #1a75b1; */\n  color: #ffffff;\n}\n\n.enabled {\n  background: #29c79f;\n  color: #ffffff;\n}\n\n.inProcess {\n  background: #29c79f;\n  color: #ffffff;\n  padding-right: 20px;\n  cursor: pointer;\n}\n\n.disabled {\n  background: #d66855;\n  color: #ffffff;\n}\n\n.info {\n  background: #1a75b1;\n  color: #ffffff;\n}\n\n.true {\n  background: #1ab14c;\n  color: #ffffff;\n}\n\n.false {\n  background: #b1381a;\n  color: #ffffff;\n}\n\n.font-black-2 {\n  margin: 10px 5px;\n  font-size: 15px;\n  color: var(--black-400);\n  font-weight: 600;\n  margin-bottom: 0;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -25px;\n  margin-left: -25px;\n}\n\n.button-03 {\n  text-transform: initial;\n  --background: #0059b5d6;\n  color: #fff;\n  --border-radius: 20px;\n  font-size: 10px;\n  display: inline-block;\n  padding: 0 2px !important;\n  font-weight: 600;\n  margin: 0;\n}\n\n.button-03 ion-icon {\n  font-size: 16px;\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsaXN0LWNlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBSUk7RUFDRSwwQkFBQTtBQUROOztBQUdJO0VBQ0UsMEJBQUE7RUFDQSx1QkFBQTtBQUROOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsbUJBQUE7RUFDRCwwQkFBQTtFQUNDLGNBQUE7QUFMRjs7QUFRQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVFBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTEY7O0FBUUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFMRjs7QUFRQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVNBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBTkY7O0FBU0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFORjs7QUFTQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFORjs7QUFRRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQU5KIiwiZmlsZSI6Imxpc3QtY2VydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0Y3RjhGQjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIC5pY29uLW5hdi1hcnJvdyB7XHJcbiAgICBjb2xvcjogI0Y3RjhGQjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICB9XHJcbiAgXHJcblxyXG4gIGlvbi1pdGVte1xyXG4gICAgcHtcclxuICAgICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogdmFyKC0tYmxhY2stNDAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgXHJcbi5zdGF0dXMge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnBlbmRpbmcge1xyXG4gIGJhY2tncm91bmQ6ICNiMWIxYjE7XHJcbiAvKiAgYmFja2dyb3VuZDogIzFhNzViMTsgKi9cclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmVuYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICMyOWM3OWY7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5pblByb2Nlc3N7XHJcbiAgYmFja2dyb3VuZDogIzI5Yzc5ZjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjZDY2ODU1O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uaW5mb3tcclxuICBiYWNrZ3JvdW5kOiAjMWE3NWIxO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5cclxuLnRydWUge1xyXG4gIGJhY2tncm91bmQ6ICMxYWIxNGM7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5mYWxzZSB7XHJcbiAgYmFja2dyb3VuZDogI2IxMzgxYTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmZvbnQtYmxhY2stMiB7XHJcbiAgbWFyZ2luOiAxMHB4IDVweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrLTQwMCk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tcmlnaHQ6IC0yNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxufVxyXG5cclxuLmJ1dHRvbi0wMyB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDA1OWI1ZDY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMCAycHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ "3Djf":
/*!*****************************************!*\
  !*** ./src/app/compartido/funciones.ts ***!
  \*****************************************/
/*! exports provided: Funciones */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Funciones", function() { return Funciones; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/alert/alert.component */ "QC9C");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/apiMongo.service */ "GtMO");


/* import { ContractsService } from '../services/contracts.service'; */





let Funciones = class Funciones {
    constructor(_apiMongo, _modal) {
        this._apiMongo = _apiMongo;
        this._modal = _modal;
        this.months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        this.configInput = {
            name: {
                long: 32
            }
        };
        this.validatorkey = _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose(
        /*  [Validators.pattern("^[^0-9][a-zA-Z0-9_]+$"), */
        [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("^[a-zA-Z_][a-zA-Z0-9_]+$"),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(this.configInput.name.long),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
    }
    toJson(string) {
        let data = JSON.parse(string);
        return JSON.parse(JSON.stringify(data));
    }
    /* ALERT */
    alert(type, buttonConfim, textTitle, subtitle, desablet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let options = {
                path: '/assets/json/' + type + '.json',
                loop: true,
                autoplay: true
            };
            return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const modal = yield this._modal.create({
                    component: _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"],
                    cssClass: 'style-alert',
                    componentProps: {
                        type,
                        textTitle,
                        subtitle,
                        buttonConfim,
                        options,
                        desablet
                    }
                });
                modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    resolve(res.data);
                }));
                return yield modal.present();
            }));
        });
    }
    getTime(tms) {
        let milliseconds = Math.floor((tms % 1000) / 100);
        let seconds = Math.floor((tms / 1000) % 60);
        let minutes = Math.floor((tms / (1000 * 60)) % 60);
        let hours = Math.floor((tms / (1000 * 60 * 60)) % 24);
        /*  hours = (hours < 10) ? "0" + hours : hours;
         minutes = (minutes < 10) ? "0" + minutes : minutes;
         seconds = (seconds < 10) ? "0" + seconds : seconds; */
        hours = (hours > 1) ? hours + " horas" : (hours == 1 ? hours + " hora" : '');
        minutes = (minutes > 1) ? minutes + " minutos" : (minutes == 1 ? minutes + " minuto" : '');
        seconds = (seconds > 1) ? seconds + " segundos" : (seconds == 1 ? seconds + " segundo" : '');
        /*     seconds = (seconds < 10) ? "0" + seconds : seconds; */
        return { hours, minutes, seconds, milliseconds };
    }
    alertError(error, desablet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (desablet != true)
                desablet = false;
            let mensj = error;
            if (!this.isVarInvalid(error.message))
                mensj = error.message;
            yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.TYPE_ERROR, 'ok', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.ERROR_TITLE, mensj, desablet);
        });
    }
    timeStamp() {
        return new Date().getTime();
    }
    initSesion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.TYPE_ALERT, 'Iniciar sesión', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.ALERT_TITLE, 'Se requiere iniciar sesión para visualizar esta información');
        });
    }
    alertGen(btn, txt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.TYPE_ALERT, btn, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.ALERT_TITLE, txt);
        });
    }
    alertDelete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.TYPE_ALERT, 'Si, eliminar', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.ALERT_TITLE, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.ALERT_DELETE);
        });
    }
    alertSucc(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.alert(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.TYPE_SUC, ' Ok ', src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].MSG.ALERT_TITLE, message);
        });
    }
    isUndefined(data) {
        if (data == undefined)
            return true;
        return false;
    }
    isVarInvalid(data) {
        if (data == undefined || data == null || data == 'undefined' || data == 'null' || data == '')
            return true;
        return false;
    }
    isInvalidResApi(code) {
        if (code != 200 && code != '200')
            return true;
        return false;
    }
    isEmpty(...obj) {
        let isEmpty = true;
        for (let i = 0; i < obj.length; i++) {
            if (Array.isArray(obj[i])) {
                if (obj[i].length != 0)
                    isEmpty = false;
                break;
            }
            if (this.isVarInvalid((obj[i]))) {
                isEmpty = false;
                break;
            }
        }
        return isEmpty;
    }
    strToJson(str) {
        try {
            if (this.isVarInvalid(str))
                return {};
            else {
                return JSON.parse(str);
            }
        }
        catch (error) {
            this.alertError(error);
            return null;
        }
    }
    validJson(str) {
        try {
            if (this.isVarInvalid(str))
                return '';
            else {
                let valueJson = JSON.parse(str);
                return valueJson;
            }
        }
        catch (error) {
            this.alertError(error);
            return null;
        }
    }
    codeToenum(code) {
        let number = parseInt(code.replaceAll("C", ""));
        return number;
    }
    closeMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            }));
        });
    }
    sortJSON(arr, key, way) {
        return arr.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            if (typeof x === 'string' || x instanceof String)
                x = x.toLowerCase();
            if (typeof y === 'string' || y instanceof String)
                y = y.toLowerCase();
            if (way) {
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            }
            if (!way) {
                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
            }
        });
    }
    getParmas(key_table) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].COLLECTION.general, key_table, 'items');
            return res.result[0][key_table];
        });
    }
    patchValueJson(jsonEstruc, jsonData) {
        Object.keys(jsonEstruc).forEach(key => {
            jsonEstruc[key] = this.valueKeyJSON(jsonData, key);
        });
        return jsonEstruc;
    }
    valueKeyJSON(json, keyJson) {
        var value = null;
        Object.keys(json).forEach(key => {
            if (key == keyJson)
                value = json[key];
        });
        return value;
    }
    tmspToStr(timestamp) {
        var a = new Date(timestamp);
        var year = a.getFullYear();
        var month = this.months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }
    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    makeDigit(length) {
        var result = '';
        var characters = '0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
};
Funciones.ctorParameters = () => [
    { type: _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_6__["ApiMongoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
Funciones = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Funciones);



/***/ }),

/***/ "9UZi":
/*!***********************************************************!*\
  !*** ./src/app/components/ver-foto/ver-foto.component.ts ***!
  \***********************************************************/
/*! exports provided: VerFotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerFotoComponent", function() { return VerFotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ver_foto_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ver-foto.component.html */ "JCOg");
/* harmony import */ var _ver_foto_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ver-foto.component.scss */ "dbo8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let VerFotoComponent = class VerFotoComponent {
    constructor(_modal) {
        this._modal = _modal;
        this.onlyView = false;
        this.sliderOpts = {
            preventInteractionOnTransition: true,
            /*     zoom: {
                  maxRatio: 5
                }, */
            allowSlideNext: false,
            allowSlidePrev: false,
        };
    }
    ngOnInit() { }
    closeModal(action) {
        this._modal.dismiss({
            delete: action
        });
    }
    zoom(zoomIn) {
        let zoom = this.slider.nativeElement.swiper.zoom;
        if (zoomIn)
            zoom.in();
        else
            zoom.out();
    }
};
VerFotoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
VerFotoComponent.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slider', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }]
};
VerFotoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ver-foto',
        template: _raw_loader_ver_foto_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ver_foto_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerFotoComponent);



/***/ }),

/***/ "9e/0":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/alamcen/alamcen.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding-bottom: 100px;\">\n  <p style=\"color: #0261c3;\n  font-size: 20px;\n  margin: 0;\n  margin-top: 20px;\n  margin-left: 15px;\">Procedencia</p>\n<!-- <div style=\"padding:15px ; \n  border-bottom: 1px solid #f1f1f1;\n  box-shadow: 4px 4px 40px #e9e9e9;\n  border-radius: .25rem;margin: 10px;position: relative;\" *ngFor=\"let item of producersLot\" (click)=\"listCred(item)\"> -->\n  <div style=\"padding:15px ; \n  border-bottom: 1px solid #f1f1f1;\n  box-shadow: 4px 4px 40px #e9e9e9;\n  border-radius: .25rem;margin: 10px;position: relative;\" *ngFor=\"let item of producersLot\">\n\n\n    <div class=\"row\" (click)=\"listCred(item)\">\n\n      <div class=\"col-11 p-0 m-0\" style=\"position: relative;\">\n        <p style=\"\n            margin: 0;\nmargin-left: 8px;\nfont-weight: 600;\nfont-size: 15px;\ncolor: #464646;\">\n          {{ (item.values[0].value | slice:0:3) +'***'+ (item.values[0].value | slice:(item.values[0].value.length-3):(item.values[0].value.length))  }} \n          <ion-badge class=\"status\" style=\"\n          font-size: 10px;\n          border-radius: 7px;\n          background: #3171e0;\n          padding: 3px 8px;\"> <!-- {{item.certs.length}} -->  <span style=\"font-size: 9px;\">Credential</span> \n          </ion-badge>\n        </p>\n       \n        <p style=\"\n        font-size: 12px;\nmargin-left: 8px;\nfont-weight: 300;\ncolor: #464646;\nmargin-bottom: 0;\npadding-right: 40px;\"> {{item.key}}</p>\n\n        <p style=\"\n                      font-size: 12px;\nmargin-left: 8px;\nfont-weight: 300;\ncolor: #464646;\nmargin-bottom: 0;\npadding-right: 40px;\"> {{item.name}} con {{item.values[0].input.quantity | number : '1.2-2' }}  kilogramos </p>\n        <p style=\"    font-size: 13px;\n        margin-left: 8px;\n        font-weight: 300;\n        color: #464646;\n        margin-top: 5px;\n        margin-bottom: 0;\">22 Jun 2020, 15:32:20</p>\n      </div>\n\n      <div class=\"col-1 p-0 m-0\" style=\"    align-self: center;\">\n      <!--   <ion-icon name=\"chevron-forward-outline\" style=\"font-size: 25px;\n        color: rgb(199 199 199);\"></ion-icon> -->\n\n      </div>\n   </div>\n\n\n  </div>\n</div>");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    url: 'http://34.229.8.55:8080/',
    node: 'http://34.229.8.55:4545',
    FOLDER_CERT: 'CERT_COOPECAN',
    KEY_COOPERATIVA: '0x384a6b9573340CBBf54493111023B47925b3E902',
    CREDENTIAL_APP: {
        client_id: "0xAeF5F9e6e63F711310e6122Ca12DD85d36910D1D",
        api_key: "0xf4ed4213624cadd343980c55da54257b10eb7d0f47255516868f58521553eb0f00977161b148bbcdca611a94f28e9c615cd1f762a1ca27bd7c32572dcb65400f1c",
        secret_shib: "0xd208de0792d2d7e6c96078c9fdc5f323bb9b5d11",
        domain_key: "0xf6ceb38bf0cab7d4a31bc3f4dd64814daf971c1653790487256313d761e50d13",
        contract: "0x8F6492b89137b79Ced4342D49F675Dc550B41AE5" //ContractVC 
    },
    /* ESTADOS DE CERTIFICADO */
    STATUS_REG: {
        DISABLED: 0,
        SAVED: 1,
        SIGNED: 2,
        UPLOADED: 3
    },
    /* TABLAS EN BD SQLITE  */
    TABLE: {
        USER: 'user',
        CERT: 'certificado',
        IMG: 'images',
        SCREEN: 'screen'
    },
    MSG: {
        TYPE_SUC: 'success',
        TYPE_ALERT: 'alert',
        TYPE_UPLOAD: 'upload',
        TYPE_SIGN: 'sign',
        TYPE_ERROR: 'danger',
        SUC_UPLOAD: 'Certificación completada correctamente.',
        SUC_SAVE: 'La información fue guardada correctamente.',
        SUC_UPDATE: 'La información fue actualizada correctamente.',
        ALERT_SAVE: 'Esta seguro en guardar información de certificado?',
        ALERT_UPDATE: 'Esta seguro en actualizar información de certificado?',
        ALERT_DELETE: 'Esta seguro de revocar esta identidad?',
        ALERT_EXIT_FORM: 'Esta seguro de salir del formulario sin guardar información?',
        ALERT_UPLOAD: 'Se usarán datos para esta acción. Esta seguro de continuar?',
        ERROR_SERV: 'Tuvimos problemas, vuelva a intentar por favor.',
        ERROR_GENERAL: 'Tuvimos problemas, vuelva a intentar por favor.',
        SUC_TITLE: 'Genial!',
        ALERT_TITLE: 'Alerta!',
        ERROR_TITLE: 'Error!',
    },
    /* Colecciones del sistema */
    COLLECTION: {
        tx: 'tx',
        party: 'party',
        general: 'general',
        object: 'object',
        document: 'document',
        trace: 'trace',
        traceDetail: 'traceDetail',
        monitor: 'monitor',
        merma: 'merma',
        credential: 'credential'
    },
    /* Tablas del sistema */
    TABLE_SIS: {
        _config: '_config',
        role: 'role',
        tables: 'tables',
        type_user: 'type_user',
        type_doc_ident: 'type_doc_identity',
        g_clie: 'g_clie',
        g_empl: 'g_empl',
        g_prod: 'g_prod',
        employee: 'employee',
        producer: 'producer',
        customer: 'customer',
        action: 'action',
        orden: 'order',
        type_button: 'type_button',
        type_callToAction: 'type_callToAction',
        type_documents: 'type_documents',
        type_input: 'type_input',
        type_field: 'type_field',
        type_field_cert: 'type_field_cert',
        type_certificate: 'type_certificate',
        external: 'external',
        register: 'register',
        type_visibility: 'type_visibility',
        class_task: 'class_task',
        type_cert_register: 'type_cert_register',
        q_unid: 'unid_measure',
        type_product: 'type_product',
        type_via: 'type_via',
        country_source: 'country_source',
        country_target: 'country_target',
        airport: 'airport',
        seaports: 'seaports',
        type_quality: 'type_quality',
        field: 'field',
        task: 'task',
        process: 'process',
        screen: 'screen',
        report: 'report',
        traceDetail: 'traceDetail',
        DIDRegistry: 'DIDRegistry',
        VCRegistry: 'VCRegistry',
    },
};


/***/ }),

/***/ "Fmsh":
/*!*************************************************************!*\
  !*** ./src/app/components/list-cert/list-cert.component.ts ***!
  \*************************************************************/
/*! exports provided: ListCertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCertComponent", function() { return ListCertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_cert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-cert.component.html */ "ejdD");
/* harmony import */ var _list_cert_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-cert.component.scss */ "0VBF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cert_cert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cert/cert.component */ "u/Qc");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ver_foto_ver_foto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ver-foto/ver-foto.component */ "9UZi");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");









let ListCertComponent = class ListCertComponent {
    constructor(_fun, _modal) {
        this._fun = _fun;
        this._modal = _modal;
        this.listCred = [];
        this.endPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url.substr(0, src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url.length - 1);
        this.arrayBand = [];
    }
    ngOnInit() {
        this.listCred = this.dataProv;
        console.log('this.listCred', this.listCred);
        for (let index = 0; index < this.listCred.length; index++) {
            this.arrayBand.push(false);
            const element = this.listCred[index];
            this.endPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url.substr(0, src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url.length - 1);
            if (this.listCred[index].data.document.imgfile_anonymous) {
                this.listCred[index].urlImg = this.endPoint + this.listCred[index].data.document.imgfile_anonymous.url;
                this.listCred[index].urlDoc = this.endPoint + this.listCred[index].data.document.datafile_anonymous.url;
                console.log('ENTRO');
            }
            else {
                this.listCred[index].urlImg = this.endPoint + this.listCred[index].data.document.imgfile.url;
                this.listCred[index].urlDoc = this.endPoint + this.listCred[index].data.document.datafile.url;
                console.log('this.listCred[index]', this.listCred[index]);
            }
        }
        this.infoCertInit();
    }
    verFoto(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _ver_foto_ver_foto_component__WEBPACK_IMPORTED_MODULE_7__["VerFotoComponent"],
                componentProps: {
                    img: path
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            }));
            return yield modal.present();
        });
    }
    infoCertInit() {
        for (let index0 = 0; index0 < this.listCred.length; index0++) {
            this.listCred[index0].data.infoCert = [];
            let data = this.listCred[index0].data.data_cert.data;
            let objs = Object.keys(data);
            for (let index = 0; index < objs.length; index++) {
                let key = objs[index];
                if (key != 'objective_cert' && key != 'code_almc' && key != 'emisor_name'
                    && key != 'emisor_did' && key != 'emisor_role' && key != 'titular_name'
                    && key != 'name_titular' && key != 'adrx_titular' && key != 'f_emision'
                    && key != 'f_vencimiento' && data[key] != "") {
                    let caption = this.captionValue(key, this.listCred[index0].data.data_cert.dataScreen);
                    let value = data[key];
                    let cadena = '';
                    if (data[key].value) {
                        cadena = data[key].value;
                    }
                    else
                        cadena = data[key];
                    this.listCred[index0].data.infoCert.push({ caption, value: cadena });
                }
            }
        }
    }
    captionValue(key, estruct) {
        let a;
        let b = estruct;
        if (typeof estruct === 'string' || estruct instanceof String) {
            a = JSON.parse(b);
        }
        else {
            a = estruct;
        }
        let objs = Object.keys(a);
        let keyvalue = objs.filter(a => a == key)[0];
        return a[keyvalue].caption;
    }
    credential(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                cssClass: 'style-cred',
                component: _cert_cert_component__WEBPACK_IMPORTED_MODULE_5__["CertComponent"],
                componentProps: {
                    credential: item
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            }));
            return yield modal.present();
        });
    }
    closeModal() {
        this._modal.dismiss();
    }
    confirm() {
        this._modal.dismiss({ confirm: true });
    }
};
ListCertComponent.ctorParameters = () => [
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_8__["Funciones"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ListCertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-cert',
        template: _raw_loader_list_cert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_cert_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListCertComponent);



/***/ }),

/***/ "GFcb":
/*!*******************************************************!*\
  !*** ./src/app/components/alert/alert.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".svg {\n  /*     padding-top: 40%; */\n  margin: auto;\n  width: 100px;\n  margin: 20px auto;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhbGVydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLDBCQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Zne1xyXG4vKiAgICAgcGFkZGluZy10b3A6IDQwJTsgKi9cclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "GtMO":
/*!**********************************************!*\
  !*** ./src/app/services/apiMongo.service.ts ***!
  \**********************************************/
/*! exports provided: ApiMongoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiMongoService", function() { return ApiMongoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let ApiMongoService = class ApiMongoService {
    constructor(_http) {
        this._http = _http;
        this.dominio = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
    }
    delete(collection, table, key) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}`);
        return this._http.delete(URL).toPromise();
    }
    getkey(collection, table, key) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}`);
        return this._http.get(URL).toPromise();
    }
    changeStatus(collection, table, key, status) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}?status=${status}`);
        return this._http.post(URL, {}).toPromise();
    }
    create(collection, table, key, body, upsert) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}/?upsert=${upsert}`);
        return this._http.post(URL, body).toPromise();
    }
    get(collection, table, item) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${item}`);
        return this._http.get(URL).toPromise();
    }
    getTrace(key_trace) {
        const URL = this.dominio.concat(`process/${key_trace}`);
        return this._http.get(URL).toPromise();
    }
    filter(collection, table, filter) {
        const URL = this.dominio.concat(`db/${collection}/${table}/filter`);
        return this._http.post(URL, filter).toPromise();
    }
    _get(collection, table, item) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${item}`);
        return this._http.get(URL);
    }
    _create(collection, table, key, body, upsert) {
        const URL = this.dominio.concat(`db/${collection}/${table}/${key}/?upsert=${upsert}`);
        return this._http.post(URL, body);
    }
};
ApiMongoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiMongoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiMongoService);



/***/ }),

/***/ "HdGf":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/infolot/infolot.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div style=\"position: absolute;\n        top: 20px;\n        right: 0;z-index: 2;\">\n\n    <a href=\"javascript:void(0)\" (click)=\"sesion()\" class=\"btn-5\" style=\"\n         margin-top: 8px;\n    letter-spacing: 1.5px;\n    padding: 12px 15px;\n    display: inline-block;\n    font-size: 10px;\n    border-radius: 20px 0 0 20px;\">\n      <ion-icon name=\"person-circle-outline\" style=\"    font-size: 20px;\n        margin: 0;\n        padding: 0;\n        margin-bottom: -6px;\n        margin-right: 5px;\"></ion-icon>{{user=='INVITADO'?'Iniciar sesión':'Cerrar sesión'}}\n    </a>\n\n  </div>\n\n  <div style=\"min-height: 200px;    padding-bottom: 40px;position: relative;\">\n\n    <video #video preload=\"auto\" playsinline class=\"video-c\" loop muted autoplay oncanplay=\"this.play()\"\n      onloadedmetadata=\"this.muted = true\">\n      <source src=\"/appComprador/assets/videos/junto.mp4\" type=\"video/mp4\">\n    </video>\n\n    <!--    <video style=\"width: 100%;\" [autoplay]=\"true\" loop=\"true\">\n      <source src=\"/appComprador/assets/videos/junto.mp4\" type=\"video/mp4\">\n    </video> -->\n\n    <img src=\"/appComprador/assets/images/coopecan-letras-blancas-transparente.png\" style=\"    width: 130px;\n    margin: 10px;\n    position: absolute;\n    left: 0;\n    z-index: 25000;\" alt=\"\">\n    <!--  <img src=\"/appComprador/assets/images/fondo4.jpg\" alt=\"\" style=\"min-height: 185px;\"> -->\n    <!--  <div style=\"background: linear-gradient( \n      179deg\n       , #1c1c2454 10%, rgb(60 61 68 / 18%) 100%);\n          position: absolute;\n          top: 0;\n          width: 100%;\n          height: 185px;\">\n    </div> -->\n  </div>\n\n  <div>\n    <div class=\"row-div red\">\n      <div>\n        <svg id=\"\" preserveAspectRatio=\"xMidYMax meet\" class=\"svg-separator sep1\" viewBox=\"0 0 1600 100\" style=\"\"\n          data-height=\"100\">\n          <path class=\"\" style=\"opacity: 1;fill: #9c9798;\" d=\"M1040,56c0.5,0,1,0,1.6,0c-16.6-8.9-36.4-15.7-66.4-15.7c-56,0-76.8,23.7-106.9,41C881.1,89.3,895.6,96,920,96\n    C979.5,96,980,56,1040,56z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #9c9798;\" d=\"M1699.8,96l0,10H1946l-0.3-6.9c0,0,0,0-88,0s-88.6-58.8-176.5-58.8c-51.4,0-73,20.1-99.6,36.8\n    c14.5,9.6,29.6,18.9,58.4,18.9C1699.8,96,1699.8,96,1699.8,96z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #9c9798;\" d=\"M1400,96c19.5,0,32.7-4.3,43.7-10c-35.2-17.3-54.1-45.7-115.5-45.7c-32.3,0-52.8,7.9-70.2,17.8\n    c6.4-1.3,13.6-2.1,22-2.1C1340.1,56,1340.3,96,1400,96z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #9c9798;\" d=\"M320,56c6.6,0,12.4,0.5,17.7,1.3c-17-9.6-37.3-17-68.5-17c-60.4,0-79.5,27.8-114,45.2\n    c11.2,6,24.6,10.5,44.8,10.5C260,96,259.9,56,320,56z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #9c9798;\" d=\"M680,96c23.7,0,38.1-6.3,50.5-13.9C699.6,64.8,679,40.3,622.2,40.3c-30,0-49.8,6.8-66.3,15.8\n    c1.3,0,2.7-0.1,4.1-0.1C619.7,56,620.2,96,680,96z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #9c9798;\" d=\"M-40,95.6c28.3,0,43.3-8.7,57.4-18C-9.6,60.8-31,40.2-83.2,40.2c-14.3,0-26.3,1.6-36.8,4.2V106h60V96L-40,95.6\n    z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #7c7576;\" d=\"M504,73.4c-2.6-0.8-5.7-1.4-9.6-1.4c-19.4,0-19.6,13-39,13c-19.4,0-19.5-13-39-13c-14,0-18,6.7-26.3,10.4\n    C402.4,89.9,416.7,96,440,96C472.5,96,487.5,84.2,504,73.4z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #7c7576;\" d=\"M1205.4,85c-0.2,0-0.4,0-0.6,0c-19.5,0-19.5-13-39-13s-19.4,12.9-39,12.9c0,0-5.9,0-12.3,0.1\n    c11.4,6.3,24.9,11,45.5,11C1180.6,96,1194.1,91.2,1205.4,85z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #7c7576;\" d=\"M1447.4,83.9c-2.4,0.7-5.2,1.1-8.6,1.1c-19.3,0-19.6-13-39-13s-19.6,13-39,13c-3,0-5.5-0.3-7.7-0.8\n    c11.6,6.6,25.4,11.8,46.9,11.8C1421.8,96,1435.7,90.7,1447.4,83.9z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #7c7576;\" d=\"M985.8,72c-17.6,0.8-18.3,13-37,13c-19.4,0-19.5-13-39-13c-18.2,0-19.6,11.4-35.5,12.8\n    c11.4,6.3,25,11.2,45.7,11.2C953.7,96,968.5,83.2,985.8,72z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #7c7576;\" d=\"M743.8,73.5c-10.3,3.4-13.6,11.5-29,11.5c-19.4,0-19.5-13-39-13s-19.5,13-39,13c-0.9,0-1.7,0-2.5-0.1\n    c11.4,6.3,25,11.1,45.7,11.1C712.4,96,727.3,84.2,743.8,73.5z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #7c7576;\" d=\"M265.5,72.3c-1.5-0.2-3.2-0.3-5.1-0.3c-19.4,0-19.6,13-39,13c-19.4,0-19.6-13-39-13\n    c-15.9,0-18.9,8.7-30.1,11.9C164.1,90.6,178,96,200,96C233.7,96,248.4,83.4,265.5,72.3z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #7c7576;\" d=\"M1692.3,96V85c0,0,0,0-19.5,0s-19.6-13-39-13s-19.6,13-39,13c-0.1,0-0.2,0-0.4,0c11.4,6.2,24.9,11,45.6,11\n    C1669.9,96,1684.8,96,1692.3,96z\"></path>\n          <path class=\"\" style=\"opacity: 1;fill: #7c7576;\"\n            d=\"M25.5,72C6,72,6.1,84.9-13.5,84.9L-20,85v8.9C0.7,90.1,12.6,80.6,25.9,72C25.8,72,25.7,72,25.5,72z\"></path>\n          <path class=\"\" style=\"fill: #f8f8f8;\" d=\"M-40,95.6C20.3,95.6,20.1,56,80,56s60,40,120,40s59.9-40,120-40s60.3,40,120,40s60.3-40,120-40\n    s60.2,40,120,40s60.1-40,120-40s60.5,40,120,40s60-40,120-40s60.4,40,120,40s59.9-40,120-40s60.3,40,120,40s60.2-40,120-40\n    s60.2,40,120,40s59.8,0,59.8,0l0.2,143H-60V96L-40,95.6z\"></path>\n        </svg>\n      </div>\n    </div>\n  </div>\n\n\n  <div style=\"width: 100%;\n     padding-right: 12px;\npadding-left: 12px;\n  margin-right: 10px;\n  margin-left: auto;\n  padding-bottom: 120px;    margin-top: 60px;\">\n    <section style=\"\n    padding-top: 8px;\">\n      <h3 style=\"    margin-left: 12px;font-size: 23px;\n      line-height: 30px;color:#141414;font-weight: 700;\">\n        Lote\n        {{trace.credentialSubject.header.attributes.sku}} de\n        <!--         {{trace.credentialSubject.header.attributes.product_type ==''}} -->\n\n        {{trace.credentialSubject.header.attributes.product_type_key ==\n        'OTRO.OTRO.OTRO'?'servicio':trace.credentialSubject.header.attributes.product_type}}\n\n\n      </h3>\n    </section>\n\n    <div class=\"row\">\n      <div class=\"col-6 mb-2\">\n        <span class=\"inp1\">Cantidad de lote</span> <br>\n        <span class=\"inpValue\">\n          {{trace.credentialSubject.header.attributes.quantity}}\n          {{trace.credentialSubject.header.attributes.unit}}\n        </span>\n\n      </div>\n      <div class=\"col-6 mb-2\">\n        <span class=\"inp1\">Fecha de envío</span> <br>\n        <span class=\"inpValue\">\n          <!-- 25 JUL 2021 -->\n          {{trace.credentialSubject.header.attributes.delivery_date}}\n          <!-- FALTA -->\n        </span>\n\n      </div>\n\n      <div class=\"col-6 mb-2\" *ngIf=\"trace.credentialSubject.header.attributes.country_source!=''\">\n        <span class=\"inp1\">Origen</span> <br>\n        <span class=\"inpValue\">\n          <!--  <img\n            [src]=\"'https://lipis.github.io/flag-icon-css/flags/4x3/'+trace.credentialSubject.header.attributes.country_source_key+'.svg'\"\n            style=\"height: 15px;transform: translateY(-1px);\" class=\"mx-1\" alt=\"\"> -->\n          {{trace.credentialSubject.header.attributes.country_source}}\n        </span>\n\n      </div>\n      <div class=\"col-6 mb-2\" *ngIf=\"trace.credentialSubject.header.attributes.country_target!=''\">\n        <span class=\"inp1\">Destino</span> <br>\n        <span class=\"inpValue\">\n          <!--  <img\n            [src]=\"'https://lipis.github.io/flag-icon-css/flags/4x3/'+trace.credentialSubject.header.attributes.country_target_key+'.svg'\"\n            style=\"height: 15px;transform: translateY(-1px);\" class=\"mx-1\"> -->\n          {{trace.credentialSubject.header.attributes.country_target}}\n        </span>\n\n      </div>\n\n      <div class=\"col-6 mb-2 mb-2\" *ngIf=\"trace.credentialSubject.header.attributes.via_type_key!=''\">\n        <span class=\"inp1\">Via</span> <br>\n        <span class=\"inpValue\">\n          <ion-icon\n            [name]=\"trace.credentialSubject.header.attributes.via_type_key=='C0'?'boat-outline':'airplane-outline'\"\n            style=\"font-size: 20px;transform: translateY(5px);color:steelblue\">\n          </ion-icon> {{trace.credentialSubject.header.attributes.via_type}}\n        </span>\n\n      </div>\n      <div class=\"col-6 mb-2\" *ngIf=\"trace.credentialSubject.header.attributes.via_type!=''\">\n        <span class=\"inp1\">{{trace.credentialSubject.header.attributes.via_type!='C0'?'Puerto':'Aeropuerto'}} de\n          origen</span> <br>\n        <span class=\"inpValue\">\n          {{trace.credentialSubject.header.attributes.source}}\n          <!--  Puerto del Callao  -->\n          <!-- FALTA -->\n        </span>\n      </div>\n\n      <div class=\"col-6 mb-2 mb-2\" *ngIf=\"trace.credentialSubject.header.attributes.via_type!=''\">\n        <span class=\"inp1\">{{trace.credentialSubject.header.attributes.via_type!='C0'?'Puerto':'Aeropuerto'}} de\n          destino</span> <br>\n        <span class=\"inpValue\">\n          {{trace.credentialSubject.header.attributes.target}}\n          <!-- Puerto de Viena -->\n          <!-- FALTA -->\n        </span>\n\n      </div>\n      <div class=\"col-6 mb-2\">\n        <span class=\"inp1\">Comprador</span> <br>\n        <span class=\"inpValue\">\n          {{trace.credentialSubject.header.attributes.subject}}\n          <!-- FALTA -->\n\n        </span>\n\n      </div>\n\n      <div class=\"col-6 mb-2\">\n        <span class=\"inp1\">Orden de compra</span> <br>\n        <span class=\"inpValue\">\n          {{trace.credentialSubject.header.attributes.reference_key}}\n        </span>\n\n      </div>\n\n    </div>\n\n\n\n\n\n    <!-- COOPERATAIVA -->\n    <div style=\"padding-bottom: 30px;\">\n\n      <p style=\"font-size: 20px;margin: 0;margin-top: 30px;margin-left: 8px;\">\n        Cooperativa\n        <ion-icon name=\"ribbon-outline\" style=\"    color: #0059b5a6;\n      font-size: 21px;\n      transform: translateY(5px);\"></ion-icon>\n      </p>\n      <p style=\"    font-size: 14px;\n      font-weight: 300;\n      margin: 0;\n      margin-top: 4px;\n      margin-left: 8px;\n      margin-bottom: 28px;\">Nuestros certificados</p>\n\n\n\n      <!--       <span *ngIf=\"listCerts.length!=0\" style=\"letter-spacing: 1px;\n      display: inline-block;\n      font-size: 12px;\n      background: #005bb58c;\n      padding: 10px;\n      position: absolute;\n      z-index: 2000;\n      margin-left: 8px;\n      color: white;\">Certificados</span> -->\n      <ion-slides #slidesDatos class=\"slide-identificacion\" style=\"position: relative;\" pager=\"true\"\n        [options]=\"slideOpts\" (ionSlideNextEnd)=\"verSlide()\" (ionSlidePrevEnd)=\"verSlide()\"\n        (ionSlideReachEnd)=\"endSlide()\">\n\n\n        <ion-slide *ngFor=\"let item of listCerts\" (click)=\"filedoc.click()\">\n          <div style=\"margin-left: 5%;\">\n            <img style=\"width: 100%; display: block;margin:auto;    max-height: 180px;\n          width: auto;box-shadow: 0px 0px 30px #d2d2d2;\" [src]=\"endPoint+item.data.document.imgfile.url\">\n          </div>\n          <a [href]=\"endPoint+item.data.document.datafile.url\"\n            (click)=\"prueba(endPoint+item.data.document.imgfile.name)\" target=\"_blank\" hidden #filedoc></a>\n        </ion-slide>\n\n        <!--   <ion-slide>\n          <div style=\"margin-left: 5%;\">\n            <img style=\"width: 100%; display: block;margin:auto;    max-height: 180px;\n          width: auto;\" src=\"/appComprador/assets/images/cert-prb2.jpg\">\n          </div>\n        </ion-slide>\n\n        <ion-slide>\n          <div style=\"margin-left: 5%;\">\n            <img style=\"width: 100%; display: block;margin:auto;    max-height: 180px;\n          width: auto;\" src=\"/appComprador/assets/images/cert-prb3.jpg\">\n          </div>\n        </ion-slide> -->\n\n      </ion-slides>\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "JCOg":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ver-foto/ver-foto.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div>\n    <ion-icon name=\"close\" style=\"position: absolute;right: 4px;top: 4px;font-size: 30px;padding: 20px;z-index: 10;color: var(--main-color);\"\n      (click)=\"closeModal(false);\">\n    </ion-icon>\n  </div>\n\n  <ion-slides [options]=\"sliderOpts\" #slider>\n    <ion-slide>\n      <div class=\"swiper-zoom-container\">\n        <img [src]=\"img\">\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "L8EE":
/*!******************************************************!*\
  !*** ./src/app/services/ionic-components.service.ts ***!
  \******************************************************/
/*! exports provided: IonicComponentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicComponentsService", function() { return IonicComponentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let IonicComponentsService = class IonicComponentsService {
    constructor(loadingController, actionSheetController, toastController) {
        this.loadingController = loadingController;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const loading = yield this.loadingController.create({
                    message: 'Por favor espere...',
                    backdropDismiss: false,
                    showBackdrop: true,
                    spinner: "bubbles"
                });
                yield loading.present();
                resolve(loading);
            }));
        });
    }
    presentToast(texto, color, duracion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: texto,
                duration: duracion,
                color: color
            });
            toast.present();
        });
    }
    resizeImage(base64Str, maxWidth = 180, maxHeight = 150) {
        return new Promise((resolve) => {
            let img = new Image();
            img.src = base64Str;
            img.onload = () => {
                let canvas = document.createElement('canvas');
                const MAX_WIDTH = maxWidth;
                const MAX_HEIGHT = maxHeight;
                let width = img.width;
                let height = img.height;
                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                }
                else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                let ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL());
            };
        });
    }
};
IonicComponentsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
IonicComponentsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IonicComponentsService);



/***/ }),

/***/ "MJPf":
/*!*****************************************************!*\
  !*** ./src/app/components/cert/cert.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Om6x":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cert/cert.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-icon name=\"close\" style=\"top: 0;\n    position: absolute;\n    right: 0;\n    padding: 18px;\n    font-size: 25px;\n    color: #8c8c8c;\" (click)=\"closeModal()\">\n  </ion-icon>\n\n\n  <div style=\"padding: 15px 20px;margin-top: 5px;\">\n    <p\n      style=\"font-size: 16px;color: #595959;font-weight: 600;margin-bottom: 0;margin-top: 30px;padding-right: 20px;line-height: 1.1;\">\n      {{credential.name}}\n    </p>\n\n    <div style=\"margin-top: 20px;\" (click)=\"filedoc.click()\">\n      <img [src]=\"urlImg\" style=\"    box-shadow: 4px 4px 40px #e9e9e9;\" alt=\"\">\n      <a [href]=\"urlImg\" target=\"_blank\" hidden  #filedoc></a>\n    \n    </div>\n\n  </div>\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "QC9C":
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./alert.component.html */ "VqP8");
/* harmony import */ var _alert_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.component.scss */ "GFcb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let AlertComponent = class AlertComponent {
    constructor(ngZone, _modal) {
        this.ngZone = ngZone;
        this._modal = _modal;
        this.buttonConfim = '';
        this.textTitle = '';
        this.subtitle = '';
        this.type = ''; // success | danger | alert
        this.desablet = false;
    }
    ngOnInit() {
    }
    animationCreated(animationItem) {
        this.animationItem = animationItem;
        setTimeout(() => {
            this.pause();
        }, 1500);
    }
    stop() {
        this.ngZone.runOutsideAngular(() => this.animationItem.stop());
    }
    play() {
        this.ngZone.runOutsideAngular(() => this.animationItem.play());
    }
    pause() {
        this.ngZone.runOutsideAngular(() => this.animationItem.pause());
    }
    closeModal() {
        this._modal.dismiss();
    }
    confirm() {
        this._modal.dismiss({ confirm: true });
    }
};
AlertComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
AlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-alert',
        template: _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_alert_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AlertComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let AppComponent = class AppComponent {
    constructor(route) {
        this.route = route;
    }
    codePartida() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "n90K");





let AuthGuard = class AuthGuard {
    constructor(_navCtrl, _storage, router) {
        this._navCtrl = _navCtrl;
        this._storage = _storage;
        this.router = router;
    }
    canActivate() {
        return this._storage.validarAuth().then(res => {
            if (!res) {
                this._navCtrl.navigateRoot('login');
                return false;
            }
            return true;
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "VqP8":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/alert/alert.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"svg hide\" id=\"svg\">\n    <ng-lottie [options]=\"options\" (animationCreated)=\"animationCreated($event)\" (complete)=\"stop()\"></ng-lottie>\n  </div>\n\n  <div style=\"text-align: center;position: absolute;top: 140px;width: 100%;\">\n    <p style=\"font-size: 25px;color: #595959;font-weight: 600;margin-bottom: 0;\">{{textTitle}}</p>\n    <p style=\"margin-top: 5px;color: #5f5f5f;font-size: 15px;margin-left: 20px;margin-right: 20px;\">{{subtitle}}</p>\n\n    <ion-button (click)=\"type != 'alert'?closeModal():confirm()\" class=\"button-02\"\n      style=\"--border-radius: 5px;font-size: 12px;--background: #2778c4;height: 40px;text-transform:initial;margin-right: 5px;\">\n      {{buttonConfim}}\n    </ion-button>\n\n    <ion-button  *ngIf=\"!desablet\" (click)=\"closeModal()\" class=\"button-02\"\n      style=\"--border-radius: 5px;font-size: 12px;--background: rgb(221, 51, 51);height: 40px;text-transform:initial;margin-left: 5px;\">\n      Cancelar\n    </ion-button>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: playerFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerFactory", function() { return playerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-lottie */ "DPnb");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lottie-web */ "lPHp");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/alert/alert.component */ "QC9C");
/* harmony import */ var _components_detail_attr_detail_attr_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/detail-attr/detail-attr.component */ "0C09");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");








/* LOTTIE */






function playerFactory() {
    return lottie_web__WEBPACK_IMPORTED_MODULE_9___default.a;
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"],
            _components_detail_attr_detail_attr_component__WEBPACK_IMPORTED_MODULE_11__["DetailAttrComponent"]
        ],
        entryComponents: [_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_8__["LottieModule"].forRoot({ player: playerFactory }) /* LOTTIE */
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__["HashLocationStrategy"] },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] /* ,
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ] */
    })
], AppModule);



/***/ }),

/***/ "dbo8":
/*!*************************************************************!*\
  !*** ./src/app/components/ver-foto/ver-foto.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #fff;\n}\n\nion-slides {\n  margin-top: 20%;\n  height: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2ZXItZm90by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6InZlci1mb3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuaW9uLXNsaWRlcyB7XHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG4gIGhlaWdodDogNzAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "ejdD":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-cert/list-cert.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div\n    style=\"width: 100%;color: #fff;background: linear-gradient(90deg, #1c1c24 10%, rgb(60, 61, 68) 100%); margin-bottom: 0;height: 55px;\">\n    <ion-icon slot=\"start\" name=\"arrow-back\" class=\"icon-nav-arrow \"\n      style=\" position: absolute;z-index: 10; padding: 20px;padding-top: 15px;\" (click)=\"closeModal()\">\n    </ion-icon>\n    <ion-item style=\"--background: transparent;margin-bottom: 0;\" lines=\"none\">\n      <ion-title class=\"title\">Credenciales</ion-title>\n    </ion-item>\n  </div>\n\n  <div *ngFor=\"let data of listCred;index as i\" style=\"padding: 20px;\n    border-bottom: 1px solid #f1f1f1;\n    box-shadow: 4px 4px 40px #e9e9e9;\n    border-radius: .25rem;\n    margin: 10px;\n    position: relative;\">\n\n\n    <div>\n\n      <div class=\"content-qr\">\n        <P class=\"font-white-1\">{{data.name}}\n          <ion-badge class=\"status\" [ngClass]=\"data.status?'enabled':'disabled'\" style=\"transform: translateY(6px);\">\n            {{data.status?'Activo':'Desactivo'}}\n          </ion-badge>\n        </P>\n\n        <div style=\"text-align: center;text-align: -webkit-center;\">\n          <img [src]=\"data.urlImg\" alt=\"\">\n        </div>\n      </div>\n\n  \n\n      <div style=\"text-align: left;position: relative;\n        margin-top: 10px;\">\n        <ion-button [href]=\"data.urlDoc\" target=\"_blank\" class=\"button-03\" >\n          <ion-icon name=\"document-outline\" style=\"font-size: 20px;\"></ion-icon>Ver documento\n        </ion-button>\n\n        <div (click)=\"arrayBand[i]=!arrayBand[i];\"  style=\"position: absolute;\n        right: 0px;\n        top: 10px;\n        font-size: 12px;\n        font-weight: 600;\n        color: #797979;\">\n          {{arrayBand[i]?'Mostrar menos':'Ver más'}} <ion-icon [name]=\"arrayBand[i]?'chevron-up':'chevron-down'\" style=\"    transform: translateY(5px);\n          font-size: 18px;\"></ion-icon>\n        </div>\n      </div>\n\n      <div *ngIf=\"arrayBand[i]\" style=\"padding-top: 10px\">\n        <p class=\"font-black-2\">Datos de credencial\n        </p>\n\n        <div class=\"row\">\n          <ion-item lines=\"none\" class=\"col-12\">\n            <ion-label>\n              <p>Nombre</p>\n              {{data.name}}\n            </ion-label>\n          </ion-item>\n\n          <ion-item lines=\"none\" class=\"col-12\">\n            <ion-label>\n              <p>Titular</p>\n\n\n              {{(data.data.document.subject.name | slice:0:3) +'***'+ (data.data.document.subject.name | slice:(data.data.document.subject.name.length-3):(data.data.document.subject.name.length)) \n            }}<br>\n              <p style=\"color: rgb(105, 105, 105); font-size: 12px;line-height: 0.8;font-style: italic;\">\n                {{(data.data.document.subject.data.dids.address | slice:0:6)+' ...\n                '+(data.data.document.subject.data.dids.address | slice:38:42)}}\n              </p>\n            </ion-label>\n          </ion-item>\n        </div>\n\n        <div class=\"row\">\n          <ion-item lines=\"none\" class=\"col-12\">\n            <ion-label>\n              <p>Tipo</p>\n              {{data.data.document.documentType.value}}\n            </ion-label>\n          </ion-item>\n\n          <ion-item lines=\"none\" class=\"col-12\">\n            <ion-label>\n              <p>Emisor</p>\n              {{(data.data.document.issuer2 | slice:0:3) +'***'+ (data.data.document.issuer2 | slice:(data.data.document.issuer2.length-3):(data.data.document.issuer2.length)) \n            }}<br>\n              <p style=\"color: rgb(105, 105, 105); font-size: 12px;line-height: 0.8;font-style: italic;\">\n                {{data.data.data_cert?((data.data.data_cert.emisor_did | slice:0:6)+' ...\n                '+(data.data.data_cert.emisor_did | slice:38:42)):''}}\n              </p>\n            </ion-label>\n          </ion-item>\n        </div>\n\n        <div class=\"row\">\n          <ion-item lines=\"none\" class=\"col-12\">\n            <ion-label>\n              <p>Fecha de emisión</p>\n              {{(data.data.document.iat)*1000 | date:'dd/MM/yyyy'}}\n            </ion-label>\n          </ion-item>\n          <ion-item lines=\"none\" class=\"col-12\">\n            <ion-label>\n              <p>Fecha de caducidad</p>\n              {{(data.data.document.exp)*1000 | date:'dd/MM/yyyy'}}\n            </ion-label>\n          </ion-item>\n\n        </div>\n\n\n        <p class=\"font-black-2\" *ngIf=\"data.data.infoCert.length>0\">Datos de ingresados</p>\n\n        <ion-item lines=\"none\" *ngFor=\"let item of data.data.infoCert\" style=\"    margin-left: -10px;\">\n          <ion-label class=\"ion-text-wrap\">\n            <p>{{item.caption}}</p>\n            {{item.value}}\n          </ion-label>\n\n\n        </ion-item>\n\n        <p class=\"font-black-2\"  *ngIf=\"data.data.imagesUrl.length>0\">Evidencias\n        </p>\n\n        <div>\n          <ion-grid style=\"padding-bottom: 15%;\">\n            <ion-row style=\"margin: 3px;\">\n              <ion-col size=\"6\" class=\"content-img\" *ngFor=\"let p of data.data.imagesUrl; let i=index\"\n                (click)=\"verFoto(endPoint + p)\">\n                <div class=\"img\" [attr.id]=\"'object-img-'+i\">\n                  <img [src]=\"endPoint + p\">\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n\n\n\n      </div>\n\n\n\n\n    </div>\n\n\n  </div>\n\n  <!-- \n    <p style=\"color: #0261c3;\n    font-size: 18px;\n    margin-left: 15px;\n    margin-top: 20px;\n    padding-right: 30px;\">{{dataProv.values[0].value}}</p> -->\n</ion-content>");

/***/ }),

/***/ "ex5c":
/*!*********************************************************!*\
  !*** ./src/app/components/alamcen/alamcen.component.ts ***!
  \*********************************************************/
/*! exports provided: AlamcenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlamcenComponent", function() { return AlamcenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_alamcen_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./alamcen.component.html */ "9e/0");
/* harmony import */ var _alamcen_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alamcen.component.scss */ "nCW2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apiMongo.service */ "GtMO");
/* harmony import */ var _list_cert_list_cert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../list-cert/list-cert.component */ "Fmsh");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");
/* harmony import */ var src_app_services_ionic_components_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/ionic-components.service */ "L8EE");










let AlamcenComponent = class AlamcenComponent {
    constructor(_comp, _fun, _apiMongo, _modal) {
        this._comp = _comp;
        this._fun = _fun;
        this._apiMongo = _apiMongo;
        this._modal = _modal;
        this.slideOpts = {
            initialSlide: 0,
            speed: 700,
            autoplay: {
                delay: 2500,
            },
        };
        this.initEnd = false;
        this.indexSlide = 0;
        this.producersLot = [];
    }
    ngOnInit() {
    }
    verSlide() {
        this.slidesDatos.getActiveIndex().then(res => {
            if (!this.initEnd)
                this.indexSlide = res;
            this.initEnd = false;
        });
    }
    endSlide() {
        this.initEnd = true;
        this.indexSlide = 2;
    }
    listCred(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this._comp.presentLoading();
            const prod = item;
            let dateNow = Math.floor(new Date().getTime() / 1000);
            /*    let a = {
                 "listByApi": {
                   "metho": "POST",
                   "URL": "http://34.229.8.55:8080/db/document/external/filter",
                   "PARAMS": {
                     "data.document.subject.data.dids.address": "_adrx_",
                     "data.document.stamp_db": { "$lte": "_dateNow_" },
                     "data.document.iat": { "$lte": "_dateNow_" },
                     "data.document.exp": { "$gt": "_dateNow_" },
                     "data.data_cert.certificateType": "C1"
                   }
                 }
               } */
            let res = yield this._apiMongo
                .filter(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].COLLECTION.document, src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].TABLE_SIS.external, {
                "data.document.subject.data.dids.address": prod.values[0].id,
                "data.document.stamp_db": { "$lte": dateNow },
                "data.document.iat": { "$lte": dateNow },
                "data.document.exp": { "$gt": dateNow }
            });
            if (this._fun.isEmpty(res.result)) {
                this._fun.alertError('No se encontro credenciales para este usuario', true);
                loading.dismiss();
                return;
            }
            loading.dismiss();
            /* return; */
            const modal = yield this._modal.create({
                component: _list_cert_list_cert_component__WEBPACK_IMPORTED_MODULE_6__["ListCertComponent"],
                componentProps: {
                    dataProv: res.result[0].external
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            }));
            return yield modal.present();
        });
    }
};
AlamcenComponent.ctorParameters = () => [
    { type: src_app_services_ionic_components_service__WEBPACK_IMPORTED_MODULE_9__["IonicComponentsService"] },
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_8__["Funciones"] },
    { type: src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_5__["ApiMongoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
AlamcenComponent.propDecorators = {
    slidesDatos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slidesDatos', { static: false },] }],
    producersLot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AlamcenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-alamcen',
        template: _raw_loader_alamcen_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_alamcen_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AlamcenComponent);



/***/ }),

/***/ "fXUF":
/*!*********************************************************!*\
  !*** ./src/app/components/infolot/infolot.component.ts ***!
  \*********************************************************/
/*! exports provided: InfolotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfolotComponent", function() { return InfolotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_infolot_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./infolot.component.html */ "HdGf");
/* harmony import */ var _infolot_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infolot.component.scss */ "hfpC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/compartido/funciones */ "3Djf");
/* harmony import */ var src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/apiMongo.service */ "GtMO");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/storage.service */ "n90K");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");









let InfolotComponent = class InfolotComponent {
    constructor(_storage, router, _fun, _apiMongo) {
        this._storage = _storage;
        this.router = router;
        this._fun = _fun;
        this._apiMongo = _apiMongo;
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            speed: 700,
            autoplay: {
                delay: 4000,
            },
        };
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
        this.initEnd = false;
        this.indexSlide = 0;
        this.listCerts = [];
        this.endPoint = '';
        this.getCertCooperativa();
    }
    ionViewDidLoad() {
        this.videoElement = this.video.nativeElement;
        this.videoElement.play();
    }
    ngOnInit() {
        this.endPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].url.substr(0, src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].url.length - 1); //quitar el "/"
    }
    prueba(data) {
    }
    getCertCooperativa() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let dateNow = Math.floor(new Date().getTime() / 1000);
            try {
                const res = yield this._apiMongo.filter(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].COLLECTION.document, src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].TABLE_SIS.external, {
                    'data.document.subject.data.dids.address': src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].KEY_COOPERATIVA,
                    "data.document.stamp_db": { "$lte": dateNow },
                    "data.document.iat": { "$lte": dateNow },
                    "data.document.exp": { "$gt": dateNow }
                });
                if (this._fun.isEmpty(res.result)) {
                    return;
                }
                this.listCerts = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].TABLE_SIS.external];
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    verSlide() {
        this.slidesDatos.getActiveIndex().then(res => {
            if (!this.initEnd)
                this.indexSlide = res;
            this.initEnd = false;
        });
    }
    endSlide() {
        this.initEnd = true;
        this.indexSlide = 2;
    }
    sesion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let res;
            if (this.user == 'INVITADO')
                res = yield this._fun.alertGen('Iniciar sesión', 'Desea iniciar sesion?');
            else
                res = yield this._fun.alertGen('Si, cerrar', 'Desea cerrar sesión?');
            if (this._fun.isVarInvalid(res))
                return;
            yield this._storage.remove('USER');
            this.router.navigate(['/login']);
        });
    }
};
InfolotComponent.ctorParameters = () => [
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_compartido_funciones__WEBPACK_IMPORTED_MODULE_5__["Funciones"] },
    { type: src_app_services_apiMongo_service__WEBPACK_IMPORTED_MODULE_6__["ApiMongoService"] }
];
InfolotComponent.propDecorators = {
    slidesDatos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slidesDatos', { static: false },] }],
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["video",] }],
    trace: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
InfolotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-infolot',
        template: _raw_loader_infolot_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_infolot_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InfolotComponent);



/***/ }),

/***/ "gyvx":
/*!*****************************************!*\
  !*** ./src/app/guards/noLogin.guard.ts ***!
  \*****************************************/
/*! exports provided: noLoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noLoginGuard", function() { return noLoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "n90K");





let noLoginGuard = class noLoginGuard {
    constructor(_navCtrl, _storage, router) {
        this._navCtrl = _navCtrl;
        this._storage = _storage;
        this.router = router;
    }
    canActivate() {
        return this._storage.validarAuth().then(res => {
            if (res) {
                this._navCtrl.navigateRoot('home');
                return false;
            }
            return true;
        });
    }
};
noLoginGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
noLoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], noLoginGuard);



/***/ }),

/***/ "hfpC":
/*!***********************************************************!*\
  !*** ./src/app/components/infolot/infolot.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".aspect-tab {\n  position: relative;\n  width: 100%;\n  max-width: 1000px;\n  margin: 10px auto;\n  border-radius: 4px;\n  background-color: white;\n  box-shadow: 0 0 0 1px #ececec;\n  opacity: 1;\n  transition: box-shadow 0.2s, opacity 0.4s;\n}\n.aspect-tab:hover {\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.11);\n}\n.aspect-input {\n  display: none;\n}\n.aspect-input:checked ~ .aspect-content + .aspect-tab-content {\n  max-height: 3000px;\n}\n.aspect-input:checked ~ .aspect-content:after {\n  transform: rotate(0);\n}\n.aspect-label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  max-height: 80px;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 0;\n  z-index: 1;\n  cursor: pointer;\n}\n.aspect-label:hover ~ .aspect-content:after {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTI0IDI0SDBWMGgyNHoiIG9wYWNpdHk9Ii44NyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM1NTZBRUEiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE1Ljg4IDE1LjI5TDEyIDExLjQxbC0zLjg4IDMuODhhLjk5Ni45OTYgMCAxIDEtMS40MS0xLjQxbDQuNTktNC41OWEuOTk2Ljk5NiAwIDAgMSAxLjQxIDBsNC41OSA0LjU5Yy4zOS4zOS4zOSAxLjAyIDAgMS40MS0uMzkuMzgtMS4wMy4zOS0xLjQyIDB6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=\");\n}\n.aspect-content {\n  position: relative;\n  display: block;\n  height: 80px;\n  margin: 0;\n  padding: 0 87px 0 30px;\n  font-size: 0;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.aspect-content:before, .aspect-content:after {\n  content: \"\";\n  display: inline-block;\n  vertical-align: middle;\n}\n.aspect-content:before {\n  height: 100%;\n}\n.aspect-content:after {\n  position: absolute;\n  width: 24px;\n  height: 100%;\n  right: 30px;\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTI0IDI0SDBWMGgyNHoiIG9wYWNpdHk9Ii44NyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNBOUFDQUYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE1Ljg4IDE1LjI5TDEyIDExLjQxbC0zLjg4IDMuODhhLjk5Ni45OTYgMCAxIDEtMS40MS0xLjQxbDQuNTktNC41OWEuOTk2Ljk5NiAwIDAgMSAxLjQxIDBsNC41OSA0LjU5Yy4zOS4zOS4zOSAxLjAyIDAgMS40MS0uMzkuMzgtMS4wMy4zOS0xLjQyIDB6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=\");\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: rotate(180deg);\n}\n.aspect-name {\n  display: inline-block;\n  width: 75%;\n  /* margin-left: 16px; */\n  font-size: 30px;\n  font-weight: 500;\n  color: #242a32;\n  white-space: normal;\n  text-align: left;\n  vertical-align: middle;\n}\n.all-opinions,\n.aspect-name {\n  font-size: 14px;\n  line-height: 22px;\n}\n.all-opinions {\n  color: #5d5d5d;\n  text-align: left;\n}\n.aspect-content + .aspect-tab-content {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.4s;\n}\n.aspect-content > div,\n.aspect-stat > div {\n  display: inline-block;\n}\n.aspect-content > div {\n  vertical-align: middle;\n}\n.aspect-info {\n  width: 60%;\n  white-space: nowrap;\n  font-size: 0;\n}\n.aspect-info:before {\n  content: \"\";\n  display: inline-block;\n  height: 44px;\n  vertical-align: middle;\n}\n.aspect-tab-content {\n  background-color: #f9f9f9;\n  font-size: 0;\n  text-align: justify;\n}\n.sentiment-wrapper {\n  padding: 10px 10px 10px;\n}\n.sentiment-wrapper > div {\n  display: inline-block;\n  width: 33.3%;\n  max-width: 390px;\n  padding: 0 5px;\n  box-sizing: border-box;\n  vertical-align: top;\n  cursor: default;\n}\n.sentiment-wrapper > div > div {\n  width: 100%;\n  padding: 16px 24px 20px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ececec;\n  text-align: left;\n}\n.opinion-header {\n  position: relative;\n  width: 100%;\n  margin: 0 0 24px;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 20px;\n  color: #242a32;\n  text-transform: capitalize;\n}\n.opinion-header > span:nth-child(2) {\n  position: absolute;\n  right: 0;\n}\n.opinion-header + div > span {\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 22px;\n  color: #363636;\n}\n@media screen and (max-width: 800px) {\n  .aspect-label {\n    max-height: 102px;\n  }\n\n  .aspect-content {\n    height: auto;\n    padding: 10px 87px 10px 30px;\n  }\n  .aspect-content:before {\n    display: none;\n  }\n  .aspect-content:after {\n    top: 0;\n  }\n\n  .aspect-content > div {\n    display: block;\n    width: 100%;\n  }\n}\n@media screen and (max-width: 750px) {\n  .sentiment-wrapper > div {\n    display: block;\n    width: 100%;\n    max-width: 100%;\n  }\n\n  .sentiment-wrapper > div:not(:first-child) {\n    margin-top: 10px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .aspect-label {\n    max-height: 140px;\n  }\n\n  .aspect-stat > div {\n    display: block;\n    width: 100%;\n  }\n\n  .all-opinions {\n    margin-bottom: 10px;\n  }\n\n  .all-opinions + div > span:first-child {\n    margin: 0;\n  }\n}\n.input {\n  font-size: 11px;\n  color: #8b898f;\n  font-weight: 500;\n}\n.row_container {\n  display: flex;\n}\n.icon-nav-arrow {\n  color: #f7f8fb;\n  font-size: 25px;\n  padding: 15px 20px;\n}\n.title {\n  text-align: left;\n  color: #f7f8fb;\n  font-size: 17px;\n}\n/* ********************** */\n.context {\n  /* width: 300px; */\n  height: 100%;\n  /* margin: 100px; */\n  background: white;\n  transform: translateZ(0);\n  overflow: scroll;\n}\n.viewport {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  overflow-x: hidden;\n}\n.centered {\n  z-index: 30000;\n  position: fixed;\n  /*  left: 50%; */\n  bottom: 0px;\n  /*   transform: translateX(-50%); */\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: 0px;\n  margin-left: 0px;\n}\n.inp1 {\n  color: #787878 !important;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n}\n.inpValue {\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 1.3;\n  color: #212529;\n}\n.nav.tmf-navigation-footer {\n  position: sticky;\n  z-index: 20;\n  bottom: 0;\n  width: 100%;\n  background-color: #484848;\n  padding: 0 0 5px;\n  margin-top: 50px;\n}\n.mm0 {\n  color: #fd7575;\n}\n.mm1 {\n  color: #20e24a;\n}\n.btn-1 {\n  display: inline-block;\n  text-decoration: none;\n  background-color: transparent;\n  padding: 15px 20px;\n  /* border: none; */\n  color: white;\n  border-radius: 15px;\n  border: 1px solid white;\n  font-size: 12px;\n  box-shadow: var(--shadow-black-300);\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.footer {\n  margin-top: 50px;\n}\n.footer ul {\n  justify-content: center;\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.footer ul li {\n  margin: 0 15px;\n}\n.footer ul li a {\n  color: white;\n  text-decoration: none;\n  background-color: transparent;\n}\n.footer ul li a ion-icon {\n  font-size: 30px;\n}\n.nav-bottom {\n  background: #484848;\n  padding: 1;\n  text-align: center;\n  line-height: 1;\n}\n.nav-bottom .nav-cont {\n  border-radius: 0 0 12px 12px;\n  margin: 0 2px 5px 2px;\n  position: relative;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);\n  padding: 5px;\n  padding-bottom: 15px;\n  padding-top: 8px;\n  min-height: 76px;\n  color: white;\n}\n.select-nav {\n  background: white;\n  color: #484848 !important;\n}\n.btn-5 {\n  text-decoration: none;\n  background: linear-gradient(90deg, #0261c3 10%, #5c67ec 100%);\n  padding: 15px 50px;\n  border-radius: 30px;\n  color: #fff;\n  font-size: 11px;\n  box-shadow: var(--shadow-black-100);\n  font-weight: 500;\n}\n/* ****************** */\n/* *********************************** */\n.row-div {\n  width: 210%;\n  height: 3vh;\n  padding: 0;\n  margin: -50px;\n  justify-content: center;\n  position: relative;\n}\n/* -- SVG CSS -- */\n.svg-separator {\n  display: block;\n  background: 0 0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 9;\n  transform: translateY(-100%) translateY(2px);\n  width: 100%;\n}\n.svg-separator.bottom {\n  top: auto;\n  bottom: 0;\n}\n.sep1 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep2 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep3 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep4 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep5 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep6 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep7 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep8 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep9 {\n  transform: translateY(0%) translateY(-2px) scale(-1, -1);\n  transform-origin: bottom;\n}\n.sep10 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep11 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n.sep12 {\n  transform: translateY(-100%) translateY(2px) scale(1, 1);\n  transform-origin: top;\n}\n/* -- Row BG Color -- */\n.green {\n  background-color: #03a678;\n}\n.green2 {\n  background-color: #1bbc9b;\n}\n.red {\n  background: linear-gradient(180deg, #f8f8f8 10%, #ffffff 100%);\n}\n.light-grey {\n  background-color: #ecf0f1;\n}\n.light-grey2 {\n  background-color: #ecf0f1;\n}\n.dark-blue {\n  background-color: #22313f;\n}\n.grey-blue {\n  background-color: #6c7a89;\n}\n.black {\n  background-color: #333;\n}\n.stupid-blue {\n  background-color: #19b5fe;\n}\n.video-c {\n  width: 100%;\n}\n.video-c:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbmZvbG90LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtBQVBGO0FBU0U7RUFDRSw0Q0FBQTtBQVBKO0FBVUE7RUFDRSxhQUFBO0FBUEY7QUFTQTtFQUNFLGtCQUFBO0FBTkY7QUFRQTtFQUNFLG9CQUFBO0FBTEY7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFKRjtBQUtFO0VBQ0UsMmpCQUFBO0FBSEo7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSEY7QUFJRTtFQUVFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBSEo7QUFLRTtFQUNFLFlBQUE7QUFISjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwyakJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUFISjtBQU1BO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQWxGYTtFQW1GYixtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFIRjtBQU1BOztFQUVFLGVBQUE7RUFDQSxpQkFBQTtBQUhGO0FBS0E7RUFDRSxjQTVGUztFQTZGVCxnQkFBQTtBQUZGO0FBSUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQURGO0FBR0E7O0VBRUUscUJBQUE7QUFBRjtBQUVBO0VBQ0Usc0JBQUE7QUFDRjtBQUVBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFFSjtBQUVBO0VBQ0UseUJBdEhpQjtFQXVIakIsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDQTtFQUNFLHVCQUFBO0FBRUY7QUFBQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBR0Y7QUFEQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFJRjtBQUZBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBM0phO0VBNEpiLDBCQUFBO0FBS0Y7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQU1GO0FBSkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBbEttQjtBQXlLckI7QUFKQTtFQUNFO0lBQ0UsaUJBQUE7RUFPRjs7RUFMQTtJQUNFLFlBQUE7SUFDQSw0QkFBQTtFQVFGO0VBUEU7SUFDRSxhQUFBO0VBU0o7RUFQRTtJQUNFLE1BQUE7RUFTSjs7RUFOQTtJQUNFLGNBQUE7SUFDQSxXQUFBO0VBU0Y7QUFDRjtBQVBBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUFTRjs7RUFQQTtJQUNFLGdCQUFBO0VBVUY7QUFDRjtBQVJBO0VBQ0U7SUFDRSxpQkFBQTtFQVVGOztFQVJBO0lBQ0UsY0FBQTtJQUNBLFdBQUE7RUFXRjs7RUFUQTtJQUNFLG1CQUFBO0VBWUY7O0VBVkE7SUFDRSxTQUFBO0VBYUY7QUFDRjtBQVZBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVlGO0FBVEE7RUFDRSxhQUFBO0FBWUY7QUFUQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFZRjtBQVRBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVlGO0FBVEEsMkJBQUE7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBV0Y7QUFUQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBWUY7QUFWQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7QUFhRjtBQVhBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBY0Y7QUFYQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWNGO0FBWEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFjRjtBQVhBO0VBRUUsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFjRjtBQVhBO0VBQ0UsY0FBQTtBQWNGO0FBWEE7RUFDRSxjQUFBO0FBY0Y7QUFYQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFjRjtBQVhBO0VBQ0UsZ0JBQUE7QUFjRjtBQWJFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQWVKO0FBZEk7RUFDRSxjQUFBO0FBZ0JOO0FBZk07RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQWlCUjtBQWhCUTtFQUNFLGVBQUE7QUFrQlY7QUFYQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWNGO0FBWkU7RUFDRSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBY0o7QUFWQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUFhRjtBQVJBO0VBQ0UscUJBQUE7RUFDQSw2REFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFXRjtBQVRBLHVCQUFBO0FBRUEsd0NBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBV0o7QUFSRSxrQkFBQTtBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFFQSw0Q0FBQTtFQUNBLFdBQUE7QUFVSjtBQVJFO0VBQ0UsU0FBQTtFQUNBLFNBQUE7QUFXSjtBQVRFO0VBQ0Usd0RBQUE7RUFDQSxxQkFBQTtBQVlKO0FBVkU7RUFDRSx3REFBQTtFQUNBLHFCQUFBO0FBYUo7QUFYRTtFQUNFLHdEQUFBO0VBQ0EscUJBQUE7QUFjSjtBQVpFO0VBQ0Usd0RBQUE7RUFDQSxxQkFBQTtBQWVKO0FBYkU7RUFDRSx3REFBQTtFQUNBLHFCQUFBO0FBZ0JKO0FBZEU7RUFDRSx3REFBQTtFQUNBLHFCQUFBO0FBaUJKO0FBZkU7RUFDRSx3REFBQTtFQUNBLHFCQUFBO0FBa0JKO0FBaEJFO0VBQ0Usd0RBQUE7RUFDQSxxQkFBQTtBQW1CSjtBQWpCRTtFQUNFLHdEQUFBO0VBQ0Esd0JBQUE7QUFvQko7QUFsQkU7RUFDRSx3REFBQTtFQUNBLHFCQUFBO0FBcUJKO0FBbkJFO0VBQ0Usd0RBQUE7RUFDQSxxQkFBQTtBQXNCSjtBQXBCRTtFQUNFLHdEQUFBO0VBQ0EscUJBQUE7QUF1Qko7QUFwQkUsdUJBQUE7QUFFQTtFQUFPLHlCQUFBO0FBdUJUO0FBdEJFO0VBQVEseUJBQUE7QUEwQlY7QUF6QkU7RUFBSyw4REFBQTtBQTZCUDtBQTVCRTtFQUFZLHlCQUFBO0FBZ0NkO0FBL0JFO0VBQWEseUJBQUE7QUFtQ2Y7QUFsQ0U7RUFBVyx5QkFBQTtBQXNDYjtBQXJDRTtFQUFXLHlCQUFBO0FBeUNiO0FBeENFO0VBQU8sc0JBQUE7QUE0Q1Q7QUEzQ0U7RUFBYSx5QkFBQTtBQStDZjtBQTNDRTtFQUNFLFdBQUE7QUE4Q0o7QUEzQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDTSxNQUFBO0VBQ04sU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7QUE4Q0oiLCJmaWxlIjoiaW5mb2xvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjaXJjbGUtZ3JheTogI2U0ZTRlNDtcclxuJGhlYWRlci1ibGFjazogIzI0MmEzMjtcclxuJGJhY2tncm91bmQtY29sb3I6ICM2ZmNhZTc7XHJcbiR0YWItdGV4dDogIzVkNWQ1ZDtcclxuJHdoaXRlOiAjZmZmO1xyXG4kcmV2aWV3cy10ZXh0LWJsYWNrOiAjMzYzNjM2O1xyXG4kd2hpdGUtbGlnaHQtZ3JheTogI2Y5ZjlmOTtcclxuXHJcbi5hc3BlY3QtdGFiIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDIzNiwgMjM2LCAyMzYsIDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzLCBvcGFjaXR5IDAuNHM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSk7XHJcbiAgfVxyXG59XHJcbi5hc3BlY3QtaW5wdXQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmFzcGVjdC1pbnB1dDpjaGVja2VkIH4gLmFzcGVjdC1jb250ZW50ICsgLmFzcGVjdC10YWItY29udGVudCB7XHJcbiAgbWF4LWhlaWdodDogMzAwMHB4O1xyXG59XHJcbi5hc3BlY3QtaW5wdXQ6Y2hlY2tlZCB+IC5hc3BlY3QtY29udGVudDphZnRlciB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbn1cclxuLmFzcGVjdC1sYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIH4gLmFzcGVjdC1jb250ZW50OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeU5DSWdhR1ZwWjJoMFBTSXlOQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWo0S0lDQWdJRHhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEkwSURJMFNEQldNR2d5TkhvaUlHOXdZV05wZEhrOUlpNDROeUl2UGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1pwYkd3OUlpTTFOVFpCUlVFaUlHWnBiR3d0Y25Wc1pUMGlibTl1ZW1WeWJ5SWdaRDBpVFRFMUxqZzRJREUxTGpJNVRERXlJREV4TGpReGJDMHpMamc0SURNdU9EaGhMams1Tmk0NU9UWWdNQ0F4SURFdE1TNDBNUzB4TGpReGJEUXVOVGt0TkM0MU9XRXVPVGsyTGprNU5pQXdJREFnTVNBeExqUXhJREJzTkM0MU9TQTBMalU1WXk0ek9TNHpPUzR6T1NBeExqQXlJREFnTVM0ME1TMHVNemt1TXpndE1TNHdNeTR6T1MweExqUXlJREI2SWk4K0NpQWdJQ0E4TDJjK0Nqd3ZjM1puUGdvPVwiKTtcclxuICB9XHJcbn1cclxuLmFzcGVjdC1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwIDg3cHggMCAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICAmOmJlZm9yZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gICY6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeU5DSWdhR1ZwWjJoMFBTSXlOQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWo0S0lDQWdJRHhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEkwSURJMFNEQldNR2d5TkhvaUlHOXdZV05wZEhrOUlpNDROeUl2UGdvZ0lDQWdJQ0FnSUR4d1lYUm9JR1pwYkd3OUlpTkJPVUZEUVVZaUlHWnBiR3d0Y25Wc1pUMGlibTl1ZW1WeWJ5SWdaRDBpVFRFMUxqZzRJREUxTGpJNVRERXlJREV4TGpReGJDMHpMamc0SURNdU9EaGhMams1Tmk0NU9UWWdNQ0F4SURFdE1TNDBNUzB4TGpReGJEUXVOVGt0TkM0MU9XRXVPVGsyTGprNU5pQXdJREFnTVNBeExqUXhJREJzTkM0MU9TQTBMalU1WXk0ek9TNHpPUzR6T1NBeExqQXlJREFnTVM0ME1TMHVNemt1TXpndE1TNHdNeTR6T1MweExqUXlJREI2SWk4K0NpQWdJQ0E4TDJjK0Nqd3ZjM1puUGdvPVwiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIH1cclxufVxyXG4uYXNwZWN0LW5hbWUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNzUlO1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAxNnB4OyAqL1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAkaGVhZGVyLWJsYWNrO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uYWxsLW9waW5pb25zLFxyXG4uYXNwZWN0LW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG4uYWxsLW9waW5pb25zIHtcclxuICBjb2xvcjogJHRhYi10ZXh0O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmFzcGVjdC1jb250ZW50ICsgLmFzcGVjdC10YWItY29udGVudCB7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cztcclxufVxyXG4uYXNwZWN0LWNvbnRlbnQgPiBkaXYsXHJcbi5hc3BlY3Qtc3RhdCA+IGRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5hc3BlY3QtY29udGVudCA+IGRpdiB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmFzcGVjdC1pbmZvIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC1zaXplOiAwO1xyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxufVxyXG5cclxuLmFzcGVjdC10YWItY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLWxpZ2h0LWdyYXk7XHJcbiAgZm9udC1zaXplOiAwO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuLnNlbnRpbWVudC13cmFwcGVyIHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweDtcclxufVxyXG4uc2VudGltZW50LXdyYXBwZXIgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMzMuMyU7XHJcbiAgbWF4LXdpZHRoOiAzOTBweDtcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcbi5zZW50aW1lbnQtd3JhcHBlciA+IGRpdiA+IGRpdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTZweCAyNHB4IDIwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWNlY2VjO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLm9waW5pb24taGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIDAgMjRweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogJGhlYWRlci1ibGFjaztcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4ub3Bpbmlvbi1oZWFkZXIgPiBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbi5vcGluaW9uLWhlYWRlciArIGRpdiA+IHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGNvbG9yOiAkcmV2aWV3cy10ZXh0LWJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5hc3BlY3QtbGFiZWwge1xyXG4gICAgbWF4LWhlaWdodDogMTAycHg7XHJcbiAgfVxyXG4gIC5hc3BlY3QtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDg3cHggMTBweCAzMHB4O1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHRvcDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLmFzcGVjdC1jb250ZW50ID4gZGl2IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgLnNlbnRpbWVudC13cmFwcGVyID4gZGl2IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5zZW50aW1lbnQtd3JhcHBlciA+IGRpdjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5hc3BlY3QtbGFiZWwge1xyXG4gICAgbWF4LWhlaWdodDogMTQwcHg7XHJcbiAgfVxyXG4gIC5hc3BlY3Qtc3RhdCA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuYWxsLW9waW5pb25zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIC5hbGwtb3BpbmlvbnMgKyBkaXYgPiBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAjOGI4OThmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5yb3dfY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaWNvbi1uYXYtYXJyb3cge1xyXG4gIGNvbG9yOiAjZjdmOGZiO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogI2Y3ZjhmYjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi8qICoqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbi5jb250ZXh0IHtcclxuICAvKiB3aWR0aDogMzAwcHg7ICovXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8qIG1hcmdpbjogMTAwcHg7ICovXHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuLnZpZXdwb3J0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4uY2VudGVyZWQge1xyXG4gIHotaW5kZXg6IDMwMDAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICAvKiAgbGVmdDogNTAlOyAqL1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIC8qICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyAqL1xyXG59XHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5pbnAxIHtcclxuICBjb2xvcjogIzc4Nzg3OCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmlucFZhbHVlIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG59XHJcblxyXG4ubmF2LnRtZi1uYXZpZ2F0aW9uLWZvb3RlciB7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODQ4NDg7XHJcbiAgcGFkZGluZzogMCAwIDVweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ubW0wIHtcclxuICBjb2xvcjogI2ZkNzU3NTtcclxufVxyXG5cclxuLm1tMSB7XHJcbiAgY29sb3I6IHJnYigzMiwgMjI2LCA3NCk7XHJcbn1cclxuXHJcbi5idG4tMSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgLyogYm9yZGVyOiBub25lOyAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYmxhY2stMzAwKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgdWwge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaSB7XHJcbiAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICBhIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5uYXYtYm90dG9tIHtcclxuICBiYWNrZ3JvdW5kOiAjNDg0ODQ4O1xyXG4gIHBhZGRpbmc6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG5cclxuICAubmF2LWNvbnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcclxuICAgIG1hcmdpbjogMCAycHggNXB4IDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2IoMCAwIDAgLyAxNSUpO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgbWluLWhlaWdodDogNzZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWxlY3QtbmF2e1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGNvbG9yOiM0ODQ4NDggIWltcG9ydGFudDsgIFxyXG59XHJcblxyXG5cclxuXHJcbi5idG4tNXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDI2MWMzICAxMCUsICM1YzY3ZWMgMTAwJSk7XHJcbiAgcGFkZGluZzogMTVweCA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgY29sb3I6ICAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctYmxhY2stMTAwKTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi8qICoqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLnJvdy1kaXZ7XHJcbiAgICB3aWR0aDogMjEwJTtcclxuICAgIGhlaWdodDogM3ZoO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogLTUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogLS0gU1ZHIENTUyAtLSAqL1xyXG4gIFxyXG4gIC5zdmctc2VwYXJhdG9ye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAwIDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZVkoMnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSkgdHJhbnNsYXRlWSgycHgpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5zdmctc2VwYXJhdG9yLmJvdHRvbXtcclxuICAgIHRvcDogYXV0bztcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcbiAgLnNlcDF7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZVkoMnB4KSBzY2FsZSgxLDEpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gIH1cclxuICAuc2VwMiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZVkoMnB4KSBzY2FsZSgxLDEpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gIH1cclxuICAuc2VwMyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZVkoMnB4KSBzY2FsZSgxLDEpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gIH1cclxuICAuc2VwNCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZVkoMnB4KSBzY2FsZSgxLDEpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gIH1cclxuICAuc2VwNSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZVkoMnB4KSBzY2FsZSgxLDEpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gIH1cclxuICAuc2VwNiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZVkoMnB4KSBzY2FsZSgxLDEpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gIH1cclxuICAuc2VwNyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZVkoMnB4KSBzY2FsZSgxLDEpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gIH1cclxuICAuc2VwOCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZVkoMnB4KSBzY2FsZSgxLDEpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gIH1cclxuICAuc2VwOSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHRyYW5zbGF0ZVkoLTJweCkgc2NhbGUoLTEsLTEpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG4gIH1cclxuICAuc2VwMTAge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSB0cmFuc2xhdGVZKDJweCkgc2NhbGUoMSwxKTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxuICB9XHJcbiAgLnNlcDExIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSkgdHJhbnNsYXRlWSgycHgpIHNjYWxlKDEsMSk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgfVxyXG4gIC5zZXAxMiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHRyYW5zbGF0ZVkoMnB4KSBzY2FsZSgxLDEpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gIH1cclxuICBcclxuICAvKiAtLSBSb3cgQkcgQ29sb3IgLS0gKi9cclxuICBcclxuICAuZ3JlZW57YmFja2dyb3VuZC1jb2xvcjojMDNhNjc4O31cclxuICAuZ3JlZW4ye2JhY2tncm91bmQtY29sb3I6IzFiYmM5Yjt9XHJcbiAgLnJlZHtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmOGY4ZjggMTAlLCAjZmZmZmZmIDEwMCUpfVxyXG4gIC5saWdodC1ncmV5e2JhY2tncm91bmQtY29sb3I6I2VjZjBmMTt9XHJcbiAgLmxpZ2h0LWdyZXkye2JhY2tncm91bmQtY29sb3I6I2VjZjBmMTt9XHJcbiAgLmRhcmstYmx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiMyMjMxM2Y7fVxyXG4gIC5ncmV5LWJsdWV7YmFja2dyb3VuZC1jb2xvcjojNmM3YTg5O31cclxuICAuYmxhY2t7YmFja2dyb3VuZC1jb2xvcjojMzMzO31cclxuICAuc3R1cGlkLWJsdWV7YmFja2dyb3VuZC1jb2xvcjojMTliNWZlO31cclxuXHJcblxyXG5cclxuICAudmlkZW8tY3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnZpZGVvLWM6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _infolot_infolot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./infolot/infolot.component */ "fXUF");
/* harmony import */ var _alamcen_alamcen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alamcen/alamcen.component */ "ex5c");
/* harmony import */ var _proceso_proceso_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proceso/proceso.component */ "lgvJ");
/* harmony import */ var _list_cert_list_cert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-cert/list-cert.component */ "Fmsh");
/* harmony import */ var _cert_cert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cert/cert.component */ "u/Qc");
/* harmony import */ var _ver_foto_ver_foto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ver-foto/ver-foto.component */ "9UZi");










let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _infolot_infolot_component__WEBPACK_IMPORTED_MODULE_4__["InfolotComponent"],
            _alamcen_alamcen_component__WEBPACK_IMPORTED_MODULE_5__["AlamcenComponent"],
            _proceso_proceso_component__WEBPACK_IMPORTED_MODULE_6__["ProcesoComponent"],
            _list_cert_list_cert_component__WEBPACK_IMPORTED_MODULE_7__["ListCertComponent"],
            _cert_cert_component__WEBPACK_IMPORTED_MODULE_8__["CertComponent"],
            _ver_foto_ver_foto_component__WEBPACK_IMPORTED_MODULE_9__["VerFotoComponent"]
        ],
        exports: [
            _infolot_infolot_component__WEBPACK_IMPORTED_MODULE_4__["InfolotComponent"],
            _alamcen_alamcen_component__WEBPACK_IMPORTED_MODULE_5__["AlamcenComponent"],
            _proceso_proceso_component__WEBPACK_IMPORTED_MODULE_6__["ProcesoComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lgvJ":
/*!*********************************************************!*\
  !*** ./src/app/components/proceso/proceso.component.ts ***!
  \*********************************************************/
/*! exports provided: ProcesoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcesoComponent", function() { return ProcesoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_proceso_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./proceso.component.html */ "vEVD");
/* harmony import */ var _proceso_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proceso.component.scss */ "mhhe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detail_attr_detail_attr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../detail-attr/detail-attr.component */ "0C09");






let ProcesoComponent = class ProcesoComponent {
    constructor(_modal) {
        this._modal = _modal;
    }
    ngOnInit() {
    }
    detailTask(task_detail) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                cssClass: 'style-info',
                component: _detail_attr_detail_attr_component__WEBPACK_IMPORTED_MODULE_5__["DetailAttrComponent"],
                componentProps: {
                    task_detail
                }
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            }));
            return yield modal.present();
        });
    }
};
ProcesoComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ProcesoComponent.propDecorators = {
    proceso: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProcesoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-proceso',
        template: _raw_loader_proceso_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_proceso_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProcesoComponent);



/***/ }),

/***/ "mhhe":
/*!***********************************************************!*\
  !*** ./src/app/components/proceso/proceso.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\n  display: flex;\n  margin-right: 0px;\n  margin-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9jZXNvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBRiIsImZpbGUiOiJwcm9jZXNvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let StorageService = class StorageService {
    constructor(route) {
        this.route = route;
        /* VARIABLE PARA EL CÓDIGO DEL LOTE
         */
        this.code = null;
        this.initSesion = true;
        this.moneda = null;
        this.datos = {
            PIN: '',
            ADDRESS: '',
            DID: '',
            privateKey: '',
            publicKey: '',
            PHOTO: '',
            PHOTO_MIN: '',
            creadentialSignature: '',
            NAME: '',
            DNI: '',
            ALIAS: '',
            EMAIL: ''
        };
        this.userSesion = {
            publicKey: ''
        };
    }
    initVarSis() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.userSesion = (yield this.getLocalStorage('USER')) || { publicKey: '' };
                resolve(true);
            }));
        });
    }
    resetData() {
        this.datos = {
            PIN: '',
            ADDRESS: '',
            DID: '',
            privateKey: '',
            publicKey: '',
            PHOTO: '',
            PHOTO_MIN: '',
            creadentialSignature: '',
            NAME: '',
            DNI: '',
            ALIAS: '',
            EMAIL: ''
        };
    }
    validarAuth() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = yield this.getLocalStorage('USER');
            if (data)
                return Promise.resolve(true);
            return Promise.resolve(false);
        });
    }
    getLocalStorage(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let item = (yield Storage.get({ key: name })) || null;
            if (!item)
                return null;
            return JSON.parse(item.value);
        });
    }
    setLocalStorage(name, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.set({ key: name, value: JSON.stringify(data) });
        });
    }
    remove(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.remove({ key: name });
        });
    }
    clearStorage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.clear();
        });
    }
};
StorageService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "nCW2":
/*!***********************************************************!*\
  !*** ./src/app/components/alamcen/alamcen.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".context {\n  /* width: 300px; */\n  height: 100%;\n  /* margin: 100px; */\n  background: white;\n  transform: translateZ(0);\n  overflow: scroll;\n}\n\n.viewport {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  overflow-x: hidden;\n}\n\n.centered {\n  z-index: 30000;\n  position: fixed;\n  /*  left: 50%; */\n  bottom: 0px;\n  /*   transform: translateX(-50%); */\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: 0px;\n  margin-left: 0px;\n}\n\n.inp1 {\n  color: #787878 !important;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n}\n\n.inpValue {\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 1.3;\n  color: #212529;\n}\n\n.nav.tmf-navigation-footer {\n  position: sticky;\n  z-index: 20;\n  bottom: 0;\n  width: 100%;\n  background-color: #484848;\n  padding: 0 0 5px;\n  margin-top: 50px;\n}\n\n.mm0 {\n  color: #fd7575;\n}\n\n.mm1 {\n  color: #20e24a;\n}\n\n.btn-1 {\n  display: inline-block;\n  text-decoration: none;\n  background-color: transparent;\n  padding: 15px 20px;\n  /* border: none; */\n  color: white;\n  border-radius: 15px;\n  border: 1px solid white;\n  font-size: 12px;\n  box-shadow: var(--shadow-black-300);\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.footer {\n  margin-top: 50px;\n}\n\n.footer ul {\n  justify-content: center;\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.footer ul li {\n  margin: 0 15px;\n}\n\n.footer ul li a {\n  color: white;\n  text-decoration: none;\n  background-color: transparent;\n}\n\n.footer ul li a ion-icon {\n  font-size: 30px;\n}\n\n.nav-bottom {\n  background: #484848;\n  padding: 1;\n  text-align: center;\n  line-height: 1;\n}\n\n.nav-bottom .nav-cont {\n  border-radius: 0 0 12px 12px;\n  margin: 0 2px 5px 2px;\n  position: relative;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);\n  padding: 5px;\n  padding-bottom: 15px;\n  padding-top: 8px;\n  min-height: 76px;\n  color: white;\n}\n\n.select-nav {\n  background: white;\n  color: #484848 !important;\n}\n\n.btn-5 {\n  text-decoration: none;\n  background: linear-gradient(90deg, #0261c3 10%, #5c67ec 100%);\n  padding: 15px 50px;\n  border-radius: 30px;\n  color: #fff;\n  font-size: 11px;\n  box-shadow: var(--shadow-black-100);\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhbGFtY2VuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBQUE7RUFFRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUdGOztBQUFBO0VBQ0UsZ0JBQUE7QUFHRjs7QUFGRTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFJSjs7QUFISTtFQUNFLGNBQUE7QUFLTjs7QUFKTTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0FBTVI7O0FBTFE7RUFDRSxlQUFBO0FBT1Y7O0FBQUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFHRjs7QUFERTtFQUNFLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsNkRBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FBQUYiLCJmaWxlIjoiYWxhbWNlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGV4dCB7XHJcbiAgLyogd2lkdGg6IDMwMHB4OyAqL1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvKiBtYXJnaW46IDEwMHB4OyAqL1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcbi52aWV3cG9ydCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuLmNlbnRlcmVkIHtcclxuICB6LWluZGV4OiAzMDAwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLyogIGxlZnQ6IDUwJTsgKi9cclxuICBib3R0b206IDBweDtcclxuICAvKiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgKi9cclxufVxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4uaW5wMSB7XHJcbiAgY29sb3I6ICM3ODc4NzggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5pbnBWYWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBjb2xvcjogIzIxMjUyOTtcclxufVxyXG5cclxuLm5hdi50bWYtbmF2aWdhdGlvbi1mb290ZXIge1xyXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0ODQ4O1xyXG4gIHBhZGRpbmc6IDAgMCA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLm1tMCB7XHJcbiAgY29sb3I6ICNmZDc1NzU7XHJcbn1cclxuXHJcbi5tbTEge1xyXG4gIGNvbG9yOiByZ2IoMzIsIDIyNiwgNzQpO1xyXG59XHJcblxyXG4uYnRuLTEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIC8qIGJvcmRlcjogbm9uZTsgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWJsYWNrLTMwMCk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHVsIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LWJvdHRvbSB7XHJcbiAgYmFja2dyb3VuZDogIzQ4NDg0ODtcclxuICBwYWRkaW5nOiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMTtcclxuXHJcbiAgLm5hdi1jb250IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMnB4IDEycHg7XHJcbiAgICBtYXJnaW46IDAgMnB4IDVweCAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiKDAgMCAwIC8gMTUlKTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIG1pbi1oZWlnaHQ6IDc2cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VsZWN0LW5hdntcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjojNDg0ODQ4ICFpbXBvcnRhbnQ7ICBcclxufVxyXG5cclxuXHJcblxyXG4uYnRuLTV7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAyNjFjMyAgMTAlLCAjNWM2N2VjIDEwMCUpO1xyXG4gIHBhZGRpbmc6IDE1cHggNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGNvbG9yOiAgI2ZmZjtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWJsYWNrLTEwMCk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufSJdfQ== */");

/***/ }),

/***/ "rb6s":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-attr/detail-attr.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!--   <div class=\"svg hide\" id=\"svg\">\n    <ng-lottie [options]=\"options\" (animationCreated)=\"animationCreated($event)\" (complete)=\"stop()\"></ng-lottie>\n  </div> -->\n\n\n  <ion-icon name=\"close\" style=\"top: 0;\n    position: absolute;\n    right: 0;\n    padding: 18px;\n    font-size: 25px;\n    color: #8c8c8c;\" (click)=\"closeModal()\">\n  </ion-icon>\n\n\n  <div style=\"padding: 15px 20px;margin-top: 5px;\">\n    <p\n      style=\"font-size: 20px;color: #595959;font-weight: 600;margin-bottom: 0;margin-top: 10px;padding-right: 20px;line-height: 1.1;\">\n      {{task_detail.name}}\n    </p>\n    <p style=\"margin-top: 5px;color: #5f5f5f;font-size: 13px;margin-right: 20px;\">{{task_detail.description}}\n      <!-- <br> <span style=\"font-size: 25px;\">{{subtitle}}</span> -->\n    </p>\n\n    <div>\n      <div *ngFor=\"let item of task_detail.attributes\" style=\"margin-bottom: 15px;\">\n        <ng-container *ngIf=\"item\">\n\n          <ng-container *ngIf=\"item.key!= 'NOTES_PRIVATE' && item.key!= 'NOTES_PUBLIC'\">\n\n            <p style=\"margin: 0;font-size: 12px;color: #797979;font-weight: 600;margin-bottom: 3px;\">\n              <ion-icon name=\"ellipse\" style=\"font-size: 8px;color: #0261c3;margin-right: 3px;\"></ion-icon>\n              {{item.name}}\n            </p>\n\n\n            <ng-container *ngIf=\"item.key!='doc_qa'\">\n\n              <p *ngIf=\"item.visibility_type!='C0' && !isQA\" style=\"margin: 0;font-size: 14px;color: #5f5f5f;padding-left: 13px;\">\n                {{ (item.values[0].value | slice:0:3) +'***'+ (item.values[0].value |\n                slice:(item.values[0].value.length-3):(item.values[0].value.length))}}\n              </p>\n\n              <p *ngIf=\"item.visibility_type=='C0' || isQA\" style=\"margin: 0;font-size: 14px;color: #5f5f5f;padding-left: 13px;\">\n                {{ item.values[0].value }}\n              </p>\n\n            </ng-container>\n\n           <!--  <ng-container *ngIf=\"!isQA\">\n\n            </ng-container>\n\n            <ng-container *ngIf=\"isQA\">\n             \n            </ng-container> -->\n\n\n            <div *ngIf=\"item.key=='doc_qa'\" class=\"row\">\n              <p style=\"margin: 0;\n              font-size: 14px;\n              color: #5f5f5f;\n              margin-left: 13px;\" class=\"col-8 mr-0 pr-0\">{{item.values[0].value.name}}</p>\n              <a [href]=\"endPoint+item.values[0].value.url\" target=\"_blank\" class=\"col-3 m-0 p-0\" style=\"text-align: center;\n              font-size: 13px;\n              color: #0261c3;\n              line-height: 1.2;\">\n                <ion-icon name=\"document-outline\" style=\"font-size: 20px;\"></ion-icon>\n                <span style=\"display: inline-block;\n              transform: translateY(-4px);\n              margin-left: 2px;\">Ver doc.</span>\n              </a>\n            </div>\n          </ng-container>\n\n\n\n\n        </ng-container>\n      </div>\n    </div>\n\n  </div>\n\n  <!--   <ion-button (click)=\"type != 'alert'?closeModal():confirm()\" class=\"button-02\"\n    style=\"--border-radius: 5px;font-size: 12px;--background: #2778c4;height: 40px;text-transform:initial;margin-right: 5px;\">\n    {{buttonConfim}}\n  </ion-button> -->\n\n  <!--  <ion-button *ngIf=\"type == 'alert'\" (click)=\"closeModal()\" class=\"button-02\"\n      style=\"--border-radius: 5px;font-size: 12px;--background: rgb(221, 51, 51);height: 40px;text-transform:initial;margin-left: 5px;\">\n      Cancelar\n    </ion-button> -->\n\n\n</ion-content>");

/***/ }),

/***/ "u/Qc":
/*!***************************************************!*\
  !*** ./src/app/components/cert/cert.component.ts ***!
  \***************************************************/
/*! exports provided: CertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertComponent", function() { return CertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cert.component.html */ "Om6x");
/* harmony import */ var _cert_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cert.component.scss */ "MJPf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");






let CertComponent = class CertComponent {
    constructor(_modal) {
        this._modal = _modal;
        this.urlImg = '';
    }
    ngOnInit() {
        let endPoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url.substr(0, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url.length - 1); //quitar el "/"
        this.urlImg = endPoint + this.credential.data.document.imgfile.url;
    }
    closeModal() {
        this._modal.dismiss();
    }
    confirm() {
        this._modal.dismiss({ confirm: true });
    }
};
CertComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
CertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cert',
        template: _raw_loader_cert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cert_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CertComponent);



/***/ }),

/***/ "vEVD":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/proceso/proceso.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n <!--  <div\n    style=\"color: #fff;background: linear-gradient(90deg, #1c1c24 10%, rgb(60, 61, 68) 100%); margin-bottom: 0;\">\n    <ion-icon name=\"arrow-back\" style=\"top: 0;\n          top: 0;\n    position: absolute;\n    left: 0;\n    padding: 12px;\n    font-size: 25px;\n    color: #d4d4d4;z-index: 2000;\" (click)=\"closeModal()\">\n    </ion-icon>\n    <ion-item style=\"--background: transparent;margin-bottom: 0;\" lines=\"none\">\n      <ion-title class=\"title\"> Proceso de producción</ion-title>\n    </ion-item>\n  </div> -->\n  <div style=\"padding-bottom: 100px;\">\n\n    <p style=\"color: #0261c3;\n    font-size: 20px;\n    margin: 0;\n    margin-top: 20px;\n    margin-left: 15px;\">Proceso de producción</p>\n\n\n    <div style=\"padding:15px ; \n    border-bottom: 1px solid #f1f1f1;\n    box-shadow: 4px 4px 40px #e9e9e9;\n    border-radius: .25rem;margin: 10px;position: relative;\" *ngFor=\"let item of proceso\" (click)=\"detailTask(item)\">\n  \n  \n      <div class=\"row\" style=\"position: relative;\">\n  \n        <div class=\"col-11 p-0 m-0\" >\n          <p style=\"\n              margin: 0;\n  margin-left: 8px;\n  font-weight: 600;\n\n  color: #464646;\">\n           {{item.name}}\n           <!--  <ion-badge class=\"status\" style=\"\n            font-size: 10px;\n            border-radius: 7px;\n            background: #3171e0;\n            padding: 3px 8px;\"> 12  <span style=\"font-size: 9px;\">Credent</span> \n            </ion-badge> -->\n          </p>\n         \n       <!--    <p style=\"\n                        font-size: 12px;\n  margin-left: 8px;\n  font-weight: 300;\n  color: #464646;\n  margin-bottom: 0;\n  padding-right: 20px;\"> {{item.description}} </p> -->\n\n\n        </div>\n   <!--      <div class=\"row\" style=\"position: absolute;width: 100%;bottom: 0;\">\n          <div class=\"col-6 m-0 p-0\">\n\n            <p  style=\"    font-size: 13px;\n            margin:0;\n              margin-left: 8px;\n              font-weight: 300;\n              color: #464646;\"><span style=\" font-size: 13px;\">Inicio: </span>  {{item.start | date :'MM/d/yy, HH:mm'}}</p>\n          </div>\n          <div class=\"col-6 m-0 p-0\">\n     \n            <p  style=\"    font-size: 13px;\n            margin:0;\n              margin-left: 8px;\n              font-weight: 300;\n              color: #464646;\"><span style=\" font-size: 13px;\">Fin: </span>{{item.end | date :'MM/d/yy, HH:mm'}}</p>\n          </div>\n \n        </div> -->\n  \n        <div class=\"col-1 p-0 m-0\" style=\"    align-self: center;\">\n          <ion-icon name=\"chevron-forward-outline\" style=\"font-size: 25px;\n          color: rgb(199 199 199);\"></ion-icon>\n  \n        </div>\n     </div>\n  \n  \n    </div>\n\n\n  </div>\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _guards_noLogin_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/noLogin.guard */ "gyvx");





const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        canActivate: [_guards_noLogin_guard__WEBPACK_IMPORTED_MODULE_4__["noLoginGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'home',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: 'cert',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-certificado-certificado-module */ "pages-certificado-certificado-module").then(__webpack_require__.bind(null, /*! ./pages/certificado/certificado.module */ "Xfnz")).then(m => m.CertificadoPageModule)
    },
    {
        path: 'etapa',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-etapa-etapa-module */ "pages-etapa-etapa-module").then(__webpack_require__.bind(null, /*! ./pages/etapa/etapa.module */ "OHkR")).then(m => m.EtapaPageModule)
    },
    {
        path: 'codelote',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-codelote-codelote-module */ "pages-codelote-codelote-module").then(__webpack_require__.bind(null, /*! ./pages/codelote/codelote.module */ "dCQ6")).then(m => m.CodelotePageModule)
    },
    {
        path: 'notfound',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-notfound-notfound-module */ "pages-notfound-notfound-module").then(__webpack_require__.bind(null, /*! ./pages/notfound/notfound.module */ "GSxL")).then(m => m.NotfoundPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "xsy3":
/*!*******************************************************************!*\
  !*** ./src/app/components/detail-attr/detail-attr.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtYXR0ci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map