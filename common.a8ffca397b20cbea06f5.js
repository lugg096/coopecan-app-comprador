(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3Djf":function(t,e,n){"use strict";n.d(e,"a",function(){return f});var i=n("mrSG"),r=n("AytR"),o=n("fXoL"),s=n("TEn/"),a=n("DPnb"),c=n("ofXK");function u(t,e){if(1&t){const t=o.Pb();o.Ob(0,"ion-button",7),o.Wb("click",function(){return o.jc(t),o.ac().closeModal()}),o.oc(1," Cancelar "),o.Nb()}}let l=(()=>{class t{constructor(t,e){this.ngZone=t,this._modal=e,this.buttonConfim="",this.textTitle="",this.subtitle="",this.type="",this.desablet=!1}ngOnInit(){}animationCreated(t){this.animationItem=t,setTimeout(()=>{this.pause()},1500)}stop(){this.ngZone.runOutsideAngular(()=>this.animationItem.stop())}play(){this.ngZone.runOutsideAngular(()=>this.animationItem.play())}pause(){this.ngZone.runOutsideAngular(()=>this.animationItem.pause())}closeModal(){this._modal.dismiss()}confirm(){this._modal.dismiss({confirm:!0})}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(o.B),o.Jb(s.z))},t.\u0275cmp=o.Db({type:t,selectors:[["app-alert"]],decls:11,vars:5,consts:[["id","svg",1,"svg","hide"],[3,"options","animationCreated","complete"],[2,"text-align","center","position","absolute","top","140px","width","100%"],[2,"font-size","25px","color","#595959","font-weight","600","margin-bottom","0"],[2,"margin-top","5px","color","#5f5f5f","font-size","15px","margin-left","20px","margin-right","20px"],[1,"button-02",2,"--border-radius","5px","font-size","12px","--background","#2778c4","height","40px","text-transform","initial","margin-right","5px",3,"click"],["class","button-02","style","--border-radius: 5px;font-size: 12px;--background: rgb(221, 51, 51);height: 40px;text-transform:initial;margin-left: 5px;",3,"click",4,"ngIf"],[1,"button-02",2,"--border-radius","5px","font-size","12px","--background","rgb(221, 51, 51)","height","40px","text-transform","initial","margin-left","5px",3,"click"]],template:function(t,e){1&t&&(o.Ob(0,"ion-content"),o.Ob(1,"div",0),o.Ob(2,"ng-lottie",1),o.Wb("animationCreated",function(t){return e.animationCreated(t)})("complete",function(){return e.stop()}),o.Nb(),o.Nb(),o.Ob(3,"div",2),o.Ob(4,"p",3),o.oc(5),o.Nb(),o.Ob(6,"p",4),o.oc(7),o.Nb(),o.Ob(8,"ion-button",5),o.Wb("click",function(){return"alert"!=e.type?e.closeModal():e.confirm()}),o.oc(9),o.Nb(),o.nc(10,u,2,0,"ion-button",6),o.Nb(),o.Nb()),2&t&&(o.zb(2),o.gc("options",e.options),o.zb(3),o.pc(e.textTitle),o.zb(2),o.pc(e.subtitle),o.zb(2),o.qc(" ",e.buttonConfim," "),o.zb(1),o.gc("ngIf",!e.desablet))},directives:[s.h,a.a,s.e,c.l],styles:[".svg[_ngcontent-%COMP%]{width:100px;margin:30px auto 20px}"]}),t})();var d=n("3Pt+"),h=n("GtMO");let f=(()=>{class t{constructor(t,e){this._apiMongo=t,this._modal=e,this.months=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],this.configInput={name:{long:32}},this.validatorkey=d.j.compose([d.j.pattern("^[a-zA-Z_][a-zA-Z0-9_]+$"),d.j.maxLength(this.configInput.name.long),d.j.required])}toJson(t){let e=JSON.parse(t);return JSON.parse(JSON.stringify(e))}alert(t,e,n,r,o){return Object(i.a)(this,void 0,void 0,function*(){let s={path:"/assets/json/"+t+".json",loop:!0,autoplay:!0};return new Promise(a=>Object(i.a)(this,void 0,void 0,function*(){const c=yield this._modal.create({component:l,cssClass:"style-alert",componentProps:{type:t,textTitle:n,subtitle:r,buttonConfim:e,options:s,desablet:o}});return c.onDidDismiss().then(t=>Object(i.a)(this,void 0,void 0,function*(){a(t.data)})),yield c.present()}))})}getTime(t){let e=Math.floor(t%1e3/100),n=Math.floor(t/1e3%60),i=Math.floor(t/6e4%60),r=Math.floor(t/36e5%24);return r=r>1?r+" horas":1==r?r+" hora":"",i=i>1?i+" minutos":1==i?i+" minuto":"",n=n>1?n+" segundos":1==n?n+" segundo":"",{hours:r,minutes:i,seconds:n,milliseconds:e}}alertError(t,e){return Object(i.a)(this,void 0,void 0,function*(){1!=e&&(e=!1);let n=t;this.isVarInvalid(t.message)||(n=t.message),yield this.alert(r.a.MSG.TYPE_ERROR,"ok",r.a.MSG.ERROR_TITLE,n,e)})}timeStamp(){return(new Date).getTime()}initSesion(){return Object(i.a)(this,void 0,void 0,function*(){return yield this.alert(r.a.MSG.TYPE_ALERT,"Iniciar sesi\xf3n",r.a.MSG.ALERT_TITLE,"Se requiere iniciar sesi\xf3n para visualizar esta informaci\xf3n")})}alertGen(t,e){return Object(i.a)(this,void 0,void 0,function*(){return yield this.alert(r.a.MSG.TYPE_ALERT,t,r.a.MSG.ALERT_TITLE,e)})}alertDelete(){return Object(i.a)(this,void 0,void 0,function*(){return yield this.alert(r.a.MSG.TYPE_ALERT,"Si, eliminar",r.a.MSG.ALERT_TITLE,r.a.MSG.ALERT_DELETE)})}alertSucc(t){return Object(i.a)(this,void 0,void 0,function*(){return yield this.alert(r.a.MSG.TYPE_SUC," Ok ",r.a.MSG.ALERT_TITLE,t)})}isUndefined(t){return null==t}isVarInvalid(t){return null==t||null==t||"undefined"==t||"null"==t||""==t}isInvalidResApi(t){return 200!=t&&"200"!=t}isEmpty(...t){let e=!0;for(let n=0;n<t.length;n++){if(Array.isArray(t[n])){0!=t[n].length&&(e=!1);break}if(this.isVarInvalid(t[n])){e=!1;break}}return e}strToJson(t){try{return this.isVarInvalid(t)?{}:JSON.parse(t)}catch(e){return this.alertError(e),null}}validJson(t){try{return this.isVarInvalid(t)?"":JSON.parse(t)}catch(e){return this.alertError(e),null}}codeToenum(t){return parseInt(t.replaceAll("C",""))}closeMenu(){return Object(i.a)(this,void 0,void 0,function*(){return new Promise(t=>Object(i.a)(this,void 0,void 0,function*(){}))})}sortJSON(t,e,n){return t.sort(function(t,i){var r=t[e],o=i[e];return("string"==typeof r||r instanceof String)&&(r=r.toLowerCase()),("string"==typeof o||o instanceof String)&&(o=o.toLowerCase()),n?r<o?-1:r>o?1:0:n?void 0:r>o?-1:r<o?1:0})}getParmas(t){return Object(i.a)(this,void 0,void 0,function*(){return(yield this._apiMongo.get(r.a.COLLECTION.general,t,"items")).result[0][t]})}patchValueJson(t,e){return Object.keys(t).forEach(n=>{t[n]=this.valueKeyJSON(e,n)}),t}valueKeyJSON(t,e){var n=null;return Object.keys(t).forEach(i=>{i==e&&(n=t[i])}),n}tmspToStr(t){var e=new Date(t),n=e.getFullYear(),i=this.months[e.getMonth()];return e.getDate()+" "+i+" "+n+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()}makeid(t){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=n.length,r=0;r<t;r++)e+=n.charAt(Math.floor(Math.random()*i));return e}makeDigit(t){for(var e="",n="0123456789",i=n.length,r=0;r<t;r++)e+=n.charAt(Math.floor(Math.random()*i));return e}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(h.a),o.Sb(s.z))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"74mu":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return a});const i=(t,e)=>null!==e.closest(t),r=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n,i)}return!1}},GtMO:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("AytR"),r=n("fXoL"),o=n("tk/3");let s=(()=>{class t{constructor(t){this._http=t,this.dominio=i.a.url}delete(t,e,n){const i=this.dominio.concat(`db/${t}/${e}/${n}`);return this._http.delete(i).toPromise()}getkey(t,e,n){const i=this.dominio.concat(`db/${t}/${e}/${n}`);return this._http.get(i).toPromise()}changeStatus(t,e,n,i){const r=this.dominio.concat(`db/${t}/${e}/${n}?status=${i}`);return this._http.post(r,{}).toPromise()}create(t,e,n,i,r){const o=this.dominio.concat(`db/${t}/${e}/${n}/?upsert=${r}`);return this._http.post(o,i).toPromise()}get(t,e,n){const i=this.dominio.concat(`db/${t}/${e}/${n}`);return this._http.get(i).toPromise()}getTrace(t){const e=this.dominio.concat(`process/${t}`);return this._http.get(e).toPromise()}filter(t,e,n){const i=this.dominio.concat(`db/${t}/${e}/filter`);return this._http.post(i,n).toPromise()}_get(t,e,n){const i=this.dominio.concat(`db/${t}/${e}/${n}`);return this._http.get(i)}_create(t,e,n,i,r){const o=this.dominio.concat(`db/${t}/${e}/${n}/?upsert=${r}`);return this._http.post(o,i)}}return t.\u0275fac=function(e){return new(e||t)(r.Sb(o.a))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},JbSX:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("wEJo"),r=n("qULd"),o=n("iWo5");const s=(t,e)=>{let n,s;const a=(t,i,r)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,i);o&&e(o)?o!==n&&(u(),c(o,r)):u()},c=(t,e)=>{n=t,s||(s=n);const r=n;Object(i.f)(()=>r.classList.add("ion-activated")),e()},u=(t=!1)=>{if(!n)return;const e=n;Object(i.f)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return Object(o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,r.a),onMove:t=>a(t.currentX,t.currentY,r.b),onEnd:()=>{u(!0),Object(r.e)(),s=void 0}})}},L8EE:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("mrSG"),r=n("fXoL"),o=n("TEn/");let s=(()=>{class t{constructor(t,e,n){this.loadingController=t,this.actionSheetController=e,this.toastController=n}presentLoading(){return Object(i.a)(this,void 0,void 0,function*(){return new Promise((t,e)=>Object(i.a)(this,void 0,void 0,function*(){const e=yield this.loadingController.create({message:"Por favor espere...",backdropDismiss:!1,showBackdrop:!0,spinner:"bubbles"});yield e.present(),t(e)}))})}presentToast(t,e,n){return Object(i.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:n,color:e})).present()})}resizeImage(t,e=180,n=150){return new Promise(i=>{let r=new Image;r.src=t,r.onload=()=>{let t=document.createElement("canvas"),o=r.width,s=r.height;o>s?o>e&&(s*=e/o,o=e):s>n&&(o*=n/s,s=n),t.width=o,t.height=s,t.getContext("2d").drawImage(r,0,0,o,s),i(t.toDataURL())}})}}return t.\u0275fac=function(e){return new(e||t)(r.Sb(o.y),r.Sb(o.a),r.Sb(o.C))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},acej:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var i=n("1vRN");const r=async(t,e,n,r,o)=>{if(t)return t.attachViewToDom(e,n,o,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return r&&r.forEach(t=>s.classList.add(t)),o&&Object.assign(s,o),e.appendChild(s),await new Promise(t=>Object(i.c)(s,t)),s},o=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},h3R7:function(t,e,n){"use strict";n.d(e,"a",function(){return i});const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",r=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,r=t*i-t+"ms",o=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},qULd:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return c}),n.d(e,"e",function(){return a});const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{i.selection()},o=()=>{i.selectionStart()},s=()=>{i.selectionChanged()},a=()=>{i.selectionEnd()},c=t=>{i.impact(t)}}}]);