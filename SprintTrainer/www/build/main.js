webpackJsonp([12],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfigPage = /** @class */ (function () {
    function ConfigPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfigPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfigPage');
    };
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/config/config.html"*/'<!--\n  Generated template for the ConfigPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Ajustes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="dark" padding>\n\n  <ion-list>\n      <ion-item>\n\n        Reiniciar Estadísticas\n      </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/config/config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InformationPage = /** @class */ (function () {
    function InformationPage(navCtrl, navParams, storage, _storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this._storage = _storage;
        this.isEditing = false;
    }
    InformationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad InformationPage');
        this._storage.getUsuario().then(function (us) {
            _this.user = us;
            _this.nombre = _this.user.nombre;
            _this.sexo = _this.user.sexo;
            _this.edad = _this.user.edad;
            _this.exp = _this.user.exp;
            console.log("Usuario->", _this.user);
        });
    };
    InformationPage.prototype.EmpezarEdicion = function () {
        this.isEditing = true;
    };
    InformationPage.prototype.GuardarValores = function () {
        var _this = this;
        this.isEditing = false;
        this.storage.set('nombre', this.nombre);
        this.storage.set('sexo', this.sexo);
        this.storage.set('edad', this.edad);
        this.storage.set('exp', this.exp);
        this._storage.getUsuario().then(function (us) {
            _this.user = us;
        });
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information',template:/*ion-inline-start:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/information/information.html"*/'<!--\n  Generated template for the InformationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Acerca de mi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="dark" padding>\n  <ion-list *ngIf="user && isEditing==false">\n    <ion-item class="username">\n       {{user.nombre}}\n    </ion-item>\n    <ion-item class="content-item">\n    \n        <div class="content-item">\n            Edad: {{user.edad}}\n            <ion-icon name="md-create" (click)="EmpezarEdicion()">\n  \n              </ion-icon>\n        </div>\n  \n   \n          \n     \n     \n    </ion-item>\n    <ion-item class="content-item">\n\n        <div class="content-item">\n            Experiencia: {{user.exp}}\n            <ion-icon name="md-create" (click)="EmpezarEdicion()">\n  \n              </ion-icon>\n        </div>\n       \n      \n    \n    </ion-item>\n    <ion-item class="content-item">\n\n      <div class="content-item">\n          Sexo: {{user.sexo==\'H\'?\'Hombre\': \'Mujer\'}}\n          <ion-icon name="md-create" (click)="EmpezarEdicion()">\n\n            </ion-icon>\n      </div>\n\n   \n     \n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf="user && isEditing==true">\n      <ion-item class="username">\n          <ion-label floating>Nombre</ion-label>\n          <ion-input [(ngModel)]="nombre" type="text"></ion-input>  \n      </ion-item>\n      <ion-item class="content-item">\n      \n          <ion-label>Edad</ion-label>\n          <ion-select [(ngModel)]="edad">\n            <ion-option value="19">19</ion-option>\n            <ion-option value="20">20</ion-option>\n            <ion-option value="21">21</ion-option>\n            <ion-option value="22">22</ion-option>\n            <ion-option value="23">23</ion-option>\n            <ion-option value="24">24</ion-option>\n          </ion-select>\n            \n       \n       \n      </ion-item>\n      <ion-item class="content-item">\n  \n          <ion-label>Nivel de experiencia</ion-label>\n          <ion-select [(ngModel)]="exp">\n            <ion-option value="Principiante">Principiante</ion-option>\n            <ion-option value="Promedio">Promedio</ion-option>\n            <ion-option value="Experto">Experto</ion-option>\n            <ion-option value="Extremo">Extremo</ion-option>\n    \n          </ion-select>\n        \n      \n      </ion-item>\n      <ion-item class="content-item">\n  \n        \n              <ion-label>Sexo</ion-label>\n              <ion-select [(ngModel)]="sexo">\n                <ion-option value="H">Hombre</ion-option>\n                <ion-option value="M">Mujer</ion-option>\n                 </ion-select>\n                \n      </ion-item>\n    </ion-list>\n\n    <ion-row *ngIf="user && isEditing==true">\n      <ion-col class="flex-center">\n        <button ion-button color="primary" (click)="GuardarValores()"> Guardar</button>\n      </ion-col>\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/information/information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProgressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgressPage = /** @class */ (function () {
    function ProgressPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProgressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProgressPage');
    };
    ProgressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-progress',template:/*ion-inline-start:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/progress/progress.html"*/'<!--\n  Generated template for the ProgressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Progreso</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  class="dark" padding>\n    <ion-card>\n        <img src="https://via.placeholder.com/350x250?text=Grafico de hoy"/>\n        <ion-card-content>\n          <ion-card-title>\n           Hoy\n            </ion-card-title>\n          <p>\n            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, odit repudiandae facere quam commodi nihil molestiae sit vero corporis iusto tenetur quia sed ex minima sapiente at, quos culpa cumque!\n          </p>\n        </ion-card-content>\n      </ion-card>\n\n\n\n      <ion-card>\n          <img src="https://via.placeholder.com/350x250?text=Grafico semanal"/>\n          <ion-card-content>\n            <ion-card-title>\n            Esta Semana\n              </ion-card-title>\n            <p>\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, laudantium suscipit alias nulla quis ipsam provident at excepturi? Distinctio et voluptate, animi error quaerat vel nesciunt. Itaque facere dolores commodi.\n            </p>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <img src="https://via.placeholder.com/350x250?text=Grafico mensual"/>\n            <ion-card-content>\n              <ion-card-title>\n               Este Mes\n                </ion-card-title>\n              <p>\n               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facilis culpa aliquid pariatur, esse sequi vitae mollitia, quod aut natus reiciendis cupiditate molestias libero sint sapiente earum fugit iure similique!\n              </p>\n            </ion-card-content>\n          </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/progress/progress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProgressPage);
    return ProgressPage;
}());

//# sourceMappingURL=progress.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroPage = /** @class */ (function () {
    function RegistroPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    RegistroPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RegistroPage');
        this.storage.get('nombre').then(function (val) {
            console.log('Your name is->', val);
            if (val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            }
        });
    };
    RegistroPage.prototype.enviarTabs = function () {
        this.storage.set('nombre', this.nombre);
        this.storage.set('sexo', this.sexo);
        this.storage.set('edad', this.edad);
        this.storage.set('exp', this.exp);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro',template:/*ion-inline-start:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/registro/registro.html"*/'<!--\n  Generated template for the RegistroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Registro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="dark" padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Nombre</ion-label>\n      <ion-input [(ngModel)]="nombre" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sexo</ion-label>\n      <ion-select [(ngModel)]="sexo">\n        <ion-option value="H">Hombre</ion-option>\n        <ion-option value="M">Mujer</ion-option>\n         </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Edad</ion-label>\n      <ion-select [(ngModel)]="edad">\n        <ion-option value="19">19</ion-option>\n        <ion-option value="20">20</ion-option>\n        <ion-option value="21">21</ion-option>\n        <ion-option value="22">22</ion-option>\n        <ion-option value="23">23</ion-option>\n        <ion-option value="24">24</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>Nivel de experiencia</ion-label>\n      <ion-select [(ngModel)]="exp">\n        <ion-option value="Principiante">Principiante</ion-option>\n        <ion-option value="Promedio">Promedio</ion-option>\n        <ion-option value="Experto">Experto</ion-option>\n        <ion-option value="Extremo">Extremo</ion-option>\n\n      </ion-select>\n    </ion-item>\n\n    </ion-list>\n\n    <button ion-button color="primary" block (click)="enviarTabs()"> Listo</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/registro/registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutinesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quick_quick__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_routine_start_rutine__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__catalogo_catalogo__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RutinesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RutinesPage = /** @class */ (function () {
    function RutinesPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    RutinesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RutinesPage');
    };
    RutinesPage.prototype.Quick = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '¿Rutina Rápida?',
            message: 'Es un reto rápido totalmente aleatorio ¿estas listo?',
            buttons: [
                {
                    text: 'No ahora porfavor',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Claro',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__quick_quick__["a" /* QuickPage */]);
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    RutinesPage.prototype.Clasica = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__start_routine_start_rutine__["a" /* StartRutinePage */]);
    };
    RutinesPage.prototype.enviarCatalogo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__catalogo_catalogo__["a" /* CatalogoPage */]);
    };
    RutinesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rutines',template:/*ion-inline-start:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/routines/rutines.html"*/'<!--\n  Generated template for the RutinesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Rutinas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="dark" padding>\n  <ion-fab top right edge>\n    <button ion-fab mini (click)="Quick()" color="danger"><ion-icon name="md-flame"></ion-icon></button>\n  </ion-fab>\n\n<div class="content-main flex-center"> \n    <ion-grid>\n        <ion-row>\n            <ion-col class="flex-center bloque column" (click)="Clasica()">\n            <ion-icon name="md-play"></ion-icon>\n             Clásico \n          </ion-col>\n \n          <ion-col class="flex-center bloque column" (click)="enviarCatalogo()">\n       \n                <ion-icon name="ios-folder"></ion-icon>\n              \n              Catálogo Ejercicios\n                      </ion-col>\n        </ion-row>  \n      \n        <ion-row>\n            <ion-col class="flex-center bloque column">\n              <ion-icon name="md-beaker"></ion-icon>\n              Mixto\n            </ion-col>\n            <ion-col class="flex-center bloque column">\n              <ion-icon name="md-speedometer"></ion-icon>\n                Velocidad  \n              \n            </ion-col>\n          </ion-row>  \n\n          <ion-row>\n              <ion-col class="flex-center bloque column">\n                  <ion-icon name="ios-paper"></ion-icon>\n                  Mis Rutinas\n                </ion-col>\n             \n                <ion-col class="flex-center bloque column">\n                    <ion-icon name="md-add"></ion-icon>\n                      Crear Rutina  \n                    \n                  </ion-col>\n\n          </ion-row>\n        </ion-grid>\n</div>\n \n\n</ion-content>\n'/*ion-inline-end:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/routines/rutines.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RutinesPage);
    return RutinesPage;
}());

//# sourceMappingURL=rutines.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Exercises_exs__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_timer_timer__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the QuickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuickPage = /** @class */ (function () {
    function QuickPage(navCtrl, navParams, loadingCtrl, vibration, _Timer, localNotifications) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.vibration = vibration;
        this._Timer = _Timer;
        this.localNotifications = localNotifications;
        this.hora = new Date(10000);
        this.exs = __WEBPACK_IMPORTED_MODULE_2__Exercises_exs__["a" /* EXS_EXPRESS */];
        this.ejercicio_pos = 0;
        this.regresiva = 10;
        this.inregresion = false;
        this.inAction = false;
        this.NEjercicio = 1;
        this.finish = false;
        this.ss = 0;
        this.mm = 0;
        this.hh = 0;
    }
    QuickPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuickPage');
    };
    QuickPage.prototype.ComenzarEXS = function () {
        this.finish = false;
        ;
        this.vibration.vibrate(400);
        if (this.NEjercicio == 1) {
            this.regresiva = 5;
        }
        else {
            this.regresiva = 2;
        }
        this.ejercicio_pos = Math.floor(Math.random() * this.exs.length);
        console.log("Ejercicio->", this.exs[this.ejercicio_pos].nombre);
        this.inregresion = true;
        this.Regresiva();
        var loading = this.loadingCtrl.create({
            content: '{{regresiva}}' + this.regresiva
        });
    };
    QuickPage.prototype.Regresiva = function () {
        var _this = this;
        var audio = new Audio();
        audio.src = "./assets/audios/ok.wav";
        console.log("Regresiva->", this.regresiva);
        this.timeOut = setTimeout(function () {
            _this.regresiva--;
            if (_this.regresiva != 0) {
                audio.load();
                audio.play();
                _this.Regresiva();
            }
            else {
                var audio2 = new Audio();
                audio2.src = "./assets/audios/just.wav";
                audio2.load();
                audio2.play();
                _this.inregresion = false;
                _this.inAction = true;
                _this.vibration.vibrate(700);
                _this._Timer.setFechaInical();
                if (_this.NEjercicio < 6) {
                    _this.EnEjercicio(10000);
                }
                else {
                    _this.TerminarRutina();
                }
            }
        }, 1000);
    };
    QuickPage.prototype.ActivarTimer = function () {
        var _this = this;
        setTimeout(function () {
            _this.quitarunSegundo();
        }, 1000);
    };
    QuickPage.prototype.quitarunSegundo = function () {
        this.hora.setMilliseconds(this.hora.getDate() - 1000);
        console.log("hora->", this.hora);
        this.ActivarTimer();
    };
    QuickPage.prototype.cancelar = function () {
        this.regresiva = -1;
        this.inregresion = false;
        this.inAction = false;
        var audio = new Audio();
        audio.src = "./assets/audios/cancel.wav";
        audio.load();
        audio.play();
        clearTimeout(this.timeOut);
    };
    QuickPage.prototype.checarTiempo = function () {
        console.log("Tiempo Trans-<", this._Timer.ContarTiempo());
    };
    QuickPage.prototype.EnEjercicio = function (milisegundos) {
        var _this = this;
        this.localNotifications.schedule({
            id: this.NEjercicio,
            title: "Nuevo Ejercicio Empezado, Vamos Tu puedes!",
            text: this.exs[this.ejercicio_pos].nombre,
            data: { secret: "any any any" },
            icon: 'file://assets/imgs/trainers2.png',
            smallIcon: 'file://assets/imgs/trainers2.png',
            color: '#424242',
            sound: 'file://assets/audios/ready.wav'
        });
        clearTimeout(this.cronos);
        this.Cronometro();
        setTimeout(function () {
            console.log("Increible lograste el primer ejercicio");
            _this.NEjercicio++;
            _this.ComenzarEXS();
            _this.inAction = false;
        }, milisegundos);
    };
    QuickPage.prototype.Cronometro = function () {
        var _this = this;
        this.cronos = setTimeout(function () {
            _this.ss++;
            if (_this.ss == 60) {
                _this.ss = 0;
                _this.mm++;
            }
            if (_this.mm == 60) {
                _this.mm = 0;
                _this.hh++;
            }
            _this.Cronometro();
        }, 1000);
    };
    QuickPage.prototype.TerminarRutina = function () {
        this.finish = true;
        this.regresiva = -1;
        this.inregresion = false;
        this.inAction = false;
        this.NEjercicio = 1;
        clearTimeout(this.cronos);
        clearTimeout(this.timeOut);
    };
    QuickPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quick',template:/*ion-inline-start:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/routines/quick/quick.html"*/'<!--\n  Generated template for the QuickPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Rutina Rápida</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <ion-card *ngIf="!inAction">\n        <ion-card-header>\n          Rutina Rápida\n        </ion-card-header>\n        <ion-card-content>\n          <ion-row>\n             Ideal para aquellas personas que no tienen suficiente tiempo.\n             consiste en una variación de ejercicios aleatorios que deben ser ejecutados en un lapso de 10 minutos SIN DESCANSO.\n             ¿Te animas?\n          </ion-row>\n      <ion-row class="flex-center margin-top">\n          <button ion-button color="primary" (click)="ComenzarEXS()" > Empecemos!</button>\n      </ion-row>\n\n       \n        </ion-card-content>\n      </ion-card>\n\n\n\n      <ion-card *ngIf="inAction">\n          <img [src]="\'../assets/imgs/\'+ exs[ejercicio_pos].img"/>\n          <ion-card-header >\n          {{exs[ejercicio_pos].nombre}}\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row>\n                {{exs[ejercicio_pos].desc.substring(0,128)}}...            </ion-row>\n      \n         \n          </ion-card-content>\n        </ion-card>\n      \n<div *ngIf="inAction" >\n    <ion-row>\n\n      <ion-col>\n\n          <ion-card >\n              <ion-card-header class="flex-center">\n              Tiempo Trans\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row class="flex-center time-counter">\n                  {{hh}} H - {{mm}} M - {{ss}} S\n                </ion-row>\n         \n             \n              </ion-card-content>\n            </ion-card>\n      </ion-col>\n\n\n      </ion-row>\n<ion-row>\n  <ion-col>\n\n    <ion-card >\n        <ion-card-header class="flex-center">\n        Dificultad\n        </ion-card-header>\n        <ion-card-content>\n          <ion-row class="flex-center">\n            {{exs[ejercicio_pos].dificultad}}     \n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n</ion-col>\n</ion-row>\n\n      <ion-row>\n        <ion-col>\n          <button ion-button block color="primary" icon-left  (click)="TerminarRutina()"> <ion-icon name="md-hand"></ion-icon> Detener Rutina</button>\n        </ion-col>\n      </ion-row>\n</div>\n  \n</ion-content>\n\n\n<div *ngIf="inregresion" class="RegresiveContent g-animate-opacity">\n\n\n  <div class="Regresive-item">\n      {{regresiva}}\n  </div>\n\n  <div class="btn">\n    <button ion-button block color="danger" (click)="cancelar()"> Cancelar</button>\n  </div>\n</div>\n\n<div *ngIf="finish" class="finish">\n\n  <div>\n      Excelente\n  </div>\n\n<br>\n<div class="result">\n    Tiempo Total\n <br>\n  \n    {{hh}} HRS -  {{mm}} Mins - {{ss}} Segs \n\n</div>\n    \n</div>'/*ion-inline-end:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/routines/quick/quick.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_4__providers_timer_timer__["a" /* TimerProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], QuickPage);
    return QuickPage;
}());

//# sourceMappingURL=quick.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartRutinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the StartRutinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StartRutinePage = /** @class */ (function () {
    function StartRutinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StartRutinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StartRutinePage');
    };
    StartRutinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-start-rutine',template:/*ion-inline-start:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/routines/start-routine/start-rutine.html"*/'<!--\n  Generated template for the StartRutinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Rutina Diaria</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card class="animate-top">\n      \n        <ion-card-header>\n        \n          Rutina de calentamiento\n        </ion-card-header>\n        <ion-card-content>\n          \n          <ion-row>\n              <ion-col>\n                 \n              10 minutos de calentamiento para Comenzar\n              </ion-col>\n          </ion-row>\n          <ion-row class="flex-center margin-top">\n           \n          <button ion-button color="danger" > Comenzar</button>\n      </ion-row>\n\n\n        </ion-card-content>\n      </ion-card>\n      <ion-row>\n          <ion-col class="flex-center">\n  <ion-icon name="md-arrow-down">\n  \n  </ion-icon>\n          </ion-col>\n        </ion-row>\n      <ion-card class="animate-zoom">\n          <ion-card-header>\n            Fiesta\n          </ion-card-header>\n          <ion-card-content>\n            <ion-row>\n              <ion-col>\n                 \n              4 rutinas de ejercicios Aleatorios en lapsos de 2 minutos por 30 segundos de descansos para animar ese cuerpo.\n            </ion-col>\n            </ion-row>\n            <ion-row class="flex-center margin-top">\n           \n          \n            <button ion-button class="blocked" color="old" > Comenzar</button>\n         \n          </ion-row>\n  \n         \n          </ion-card-content>\n        </ion-card>\n        <ion-row>\n            <ion-col class="flex-center">\n    <ion-icon name="md-arrow-down">\n    \n    </ion-icon>\n            </ion-col>\n          </ion-row>\n\n        <ion-card class="animate-bottom">\n            <ion-card-header>\n        \n               Sprint\n            </ion-card-header>\n            <ion-card-content>\n              <ion-row>\n                 \n                1 minuto de ejercicio extremo para cerrar con la rutina del día\n              </ion-row>\n           <ion-row class="flex-center margin-top">\n              <button ion-button class="blocked" color="old" > Comenzar</button>\n          </ion-row>\n    \n           \n            </ion-card-content>\n          </ion-card>\n\n\n          <ion-row>\n              <ion-col class="flex-center">\n      <ion-icon name="md-checkmark-circle-outline">\n      \n      </ion-icon>\n              </ion-col>\n            </ion-row>\n          \n</ion-content>\n'/*ion-inline-end:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/routines/start-routine/start-rutine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], StartRutinePage);
    return StartRutinePage;
}());

//# sourceMappingURL=start-rutine.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Exercises_exs__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__catalogo_datail_catalogo_datail__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CatalogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CatalogoPage = /** @class */ (function () {
    function CatalogoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Exc = __WEBPACK_IMPORTED_MODULE_2__Exercises_exs__["a" /* EXS_EXPRESS */];
    }
    CatalogoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CatalogoPage');
    };
    CatalogoPage.prototype.goToDetail = function (exc) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__catalogo_datail_catalogo_datail__["a" /* CatalogoDatailPage */], { 'exc': exc });
    };
    CatalogoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-catalogo',template:/*ion-inline-start:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/routines/catalogo/catalogo.html"*/'<!--\n  Generated template for the CatalogoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Catálogo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n<div class="global-Content">\n\n<div *ngFor="let ex of Exc; let i= index " class="exc">\n    <ion-card class="animate-top" (click)="goToDetail(ex)">\n        <img [src]="\'../assets/imgs/\'+ ex.img"/>\n        <ion-card-header>\n        \n         {{ex.nombre}}\n        </ion-card-header>\n        <ion-card-content>\n          \n          <ion-row>\n              <ion-col>\n                 \n                  {{ex.desc.substring(0,70)}}\n              </ion-col>\n          </ion-row>\n  \n\n\n        </ion-card-content>\n      </ion-card>\n</div>\n   \n\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/routines/catalogo/catalogo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CatalogoPage);
    return CatalogoPage;
}());

//# sourceMappingURL=catalogo.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogoDatailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CatalogoDatailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CatalogoDatailPage = /** @class */ (function () {
    function CatalogoDatailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.exc = navParams.get('exc');
    }
    CatalogoDatailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CatalogoDatailPage');
    };
    CatalogoDatailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-catalogo-datail',template:/*ion-inline-start:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/routines/catalogo/catalogo-datail/catalogo-datail.html"*/'<!--\n  Generated template for the CatalogoDatailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{exc.nombre}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n    <ion-card class="animate-top" >\n        <img [src]="\'../assets/imgs/\'+ exc.img"/>\n        <ion-card-header>\n        \n         {{exc.nombre}}\n        </ion-card-header>\n        <ion-card-content>\n         \n            <ion-row>\n                <ion-col>\n                   \n                    {{exc.dificultad}}\n                </ion-col>\n            </ion-row>\n\n          <ion-row>\n              <ion-col>\n                 \n                  {{exc.desc}}\n              </ion-col>\n          </ion-row>\n  \n\n\n        </ion-card-content>\n      </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/routines/catalogo/catalogo-datail/catalogo-datail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CatalogoDatailPage);
    return CatalogoDatailPage;
}());

//# sourceMappingURL=catalogo-datail.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/config/config.module": [
		289,
		11
	],
	"../pages/information/information.module": [
		290,
		10
	],
	"../pages/progress/progress.module": [
		291,
		9
	],
	"../pages/registro/registro.module": [
		292,
		8
	],
	"../pages/routines/catalogo/catalogo-datail/catalogo-datail.module": [
		293,
		7
	],
	"../pages/routines/catalogo/catalogo.module": [
		294,
		6
	],
	"../pages/routines/my-routine/my-rutine.module": [
		295,
		5
	],
	"../pages/routines/my-routine/routine-form/rutine-form.module": [
		296,
		4
	],
	"../pages/routines/quick/quick.module": [
		297,
		3
	],
	"../pages/routines/rutines.module": [
		298,
		2
	],
	"../pages/routines/start-routine/start-rutine.module": [
		299,
		1
	],
	"../pages/tabs/tabs.module": [
		300,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider(storage) {
        this.storage = storage;
        console.log('Hello StorageProvider Provider');
    }
    StorageProvider.prototype.getUsuario = function () {
        var _this = this;
        var user = {
            nombre: '',
            edad: '',
            sexo: '',
            exp: '',
        };
        var promise = new Promise(function (resolve, reject) {
            _this.storage.get('nombre').then(function (val) {
                console.log('Your name is->', val);
                user.nombre = val;
                _this.storage.get('sexo').then(function (val) {
                    console.log('Your name is->', val);
                    user.sexo = val;
                    _this.storage.get('edad').then(function (val) {
                        console.log('Your name is->', val);
                        user.edad = val;
                        _this.storage.get('exp').then(function (val) {
                            console.log('Your name is->', val);
                            user.exp = val;
                            _this.Usuario = user;
                            resolve(user);
                        });
                    });
                });
            }).catch(function () { reject(); });
            return null;
        });
        return promise;
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EXS_EXPRESS; });
var EXS_EXPRESS = [{
        nombre: 'Carioca',
        desc: 'Este ejercicio incluye movimientos de giros. Aquí se trata de controlar el tiempo en que estás en contacto con el suelo y tendrás que hacer los cambios velozmente. Tienes que moverte lateralmente. Empieza llevando el pie derecho delante del pie izquierdo y mueve las caderas hacia la izquierda. Luego rota hacia la izquierda llevando el pie izquierdo delante del pie derecho. Este cambio debería ser fluido y en constante movimiento. El torso tiene que moverse con los pies. Cuando lleves el pie derecho delante del izquierdo, deberías girar el torso hacia la izquierda y llevar el brazo izquierdo a través del cuerpo haciendo un giro. Recorre unos 50 metros de forma lateral y luego vuelve en dirección contraria  ',
        img: 'carioca.png',
        dificultad: 'Básica'
    }, {
        nombre: 'Paso B',
        desc: 'El paso B es parecido al anterior, pero en lugar de llevar la pierna a la cintura, tienes que impulsarla hasta la cintura o más abajo. Después bájala y toca el suelo con los dos pies al mismo tiempo.',
        img: 'PasoAyB.png'
    }, {
        nombre: 'Paso A',
        desc: 'El paso A te ayuda a construir fuerza en las piernas y el levantamiento de rodilla promueve la eficiencia de la zancada. Deberías dar pequeños pasos, llevando la rodilla hasta la altura de la cintura mientras la otra pierna está lo más derecha posible. Asegúrate de que aterrizas con la parte delantera del pie y de que activas los brazos. Ambos pies deberían tocar el suelo más o menos al mismo tiempo. Recorre unos 30-50 metros.',
        img: 'PasoAyB.png',
        dificultad: 'Básica'
    }, {
        nombre: 'ZANCADAS',
        desc: 'Las zancadas son un buen ejercicio para practicar tu técnica de running, como también lo es correr a un ritmo veloz. Deberías hacerlas durante unos 100 metros. Empieza de pie, haciendo un jogging rápido y acelera hasta que hayas corrido a un 95% de tu velocidad máxima durante 10 metros. ¡Vamos!',
        img: 'PasoAyB.png',
        dificultad: 'Intermedio'
    }, {
        nombre: 'PATADAS AL TRASERO',
        desc: 'Las patadas al trasero hacen que las pantorrillas trabajen y te ayudan a desarrollar una zancada más rápida y más larga. Da pasos pequeños, casi a ritmo de running y levanta uno de los pies hacia los glúteos, o justo debajo, y luego vuelve a bajar (hacia abajo y no hacia adelante). Deberías recorrer una cantidad pequeña, unos 30-50 metros. Este ejercicio también es rápido, así que alterna las piernas tan rápido como puedas.',
        img: 'PatadasAlTrasero.png',
        dificultad: 'Díficil'
    }, {
        nombre: 'ALZAMIENTO DE RODILLAS',
        desc: '¡Este ejercicio hace que levantes las rodillas y hará que la posición de las rodillas al correr sea mucho mejor! Un mayor alzamiento de rodillas de traduce en zancadas más largas y esto normalmente te lleva a correr más rápido. No necesitas mucho espacio, sólo unos 30-50 metros. Asegúrate de que llevas la rodilla hasta la altura de la cadera antes de volverla a bajar (no la lleves hacia adelante). Este ejercicio también trabaja los brazos. A medida que la rodilla sube, mueve el brazo opuesto. Este ejercicio debería ser rápido, así que mueve las piernas todo lo deprisa que puedas.',
        img: 'AlzamientoRodila.png',
        dificultad: 'Intermedio'
    }];
//# sourceMappingURL=exs.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the TimerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TimerProvider = /** @class */ (function () {
    function TimerProvider() {
        console.log('Hello TimerProvider Provider');
    }
    TimerProvider.prototype.setFechaInical = function () {
        this.FechaInicio = new Date();
        console.log("Fecha inicial-->", this.FechaInicio);
    };
    TimerProvider.prototype.ContarTiempo = function () {
        var Actual = new Date();
        console.log("Fecha Actual->", Actual);
        return (Actual.getTime() - this.FechaInicio.getTime());
    };
    TimerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TimerProvider);
    return TimerProvider;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registro_registro__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, vibration, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.vibration = vibration;
        this.storage = storage;
        this.storage.get('nombre').then(function (val) {
            console.log('Your name is->', val);
            if (val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            }
        });
    }
    HomePage.prototype.RetoAceptado = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registro_registro__["a" /* RegistroPage */]);
    };
    HomePage.prototype.BeginRutine = function () {
        this.vibration.vibrate(1000);
    };
    HomePage.prototype.finishRutine = function () {
        this.vibration.vibrate([1000, 1000]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Sprint Trainer\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="dark" padding>\n  \n  <p>\n  Hola este entrenador de Sprint Se especializa en rutinas de duracion aleatoria entre 30 segundos y un minuto, \n  es necesario que esté conciente sobre sus capacidades físicas para realizar dichas rutinas.\n\n  </p>\n\n  <p>\n    Al finalizar cada rutina usted tendrá un minuto de descanso. Para regular la intensidad de los sprints vaya a configuración\n    </p>\n    <p>  Para continuar acepte el reto oprimiendo el siguiente botón.</p>\n    \n<p>\n  Buena suerte\n</p>\n\n<button color="primary" ion-button block icon-right (click)="RetoAceptado()"> Acepto El Reto</button>\n  </ion-content>\n'/*ion-inline-end:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyRutinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MyRutinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyRutinePage = /** @class */ (function () {
    function MyRutinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyRutinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyRutinePage');
    };
    MyRutinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-rutine',template:/*ion-inline-start:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/routines/my-routine/my-rutine.html"*/'<!--\n  Generated template for the MyRutinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>MyRutine</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/routines/my-routine/my-rutine.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MyRutinePage);
    return MyRutinePage;
}());

//# sourceMappingURL=my-rutine.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutineFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RutineFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RutineFormPage = /** @class */ (function () {
    function RutineFormPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RutineFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RutineFormPage');
    };
    RutineFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rutine-form',template:/*ion-inline-start:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/routines/my-routine/routine-form/rutine-form.html"*/'<!--\n  Generated template for the RutineFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>RutineForm</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/routines/my-routine/routine-form/rutine-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RutineFormPage);
    return RutineFormPage;
}());

//# sourceMappingURL=rutine-form.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_vibration__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_registro_registro__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_routines_rutines__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_progress_progress__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_information_information__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_config_config__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_routines_start_routine_start_rutine__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_routines_quick_quick__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_routines_my_routine_my_rutine__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_routines_my_routine_routine_form_rutine_form__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_storage__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_storage_storage__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_timer_timer__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_local_notifications__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_routines_catalogo_catalogo__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_routines_catalogo_catalogo_datail_catalogo_datail__ = __webpack_require__(112);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_8__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_10__pages_routines_rutines__["a" /* RutinesPage */], __WEBPACK_IMPORTED_MODULE_11__pages_progress_progress__["a" /* ProgressPage */], __WEBPACK_IMPORTED_MODULE_12__pages_information_information__["a" /* InformationPage */], __WEBPACK_IMPORTED_MODULE_13__pages_config_config__["a" /* ConfigPage */], __WEBPACK_IMPORTED_MODULE_22__pages_routines_catalogo_catalogo__["a" /* CatalogoPage */], __WEBPACK_IMPORTED_MODULE_23__pages_routines_catalogo_catalogo_datail_catalogo_datail__["a" /* CatalogoDatailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_routines_quick_quick__["a" /* QuickPage */], __WEBPACK_IMPORTED_MODULE_14__pages_routines_start_routine_start_rutine__["a" /* StartRutinePage */], __WEBPACK_IMPORTED_MODULE_17__pages_routines_my_routine_routine_form_rutine_form__["a" /* RutineFormPage */], __WEBPACK_IMPORTED_MODULE_16__pages_routines_my_routine_my_rutine__["a" /* MyRutinePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/config/config.module#ConfigPageModule', name: 'ConfigPage', segment: 'config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/information/information.module#InformationPageModule', name: 'InformationPage', segment: 'information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/progress/progress.module#ProgressPageModule', name: 'ProgressPage', segment: 'progress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/routines/catalogo/catalogo-datail/catalogo-datail.module#CatalogoDatailPageModule', name: 'CatalogoDatailPage', segment: 'catalogo-datail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/routines/catalogo/catalogo.module#CatalogoPageModule', name: 'CatalogoPage', segment: 'catalogo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/routines/my-routine/my-rutine.module#MyRutinePageModule', name: 'MyRutinePage', segment: 'my-rutine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/routines/my-routine/routine-form/rutine-form.module#RutineFormPageModule', name: 'RutineFormPage', segment: 'rutine-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/routines/quick/quick.module#QuickPageModule', name: 'QuickPage', segment: 'quick', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/routines/rutines.module#RutinesPageModule', name: 'RutinesPage', segment: 'rutines', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/routines/start-routine/start-rutine.module#StartRutinePageModule', name: 'StartRutinePage', segment: 'start-rutine', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_8__pages_registro_registro__["a" /* RegistroPage */], __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */], __WEBPACK_IMPORTED_MODULE_10__pages_routines_rutines__["a" /* RutinesPage */], __WEBPACK_IMPORTED_MODULE_11__pages_progress_progress__["a" /* ProgressPage */], __WEBPACK_IMPORTED_MODULE_12__pages_information_information__["a" /* InformationPage */], __WEBPACK_IMPORTED_MODULE_13__pages_config_config__["a" /* ConfigPage */], __WEBPACK_IMPORTED_MODULE_22__pages_routines_catalogo_catalogo__["a" /* CatalogoPage */], __WEBPACK_IMPORTED_MODULE_23__pages_routines_catalogo_catalogo_datail_catalogo_datail__["a" /* CatalogoDatailPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_15__pages_routines_quick_quick__["a" /* QuickPage */], __WEBPACK_IMPORTED_MODULE_14__pages_routines_start_routine_start_rutine__["a" /* StartRutinePage */], __WEBPACK_IMPORTED_MODULE_17__pages_routines_my_routine_routine_form_rutine_form__["a" /* RutineFormPage */], __WEBPACK_IMPORTED_MODULE_16__pages_routines_my_routine_my_rutine__["a" /* MyRutinePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_local_notifications__["a" /* LocalNotifications */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_timer_timer__["a" /* TimerProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.storage = storage;
        platform.ready().then(function () {
            _this.storage.get('nombre').then(function (val) {
                console.log('Your name is->', val);
                if (val) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                }
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    ;
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routines_rutines__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_progress__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__information_information__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_config__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__routines_rutines__["a" /* RutinesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__progress_progress__["a" /* ProgressPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__information_information__["a" /* InformationPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__config_config__["a" /* ConfigPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/tabs/tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-tabs>\n  <ion-tab tabIcon="md-stopwatch" tabTitle="Rutinas" [root]="tab1Root"></ion-tab>\n  <ion-tab tabIcon="ios-stats" tabTitle="Progreso" [root]="tab2Root"></ion-tab>\n  <ion-tab tabIcon="ios-body" tabTitle="Información" [root]="tab3Root"></ion-tab>\n  <ion-tab tabIcon="ios-cog" tabTitle="Ajustes" [root]="tab4Root"></ion-tab>\n</ion-tabs>`'/*ion-inline-end:"/Users/josephat.reyes/Desktop/react-native/Sport/SprintTrainer/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map