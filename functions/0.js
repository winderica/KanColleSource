const function0 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = i(490),
        o = i(537),
        r = i(540),
        s = i(274),
        a = i(544),
        _ = i(545),
        l = i(546),
        u = i(549),
        c = function () {
            function t() {
                this._view = new l.RootView, this._settings = new _.SettingsModel, this._option = new a.OptionModel, this._option.initialize(), this._model = new n.ModelManager, this._resource = new o.ResourceManager, this._scene = new r.SceneManager, this._sound = new s.SoundManager, this._friendlyRequest = new u.FriendlyRequestModel
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