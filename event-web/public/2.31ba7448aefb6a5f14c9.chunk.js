webpackJsonp([2,6],{1004:function(t,e,n){"use strict";var o=n(1),i=n(47),r=n(1070),c=n(1056),a=n(1055),s=n(1053),f=n(1054);n.d(e,"SettingsModule",function(){return p});var u=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,n,c):i(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(){}return t}();p=u([n.i(o.NgModule)({imports:[i.CommonModule,r.a],declarations:[c.a,a.a,s.a,f.a]}),l("design:paramtypes",[])],p)},1053:function(t,e,n){"use strict";var o=n(1);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,n,c):i(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();c=i([n.i(o.Component)({selector:"mk-change-password",template:n(1111),styles:[n(1099)]}),r("design:paramtypes",[])],c)},1054:function(t,e,n){"use strict";var o=n(1);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,n,c):i(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();c=i([n.i(o.Component)({selector:"mk-edit-business",template:n(1112),styles:[n(1100)]}),r("design:paramtypes",[])],c)},1055:function(t,e,n){"use strict";var o=n(1),i=n(93),r=n(431),c=n(259),a=n(1058);n.d(e,"a",function(){return u});var s=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,n,c):i(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t,e,n){this.storageSrv=t,this.linkingSrv=e,this.helperSrv=n,this.baseApi=c.a.api,this.integrations=[{host:"mailchimp",logo:"mailchimp.svg",name:"MailChimp",url:"/mailchimp/oauth"},{host:"shopify",logo:"shopify.svg",name:"Shopify"}],this.accounts=[]}return t.prototype.ngOnInit=function(){this.captureBusiness(),this.fetchAccounts()},t.prototype.fetchAccounts=function(){var t=this;this.linkingSrv.list(this.businessId).subscribe(function(e){t.accounts=e.data})},t.prototype.captureBusiness=function(){var t=this.storageSrv.get("business");this.businessId=t._id},t.prototype.onClickIntegrate=function(t,e){t.preventDefault();var n=this.getIntegration(e);n&&this.integrate(n.url)},t.prototype.integrate=function(t){var e=this.baseApi+t+("?businessId="+this.businessId);this.helperSrv.redirect(e)},t.prototype.getIntegration=function(t){return t=t.toLowerCase(),this.integrations.find(function(e){return e.host===t})},t.prototype.getIntegrationsAvailable=function(){return this.integrations.filter(function(t){return"shopify"!=t.host})},t.prototype.onClickRemoveAccount=function(t,e){t.preventDefault(),this.removeAccount(e)},t.prototype.removeAccount=function(t){var e=this;this.linkingSrv.remove(t).subscribe(function(){e.fetchAccounts()})},t}();u=s([n.i(o.Component)({selector:"mk-linked-accounts",template:n(1113),styles:[n(1101)],providers:[r.a,a.a]}),f("design:paramtypes",["function"==typeof(l="undefined"!=typeof i.a&&i.a)&&l||Object,"function"==typeof(p="undefined"!=typeof a.a&&a.a)&&p||Object,"function"==typeof(d="undefined"!=typeof r.a&&r.a)&&d||Object])],u);var l,p,d},1056:function(t,e,n){"use strict";var o=n(1);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,n,c):i(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();c=i([n.i(o.Component)({selector:"mk-profile",template:n(1114),styles:[n(1102)]}),r("design:paramtypes",[])],c)},1058:function(t,e,n){"use strict";var o=n(1),i=n(172);n.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,n,c):i(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t){this.api=t}return t.prototype.list=function(t){var e={url:"/businesses/"+t+"/linked-accounts",method:"GET"};return this.api.requestAuth(e,!0)},t.prototype.detail=function(t,e){var n={url:"/businesses/"+t+"/linked-accounts/"+e,method:"GET"};return this.api.requestAuth(n,!0)},t.prototype.remove=function(t){var e={url:"/linked-account/"+t,method:"DELETE"};return this.api.requestAuth(e,!0)},t}();a=r([n.i(o.Injectable)(),c("design:paramtypes",["function"==typeof(s="undefined"!=typeof i.a&&i.a)&&s||Object])],a);var s},1070:function(t,e,n){"use strict";var o=n(1),i=n(92),r=n(1056),c=n(1053),a=n(1054),s=n(1055);n.d(e,"a",function(){return p});var f=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,c=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(c=(r<3?i(c):r>3?i(e,n,c):i(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=[{path:"",redirectTo:"profile",pathMatch:"full"},{path:"profile",component:r.a},{path:"password",component:c.a},{path:"edit-business",component:a.a},{path:"linked-accounts",component:s.a}],p=function(){function t(){}return t}();p=f([n.i(o.NgModule)({imports:[i.c.forChild(l)],exports:[i.c]}),u("design:paramtypes",[])],p)},1099:function(t,e){t.exports=""},1100:function(t,e){t.exports=""},1101:function(t,e){t.exports=".account{\n  list-style:none;\n  background-color:#eee;\n  padding:10px; }\n  .account .remove{\n    display:none;\n    line-height:27px; }\n  .account:hover .remove{\n    display:inline-block; }\n\n.integrations, .accounts{\n  padding-left:0; }\n\n.logo{\n  width:30px;\n  height:auto;\n  margin-right:10px; }\n\n.integration{\n  list-style:none; }\n  .integration a{\n    display:inline-block;\n    padding:5px 0; }\n    .integration a:hover{\n      text-decoration:none; }\n"},1102:function(t,e){t.exports=""},1111:function(t,e){t.exports="<p>\n    change-password works!\n</p>\n"},1112:function(t,e){t.exports='<form>\n    <div class="form-group">\n\n    </div>\n</form>'},1113:function(t,e){t.exports='<div class="card">\n    <div class="card-header h3">Linked Accounts</div>\n\n    <div class="card-block">\n        <div class="card-title h5">Authorized Accounts</div>\n        <ul class="accounts mb-3">\n            <li class="account mb-1" *ngFor="let account of accounts" [ngClass]="account.host | lowercase">\n                <img class="logo" [src]="\'assets/images/brands/\' + getIntegration(account.host)?.logo"\n                     alt="{{account.host}}">\n                <span>{{account.email}}</span>\n\n                <button *ngIf="account.host.toLowerCase() != \'shopify\'" class="close remove"\n                        (click)="onClickRemoveAccount($event, account._id)"><span\n                        aria-hidden="true">&times;</span></button>\n            </li>\n        </ul>\n\n        <div class="card-title h5">Available Integrations</div>\n        <div class="card-text mb-1">Select a service to link your accounts.</div>\n\n        <ul class="integrations">\n            <li class="integration" *ngFor="let integrateion of getIntegrationsAvailable()">\n                <a href="#" (click)="onClickIntegrate($event, integrateion.host)" class="base-middle">\n                    <img class="logo"\n                         [src]="\'assets/images/brands/\' + integrateion.logo"\n                         alt="{{integrateion.name}}">\n                    <span class="name">{{integrateion.name}}</span>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>'},1114:function(t,e){t.exports="<p>\n    profile works!\n</p>\n"}});
//# sourceMappingURL=2.31ba7448aefb6a5f14c9.bundle.map