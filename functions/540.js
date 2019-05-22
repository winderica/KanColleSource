const function540 = function (t, e, i) {
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
        r = i(24),
        s = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.setImage = function (t, e) {
                switch (t) {
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 23:
                    case 31:
                        var i = r.MathUtil.zeroPadding(t, 3),
                            n = o.default.settings.path_root + "img/common/bg/" + i + ".png";
                        null != PIXI.utils.TextureCache[n] ? (this.texture = PIXI.utils.TextureCache[n], this.visible = !0, null != e && e()) : this._load(n, e);
                        break;
                    default:
                        this.visible = !1, null != e && e()
                }
            }, e.prototype._load = function (t, e) {
                var i = this;
                this._loader = new PIXI.loaders.Loader, this._loader.add(t), this._loader.load(function (n) {
                    if (i._loader == n) {
                        i._loader = null;
                        var o = n.resources[t];
                        i.texture = o.texture, i.visible = !0, null != e && e()
                    }
                })
            }, e
        }(PIXI.Sprite);
    e.Background = s
}