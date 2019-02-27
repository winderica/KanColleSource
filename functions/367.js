const function367 = function (t, e, i) {
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
        r = i(17),
        s = i(15),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._area_id = -1, e
            }
            return n(e, t), e.prototype.update = function (t, e) {
                var i = this;
                if (void 0 === e && (e = null), this._area_id == t) return void(null != e && e());
                this._area_id = t;
                var n = s.MathUtil.zeroPadding(t, 3),
                    a = o.default.settings.path_root + "resources/area/sally/" + n + ".png";
                if (a = a + "?" + r.START_TIME, this.clear(), this._img = new PIXI.Sprite, this.addChild(this._img), null != PIXI.utils.TextureCache[a]) this._img.texture = PIXI.utils.TextureCache[a], null != e && e();
                else {
                    var _ = new PIXI.loaders.Loader;
                    _.add(a), _.load(function () {
                        i._img.texture = _.resources[a].texture, null != e && e()
                    })
                }
            }, e.prototype.clear = function () {
                null != this._img && (null != this._img.parent && this._img.parent.removeChild(this._img), this._img = null)
            }, e.prototype.dispose = function () {
                this.clear()
            }, e
        }(PIXI.Container);
    e.AreaTextImage = a
}