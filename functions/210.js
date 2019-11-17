const function210 = function (t, e, i) {
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
        r = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.initiailzeGetBG1 = function (t) {
                this._load("g1", t)
            }, e.prototype.initiailzeGetBG2 = function (t) {
                this._load("g2", t)
            }, e.prototype.dispose = function () {
                this._loader = null
            }, e.prototype._load = function (t, e) {
                var i = this,
                    n = o.default.settings.path_root + "img/common/bg/" + t + ".png";
                if (null != PIXI.utils.TextureCache[n] && (this.texture = PIXI.utils.TextureCache[n], null != e)) return void e();
                this._loader = new PIXI.loaders.Loader, this._loader.add(n), this._loader.load(function (t) {
                    if (i._loader == t) {
                        i._loader = null;
                        var o = t.resources[n];
                        i.texture = o.texture, null != e && e()
                    }
                })
            }, e
        }(PIXI.Sprite);
    e.GetBG = r
}