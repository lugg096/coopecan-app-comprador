(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{X3zk:function(n,t,o){"use strict";o.r(t),o.d(t,"LoginPageModule",function(){return P});var e=o("ofXK"),i=o("3Pt+"),a=o("TEn/"),r=o("tyNb"),s=o("mrSG"),c=o("AytR"),d=o("fXoL"),l=o("GtMO"),p=o("3Djf"),g=o("n90K"),b=o("L8EE");const f=["slidesPadre"];function x(n,t){1&n&&(d.Ob(0,"p",36),d.oc(1," Correo es requerido "),d.Nb())}function h(n,t){1&n&&d.Kb(0,"ion-icon",37)}function m(n,t){1&n&&d.Kb(0,"ion-icon",38)}function u(n,t){1&n&&(d.Ob(0,"p",36),d.oc(1," Contrase\xf1a es requerida "),d.Nb())}const O=[{path:"",component:(()=>{class n{constructor(n,t,o,e,a,r,s){this._apiMongo=n,this._fun=t,this._storage=o,this.router=e,this._comp=a,this.formBuilder=r,this._modal=s,this.viewPass=!1,this.tipo="password",this.submitAttempt=!1,this.slideOptsOnboarding={allowSlideNext:!1,allowSlidePrev:!1,slidesPerView:1,initialSlide:0,speed:400},this.loginForm=r.group({username:["",i.j.compose([i.j.pattern("[^@]+@[^@]+.[^@]+$"),i.j.required])],pass:["",i.j.required]})}ngOnInit(){}mostrar(){this.viewPass?(this.tipo="password",this.viewPass=!1):(this.tipo="text",this.viewPass=!0)}idioma(n){this.nextSlidePadre()}ionViewDidEnter(){return Object(s.a)(this,void 0,void 0,function*(){this.backSlidePadre(),this.backSlidePadre(),this.backSlidePadre(),this.backSlidePadre()})}login(){return Object(s.a)(this,void 0,void 0,function*(){this.submitAttempt=!0;let n=yield this._comp.presentLoading();if(this.loginForm.valid)try{const t=yield this._apiMongo.filter(c.a.COLLECTION.party,c.a.TABLE_SIS.customer,{"data.email":this.loginForm.value.username,"data.password":this.loginForm.value.pass});if(this._fun.isEmpty(t.result))return n.dismiss(),void(yield this._fun.alertError("Usuario no existe"));this._storage.setLocalStorage("USER",t.result[0][c.a.TABLE_SIS.customer][0]),n.dismiss(),this.router.navigate(["/home"])}catch(t){yield this._fun.alertError(t),n.dismiss()}else n.dismiss()})}invitado(){return Object(s.a)(this,void 0,void 0,function*(){let n=yield this._comp.presentLoading();this._storage.setLocalStorage("USER","INVITADO"),n.dismiss(),this.router.navigate(["/home"])})}nextSlidePadre(){this.slidesPadre.lockSwipeToNext(!1),this.slidesPadre.slideNext(),this.slidesPadre.lockSwipeToNext(!0)}backSlidePadre(){this.slidesPadre.lockSwipeToPrev(!1),this.slidesPadre.slidePrev(),this.slidesPadre.lockSwipeToPrev(!0)}goImport(){this.router.navigate(["/import-wallet"])}}return n.\u0275fac=function(t){return new(t||n)(d.Jb(l.a),d.Jb(p.a),d.Jb(g.a),d.Jb(r.g),d.Jb(b.a),d.Jb(i.a),d.Jb(a.x))},n.\u0275cmp=d.Db({type:n,selectors:[["app-login"]],viewQuery:function(n,t){if(1&n&&d.sc(f,1),2&n){let n;d.hc(n=d.Xb())&&(t.slidesPadre=n.first)}},decls:56,vars:8,consts:[[2,"--background","#e4e4e438",3,"fullscreen"],["pager","false",2,"height","100%",3,"options"],["slidesPadre",""],[1,"ion-no-padding"],[2,"padding-bottom","5px","height","100%","color","#2F3435"],[2,"text-align","center","margin-top","10%"],["src","/appComprador/images/idiom.png"],[2,"text-align","center","font-size","23px","font-weight","600","margin-bottom","10px"],[2,"text-align","center","font-size","12px","margin","0 40px","color","#8a8a8a"],[2,"text-align","center","padding-bottom","50px"],["href","javascript:void(0)",1,"btn-5",2,"position","relative","top","30px","letter-spacing","1.5px","display","inline-block","padding","20px 70px","margin-bottom","15px","font-size","12px",3,"click"],["href","javascript:void(0)",1,"btn-2",2,"position","relative","top","30px","letter-spacing","1.5px","padding","20px 70px","display","inline-block","font-size","12px","border","1px solid #0059b580","color","#0059b5d9",3,"click"],[2,"padding-bottom","5px","padding-top","70px","width","100%","padding-left","20px","min-height","630px","color","#2F3435","position","relative"],[2,"text-align","left"],["src","/appComprador/images/logo.png","alt","",2,"width","50px"],[2,"text-align","left","font-size","25px","font-weight","600","margin-bottom","0","margin-top","30px"],[2,"font-weight","500","text-align","left","font-size","27px","line-height","1","color","#6d6d6d"],[2,"margin","0","text-align","left","font-weight","600","font-size","25px","color","#0059b5d6","margin-top","30px"],[2,"margin","0","text-align","left","font-size","13px"],[2,"padding-right","15px"],[2,"margin-left","-15px",3,"formGroup"],[2,"margin-top","20px","--background","transparent"],["formControlName","username","placeholder","Ingrese correo electr\xf3nico",2,"color","var(--black-400)"],["style","font-size: 11px;color: #eb445a;text-align: left;margin-top: 5px;margin-left: 15px;",4,"ngIf"],[2,"margin-top","18px","--background","transparent"],["placeholder","Ingrese contrase\xf1a","formControlName","pass",2,"color","var(--black-400)",3,"type"],[2,"position","absolute","right","10px","bottom","5px","z-index","10",3,"click"],["name","eye","style","font-size: 23px; color: #adadad;;",4,"ngIf"],["name","eye-off","style","font-size: 23px; color: #adadad;;",4,"ngIf"],[2,"text-align","center"],["href","javascript:void(0)",1,"btn-5",2,"position","relative","margin-top","30px","letter-spacing","1.5px","padding","18px 80px","display","inline-block","font-size","11px",3,"click"],[2,"position","absolute","font-size","11px","bottom","20px"],["href","",2,"color","#0059b5"],[2,"position","absolute","top","20px","right","0"],[2,"font-size","11px","text-align","right","margin","0","margin-right","20px"],["href","javascript:void(0)",1,"btn-5",2,"margin-top","8px","letter-spacing","1.5px","padding","12px 20px","display","inline-block","font-size","10px","border-radius","20px 0 0 20px",3,"click"],[2,"font-size","11px","color","#eb445a","text-align","left","margin-top","5px","margin-left","15px"],["name","eye",2,"font-size","23px","color","#adadad"],["name","eye-off",2,"font-size","23px","color","#adadad"]],template:function(n,t){1&n&&(d.Ob(0,"ion-content",0),d.Ob(1,"ion-slides",1,2),d.Ob(3,"ion-slide",3),d.Ob(4,"div",4),d.Ob(5,"div",5),d.Kb(6,"img",6),d.Nb(),d.Ob(7,"p",7),d.oc(8,"Select a language "),d.Nb(),d.Ob(9,"p",8),d.oc(10," Choose the language of your preference"),d.Nb(),d.Ob(11,"div",9),d.Ob(12,"a",10),d.Wb("click",function(){return t.idioma("es")}),d.oc(13," Espa\xf1ol "),d.Nb(),d.Kb(14,"br"),d.Ob(15,"a",11),d.Wb("click",function(){return t.idioma("us")}),d.oc(16," English "),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Ob(17,"ion-slide",3),d.Ob(18,"div",12),d.Ob(19,"div",13),d.Kb(20,"img",14),d.Nb(),d.Ob(21,"p",15),d.oc(22,"Trazabilidad "),d.Nb(),d.Ob(23,"p",16),d.oc(24," de COOPECAN"),d.Nb(),d.Ob(25,"p",17),d.oc(26," Bienvenido "),d.Nb(),d.Ob(27,"p",18),d.oc(28,"Ingresa un usuario"),d.Nb(),d.Ob(29,"div",19),d.Ob(30,"form",20),d.Ob(31,"ion-item",21),d.Kb(32,"ion-input",22),d.Nb(),d.nc(33,x,2,0,"p",23),d.Ob(34,"ion-item",24),d.Kb(35,"ion-input",25),d.Ob(36,"span",26),d.Wb("click",function(){return t.mostrar()}),d.nc(37,h,1,0,"ion-icon",27),d.nc(38,m,1,0,"ion-icon",28),d.Nb(),d.Nb(),d.nc(39,u,2,0,"p",23),d.Nb(),d.Nb(),d.Ob(40,"div",29),d.Ob(41,"a",30),d.Wb("click",function(){return t.login()}),d.oc(42," Iniciar sesi\xf3n"),d.Nb(),d.Kb(43,"br"),d.Nb(),d.Ob(44,"div",31),d.oc(45," Si no cuenta con acceso puede contactarce con "),d.Ob(46,"a",32),d.oc(47,"ventas@coopecan.pe"),d.Nb(),d.oc(48," para solicitar acceso. "),d.Nb(),d.Ob(49,"div",33),d.Ob(50,"p",34),d.oc(51,"\xbfNo tienes "),d.Kb(52,"br"),d.oc(53," una cuenta?"),d.Nb(),d.Ob(54,"a",35),d.Wb("click",function(){return t.invitado()}),d.oc(55," Iniciar como invitado"),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb(),d.Nb()),2&n&&(d.gc("fullscreen",!0),d.zb(1),d.gc("options",t.slideOptsOnboarding),d.zb(29),d.gc("formGroup",t.loginForm),d.zb(3),d.gc("ngIf",!t.loginForm.controls.username.valid&&!t.loginForm.controls.username.pending&&(t.loginForm.controls.username.dirty||t.submitAttempt)),d.zb(2),d.gc("type",t.tipo),d.zb(2),d.gc("ngIf",t.viewPass),d.zb(1),d.gc("ngIf",!t.viewPass),d.zb(1),d.gc("ngIf",!t.loginForm.controls.pass.valid&&(t.loginForm.controls.pass.dirty||t.submitAttempt)))},directives:[a.g,a.q,a.p,i.k,i.h,i.c,a.k,a.j,a.z,i.g,i.b,e.k,a.i],styles:[".mainSlide[_ngcontent-%COMP%], .mainSlide[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{width:100%;height:100%}img[_ngcontent-%COMP%]{width:78%}.button-01[_ngcontent-%COMP%]{margin:40px 20px 7px;--background:var(--main-color)}.button-01[_ngcontent-%COMP%], .button-02[_ngcontent-%COMP%]{text-transform:capitalize;--border-radius:12px;font-size:11px}.button-02[_ngcontent-%COMP%]{margin:10px 20px 7px;--background:#fff;--color:var(--main-color)}.svg[_ngcontent-%COMP%]{padding-top:40%;margin:auto;width:50%}ion-label[_ngcontent-%COMP%]{font-size:5px}ion-radio[_ngcontent-%COMP%]{margin-right:15px}.content-img[_ngcontent-%COMP%]{height:120px;align-items:center;text-align:center;position:relative;padding:2px}.eliminar[_ngcontent-%COMP%]{background:rgba(96,81,230,.9607843137254902);position:absolute;height:0%;width:100%;color:#fff;z-index:-1;border:2px solid #fff}.eliminar[_ngcontent-%COMP%], .img[_ngcontent-%COMP%]{transition:all .18s linear}.img[_ngcontent-%COMP%]{position:relative;z-index:1;height:100%}.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:auto;max-height:100%;max-width:100%;box-shadow:0 5px 15px rgba(0,0,0,.3);background:#fff;object-fit:cover}.openClose[_ngcontent-%COMP%]{height:100%;z-index:1}.eliminarClose[_ngcontent-%COMP%]{height:0%;z-index:-1}.icon-nav-arrow[_ngcontent-%COMP%]{font-size:21px;color:#f7f8fb;position:absolute}.title[_ngcontent-%COMP%]{font-size:18px;text-align:center;color:#f7f8fb}.button-desable[_ngcontent-%COMP%]{--background:rgba(134,128,189,0.9607843137254902);--color:#fff}.button-enable[_ngcontent-%COMP%]{--background:#fff;--color:rgba(96,81,230,0.9607843137254902)}.btn-main[_ngcontent-%COMP%]{margin:0 15px;height:55px;width:55px}.btn-main[_ngcontent-%COMP%], .btn-main-02[_ngcontent-%COMP%]{border-radius:100%;font-size:23px;padding:0;display:inline-block;border:none;box-shadow:var(--shadow-black-300)}.btn-main-02[_ngcontent-%COMP%]{background-color:var(--main-color);height:48px;width:48px}.animate-pulse[_ngcontent-%COMP%]{animation:pulse_02 2s ease infinite}@keyframes pulse_02{0%{transform:scale(.94);box-shadow:0 0 0 0 var(--main-color)}70%{transform:scale(1);box-shadow:0 0 0 12px hsla(0,0%,100%,0)}to{transform:scale(.94);box-shadow:0 0 0 0 hsla(0,0%,100%,0)}}.btn-1[_ngcontent-%COMP%]{text-decoration:none;padding:8px 15px;border:none;border-radius:30px}.btn-1[_ngcontent-%COMP%], .btn-3[_ngcontent-%COMP%]{background-color:#fff;color:var(--main-color);font-size:12px;box-shadow:var(--shadow-black-300);font-weight:600}.btn-3[_ngcontent-%COMP%]{padding:15px 70px;border:none}.btn-1[_ngcontent-%COMP%]:hover{color:#fff}.btn-1[_ngcontent-%COMP%]:hover, .btn-2[_ngcontent-%COMP%]{background-color:var(--main-color)}.btn-2[_ngcontent-%COMP%]{padding:15px 70px;border:none;color:hsla(0,0%,100%,.8627450980392157);font-size:13px;box-shadow:var(--shadow-black-300);font-weight:500}.btn-2[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,100%,.8627450980392157)}.btn-2[_ngcontent-%COMP%]:hover, .cancel[_ngcontent-%COMP%]{color:var(--main-color)}.cancel[_ngcontent-%COMP%]{font-size:13px;cursor:pointer;position:relative;top:50px}.active[_ngcontent-%COMP%]{color:#9f76cf}.desabled[_ngcontent-%COMP%]{color:#aaa}.btn-2[_ngcontent-%COMP%]{text-decoration:none;background:#fff;padding:15px 50px;border:1px solid rgba(72,72,72,.5490196078431373);border-radius:30px;color:#484848;font-size:11px;box-shadow:var(--shadow-black-100);font-weight:600}.btn-2[_ngcontent-%COMP%]:hover{background:linear-gradient(90deg,#484848 10%,rgba(72,72,72,.7098039215686275));color:#fff}.btn-3[_ngcontent-%COMP%], .btn-3[_ngcontent-%COMP%]:hover{background:linear-gradient(90deg,#484848 10%,rgba(72,72,72,.7098039215686275));border-radius:30px;color:#fff;font-weight:500}.btn-3[_ngcontent-%COMP%], .btn-3[_ngcontent-%COMP%]:hover, .btn-4[_ngcontent-%COMP%]{text-decoration:none;padding:15px 50px;font-size:11px;box-shadow:var(--shadow-black-100)}.btn-4[_ngcontent-%COMP%]{background:#fff;border:1px solid rgba(0,91,181,.6588235294117647);border-radius:30px;color:#0059b5;font-weight:600}.btn-5[_ngcontent-%COMP%]{text-decoration:none;background:linear-gradient(90deg,#0059b5 10%,#5c67ec);padding:15px 50px;border-radius:30px;color:#fff;font-size:11px;box-shadow:var(--shadow-black-100);font-weight:500}"]}),n})()}];let v=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=d.Hb({type:n}),n.\u0275inj=d.Gb({imports:[[r.i.forChild(O)],r.i]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=d.Hb({type:n}),n.\u0275inj=d.Gb({imports:[[i.i,e.b,i.d,a.u,v]]}),n})()}}]);