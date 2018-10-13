// called by `481.js`
const function0 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(482), // ModelManager
        o = i(528), // ResourceManager
        r = i(531), // SceneManager
        s = i(267), // SoundManager
        a = i(535), // OptionModel
        _ = i(536), // SettingsModel
        u = i(537), // RootView
        l = function () {
        function t() {
            this._view = new u.RootView,
            this._settings = new _.SettingsModel,
            this._option = new a.OptionModel,
            this._option.initialize(),
            this._model = new n.ModelManager,
            this._resource = new o.ResourceManager,
            this._scene = new r.SceneManager,
            this._sound = new s.SoundManager
        }

        t._getInstance = function () {
            null == this._instance && (this._instance = new t);
            return this._instance
        };
        // getters
        Object.defineProperty(t, "view", {
            get: function () {
                return t._getInstance()._view
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t, "settings", {
            get: function () {
                return t._getInstance()._settings
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t, "option", {
            get: function () {
                return t._getInstance()._option
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t, "model", {
            get: function () {
                return t._getInstance()._model
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t, "resources", {
            get: function () {
                return t._getInstance()._resource
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t, "scene", {
            get: function () {
                return t._getInstance()._scene
            }, enumerable: !0, configurable: !0
        });
        Object.defineProperty(t, "sound", {
            get: function () {
                return t._getInstance()._sound
            }, enumerable: !0, configurable: !0
        });
        return t
    }();
    e.default = l
};