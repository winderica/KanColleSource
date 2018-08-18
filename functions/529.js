const function529 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = i(7), o = function () {
        function t() {
        }

        return Object.defineProperty(t.prototype, "renderer", {
            get: function () {
                return this._args.renderer
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "path_root", {
            get: function () {
                return n.ObjUtil.getString(this._args, "path_root", "")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "voice_root", {
            get: function () {
                return n.ObjUtil.getString(this._args, "voice_root", null)
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "api_root", {
            get: function () {
                return n.ObjUtil.getString(this._args, "api_root", "/kcsapi")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "api_token", {
            get: function () {
                return n.ObjUtil.getString(this._args, "api_token")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "osapi_root", {
            get: function () {
                return n.ObjUtil.getString(this._args, "osapi_root")
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(t.prototype, "version", {
            get: function () {
                return n.ObjUtil.getString(this._args, "version")
            }, enumerable: !0, configurable: !0
        }), t.prototype.initialize = function (t) {
            this._args = t
        }, t
    }();
    e.SettingsModel = o
}