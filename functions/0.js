const function0 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(489),
        o = i(536),
        r = i(539),
        s = i(269),
        a = i(543),
        _ = i(544),
        u = i(545),
        l = i(548),
        c = function () {
            function t() {
                this._view = new u.RootView, this._settings = new _.SettingsModel, this._option = new a.OptionModel, this._option.initialize(), this._model = new n.ModelManager, this._resource = new o.ResourceManager, this._scene = new r.SceneManager, this._sound = new s.SoundManager, this._friendlyRequest = new l.FriendlyRequestModel
            }
            return t._getInstance = function () {
                return null == this._instance && (this._instance = new t), this._instance
            }, Object.defineProperty(t, "view", {
                get: function () {
                    return t._getInstance()._view
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "settings", {
                get: function () {
                    return t._getInstance()._settings
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "option", {
                get: function () {
                    return t._getInstance()._option
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "model", {
                get: function () {
                    return t._getInstance()._model
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "resources", {
                get: function () {
                    return t._getInstance()._resource
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "scene", {
                get: function () {
                    return t._getInstance()._scene
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "sound", {
                get: function () {
                    return t._getInstance()._sound
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t, "friendlyRequest", {
                get: function () {
                    return t._getInstance()._friendlyRequest
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();
    e.default = c
}