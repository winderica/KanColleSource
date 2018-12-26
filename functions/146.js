const function146 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(0),
        r = i(13),
        s = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.setDay = function (t) {
                this._load("bg_h", t)
            }, e.prototype.setNight = function (t) {
                this._load("bg_y", t)
            }, e.prototype.dispose = function () {
                this._loader = null
            }, e.prototype._load = function (t, e) {
                var i = this,
                    n = r.UIImageLoader.getVersion("map");
                n = n ? "?version=" + n : "";
                var s = o.default.settings.path_root + "img/common/bg_map/" + t + ".png" + n;
                if (null != PIXI.utils.TextureCache[s] && (this.texture = PIXI.utils.TextureCache[s], null != e)) return void e();
                this._loader = new PIXI.loaders.Loader, this._loader.add(s), this._loader.load(function (t) {
                    if (i._loader == t) {
                        i._loader = null;
                        var n = t.resources[s];
                        i.texture = n.texture, null != e && e()
                    }
                })
            }, e
        }(PIXI.Sprite);
    e.MapBG = s
}