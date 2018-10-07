// the function called by `475.js`
const function0 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: true });
    var n = i(476),
        o = i(522),
        r = i(525),
        s = i(271),
        a = i(529),
        _ = i(530),
        u = i(531),
        // l is class represent by IIFE
        l = function () {
            // `t` is a constructor
            function t() {
                this._view = new u.RootView;
                this._settings = new _.SettingsModel;
                this._option = new a.OptionModel;
                this._option.initialize();
                this._model = new n.ModelManager;
                this._resource = new o.ResourceManager;
                this._scene = new r.SceneManager;
                this._sound = new s.SoundManager;
            }

            // static method
            t._getInstance = function () {
                if (!this._instance) {
                    this._instance = new t;
                }
                return this._instance;
            };
            // static getters to get instance methods
            Object.defineProperty(t, "view", {
                get: function () {
                    return t._getInstance()._view
                }, enumerable: true, configurable: true
            });
            Object.defineProperty(t, "settings", {
                get: function () {
                    return t._getInstance()._settings
                }, enumerable: true, configurable: true
            });
            Object.defineProperty(t, "option", {
                get: function () {
                    return t._getInstance()._option
                }, enumerable: true, configurable: true
            });
            Object.defineProperty(t, "model", {
                get: function () {
                    return t._getInstance()._model
                }, enumerable: true, configurable: true
            });
            Object.defineProperty(t, "resources", {
                get: function () {
                    return t._getInstance()._resource
                }, enumerable: true, configurable: true
            });
            Object.defineProperty(t, "scene", {
                get: function () {
                    return t._getInstance()._scene
                }, enumerable: true, configurable: true
            });
            Object.defineProperty(t, "sound", {
                get: function () {
                    return t._getInstance()._sound
                }, enumerable: true, configurable: true
            });
            return t;
        }();
    e.default = l
};