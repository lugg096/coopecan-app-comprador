(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Xfnz:function(n,o,t){"use strict";t.r(o),t.d(o,"CertificadoPageModule",function(){return d});var i=t("ofXK"),e=t("3Pt+"),r=t("TEn/"),c=t("tyNb"),a=t("fXoL");let b=(()=>{class n{constructor(n,o){this.renderer=n,this.domCtrl=o}onContentScroll(n){const o=n.detail.scrollTop;let t=Math.max(100-o/1.8,0),i=10+o/10;i>100&&(i=100),this.domCtrl.write(()=>{this.renderer.setStyle(this.cover,"opacity",`${t}%`),this.renderer.setStyle(this.cover,"padding-left",`${i}%`),this.renderer.setStyle(this.cover,"padding-right",`${i}%`)})}}return n.\u0275fac=function(o){return new(o||n)(a.Jb(a.F),a.Jb(r.b))},n.\u0275dir=a.Eb({type:n,selectors:[["","appImageFade",""]],hostBindings:function(n,o){1&n&&a.Wb("ionScroll",function(n){return o.onContentScroll(n)})},inputs:{cover:["appImageFade","cover"]}}),n})();const s=[{path:"",component:(()=>{class n{constructor(n){this.router=n}ngOnInit(){}dasherize(n){return n.replace(/[A-Z]/g,function(n,o){return(0!==o?"-":"")+n.toLowerCase()})}compartir(){}goGestion(){this.router.navigate(["/home"])}verCertificado(){console.log("VER CERTIFICADO")}}return n.\u0275fac=function(o){return new(o||n)(a.Jb(c.g))},n.\u0275cmp=a.Db({type:n,selectors:[["app-certificado"]],decls:54,vars:6,consts:[[1,"ion-no-border"],["slot","end",2,"position","absolute","right","0","z-index","20",3,"click"],["name","close-outline",2,"font-size","30px","color","white","padding","15px"],[2,"text-align","center","color","rgba(255, 255, 255, 0.842)","font-size","16px","margin","0"],["scrollEvents","true",3,"fullscreen","appImageFade"],[2,"font-size","22px","margin","20px 20px 10px 20px","color","white","position","fixed","line-height","1"],[2,"font-size","14px","color","rgba(255, 255, 255, 0.842)"],[1,"ion-text-center","image-box"],["cover",""],["src","/appComprador/images/certificado.png",2,"box-shadow","var(--shadow-black-100)",3,"click"],[1,"button-01",3,"click"],["name","ribbon-outline",2,"font-size","16px","margin","3px"],[1,"button-02",3,"click"],["name","share-social",2,"font-size","14px","margin","3px"],[1,"main"],[2,"margin","10px 15px","font-size","18px","color","#686868","font-weight","600"],[2,"margin","5px 15px","font-size","12px","color","#acacac"],["lines","none"],["slot","end","size","small","name","ellipsis-horizontal","color","light"]],template:function(n,o){if(1&n&&(a.Ob(0,"ion-header",0),a.Ob(1,"ion-toolbar"),a.Ob(2,"ion-buttons",1),a.Wb("click",function(){return o.goGestion()}),a.Kb(3,"ion-icon",2),a.Nb(),a.Ob(4,"p",3),a.oc(5," Certificado"),a.Nb(),a.Nb(),a.Nb(),a.Ob(6,"ion-content",4),a.Ob(7,"p",5),a.oc(8,"Buen trabajo! "),a.Kb(9,"br"),a.Ob(10,"small",6),a.oc(11,"Certificado en inspecci\xf3n de sanidad"),a.Nb(),a.Nb(),a.Ob(12,"div",7,8),a.Ob(14,"img",9),a.Wb("click",function(){return o.verCertificado()}),a.Nb(),a.Ob(15,"ion-button",10),a.Wb("click",function(){return o.verCertificado()}),a.Kb(16,"ion-icon",11),a.oc(17," Validar "),a.Kb(18,"br"),a.Nb(),a.Ob(19,"ion-button",12),a.Wb("click",function(){return o.compartir()}),a.Kb(20,"ion-icon",13),a.oc(21," Compartir "),a.Kb(22,"br"),a.Nb(),a.Nb(),a.Ob(23,"div",14),a.Kb(24,"ion-row"),a.Ob(25,"ion-list"),a.Ob(26,"p",15),a.oc(27,"Informacion certificado "),a.Nb(),a.Ob(28,"p",16),a.oc(29,"Observaci\xf3n y evaluaci\xf3n que realizada a las alpacas, competente sobre las condiciones sanitarias de los alimentos y bebidas en protecci\xf3n de la salud."),a.Nb(),a.Ob(30,"ion-item",17),a.Ob(31,"ion-label"),a.Ob(32,"p"),a.oc(33,"Emisor"),a.Nb(),a.oc(34," Jos\xe9 Luis Martines S\xe1nchez "),a.Nb(),a.Kb(35,"ion-icon",18),a.Nb(),a.Ob(36,"ion-item",17),a.Ob(37,"ion-label"),a.Ob(38,"p"),a.oc(39,"Titular"),a.Nb(),a.oc(40," Jean Carlos Zabala Vargas "),a.Nb(),a.Kb(41,"ion-icon",18),a.Nb(),a.Ob(42,"ion-item",17),a.Ob(43,"ion-label"),a.Ob(44,"p"),a.oc(45,"Fecha de emisi\xf3n"),a.Nb(),a.oc(46," 20 Ene 2021 "),a.Nb(),a.Kb(47,"ion-icon",18),a.Nb(),a.Ob(48,"ion-item",17),a.Ob(49,"ion-label"),a.Ob(50,"p"),a.oc(51,"Fecha de vencimiento"),a.Nb(),a.oc(52," 10 Mar 2022 "),a.Nb(),a.Kb(53,"ion-icon",18),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&n){const n=a.ic(13);a.zb(1),a.mc("--background","#1c1c24"),a.zb(5),a.mc("--custombg","#1c1c24"),a.gc("fullscreen",!0)("appImageFade",n)}},directives:[r.h,r.t,r.f,r.i,r.g,b,r.e,r.o,r.m,r.k,r.l],styles:["ion-item[_ngcontent-%COMP%]{--background:transparent;color:#fff}ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:12px;color:#949494}ion-list[_ngcontent-%COMP%]{--ion-background-color:#fff}.album-info[_ngcontent-%COMP%]{color:#fff;margin-left:11px}.album-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:700}.image-box[_ngcontent-%COMP%]{position:fixed;z-index:0;padding-left:10%;padding-right:10%;padding-top:25%}ion-row[_ngcontent-%COMP%]{padding-top:58vh}ion-content[_ngcontent-%COMP%]{font-family:Poppins,sans-serif!important;color:#000;--background:linear-gradient(var(--custombg) 200px,#fff 0)}.main[_ngcontent-%COMP%]{z-index:10;min-height:800px}ion-label[_ngcontent-%COMP%]{font-size:14px!important;color:var(--black-400)!important}.button-01[_ngcontent-%COMP%]{--background:#fff;color:var(--main-color)}.button-01[_ngcontent-%COMP%], .button-02[_ngcontent-%COMP%]{text-transform:capitalize;--border-radius:12px;font-size:11px;display:inline-block;margin:5px;padding:0 2px!important}.button-02[_ngcontent-%COMP%]{--background:var(--main-color);color:#fff}"]}),n})()}];let l=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({imports:[[c.i.forChild(s)],c.i]}),n})(),p=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({imports:[[i.b]]}),n})(),d=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=a.Hb({type:n}),n.\u0275inj=a.Gb({imports:[[i.b,e.d,r.u,l,p]]}),n})()}}]);