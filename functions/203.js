const function203 = function (t, e, i) {
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
    var o = i(0), r = i(17), s = i(23), a = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.setTexture = function (t) {
            this._loader = null, this.texture = t
        }, e.prototype.setImage = function (t, e, i) {
            void 0 === i && (i = null), this._load(t, e, i)
        }, e.prototype.dispose = function () {
            this._loader = null
        }, e.prototype._load = function (t, e, i) {
            var n = this, a = s.MathUtil.zeroPadding(t, 3), _ = s.MathUtil.zeroPadding(e, 2),
                u = o.default.settings.path_root + "resources/map/" + a + "/" + _ + ".png?" + r.START_TIME;
            if (null != PIXI.utils.TextureCache[u]) return this.texture = PIXI.utils.TextureCache[u], void(null != i && i());
            this._loader = new PIXI.loaders.Loader, this._loader.add(u), this._loader.load(function (t) {
                if (n._loader == t) {
                    n._loader = null;
                    var e = t.resources[u];
                    n.texture = e.texture, null != i && i()
                }
            })
        }, e
    }(PIXI.Sprite);
    e.MapThumbnailImage = a
}