const function563 = function (t, e, i) {
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
                var e = t.call(this) || this;
                return e._texture = null, e._caches = {}, e._img = new PIXI.Sprite, e._img.visible = !1, e.addChild(e._img), e
            }
            return n(e, t), e.prototype.load = function (t, e) {
                var i = this,
                    n = o.default.model.furniture.getData(t);
                if (null == n || 2 != n.type) return void(null != e && e());
                if (this._id = this._createID(n), 1 == this._caches.hasOwnProperty(this._id)) return this._texture = this._caches[this._id], void(null != e && e());
                var r = this._createURL(this._id),
                    s = new PIXI.loaders.Loader;
                s.add(this._id, r), s.load(function () {
                    if (i._img.texture = PIXI.Texture.EMPTY, 1 == s.resources.hasOwnProperty(i._id)) {
                        var t = s.resources[i._id];
                        null != t && null == t.error && null != t.texture && (i._caches[i._id] = t.texture, i._texture = t.texture)
                    }
                    e()
                })
            }, e.prototype.update = function () {
                null != this._texture && (this._img.texture = this._texture), this._texture = null, this._img.visible = !0
            }, e.prototype._createID = function (t) {
                var e, i = (new Date).getHours();
                return e = 20 <= i || i < 4 ? 4 : i < 8 ? 5 : i < 16 ? 1 : i < 18 ? 2 : 3, "window_bg_" + t.outside + "-" + e
            }, e.prototype._createURL = function (t) {
                return o.default.settings.path_root + "resources/furniture/outside/" + t + ".png"
            }, e
        }(PIXI.Container);
    e.FurnitureOutside = r
}