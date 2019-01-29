(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_login_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/login/pages/login/login.component */ "./src/app/modules/login/pages/login/login.component.ts");
/* harmony import */ var _modules_login_pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/login/pages/register/register.component */ "./src/app/modules/login/pages/register/register.component.ts");
/* harmony import */ var _modules_dashboard_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/dashboard/pages/dashboard/dashboard.component */ "./src/app/modules/dashboard/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _modules_login_pages_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/login/pages/email-verification/email-verification.component */ "./src/app/modules/login/pages/email-verification/email-verification.component.ts");
/* harmony import */ var _modules_setup_pages_setup_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/setup/pages/setup/setup.component */ "./src/app/modules/setup/pages/setup/setup.component.ts");
/* harmony import */ var _modules_setup_pages_install_install_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/setup/pages/install/install.component */ "./src/app/modules/setup/pages/install/install.component.ts");
/* harmony import */ var _modules_setup_components_failure_failure_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/setup/components/failure/failure.component */ "./src/app/modules/setup/components/failure/failure.component.ts");
/* harmony import */ var _modules_setup_components_success_success_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/setup/components/success/success.component */ "./src/app/modules/setup/components/success/success.component.ts");
/* harmony import */ var _modules_dashboard_pages_report_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/dashboard/pages/report/report.component */ "./src/app/modules/dashboard/pages/report/report.component.ts");













var dashboardRoutes = [
    { path: "", redirectTo: "report", pathMatch: "full" },
    { path: "report", component: _modules_dashboard_pages_report_report_component__WEBPACK_IMPORTED_MODULE_12__["ReportComponent"] }
];
var installRoutes = [
    { path: "failure", component: _modules_setup_components_failure_failure_component__WEBPACK_IMPORTED_MODULE_10__["FailureComponent"] },
    { path: "success", component: _modules_setup_components_success_success_component__WEBPACK_IMPORTED_MODULE_11__["SuccessComponent"] }
];
var routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: _modules_login_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "register", component: _modules_login_pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: "email-verification", component: _modules_login_pages_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_7__["EmailVerificationComponent"] },
    { path: "setup", component: _modules_setup_pages_setup_setup_component__WEBPACK_IMPORTED_MODULE_8__["SetupComponent"], canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: "install", component: _modules_setup_pages_install_install_component__WEBPACK_IMPORTED_MODULE_9__["InstallComponent"], children: installRoutes, canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: "dashboard", component: _modules_dashboard_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], children: dashboardRoutes },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'standup-sgt-web';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_dashboard_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/dashboard/pages/dashboard/dashboard.component */ "./src/app/modules/dashboard/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _modules_login_pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @modules/login/pages/login/login.component */ "./src/app/modules/login/pages/login/login.component.ts");
/* harmony import */ var _modules_login_pages_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/login/pages/register/register.component */ "./src/app/modules/login/pages/register/register.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _modules_login_pages_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/login/pages/email-verification/email-verification.component */ "./src/app/modules/login/pages/email-verification/email-verification.component.ts");
/* harmony import */ var _modules_setup_pages_setup_setup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @modules/setup/pages/setup/setup.component */ "./src/app/modules/setup/pages/setup/setup.component.ts");
/* harmony import */ var _modules_setup_pages_install_install_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/setup/pages/install/install.component */ "./src/app/modules/setup/pages/install/install.component.ts");
/* harmony import */ var _modules_setup_components_failure_failure_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/setup/components/failure/failure.component */ "./src/app/modules/setup/components/failure/failure.component.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _modules_setup_components_success_success_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @modules/setup/components/success/success.component */ "./src/app/modules/setup/components/success/success.component.ts");
/* harmony import */ var _modules_dashboard_pages_report_report_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @modules/dashboard/pages/report/report.component */ "./src/app/modules/dashboard/pages/report/report.component.ts");
/* harmony import */ var _modules_dashboard_components_participants_participants_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @modules/dashboard/components/participants/participants.component */ "./src/app/modules/dashboard/components/participants/participants.component.ts");
/* harmony import */ var _modules_dashboard_components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @modules/dashboard/components/schedule/schedule.component */ "./src/app/modules/dashboard/components/schedule/schedule.component.ts");
/* harmony import */ var _modules_dashboard_components_questions_questions_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @modules/dashboard/components/questions/questions.component */ "./src/app/modules/dashboard/components/questions/questions.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");

// Angular





// Clarity

// Application



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _modules_dashboard_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _modules_login_pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _modules_login_pages_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _modules_login_pages_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_15__["EmailVerificationComponent"],
                _modules_setup_pages_setup_setup_component__WEBPACK_IMPORTED_MODULE_16__["SetupComponent"],
                _modules_setup_pages_install_install_component__WEBPACK_IMPORTED_MODULE_17__["InstallComponent"],
                _modules_setup_components_failure_failure_component__WEBPACK_IMPORTED_MODULE_18__["FailureComponent"],
                _modules_setup_components_success_success_component__WEBPACK_IMPORTED_MODULE_20__["SuccessComponent"],
                _modules_dashboard_pages_report_report_component__WEBPACK_IMPORTED_MODULE_21__["ReportComponent"],
                _modules_dashboard_components_participants_participants_component__WEBPACK_IMPORTED_MODULE_22__["ParticipantsComponent"],
                _modules_dashboard_components_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_23__["ScheduleComponent"],
                _modules_dashboard_components_questions_questions_component__WEBPACK_IMPORTED_MODULE_24__["QuestionsComponent"],
            ],
            imports: [
                _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClarityModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase, "standup-sgt-web"),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestoreModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_14__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["SharedModule"]
            ],
            providers: [],
            bootstrap: [
                _app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(firebaseAuthentication, firestore, router) {
        this.firebaseAuthentication = firebaseAuthentication;
        this.firestore = firestore;
        this.router = router;
        this.user = this.firebaseAuthentication.authState;
    }
    AuthService.prototype.emailAndPasswordLogin = function (email, password) {
        return this.firebaseAuthentication.auth.signInWithEmailAndPassword(email, password)
            .then(function (credentials) {
            if (!!credentials && credentials.user.emailVerified === true) {
                return Promise.resolve(credentials);
            }
            else {
                var error = { code: "auth/not-verified", message: "The email has not been verified." };
                return Promise.reject(error);
            }
        });
    };
    AuthService.prototype.googleLogin = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        return this.firebaseAuthentication.auth.signInWithPopup(provider);
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.firebaseAuthentication.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    AuthService.prototype.register = function (email, password) {
        return this.firebaseAuthentication.auth.createUserWithEmailAndPassword(email, password).then(function (credentials) {
            credentials.user.sendEmailVerification();
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/report.service */ "./src/app/core/services/report.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _services_installation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/installation.service */ "./src/app/core/services/installation.service.ts");
/* harmony import */ var _services_slack_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/slack.service */ "./src/app/core/services/slack.service.ts");









var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"]
            ],
            providers: [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"], _services_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"], _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _services_installation_service__WEBPACK_IMPORTED_MODULE_7__["InstallationService"], _services_slack_service__WEBPACK_IMPORTED_MODULE_8__["SlackService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, afs, router) {
        this.auth = auth;
        this.afs = afs;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).toPromise()
            .then(function (user) {
            if (user == null) {
                _this.router.navigateByUrl("/login");
                return Promise.reject();
            }
            if (user.emailVerified === false) {
                _this.router.navigateByUrl("/email-verification");
                return Promise.reject();
            }
        })
            .then(function () {
            return true;
        })
            .catch(function () {
            return false;
        });
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/services/installation.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/installation.service.ts ***!
  \*******************************************************/
/*! exports provided: InstallationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationService", function() { return InstallationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");






var InstallationService = /** @class */ (function () {
    function InstallationService(afs, us) {
        this.afs = afs;
        this.us = us;
        this.installation = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.setInstallation();
    }
    InstallationService.prototype.setInstallation = function () {
        var _this = this;
        this.us.getUser().subscribe(function (user) {
            if (user == null) {
                return;
            }
            _this.afs
                .collection("installations", function (ref) {
                return ref.where("creator_uid", "==", user.uid).limit(1);
            })
                .valueChanges()
                .map(function (val) { return val[0]; })
                .subscribe(_this.installation);
        });
    };
    InstallationService.prototype.getInstallation = function () {
        return this.installation.asObservable();
    };
    InstallationService.prototype.hasInstallation = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.us.getUser().subscribe(function (user) {
                if (user == null) {
                    return;
                }
                _this.afs
                    .collection("installations", function (ref) {
                    return ref.where("creator_uid", "==", user.uid).limit(1);
                })
                    .get()
                    .map(function (snapshot) { return snapshot.size; })
                    .subscribe(function (amount) {
                    if (amount > 0) {
                        res(true);
                    }
                    else {
                        res(false);
                    }
                });
            });
        });
    };
    InstallationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], InstallationService);
    return InstallationService;
}());



/***/ }),

/***/ "./src/app/core/services/report.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/report.service.ts ***!
  \*************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _installation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./installation.service */ "./src/app/core/services/installation.service.ts");






var ReportService = /** @class */ (function () {
    function ReportService(afs, us, is) {
        this.afs = afs;
        this.us = us;
        this.is = is;
        this.reports = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.setReports();
    }
    ReportService.prototype.setReports = function () {
        var _this = this;
        this.us.getUser().subscribe(function (user) {
            _this.afs.collection("reports", function (ref) {
                return ref.where("creator_uid", "==", user.uid);
            }).valueChanges().subscribe(_this.reports);
        });
    };
    ReportService.prototype.getReports = function () {
        return this.reports.asObservable();
    };
    ReportService.prototype.updateSchedule = function (report, newSchedule) {
        return this.updateReport(report, { schedule: newSchedule });
    };
    ReportService.prototype.updateQuestions = function (report, newQuestions) {
        return this.updateReport(report, { questions: newQuestions });
    };
    ReportService.prototype.updateMembers = function (report, newMember) {
        return this.updateReport(report, { selectedMembers: newMember });
    };
    ReportService.prototype.createReport = function (report) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user, installation;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        report.uid = this.afs.createId();
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.us.getUser().subscribe(function (u) {
                                    resolve(u);
                                });
                            })];
                    case 1:
                        user = (_a.sent());
                        report.creator_uid = user.uid;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.is.getInstallation().subscribe(function (i) {
                                    resolve(i);
                                });
                            })];
                    case 2:
                        installation = (_a.sent());
                        report.team_id = installation.team_id;
                        return [2 /*return*/, this.afs.collection("reports").doc(report.uid).set(report)];
                }
            });
        });
    };
    ReportService.prototype.updateReport = function (report, changes) {
        return this.afs
            .collection("reports")
            .doc(report.uid)
            .update(changes);
    };
    ReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _installation_service__WEBPACK_IMPORTED_MODULE_5__["InstallationService"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/app/core/services/slack.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/slack.service.ts ***!
  \************************************************/
/*! exports provided: SlackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlackService", function() { return SlackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _installation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./installation.service */ "./src/app/core/services/installation.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var SlackService = /** @class */ (function () {
    function SlackService(is, http) {
        var _this = this;
        this.is = is;
        this.http = http;
        this.teamMembers = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.channels = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.requestTeamMembers().then(function (members) { return _this.teamMembers.next(members); });
        this.requestChannels().then(function (channels) { return _this.channels.next(channels); });
    }
    SlackService.prototype.getChannels = function (refresh) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        if (refresh) {
            this.requestChannels().then(function (channels) {
                _this.channels.next(channels);
            });
        }
        return this.channels.asObservable();
    };
    SlackService.prototype.getTeamMembers = function (refresh) {
        var _this = this;
        if (refresh === void 0) { refresh = false; }
        if (refresh) {
            this.requestTeamMembers().then(function (members) {
                _this.teamMembers.next(members);
            });
        }
        return this.teamMembers.asObservable();
    };
    SlackService.prototype.requestChannels = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var installation, response, channels, otherChannels;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this.is.getInstallation().subscribe(function (i) { return resolve(i); });
                        })];
                    case 1:
                        installation = (_a.sent());
                        return [4 /*yield*/, this.http.get("https://slack.com/api/channels.list?token=" + installation.bot.token).toPromise()];
                    case 2:
                        response = (_a.sent());
                        if (response.ok === false) {
                            return [2 /*return*/, Promise.reject()];
                        }
                        channels = response.channels;
                        if (!(response.response_metadata.next_cursor != null && response.response_metadata.next_cursor !== "")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.requestChannelsWithPagination(installation.bot.token, response.response_metadata.next_cursor)];
                    case 3:
                        otherChannels = _a.sent();
                        return [2 /*return*/, channels.concat(otherChannels)];
                    case 4: return [2 /*return*/, channels];
                }
            });
        });
    };
    SlackService.prototype.requestTeamMembers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var installation, response, members, otherMembers;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            _this.is.getInstallation().subscribe(function (i) { return resolve(i); });
                        })];
                    case 1:
                        installation = (_a.sent());
                        return [4 /*yield*/, this.http.get("https://slack.com/api/users.list?token=" + installation.access_token).toPromise()];
                    case 2:
                        response = (_a.sent());
                        if (response.ok === false) {
                            return [2 /*return*/, Promise.reject()];
                        }
                        members = response.members;
                        if (!(response.response_metadata.next_cursor != null && response.response_metadata.next_cursor !== "")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.requestMembersWithPagination(installation.access_token, response.response_metadata.next_cursor)];
                    case 3:
                        otherMembers = _a.sent();
                        return [2 /*return*/, members.concat(otherMembers)];
                    case 4: return [2 /*return*/, members];
                }
            });
        });
    };
    SlackService.prototype.requestMembersWithPagination = function (token, cursor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var members, finished, errorCount, nextMembers;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        members = [];
                        finished = false;
                        errorCount = 0;
                        _a.label = 1;
                    case 1:
                        if (!(!finished || errorCount < 5)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.http.get("https://slack.com/api/users.list?token=" + token + "&cursor=" + cursor)
                                .map(function (response) {
                                if (response.ok === false) {
                                    errorCount++;
                                    return [];
                                }
                                else {
                                    if (response.response_metadata.next_cursor != null && response.response_metadata.next_cursor !== "") {
                                        cursor = response.response_metadata.next_cursor;
                                    }
                                    else {
                                        finished = true;
                                    }
                                    return response.members;
                                }
                            }).toPromise()];
                    case 2:
                        nextMembers = _a.sent();
                        members = members.concat(nextMembers);
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, members];
                }
            });
        });
    };
    SlackService.prototype.requestChannelsWithPagination = function (token, cursor) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var channels, finished, errorCount, nextChannels;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        channels = [];
                        finished = false;
                        errorCount = 0;
                        _a.label = 1;
                    case 1:
                        if (!(!finished || errorCount < 5)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.http.get("https://slack.com/api/channels.list?token=" + token + "&cursor=" + cursor)
                                .map(function (response) {
                                if (response.ok === false) {
                                    errorCount++;
                                    return [];
                                }
                                else {
                                    if (response.response_metadata.next_cursor != null && response.response_metadata.next_cursor !== "") {
                                        cursor = response.response_metadata.next_cursor;
                                    }
                                    else {
                                        finished = true;
                                    }
                                    return response.channels;
                                }
                            }).toPromise()];
                    case 2:
                        nextChannels = _a.sent();
                        channels = channels.concat(nextChannels);
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, channels];
                }
            });
        });
    };
    SlackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_installation_service__WEBPACK_IMPORTED_MODULE_2__["InstallationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SlackService);
    return SlackService;
}());



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var UserService = /** @class */ (function () {
    function UserService(fireAuth) {
        this.fireAuth = fireAuth;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.fireAuth.user.subscribe(this.user);
    }
    UserService.prototype.getUser = function () {
        return this.user.asObservable();
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/components/participants/participants.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/participants/participants.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    Participants\n  </div>\n  <div class=\"card-block\">\n    <div class=\"card-text\">\n      <ng-container>\n        <div class=\"member-wrapper\" *ngFor=\"let m of members\">\n          <img [src]=\"m.profile.image_48\">\n          <span>{{m.name}}</span>\n          <app-icon-button type=\"window-close\" (click)=\"removeMember(m)\"></app-icon-button>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"card-footer\">\n    <app-link-button (click)=\"saveChanges()\">Save Changes</app-link-button>\n    <app-link-button (click)=\"openModal()\">Add Participant</app-link-button>\n  </div>\n</div>\n\n<clr-modal [(clrModalOpen)]=\"isModalOpen\" [clrModalStaticBackdrop]=\"false\">\n  <h3 class=\"modal-title\">Add a participant</h3>\n  <div class=\"modal-body no-scroll\">\n    <select clrSelect [(ngModel)]=\"newTeamMember\">\n      <option [ngValue]=\"undefined\" disabled=\"true\">Select participant</option>\n      <option *ngFor=\"let tm of availableTeamMembers()\" [ngValue]=\"tm\">{{tm.name}}</option>\n    </select>\n  </div>\n  <div class=\"modal-footer\">\n    <app-outline-button (click)=\"isModalOpen = false\">Cancel</app-outline-button>\n    <app-primary-button (click)=\"addTeamMember()\" [disabled]=\"!selectedMemberValid()\">Add</app-primary-button>\n  </div>\n</clr-modal>"

/***/ }),

/***/ "./src/app/modules/dashboard/components/participants/participants.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/participants/participants.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  padding-bottom: 24px; }\n\n.member-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-top: 10px;\n  color: white; }\n\n.member-wrapper:first-of-type {\n    margin-top: 0px; }\n\n.member-wrapper img {\n    width: 24px;\n    height: 24px;\n    border-radius: 5px;\n    flex-grow: 0; }\n\n.member-wrapper span {\n    margin-left: 5px;\n    min-width: 100px;\n    display: inline-block;\n    flex-grow: 1; }\n\n/deep/ .modal-body.no-scroll {\n  height: 50px !important; }\n\n/deep/ div.modal-header button.close {\n  width: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x1a2FzL0NvZGluZy9zdGFuZHJvaWQvc3RhbmRyb2lkLXdlYi9zcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFCQUFvQixFQUN2Qjs7QUFFRDtFQUNJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQixhQUFZLEVBZ0JmOztBQXJCRDtJQU9RLGdCQUFlLEVBQ2xCOztBQVJMO0lBVVEsWUFBVztJQUNYLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsYUFBWSxFQUNmOztBQWRMO0lBZ0JRLGlCQUFnQjtJQUNoQixpQkFBZ0I7SUFDaEIsc0JBQXFCO0lBQ3JCLGFBQVksRUFDZjs7QUFHTDtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUVJLHVCQUFzQixFQUN6QiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvcGFydGljaXBhbnRzL3BhcnRpY2lwYW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi90aGVtZS5zY3NzXCI7XG5oMyB7XG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG59XG5cbi5tZW1iZXItd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cbn1cblxuL2RlZXAvIC5tb2RhbC1ib2R5Lm5vLXNjcm9sbCB7XG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi9kZWVwLyBkaXYubW9kYWwtaGVhZGVyIGJ1dHRvbi5jbG9zZSB7XG4gICAgLy8gdGV4dC1hbGlnbjogZW5kIWltcG9ydGFudDtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/dashboard/components/participants/participants.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/participants/participants.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ParticipantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantsComponent", function() { return ParticipantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_services_slack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/slack.service */ "./src/app/core/services/slack.service.ts");



var ParticipantsComponent = /** @class */ (function () {
    function ParticipantsComponent(ss) {
        var _this = this;
        this.ss = ss;
        this.members = [];
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isModalOpen = false;
        this.teamMembers = [];
        ss.getTeamMembers().subscribe(function (members) {
            _this.teamMembers = members;
        });
    }
    ParticipantsComponent.prototype.removeMember = function (member) {
        var index = this.members.indexOf(member);
        this.members.splice(index, 1);
    };
    ParticipantsComponent.prototype.openModal = function () {
        this.isModalOpen = true;
    };
    ParticipantsComponent.prototype.selectedMemberValid = function () {
        if (!!this.newTeamMember) {
            return this.newTeamMember.id !== "-1";
        }
        return false;
    };
    ParticipantsComponent.prototype.addTeamMember = function () {
        this.members.push(this.newTeamMember);
        this.isModalOpen = false;
    };
    ParticipantsComponent.prototype.availableTeamMembers = function () {
        var _this = this;
        return this.teamMembers.filter(function (m1) {
            return !_this.members.some(function (m2) { return m2.id === m1.id; });
        });
    };
    ParticipantsComponent.prototype.saveChanges = function () {
        this.save.emit(this.members);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ParticipantsComponent.prototype, "members", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ParticipantsComponent.prototype, "save", void 0);
    ParticipantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-participants',
            template: __webpack_require__(/*! ./participants.component.html */ "./src/app/modules/dashboard/components/participants/participants.component.html"),
            styles: [__webpack_require__(/*! ./participants.component.scss */ "./src/app/modules/dashboard/components/participants/participants.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_services_slack_service__WEBPACK_IMPORTED_MODULE_2__["SlackService"]])
    ], ParticipantsComponent);
    return ParticipantsComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/components/questions/questions.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/questions/questions.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    Questions\n  </div>\n  <div class=\"card-block\">\n    <div class=\"card-text\">\n      <ng-container>\n        <div *ngFor=\"let q of questions; let i = index\" class=\"questions-wrapper\">\n          <input clrInput placeholder=\"A question for the report\" name=\"{{q}}\" [(ngModel)]=\"q\" (change)=\"changeQuestion(i,$event.target.value)\" />\n          <button type=\"button\" class=\"btn btn-icon\" (click)=\"deleteQuestion(i)\">\n            <clr-icon shape=\"trash\"></clr-icon>\n          </button>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"card-footer\">\n    <button class=\"btn btn-sm btn-link\" (click)=\"saveQuestions()\">Save Changes</button>\n    <button class=\"btn btn-sm btn-link\" (click)=\"openModal()\">Add Question</button>\n  </div>\n</div>\n\n<clr-modal [(clrModalOpen)]=\"isModalOpen\" [clrModalStaticBackdrop]=\"false\">\n  <h3 class=\"modal-title\">Add a participant</h3>\n  <div class=\"modal-body no-scroll\">\n    <input clrInput placeholder=\"New question\" name=\"input\" [(ngModel)]=\"newQuestion\" />\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline\" (click)=\"isModalOpen = false\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addQuestion()\" [disabled]=\"!newQuestionValid()\">Add</button>\n  </div>\n</clr-modal>"

/***/ }),

/***/ "./src/app/modules/dashboard/components/questions/questions.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/questions/questions.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ .clr-input-wrapper input {\n  width: 400px; }\n\n/deep/ .questions-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 50px; }\n\n/deep/ .questions-wrapper /deep/ .clr-form-control.ng-star-inserted {\n    margin: 0px; }\n\n/deep/ .questions-wrapper /deep/ .btn.btn-icon {\n    margin: 0;\n    margin-left: 10px; }\n\n/deep/ input:focus,\n/deep/ input:focus {\n  background-size: 100% 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x1a2FzL0NvZGluZy9zdGFuZHJvaWQvc3RhbmRyb2lkLXdlYi9zcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLGFBQVksRUFRZjs7QUFaRDtJQU1RLFlBQVcsRUFDZDs7QUFQTDtJQVNRLFVBQVM7SUFDVCxrQkFBaUIsRUFDcEI7O0FBR0w7O0VBRUksc0NBQXFDLEVBQ3hDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3RoZW1lLnNjc3NcIjtcblxuL2RlZXAvIC5jbHItaW5wdXQtd3JhcHBlciBpbnB1dCB7XG4gICAgd2lkdGg6IDQwMHB4O1xufVxuXG4vZGVlcC8gLnF1ZXN0aW9ucy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgL2RlZXAvIC5jbHItZm9ybS1jb250cm9sLm5nLXN0YXItaW5zZXJ0ZWQge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgL2RlZXAvIC5idG4uYnRuLWljb24ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbn1cblxuL2RlZXAvIGlucHV0OmZvY3VzLFxuL2RlZXAvIGlucHV0OmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJSAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/dashboard/components/questions/questions.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/questions/questions.component.ts ***!
  \*******************************************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent() {
        this.questions = [];
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isModalOpen = false;
        this.newQuestion = "";
    }
    QuestionsComponent.prototype.deleteQuestion = function (index) {
        this.questions.splice(index, 1);
    };
    QuestionsComponent.prototype.addQuestion = function () {
        this.questions.push(this.newQuestion);
        this.isModalOpen = false;
    };
    QuestionsComponent.prototype.changeQuestion = function (index, value) {
        this.questions[index] = value;
    };
    QuestionsComponent.prototype.saveQuestions = function () {
        this.save.emit(this.questions);
    };
    QuestionsComponent.prototype.newQuestionValid = function () {
        var _this = this;
        if (this.newQuestion == null || this.newQuestion === "") {
            return false;
        }
        if (this.questions.some(function (v) { return v === _this.newQuestion; })) {
            return false;
        }
        return true;
    };
    QuestionsComponent.prototype.openModal = function () {
        this.isModalOpen = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], QuestionsComponent.prototype, "questions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuestionsComponent.prototype, "save", void 0);
    QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/modules/dashboard/components/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.scss */ "./src/app/modules/dashboard/components/questions/questions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/components/schedule/schedule.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/schedule/schedule.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    Schedule\n  </div>\n  <div class=\"card-block\">\n    <div class=\"card-text\">\n      <ng-container *ngIf=\"schedule != null\">\n        <section class=\"form-block\">\n          <label>Pick the week days</label>\n          <clr-checkbox-container>\n            <clr-checkbox-wrapper>\n              <input type=\"checkbox\" clrCheckbox #monday [checked]=\"schedule.monday\" (change)=\"schedule.monday = !schedule.monday\"\n                name=\"options\" />\n              <label>Monday</label>\n            </clr-checkbox-wrapper>\n            <clr-checkbox-wrapper>\n              <input type=\"checkbox\" clrCheckbox #tuesday [checked]=\"schedule.tuesday\" (change)=\"schedule.tuesday = !schedule.tuesday\"\n                name=\"options\" />\n              <label>Tuesday</label>\n            </clr-checkbox-wrapper>\n            <clr-checkbox-wrapper>\n              <input type=\"checkbox\" clrCheckbox #wednesday [checked]=\"schedule.wednesday\" (change)=\"schedule.wednesday = !schedule.wednesday\"\n                name=\"options\" />\n              <label>Wednesday</label>\n            </clr-checkbox-wrapper>\n            <clr-checkbox-wrapper>\n              <input type=\"checkbox\" clrCheckbox #thursday [checked]=\"schedule.thursday\" (change)=\"schedule.thursday = !schedule.thursday\"\n                name=\"options\" />\n              <label>Thursday</label>\n            </clr-checkbox-wrapper>\n            <clr-checkbox-wrapper>\n              <input type=\"checkbox\" clrCheckbox #friday [checked]=\"schedule.friday\" (change)=\"schedule.friday = !schedule.friday\"\n                name=\"options\" />\n              <label>Friday</label>\n            </clr-checkbox-wrapper>\n            <clr-checkbox-wrapper>\n              <input type=\"checkbox\" clrCheckbox #saturday [checked]=\"schedule.saturday\" (change)=\"schedule.saturday = !schedule.saturday\"\n                name=\"options\" />\n              <label>Saturday</label>\n            </clr-checkbox-wrapper>\n            <clr-checkbox-wrapper>\n              <input type=\"checkbox\" clrCheckbox #sunday [checked]=\"schedule.sunday\" (change)=\"schedule.sunday = !schedule.sunday\"\n                name=\"options\" />\n              <label>Sunday</label>\n            </clr-checkbox-wrapper>\n          </clr-checkbox-container>\n        </section>\n        <section class=\"form-block\">\n          <label for=\"select-full\" class=\"clr-control-label\">Time of day</label>\n          <div class=\"clr-control-container\">\n            <div class=\"clr-select-wrapper\">\n              <select id=\"select-hour\" class=\"clr-select\" [(ngModel)]=\"schedule.hour\" name=\"hours\">\n                <option *ngFor=\"let h of hours\" [ngValue]=\"h\">{{h}}</option>\n              </select>\n            </div>\n            <span class=\"clr-subtext\">Hour</span>\n          </div>\n          <div class=\"clr-control-container\">\n            <div class=\"clr-select-wrapper\">\n              <select id=\"select-minute\" class=\"clr-select\" [(ngModel)]=\"schedule.minute\" name=\"minutes\">\n                <option *ngFor=\"let m of minutes\" [ngValue]=\"m\">{{m}}</option>\n              </select>\n            </div>\n            <span class=\"clr-subtext\">Minute</span>\n          </div>\n        </section>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"card-footer\">\n    <button class=\"btn btn-sm btn-link\" (click)=\"saveSchedule()\">Save Changes</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard/components/schedule/schedule.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/schedule/schedule.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ .form-block select:focus {\n  background-size: 100% 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x1a2FzL0NvZGluZy9zdGFuZHJvaWQvc3RhbmRyb2lkLXdlYi9zcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxzQ0FBcUMsRUFDeEMiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9jb21wb25lbnRzL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3RoZW1lLnNjc3NcIjtcblxuL2RlZXAvIC5mb3JtLWJsb2NrIHNlbGVjdDpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCUgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/dashboard/components/schedule/schedule.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/schedule/schedule.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hours = [];
        this.minutes = [];
        for (var counter = 0; counter < 24; counter++) {
            this.hours.push(counter);
        }
        for (var counter = 0; counter < 60 / 5; counter++) {
            this.minutes.push(counter * 5);
        }
    }
    ScheduleComponent.prototype.saveSchedule = function () {
        this.save.emit(this.schedule);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScheduleComponent.prototype, "schedule", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ScheduleComponent.prototype, "save", void 0);
    ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/modules/dashboard/components/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.scss */ "./src/app/modules/dashboard/components/schedule/schedule.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/pages/dashboard/dashboard.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/dashboard/dashboard.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div id=\"alert_bar\" class=\"alert alert-app-level\">\n    <div class=\"alert-items\">\n      <div class=\"alert-item static\">\n      </div>\n    </div>\n  </div>\n  <header class=\"header header-6\">\n    <div class=\"branding\">\n      <a class=\"nav-link\" (click)=\"screaming = !screaming\">\n        <img *ngIf=\"!screaming; else screamer\" src=\"assets/img/iconfinder.png\" alt=\"Standup Sergeant\">\n        <ng-template #screamer>\n          <img src=\"assets/img/screaming.png\" class=\"alert-image\" alt=\"Standup Sergeant\">\n        </ng-template>\n        <span class=\"title\"><b>Standup Sergeant</b></span>\n      </a>\n    </div>\n    <div class=\"header-nav\">\n      <a class=\"active nav-link nav-text\">Dashboard</a>\n    </div>\n    <!--<form class=\"search\">\n      <label for=\"search_input\">\n        <input id=\"search_input\" type=\"text\" placeholder=\"Search for keywords...\">\n      </label>\n    </form>-->\n    <div class=\"header-actions\">\n      <clr-dropdown>\n        <button class=\"nav-icon\" clrDropdownTrigger>\n          <clr-icon shape=\"user\"></clr-icon>\n          <clr-icon shape=\"caret down\"></clr-icon>\n        </button>\n        <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n          <a (click)=\"logout()\" clrDropdownItem>Log out</a>\n        </clr-dropdown-menu>\n      </clr-dropdown>\n    </div>\n  </header>\n  <nav class=\"subnav\">\n    <ul class=\"nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" [routerLink]=\"['report']\">Reports</a>\n      </li>\n    </ul>\n  </nav>\n  <div class=\"content-container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/dashboard/dashboard.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/dashboard/dashboard.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes shake {\n  0% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg); }\n  10% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg); }\n  20% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg); }\n  30% {\n    -webkit-transform: translate(3px, 2px) rotate(0deg);\n            transform: translate(3px, 2px) rotate(0deg); }\n  40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg); }\n  50% {\n    -webkit-transform: translate(-1px, 2px) rotate(-1deg);\n            transform: translate(-1px, 2px) rotate(-1deg); }\n  60% {\n    -webkit-transform: translate(-3px, 1px) rotate(0deg);\n            transform: translate(-3px, 1px) rotate(0deg); }\n  70% {\n    -webkit-transform: translate(3px, 1px) rotate(-1deg);\n            transform: translate(3px, 1px) rotate(-1deg); }\n  80% {\n    -webkit-transform: translate(-1px, -1px) rotate(1deg);\n            transform: translate(-1px, -1px) rotate(1deg); }\n  90% {\n    -webkit-transform: translate(1px, 2px) rotate(0deg);\n            transform: translate(1px, 2px) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg); } }\n\n@keyframes shake {\n  0% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg); }\n  10% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg); }\n  20% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg); }\n  30% {\n    -webkit-transform: translate(3px, 2px) rotate(0deg);\n            transform: translate(3px, 2px) rotate(0deg); }\n  40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg); }\n  50% {\n    -webkit-transform: translate(-1px, 2px) rotate(-1deg);\n            transform: translate(-1px, 2px) rotate(-1deg); }\n  60% {\n    -webkit-transform: translate(-3px, 1px) rotate(0deg);\n            transform: translate(-3px, 1px) rotate(0deg); }\n  70% {\n    -webkit-transform: translate(3px, 1px) rotate(-1deg);\n            transform: translate(3px, 1px) rotate(-1deg); }\n  80% {\n    -webkit-transform: translate(-1px, -1px) rotate(1deg);\n            transform: translate(-1px, -1px) rotate(1deg); }\n  90% {\n    -webkit-transform: translate(1px, 2px) rotate(0deg);\n            transform: translate(1px, 2px) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg); } }\n\n.alert-image {\n  width: 48px !important;\n  height: 48px !important;\n  -webkit-animation: shake 0.7s;\n          animation: shake 0.7s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  position: relative; }\n\n.branding img {\n  width: 36px;\n  height: 36px;\n  margin: 0 12px; }\n\n/deep/ .content-container > .ng-star-inserted {\n  width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x1a2FzL0NvZGluZy9zdGFuZHJvaWQvc3RhbmRyb2lkLXdlYi9zcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSTtJQUNJLG9EQUEyQztZQUEzQyw0Q0FBMkMsRUFBQTtFQUUvQztJQUNJLHVEQUE4QztZQUE5QywrQ0FBOEMsRUFBQTtFQUVsRDtJQUNJLHFEQUE0QztZQUE1Qyw2Q0FBNEMsRUFBQTtFQUVoRDtJQUNJLG9EQUEyQztZQUEzQyw0Q0FBMkMsRUFBQTtFQUUvQztJQUNJLHFEQUE0QztZQUE1Qyw2Q0FBNEMsRUFBQTtFQUVoRDtJQUNJLHNEQUE2QztZQUE3Qyw4Q0FBNkMsRUFBQTtFQUVqRDtJQUNJLHFEQUE0QztZQUE1Qyw2Q0FBNEMsRUFBQTtFQUVoRDtJQUNJLHFEQUE0QztZQUE1Qyw2Q0FBNEMsRUFBQTtFQUVoRDtJQUNJLHNEQUE2QztZQUE3Qyw4Q0FBNkMsRUFBQTtFQUVqRDtJQUNJLG9EQUEyQztZQUEzQyw0Q0FBMkMsRUFBQTtFQUUvQztJQUNJLHNEQUE2QztZQUE3Qyw4Q0FBNkMsRUFBQSxFQUFBOztBQWhDckQ7RUFDSTtJQUNJLG9EQUEyQztZQUEzQyw0Q0FBMkMsRUFBQTtFQUUvQztJQUNJLHVEQUE4QztZQUE5QywrQ0FBOEMsRUFBQTtFQUVsRDtJQUNJLHFEQUE0QztZQUE1Qyw2Q0FBNEMsRUFBQTtFQUVoRDtJQUNJLG9EQUEyQztZQUEzQyw0Q0FBMkMsRUFBQTtFQUUvQztJQUNJLHFEQUE0QztZQUE1Qyw2Q0FBNEMsRUFBQTtFQUVoRDtJQUNJLHNEQUE2QztZQUE3Qyw4Q0FBNkMsRUFBQTtFQUVqRDtJQUNJLHFEQUE0QztZQUE1Qyw2Q0FBNEMsRUFBQTtFQUVoRDtJQUNJLHFEQUE0QztZQUE1Qyw2Q0FBNEMsRUFBQTtFQUVoRDtJQUNJLHNEQUE2QztZQUE3Qyw4Q0FBNkMsRUFBQTtFQUVqRDtJQUNJLG9EQUEyQztZQUEzQyw0Q0FBMkMsRUFBQTtFQUUvQztJQUNJLHNEQUE2QztZQUE3Qyw4Q0FBNkMsRUFBQSxFQUFBOztBQUlyRDtFQUNJLHVCQUE0QztFQUM1Qyx3QkFBNkM7RUFDN0MsOEJBQXFCO1VBQXJCLHNCQUFxQjtFQUNyQiw0Q0FBbUM7VUFBbkMsb0NBQW1DO0VBQ25DLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLFlBaERxQjtFQWlEckIsYUFqRHFCO0VBa0RyQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksdUJBQXNCLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kYXNoYm9hcmQvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi90aGVtZS5zY3NzXCI7XG4kYnJhbmRpbmctaW1nLXdpZHRoOiAzNnB4O1xuJGJyYW5kaW5nLWltZy13aWR0aC1zbWFsbDogMzZweDtcbiRicmFuZGluZy1pbWctd2lkdGgtc2NyZWFtOiA0OHB4O1xuQGtleWZyYW1lcyBzaGFrZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDFweCkgcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAwcHgpIHJvdGF0ZSgxZGVnKTtcbiAgICB9XG4gICAgMzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAycHgpIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCkgcm90YXRlKC0xZGVnKTtcbiAgICB9XG4gICAgNjAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMXB4KSByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgMXB4KSByb3RhdGUoLTFkZWcpO1xuICAgIH1cbiAgICA4MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7XG4gICAgfVxuICAgIDkwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMnB4KSByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIC0ycHgpIHJvdGF0ZSgtMWRlZyk7XG4gICAgfVxufVxuXG4uYWxlcnQtaW1hZ2Uge1xuICAgIHdpZHRoOiAkYnJhbmRpbmctaW1nLXdpZHRoLXNjcmVhbSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogJGJyYW5kaW5nLWltZy13aWR0aC1zY3JlYW0gIWltcG9ydGFudDtcbiAgICBhbmltYXRpb246IHNoYWtlIDAuN3M7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnJhbmRpbmcgaW1nIHtcbiAgICB3aWR0aDogJGJyYW5kaW5nLWltZy13aWR0aDtcbiAgICBoZWlnaHQ6ICRicmFuZGluZy1pbWctd2lkdGg7XG4gICAgbWFyZ2luOiAwIDEycHg7XG59XG5cbi9kZWVwLyAuY29udGVudC1jb250YWluZXI+Lm5nLXN0YXItaW5zZXJ0ZWQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/dashboard/dashboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/dashboard/dashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/user.service */ "./src/app/core/services/user.service.ts");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(us, auth, router) {
        var _this = this;
        this.us = us;
        this.auth = auth;
        this.router = router;
        this.screaming = false;
        us.getUser().subscribe(function (user) {
            _this.user = user;
        });
    }
    DashboardComponent.prototype.logout = function () {
        this.auth.signOut();
        this.router.navigateByUrl("login");
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/modules/dashboard/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/dashboard/pages/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/dashboard/pages/report/report.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/report/report.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"content-area\" *ngIf=\"activeReport != null\">\n    <div class=\"clr-row\">\n      <div class=\"clr-col-3\">\n        <app-schedule [schedule]=\"activeReport.schedule\" (save)=\"updateSchedule($event)\"></app-schedule>\n      </div>\n      <div class=\"clr-col-5\">\n        <app-questions [questions]=\"activeReport.questions\" (save)=\"updateQuestions($event)\"></app-questions>\n      </div>\n    </div>\n    <div class=\"clr-row\">\n      <div class=\"clr-col-3\">\n        <app-participants [members]=\"activeReport.selectedMembers\" (save)=\"updateMembers($event)\"></app-participants>\n      </div>\n    </div>\n  </div>\n  <nav class=\"sidenav\">\n    <section class=\"sidenav-content\" >\n      <a class=\"nav-link\" *ngFor=\"let r of reports\" (click)=\"setActiveReport(r)\" [class.active]=\"isActiveReport(r)\">\n        {{r.name}}\n      </a>\n      <a class=\"nav-link\" (click)=\"openWizard()\">\n        <clr-icon shape=\"plus\"></clr-icon> Add new report\n      </a>\n    </section>\n  </nav>\n</div>\n<app-creation-wizard #creationWizard></app-creation-wizard>"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/report/report.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/report/report.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex: 1 1 auto;\n  min-height: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x1a2FzL0NvZGluZy9zdGFuZHJvaWQvc3RhbmRyb2lkLXdlYi9zcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL3BhZ2VzL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFZO0VBQ1osWUFBVztFQUNYLGNBQWE7RUFDYixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Rhc2hib2FyZC9wYWdlcy9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3RoZW1lLnNjc3NcIjtcbi53cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/dashboard/pages/report/report.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/dashboard/pages/report/report.component.ts ***!
  \********************************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _shared_components_creation_wizard_creation_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/creation-wizard/creation-wizard.component */ "./src/app/shared/components/creation-wizard/creation-wizard.component.ts");
/* harmony import */ var _app_core_services_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/report.service */ "./src/app/core/services/report.service.ts");





var ReportComponent = /** @class */ (function () {
    function ReportComponent(afs, rs) {
        var _this = this;
        this.afs = afs;
        this.rs = rs;
        this.reports = [];
        rs.getReports().subscribe(function (reports) {
            _this.reports = reports;
            if (_this.activeReport == null && _this.reports.length > 0) {
                _this.activeReport = reports[0];
            }
        });
    }
    ReportComponent.prototype.setActiveReport = function (report) {
        this.activeReport = report;
    };
    ReportComponent.prototype.isActiveReport = function (report) {
        return this.activeReport != null && report.uid === this.activeReport.uid;
    };
    ReportComponent.prototype.openWizard = function () {
        this.creationWizard.wizardOpen = true;
    };
    ReportComponent.prototype.updateSchedule = function (schedule) {
        this.rs.updateSchedule(this.activeReport, schedule);
    };
    ReportComponent.prototype.updateQuestions = function (questions) {
        this.rs.updateQuestions(this.activeReport, questions);
    };
    ReportComponent.prototype.updateMembers = function (members) {
        this.rs.updateMembers(this.activeReport, members);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("creationWizard"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_components_creation_wizard_creation_wizard_component__WEBPACK_IMPORTED_MODULE_3__["CreationWizardComponent"])
    ], ReportComponent.prototype, "creationWizard", void 0);
    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/modules/dashboard/pages/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.scss */ "./src/app/modules/dashboard/pages/report/report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _app_core_services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/modules/login/pages/email-verification/email-verification.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/login/pages/email-verification/email-verification.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n\t<div class=\"login\">\n\t\t<section class=\"title\">\n\t\t\t<h3 class=\"welcome\">Please complete your</h3>\n\t\t\tEmail verification\n\t\t\t<h5>An email has been sent to your address. Please click the link inside it to verify, that this is your email\n\t\t\t\taddress. After you have verified your address, you can log in.</h5>\n\t\t</section>\n\t\t<div class=\"login-group\">\n\t\t\t<div class=\"btn-group btn-primary\">\n\t\t\t\t<input type=\"button\" class=\"btn btn-primary\" value=\"Resend Email\" (click)=\"resendEmail()\" />\n\t\t\t\t<input type=\"button\" class=\"btn btn-primary\" value=\"Go to Login\" (click)=\"redirectToLogin()\" />\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/modules/login/pages/email-verification/email-verification.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/login/pages/email-verification/email-verification.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-group .email {\n  margin: .25rem 0 .75rem; }\n\n.login-wrapper {\n  background: url('camouflage2.png'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x1a2FzL0NvZGluZy9zdGFuZHJvaWQvc3RhbmRyb2lkLXdlYi9zcmMvYXBwL21vZHVsZXMvbG9naW4vcGFnZXMvZW1haWwtdmVyaWZpY2F0aW9uL2VtYWlsLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLG1DQUE0RCxFQUMvRCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4vcGFnZXMvZW1haWwtdmVyaWZpY2F0aW9uL2VtYWlsLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi90aGVtZS5zY3NzXCI7XG4ubG9naW4tZ3JvdXAgLmVtYWlsIHtcbiAgICBtYXJnaW46IC4yNXJlbSAwIC43NXJlbTtcbn1cblxuLmxvZ2luLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvY2Ftb3VmbGFnZTIucG5nXCIpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/login/pages/email-verification/email-verification.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/login/pages/email-verification/email-verification.component.ts ***!
  \****************************************************************************************/
/*! exports provided: EmailVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerificationComponent", function() { return EmailVerificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");




var EmailVerificationComponent = /** @class */ (function () {
    function EmailVerificationComponent(router, auth) {
        var _this = this;
        this.router = router;
        this.auth = auth;
        auth.user.subscribe(function (user) {
            if (!!user && user.emailVerified === true) {
                _this.redirectToLogin();
            }
            else {
                _this.unverfifiedUser = user;
                var userReload_1 = setInterval(function () {
                    _this.unverfifiedUser.reload();
                    if (_this.unverfifiedUser.emailVerified === true) {
                        clearInterval(userReload_1);
                        _this.redirectToLogin();
                    }
                }, 3000);
            }
        });
    }
    EmailVerificationComponent.prototype.redirectToLogin = function () {
        this.router.navigateByUrl("login");
    };
    EmailVerificationComponent.prototype.resendEmail = function () {
        this.auth.user.subscribe(function (user) {
            user.sendEmailVerification();
        });
    };
    EmailVerificationComponent.prototype.ngOnInit = function () {
    };
    EmailVerificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-verification',
            template: __webpack_require__(/*! ./email-verification.component.html */ "./src/app/modules/login/pages/email-verification/email-verification.component.html"),
            styles: [__webpack_require__(/*! ./email-verification.component.scss */ "./src/app/modules/login/pages/email-verification/email-verification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], EmailVerificationComponent);
    return EmailVerificationComponent;
}());



/***/ }),

/***/ "./src/app/modules/login/pages/login/login.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/login/pages/login/login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n\t<div class=\"login\">\n\t\t<section class=\"title\">\n\t\t\t<h3 class=\"welcome\">Welcome to your</h3>\n\t\t\tStandup Sergeant\n\t\t</section>\n\t\t<div class=\"login-group\">\n\t\t\t<input #email class=\"email\" type=\"email\" name=\"email\" placeholder=\"Email\" required>\n\t\t\t<input #password class=\"password\" type=\"password\" name=\"password\" placeholder=\"Password\" required minlength=\"8\">\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<input type=\"checkbox\" id=\"rememberme\" name=\"rememberme\">\n\t\t\t\t<label for=\"rememberme\">\n\t\t\t\t\tRemember me\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"error\" [class.active]=\"loginError\">\n\t\t\t\tInvalid email or password\n\t\t\t</div>\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"login(email.value, password.value)\">Login</button>\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"loginWithGoogle()\">Login with Google</button>\n\t\t\t<a [routerLink]=\"['/register']\" class=\"signup\">Don't have a Standup Sergeant yet? Register now</a>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/modules/login/pages/login/login.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/login/pages/login/login.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-group .email {\n  margin: .25rem 0 .75rem; }\n\n.btn.btn-primary:nth-of-type(2) {\n  margin-top: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x1a2FzL0NvZGluZy9zdGFuZHJvaWQvc3RhbmRyb2lkLXdlYi9zcmMvYXBwL21vZHVsZXMvbG9naW4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx3QkFBdUIsRUFDMUI7O0FBTUQ7RUFDSSxpQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vdGhlbWUuc2Nzc1wiO1xuLmxvZ2luLWdyb3VwIC5lbWFpbCB7XG4gICAgbWFyZ2luOiAuMjVyZW0gMCAuNzVyZW07XG59XG5cbi5sb2dpbi13cmFwcGVyIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2NhbW91ZmxhZ2UyLnBuZ1wiKTtcbn1cblxuLmJ0bi5idG4tcHJpbWFyeTpudGgtb2YtdHlwZSgyKXtcbiAgICBtYXJnaW4tdG9wOjEycHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/login/pages/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/login/pages/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core_services_installation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/installation.service */ "./src/app/core/services/installation.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, is) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.is = is;
        this.auth.user.subscribe(function (user) {
            if (!!user) {
                _this.is.hasInstallation().then(function (v) {
                    if (v === true) {
                        _this.redirectToSecurePage();
                    }
                    else {
                        _this.redirectToInstall();
                    }
                });
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function (email, password) {
        var _this = this;
        this.auth
            .emailAndPasswordLogin(email, password)
            .then(function (credentials) {
            _this.redirectToSecurePage();
        })
            .catch(function (reason) {
            _this.loginError = reason.message;
        });
    };
    LoginComponent.prototype.loginWithGoogle = function () {
        var _this = this;
        this.auth
            .googleLogin()
            .then(function () {
            _this.redirectToSecurePage();
        })
            .catch(function (reason) {
            _this.loginError = reason.message;
        });
    };
    LoginComponent.prototype.redirectToSecurePage = function () {
        this.router.navigateByUrl("dashboard");
    };
    LoginComponent.prototype.redirectToInstall = function () {
        this.router.navigateByUrl("install");
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/login/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/login/pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _app_core_services_installation_service__WEBPACK_IMPORTED_MODULE_4__["InstallationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/login/pages/register/register.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/login/pages/register/register.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n\t<div class=\"login\">\n\t\t<section class=\"title\">\n\t\t\t<h3 class=\"welcome\">Get your own</h3>\n\t\t\tStandup Sergeant\n\t\t</section>\n\t\t<div class=\"login-group\">\n\t\t\t<input #email class=\"email\" type=\"email\" name=\"email\" placeholder=\"Email\" required>\n\t\t\t<input #password class=\"password\" type=\"password\" name=\"password\" placeholder=\"Password\" required minlength=\"8\">\n\t\t\t<input #repeatpassword class=\"password\" type=\"password\" name=\"repeatpassword\" placeholder=\"Repeat the Password\"\n\t\t\t required minlength=\"8\">\n\t\t\t<div *ngIf=\"registerError\" class=\"error\" [class.active]=\"registerError\">\n\t\t\t\t{{registerError}}\n\t\t\t</div>\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"register(email.value, password.value, repeatpassword.value)\">Register</button>\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"registerWithGoogle()\">Register with Google</button>\n\t\t\t<a [routerLink]=\"['/login']\" class=\"signup\">Already have a sergeant? Log in</a>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/modules/login/pages/register/register.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/login/pages/register/register.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-group .email {\n  margin: .25rem 0 .75rem; }\n\n.btn.btn-primary:nth-of-type(2) {\n  margin-top: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x1a2FzL0NvZGluZy9zdGFuZHJvaWQvc3RhbmRyb2lkLXdlYi9zcmMvYXBwL21vZHVsZXMvbG9naW4vcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx3QkFBdUIsRUFDMUI7O0FBSUQ7RUFDSSxpQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4vcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vdGhlbWUuc2Nzc1wiO1xuLmxvZ2luLWdyb3VwIC5lbWFpbCB7XG4gICAgbWFyZ2luOiAuMjVyZW0gMCAuNzVyZW07XG59XG4ubG9naW4td3JhcHBlciB7XG4gICAgLy8gYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9jYW1vdWZsYWdlMi5wbmdcIik7XG59XG4uYnRuLmJ0bi1wcmltYXJ5Om50aC1vZi10eXBlKDIpe1xuICAgIG1hcmdpbi10b3A6MTJweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/login/pages/register/register.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/login/pages/register/register.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (email, password, repeatPassword) {
        var _this = this;
        this.registerError = null;
        if (!password || !repeatPassword) {
            this.registerError = "Both passwords need to be entered.";
            return;
        }
        if (password !== repeatPassword) {
            this.registerError = "The passwords are not the same.";
            return;
        }
        this.auth.register(email, password)
            .then(function () {
            _this.redirectToVerificationPage();
        })
            .catch(function (reason) {
            _this.registerError = reason.message;
        });
    };
    RegisterComponent.prototype.registerWithGoogle = function () {
        var _this = this;
        this.registerError = null;
        this.auth.googleLogin()
            .then(function () {
            _this.redirectToLogin();
        })
            .catch(function (reason) {
            _this.registerError = reason.message;
        });
    };
    RegisterComponent.prototype.redirectToVerificationPage = function () {
        this.router.navigateByUrl("email-verification");
    };
    RegisterComponent.prototype.redirectToLogin = function () {
        this.router.navigateByUrl("login");
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/modules/login/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/modules/login/pages/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/modules/setup/components/failure/failure.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/setup/components/failure/failure.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <clr-icon shape=\"error-standard\"></clr-icon>\n  <h4>Ooops, something went wrong</h4>\n</div>\n<span>Something in the process of adding the app to your workspace did not work out. You can either try again, contact\n  your administrator or, if nothing works out, contact our support to help you. You might have to go to your slack apps\n  and remove our app manually before trying again.</span>"

/***/ }),

/***/ "./src/app/modules/setup/components/failure/failure.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/setup/components/failure/failure.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  margin: 0;\n  padding: 0;\n  margin-left: 5px; }\n\ndiv {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x1a2FzL0NvZGluZy9zdGFuZHJvaWQvc3RhbmRyb2lkLXdlYi9zcmMvYXBwL21vZHVsZXMvc2V0dXAvY29tcG9uZW50cy9mYWlsdXJlL2ZhaWx1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxVQUFTO0VBQ1QsV0FBVTtFQUNWLGlCQUFnQixFQUNoQjs7QUFFRDtFQUNDLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsb0JBQW1CLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zZXR1cC9jb21wb25lbnRzL2ZhaWx1cmUvZmFpbHVyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg0e1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbmRpdntcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/setup/components/failure/failure.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/setup/components/failure/failure.component.ts ***!
  \***********************************************************************/
/*! exports provided: FailureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailureComponent", function() { return FailureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FailureComponent = /** @class */ (function () {
    function FailureComponent() {
    }
    FailureComponent.prototype.ngOnInit = function () {
    };
    FailureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-failure',
            template: __webpack_require__(/*! ./failure.component.html */ "./src/app/modules/setup/components/failure/failure.component.html"),
            styles: [__webpack_require__(/*! ./failure.component.scss */ "./src/app/modules/setup/components/failure/failure.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FailureComponent);
    return FailureComponent;
}());



/***/ }),

/***/ "./src/app/modules/setup/components/success/success.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/setup/components/success/success.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <clr-icon shape=\"success-standard\"></clr-icon>\n  <h4>Installation was successful</h4>\n</div>\n<span>You successfully added the app to your workspace and you were assigned the creator and primary administrator of\n  this app. You may change this later on, in the dashboard.</span>"

/***/ }),

/***/ "./src/app/modules/setup/components/success/success.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/setup/components/success/success.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  margin: 0;\n  padding: 0;\n  margin-left: 5px; }\n\ndiv {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x1a2FzL0NvZGluZy9zdGFuZHJvaWQvc3RhbmRyb2lkLXdlYi9zcmMvYXBwL21vZHVsZXMvc2V0dXAvY29tcG9uZW50cy9zdWNjZXNzL3N1Y2Nlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxVQUFTO0VBQ1QsV0FBVTtFQUNWLGlCQUFnQixFQUNoQjs7QUFFRDtFQUNDLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsb0JBQW1CLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zZXR1cC9jb21wb25lbnRzL3N1Y2Nlc3Mvc3VjY2Vzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg0e1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbmRpdntcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/setup/components/success/success.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/setup/components/success/success.component.ts ***!
  \***********************************************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SuccessComponent = /** @class */ (function () {
    function SuccessComponent() {
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! ./success.component.html */ "./src/app/modules/setup/components/success/success.component.html"),
            styles: [__webpack_require__(/*! ./success.component.scss */ "./src/app/modules/setup/components/success/success.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/app/modules/setup/pages/install/install.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/setup/pages/install/install.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <clr-wizard #wizard [(clrWizardOpen)]=\"wizardOpen\" (clrWizardOnCancel)=\"doCancel()\" [clrWizardPreventDefaultCancel]=\"true\">\n    <clr-wizard-title>Installation</clr-wizard-title>\n\n    <clr-wizard-button [type]=\"'finish'\" (click)=\"redirectToSetup()\">Finish</clr-wizard-button>\n\n    <clr-wizard-page [clrWizardPageNextDisabled]=\"!success\">\n      <ng-template clrPageTitle>Install to workspace</ng-template>\n      <span>Before being able to configure your first report, you have to install our App to your Slack workspace.\n        This\n        should be a rather smooth process, but you might need administrator privileges. If you don't have them, contact\n        somebody who has them and let them install this app. You will still be able to create reports and use all\n        features, but the administrator has to give you those rights after installing the app.</span>\n      <br />\n      <a *ngIf=\"!success\" class=\"slack-link\" (click)=\"authorizeSlack()\"><img alt=\"Add to Slack\" height=\"40\" width=\"139\" src=\"https://platform.slack-edge.com/img/add_to_slack.png\"\n          srcset=\"https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x\" /></a>\n      <br />\n      <router-outlet></router-outlet>\n    </clr-wizard-page>\n  </clr-wizard>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/setup/pages/install/install.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/setup/pages/install/install.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.background {\n  min-height: 100vh;\n  width: 100%; }\n\na.slack-link {\n  display: block;\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x1a2FzL0NvZGluZy9zdGFuZHJvaWQvc3RhbmRyb2lkLXdlYi9zcmMvYXBwL21vZHVsZXMvc2V0dXAvcGFnZXMvaW5zdGFsbC9pbnN0YWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQWlCO0VBQ2pCLFlBQVcsRUFLZDs7QUFDRDtFQUNDLGVBQWE7RUFDYixpQkFBZ0IsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NldHVwL3BhZ2VzL2luc3RhbGwvaW5zdGFsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi90aGVtZS5zY3NzXCI7XG5kaXYuYmFja2dyb3VuZCB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9jYW1vdWZsYWdlMy5wbmdcIik7XG4gICAgLy8gL2RlZXAvIC5tb2RhbC1iYWNrZHJvcCB7XG4gICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xuICAgIC8vIH1cbn1cbmEuc2xhY2stbGlua3tcblx0ZGlzcGxheTpibG9jaztcblx0bWFyZ2luLXRvcDogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/setup/pages/install/install.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/setup/pages/install/install.component.ts ***!
  \******************************************************************/
/*! exports provided: InstallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallComponent", function() { return InstallComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var InstallComponent = /** @class */ (function () {
    function InstallComponent(auth, router, afs) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.afs = afs;
        this.wizardOpen = true;
        this.success = false;
        auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).toPromise().then(function (user) {
            _this.user = user;
        }).then(function () {
            _this.installation = _this.afs.collection("installations", function (ref) {
                if (_this.user == null) {
                    return ref;
                }
                return ref.where("creator_uid", "==", _this.user.uid);
            }).valueChanges();
        }).then(function () {
            _this.checkInstallation();
        });
    }
    InstallComponent.prototype.ngOnInit = function () {
    };
    InstallComponent.prototype.authorizeSlack = function () {
        // tslint:disable-next-line:max-line-length
        var link = "https://slack.com/oauth/authorize?client_id=501993948962.501928801988&state=" + this.user.uid + "&scope=incoming-webhook,commands,bot,users:read";
        var popup = window.open(link, "Slack Verification", "width=700,height=700");
    };
    InstallComponent.prototype.checkInstallation = function () {
        var _this = this;
        this.installation.subscribe(function (v) {
            if (v.length > 0 && v[0].creator_uid === _this.user.uid) {
                _this.showInstallationSuccess();
            }
        });
    };
    InstallComponent.prototype.showInstallationSuccess = function () {
        this.router.navigateByUrl("install/success");
        this.success = true;
    };
    InstallComponent.prototype.doCancel = function () {
        // Ignore
    };
    InstallComponent.prototype.redirectToSetup = function () {
        this.router.navigateByUrl("setup");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("wizard"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrWizard"])
    ], InstallComponent.prototype, "wizard", void 0);
    InstallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-install',
            template: __webpack_require__(/*! ./install.component.html */ "./src/app/modules/setup/pages/install/install.component.html"),
            styles: [__webpack_require__(/*! ./install.component.scss */ "./src/app/modules/setup/pages/install/install.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], InstallComponent);
    return InstallComponent;
}());



/***/ }),

/***/ "./src/app/modules/setup/pages/setup/setup.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/setup/pages/setup/setup.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <app-creation-wizard [first]=\"true\"></app-creation-wizard>\n</div>"

/***/ }),

/***/ "./src/app/modules/setup/pages/setup/setup.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/setup/pages/setup/setup.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.background {\n  min-height: 100vh;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x1a2FzL0NvZGluZy9zdGFuZHJvaWQvc3RhbmRyb2lkLXdlYi9zcmMvYXBwL21vZHVsZXMvc2V0dXAvcGFnZXMvc2V0dXAvc2V0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUtkIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zZXR1cC9wYWdlcy9zZXR1cC9zZXR1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi90aGVtZS5zY3NzXCI7XG5kaXYuYmFja2dyb3VuZCB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9jYW1vdWZsYWdlMy5wbmdcIik7XG4gICAgLy8gL2RlZXAvIC5tb2RhbC1iYWNrZHJvcCB7XG4gICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xuICAgIC8vIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/setup/pages/setup/setup.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/setup/pages/setup/setup.component.ts ***!
  \**************************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SetupComponent = /** @class */ (function () {
    function SetupComponent() {
    }
    SetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setup',
            template: __webpack_require__(/*! ./setup.component.html */ "./src/app/modules/setup/pages/setup/setup.component.html"),
            styles: [__webpack_require__(/*! ./setup.component.scss */ "./src/app/modules/setup/pages/setup/setup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SetupComponent);
    return SetupComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/creation-wizard/creation-wizard.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/creation-wizard/creation-wizard.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-wizard #wizard [(clrWizardOpen)]=\"wizardOpen\" (clrWizardOnCancel)=\"doCancel()\" [clrWizardPreventDefaultCancel]=\"true\">\n  <clr-wizard-title>{{first ? \"Create first report\": \"Create new report\"}}</clr-wizard-title>\n\n  <clr-wizard-button [type]=\"'cancel'\">Cancel</clr-wizard-button>\n  <clr-wizard-button [type]=\"'previous'\">Back</clr-wizard-button>\n  <clr-wizard-button [type]=\"'next'\">Next</clr-wizard-button>\n  <clr-wizard-button [type]=\"'finish'\" (click)=\"saveReport()\">Finish</clr-wizard-button>\n\n  <clr-wizard-page [clrWizardPageNextDisabled]=\"!formPageOne.valid\">\n    <ng-template clrPageTitle>Name your report</ng-template>\n    <form #formPageOne=\"ngForm\">\n      <section class=\"form-block\">\n        <label>Enter a name for the report</label>\n        <div class=\"form-group\">\n          <label for=\"nameInput\" aria-haspopup=\"true\" role=\"tooltip\" [class.invalid]=\"name.touched && !name.valid\"\n            class=\"tooltip tooltip-validation tooltip-md tooltip-bottom-right\">\n            <input type=\"text\" id=\"nameInput\" required [(ngModel)]=\"report.name\" name=\"name\" #name=\"ngModel\">\n            <span class=\"tooltip-content\">This field cannot be empty!</span>\n          </label>\n        </div>\n      </section>\n    </form>\n  </clr-wizard-page>\n\n  <clr-wizard-page [clrWizardPageNextDisabled]=\"!anyDayChecked() || !formPageTwo.valid\">\n    <ng-template clrPageTitle>Set up a schedule</ng-template>\n    <form #formPageTwo=\"ngForm\">\n      <section class=\"form-block\">\n        <label>Pick the week days</label>\n        <clr-checkbox-container>\n          <clr-checkbox-wrapper>\n            <input type=\"checkbox\" clrCheckbox #monday [checked]=\"report.schedule.monday\" (change)=\"report.schedule.monday = !report.schedule.monday\"\n              name=\"options\" />\n            <label>Monday</label>\n          </clr-checkbox-wrapper>\n          <clr-checkbox-wrapper>\n            <input type=\"checkbox\" clrCheckbox #tuesday [checked]=\"report.schedule.tuesday\" (change)=\"report.schedule.tuesday = !report.schedule.tuesday\"\n              name=\"options\" />\n            <label>Tuesday</label>\n          </clr-checkbox-wrapper>\n          <clr-checkbox-wrapper>\n            <input type=\"checkbox\" clrCheckbox #wednesday [checked]=\"report.schedule.wednesday\" (change)=\"report.schedule.wednesday = !report.schedule.wednesday\"\n              name=\"options\" />\n            <label>Wednesday</label>\n          </clr-checkbox-wrapper>\n          <clr-checkbox-wrapper>\n            <input type=\"checkbox\" clrCheckbox #thursday [checked]=\"report.schedule.thursday\" (change)=\"report.schedule.thursday = !report.schedule.thursday\"\n              name=\"options\" />\n            <label>Thursday</label>\n          </clr-checkbox-wrapper>\n          <clr-checkbox-wrapper>\n            <input type=\"checkbox\" clrCheckbox #friday [checked]=\"report.schedule.friday\" (change)=\"report.schedule.friday = !report.schedule.friday\"\n              name=\"options\" />\n            <label>Friday</label>\n          </clr-checkbox-wrapper>\n          <clr-checkbox-wrapper>\n            <input type=\"checkbox\" clrCheckbox #saturday [checked]=\"report.schedule.saturday\" (change)=\"report.schedule.saturday = !report.schedule.saturday\"\n              name=\"options\" />\n            <label>Saturday</label>\n          </clr-checkbox-wrapper>\n          <clr-checkbox-wrapper>\n            <input type=\"checkbox\" clrCheckbox #sunday [checked]=\"report.schedule.sunday\" (change)=\"report.schedule.sunday = !report.schedule.sunday\"\n              name=\"options\" />\n            <label>Sunday</label>\n          </clr-checkbox-wrapper>\n        </clr-checkbox-container>\n      </section>\n      <section class=\"form-block\">\n        <label for=\"select-full\" class=\"clr-control-label\">Time of day</label>\n        <div class=\"clr-control-container\">\n          <div class=\"clr-select-wrapper\">\n            <select id=\"select-hour\" class=\"clr-select\" [(ngModel)]=\"report.schedule.hour\" name=\"hours\">\n              <option *ngFor=\"let h of hours\" [ngValue]=\"h\">{{h}}</option>\n            </select>\n            <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n          </div>\n          <span class=\"clr-subtext\">Hour</span>\n        </div>\n        <div class=\"clr-control-container\">\n          <div class=\"clr-select-wrapper\">\n            <select id=\"select-minute\" class=\"clr-select\" [(ngModel)]=\"report.schedule.minute\" name=\"minutes\">\n              <option *ngFor=\"let m of minutes\" [ngValue]=\"m\">{{m}}</option>\n            </select>\n            <clr-icon class=\"clr-validate-icon\" shape=\"exclamation-circle\"></clr-icon>\n          </div>\n          <span class=\"clr-subtext\">Minute</span>\n        </div>\n      </section>\n    </form>\n  </clr-wizard-page>\n\n  <clr-wizard-page>\n    <ng-template clrPageTitle>Set up questions</ng-template>\n    <form #formPageOne=\"ngForm\">\n      <section class=\"form-block\">\n        <label>Enter the questions</label>\n        <div *ngFor=\"let q of report.questions; let idx = index\" class=\"questions-wrapper\">\n          <input clrInput placeholder=\"A question for the report\" name=\"{{q}}\" [value]=\"q\" (change)=\"report.questions[idx]=$event.target.value\" />\n          <button type=\"button\" class=\"btn btn-icon\" (click)=\"deleteQuestion(q)\">\n            <clr-icon shape=\"trash\"></clr-icon>\n          </button>\n        </div>\n        <button class=\"btn btn-primary\" (click)=\"addQuestion()\">\n          <clr-icon shape=\"plus\"></clr-icon> Add a question\n        </button>\n      </section>\n    </form>\n  </clr-wizard-page>\n\n  <clr-wizard-page>\n    <ng-template clrPageTitle>Assign participants</ng-template>\n    <form #formPageOne=\"ngForm\">\n      <section class=\"form-block\">\n        <label>Pick the team members for this report</label>\n        <br />\n        <a class=\"label clickable\" *ngFor=\"let stm of report.selectedMembers\" (click)=\"deselectTeamMember(stm.id)\">\n          {{stm.name}}\n          <clr-icon shape=\"window-close\"></clr-icon>\n        </a>\n        <select clrSelect name=\"options\" (change)=\"selectTeamMember($event.target.value)\">\n          <option *ngFor=\"let tm of teamMembers\" [value]=\"tm.id\">{{tm.name}}</option>\n        </select>\n      </section>\n    </form>\n  </clr-wizard-page>\n\n  <clr-wizard-page>\n    <ng-template clrPageTitle>Pick channel</ng-template>\n    <form #formPageOne=\"ngForm\">\n      <section class=\"form-block\">\n        <label>Pick the channel where the standups will be posted</label>\n        <br />\n        <select clrSelect name=\"options\" (change)=\"selectChannel($event.target.value)\">\n          <option *ngFor=\"let c of channels\" [value]=\"c.id\">{{c.name}}</option>\n        </select>\n      </section>\n    </form>\n  </clr-wizard-page>\n\n</clr-wizard>\n<clr-modal #reminder [(clrModalOpen)]=\"reminderModalOpen\">\n  <h3 class=\"modal-title\">You have not finished creating your report</h3>\n  <div class=\"modal-body\">\n    <p>You will be able to create a report in the dashboard, if you want to skip this step for now.</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline\" (click)=\"closeModal()\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"redirectToDashboard()\">Ok</button>\n  </div>\n</clr-modal>\n\n"

/***/ }),

/***/ "./src/app/shared/components/creation-wizard/creation-wizard.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/creation-wizard/creation-wizard.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ .clr-input-wrapper input {\n  width: 400px; }\n\n/deep/ .questions-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 50px; }\n\n/deep/ .questions-wrapper /deep/ .clr-form-control.ng-star-inserted {\n    margin: 0px; }\n\n/deep/ .questions-wrapper /deep/ .btn.btn-icon {\n    margin: 0;\n    margin-left: 10px; }\n\n/deep/ .form-block select:focus {\n  background-size: 100% 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x1a2FzL0NvZGluZy9zdGFuZHJvaWQvc3RhbmRyb2lkLXdlYi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NyZWF0aW9uLXdpemFyZC9jcmVhdGlvbi13aXphcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLG9CQUFtQjtFQUNuQixhQUFZLEVBUWY7O0FBWkQ7SUFNUSxZQUFXLEVBQ2Q7O0FBUEw7SUFTUSxVQUFTO0lBQ1Qsa0JBQWlCLEVBQ3BCOztBQUdMO0VBQ0ksc0NBQXFDLEVBQ3hDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY3JlYXRpb24td2l6YXJkL2NyZWF0aW9uLXdpemFyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS5zY3NzXCI7XG5cbi9kZWVwLyAuY2xyLWlucHV0LXdyYXBwZXIgaW5wdXQge1xuICAgIHdpZHRoOiA0MDBweDtcbn1cblxuL2RlZXAvIC5xdWVzdGlvbnMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIC9kZWVwLyAuY2xyLWZvcm0tY29udHJvbC5uZy1zdGFyLWluc2VydGVkIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICAgIC9kZWVwLyAuYnRuLmJ0bi1pY29uIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG59XG5cbi9kZWVwLyAuZm9ybS1ibG9jayBzZWxlY3Q6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/creation-wizard/creation-wizard.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/creation-wizard/creation-wizard.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreationWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreationWizardComponent", function() { return CreationWizardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core_services_slack_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/slack.service */ "./src/app/core/services/slack.service.ts");
/* harmony import */ var _app_core_services_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/report.service */ "./src/app/core/services/report.service.ts");






var CreationWizardComponent = /** @class */ (function () {
    function CreationWizardComponent(ss, router, rs) {
        var _this = this;
        this.ss = ss;
        this.router = router;
        this.rs = rs;
        this.first = false;
        this.wizardOpen = false;
        this.reminderModalOpen = false;
        this.report = {
            uid: "",
            creator_uid: "",
            team_id: "",
            name: "Daily Standup",
            schedule: {
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: true,
                friday: true,
                saturday: false,
                sunday: false,
                hour: 9,
                minute: 30,
            },
            questions: [
                "What did you do yesterday?",
                "What do plan on doing today?",
                "Did something hinder you with your work?",
                "Something worth mentioning?"
            ],
            selectedMembers: [],
            channel: null
        };
        this.hours = [];
        this.minutes = [];
        this.teamMembers = [];
        this.channels = [];
        for (var counter = 0; counter < 24; counter++) {
            this.hours.push(counter);
        }
        for (var counter = 0; counter < 60 / 5; counter++) {
            this.minutes.push(counter * 5);
        }
        ss.getTeamMembers().subscribe(function (members) { return _this.teamMembers = members; });
        ss.getChannels().subscribe(function (channels) { return _this.channels = channels; });
    }
    CreationWizardComponent.prototype.ngOnInit = function () {
        if (this.first) {
            this.wizard.open();
        }
    };
    CreationWizardComponent.prototype.anyDayChecked = function () {
        if (this.report.schedule.monday ||
            this.report.schedule.tuesday ||
            this.report.schedule.wednesday ||
            this.report.schedule.thursday ||
            this.report.schedule.friday ||
            this.report.schedule.saturday ||
            this.report.schedule.sunday) {
            return true;
        }
        return false;
    };
    CreationWizardComponent.prototype.doCancel = function () {
        if (this.first) {
            this.reminderModal.open();
        }
        else {
            this.wizard.close();
            this.resetWizard();
        }
    };
    CreationWizardComponent.prototype.closeModal = function () {
        this.reminderModal.close();
    };
    CreationWizardComponent.prototype.redirectToDashboard = function () {
        this.router.navigateByUrl("dashboard");
    };
    CreationWizardComponent.prototype.deleteQuestion = function (q) {
        var index = this.report.questions.indexOf(q);
        if (index !== -1) {
            this.report.questions.splice(index, 1);
        }
    };
    CreationWizardComponent.prototype.addQuestion = function () {
        this.report.questions.push("Another question");
    };
    CreationWizardComponent.prototype.selectChannel = function (id) {
        if (id === "-1") {
            return;
        }
        var index = -1;
        for (var i = 0; i < this.channels.length; i++) {
            if (this.channels[i].id === id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            this.report.channel = this.channels[index];
        }
    };
    CreationWizardComponent.prototype.selectTeamMember = function (id) {
        if (id === "-1") {
            return;
        }
        var index = -1;
        for (var i = 0; i < this.teamMembers.length; i++) {
            if (this.teamMembers[i].id === id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            var member = this.teamMembers.splice(index, 1);
            this.report.selectedMembers.push(member[0]);
        }
    };
    CreationWizardComponent.prototype.deselectTeamMember = function (id) {
        if (id === "-1") {
            return;
        }
        var index = -1;
        for (var i = 0; i < this.report.selectedMembers.length; i++) {
            if (this.report.selectedMembers[i].id === id) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            var member = this.report.selectedMembers.splice(index, 1);
            this.teamMembers.push(member[0]);
        }
    };
    CreationWizardComponent.prototype.saveReport = function () {
        // console.log(this.report);
        this.rs.createReport(this.report);
        if (this.first) {
            this.redirectToDashboard();
        }
    };
    CreationWizardComponent.prototype.resetWizard = function () {
        this.report = {
            uid: "",
            creator_uid: "",
            team_id: "",
            name: "Daily Standup",
            schedule: {
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: true,
                friday: true,
                saturday: false,
                sunday: false,
                hour: 9,
                minute: 30,
            },
            questions: [
                "What did you do yesterday?",
                "What do plan on doing today?",
                "Did something hinder you with your work?",
                "Something worth mentioning?"
            ],
            selectedMembers: [],
            channel: null
        };
        this.wizard.reset();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreationWizardComponent.prototype, "first", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("wizard"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrWizard"])
    ], CreationWizardComponent.prototype, "wizard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("reminder"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrModal"])
    ], CreationWizardComponent.prototype, "reminderModal", void 0);
    CreationWizardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-creation-wizard',
            template: __webpack_require__(/*! ./creation-wizard.component.html */ "./src/app/shared/components/creation-wizard/creation-wizard.component.html"),
            styles: [__webpack_require__(/*! ./creation-wizard.component.scss */ "./src/app/shared/components/creation-wizard/creation-wizard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_services_slack_service__WEBPACK_IMPORTED_MODULE_4__["SlackService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _app_core_services_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"]])
    ], CreationWizardComponent);
    return CreationWizardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/icon-button/icon-button.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/icon-button/icon-button.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-icon\">\n  <clr-icon [attr.shape]=\"type\"></clr-icon>\n</button>"

/***/ }),

/***/ "./src/app/shared/components/icon-button/icon-button.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/icon-button/icon-button.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ .btn.btn-icon {\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2x1a2FzL0NvZGluZy9zdGFuZHJvaWQvc3RhbmRyb2lkLXdlYi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ljb24tYnV0dG9uL2ljb24tYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksVUFBUyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaWNvbi1idXR0b24vaWNvbi1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUuc2Nzc1wiO1xuXG4vZGVlcC8gLmJ0bi5idG4taWNvbiB7XG4gICAgbWFyZ2luOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/icon-button/icon-button.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/icon-button/icon-button.component.ts ***!
  \************************************************************************/
/*! exports provided: IconButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButtonComponent", function() { return IconButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var IconButtonComponent = /** @class */ (function () {
    function IconButtonComponent() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    IconButtonComponent.prototype.triggerClick = function () {
        this.click.emit(null);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], IconButtonComponent.prototype, "click", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], IconButtonComponent.prototype, "type", void 0);
    IconButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-icon-button',
            template: __webpack_require__(/*! ./icon-button.component.html */ "./src/app/shared/components/icon-button/icon-button.component.html"),
            styles: [__webpack_require__(/*! ./icon-button.component.scss */ "./src/app/shared/components/icon-button/icon-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IconButtonComponent);
    return IconButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/link-button/link-button.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/link-button/link-button.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <button class=\"btn btn-sm btn-link\"><ng-content></ng-content></button>"

/***/ }),

/***/ "./src/app/shared/components/link-button/link-button.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/link-button/link-button.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xpbmstYnV0dG9uL2xpbmstYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/link-button/link-button.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/link-button/link-button.component.ts ***!
  \************************************************************************/
/*! exports provided: LinkButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkButtonComponent", function() { return LinkButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LinkButtonComponent = /** @class */ (function () {
    function LinkButtonComponent() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LinkButtonComponent.prototype.ngOnInit = function () {
    };
    LinkButtonComponent.prototype.triggerClick = function () {
        this.click.emit(null);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LinkButtonComponent.prototype, "click", void 0);
    LinkButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-link-button',
            template: __webpack_require__(/*! ./link-button.component.html */ "./src/app/shared/components/link-button/link-button.component.html"),
            styles: [__webpack_require__(/*! ./link-button.component.scss */ "./src/app/shared/components/link-button/link-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LinkButtonComponent);
    return LinkButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/outline-button/outline-button.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/outline-button/outline-button.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-outline\"><ng-content></ng-content></button>"

/***/ }),

/***/ "./src/app/shared/components/outline-button/outline-button.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/outline-button/outline-button.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL291dGxpbmUtYnV0dG9uL291dGxpbmUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/outline-button/outline-button.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/outline-button/outline-button.component.ts ***!
  \******************************************************************************/
/*! exports provided: OutlineButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineButtonComponent", function() { return OutlineButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OutlineButtonComponent = /** @class */ (function () {
    function OutlineButtonComponent() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    OutlineButtonComponent.prototype.ngOnInit = function () {
    };
    OutlineButtonComponent.prototype.triggerClick = function () {
        this.click.emit(null);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OutlineButtonComponent.prototype, "click", void 0);
    OutlineButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-outline-button',
            template: __webpack_require__(/*! ./outline-button.component.html */ "./src/app/shared/components/outline-button/outline-button.component.html"),
            styles: [__webpack_require__(/*! ./outline-button.component.scss */ "./src/app/shared/components/outline-button/outline-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OutlineButtonComponent);
    return OutlineButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/primary-button/primary-button.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/primary-button/primary-button.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-primary\" [disabled]=\"disabled\">\n  <ng-content></ng-content>\n</button>"

/***/ }),

/***/ "./src/app/shared/components/primary-button/primary-button.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/primary-button/primary-button.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3ByaW1hcnktYnV0dG9uL3ByaW1hcnktYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/primary-button/primary-button.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/primary-button/primary-button.component.ts ***!
  \******************************************************************************/
/*! exports provided: PrimaryButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryButtonComponent", function() { return PrimaryButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrimaryButtonComponent = /** @class */ (function () {
    function PrimaryButtonComponent() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PrimaryButtonComponent.prototype.ngOnInit = function () {
    };
    PrimaryButtonComponent.prototype.triggerClick = function () {
        this.click.emit(null);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PrimaryButtonComponent.prototype, "click", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PrimaryButtonComponent.prototype, "disabled", void 0);
    PrimaryButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-primary-button',
            template: __webpack_require__(/*! ./primary-button.component.html */ "./src/app/shared/components/primary-button/primary-button.component.html"),
            styles: [__webpack_require__(/*! ./primary-button.component.scss */ "./src/app/shared/components/primary-button/primary-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrimaryButtonComponent);
    return PrimaryButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/icon-button/icon-button.component */ "./src/app/shared/components/icon-button/icon-button.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_outline_button_outline_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/outline-button/outline-button.component */ "./src/app/shared/components/outline-button/outline-button.component.ts");
/* harmony import */ var _components_primary_button_primary_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/primary-button/primary-button.component */ "./src/app/shared/components/primary-button/primary-button.component.ts");
/* harmony import */ var _components_link_button_link_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/link-button/link-button.component */ "./src/app/shared/components/link-button/link-button.component.ts");
/* harmony import */ var _components_creation_wizard_creation_wizard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/creation-wizard/creation-wizard.component */ "./src/app/shared/components/creation-wizard/creation-wizard.component.ts");












var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            declarations: [
                _shared_components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__["IconButtonComponent"],
                _components_outline_button_outline_button_component__WEBPACK_IMPORTED_MODULE_8__["OutlineButtonComponent"],
                _components_primary_button_primary_button_component__WEBPACK_IMPORTED_MODULE_9__["PrimaryButtonComponent"],
                _components_link_button_link_button_component__WEBPACK_IMPORTED_MODULE_10__["LinkButtonComponent"],
                _components_creation_wizard_creation_wizard_component__WEBPACK_IMPORTED_MODULE_11__["CreationWizardComponent"]
            ],
            exports: [
                _shared_components_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_3__["IconButtonComponent"],
                _components_outline_button_outline_button_component__WEBPACK_IMPORTED_MODULE_8__["OutlineButtonComponent"],
                _components_primary_button_primary_button_component__WEBPACK_IMPORTED_MODULE_9__["PrimaryButtonComponent"],
                _components_link_button_link_button_component__WEBPACK_IMPORTED_MODULE_10__["LinkButtonComponent"],
                _components_creation_wizard_creation_wizard_component__WEBPACK_IMPORTED_MODULE_11__["CreationWizardComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



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
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDaGod4oNhi1VtkA_1rbP-CD9uLUT5twgo",
        authDomain: "standup-sgt.firebaseapp.com",
        databaseURL: "https://standup-sgt.firebaseio.com",
        projectId: "standup-sgt",
        storageBucket: "standup-sgt.appspot.com",
        messagingSenderId: "300464117827"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lukas/Coding/standroid/standroid-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map