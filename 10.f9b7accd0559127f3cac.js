(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{X3zk:function(t,n,o){"use strict";o.r(n),o.d(n,"LoginPageModule",function(){return P});var e=o("ofXK"),i=o("3Pt+"),r=o("TEn/"),a=o("tyNb"),s=o("mrSG"),c=o("AytR"),l=o("fXoL"),d=o("GtMO"),p=o("3Djf"),g=o("n90K");let b=(()=>{class t{constructor(t,n,o){this.loadingController=t,this.actionSheetController=n,this.toastController=o}presentLoading(){return Object(s.a)(this,void 0,void 0,function*(){return new Promise((t,n)=>Object(s.a)(this,void 0,void 0,function*(){const n=yield this.loadingController.create({message:"Por favor espere...",backdropDismiss:!1,showBackdrop:!0,spinner:"bubbles"});yield n.present(),t(n)}))})}presentToast(t,n,o){return Object(s.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:o,color:n})).present()})}resizeImage(t,n=180,o=150){return new Promise(e=>{let i=new Image;i.src=t,i.onload=()=>{let t=document.createElement("canvas"),r=i.width,a=i.height;r>a?r>n&&(a*=n/r,r=n):a>o&&(r*=o/a,a=o),t.width=r,t.height=a,t.getContext("2d").drawImage(i,0,0,r,a),e(t.toDataURL())}})}}return t.\u0275fac=function(n){return new(n||t)(l.Sb(r.x),l.Sb(r.a),l.Sb(r.B))},t.\u0275prov=l.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const f=["slidesPadre"];function h(t,n){1&t&&(l.Ob(0,"p",38),l.lc(1," Correo es requerido "),l.Nb())}function x(t,n){1&t&&l.Kb(0,"ion-icon",39)}function m(t,n){1&t&&l.Kb(0,"ion-icon",40)}function u(t,n){1&t&&(l.Ob(0,"p",38),l.lc(1," Contrase\xf1a es requerida "),l.Nb())}const O=[{path:"",component:(()=>{class t{constructor(t,n,o,e,r,a,s){this._apiMongo=t,this._fun=n,this._storage=o,this.router=e,this._comp=r,this.formBuilder=a,this._modal=s,this.viewPass=!1,this.tipo="password",this.submitAttempt=!1,this.slideOptsOnboarding={allowSlideNext:!1,allowSlidePrev:!1,slidesPerView:1,initialSlide:0,speed:400},this.loginForm=a.group({username:["",i.j.compose([i.j.pattern("[^@]+@[^@]+.[^@]+$"),i.j.required])],pass:["",i.j.required]})}ngOnInit(){}mostrar(){this.viewPass?(this.tipo="password",this.viewPass=!1):(this.tipo="text",this.viewPass=!0)}idioma(t){this.nextSlidePadre()}ionViewDidEnter(){return Object(s.a)(this,void 0,void 0,function*(){this.backSlidePadre(),this.backSlidePadre(),this.backSlidePadre(),this.backSlidePadre()})}login(){return Object(s.a)(this,void 0,void 0,function*(){this.submitAttempt=!0;let t=yield this._comp.presentLoading();if(this.loginForm.valid)try{const n=yield this._apiMongo.filter(c.a.COLLECTION.party,c.a.TABLE_SIS.customer,{"data.email":this.loginForm.value.username,"data.password":this.loginForm.value.pass});if(this._fun.isEmpty(n.result))return t.dismiss(),void(yield this._fun.alertError("Usuario no existe"));this._storage.setLocalStorage("USER",n.result[0][c.a.TABLE_SIS.customer][0]),t.dismiss(),this.router.navigate(["/home"])}catch(n){yield this._fun.alertError(n),t.dismiss()}})}invitado(){return Object(s.a)(this,void 0,void 0,function*(){let t=yield this._comp.presentLoading();this._storage.setLocalStorage("USER","INVITADO"),t.dismiss(),this.router.navigate(["/home"])})}nextSlidePadre(){this.slidesPadre.lockSwipeToNext(!1),this.slidesPadre.slideNext(),this.slidesPadre.lockSwipeToNext(!0)}backSlidePadre(){this.slidesPadre.lockSwipeToPrev(!1),this.slidesPadre.slidePrev(),this.slidesPadre.lockSwipeToPrev(!0)}goImport(){this.router.navigate(["/import-wallet"])}}return t.\u0275fac=function(n){return new(n||t)(l.Jb(d.a),l.Jb(p.a),l.Jb(g.a),l.Jb(a.g),l.Jb(b),l.Jb(i.a),l.Jb(r.y))},t.\u0275cmp=l.Db({type:t,selectors:[["app-login"]],viewQuery:function(t,n){if(1&t&&l.pc(f,1),2&t){let t;l.ec(t=l.Xb())&&(n.slidesPadre=t.first)}},decls:58,vars:8,consts:[[2,"--background","#e4e4e438",3,"fullscreen"],["pager","false",2,"height","100%",3,"options"],["slidesPadre",""],[1,"ion-no-padding"],[2,"padding-bottom","5px","height","100%","color","#2F3435"],[2,"text-align","center","margin-top","10%"],["src","../../../assets/images/idiom.png"],[2,"text-align","center","font-size","23px","font-weight","600","margin-bottom","10px"],[2,"text-align","center","font-size","12px","margin","0 40px","color","#8a8a8a"],[2,"text-align","center","padding-bottom","50px"],["href","javascript:void(0)",1,"btn-5",2,"position","relative","top","30px","letter-spacing","1.5px","display","inline-block","padding","20px 70px","margin-bottom","15px","font-size","12px",3,"click"],["src","https://lipis.github.io/flag-icon-css/flags/4x3/es.svg","alt","",1,"mx-1","mr-2",2,"height","20px","transform","translateY(-1px)","width","auto"],["href","javascript:void(0)",1,"btn-2",2,"position","relative","top","30px","letter-spacing","1.5px","padding","20px 70px","display","inline-block","font-size","12px","border","1px solid #0059b580","color","#0059b5d9",3,"click"],["src","https://lipis.github.io/flag-icon-css/flags/4x3/us.svg","alt","",1,"mx-1","mr-2",2,"height","20px","transform","translateY(-1px)","width","auto"],[2,"padding-bottom","5px","padding-top","70px","width","100%","padding-left","20px","height","100%","color","#2F3435","position","relative"],[2,"text-align","left"],["src","../../assets/images/logo.png","alt","",2,"width","50px"],[2,"text-align","left","font-size","25px","font-weight","600","margin-bottom","0","margin-top","30px"],[2,"font-weight","500","text-align","left","font-size","27px","line-height","1","color","#6d6d6d"],[2,"margin","0","text-align","left","font-weight","600","font-size","25px","color","#0059b5d6","margin-top","30px"],[2,"margin","0","text-align","left","font-size","13px"],[2,"padding-right","15px"],[2,"margin-left","-15px",3,"formGroup"],[2,"margin-top","20px","--background","transparent"],["formControlName","username","placeholder","Ingrese correo electr\xf3nico",2,"color","var(--black-400)"],["style","font-size: 11px;color: #eb445a;text-align: left;margin-top: 5px;margin-left: 15px;",4,"ngIf"],[2,"margin-top","18px","--background","transparent"],["placeholder","Ingrese contrase\xf1a","formControlName","pass",2,"color","var(--black-400)",3,"type"],[2,"position","absolute","right","10px","bottom","5px","z-index","10",3,"click"],["name","eye","style","font-size: 23px; color: #adadad;;",4,"ngIf"],["name","eye-off","style","font-size: 23px; color: #adadad;;",4,"ngIf"],[2,"text-align","center"],["href","javascript:void(0)",1,"btn-5",2,"position","relative","margin-top","30px","letter-spacing","1.5px","padding","18px 80px","display","inline-block","font-size","11px",3,"click"],[2,"position","absolute","font-size","11px","bottom","20px"],["href","",2,"color","#0059b5"],[2,"position","absolute","top","20px","right","0"],[2,"font-size","11px","text-align","right","margin","0","margin-right","20px"],["href","javascript:void(0)",1,"btn-5",2,"margin-top","8px","letter-spacing","1.5px","padding","12px 20px","display","inline-block","font-size","10px","border-radius","20px 0 0 20px",3,"click"],[2,"font-size","11px","color","#eb445a","text-align","left","margin-top","5px","margin-left","15px"],["name","eye",2,"font-size","23px","color","#adadad"],["name","eye-off",2,"font-size","23px","color","#adadad"]],template:function(t,n){1&t&&(l.Ob(0,"ion-content",0),l.Ob(1,"ion-slides",1,2),l.Ob(3,"ion-slide",3),l.Ob(4,"div",4),l.Ob(5,"div",5),l.Kb(6,"img",6),l.Nb(),l.Ob(7,"p",7),l.lc(8,"Select a language "),l.Nb(),l.Ob(9,"p",8),l.lc(10," Choose the language of your preference"),l.Nb(),l.Ob(11,"div",9),l.Ob(12,"a",10),l.Wb("click",function(){return n.idioma("es")}),l.Kb(13,"img",11),l.lc(14," Espa\xf1ol "),l.Nb(),l.Kb(15,"br"),l.Ob(16,"a",12),l.Wb("click",function(){return n.idioma("us")}),l.Kb(17,"img",13),l.lc(18," English "),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(19,"ion-slide",3),l.Ob(20,"div",14),l.Ob(21,"div",15),l.Kb(22,"img",16),l.Nb(),l.Ob(23,"p",17),l.lc(24,"Trazabilidad "),l.Nb(),l.Ob(25,"p",18),l.lc(26," de COOPECAN"),l.Nb(),l.Ob(27,"p",19),l.lc(28," Bienvenido "),l.Nb(),l.Ob(29,"p",20),l.lc(30,"Ingresa un usuario"),l.Nb(),l.Ob(31,"div",21),l.Ob(32,"form",22),l.Ob(33,"ion-item",23),l.Kb(34,"ion-input",24),l.Nb(),l.kc(35,h,2,0,"p",25),l.Ob(36,"ion-item",26),l.Kb(37,"ion-input",27),l.Ob(38,"span",28),l.Wb("click",function(){return n.mostrar()}),l.kc(39,x,1,0,"ion-icon",29),l.kc(40,m,1,0,"ion-icon",30),l.Nb(),l.Nb(),l.kc(41,u,2,0,"p",25),l.Nb(),l.Nb(),l.Ob(42,"div",31),l.Ob(43,"a",32),l.Wb("click",function(){return n.login()}),l.lc(44," Iniciar sesi\xf3n"),l.Nb(),l.Kb(45,"br"),l.Nb(),l.Ob(46,"div",33),l.lc(47," Si no cuenta con acceso puede contactarce con "),l.Ob(48,"a",34),l.lc(49,"ventas@coopecan.pe"),l.Nb(),l.lc(50," para solicitar acceso. "),l.Nb(),l.Ob(51,"div",35),l.Ob(52,"p",36),l.lc(53,"\xbfNo tienes "),l.Kb(54,"br"),l.lc(55," una cuenta?"),l.Nb(),l.Ob(56,"a",37),l.Wb("click",function(){return n.invitado()}),l.lc(57," Iniciar como invitado"),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&t&&(l.dc("fullscreen",!0),l.zb(1),l.dc("options",n.slideOptsOnboarding),l.zb(31),l.dc("formGroup",n.loginForm),l.zb(3),l.dc("ngIf",!n.loginForm.controls.username.valid&&!n.loginForm.controls.username.pending&&(n.loginForm.controls.username.dirty||n.submitAttempt)),l.zb(2),l.dc("type",n.tipo),l.zb(2),l.dc("ngIf",n.viewPass),l.zb(1),l.dc("ngIf",!n.viewPass),l.zb(1),l.dc("ngIf",!n.loginForm.controls.pass.valid&&(n.loginForm.controls.pass.dirty||n.submitAttempt)))},directives:[r.h,r.r,r.q,i.k,i.h,i.c,r.l,r.k,r.A,i.g,i.b,e.k,r.j],styles:[".mainSlide[_ngcontent-%COMP%], .mainSlide[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{width:100%;height:100%}img[_ngcontent-%COMP%]{width:78%}.button-01[_ngcontent-%COMP%]{margin:40px 20px 7px;--background:var(--main-color)}.button-01[_ngcontent-%COMP%], .button-02[_ngcontent-%COMP%]{text-transform:capitalize;--border-radius:12px;font-size:11px}.button-02[_ngcontent-%COMP%]{margin:10px 20px 7px;--background:#fff;--color:var(--main-color)}.svg[_ngcontent-%COMP%]{padding-top:40%;margin:auto;width:50%}ion-label[_ngcontent-%COMP%]{font-size:5px}ion-radio[_ngcontent-%COMP%]{margin-right:15px}.content-img[_ngcontent-%COMP%]{height:120px;align-items:center;text-align:center;position:relative;padding:2px}.eliminar[_ngcontent-%COMP%]{background:rgba(96,81,230,.9607843137254902);position:absolute;height:0%;width:100%;color:#fff;z-index:-1;border:2px solid #fff}.eliminar[_ngcontent-%COMP%], .img[_ngcontent-%COMP%]{transition:all .18s linear}.img[_ngcontent-%COMP%]{position:relative;z-index:1;height:100%}.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:auto;max-height:100%;max-width:100%;box-shadow:0 5px 15px rgba(0,0,0,.3);background:#fff;object-fit:cover}.openClose[_ngcontent-%COMP%]{height:100%;z-index:1}.eliminarClose[_ngcontent-%COMP%]{height:0%;z-index:-1}.icon-nav-arrow[_ngcontent-%COMP%]{font-size:21px;color:#f7f8fb;position:absolute}.title[_ngcontent-%COMP%]{font-size:18px;text-align:center;color:#f7f8fb}.button-desable[_ngcontent-%COMP%]{--background:rgba(134,128,189,0.9607843137254902);--color:#fff}.button-enable[_ngcontent-%COMP%]{--background:#fff;--color:rgba(96,81,230,0.9607843137254902)}.btn-main[_ngcontent-%COMP%]{margin:0 15px;height:55px;width:55px}.btn-main[_ngcontent-%COMP%], .btn-main-02[_ngcontent-%COMP%]{border-radius:100%;font-size:23px;padding:0;display:inline-block;border:none;box-shadow:var(--shadow-black-300)}.btn-main-02[_ngcontent-%COMP%]{background-color:var(--main-color);height:48px;width:48px}.animate-pulse[_ngcontent-%COMP%]{animation:pulse_02 2s ease infinite}@keyframes pulse_02{0%{transform:scale(.94);box-shadow:0 0 0 0 var(--main-color)}70%{transform:scale(1);box-shadow:0 0 0 12px hsla(0,0%,100%,0)}to{transform:scale(.94);box-shadow:0 0 0 0 hsla(0,0%,100%,0)}}.btn-1[_ngcontent-%COMP%]{text-decoration:none;padding:8px 15px;border:none;border-radius:30px}.btn-1[_ngcontent-%COMP%], .btn-3[_ngcontent-%COMP%]{background-color:#fff;color:var(--main-color);font-size:12px;box-shadow:var(--shadow-black-300);font-weight:600}.btn-3[_ngcontent-%COMP%]{padding:15px 70px;border:none}.btn-1[_ngcontent-%COMP%]:hover{color:#fff}.btn-1[_ngcontent-%COMP%]:hover, .btn-2[_ngcontent-%COMP%]{background-color:var(--main-color)}.btn-2[_ngcontent-%COMP%]{padding:15px 70px;border:none;color:hsla(0,0%,100%,.8627450980392157);font-size:13px;box-shadow:var(--shadow-black-300);font-weight:500}.btn-2[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,100%,.8627450980392157)}.btn-2[_ngcontent-%COMP%]:hover, .cancel[_ngcontent-%COMP%]{color:var(--main-color)}.cancel[_ngcontent-%COMP%]{font-size:13px;cursor:pointer;position:relative;top:50px}.active[_ngcontent-%COMP%]{color:#9f76cf}.desabled[_ngcontent-%COMP%]{color:#aaa}.btn-2[_ngcontent-%COMP%]{text-decoration:none;background:#fff;padding:15px 50px;border:1px solid rgba(72,72,72,.5490196078431373);border-radius:30px;color:#484848;font-size:11px;box-shadow:var(--shadow-black-100);font-weight:600}.btn-2[_ngcontent-%COMP%]:hover{background:linear-gradient(90deg,#484848 10%,rgba(72,72,72,.7098039215686275));color:#fff}.btn-3[_ngcontent-%COMP%], .btn-3[_ngcontent-%COMP%]:hover{background:linear-gradient(90deg,#484848 10%,rgba(72,72,72,.7098039215686275));border-radius:30px;color:#fff;font-weight:500}.btn-3[_ngcontent-%COMP%], .btn-3[_ngcontent-%COMP%]:hover, .btn-4[_ngcontent-%COMP%]{text-decoration:none;padding:15px 50px;font-size:11px;box-shadow:var(--shadow-black-100)}.btn-4[_ngcontent-%COMP%]{background:#fff;border:1px solid rgba(0,91,181,.6588235294117647);border-radius:30px;color:#0059b5;font-weight:600}.btn-5[_ngcontent-%COMP%]{text-decoration:none;background:linear-gradient(90deg,#0059b5 10%,#5c67ec);padding:15px 50px;border-radius:30px;color:#fff;font-size:11px;box-shadow:var(--shadow-black-100);font-weight:500}"]}),t})()}];let v=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({imports:[[a.i.forChild(O)],a.i]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({imports:[[i.i,e.b,i.d,r.v,v]]}),t})()}}]);