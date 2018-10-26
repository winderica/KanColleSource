const function185 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function (e, i) {
            function n() {
                this.constructor = e
            }

            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(0), r = i(18), s = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.load = function (t) {
            var e = this._getPath(t) + "?" + r.START_TIME;
            this.texture = PIXI.Texture.fromImage(e)
        }, e.prototype._getKeyName = function () {
            var t = location.hostname;
            if (t.match(/\./)) {
                for (var e = t.split("."), i = 0; i < e.length; i++) e[i] = ("00" + e[i]).slice(-3);
                return e.join("_")
            }
            return t
        }, e.prototype._getPath = function (t) {
            var e = this._getKeyName();
            return "title" == t ? o.default.settings.path_root + "resources/world/" + e + "_t.png" : "small" == t ? o.default.settings.path_root + "resources/world/" + e + "_s.png" : "large" == t ? o.default.settings.path_root + "resources/world/" + e + "_l.png" : void 0
        }, e
    }(PIXI.Sprite);
    e.WorldTextImage = s
}